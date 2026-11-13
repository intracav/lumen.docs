---
title: "Developers and partners"
navTitle: "Developers"
description: "Build on Lumen: a REST API with cited answers, the website assistant embed, an MCP server, Zoho SalesIQ, partner Knowledge Packs, Lumen UI and the status API."
lead: "Put Lumen's cited answers into your own software and site. Every surface answers from documents you control and returns the sources it used."
weight: 40
hideAutoGrid: true
group: dev
icon: code
cascade:
  audience: partner
glance:
  what: "The technical ways to build on Lumen: an API for cited answers and retrieval, an embeddable website assistant, an MCP server, a Zoho SalesIQ connection, the partner Knowledge Pack contract, Lumen UI and a status API."
  who: "Developers at device makers and partners, and the IT and security teams who review their integrations."
  why: "To reuse Lumen's grounded, cited answering in your own products, with answers your reviewers can trace to the source."
  needs: "A website assistant on a Lumen team account for the API, embed, MCP and SalesIQ. A partner agreement for Knowledge Packs. Nothing for Lumen UI or the status API."
  result: "Knowing which surface fits your project and where to start."
---

Lumen answers questions from documents, and cites the passage behind each answer. The same engine that powers a device maker's [website assistant](/connect/website-assistant/) is available to your own software. Each key belongs to one assistant and can only read that assistant's documents.

## Pick a surface

{{< card-grid cols="2" >}}
{{< card title="API v1" href="/developers/api/" icon="code" tint="blue" kicker="Your backend" >}}Cited chat completions in the OpenAI request and response shape, plus retrieval without a model call, and feedback.{{< /card >}}
{{< card title="Embed the website assistant" href="/developers/embed/" icon="globe" tint="green" kicker="Your website" >}}One script tag adds a chat button. Locked to your domains, with page-level citations and lead capture.{{< /card >}}
{{< card title="MCP server" href="/developers/mcp/" icon="plug" tint="plum" kicker="AI clients" >}}Each Knowledge Pack becomes a lookup tool any Model Context Protocol client can call.{{< /card >}}
{{< card title="Lumen UI" href="/developers/lumen-ui/" icon="component" tint="accent" kicker="Interactive answers" >}}The component format Lumen writes for checklists, charts, tables and clinical cards.{{< /card >}}
{{< card title="Zoho SalesIQ" href="/developers/salesiq-webhook/" icon="messages" tint="blue" kicker="Existing chat" >}}Keep your SalesIQ bot and have Lumen supply cited answers.{{< /card >}}
{{< card title="Partner Knowledge Packs" href="/developers/partner-knowledge-packs/" icon="package" tint="green" kicker="Publish into Lumen" >}}Serve a signed catalog, and Lumen keeps your documents current as a cited pack.{{< /card >}}
{{< card title="Status API" href="/developers/status/" icon="activity" tint="plum" kicker="Monitoring" >}}Service health, 90 days of history and incidents. No key needed.{{< /card >}}
{{< /card-grid >}}

## Keys in one paragraph

Team admins mint keys in {{< ui-path "Admin console" "Website assistants" >}}, under an assistant's **Install & CRM** tab and the **API keys** tile. **Publishable keys** (`pk_…`) are safe in a web page and only start visitor sessions. **Secret keys** (`sk_…`) belong on a server and go in an `Authorization: Bearer` header. Each key has scopes (`chat:invoke`, `retrieval:read`, `mcp:invoke`), optional allowed origins, and optional daily limits on calls and tokens. A key is shown once when it's created.

## Ground rules

- **No patient information.** These surfaces don't accept protected health information.
- **Answers come from your documents.** If nothing matches closely enough, the response says so (`sources_found: false` in the API).
- **There's no Lumen SDK.** OpenAI-compatible clients work with the API, and MCP clients work with the MCP server.

## Next steps

{{< related "/developers/api/" "/developers/embed/" "/developers/lumen-ui/" "/connect/" >}}
