---
title: "Workflow Triggers: Cron, Webhook, Email & CRM"
description: "Run workflows automatically — on a schedule, from a webhook, when an email arrives, or when a CRM record changes. Test-fire before going live."
lead: "A trigger turns a workflow you run into a workflow you never have to remember to run."
weight: 5
---

Everything so far assumed you press **Run**. Triggers remove that step: the workflow fires itself — every Monday at 7am, the moment an email lands in the referral inbox, the instant an external system calls your webhook. You build the logic once; the trigger supplies the "when."

## How triggers fit into a workflow

A trigger is a node, just like the ones you already know — it sits at the *start* of the workflow, where an input node would go. Whatever the trigger receives (the email, the webhook payload, the CRM record) flows into the rest of the chain as the workflow's input.

One workflow can have more than one trigger, and you can switch them all on or off at once — **activate** when it's ready to run unattended, **deactivate** when you want to take it offline without deleting anything.

## Schedule (cron)

A scheduled trigger runs the workflow at times you define — the classic "standing order."

**Example: the Monday-morning literature digest.** A workflow that searches PubMed for new central-line infection papers, summarizes the top hits, and sends the digest to your inbox — scheduled for Mondays at 7:00 in your timezone. You read it with your coffee; nobody ran anything.

Schedules use cron expressions, and you don't need to learn them blind: the editor shows a **preview of the next run times** for whatever expression you've entered, in your timezone, so "did I just schedule this for 3am?" gets answered before it happens.

Other natural fits: a Friday summary of the week's workflow runs, a monthly refresh of a standing report, a nightly check of a guideline page for changes.

## Webhook

A webhook trigger gives your workflow its own **secret URL**. When any external system sends a request to that URL, the workflow runs with the request's payload as input.

- The URL is generated per workflow and contains a secret — **the URL itself is the credential**, so treat it like a password: share it only with the system that should be calling it.
- The payload becomes the workflow's input, so downstream nodes can pull fields out of it.

**Example:** your scheduling system posts to the webhook whenever a new procedure is booked; the workflow looks up the relevant prep protocol and emails the checklist to the assigned nurse.

While you're setting one up, the editor can **listen for a test event** — send one real request from the external system and watch it arrive, so you know the plumbing works before you rely on it.

## Incoming email

An email trigger watches a mailbox and runs the workflow for each new message — the message's sender, subject, body, and attachments become the input.

- **Gmail / Google Workspace** and **Microsoft 365 / Outlook** connect with your account and can deliver messages as they arrive.
- Any standard **IMAP** mailbox works too.
- You choose **which mailbox folder to watch**, so the trigger sees only the mail you route to it — not your whole inbox.

**Example: referral inbox triage.** Point the trigger at your team's referral folder. Each incoming referral is read, key details are extracted, urgency is classified, and a structured summary is posted for the intake coordinator — before a human has opened the email.

{{< callout type="warning" >}}
**Email can carry PHI.** A trigger that reads a clinical inbox will see whatever arrives in it. Watch a dedicated folder rather than a general inbox, and see [privacy and de-identification tools](/tools/privacy/) for handling identifiers inside the workflow.
{{< /callout >}}

## CRM events

A CRM trigger fires when a record changes in your connected CRM — **HubSpot, Zoho, or Salesforce** — such as a contact being **created** or **updated**. Each record change is processed once, so a busy CRM doesn't cause duplicate runs.

**Example:** a new contact tagged as a clinical-education lead appears in your CRM; the workflow drafts a personalized welcome email with the right product literature attached and queues it for your review.

{{< callout type="info" >}}
**Connected accounts are personal.** Email and CRM triggers run through *your* connected account. If you [share the workflow](/workflows/publish/), colleagues connect their own accounts — a shared workflow never reads your inbox on someone else's behalf.
{{< /callout >}}

## Test before you trust

Every trigger supports a **test-fire**: run the workflow right now, exactly as if the trigger had fired, and inspect the results in the [run log](/workflows/running/). Test-fire until the output looks right, then activate — the first unattended run shouldn't be the first run.

{{< tip title="Start with a schedule" >}}
A scheduled trigger is the gentlest introduction: no external system to wire up, and the worst failure mode is a report that arrives looking wrong. Get one digest workflow running on a Monday-morning cron, then graduate to webhooks and inboxes.
{{< /tip >}}

## Next steps

- [Running & results](/workflows/running/) — reading run history, replaying past runs
- [Sharing workflows & blueprints](/workflows/publish/) — let your team use what you automated
- [Building blocks](/workflows/building-blocks/) — the nodes your trigger will feed
