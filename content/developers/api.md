---
title: "Lumen API v1: OpenAI-Compatible Chat, Cited"
description: "REST reference for Lumen API v1 — OpenAI-compatible chat completions with citations, pure retrieval, feedback, and a public OpenAPI 3.0 schema."
lead: "Point any OpenAI SDK at Lumen and get answers grounded in your Knowledge Packs — with the citations attached to every response."
weight: 1
keywords: ["lumen api", "openai compatible", "chat completions", "retrieval api", "citations"]
---

Base URL: `https://api.intracav.ai`

Four endpoints:

| Endpoint | What it does |
|---|---|
| `POST /api/v1/chat/completions` | OpenAI-shaped chat completion, grounded in your Knowledge Packs, with a `lumen` citation block |
| `POST /api/v1/retrieve` | Pure retrieval — cited source chunks, no LLM round-trip |
| `POST /api/v1/feedback` | Report a rating on a specific answer by `request_id` |
| `GET /api/v1/openapi.json` | Public OpenAPI 3.0 schema for this surface (no auth) |

## Authentication

Send your secret key as a bearer token:

```
Authorization: Bearer sk_...
```

Keys are minted in your publisher portal. Each key carries:

- **Scopes** — `chat:invoke` gates `/chat/completions` and `/feedback`; `retrieval:read` gates `/retrieve`. A missing scope returns `403` with `{"error": "scope_denied", "required_scope": "..."}`.
- **A daily call quota** — counted per key over a rolling 24-hour window. Exceeding it returns `429` with `{"error": "quota_exceeded", "daily_limit": …, "resets_at": …, "retry_after_secs": …}` and a `Retry-After` header.
- **A daily token budget** — chat calls are charged an estimate (prompt size plus `max_tokens`) *before* the model runs, so one expensive request can't blow past the ceiling. Exceeding it returns `429` with `{"error": "token_budget_exceeded", …}`.
- **An optional origin allowlist** — when set, requests must carry a matching `Origin` header or they're rejected with `403 origin_rejected` before anything else runs.

Keys are bound to one publisher. Rotating or revoking a key never affects your other keys.

## POST /api/v1/chat/completions

An OpenAI-compatible request body. If you already use an OpenAI SDK, swap the base URL and key and you're done — unknown fields are ignored, and Lumen's additions live under a top-level `lumen` key that strict OpenAI parsers skip.

Request fields:

| Field | Type | Notes |
|---|---|---|
| `messages` | array, required | `{role, content}` objects. The latest `user` message drives retrieval; assistant history rides through, so replay the whole array each turn for multi-turn conversations. |
| `model` | string, optional | Omit it to use the model configured for your account. When present the value is forwarded verbatim to the model gateway — only set it to a value agreed with your integration contact. |
| `temperature` | number, optional | Defaults to `0.2`. |
| `max_tokens` | integer, optional | Defaults to `900`, silently clamped to `2000`. |
| `stream` | boolean, optional | `true` returns SSE `chat.completion.chunk` frames (below). Default: one JSON object. |
| `conversation_id` | string, optional | Your stable thread id — groups turns for conversation analytics and lead attribution. If omitted, Lumen derives one from the OpenAI `user` field or the first user message. |
| `user` | string, optional | OpenAI-compatible end-user identifier; second-choice conversation identity. |

Partner-supplied `system` messages are kept, but they cannot override Lumen's safety prompt — they're passed through as visible notes. Use them for tone and style hints.

{{< tabs >}}
{{< tab name="curl" >}}
```bash
curl https://api.intracav.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $LUMEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "What is the maximum dwell time for the AC-100 dressing?"}
    ],
    "conversation_id": "support-thread-8841"
  }'
```
{{< /tab >}}
{{< tab name="Python" >}}
```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.intracav.ai/api/v1",
    api_key="sk_...",  # your Lumen secret key
)

resp = client.chat.completions.create(
    model="lumen-default",  # forwarded verbatim — agree the value with Lumen, or omit `model` over raw HTTP
    messages=[
        {"role": "user", "content": "What is the maximum dwell time for the AC-100 dressing?"}
    ],
)

print(resp.choices[0].message.content)

# The `lumen` grounding block rides along as an extra field —
# the OpenAI SDK tolerates unknown keys.
lumen = getattr(resp, "lumen", None)
if lumen and not lumen["sources_found"]:
    print("No authoritative source grounded this answer — handle with care.")
```
{{< /tab >}}
{{< tab name="JavaScript" >}}
```javascript
import OpenAI from "openai";

const client = new OpenAI({
  baseURL: "https://api.intracav.ai/api/v1",
  apiKey: process.env.LUMEN_API_KEY, // sk_...
});

const resp = await client.chat.completions.create({
  model: "lumen-default", // forwarded verbatim — agree the value with Lumen, or omit over raw HTTP
  messages: [
    { role: "user", content: "What is the maximum dwell time for the AC-100 dressing?" },
  ],
});

console.log(resp.choices[0].message.content);
console.log(resp.lumen.citations); // Lumen's grounding block
```
{{< /tab >}}
{{< /tabs >}}

### Response shape

A standard `chat.completion` object plus the `lumen` grounding block:

