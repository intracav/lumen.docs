---
title: "Monitor regulatory changes"
navTitle: "Regulatory monitoring"
description: "qPolicy watches the Federal Register for changes to 42 CFR 482, 485 Subpart F and 45 CFR 164, plus sources you add, and drafts edits a person decides on."
lead: "Know when a rule changes that touches one of your policies, see the suggested edit, and decide. Nothing in a policy changes until you do."
weight: 6
icon: rss
tier: max
status: add-on
who: "compliance and policy managers"
aliases: ["/organizations/policy-monitoring/"]
glance:
  what: "Regulatory monitoring checks the Federal Register, and any regulator pages you add, for rule changes. When a change touches one of your policies, Lumen shows what changed and drafts an edit for a person to accept, edit or set aside."
  who: "Compliance officers, policy managers and accreditation leads."
  why: "You hear about relevant rule changes in days rather than at survey, and each change arrives with the affected policy and a draft edit."
  needs: "Lumen Max with the qPolicy add-on and a team admin. About 10 minutes to choose sources."
  result: "Watched sources, and a queue of rule changes waiting for a decision."
---

Policies rest on regulations, and regulations change. Re-reading the Federal Register on a calendar reminder rarely lasts. qPolicy checks it every few hours for rules that amend the conditions you're held to. When a change touches one of your policies, it shows what changed, why it matters, and a suggested edit. A person decides; the edit then goes through your normal approval route. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on.
- **Role:** team admin.
- **Know your status:** if you're a critical access hospital, turn on the critical access feed.

## What Lumen watches

| Source | Covers | Default |
|---|---|---|
| **CMS — Hospital Conditions of Participation** | Every proposed and final rule amending 42 CFR Part 482 | On |
| **CMS — Critical Access Hospital Conditions** | Rules amending 42 CFR 485, Subpart F | Off. Turn it on if you're a critical access hospital |
| **HHS — HIPAA Privacy, Security & Breach Notification** | Rules amending 45 CFR Part 164 | On |
| **Your own sources** | A state regulator or accreditor page you add | You choose |

## How to set up sources

{{< steps >}}
{{< step title="Open Sources" >}}Click {{< ui-path "Policies & compliance" "Compliance" "Changes" "Sources" >}}.{{< /step >}}
{{< step title="Check the platform baseline" >}}Under **Platform baseline**, choose **Monitor** or **Stop monitoring** for each feed. Stopping one is recorded with your reason.{{< /step >}}
{{< step title="Add your own" >}}Under **Your own sources**, click **Add source**. Enter a **Name** (for example *State Nursing Board*), the **Source URL** (it must start with https://) and **Check every (hours)**. Click **Add source**.{{< /step >}}
{{< step title="Or record that you need none" >}}If the baseline is enough, click **We need no additional sources** and **Record the decision** with what you reviewed and why. It's kept as an auditable record.{{< /step >}}
{{< /steps >}}

Each source shows when it was last crawled. Use **Sync now** to check immediately, or **Pause** and **Resume**.

## How to decide on a change

{{< steps >}}
{{< step title="Open What changed" >}}Click {{< ui-path "Compliance" "Changes" >}}. **Needs decision** lists rule changes that touch your policies; **All changes** shows every rule from your sources.{{< /step >}}
{{< step title="Read it" >}}Each card shows the rule, the policy it touches, **More detail** on why, and **The edit** Lumen suggests, marked in the section it changes.{{< /step >}}
{{< step title="Decide" >}}Choose **Accept & send for sign-off** to save the edit as a new version and send it to your approvers, **Edit first** to change the wording, or **Not applicable** with a reason such as *The policy already says this.* or *Another policy covers it.* For a proposed rule, **Acknowledge** it; there's nothing to change yet.{{< /step >}}
{{< step title="Sign off as usual" >}}The new version goes through your [approval route](/qpolicy/review-and-approval/). It's in force only when the last step approves it.{{< /step >}}
{{< /steps >}}

{{< flow >}}
{{< flow-node kicker="Federal Register" title="A rule changes" icon="rss" tint="blue" >}}Checked every few hours.{{< /flow-node >}}
{{< flow-node kicker="Finding" title="Matched to your policy" icon="search" tint="plum" >}}With a suggested edit.{{< /flow-node >}}
{{< flow-node kicker="You decide" title="Accept, edit or set aside" icon="user-round-check" tint="accent" >}}Your reason is recorded.{{< /flow-node >}}
{{< flow-node kicker="Sign-off" title="Your approval route" icon="check-circle" tint="green" >}}Nothing publishes on its own.{{< /flow-node >}}
{{< /flow >}}

## What you'll see

{{< screenshot src="compliance-findings" alt="A rule change from the Federal Register with the affected policy and a suggested edit" caption="A rule change waiting for a decision, with the suggested edit. Illustration with a fictional rule and policy." url="lumen.intracav.ai/org/harbor-valley/admin/compliance/monitoring" >}}
{{< lui-block title="What changed" sub="Rule changes from the sources you watch. Nothing in a policy changes until you decide." >}}
{{< lui-block title="Final rule amending 42 CFR 482.43 (Discharge planning)" sub="CMS — Hospital Conditions of Participation · Affects: Discharge planning, ICU" >}}
{{< lui-kv "What the rule asks=Discharge planning evaluations must include the patient's goals of care and treatment preferences.;The edit=In “Evaluation”: add goals of care and treatment preferences to the discharge planning evaluation." >}}
{{< lui-actions "Accept & send for sign-off" "Edit first" "Not applicable" >}}
{{< /lui-block >}}
{{< /lui-block >}}
{{< /screenshot >}}

## Good to know

- If the policy changed after the edit was drafted, the card says so. Click **Re-draft** so you approve against the latest version, or **Edit myself**.
- Accepted changes show **Accepted by** with a name, and link to **Open approval**.
- Rule changes for your sources appear under **All changes** even when none of your policies are affected.

## Limits and safety

- **Nothing auto-publishes.** Accepting saves a new version and sends it for sign-off. The policy in force doesn't change until your route approves.
- Lumen's match between a rule and your policy can be wrong. Read the rule before accepting.
- Federal monitoring covers the three Federal Register feeds above. CDC, FDA and accreditor websites aren't watched by default; add specific pages as your own sources if you need them.
- A page you add is re-read on your schedule. Pages that block automated access can't be monitored.

## FAQ

{{< faq question="Does Lumen change our policy when a rule changes?" >}}
No. It drafts an edit. A person accepts or edits it, and your approval route decides whether it goes into force.
{{< /faq >}}
{{< faq question="We're a critical access hospital. What should we watch?" >}}
Turn on **CMS — Critical Access Hospital Conditions**. It's off by default because most hospitals don't need it.
{{< /faq >}}
{{< faq question="Can we watch our state health department?" >}}
Yes. Add its page as one of **Your own sources** with how often to check it.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/review-and-approval/" "/qpolicy/compliance-coverage/" "/qpolicy/evidence-binder/" >}}
