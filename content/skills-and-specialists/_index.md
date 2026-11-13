---
title: "Specialists and skills"
description: "Specialists take on multi-step work and show every step. Skills shape what Lumen writes. Find both, and every built-in tool, in Explore."
lead: "Chat answers a question. A specialist finishes a piece of work, such as a medication review or a prior authorization packet, and checks it against its sources before handing it to you."
weight: 11
aliases:
  - /agents/
  - /agents/clinical-scribe/
  - /agents/diagnostic-support/
  - /agents/research-advisor/
  - /agents/insurance/
  - /agents/document-analyzer/
  - /agents/health-explainer/
  - /agents/symptom-checker/
cascade:
  audience: clinician
group: use
icon: user-round-check
navTitle: "Specialists & skills"
hideAutoGrid: true
---

Most questions need one answer. Some jobs need ten lookups, a document and a careful check before anyone should rely on them. Lumen has two ways to take on that kind of work, and one place to find them.

{{< card-grid cols="3" >}}
{{< card title="Specialists" href="/skills-and-specialists/specialists/" icon="user-round-check" tint="plum" kicker="Type @" >}}A *specialist* is a focused assistant for one kind of work, such as **Medication Review** or **Clinical Educator**. It plans the steps, uses the right tools, and saves a checked result.{{< /card >}}
{{< card title="Skills" href="/skills-and-specialists/skills/" icon="zap" tint="blue" kicker="Type /" >}}A *skill* is a set of instructions Lumen follows for one kind of output, such as a **SOAP Note** or a **Patient Handout**. It shapes your next answer.{{< /card >}}
{{< card title="Explore" href="/skills-and-specialists/explore/" icon="compass" tint="green" kicker="One list" >}}**Explore** lists every specialist, skill and built-in tool in one place, with examples and what your plan includes.{{< /card >}}
{{< /card-grid >}}

## Which one do I need?

| You want to… | Use | Example |
|---|---|---|
| Ask a quick clinical question | Ordinary chat | "Max daily dose of acetaminophen in an adult with cirrhosis?" |
| Get a familiar format | A skill (`/`) | The **SOAP Note** skill with your encounter details |
| Hand off a whole piece of work | A specialist (`@`) | `@Medication Review` with a 12-drug list and a creatinine |

You don't have to choose up front. Lumen picks tools on its own, and applies a matching skill automatically. A specialist tells you when a request belongs to a different specialist.

## How Lumen keeps specialist work checkable

{{< flow >}}
{{< flow-node kicker="You ask" title="Start a specialist" icon="user-round-check" tint="plum" >}}From its page in Explore, or by typing @ in any chat.{{< /flow-node >}}
{{< flow-node kicker="It works" title="Every step shown" icon="list-checks" tint="blue" >}}A task strip lists what it did. Actions outside Lumen wait for your approval.{{< /flow-node >}}
{{< flow-node kicker="Lumen checks" title="A verified result" icon="badge-check" tint="green" >}}Each quote is found again in its source, and the result carries a verdict.{{< /flow-node >}}
{{< /flow >}}

- **Approvals.** When a specialist wants to act outside Lumen (send an email, post a message, write to another system), it waits on an approval card and runs exactly as you approved it. See [Approve actions](/skills-and-specialists/approvals/).
- **Verified results.** Lumen's server re-finds every quoted source before a result is saved. The verdict says **Passed its checks**, which means "checked", never "correct". See [Verified results](/skills-and-specialists/verified-results/).
- **Work keeps going.** Specialist work runs on Lumen's servers. You can close the tab and come back to it later, up to about an hour per task.

{{< callout type="safety" title="A specialist drafts. You decide." >}}
Specialists propose; they don't order, sign or submit. Read the result, open its sources, and apply your own clinical judgment and your organization's policies before you act on it.
{{< /callout >}}

## In this section
