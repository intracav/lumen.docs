---
title: "See which requirements your policies cover"
navTitle: "Compliance coverage"
description: "How qPolicy links your policies to CMS Conditions of Participation requirements: Lumen suggests links, a person accepts them, and you see evidence coverage."
lead: "Choose the framework you're held to. Lumen reads your policies against each requirement and suggests links; nothing counts until a person agrees."
weight: 5
icon: scale
tier: max
status: add-on
who: "compliance, quality and accreditation leads"
glance:
  what: "Compliance coverage shows, requirement by requirement, whether an in-force policy has been confirmed by a person as answering it. Requirements for CMS hospital and critical access hospital conditions come from the eCFR."
  who: "Compliance officers, quality and accreditation managers, and CNOs preparing for survey."
  why: "You see where you have policy evidence, where you have gaps, and the quickest fixes, without building a crosswalk spreadsheet."
  needs: "Lumen Max with the qPolicy add-on, policies in force, and a team admin. Allow a few hours for a first review of Lumen's suggestions."
  result: "A coverage map by condition, a list of what to fix first, and links confirmed by named people."
---

Surveyors ask which policy addresses each requirement. qPolicy answers that with **evidence coverage**: for each requirement in a framework you track, whether a person has confirmed an in-force policy that answers it. Lumen reads your policies and suggests the links. Lumen recommends; a person accepts. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on.
- **Role:** team admin.
- **Policies in force:** Lumen reads a policy once it's published.

## Which frameworks are available

| Framework | Source | What you get |
|---|---|---|
| **Medicare Conditions of Participation for Hospitals (42 CFR 482)** | eCFR | Full requirement text, kept current |
| **Medicare Conditions of Participation for Critical Access Hospitals (42 CFR 485 Subpart F)** | eCFR | Full requirement text, kept current |
| **Joint Commission Hospital Accreditation Standards** | Chapter skeleton | Mapped by chapter and standard number only. Lumen doesn't reproduce its text; keep your licensed copy to hand |

## How to measure coverage

{{< steps >}}
{{< step title="Choose your framework" >}}Click {{< ui-path "Policies & compliance" "Compliance" "Readiness" >}}. Under **Choose what you are held to**, click **Track this** on your framework. Requirements download from the regulator.{{< /step >}}
{{< step title="Let Lumen read your policies" >}}Lumen reads your published policies against each requirement. The page shows progress and *Nothing counts until you agree*.{{< /step >}}
{{< step title="Review Lumen's links" >}}Click **Accept Lumen's links** (or **See Lumen's links**). **Ready to accept** lists links Lumen is confident about, with the sentence from your policy. **Worth a look** lists partial or less certain ones.{{< /step >}}
{{< step title="Decide each one" >}}On each card, compare **What the regulation asks** with **What your policy says**, then choose **Agree with Lumen**, **Covers it fully**, **Covers part of it** or **Doesn't cover it**. You can **Accept all** confident links after checking the preview.{{< /step >}}
{{< step title="Work the gaps" >}}Back on **Readiness**, open a requirement and choose **Link a policy you already have**, **Draft a policy for this**, **Adopt as draft** (from a template), or **Not applicable to us**.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="compliance-treemap" alt="Readiness treemap for the hospital Conditions of Participation, each condition shaded by its worst status" caption="Readiness: one tile per condition, sized by its requirements and shaded by status." url="lumen.intracav.ai/org/harbor-valley/admin/compliance/readiness" >}}
{{< lui-block title="Readiness" sub="Medicare Conditions of Participation for Hospitals (42 CFR 482)" >}}
{{< lui-callout variant="info" title="71% of requirements have confirmed policy evidence" >}}This shows evidence coverage, not a compliance determination.{{< /lui-callout >}}
{{< lui-bars data="482.13 Patient's rights:82,482.23 Nursing services:76,482.42 Infection prevention:64,482.25 Pharmaceutical services:58,482.43 Discharge planning:41" unit="%" max="100" color="green" label="Covered share by condition" >}}
{{< lui-rows >}}
{{< lui-row title="**Do this first**" body="482.43(c) · No policy yet · a template is ready" value="Use the template" >}}
{{< lui-row title="3 confirmed links need re-confirming" body="Their policies changed since they were confirmed." value="Confirm it" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

Requirement statuses are **Covered**, **Partly covered**, **Not covered** and **Not applicable**. Each link also shows who confirmed it: **Confirmed**, **Reviewed by a person**, **Template link, not reviewed** or **Not reviewed yet**.

## Good to know

- **Edits make a link stale.** A confirmation is tied to the policy text that was confirmed. If the policy changes, the link shows **Policy changed since confirmed — re-confirm** and stops counting as covered until someone re-confirms it.
- **Work queue.** {{< ui-path "Compliance" "Work queue" >}} ranks everything that needs attention across your policies. **Why this order?** explains the ranking.
- **Survey date.** Set your next survey date to see time remaining alongside coverage.
- **From a policy.** In the policy reader, **Lumen tools** offers **Find requirements**; suggestions wait for you in Compliance › Review.

## Limits and safety

{{< callout type="important" title="Evidence coverage, not a verdict" >}}
Coverage shows which requirements have an in-force policy that a named person confirmed. It isn't a compliance determination, an accreditation opinion or a prediction of survey results. Surveyors assess practice as well as policy.
{{< /callout >}}

- Joint Commission content is a chapter-and-standard skeleton only. DNV is not available.
- Lumen's suggestions can be wrong. Read both sides before agreeing.
- Lumen doesn't detect contradictions between your policies.

## FAQ

{{< faq question="Does a high percentage mean we'll pass survey?" >}}
No. It means many requirements have confirmed policy evidence. Whether practice matches policy is something your team and surveyors assess.
{{< /faq >}}
{{< faq question="Where does the regulation text come from?" >}}
CMS hospital and critical access hospital conditions are downloaded from the eCFR. Joint Commission standards are listed by number only.
{{< /faq >}}
{{< faq question="Who is recorded as confirming a link?" >}}
The person who accepted it, with the date. That record appears in the evidence binder.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/regulatory-monitoring/" "/qpolicy/evidence-binder/" "/qpolicy/policy-lifecycle/" >}}
