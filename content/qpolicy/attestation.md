---
title: "Collect policy attestations"
navTitle: "Attestation"
description: "How qPolicy asks staff to attest to each published policy version, tracks deadlines, and shows completion as a department-by-policy heatmap."
lead: "Staff attest to the exact version in force. You see who owes what, by department and by policy, and remind only the people who are behind."
weight: 4
icon: clipboard-check
tier: max
status: add-on
who: "policy managers, educators and department heads"
glance:
  what: "Attestation is a staff member's recorded statement that they have read and understood a specific version of a policy. qPolicy assigns it when a policy is published and tracks it per version."
  who: "Policy and compliance managers, nurse educators, and department heads who chase completion."
  why: "You can show a surveyor who attested to which version and when, and see at a glance which departments are behind."
  needs: "Lumen Max with the qPolicy add-on, a team admin to set the rules, and published policies. About 10 minutes to set up."
  result: "Attestations assigned on publish, a heatmap of completion, and one-click reminders."
---

A policy only protects patients if staff know it. **Attestation** in qPolicy is a member's recorded statement that they have read and understood a specific version of a policy. It's bound to that version: when a new version is published, staff are asked again. Opening a policy is not attesting, and qPolicy keeps the two apart. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on.
- **Role:** a team admin sets the rules. Department heads can follow up with their own staff.
- **Policies in force:** attestation is assigned against a published version.

## How to set who attests

{{< steps >}}
{{< step title="Set the team rule" >}}Click {{< ui-path "Policies & compliance" "Policies" "Approvals & attestation" >}}. Under **Who attests**, switch on **Ask staff to attest each new version** and choose a **Deadline**.{{< /step >}}
{{< step title="Override for one policy" >}}Open the policy and its **Attestation** tab. Under **Who is asked to attest this policy**, choose **Follow the team setting**, **Always ask for this policy**, or **Never ask for this policy** (for reference documents staff need not sign).{{< /step >}}
{{< step title="Narrow the audience if needed" >}}Under **Who**, choose **Everyone who can see it** or **Only some people**.{{< /step >}}
{{< step title="Ask now" >}}For a policy already in force, click **Ask them to attest now**.{{< /step >}}
{{< /steps >}}

## What staff do

{{< steps >}}
{{< step title="See what they owe" >}}Members see a badge on **Policies** in the sidebar, and policies they owe are marked **Attestation due** or **Attestation overdue**.{{< /step >}}
{{< step title="Read and attest" >}}They open the policy, tick **I have read and understood version** with the version number, and click **Attest**.{{< /step >}}
{{< step title="Confirmation" >}}The policy then shows *You attested that you read and understood version 5* with the date and time.{{< /step >}}
{{< /steps >}}

## How to track and chase completion

Open {{< ui-path "Policies" "Attestation" >}}. The top shows **Signatures outstanding**, **Past their deadline** and **People behind**. Switch views between **Heatmap**, **People**, **Policies** and **Departments**. Click **Remind everyone overdue**, or open a cell and click **Remind**.

## What you'll see

{{< screenshot src="qpolicy-attestation-heatmap" alt="Attestation heatmap with departments as columns and policies as rows" caption="Each cell is one department and one policy. Grey means nobody there was assigned it." url="lumen.intracav.ai/org/harbor-valley/admin/policies/attestation" >}}
{{< lui-block title="Attestation" sub="Heatmap · People · Policies · Departments" >}}
{{< lui-stats >}}
{{< lui-stat label="Signatures outstanding" value="46" >}}
{{< lui-stat label="Past their deadline" value="12" trend="down" >}}
{{< lui-stat label="People behind" value="19" >}}
{{< /lui-stats >}}
{{< lui-rows >}}
{{< lui-row title="**Central line dressing change**" body="Vascular Access 100% · ICU 92% · Emergency Not assigned · Med-Surg 64%" >}}
{{< lui-row title="**Hand hygiene**" body="Vascular Access 95% · ICU 99% · Emergency 71% · Med-Surg 88%" >}}
{{< lui-row title="**Restraint use and monitoring**" body="Vascular Access Not assigned · ICU 81% · Emergency 43% · Med-Surg 77%" >}}
{{< /lui-rows >}}
{{< lui-kv "Legend=90% or more attested · 50–89% · Under 50% · Not assigned · Someone is overdue" >}}
{{< lui-actions "Remind everyone overdue" "Overdue only" >}}
{{< /lui-block >}}
{{< /screenshot >}}

## Good to know

- **Version-bound.** An attestation is tied to the version it was given for. Publishing a new version starts a new round.
- **Honest percentages.** A cell never rounds up to 100% while anyone still owes it, and **Not assigned** is shown as not assigned, not as 0%.
- **Departments.** Each person counts in their own department. Someone in two departments counts in both.
- **Reminders.** Lumen won't remind the same person twice on the same day.
- **Read receipts** on a policy's Attestation tab show who opened it. They're a weaker signal and are labelled *Opening is not attesting*.

## Limits and safety

- An attestation records that a person said they read and understood a policy. It isn't a competency assessment.
- A score in a Lumen Live session or a course about a policy is never counted as an attestation.
- Imported policies in force aren't assigned attestation automatically. Use **Ask them to attest now** if you need it.

## FAQ

{{< faq question="If we fix a typo, does everyone have to attest again?" >}}
Publishing a new version asks again when the team rule is on. For a trivial change, set the policy to **Never ask for this policy** first, or turn the rule off for that publish.
{{< /faq >}}
{{< faq question="Can we export who attested?" >}}
Yes. The evidence binder includes an **Attestation roster**, and the policy **Audit log** can be downloaded as CSV. See [Evidence binder](/qpolicy/evidence-binder/).
{{< /faq >}}
{{< faq question="How do staff find out they owe an attestation?" >}}
Staff always see what they owe in Lumen: the badge on **Policies** and the **Attestation due** or **Attestation overdue** marks. Reminders you send go to the people who still owe the policy.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/review-and-approval/" "/qpolicy/evidence-binder/" "/qpolicy/policy-answers/" >}}
