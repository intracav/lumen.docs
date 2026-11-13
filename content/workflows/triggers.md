---
title: "Run a workflow automatically with triggers"
navTitle: "Triggers"
description: "Make a Lumen workflow run on its own: on a schedule in your time zone, when an email arrives, when another system calls a webhook, or when a CRM record changes."
lead: "A trigger turns a workflow you run into a workflow you never have to remember to run."
weight: 3
icon: clock
glance:
  what: "Triggers start a workflow without anyone clicking Run: a schedule, an incoming email, a webhook call, a CRM change, or a manual start."
  who: "Anyone with a workflow that should run regularly or in response to something."
  why: "Triggered runs are unattended. They run on Lumen's servers whether or not anyone is signed in, and every run is recorded."
  needs: "A saved workflow. A connected email account for email triggers. Pro or above for the CRM trigger. About 10 minutes."
  result: "A live workflow that runs on its own."
---

A workflow you have to remember to run is a chore. A **trigger** is the step at the start of a workflow that decides when it runs: every Monday at 8:00, when an email lands in the referral folder, or when another system sends a request. Triggered runs are **unattended**: they run on Lumen's servers whether or not you're signed in, and each run is saved in the workflow's history.

## Before you start

- **A saved workflow** that works when you click **Run**. See [Build a workflow](/workflows/editor/).
- **For email triggers:** a connected Gmail, Microsoft 365 (Outlook) or IMAP mailbox.
- **For the CRM trigger:** Pro or above and a connected CRM.

## The trigger types

| Trigger | Runs when | Good for |
|---|---|---|
| **Schedule trigger** | At the times you set, in the time zone you choose | Weekly recall sweeps, monthly coverage checks, daily digests |
| **Email trigger** | A new email arrives in the folder or label you choose | Referral triage, complaint intake, answering reps' questions |
| **Webhook trigger** | Another system sends a request to the workflow's address | Starting a workflow from your own systems |
| **CRM trigger** | A contact is created or updated in HubSpot, Zoho CRM or Salesforce | Logging and routing new inquiries |
| **Manual trigger** | You click **Run** | Workflows you run on demand, such as **Reimbursement Brief** |

## How to add a schedule

{{< steps >}}
{{< step title="Add the trigger" >}}In the editor, open the **Steps** palette, then **Triggers**, and add **Schedule trigger** at the start of the workflow. Connect it to the first step.{{< /step >}}
{{< step title="Choose when" >}}In the inspector, pick a **Schedule preset**, such as "Every Monday at 8:00", or use the **Visual schedule** builder. Advanced users can type a **Cron expression**.{{< /step >}}
{{< step title="Set the time zone" >}}Choose your **Timezone**. The default is UTC, so set it to where your team works.{{< /step >}}
{{< step title="Check the next runs" >}}Click **Save**. The **Next 5 fires** preview shows the next five run times, so you can confirm it won't run at 3 a.m.{{< /step >}}
{{< step title="Test it" >}}Click **Run with mock input** under **Test fire trigger** to run it once now, as if the schedule had fired. Check the result.{{< /step >}}
{{< step title="Turn it on" >}}Click **Activate**. It becomes a green **Live** pill, and Lumen confirms **Workflow is live — triggers will fire automatically.**{{< /step >}}
{{< /steps >}}

## How to set up the other triggers

