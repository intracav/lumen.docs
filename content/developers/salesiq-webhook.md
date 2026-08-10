---
title: "Zoho SalesIQ Integration"
description: "Connect a Zoho SalesIQ Zobot to Lumen: webhook URL, RSA signature verification, the ~5-second reply budget, and openable cited sources."
lead: "Your SalesIQ bot forwards the visitor's question; Lumen answers it from your Knowledge Packs — inside SalesIQ's reply window."
weight: 4
keywords: ["zoho salesiq", "zobot webhook", "salesiq integration", "grounded chatbot"]
---

## What it is

The SalesIQ integration is a **native Zobot adapter**: point your Zoho SalesIQ bot's webhook at Lumen, and every visitor message is answered by the same publisher RAG and system prompt that power your [embed widget](/developers/embed/) and [API v1](/developers/api/) — grounded in your Knowledge Packs, with citations — then returned in SalesIQ's own reply schema. Your bot stays a SalesIQ bot; Lumen becomes its brain.

The content served is your bot's *public* website-bot knowledge — the same surface the embed widget already exposes to anonymous visitors.

## The webhook

```
POST https://api.intracav.ai/api/v1/salesiq/{your-bot-slug}/webhook
```

No bearer token — the SalesIQ webhook platform can't send one. Authentication is the RSA signature described below. Lumen handles the SalesIQ event types you'd expect:

- **`trigger`** (visitor lands) — replies with your bot's configured welcome message.
- **`message`** (visitor asks) — runs retrieval + generation and replies with the grounded answer.
- Anything else (`context`, feedback, conversation end) — acknowledged without prose, so the bot never stalls.

Handled events always return HTTP `200` with SalesIQ's reply JSON (`{"action": "reply", "replies": [...]}`), so the bot degrades gracefully; an unknown slug is `404` and a bad signature is `401`.

## Signature verification (`x-siqsignature`)

SalesIQ authenticates by **RSA-signing the raw request body** — SHA-256 with RSA, base64-encoded, in the `x-siqsignature` header. Paste your bot's SalesIQ public key into your Lumen connector settings and Lumen verifies every event against it; a signature that doesn't match the body is rejected with `401 invalid_signature`, and the rejection is recorded in your bot's audit trail.

Verification is enforced **once a key is configured**. Before that, events are accepted unverified (and logged as such) so you can smoke-test the wiring first — add the key before going live. Since the bot serves only your public website-bot content, the signature is defence-in-depth against spoofed traffic and quota abuse rather than a confidentiality boundary.

## The ~5-second reply budget

SalesIQ gives a webhook roughly **5 seconds** to answer, and drops the bot's reply if it's late. Lumen is engineered to that budget:

- **Bounded retrieval** — the vector search runs under its own timeout, so a saturated embedding backend can't eat the whole window.
- **Tight answers** — generation is capped at a short, chat-sized reply; IFU-style answers don't need essays.
- **Never hang, always answer** — if a stage does exceed its budget, Lumen returns a polite "took longer than expected, please try again" reply rather than leaving the visitor with silence, and never leaves the request hanging server-side.

Anything slower than the reply path — analytics, lead processing — happens after the response is sent, never inside the window.

## Conversation memory

SalesIQ sends only the current message with each event, so Lumen persists the recent turns of each visitor conversation on its side and replays them as context. Follow-ups like "what about the smaller size?" resolve correctly instead of starting from zero.

## Cited sources that open

Answers carry citations, and citations resolve to real files:

```
GET https://api.intracav.ai/api/v1/salesiq/{your-bot-slug}/source/{external_id}
```

This public, read-only endpoint serves the **original document** behind a citation — for PDFs, at the cited page via a `#page=N` anchor. It's hard-gated: it only serves content currently published and active on *this* bot, from documents your organization owns. Partner-licensed pack content links out to its own canonical source URL instead of being served here.

## SalesIQ or the embed widget?

- **Choose the SalesIQ integration** when Zoho SalesIQ is already your site's chat surface — existing Zobot flows, operators, and Zoho-side routing stay exactly as they are, and Lumen slots in as the answering engine.
- **Choose the [embed widget](/developers/embed/)** when you don't have a chat platform to preserve — it's a single iframe with origin allowlisting, lead capture, and cited sources out of the box, with nothing else to run.

Either way the grounding, content, and citation behavior are the same — this is a transport decision, not a quality one.

## Setup

1. **Get your webhook URL** — `https://api.intracav.ai/api/v1/salesiq/{your-bot-slug}/webhook`, using the bot slug from your publisher portal.
2. **Configure the webhook in SalesIQ** — create a Zobot on the webhook platform and set Lumen's URL as the URL SalesIQ invokes.
3. **Paste the public key into Lumen** — copy the public key from your SalesIQ bot's settings into your bot's Zoho connector settings in Lumen, enabling signature verification.
4. **Test from your site** — open the SalesIQ chat, ask a question your Knowledge Pack answers, and confirm the reply arrives with citations.

## Next steps

- [Embed a Website Bot](/developers/embed/) — the same grounded answering as a standalone widget
- [Lumen API v1](/developers/api/) — headless access for your own backend
- [Partner Knowledge Packs](/developers/partner-knowledge-packs/) — the content contract behind the answers
