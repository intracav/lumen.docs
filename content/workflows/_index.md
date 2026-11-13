---
title: "Workflows"
description: "Lumen Workflows chain tools into repeatable pipelines that run when you click Run, on a schedule, when an email arrives, or when another system calls in."
lead: "Build a routine once, such as a weekly device-recall sweep or referral triage, and let it run on its own."
weight: 14
hideAutoGrid: true
cascade:
  audience: clinician
group: use
icon: workflow
navTitle: "Workflows"
glance:
  what: "Workflows are repeatable pipelines of steps, such as search, summarize and email, that you build on a visual canvas or start from a template."
  who: "Clinicians, quality and operations staff, and device-company teams who repeat the same lookup, digest or triage task."
  why: "To stop doing the same routine by hand. A workflow on a schedule or trigger runs unattended on Lumen's servers and keeps a history of every run."
  needs: "A Lumen account. Some steps and the CRM trigger need Pro or above. Most templates need a connected email account."
  result: "A workflow that runs on demand or on its own, with a record of each run."
---

A **workflow** is a set of steps that Lumen runs in order: for example, search the FDA recall database for your devices, summarize anything new, and email the summary to your team. You build it once, on a visual canvas or from a template. Then it runs when you click **Run**, or on its own on a schedule or when something happens, such as an email arriving.

## How a workflow fits together

{{< flow >}}
{{< flow-node kicker="Trigger" title="When it runs" icon="clock" tint="blue" >}}A schedule, an incoming email, a webhook call, a CRM change, or you clicking Run.{{< /flow-node >}}
{{< flow-node kicker="Steps" title="What it does" icon="workflow" tint="plum" >}}Look things up, read documents, summarize, classify, decide.{{< /flow-node >}}
{{< flow-node kicker="Output" title="Where results go" icon="send" tint="green" >}}An email, a PDF, a chat thread, a webhook or a CRM record.{{< /flow-node >}}
{{< /flow >}}

{{< callout type="info" title="Unattended runs, honestly" >}}
Workflows that start from a **schedule**, **email**, **webhook** or **CRM** trigger run unattended on Lumen's servers. Nobody needs to be signed in. A run you start from the editor canvas is interactive: keep the editor open until it finishes. For anything that must complete on its own, add a trigger.
{{< /callout >}}

## Start from a template

Lumen has ready-made automations you can install and adjust. Each one is a working workflow with its trigger already set up. They include:

| Template | What it does | Runs |
|---|---|---|
| **Device Recall Watch** | A weekly FDA recall and adverse-event sweep for your devices | On a schedule |
| **Clinical Evidence Monitor** | A weekly PubMed and ClinicalTrials.gov sweep on your keywords | On a schedule |
| **Coverage Policy Watch** | A monthly CMS coverage and code check on your procedure codes | On a schedule |
| **Adverse Event Signal Monitor** | A monthly FAERS/MAUDE trend read on your product family | On a schedule |
| **Referral Intake & Triage** | Every inbound referral extracted, urgency-checked and routed | When an email arrives |
| **Complaint Intake & Triage** | Every complaint email triaged for severity and reportability | When an email arrives |
| **Field Rep Answer Desk** | Reps email a question; your Knowledge Pack answers with citations | When an email arrives |
| **Reimbursement Brief** | Codes, coverage and fees for one procedure, as a PDF | On demand |

There are also templates for a weekly denial digest, logging inquiries to a CRM, a weekly research newsletter and video-transcript analysis, plus simpler starters such as **Discharge Summary** and **Diagnosis Code Assist**. See [Build a workflow](/workflows/editor/).

## Pages in this section

{{< card-grid cols="2" >}}
{{< card title="Build a workflow" href="/workflows/editor/" icon="pencil" tint="blue" >}}Start from a template, a description or a blank canvas, and connect the steps.{{< /card >}}
{{< card title="Building blocks" href="/workflows/building-blocks/" icon="layers" tint="plum" >}}The kinds of steps you can use, grouped by what they do.{{< /card >}}
{{< card title="Triggers" href="/workflows/triggers/" icon="clock" tint="accent" >}}Run on a schedule with a time zone, from a webhook, on incoming email, or on CRM changes.{{< /card >}}
{{< card title="Runs and history" href="/workflows/running/" icon="history" tint="green" >}}Run, read each step's result, replay a run and restore an earlier version.{{< /card >}}
{{< card title="Share and reuse" href="/workflows/publish/" icon="share" tint="blue" >}}Share with your department or team, and save a runnable copy for others.{{< /card >}}
{{< /card-grid >}}

**Which page do I need?** Building your first workflow: [Build a workflow](/workflows/editor/). Making it run by itself: [Triggers](/workflows/triggers/). Something went wrong: [Runs and history](/workflows/running/).

## Good to know

- **Actions run as built.** Steps such as **Send Email**, **Slack: send** and CRM updates run without stopping for approval, including in unattended runs. Test with your own address before you point a workflow at a team list.
- **Patient information.** A workflow that reads a clinical inbox sees everything in it. Watch a dedicated folder, and use the **De-identify PHI** step where it fits.

{{< cta heading="Install your first automation" href="/workflows/editor/" label="Build a workflow" secondary-href="/workflows/triggers/" secondary-label="How triggers work" >}}Device Recall Watch is a good first template: it runs weekly and only reads public FDA data.{{< /cta >}}