{{< tabs >}}
{{< tab name="Email" >}}
1. Add **Email trigger** and choose the connected mailbox.
2. Under **Inbox / label**, choose a dedicated folder, such as "Referrals", not your whole inbox. Add sender or subject filters if needed.
3. Choose **Delivery**: **Real-time** (Gmail and Microsoft 365; Lumen falls back to checking regularly if real-time can't be set up) or **Every 60s**. IMAP mailboxes are checked every 60 seconds.
4. Decide whether to **Mark each email as read once handled** and whether to pass **Attachments** on.
5. Test fire, then **Activate**.

The email's sender, subject, body and attachments become the workflow's input.
{{< /tab >}}
{{< tab name="Webhook" >}}
1. Add **Webhook trigger** and click **Save**.
2. Open **Workflow settings**, then **Manage triggers**. Copy the **Webhook URL** with **Copy URL**, and note the **Secret header**.
3. Give both to the system that will call the workflow. By default it must send the secret in the `X-Webhook-Secret` header.
4. Send one test request, check the run, then **Activate**.

Treat the secret like a password. Anyone with the address and the secret can start the workflow.
{{< /tab >}}
{{< tab name="CRM" >}}
1. Add **CRM trigger** (Pro or above) and choose your connected HubSpot, Zoho CRM or Salesforce account.
2. Under **Fire on**, choose **created** or **updated** records.
3. Set the **Poll interval (seconds)**. The default is 120.
4. Test fire, then **Activate**.
{{< /tab >}}
{{< tab name="Manual" >}}
Add **Manual trigger** if the workflow should only run when someone clicks **Run**. You can enter **Mock input JSON** to test it with sample data.
{{< /tab >}}
{{< /tabs >}}

## What you'll see

{{< lui-block title="Schedule trigger" sub="Weekly sweep · Device Recall Watch" >}}
{{< lui-kv "Schedule preset=Every Monday at 8:00;Timezone=America/Chicago" >}}
{{< lui-rows >}}
{{< lui-row title="Next 5 fires" body="Mon Nov 16, 8:00 · Mon Nov 23, 8:00 · Mon Nov 30, 8:00 · Mon Dec 7, 8:00 · Mon Dec 14, 8:00" >}}
{{< /lui-rows >}}
{{< lui-actions "Run with mock input" "Activate" >}}
{{< /lui-block >}}

In the **Workflows** list, each workflow shows a chip for its trigger (**Cron**, **Email**, **Webhook** or **Manual**) and when it last fired. The **Automated** view lists only workflows with triggers.

## How to pause a workflow

Hover the green **Live** pill and click **Pause**. Lumen confirms **Workflow paused — triggers will not fire.** Nothing is deleted. Click **Activate** to turn it back on.

## Tips

- **Start with a schedule.** There's nothing external to connect, and a wrong result arrives as an email you can ignore.
- **Test fire before you go live.** The first unattended run shouldn't be the first run.
- **Use a dedicated email folder.** Route only the emails the workflow should handle into it with a mail rule.

## Limits and safety

- **Unattended means nobody checks first.** Triggered runs execute every step, including **Send Email** and CRM updates, without waiting for approval. Test thoroughly, and send to yourself before you send to a team.
- **Schedules can lag slightly.** Lumen checks schedules about every 30 seconds, so a run can start a little after the exact minute.
- **Each run has a time limit.** The default is 15 minutes, adjustable in **Workflow settings**. A run that goes over stops and is marked failed.
- **Email can carry patient information.** An email trigger sees everything in the folder it watches. Use a dedicated folder and the **De-identify PHI** step where it fits.
- **Connected accounts are yours.** Email and CRM triggers use the account connected to the workflow.

## FAQ

{{< faq question="Do I need to keep Lumen open for a scheduled workflow to run?" >}}
No. Scheduled, email, webhook and CRM runs are unattended. They run on Lumen's servers whether or not you're signed in, and the results are in **Run history** when you come back.
{{< /faq >}}
{{< faq question="Which time zone does a schedule use?" >}}
The one you choose in **Timezone**. The default is UTC, so set it to your team's time zone. **Next 5 fires** shows the run times so you can check.
{{< /faq >}}
{{< faq question="Why is the Activate button greyed out?" >}}
The workflow has no trigger yet. Add a **Webhook**, **Schedule**, **Email** or **Manual** trigger step, then save.
{{< /faq >}}
{{< faq question="Can I stop a workflow without deleting it?" >}}
Yes. Hover the **Live** pill and click **Pause**.
{{< /faq >}}

## Next steps

{{< related "/workflows/running/" "/workflows/editor/" "/workflows/publish/" >}}
