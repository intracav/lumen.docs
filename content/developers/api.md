---
title: "Lumen API v1: cited answers and retrieval"
navTitle: "API v1"
description: "REST reference for Lumen API v1: OpenAI-shaped chat completions grounded in your documents with citations, pure retrieval, feedback, keys, scopes and quotas."
lead: "Send a question, get an answer grounded in your own documents, with the sources attached. Or skip the model and retrieve the cited passages directly."
weight: 1
icon: code
who: "developers and partners"
keywords: ["lumen api", "openai compatible", "chat completions", "retrieval api", "citations"]
glance:
  what: "Lumen API v1 is a REST API that answers questions from the documents behind one of your website assistants, and returns the passages it used, with document titles, links and page numbers."
  who: "Developers at device makers and partners who want Lumen's cited answers inside their own app, support tool or backend."
  why: "To reuse the same grounded, cited answering as your website assistant, without the chat window, and to show users where each answer came from."
  needs: "A website assistant on your team, the owner or admin role to create a secret key, and a server to call from. About 15 minutes to a first call."
  result: "A working call that returns an answer, its citations, and a request ID you can use for feedback."
---

Lumen API v1 gives your own software the answering engine behind a [website assistant](/connect/website-assistant/). Each answer is grounded in that assistant's documents and comes with a `lumen` block listing the passages it used, including the document title, link and page numbers. The request and response follow the OpenAI chat completions shape, so most OpenAI-style clients work with a base-URL change.

## Before you start

- **A website assistant** whose documents you want to answer from. Each key belongs to exactly one assistant and can only read its documents.
- **A secret key.** In Lumen, open {{< ui-path "Admin console" "Website assistants" >}}, choose the assistant, open **Install & CRM**, then the **API keys** tile. Click **Mint secret key**, give it a **Name (optional)**, choose its **Scopes**, and copy the key. It's shown once.
- **A server.** Secret keys (`sk_…`) belong on a server, never in a web page or app bundle.

{{< callout type="warning" title="No patient information" >}}
This API doesn't accept protected health information. Don't send patient-identifying details in `messages` or `query`.
{{< /callout >}}

## Endpoints

Base URL: `https://api.intracav.ai`

| Method and path | What it does | Scope |
|---|---|---|
| `POST /api/v1/chat/completions` | A cited answer, OpenAI-shaped, with a `lumen` block | `chat:invoke` |
| `POST /api/v1/retrieve` | The cited passages only, with no model call | `retrieval:read` |
| `POST /api/v1/feedback` | Rate a specific answer by its request ID | `chat:invoke` |
| `GET /api/v1/openapi.json` | OpenAPI 3.0 description of `chat/completions` and `retrieve` (no key needed) | none |

## How to make your first call

{{< steps >}}
{{< step title="Mint a key" >}}Mint a secret key with the **Chat API** scope, as described above, and store it as an environment variable such as `LUMEN_API_KEY`.{{< /step >}}
{{< step title="Send a question" >}}Call `POST /api/v1/chat/completions` with a `messages` array.{{< /step >}}
{{< step title="Show the sources" >}}Read `lumen.citations` and show the title and page of each source next to the answer. If `lumen.sources_found` is `false`, show "no source found" or route to a person.{{< /step >}}
{{< /steps >}}

{{< tabs >}}
{{< tab name="curl" >}}
```bash
curl https://api.intracav.ai/api/v1/chat/completions \
  -H "Authorization: Bearer $LUMEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "messages": [
      {"role": "user", "content": "What catheter sizes does the SL-4 securement device fit?"}
    ],
    "conversation_id": "support-thread-8841"
  }'
```
{{< /tab >}}
{{< tab name="OpenAI SDK (Python)" >}}
```python
import os
from openai import OpenAI

client = OpenAI(
    base_url="https://api.intracav.ai/api/v1",
    api_key=os.environ["LUMEN_API_KEY"],  # your Lumen secret key
)

resp = client.chat.completions.create(
    # The SDK requires `model`, and Lumen forwards it as given.
    # Use the value your Intracav contact provides.
    model=os.environ["LUMEN_MODEL"],
    messages=[{"role": "user", "content": "What catheter sizes does the SL-4 securement device fit?"}],
)

print(resp.choices[0].message.content)
lumen = resp.model_extra.get("lumen", {})  # Lumen's citation block
for c in lumen.get("citations", []):
    print(c["title"], c.get("page_start"))
```
{{< /tab >}}
{{< /tabs >}}

There is no Lumen-specific SDK. OpenAI-compatible clients work because the request and response follow the same shape.

## What you'll see

A standard `chat.completion` object, plus the `lumen` block:

```json
{
  "id": "…",
  "object": "chat.completion",
  "created": 1762992000,
  "model": "…",
  "choices": [
    { "index": 0, "message": { "role": "assistant", "content": "…" }, "finish_reason": "stop" }
  ],
  "usage": { "prompt_tokens": 0, "completion_tokens": 0, "total_tokens": 0 },
  "lumen": {
    "publisher_slug": "northwind-vascular",
    "citations": [
      {
        "id": "…",
        "content": "…the passage the model was given…",
        "score": 0.83,
        "title": "SL-4 Securement Device, Instructions for Use",
        "url": "https://…",
        "page_start": 4,
        "page_end": 4,
        "metadata": {}
      }
    ],
    "safety_critical_present": false,
    "sources_found": true,
    "request_id": "3f1c…"
  }
}
```

