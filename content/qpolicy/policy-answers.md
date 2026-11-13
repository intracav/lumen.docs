---
title: "Answer staff questions from your policies"
navTitle: "Policy answers"
description: "With qPolicy, staff ask policy questions in Lumen chat and get answers that cite the policy version in force, with a link to open it."
lead: "A nurse asks how often to change a central line dressing. The answer quotes your policy, names the version in force, and opens it in one tap."
weight: 7
icon: message
tier: max
status: add-on
who: "staff, nurse educators and policy managers"
glance:
  what: "In a qPolicy team, Lumen searches your in-force policies whenever staff ask a question in chat. Answers cite the policy and version, and staff can open it to check."
  who: "Every member of the team; policy managers and educators who want staff using the current manual."
  why: "Staff follow the policy in force instead of memory or an old printout, and can see exactly where an answer came from."
  needs: "Lumen Max with the qPolicy add-on, and policies in force. Nothing for staff to set up."
  result: "Staff get cited policy answers in chat, and can browse and search the library."
---

At the bedside, policy questions get answered from memory, a colleague or a printout that may be years old. With qPolicy, staff ask Lumen in plain language. Lumen searches your **in-force** policies and answers with citations, so the nurse sees which policy and version the answer came from and can open it. When the policy changes, answers change with it. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on.
- **Policies:** in force and **Searchable**. Drafts and retired policies are never used.
- **Staff:** members of the team, working in the team (not their personal workspace).

## How staff ask

{{< steps >}}
{{< step title="Work in the team" >}}Make sure the team is selected in the team switcher, for example **Harbor Valley Medical Center**.{{< /step >}}
{{< step title="Ask in chat" >}}Type the question as you'd ask a colleague. Lumen searches your policies automatically; there's nothing to switch on.{{< /step >}}
{{< step title="Check the source" >}}Open the citation. It goes to the policy at the version in force, in the policy reader.{{< /step >}}
{{< /steps >}}

Staff can also browse and search the library directly: click **Policies** in the sidebar. Search shows **Titles and numbers** and **Passages that answer it**.

## What you'll see

{{< screenshot src="qpolicy-reader" alt="A chat answer citing a hospital policy, with the policy open in the reader" caption="An answer that cites your policy. The citation opens the version in force." url="lumen.intracav.ai" >}}
{{< chat-demo title="A nurse, mid-shift" caption="Illustration with a fictional hospital policy. Check your own policy before acting." >}}
{{< user >}}How often do we change transparent dressings on central lines in the ICU?{{< /user >}}
{{< lumen sources="1" >}}
Per **Central line dressing change** (NUR-114, version 5, in force), transparent semipermeable dressings are changed **every 7 days**, and immediately if the dressing is damp, loosened or visibly soiled {{< cite 1 >}}. Gauze dressings are changed every 2 days {{< cite 1 >}}.

{{< sources >}}
{{< source n="1" title="Central line dressing change · NUR-114 · Version 5" meta="Harbor Valley Medical Center · Policy · In force" quote="Transparent semipermeable dressings are changed every 7 days and immediately if damp, loosened or visibly soiled." >}}Vascular Access{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

In the reader, staff see **Policy number**, **Version**, **Effective**, **Last approved**, **Next review**, **Owner** and **Area**, plus a **Contents** list and **Copy a link to this section**. If they owe an attestation, the reader asks for it.

## Who sees which policies

- **Team-wide** policies are used for everyone in the team.
- **Department** policies are used for members of that department.
- Drafts, policies in review and retired policies are never used in answers.

## Questions your policies couldn't answer

For every staff answer in a qPolicy team, Lumen records which policies it drew on and cited, and logs the answers where no policy could be found. It stores no question or answer text. These misses show where your manual has gaps. Today there's no dedicated qPolicy screen for them; {{< ui-path "Knowledge" "Insights" >}} shows **Gaps worth filling**, the most common topics among questions your knowledge couldn't answer.

## Limits and safety

{{< callout type="safety" title="Check the policy before you act" >}}
Answers can be wrong or incomplete. Open the cited policy and confirm it applies to your patient and unit. If no policy is cited, Lumen didn't find one; follow your usual escalation.
{{< /callout >}}

- **Searchable isn't verified.** A policy can be in force and searchable without a clinician having verified its text. See [Policy lifecycle](/qpolicy/policy-lifecycle/).
- Answers draw on your policies alongside Lumen's other sources. The citation shows which is which.
- Printed policies carry *Uncontrolled copy when printed*. The version in Lumen is the controlled one.

## FAQ

{{< faq question="Do staff need to turn anything on?" >}}
No. In a qPolicy team, chats search your in-force policies automatically.
{{< /faq >}}
{{< faq question="What happens when a policy is updated?" >}}
Once the new version is in force and searchable, answers cite it. The old version is no longer used.
{{< /faq >}}
{{< faq question="Can staff edit policies from the reader?" >}}
No. Members read and attest. Editing, approving and retiring are for admins and department heads.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/attestation/" "/qpolicy/policy-lifecycle/" "/chat/sources/" >}}
