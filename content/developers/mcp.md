---
title: "The Lumen MCP Server"
description: "Expose your Knowledge Packs as MCP tools. Connect Claude Desktop, IDE agents, or any JSON-RPC 2.0 MCP client to Lumen's cited retrieval."
lead: "Your Knowledge Packs, callable as tools by any MCP client — with the same citations and the same key."
weight: 3
keywords: ["mcp", "model context protocol", "claude desktop", "json-rpc", "knowledge pack tools"]
---

## What MCP is

The Model Context Protocol is an open standard that lets AI clients — Claude Desktop, IDE coding agents, custom assistants — call external tools over a uniform JSON-RPC 2.0 interface. Instead of you wiring retrieval into each client, the client discovers your tools with `tools/list` and calls them with `tools/call`; the model decides when a lookup is worth making.

## The endpoint

Lumen exposes each publisher's Knowledge Packs as MCP tools at:

```
POST https://api.intracav.ai/api/v1/mcp/:publisher_slug
```

It's a JSON-RPC 2.0 surface (MCP protocol version `2024-11-05`). The server identifies itself as `lumen-publisher-<slug>`.

Supported methods: `initialize`, `notifications/initialized`, `ping`, `tools/list`, `tools/call`, plus `prompts/list` and `resources/list` (both currently empty). Anything else returns a JSON-RPC `-32601`.

## Auth

The same bearer-key model as the REST API: `Authorization: Bearer sk_…`, with the `mcp:invoke` scope on the key. The key is bound to one publisher, and the URL slug must match the key's publisher — a mismatched slug is a `403`, never silent cross-publisher access. Per-key daily quotas apply here exactly as they do on `/api/v1/chat/completions`.

## What a client sees

`tools/list` returns **one tool per active Knowledge Pack**, named `<pack-slug>.lookup`:

```json
{
  "name": "acme-ifu.lookup",
  "description": "Look up ACME IFU content. Returns chunks of publisher-supplied content with citation metadata.",
  "inputSchema": {
    "type": "object",
    "properties": {
      "query": { "type": "string", "maxLength": 4000 },
      "limit": { "type": "integer", "minimum": 1, "maximum": 25, "default": 6 }
    },
    "required": ["query"]
  }
}
```

`tools/call` runs cited retrieval scoped to that one pack and returns MCP text content blocks — one per chunk, formatted `[Source N: Title]` followed by the chunk text. Structured citation metadata (title, URL, similarity score, section) rides in each block's `_meta` field, an MCP convention: clients that understand it can render trust signals; clients that don't just see the text. The result's own `_meta` carries `{ extension_slug, publisher_slug, result_count }`.

Queries are audited by length only — raw query text is never logged.

## Claude Desktop example

A remote-server entry looks like this — **treat it as a pattern to adapt**: MCP clients differ in how they declare remote HTTP servers and auth headers (some versions need a stdio-to-HTTP bridge such as `mcp-remote`), so match your client's current config format.

```json
{
  "mcpServers": {
    "lumen-acme": {
      "url": "https://api.intracav.ai/api/v1/mcp/acme",
      "headers": {
        "Authorization": "Bearer sk_your_secret_key"
      }
    }
  }
}
```

Once connected, ask the client something your pack can answer and watch it call `acme-ifu.lookup` on its own.

{{< callout type="warning" >}}
The key in a desktop client's config sits in a file on that machine. Mint a dedicated key with only the `mcp:invoke` scope and a sensible daily quota, so a leaked laptop config can be revoked without touching your production integrations.
{{< /callout >}}

## MCP vs the REST API

| Use MCP when… | Use the [REST API](/developers/api/) when… |
|---|---|
| An AI client owns the conversation (Claude Desktop, IDE agents) and should decide *when* to look things up | Your own product or backend orchestrates the calls |
| You want tool discovery — new packs appear as new tools automatically | You want a fixed contract: `retrieve` for chunks, `chat/completions` for finished, cited answers |
| The consumer already speaks MCP | You need streaming answers, feedback reporting, or an OpenAPI import into a CRM |

Same key infrastructure, same retrieval, same citations underneath — pick per consumer, not per project.

## Next steps

- [Lumen API v1](/developers/api/) — the REST surface: completions, retrieval, feedback
- [Partner Knowledge Packs](/developers/partner-knowledge-packs/) — publish the content these tools search
- [Embed a Website Bot](/developers/embed/) — the same answering as a widget on your site
