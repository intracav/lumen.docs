---
title: "Status Page & Uptime API"
description: "Check Lumen service health programmatically: GET /api/status returns current health, 90 days of daily uptime history, and incidents — no auth required."
lead: "One unauthenticated GET tells you what's up, what's degraded, and what happened over the last 90 days."
weight: 5
keywords: ["lumen status", "uptime api", "service health", "incident history"]
---

Lumen's live health is public — both as a human-readable page at [status.intracav.ai](https://status.intracav.ai) and as the JSON API that page is built on. If you're integrating Lumen into your own product, the API is the piece you want: wire it into your monitoring and you'll distinguish "Lumen is degraded" from "my integration is broken" in one request.

## The endpoint

```
GET https://api.intracav.ai/api/status
```

No authentication, no API key. Returns current service health, **90 days of daily uptime history**, and active plus recently resolved incidents.

## Response shape

```json
{
  "overall_status": "operational",
  "services": [
    {
      "name": "api",
      "display_name": "API Server",
      "status": "operational",
      "latency_ms": 12,
      "uptime_90d": 99.97
    }
  ],
  "daily_history": {
    "api": [
      { "date": "2026-08-08", "uptime_pct": 100.0, "status": "operational" }
    ]
  },
  "active_incidents": [],
  "recent_incidents": [
    {
      "id": "3f1c…-uuid",
      "title": "Elevated vector search latency",
      "status": "resolved",
      "severity": "minor",
      "affected_services": ["vector_search"],
      "created_at": "2026-08-01T14:03:00Z",
      "resolved_at": "2026-08-01T15:40:00Z",
      "updates": [
        {
          "id": "…-uuid",
          "status": "investigating",
          "message": "We are investigating elevated latency on vector search.",
          "created_at": "2026-08-01T14:05:00Z"
        }
      ]
    }
  ]
}
```

Field by field:

- **`overall_status`** — the worst status across all services: `operational`, `degraded`, or `outage`. If you read one field, read this one.
- **`services[]`** — one entry per monitored service (API server, database, vector search, AI services, embedding, object storage), each with its current `status`, latest probe `latency_ms`, and `uptime_90d` percentage. A service with no recorded checks yet reports `"unknown"`.
- **`daily_history`** — a map of service name → per-day entries for the last 90 days. Each day carries `uptime_pct` and a rolled-up `status`: a day is `operational` at ≥ 99% uptime, `degraded` at ≥ 95%, and `outage` below that.
- **`active_incidents`** — incidents not yet resolved, newest first, each with a timeline of `updates` from first report onward.
- **`recent_incidents`** — incidents resolved within the last 14 days, so a consumer that only polls occasionally still sees what it missed.

## Polling etiquette

Health data changes on the cadence of the underlying probes, not per-request — hammering the endpoint buys you nothing.

- **Poll at most once per minute.** The official status page refreshes on a 60-second cycle; there is no fresher signal to find below that.
- **Cache the last good response** and serve it while a poll is in flight or failing.
- **Back off on errors.** If the endpoint itself is unreachable, treat that as its own signal and retry with exponential backoff rather than tightening the loop.
- **Branch on `overall_status`** for dashboards and alerting; reach into `services[]` only when you need to know *which* dependency is affected.

{{< callout type="info" >}}
**Wiring it into an incident banner?** `overall_status != "operational"` plus the newest entry in `active_incidents[].updates` gives you a truthful one-line banner with zero interpretation on your side.
{{< /callout >}}

## Next steps

- [Lumen API v1](/developers/api/) — the authenticated surface this endpoint keeps honest
- [Embed a Website Bot](/developers/embed/) — the widget handles rate and error states itself
- [status.intracav.ai](https://status.intracav.ai) — the same data, for humans
