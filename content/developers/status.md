---
title: "Check Lumen's status from code"
navTitle: "Status API"
description: "GET /api/status returns Lumen's current service health, 90 days of daily uptime and recent incidents, with no key needed. Fields, thresholds and polling advice."
lead: "One request, no key: current health for each Lumen service, 90 days of daily history, and active and recent incidents."
weight: 7
icon: activity
who: "developers and IT teams"
keywords: ["lumen status", "uptime api", "service health"]
glance:
  what: "A public JSON endpoint with the same data as status.intracav.ai: overall health, each service's status and uptime, daily history and incidents."
  who: "Developers and IT teams who monitor an integration with Lumen, and reviewers checking service history."
  why: "To tell \"Lumen is degraded\" apart from \"our integration is broken\" in one request, and to show an honest status banner."
  needs: "Nothing. No account or key. About 5 minutes."
  result: "A monitor or banner that reads Lumen's health."
---

Lumen's service health is public, as a page at [status.intracav.ai](https://status.intracav.ai) and as the JSON endpoint behind it. If you've built on Lumen, wire the endpoint into your monitoring so you can see at once whether a problem is on Lumen's side or yours.

## How to check status

{{< steps >}}
{{< step title="Call the endpoint" >}}Send `GET https://api.intracav.ai/api/status`. No key is needed.{{< /step >}}
{{< step title="Read overall_status" >}}`operational`, `degraded` or `outage`. If you read one field, read this one.{{< /step >}}
{{< step title="Drill in when needed" >}}Read `services` to see which part is affected, and `active_incidents` for the latest update.{{< /step >}}
{{< /steps >}}

```bash
curl https://api.intracav.ai/api/status
```

## What you'll see

```json
{
  "overall_status": "operational",
  "services": [
    { "name": "api", "display_name": "API Server", "status": "operational", "latency_ms": 12, "uptime_90d": 100.0 }
  ],
  "daily_history": {
    "api": [ { "date": "2026-11-12", "uptime_pct": 100.0, "status": "operational" } ]
  },
  "active_incidents": [],
  "recent_incidents": []
}
```

- **`overall_status`**: the worst status across services. Services with no checks yet (`unknown`) don't count.
- **`services`**: the API server, database, vector search, AI services, embedding and object storage, each with `status`, the latest probe `latency_ms`, and `uptime_90d`.
- **`daily_history`**: for each service, one entry per day for 90 days. A day is `operational` at 99% uptime or more, `degraded` at 95% or more, and `outage` below that.
- **`active_incidents`**: unresolved incidents, newest first, each with its `updates`.
- **`recent_incidents`**: up to 20 incidents resolved in the last 14 days.

## Good to know

- **Probes run every 5 minutes.** Polling more often than once a minute gains nothing.
- **Cache the last good response,** and show it while a poll is in flight or failing.
- **Back off on errors.** If the endpoint itself can't be reached, treat that as a signal and retry with increasing delays.
- **For a banner,** combine `overall_status` with the newest update in `active_incidents`.

## Limits

- **A new service reports 100% uptime until it has data.** Check `status` alongside `uptime_90d`.
- **Status reflects Lumen's probes,** not every user's experience. A problem limited to one network may not appear.

## FAQ

{{< faq question="Is there a rate limit?" >}}
The endpoint is public and shared, so poll at most once a minute.
{{< /faq >}}
{{< faq question="Where can people without code check status?" >}}
At [status.intracav.ai](https://status.intracav.ai).
{{< /faq >}}

## Next steps

{{< related "/developers/api/" "/developers/embed/" "/trust/" >}}
