---
title: "Send a weekly evidence digest automatically"
navTitle: "Automate a weekly report"
description: "Set up a Lumen workflow that searches PubMed and ClinicalTrials.gov every week and emails your team a digest, with no one at the keyboard."
lead: "A weekly evidence digest that runs on a schedule, sends from your own mailbox, and keeps a record of every run."
weight: 28
icon: workflow
who: "power users and team leads"
glance:
  what: "A workflow is a set of steps Lumen runs for you. This guide sets one up on a schedule trigger, so it runs by itself every week and emails a digest of new research."
  who: "Clinical educators, nurse scientists, device-maker clinical and marketing teams, and anyone who needs to keep up with new evidence on a topic."
  why: "Your team stays current on new studies and trials without anyone remembering to search, and every run is recorded so you can see that it happened."
  needs: "A Lumen account on any plan, an email account you can connect (Gmail or another mailbox), and the search terms for your topic. About 15 minutes."
  result: "A live workflow that runs every Monday morning, emails a graded evidence digest to your list, and shows each run in its history."
---

The vascular access team at Harbor Valley Medical Center wants to know when new studies on midline catheters and PICC dwell time are published. Someone used to search PubMed on Sunday nights, until she stopped. This guide sets up the **Clinical Evidence Monitor** workflow: every Monday at 8:00 it searches PubMed and ClinicalTrials.gov, grades what's new, and emails the team a short digest.

Scheduled workflows run on Lumen's servers, so nobody needs to have Lumen open when they run.

## Before you start

- **Plan.** Scheduled workflows and email sending work on every plan. Some other workflow steps and templates need Pro or above. See [Plans](/plans/).
- **An email account to send from.** You connect it in the workflow. Connections are personal: the digest is sent from your mailbox.
- **Your search terms**, the same words you'd type into PubMed, such as "midline catheter" or "PICC dwell time".
- **The recipients' email addresses.**

## How to set up a weekly digest

{{< steps >}}
{{< step title="Open Workflows" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai). In the sidebar, click **More**, then **Workflow**. The **Workflows** page opens.
{{< /step >}}

{{< step title="Start from the template" >}}
Click **New workflow**. In **Start a new workflow**, find the **Automations** section and choose **Clinical Evidence Monitor** ("A weekly PubMed and ClinicalTrials.gov sweep on your keywords").
{{< /step >}}

{{< step title="Fill in the setup" >}}
In **Set up Clinical Evidence Monitor**:

- Change **Workflow name** if you like, for example "Vascular access evidence digest".
- Under **What device, procedure, or therapy keywords should we search?**, type your terms.
- Under **When should the weekly sweep run?**, choose **Every Monday at 8:00**.
- Under **Who should receive the digest?**, type the recipients' addresses.

The sending mailbox is connected in the editor after install, and the workflow stays off until it is. Click **Install and open**.
{{< /step >}}

{{< step title="Connect the sending mailbox" >}}
The workflow opens in the editor. Click the **Send Email** step and choose your **Connected account**. If you haven't connected a mailbox yet, connect Gmail or another email account from there.
{{< /step >}}

{{< step title="Check the schedule and time zone" >}}
Click the **Schedule trigger** step at the start of the workflow. Check the **Timezone**, and change it to your own if needed. After you save the workflow, **Next 5 fires** lists the next five run times, so you can confirm it says Monday at 8:00 in your time zone.
{{< /step >}}

{{< step title="Run a test" >}}
In the Schedule trigger step, click **Run with mock input**, then **Run** in **Test fire trigger**. The workflow runs once now, exactly as it would on Monday. Check that the digest arrives and reads well.
{{< /step >}}

{{< step title="Turn it on" >}}
Click **Activate** in the editor toolbar. The button changes to **Live**, and you'll see "Workflow is live — triggers will fire automatically." To stop it for a while, hover over **Live** and click **Pause**.
{{< /step >}}

{{< step title="Check the run history after Monday" >}}
Open the workflow and click **Run history** in the toolbar. Each run is listed with its time and result. A run that failed shows which step failed.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="workflows-runs" alt="The Run history panel of a Lumen workflow showing weekly runs of a Clinical Evidence Monitor" caption="Run history. Each scheduled run is recorded with its result." url="lumen.intracav.ai/workflow" >}}
{{< task-strip >}}
{{< task state="done" label="Schedule trigger · Monday 08:00" meta="Fired on time" >}}
{{< task state="done" label="Search PubMed and ClinicalTrials.gov" meta="9 new items" >}}
{{< task state="done" label="Grade and summarize" meta="2 worth attention" >}}
{{< task state="done" label="Send Email" meta="Sent to 12 recipients" >}}
{{< /task-strip >}}
{{< /screenshot >}}

## Check it worked

- The test run's email arrived in the recipients' inboxes.
- The editor toolbar shows **Live**.
- **Next 5 fires** lists Mondays at 8:00 in your time zone.
- After the first Monday, **Run history** shows a run at that time.

## Tips

- **Test until the email looks right.** The first unattended run shouldn't be the first time you read the output.
- **Other schedules.** The setup offers **Every weekday at 8:00**, **Every day at 8:00**, **Every Monday at 8:00**, **Every hour** and **First of the month at 8:00**. For anything else, edit the **Cron expression** in the Schedule trigger step.
- **Other templates.** The **Automations** list also includes **Weekly Research Newsletter**, **Device Recall Watch**, **Adverse Event Signal Monitor**, **Coverage Policy Watch** and **Weekly Denial Digest**.
- **Other triggers.** Workflows can also start from a webhook or an incoming email. See [Triggers](/workflows/triggers/).

## Limits and safety

- **Scheduled runs are unattended.** They run on Lumen's servers whether or not you're signed in. A run you start with **Run** from the editor canvas stops if you close the editor.
- **No patient information in a digest.** Keep scheduled workflows to published literature and similar public sources. Point any trigger that watches an inbox at a dedicated address, and follow your organization's rules for patient data.
- **The digest is a summary.** Grades and summaries can be wrong. Open the study before you change practice.
- **How many run at once.** Free and Pro accounts can run up to 3 workflows at the same time; Plus and Max up to 10.

## FAQ

{{< faq question="Does my computer need to be on?" >}}
No. Once the workflow is **Live**, scheduled runs happen on Lumen's servers.
{{< /faq >}}
{{< faq question="Why did the digest arrive at the wrong hour?" >}}
Check the **Timezone** in the Schedule trigger step, then read **Next 5 fires**. Triggers added from **Workflow settings** › **Manage triggers** use UTC, so prefer the Schedule trigger step when the time zone matters.
{{< /faq >}}
{{< faq question="Monday came and nothing arrived. What do I check?" >}}
First, check that the toolbar shows **Live**, not **Activate**. Then open **Run history**: a run that started but failed shows the failing step. If the **Send Email** step failed, reconnect your mailbox and run a test again.
{{< /faq >}}

## Next steps

{{< related "/workflows/triggers/" "/workflows/running/" "/workflows/editor/" "/guides/literature-review/" >}}
