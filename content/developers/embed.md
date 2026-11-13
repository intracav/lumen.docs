---
title: "Embed the website assistant"
navTitle: "Embed"
description: "Install a Lumen website assistant: the loader script, the fixed-frame option, allowed origins, sessions, rate limits, citations and page messages."
lead: "One script tag adds a chat button to your site that opens your website assistant. This page covers what it loads, how it is locked to your domains, and how to control it from your page."
weight: 2
icon: globe
who: "developers and web teams"
keywords: ["website assistant embed", "loader.js", "chat widget", "frame-ancestors"]
glance:
  what: "The technical details of embedding a Lumen website assistant: the loader script, the iframe option, domain allowlisting, anonymous sessions, limits and the page-to-widget messages."
  who: "Web developers and IT teams installing a website assistant on a device maker's site."
  why: "To install the assistant correctly, pass a security review, and know how it behaves under load."
  needs: "A website assistant set up by your team's admin, its publishable key, and access to your site's HTML. About 15 minutes."
  result: "The assistant running on your allowed domains, with its limits and behavior understood."
---

A website assistant runs in a small, self-contained chat page served by Lumen, about 12 KB compressed, with its styles and script inline. You add it to your site with a script tag that draws a chat button, or as a fixed frame. It only displays on the domains your admin allowed. For the non-technical setup, see [Add a website assistant to your site](/connect/website-assistant/).

## Before you start

- **The assistant's slug and publishable key.** Your team's admin finds both in {{< ui-path "Admin console" "Website assistants" >}}, under the assistant's **Install & CRM** tab. A publishable key starts with `pk_`. It can only start visitor sessions, so it's safe in a web page.
- **Your domains in the allowlist.** Under **Install & CRM**, the **Allowed domains** tile must list every origin the assistant will appear on.

## How to install it

{{< steps >}}
{{< step title="Copy the snippet" >}}On **Install & CRM**, under **Install on your website**, choose **Chat button (recommended)** and click **Copy snippet**.{{< /step >}}
{{< step title="Add it to your pages" >}}Paste it before the closing `body` tag on each page where the assistant should appear, or in your site template.{{< /step >}}
{{< step title="Check it" >}}Load a page on an allowed domain. A round chat button appears in the bottom-right corner. Click it and ask a question.{{< /step >}}
{{< /steps >}}

```html
<script src="https://api.intracav.ai/embed/loader.js"
  data-assistant="northwind-vascular"
  data-key="pk_…"
  async></script>
```

The loader draws a button in the assistant's brand color. When clicked, it opens a 380 × 600 pixel chat frame. It tells Lumen which page and site the visitor is on, so a per-page welcome message and starter questions from the assistant's **Site map** apply. If the assistant is paused on that page, the button doesn't appear.

### Fixed frame (advanced)

To place the assistant in a fixed spot instead, choose **Advanced: fixed frame** and click **Copy frame**. The frame points at:

```text
https://api.intracav.ai/embed/<assistant-slug>?key=pk_…
```

Optional query parameters:

- `theme=dark` forces dark mode. Without it, the assistant follows the visitor's system setting.
- `q=…` (or `question=` or `ask=`) asks one question automatically when the frame loads.

## What you'll see

{{< screenshot src="assistant-install" alt="The Install & CRM tab with the chat button snippet and Copy snippet button" caption="Install & CRM. The recommended install is the chat button script." url="lumen.intracav.ai" >}}
{{< lui-block title="Install on your website" >}}
{{< lui-rows >}}
{{< lui-row type="radio" title="Chat button (recommended)" body="A button in the corner of every page that opens the assistant." >}}
{{< lui-row type="radio" title="Advanced: fixed frame" body="The assistant in a fixed place on one page." >}}
{{< /lui-rows >}}
{{< lui-actions "Copy snippet" "Copy frame" >}}
{{< /lui-block >}}
{{< /screenshot >}}

## How it's locked to your domains

The chat page is served with a `Content-Security-Policy: frame-ancestors` header built from the assistant's allowed origins, so browsers refuse to show it inside any other site. With no origins configured, it can't be framed at all.

Origin rules:

- Exact origins, such as `https://www.northwindvascular.example`, or one leading wildcard, such as `https://*.northwindvascular.example`.
- A wildcard matches subdomains, not the bare domain. Add `https://northwindvascular.example` separately.
- The scheme must match exactly.

## Sessions and limits

Visitors are anonymous and never sign in.

1. The chat page reads the assistant's public manifest (`GET /api/embed/manifest/:slug`) for its name, branding and welcome.
2. It starts a session with `POST /api/embed/sessions`, sending the publishable key. A session lasts 24 hours.
3. Messages stream back from `POST /api/embed/chat/completion` as server-sent events.

| Limit | Value | What happens |
|---|---|---|
| Message spacing | 1 per second per session | `429`, retry after 1 second |
| Messages per session | 200 | The session ends (`401 session_invalid`) and a new one starts |
| Daily quotas | Set by your admin for messages, sessions and leads | `429` until the next day |

The chat page handles these responses itself.

## Cited sources

Each citation shows the document title and page. Clicking it opens the original file through a public, read-only link (`/api/embed/source/:slug/:document`), at the cited page for PDFs. Only documents marked as citable and turned on for the assistant are served. Background-only documents are never shown.

## Controlling the frame from your page

Your page can send messages to the chat frame:

```javascript
const frame = document.querySelector("iframe").contentWindow;

// Ask a question (up to 2,000 characters)
frame.postMessage({ type: "lumen:ask", text: "What sizes are available?" }, "https://api.intracav.ai");

// Clear the conversation
frame.postMessage({ type: "lumen:reset" }, "https://api.intracav.ai");
```

When the assistant is ready, it posts `{ type: "lumen:ready", slug }` to your page. Messages sent before then are queued.

## Leads

When a visitor submits the contact form, the lead is saved with its conversation and sent to your CRM or webhooks if configured. A returning visitor updates their existing lead instead of creating a duplicate. If your admin turns lead capture off, the server refuses new leads. See [CRM and webhooks](/connect/crm-and-webhooks/).

## Limits

- **`theme=light` doesn't override a dark system setting.** Only `theme=dark` forces a mode.
- **Branding comes from Lumen.** Name, colors and welcome are set in the assistant's settings. There's no CSS to change on your side.
- **The chat page isn't cached,** so settings changes appear on the next page load.

## FAQ

{{< faq question="Does the embed need any CORS or CSP changes on our site?" >}}
If your site sets a Content Security Policy, allow `https://api.intracav.ai` for scripts and frames. The chat page calls only its own host.
{{< /faq >}}
{{< faq question="Can we style the chat to match our site?" >}}
Set the name, brand color and appearance in the assistant's settings in Lumen. Changes apply everywhere the assistant is embedded.
{{< /faq >}}
{{< faq question="What happens if Lumen is unavailable?" >}}
The chat shows an error and your page keeps working. Check [status.intracav.ai](https://status.intracav.ai) or the [status API](/developers/status/).
{{< /faq >}}

## Next steps

{{< related "/connect/website-assistant/" "/developers/api/" "/developers/salesiq-webhook/" "/connect/crm-and-webhooks/" >}}
