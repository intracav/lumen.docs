---
title: "Answer in Zoho SalesIQ with Lumen"
navTitle: "Zoho SalesIQ"
description: "Connect a Zoho SalesIQ Zobot to Lumen so it answers visitors from your documents with citations: webhook URL, signature verification, timing and sources."
lead: "If your site already uses Zoho SalesIQ for chat, your SalesIQ bot can forward each visitor message to Lumen and reply with a cited answer from your documents."
weight: 5
icon: messages
who: "developers and web teams"
keywords: ["zoho salesiq", "zobot webhook", "salesiq integration"]
glance:
  what: "A webhook that lets a Zoho SalesIQ bot (a Zobot) send visitor messages to Lumen and reply with answers grounded in your website assistant's documents."
  who: "Device makers whose website chat already runs on Zoho SalesIQ, and the developers who maintain it."
  why: "To keep your SalesIQ chat, operators and routing, while answers come from your approved documents with citations."
  needs: "A website assistant in Lumen, the owner or admin role, and admin access to Zoho SalesIQ. About 20 minutes."
  result: "Your SalesIQ bot replying with cited answers from your documents."
---

Zoho SalesIQ lets a bot call a webhook for each visitor message. Point that webhook at Lumen, and Lumen answers from the same documents and rules as your [website assistant](/connect/website-assistant/), then replies in SalesIQ's own format. Your bot stays a SalesIQ bot. Lumen supplies the answers.

## Before you start

- A website assistant in Lumen with its documents in place. SalesIQ serves the same public content.
- The **owner or admin** role on your Lumen team.
- Admin access to your Zoho SalesIQ portal, to create a webhook bot.

## How to connect SalesIQ

{{< steps >}}
{{< step title="Get the webhook address" >}}In Lumen, open {{< ui-path "Admin console" "Website assistants" >}}, choose the assistant, and open **Install & CRM**. Choose **Zoho SalesIQ Zobot (webhook)** and click **Get webhook setup**. The address has the form `https://api.intracav.ai/api/v1/salesiq/<assistant-slug>/webhook`.{{< /step >}}
{{< step title="Create the bot in SalesIQ" >}}In SalesIQ, create a Zobot on the webhook platform and set Lumen's address as the URL it calls.{{< /step >}}
{{< step title="Turn on signature checks" >}}Copy the bot's public key from SalesIQ, paste it in Lumen, and click **Save SalesIQ public key**.{{< /step >}}
{{< step title="Test from your site" >}}Open your site's chat, ask a question your documents answer, and confirm the reply arrives with sources.{{< /step >}}
{{< /steps >}}

## What you'll see

Visitors see SalesIQ's chat, as before. The bot's replies are answers from your documents with numbered sources. A visitor arriving gets the assistant's welcome message.

## How it works

- **Events.** A `trigger` event (a visitor arrives) gets the welcome message. A `message` event gets a cited answer. Feedback and conversation-end events are recorded without a reply.
- **Responses.** Lumen replies with HTTP `200` and SalesIQ's reply format. An unknown assistant gets `404`, and a bad signature gets `401`.
- **Signatures.** SalesIQ signs the raw request body with RSA (SHA-256), base64-encoded, in the `x-siqsignature` header. Once you save the public key, Lumen rejects any event whose signature doesn't match and records the rejection in the audit log.
- **Memory.** SalesIQ sends only the current message, so Lumen keeps the last six turns of each conversation and resets after six hours of inactivity. Follow-ups like "what about the smaller size?" work.
- **Timing.** SalesIQ expects a quick reply. Lumen limits search and answer time and keeps replies short. If a step runs long, Lumen replies with a polite "please try again" message rather than leaving the visitor without an answer. Lead and analytics work happens after the reply is sent.
- **Sources.** Citations link to `https://api.intracav.ai/api/v1/salesiq/<assistant-slug>/source/<document>`, which serves the original file at the cited page. It only serves documents that are citable and active on that assistant.

## Limits

- **Signatures are checked only after you save the key.** Before that, events are accepted and logged as unverified, so you can test the wiring. Save the key before you go live.
- **Replies are short.** Answers are sized for a chat bubble.
- **A slow reply may be dropped by SalesIQ.** Lumen's time limits sit slightly above SalesIQ's usual reply window, so under heavy load an occasional reply can arrive too late.
- **Transcripts follow your assistant's retention,** 90 days by default.

## FAQ

{{< faq question="Should we use SalesIQ or the Lumen chat button?" >}}
Use SalesIQ if it's already your chat and you want to keep its operators and routing. Use the [Lumen chat button](/developers/embed/) if you don't have a chat platform to keep. The answers and citations are the same.
{{< /faq >}}
{{< faq question="Do leads from SalesIQ conversations reach our CRM?" >}}
Yes. Leads are captured from the conversation and go to your configured CRM or webhooks. See [CRM and webhooks](/connect/crm-and-webhooks/).
{{< /faq >}}

## Next steps

{{< related "/connect/website-assistant/" "/developers/embed/" "/connect/crm-and-webhooks/" >}}
