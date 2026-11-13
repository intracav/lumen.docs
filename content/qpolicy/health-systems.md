---
title: "Run policy across a health system"
navTitle: "Health systems"
description: "How a health system writes a policy once in qPolicy and sends it to each hospital, bound as written or for each facility to adopt or vary with a reason."
lead: "Write system policy once, send it to every facility, and see where each hospital matches, varies or falls behind."
weight: 9
icon: network
tier: max
status: add-on
who: "system compliance and policy leaders"
glance:
  what: "A health system in qPolicy is a team that acts as the compliance office for several hospital teams (facilities). It sends policies to facilities as bound or adopt-or-vary, and sees readiness for all of them on one page."
  who: "System CNOs, system compliance and policy offices, and facility policy managers."
  why: "System standards reach every hospital, local differences are recorded with a reason, and you can see which facility is closest to survey and least covered."
  needs: "Lumen Max with the qPolicy add-on for the system team and each facility. The system team's owner sets it up, and you must be an admin of each facility you add."
  result: "A system team linked to its facilities, and system policies sent to them."
---

A health system wants one standard where it matters and room for local practice where it doesn't. In qPolicy, the system is its own team (Lumen's word for an organization) that acts as the compliance office, and each hospital is a **facility**: its own team, with its own members, survey dates and readiness. The system writes a policy once and sends it to every facility, either **Bound** or **Adopt or vary**.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on for the system team and for each facility.
- **Role:** only the system team's owner can make it a health system. To add a facility, you must be an admin of that facility's team.
- **Where:** the **Health system** page appears under {{< ui-path "Compliance" >}} once a team is part of a system. Ask Intracav for the direct link to set up a new system.

## Bound or adopt or vary

| Binding | What facilities get |
|---|---|
| **Bound** | Published at every facility as written. Facilities can't edit or retire it, and a new system version is applied everywhere. |
| **Adopt or vary** | Each facility receives a draft. It can publish it unchanged, or vary it with a recorded reason. New system versions are offered, never pushed. |

## How to set up a health system

{{< steps >}}
{{< step title="Make the system team" >}}On the system team, open {{< ui-path "Compliance" "Health system" >}} and click **Make this team a health system**. Confirm with **Make health system**.{{< /step >}}
{{< step title="Add facilities" >}}Click **Add facility** and choose each hospital's team from the teams you administer.{{< /step >}}
{{< step title="Send a policy" >}}Open the **System policies** view, choose a published policy and click **Send to facilities**. Pick **Bound** or **Adopt or vary** and click **Send as** with that choice. Hospitals that join later receive it too.{{< /step >}}
{{< step title="Facilities decide (adopt or vary)" >}}At each facility, the policy arrives as a draft. The facility publishes it through its own approval route, or edits it and uses **Record why this differs** on the policy page. When a newer system version arrives, they can choose **Use newer system version**.{{< /step >}}
{{< step title="Watch the differences" >}}On the system team, the **Needs attention** view lists facility copies that are **Varied**, **Not published**, **Behind system** or **Upgrade not published**, with the **Reason given**.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< lui-block title="Health system" sub="Readiness across every facility in the system, and where they differ." >}}
{{< lui-actions "Facilities" "Closest to survey" "System policies" "Needs attention" >}}
{{< lui-rows >}}
{{< lui-row title="**Harbor Valley Medical Center**" body="Survey in 54 days · Worst framework 71% covered" value="At risk" >}}
{{< lui-row title="**Harbor Valley North**" body="Survey in 210 days · Worst framework 84% covered" >}}
{{< lui-row title="**Cedar Point Critical Access Hospital**" body="No survey date set · Worst framework 66% covered" >}}
{{< /lui-rows >}}
{{< lui-callout variant="info" >}}At risk = survey within 90 days and a framework under 80% covered.{{< /lui-callout >}}
{{< /lui-block >}}

## Limits and safety

- **Bound policies change everywhere at once.** When the system publishes a new version of a bound policy through its own approval route, it applies at every facility. Use bound only where one standard must hold.
- Removing a facility leaves its policies with it. Bound system policies become ordinary policies it can edit, and new system policies stop reaching it.
- Coverage figures are evidence coverage, not a compliance determination. See [Compliance coverage](/qpolicy/compliance-coverage/).

## FAQ

{{< faq question="Do facilities keep their own staff and settings?" >}}
Yes. Each facility is its own team, with its own members, departments, survey dates and readiness.
{{< /faq >}}
{{< faq question="Can a facility refuse a system policy?" >}}
For **Adopt or vary**, a facility can leave the draft unpublished or vary it with a reason; both show on the system's **Needs attention** view. A **Bound** policy can't be edited or retired by the facility.
{{< /faq >}}
{{< faq question="Who sees the facility's chats or documents?" >}}
Nobody at the system level. The system sees policy status and readiness, not staff conversations.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/review-and-approval/" "/qpolicy/compliance-coverage/" "/organizations/departments-and-seats/" >}}
