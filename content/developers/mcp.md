---
title: "Connect an MCP client to your documents"
navTitle: "MCP server"
description: "Expose a website assistant's Knowledge Packs as MCP tools, so desktop AI apps and coding assistants can look up your documents with citations."
lead: "Lumen serves each assistant's Knowledge Packs as Model Context Protocol tools. Any MCP client can discover them and look up your documents, with the same citations as the API."
weight: 3
icon: plug
who: "developers and partners"
keywords: ["mcp", "model context protocol", "json-rpc", "knowledge pack tools"]
glance:
  what: "An MCP endpoint that turns each Knowledge Pack behind one of your website assistants into a lookup tool any Model Context Protocol (MCP) client can call."
  who: "Developers connecting AI clients, such as desktop AI apps, coding assistants or their own agents, to a device maker's documentation."
  why: "So an AI client decides on its own when to look something up in your documents, and gets cited passages back."
  needs: "A website assistant, a secret key with the mcp:invoke scope, and an MCP client that supports remote HTTP servers. About 10 minutes."
  result: "Your MCP client lists a lookup tool for each Knowledge Pack and returns cited passages."
---

The *Model Context Protocol* (MCP) is an open standard that lets AI clients call outside tools through one interface. Instead of wiring search into each client, the client asks a server which tools it offers, and calls them when they help. Lumen runs an MCP server for each website assistant: every active *Knowledge Pack* (a curated collection of documents Lumen can search) becomes a lookup tool that returns cited passages.

## Before you start

- A [website assistant](/connect/website-assistant/) with at least one active Knowledge Pack.
- A **secret key** with the `mcp:invoke` scope. Mint it under {{< ui-path "Admin console" "Website assistants" >}}, then the assistant's **Install & CRM** tab, the **API keys** tile and **Mint secret key**.
- An MCP client that can connect to a remote HTTP server and send an `Authorization` header.

## How to connect a client

{{< steps >}}
{{< step title="Mint a dedicated key" >}}Mint a secret key with only the `mcp:invoke` scope, and set a **Daily call limit** under **Edit key limits**.{{< /step >}}
{{< step title="Add the server to your client" >}}Point the client at `https://api.intracav.ai/api/v1/mcp/<assistant-slug>` with the header `Authorization: Bearer sk_…`.{{< /step >}}
{{< step title="Ask something your documents answer" >}}The client lists a tool for each pack, and calls it when a question needs it.{{< /step >}}
{{< /steps >}}

Clients configure remote servers differently, so adapt this pattern to yours:

```json
{
  "mcpServers": {
    "northwind-vascular": {
      "url": "https://api.intracav.ai/api/v1/mcp/northwind-vascular",
      "headers": { "Authorization": "Bearer sk_…" }
    }
  }
}
```

## What you'll see

`tools/list` returns one tool per active pack, named `<pack-slug>.lookup`:

```json
{
  "name": "sl4-ifu.lookup",
  "description": "Lookup against the 'SL-4 IFU' extension. Returns chunks…",
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

`tools/call` searches that pack and returns one text block per passage, starting `[Source N: Title]`. Each block's `_meta` holds the citation details (title, URL, score, source index and metadata), and the result's `_meta` holds `extension_slug`, `publisher_slug` and `result_count`. If nothing matches, you get one "No matching content…" block.

## Protocol details

- **Endpoint:** `POST https://api.intracav.ai/api/v1/mcp/:assistant_slug`, JSON-RPC 2.0, protocol version `2024-11-05`.
- **Server name:** `lumen-publisher-<slug>`.
- **Methods:** `initialize`, `notifications/initialized`, `ping`, `tools/list`, `tools/call`, `prompts/list` and `resources/list` (the last two return empty lists). Other methods return `-32601`.
- **Auth:** the key must have `mcp:invoke`, and the slug in the URL must match the key's assistant, or the call is refused with `403`.
- **Limits:** the key's daily call limit applies. The token budget doesn't, because no model runs.
- **Logging:** only the length of each query is recorded, not its text.

## Limits

- **Lookup only.** The tools return passages. Your client's own model writes any answer, so check its use of the citations.
- **One assistant per endpoint.** To search another assistant's packs, use its slug and its key.

{{< callout type="warning" title="Keys in desktop configs" >}}
A key in a desktop app's config file sits on that computer. Use a dedicated key with only `mcp:invoke` and a daily limit, so you can revoke it without touching your other integrations.
{{< /callout >}}

## MCP or the REST API?

| Use MCP when | Use the [REST API](/developers/api/) when |
|---|---|
| An AI client runs the conversation and should decide when to look things up | Your own software decides when to call |
| You want new packs to appear as new tools automatically | You want a fixed contract and finished, cited answers |

## FAQ

{{< faq question="Does the MCP server write answers?" >}}
No. It returns cited passages. The client's model writes the answer.
{{< /faq >}}
{{< faq question="Why don't I see a tool for one of our packs?" >}}
Only active packs on that assistant become tools. Check the assistant's **Knowledge** tab.
{{< /faq >}}

## Next steps

{{< related "/developers/api/" "/developers/partner-knowledge-packs/" "/developers/lumen-ui/" "/developers/" >}}
