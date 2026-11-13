---
title: "Prepare a prior authorization packet"
navTitle: "Prior Authorization"
description: "The Prior Authorization specialist maps the payer's criteria to chart evidence, looks up the codes, and drafts a packet or appeal for you to review and send."
lead: "Give Prior Authorization the requested service, the payer and the chart notes. It finds the coverage criteria, marks each one against quoted chart evidence, confirms the codes, and drafts the packet."
weight: 1
icon: file-check
who: "physicians, billing and utilization staff"
keywords: ["AI prior authorization", "prior authorization AI assistant", "prior auth automation", "medical necessity letter AI", "denial appeal AI"]
glance:
  what: "Prior Authorization is a Lumen specialist that prepares prior-auth requests, denial appeals and peer-to-peer talking points, with the payer's criteria quoted and matched to chart evidence."
  who: "Physicians, advanced practice providers, and billing, utilization review and front-office staff."
  why: "To see at a glance which coverage criteria the chart supports and which are missing, before you submit, so fewer requests come back denied."
  needs: "A Lumen account on any plan. The requested service, the payer and plan, and the relevant chart notes. About 5 minutes, plus your review."
  result: "A prior-auth packet for your review: criteria marked met, not met or unknown with quoted evidence, confirmed codes, and a draft letter."
---

Prior authorization is mostly matching: what the payer requires against what the chart shows. **Prior Authorization** does that matching for you. It loads the coverage criteria, such as a Medicare National Coverage Determination or the payer policy you attach, quotes each criterion, and marks it met, not met or unknown using quoted evidence from your notes. It confirms ICD-10 and CPT codes by lookup, and drafts the letter. Sending it stays with you.

## Before you start

- **Plan:** any plan.
- **Have ready:** the requested service, the payer and plan, and the chart notes that support it (for example, the last two office notes and any imaging or therapy records).
- **For commercial payers:** attach the payer's policy if you have it. Without the criteria in hand, Prior Authorization won't mark any criterion met or not met.
- Use fictional or de-identified details unless your organization permits patient information in Lumen.

## How to prepare a packet

{{< steps >}}
{{< step title="Open Prior Authorization" >}}Click **Explore**, choose **Specialists**, click **Prior Authorization**, then **Open Prior Authorization**. Or type `@Prior Authorization` in any chat.{{< /step >}}
{{< step title="Pick the task" >}}Under **Start with**, click **Prepare a prior auth**. For a denied claim, click **Write an appeal** instead.{{< /step >}}
{{< step title="Fill in the form" >}}Enter the **Requested service**, for example "MRI lumbar spine for L5-S1 radiculopathy", and the **Payer and plan**, for example "Medicare fee-for-service". For an appeal, add the **Denial reason** as the payer wrote it.{{< /step >}}
{{< step title="Attach the chart notes" >}}Click **Continue to attach files**, add the notes and any payer policy, then send.{{< /step >}}
{{< step title="Review the packet" >}}Open the packet. Look first at any criterion marked unknown or not met, and at codes flagged to confirm. Add what's missing and ask Lumen to update it.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Lumbar MRI prior auth" specialist="Prior Authorization" caption="Illustration with a fictional patient. Check the criteria against the payer's current policy before you submit." >}}
{{< user attach="ortho-notes.pdf" >}}Prior auth for MRI lumbar spine without contrast. 52M, L5-S1 radiculopathy, 6 weeks of physical therapy and NSAIDs without improvement. Commercial payer policy attached.{{< /user >}}
{{< lumen tools="ICD-10 codes retrieved, CPT codes retrieved, Document read, Saved and checked" sources="3" >}}
{{< task-strip >}}
{{< task state="done" label="Read the payer policy and quoted its criteria" >}}
{{< task state="done" label="Matched each criterion to the notes" >}}
{{< task state="done" label="Confirmed the codes by lookup" >}}
{{< task state="done" label="Saved the packet and checked its quotes" >}}
{{< /task-strip >}}

| Criterion (quoted from the policy) | Status | Chart evidence |
|---|---|---|
| Radicular symptoms {{< cite 1 >}} | Met | "pain radiating down the left leg to the lateral foot" {{< cite 2 >}} |
| At least 6 weeks of conservative therapy {{< cite 1 >}} | Met | "PT twice weekly since 9/2, NSAIDs" {{< cite 2 >}} |
| Neurological exam documented {{< cite 1 >}} | Unknown | No reflex or strength exam found in the notes |

**Codes:** CPT 72148 (MRI lumbar spine without contrast) and ICD-10-CM M54.17 (radiculopathy, lumbosacral region), both confirmed by lookup {{< cite 3 >}}.

**One criterion is unknown.** Add the neurological exam to the notes before you submit.

{{< verdict >}}Passed its checks: each criterion is quoted from the policy, and each met criterion quotes the chart.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}

## Tips

- Paste the denial letter's exact wording for an appeal. The specialist answers the stated reason point by point.
- Ask for peer-to-peer prep in the same chat: "Give me three talking points for the peer-to-peer."
- Ask for the letter as a document, for example "Make the letter a Word document."
- To look up one code, you don't need the specialist. See [Find a code](/getting-started/find-a-code/).

## Limits and safety

- The packet is a draft for you to review and edit. Prior Authorization never sends it to the payer.
- A criterion is only marked met or not met when the payer's criteria are loaded. Without them, it stays unknown.
- Coverage policies change. Confirm you're working from the payer's current policy.
- Codes are confirmed by lookup, but choosing the right code for the service is your decision.

{{< callout type="safety" title="Only claim what the chart supports" >}}
Every statement in a prior authorization must be true and documented. Check each quoted piece of evidence against the chart before you sign or submit.
{{< /callout >}}

## FAQ

{{< faq question="Which payers does it know?" >}}
It can load Medicare coverage policies (National and Local Coverage Determinations) itself. For commercial payers, attach the payer's policy so it can quote the criteria.
{{< /faq >}}
{{< faq question="Can it submit the request for me?" >}}
No. Submitting is your act, through the payer's portal or your usual process.
{{< /faq >}}
{{< faq question="Does it predict whether the payer will approve?" >}}
No. The packet lists denial-risk reasons it found, such as a criterion with no chart evidence. It isn't a prediction of the payer's decision.
{{< /faq >}}

## Next steps

{{< related "/guides/prior-auth-in-minutes/" "/guides/appeal-a-denial/" "/tools/coding-labs/" "/skills-and-specialists/verified-results/" >}}