- **`citations`**: the passages the model was given, with `title`, `url`, a similarity `score`, and `page_start` and `page_end` (1-based PDF pages, present for paged documents).
- **`sources_found`**: `false` means nothing in the documents matched closely enough, and the model was told to decline. Treat these turns with care.
- **`safety_critical_present`**: `true` when at least one cited document is marked safety-critical.
- **`request_id`**: identifies this exact answer. It's also returned in the `X-Lumen-Request-Id` header. Use it with `/api/v1/feedback`.

## Request reference

### `POST /api/v1/chat/completions`

| Field | Type | Notes |
|---|---|---|
| `messages` | array, required | `{role, content}` objects. `content` must be a string. The latest `user` message drives retrieval. Send the whole history each turn for multi-turn conversations. |
| `model` | string, optional | Omit it over raw HTTP to use the default. If present, it's passed to the model as given. |
| `temperature` | number, optional | Default `0.2`. |
| `max_tokens` | integer, optional | Default `900`, capped at `2000`. |
| `stream` | boolean, optional | `true` returns server-sent events (below). |
| `conversation_id` | string, optional | Your thread ID, used to group turns for analytics and lead attribution. If omitted, Lumen derives one from `user` or the first message. |
| `user` | string, optional | Your end-user identifier. |

Each answer uses up to six passages. A `system` message you send is kept as a visible note, but it can't override Lumen's own safety instructions. Use it for tone and style.

**Streaming.** With `"stream": true`, Lumen sends OpenAI-style `chat.completion.chunk` events: first the role, then content deltas, then a final chunk with an empty delta, a `finish_reason` of `stop` or `error`, and the full `lumen` block. The stream ends with `data: [DONE]`. Streaming responses don't include `usage`.

### `POST /api/v1/retrieve`

The passages that would ground an answer, with no model call. Use it to feed your own model or build a search view.

```bash
curl https://api.intracav.ai/api/v1/retrieve \
  -H "Authorization: Bearer $LUMEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"query": "SL-4 replacement interval", "limit": 6}'
```

| Field | Notes |
|---|---|
| `query` | Required, up to 4,000 characters |
| `limit` | Optional, default 6, between 1 and 25 |
| `extensions` | Optional array of Knowledge Pack slugs to search (the field keeps its older name) |

The response has `chunks` (same fields as a citation), `publisher_slug`, `query` and `returned`. No match is a `200` with `"returned": 0`.

### `POST /api/v1/feedback`

```bash
curl https://api.intracav.ai/api/v1/feedback \
  -H "Authorization: Bearer $LUMEN_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"request_id": "3f1c…", "rating": "thumbs_down", "comment": "Cited the wrong IFU revision."}'
```

`rating` is `thumbs_up`, `thumbs_down` or `flagged`. `comment` is optional, up to 2,000 characters. Feedback is recorded in the audit log against that request ID.

## Keys, scopes and quotas

- **Key types.** Secret keys start with `sk_` and publishable keys with `pk_`. Each belongs to one assistant.
- **Scopes.** `chat:invoke` (chat and feedback), `retrieval:read` (retrieve) and `mcp:invoke` ([MCP](/developers/mcp/)). A missing scope returns `403` with `scope_denied` and `required_scope`.
- **Limits per key.** Under **Edit key limits**, set a **Daily call limit**, a **Daily token budget** (0 means unlimited for both) and **Allowed origins**. The two limits share a 24-hour window that starts with the first call after the previous window ends. Chat calls are charged an estimate before the model runs, so one large request can't overshoot the budget.
- **Origins.** If a key has allowed origins, requests without a matching `Origin` header get `403 origin_rejected`.

### Errors

| Status | `error` | Meaning |
|---|---|---|
| 401 | `key_missing`, `key_invalid` | No key, or an unknown or revoked key |
| 403 | `scope_denied`, `origin_rejected`, `slug_mismatch` | The key can't do this, from here, or for this assistant |
| 429 | `quota_exceeded` | Daily call limit reached. Includes `daily_limit`, `resets_at`, `retry_after_secs` and a `Retry-After` header |
| 429 | `token_budget_exceeded` | Daily token budget reached. Includes `daily_token_budget`, `token_count_today`, `resets_at`, `retry_after_secs` |
| 502 | `upstream_error` | The model call failed. Retry with backoff |
| 503 | `publisher_suspended` | The assistant is suspended |

## Limits

- **Answers come only from the assistant's documents.** The API doesn't answer from the open web.
- **The OpenAPI file is partial.** It describes `chat/completions` and `retrieve`, not `feedback`.
- **String content only.** OpenAI's array form of message content isn't accepted.
- **Fixed daily window.** Quotas reset 24 hours after the window started, not at midnight.

## FAQ

{{< faq question="Can I call the API from a browser?" >}}
Not with a secret key. Keep `sk_` keys on your server. For a browser, use the [website assistant embed](/developers/embed/).
{{< /faq >}}
{{< faq question="Why did I get an answer with sources_found set to false?" >}}
Nothing in the assistant's documents matched closely enough, so the model was told to say it couldn't find the information. Show that to the user plainly, or route the question to a person.
{{< /faq >}}
{{< faq question="Can I choose the AI model?" >}}
Lumen uses one model provider. Omit `model` to use the default. If your client requires a value, ask your Intracav contact which to use.
{{< /faq >}}

## Next steps

{{< related "/developers/embed/" "/developers/mcp/" "/developers/status/" "/connect/website-assistant/" >}}
