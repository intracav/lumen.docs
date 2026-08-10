---
title: "Automate a Recurring Report with Triggers"
description: "Put a workflow on a schedule: build a Monday-morning literature digest, add a cron trigger, test-fire it, activate — and read it with your coffee."
weight: 28
audience: org
tier: plus
time: "~20 minutes"
keywords: ["scheduled AI workflow", "automated literature digest", "cron trigger AI report"]
---

The vascular access team at Riverbend Medical Center (fictional, like every name in this guide) wants the same thing every clinical team wants: to stay current without anyone owning the chore. New central-line and securement literature lands all week; somebody used to skim it Sunday night, until she didn't. In this guide you'll build a workflow that searches the recent literature, summarizes what matters, and emails the team a digest — then put it on a **schedule trigger** so it fires every Monday at 7:00 with nobody at the keyboard.

## What you'll make

A standing Monday 7am literature digest: a workflow with a cron trigger, its schedule previewed in your timezone, test-fired before anyone trusts it, activated, and verified in the run history the following Monday.

## Before you start

- **A plan that covers scheduled workflows** {{< tier-badge "plus" >}} — see [Plans](/plans/).
- **A connected email account** for the sending step. Connected accounts are personal — the workflow sends through *your* account, and colleagues who reuse a shared workflow connect their own.
- **Basic familiarity with the workflow editor.** If nodes and connections are new, skim [Building blocks](/workflows/building-blocks/) first — this guide assumes you can wire three nodes together.

{{< callout type="warning" >}}
**A literature digest carries no PHI — keep your triggers that clean.** The moment a trigger watches something clinical (a referral inbox, a CRM of patients), whatever arrives flows into the workflow. Point triggers at dedicated, purpose-built sources, and see [privacy and de-identification](/tools/privacy/) before automating anything that touches patient data.
{{< /callout >}}

## The steps

<div class="steps-container">

{{< step num="1" title="Build the digest workflow" >}}
In the workflow editor, wire the chain: a literature-search step for the topic, an LLM step to summarize, and a **Send Email** step for delivery. For the summarize step, a prompt like:

```text
Summarize the new papers on central-line infection and catheter
securement from the past week for a vascular access team. For each:
one-line finding, why it matters clinically, and the citation.
Lead with anything practice-relevant. If it's a thin week, say so —
don't pad.
```

**You should see:** a three-node chain — search feeding summary feeding email. That last instruction matters more than it looks: a digest the team trusts on thin weeks is a digest they'll still read in March.
{{< /step >}}

{{< step num="2" title="Run it manually once" >}}
Press **Run** and read the output end to end, exactly as the team would receive it.

**You should see:** a digest you'd actually send — real papers, honest summaries, working citations. Fix the prompt now, while you're watching. Automation multiplies whatever it's given; make sure it's multiplying something good.
{{< /step >}}

{{< step num="3" title="Add the schedule trigger" >}}
Add a **schedule (cron) trigger** at the start of the workflow, where an input node would go. For Mondays at 7:00:

```text
0 7 * * 1
```

**You should see:** the editor's **preview of the next run times, in your timezone** — the next several Mondays at 7:00am, listed before you commit. That preview is your safety net: "did I just schedule this for 3am?" gets answered here, not by a 3am email.
{{< /step >}}

{{< step num="4" title="Point the email at the team" >}}
Configure the Send Email step with the team's distribution address and a subject line that survives a crowded inbox — "Vascular Access Literature Digest — week of {date}" beats "Workflow output."

**You should see:** the sending step tied to your connected email account, addressed to the team.
{{< /step >}}

{{< step num="5" title="Test-fire the trigger" >}}
Use the trigger's **test-fire**: it runs the workflow right now, exactly as if Monday 7:00 had arrived.

**You should see:** the digest land in the team inbox within minutes, and the run recorded in the [run log](/workflows/running/). Test-fire until the email looks right — the first unattended run should never be the first run.
{{< /step >}}

{{< step num="6" title="Activate" >}}
Switch the trigger to **active**.

**You should see:** the workflow armed to run unattended. You can deactivate any time to take it offline without deleting anything — useful for holiday weeks or while you rework the prompt.
{{< /step >}}

{{< step num="7" title="Check the run history next Monday" >}}
Monday, 7:05, coffee in hand: the digest should be in the inbox. Open the workflow's run history as well.

**You should see:** a run stamped at 7:00 with its output — the digest as sent. That history is your audit trail: every scheduled run is recorded, so "did it fire?" is a lookup, never a mystery.
{{< /step >}}

</div>

{{< tip title="Schedules first, then graduate" >}}
A cron trigger is the gentlest automation there is: no external system to wire up, and the worst failure mode is a report that arrives looking wrong. Once the digest has run reliably for a few Mondays, the same pattern extends to webhook, email, and CRM triggers — see [Workflow Triggers](/workflows/triggers/) for the full menu.
{{< /tip >}}

## Troubleshooting

- **The digest arrived at the wrong hour.** Cron plus timezones is a classic trap — re-open the trigger and read the next-run preview, which shows resolved times in your timezone. Adjust until the preview says what you mean.
- **Monday came and nothing fired.** Check that the trigger is *activated* — a tested trigger isn't a live one. Then check the run history: a run that fired but failed mid-chain appears there with the failing step identified.
- **The run succeeded but no email landed.** Check the Send Email step's connected account — if the account connection lapsed, the sending step is the one that feels it. Reconnect and test-fire again.

## Next steps

- [Workflow Triggers](/workflows/triggers/) — webhooks, inbox triggers, and CRM events beyond the schedule.
- [Running & results](/workflows/running/) — reading run history and replaying past runs.
- [Sharing workflows & blueprints](/workflows/publish/) — hand the digest pattern to other teams.
