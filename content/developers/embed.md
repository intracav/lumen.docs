---
title: "Embed a Website Bot"
description: "Put a Lumen Website Bot on your own site with one iframe — a ~12 KB widget with cited answers, origin allowlisting, and lead capture."
lead: "One iframe. A lightweight widget that answers from your Knowledge Packs, cites its sources, and hands you the leads."
weight: 2
keywords: ["website bot", "embed widget", "iframe chat", "lead capture"]
---

## What it is

The embed is a **server-rendered chat widget** — a single self-contained HTML page (inline CSS and JS, roughly 12 KB gzipped), not a multi-megabyte SPA bundle. It loads fast enough to feel native to your page, adapts to `prefers-color-scheme`, and answers only from your Knowledge Packs, with citations the visitor can open.

Everything the widget calls lives on the same origin it's served from, so there's no CORS setup and nothing to allowlist in your CSP beyond the Lumen host.

## Get your snippet

Your Website Bot settings in the publisher portal show the exact embed code for your bot. The pattern is one iframe pointing at your bot's slug with your **publishable key** (`pk_…` — safe to expose in a browser; it can only start visitor sessions, never read your data):

```html
<iframe
  src="https://lumen.intracav.ai/embed/your-bot-slug?key=pk_your_publishable_key"
  title="Chat with us"
  style="width: 100%; max-width: 420px; height: 640px; border: 0;">
</iframe>
```

Two optional URL parameters, both verified behavior of the widget page:

- `&theme=dark` (or `light`) — force a color mode instead of following the visitor's system preference.
- `&q=…` (also `?question=` / `?ask=`) — auto-ask a question once on load, for deep links like "Ask about sizing".

## Origin allowlisting

The widget only renders inside domains you've allowlisted. The embed page is served with a `Content-Security-Policy: frame-ancestors` header built from your bot's active origins, so browsers refuse to frame it anywhere else — and with **no** origins configured, framing is blocked entirely until you add one.

Entries support one leading-subdomain wildcard: `https://*.example.com` matches `https://www.example.com` and `https://app.example.com`, but the apex `https://example.com` needs its own entry. The scheme must match exactly.

The widget's API calls are origin-checked too: session creation requires a browser `Origin` header that matches your allowlist, so a copied `pk_` key is dead on arrival from an unapproved site.

## How sessions work

Visitors are anonymous — no login, no account:

1. The widget fetches `GET /api/embed/manifest/:slug` (public) for your branding and pack catalog, so it paints correctly before any auth round-trip.
2. It mints a session with `POST /api/embed/sessions`, sending the publishable key in an `X-Embed-Publishable-Key` header. The response is `{ session_id, visitor_token, expires_at }`.
3. Every subsequent call carries `X-Embed-Session-Id` and `X-Embed-Visitor-Token` headers. Chat streams over SSE from `POST /api/embed/chat/completion`.

Sessions are rate-shaped server-side: a per-session lifetime message cap, a minimum 1-second spacing between messages (invisible to humans, fatal to runaway loops), and per-publisher daily quotas on sessions, messages, and leads. A denied request returns `429` — the widget handles this itself; you don't need to.

## Cited sources

Answers cite the documents they came from, and citations are openable: each source link resolves through a public read-only endpoint (`/api/embed/source/:publisher_slug/:external_id`) that serves the original file, with a `#page=N` anchor when the citation pins a specific PDF page. Documents you've marked as background-only inform answers without ever appearing as sources, and disabled documents never leave the org.

## Leads

When a visitor submits the contact form, the widget posts to `POST /api/embed/leads`. The lead lands in your publisher portal attached to its full conversation context, flows into your configured CRM integration, and a returning visitor folds into their existing lead record instead of creating a duplicate. Lead capture is a server-side switch in your bot settings — turning it off refuses capture at the endpoint, not just in the UI.

## Styling and branding

The widget pulls your logo, name, and theme from your bot settings via the manifest — change them there and every embedded copy updates on the next page load (the widget is served uncacheable for exactly this reason). There is no CSS to maintain on your side.

## Driving the widget from your page

For guided demos and tours, the parent page can drive the widget with `postMessage` — the iframe is already origin-locked, so only your allowlisted pages can do this:

```javascript
const frame = document.querySelector("iframe").contentWindow;

// Ask a question programmatically (max 2,000 characters)
frame.postMessage({ type: "lumen:ask", text: "What sizes are available?" }, "*");

// Clear the transcript
frame.postMessage({ type: "lumen:reset" }, "*");
```

Messages sent before the session is ready are queued and flushed once it is.

## Next steps

- [Lumen API v1](/developers/api/) — the same grounded answering, headless, for your own backend
- [The Lumen MCP Server](/developers/mcp/) — your Knowledge Packs in Claude Desktop and IDE agents
- [Partner Knowledge Packs](/developers/partner-knowledge-packs/) — the content contract behind the bot
