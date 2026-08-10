---
title: "Agent Mode: Multi-Step Clinical Work in One Prompt"
description: "Lumen's agent mode plans, runs tools, and delivers finished clinical work from one prompt — every step visible, every run saved as a normal chat."
lead: "Some clinical tasks aren't one question — they're a plan, ten lookups, and a document. Agent mode runs the whole sequence while you watch."
weight: 3
keywords: ["AI clinical agent", "multi-step medical AI", "autonomous clinical assistant"]
---

## What agent mode changes

A regular chat message gets you one round of thinking and maybe a tool call or two. An agent-mode chat gets you a *workflow*: Lumen reads your request, makes a plan, works through it — searching, looking up codes, cross-checking sources — and delivers the finished result, with every step visible as it happens.

Three things make that possible:

- **A bigger step budget.** Agent-mode chats get a much higher iteration cap than a plain message, so Lumen can chain the lookups a real task needs instead of stopping after the first pass.
- **Visible work.** You see the plan, then each step as it runs — which tool, what it found. Nothing happens behind a curtain, which matters when the output is going into clinical or payer-facing work.
- **Your sources, attached.** Add documents to the chat — notes, med lists, rules docs, denial letters — and the agent grounds its work in them, quoting rather than guessing.

There is **no separate agents screen**. An agent run *is* a chat. It lives in your history like any other conversation: come back tomorrow, ask a follow-up, or fork it and take the same groundwork in a new direction.

## Autonomy: how long a leash

Every agent chat has an autonomy level, which mostly moves one dial — how many steps Lumen may take before checking back in:

| Autonomy | Step budget | Feels like |
|---|---|---|
| Low | up to 8 | A focused assistant — one deliverable, minimal wandering |
| Medium | up to 15 | A resident working up a problem — plan, verify, produce |
| High | up to 25 | A fellow told to *keep going until it's done* |

Each [Specialist](/skills-and-specialists/specialists/) picks a sensible default — Patient Education runs low, most run medium, and Clinical Research and Staff Scheduler run high because their work genuinely takes that many steps. You can change it on any chat.

## What a run looks like

{{< chat-demo title="Agent mode: prior authorization" >}}
{{< user >}}
Prepare a prior auth for an MRI lumbar spine — 46-year-old with L5-S1 radiculopathy, 6 weeks of failed PT and NSAIDs. Denial history attached.
{{< /user >}}
{{< lumen >}}
**Plan:** confirm codes → check coverage policy → gather evidence → draft the request.

1. ICD-10 lookup → **M54.16** (radiculopathy, lumbar region) ✓
2. CPT lookup → **72148** (MRI lumbar spine without contrast) ✓
3. CMS coverage policy → conservative-care documentation required; 6 weeks documented ✓
4. PubMed → 3 guideline citations supporting imaging after failed conservative care ✓
5. Read attached denial letter → denial reason: "conservative therapy not documented"

**Deliverable:** a submission-ready prior authorization with codes, a medical-necessity narrative that directly answers the denial reason, and cited evidence — ready for your review before it goes anywhere.
{{< /lumen >}}
{{< /chat-demo >}}

Every one of those numbered steps appears live in the chat as it runs — and every code came from a lookup, not from memory.

## When to use it

Reach for agent mode when the task has *and-then* in it: find the trials **and then** score eligibility; reconcile the meds **and then** draft the summary; read the availability emails **and then** build the schedule. The fastest way in is to type **`@`** and pick a Specialist — each one is a pre-tuned agent configuration with the right skills pinned and the right step budget set. For a task no Specialist covers, an open agent chat gives Lumen the full skill catalog and tool registry with the same bigger budget.

{{< callout type="info" >}}
**You stay in charge.** The agent shows its work precisely so you can stop it, redirect it, or correct it mid-run — and nothing it produces is final until you've reviewed it.
{{< /callout >}}

## Next steps

- [How the agentic loop works](/learn/agentic-loops/) — what's happening under the hood at each step
- [Meet the 11 Specialists](/skills-and-specialists/specialists/) — pre-tuned agent configurations for the big clinical workflows
- [Browse the Skills directory](/skills-and-specialists/skills/) — the output standards agents pin along the way
