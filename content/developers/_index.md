---
title: "Partners & Developers"
description: "Build on Lumen: an OpenAI-compatible API with citations, embeddable website bots, an MCP server, and partner content integration."
lead: "APIs, embeds, and content integration — everything you need to put Lumen's grounded clinical answers into your own product or site."
weight: 10
hideAutoGrid: true
cascade:
  audience: partner
---

Lumen exposes the same grounded, citation-first answering that clinicians use in the app through surfaces you can build on: an OpenAI-compatible API, a pure-retrieval endpoint, an embeddable website bot, an MCP server, and a signed content-integration contract for publishing your documentation into Lumen as a Knowledge Pack.

## Pick your surface

{{< card-grid >}}
{{< card title="API v1" href="/developers/api/" tint="accent" label="Read the reference" >}}
OpenAI-compatible chat completions with a citation block on every answer, plus a pure-retrieval endpoint. Drop-in for OpenAI SDKs — swap the base URL and key.
{{< /card >}}
{{< card title="Embed a Website Bot" href="/developers/embed/" tint="blue" label="Get the snippet" >}}
A ~12 KB server-rendered chat widget for your own site. One iframe, origin-locked to your domains, with lead capture and openable cited sources.
{{< /card >}}
{{< card title="MCP Server" href="/developers/mcp/" tint="green" label="Connect a client" >}}
Your Knowledge Packs as MCP tools. Claude Desktop, IDE agents, and any JSON-RPC 2.0 MCP client can query your content with citations.
{{< /card >}}
{{< card title="Partner Knowledge Packs" href="/developers/partner-knowledge-packs/" tint="accent" label="Read the contract" >}}
The content-integration contract: publish IFUs, manuals, and clinical evidence into Lumen as a cited, version-pinned Knowledge Pack.
{{< /card >}}
{{< /card-grid >}}

## Auth in one paragraph

Every developer surface authenticates with an API key minted in your publisher portal, and every key is bound to exactly one publisher — your key can never read another publisher's content. **Secret keys** (`sk_…`) go in an `Authorization: Bearer` header for server-to-server calls (API v1, MCP); **publishable keys** (`pk_…`) are safe to expose in a browser and drive the embed widget. Keys carry **scopes** (`chat:invoke`, `retrieval:read`, `mcp:invoke`, …) so a retrieval-only integration never gets chat spend, an optional **origin allowlist** that rejects requests from any web origin you didn't approve, and **per-key daily quotas** — a call ceiling and an LLM token budget — that return `429` with a `Retry-After` header when exceeded. Rotate or revoke any key without touching the others.