```json
{
  "id": "chatcmpl-…",
  "object": "chat.completion",
  "created": 1754700000,
  "model": "…",
  "choices": [
    {
      "index": 0,
      "message": { "role": "assistant", "content": "…" },
      "finish_reason": "stop"
    }
  ],
  "usage": { "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0 },
  "lumen": {
    "publisher_slug": "acme",
    "citations": [
      {
        "id": "…",
        "content": "…chunk text the model was shown…",
        "score": 0.83,
        "title": "AC-100 Instructions for Use",
        "url": "https://…",
        "page_start": 7,
        "page_end": 7,
        "metadata": { }
      }
    ],
    "safety_critical_present": false,
    "sources_found": true,
    "request_id": "3f1c…-uuid"
  }
}
```

The `lumen` block:

- **`citations`** — the source chunks the model was shown, each with `title`, `url`, an optional `page_start`/`page_end` (1-based PDF page span, present only for paged sources), a similarity `score`, and the chunk `content` itself.
- **`sources_found`** — `false` means nothing authoritative matched the question and the reply rode on the refuse-instruction alone. Treat those turns with extra care: show "no source found" instead of the prose, or route to human support.
- **`safety_critical_present`** — `true` when at least one cited source is flagged safety-critical.
- **`request_id`** — echo this in `/api/v1/feedback` (or a support report) to pin an exact turn. Also returned as the `X-Lumen-Request-Id` response header for clients that strict-parse the OpenAI schema.

### Streaming (`"stream": true`)

OpenAI-style SSE. Frames are `chat.completion.chunk` objects terminated by `data: [DONE]`:

1. First chunk announces the role: `"delta": {"role": "assistant"}`.
2. Content chunks carry `"delta": {"content": "…"}`.
3. The **terminal chunk** has an empty delta, `"finish_reason": "stop"` (or `"error"`), and additionally carries the full `lumen` block — same shape as above. Strict OpenAI clients ignore the unknown key; read it there to render citations after the text finishes.

```json
{
  "id": "chatcmpl-…",
  "object": "chat.completion.chunk",
  "created": 1754700000,
  "model": "…",
  "choices": [{ "index": 0, "delta": {}, "finish_reason": "stop" }],
  "lumen": { "publisher_slug": "…", "citations": [ … ], "safety_critical_present": false, "sources_found": true, "request_id": "…" }
}
```

## POST /api/v1/retrieve

Pure retrieval: the cited chunks that would ground an answer, with no LLM round-trip. Prefer it when you're feeding your own model (OpenAI tool-calling, an in-house agent), building a search UI, or want deterministic latency and zero token spend. Requires the `retrieval:read` scope.

```bash
curl https://api.intracav.ai/api/v1/retrieve \
  -H "Authorization: Bearer $LUMEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "AC-100 dwell time", "limit": 6}'
```

Request: `query` (required, max 4,000 characters), `limit` (optional, default 6, clamped to 25), `extensions` (optional array of Knowledge Pack slugs to restrict the search — the field keeps its historical name on the wire).

Response:

```json
{
  "chunks": [
    {
      "id": "…",
      "content": "…",
      "score": 0.83,
      "title": "AC-100 Instructions for Use",
      "url": "https://…",
      "page_start": 7,
      "page_end": 7,
      "metadata": { }
    }
  ],
  "publisher_slug": "acme",
  "query": "AC-100 dwell time",
  "returned": 1
}
```

An empty result is `200` with `"returned": 0`, not a `404` — decide in your integration what to surface.

## POST /api/v1/feedback

Report a rating on a specific answer. Requires the `chat:invoke` scope.

```bash
curl https://api.intracav.ai/api/v1/feedback \
  -H "Authorization: Bearer $LUMEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "request_id": "3f1c…-uuid",
    "rating": "thumbs_down",
    "comment": "Cited the wrong revision of the IFU."
  }'
```

- `request_id` — the UUID from `lumen.request_id` (or the `X-Lumen-Request-Id` header) of the turn you're rating.
- `rating` — one of `thumbs_up`, `thumbs_down`, `flagged`.
- `comment` — optional, max 2,000 characters.

Returns `{"request_id": …, "rating": …, "received_at": …}`. Feedback ties directly to the audit record for that exact turn, which is what incident triage reads.

## GET /api/v1/openapi.json

Unauthenticated OpenAPI 3.0 document describing this surface — it's a contract, not data. Point any "import from URL" connector at it: Salesforce External Services (the operations become Flow/Agentforce actions, with your `sk_` key in a Named Credential), HubSpot, Zoho, or Postman.

```bash
curl https://api.intracav.ai/api/v1/openapi.json
```

{{< callout type="warning" >}}
This surface does not accept or return PHI. Do not send patient-identifying data in `messages` or `query`.
{{< /callout >}}

## Next steps

- [Embed a Website Bot](/developers/embed/) — the same grounded answering as a widget on your site
- [The Lumen MCP Server](/developers/mcp/) — expose your Knowledge Packs to Claude Desktop and IDE agents
- [Partner Knowledge Packs](/developers/partner-knowledge-packs/) — publish your content into Lumen
