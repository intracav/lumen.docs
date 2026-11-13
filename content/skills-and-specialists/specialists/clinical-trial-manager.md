---
title: "Run a device pilot with Clinical Trial Manager"
navTitle: "Clinical Trial Manager"
description: "Clinical Trial Manager runs a device pilot end to end: trial setup, coverage roster, training syllabus, status digests and an approved closeout."
lead: "For device makers and the teams that run their hospital pilots: set up the trial from your plan, build the staff coverage, generate training, track status, and close out, with outward steps waiting for a person's approval."
weight: 7
icon: clipboard-list
tier: max
who: "clinical operations leads and trial managers at device makers and CROs"
glance:
  what: "Clinical Trial Manager is a Lumen specialist that runs a medical device pilot or usability evaluation from setup to closeout, and hands staffing and training to other specialists that work in parallel."
  who: "Clinical operations leads, trial managers and clinical specialists at medical device makers and contract research organizations."
  why: "To keep the trial setup, staff coverage, training and status in one record, with every number counted by Lumen's server rather than restated from memory."
  needs: "Lumen Max, an organization workspace (called a team in Lumen), and the Clinical trials product, which is on by default for device-maker organizations and enabled by Intracav for others. Your pilot plan or protocol."
  result: "A validated trial setup, a living coverage roster, a training syllabus with one game per milestone, status digests, and a closeout report that waits for approval."
---

A device pilot at a hospital has many moving parts: which units take part, who covers each shift, what staff must learn, what's happening day to day, and how it closes. **Clinical Trial Manager** keeps all of that in one trial record. It sets the trial up from your plan, asks the **Staff Scheduler** to build coverage and the **Clinical Educator** to build training, and reports status from the record. Sending Smart IFU links to trainees and closing the trial both wait for a person's approval.

## Before you start

- **Plan and product:** Lumen Max and the Clinical trials product. Device-maker organizations have it by default; other organizations ask Intracav to enable it.
- **Workspace:** switch to your organization's team workspace. Clinical Trial Manager doesn't run in a personal workspace.
- **Have ready:** the pilot plan or protocol (sites, dates, products, staff and roles), the minimum coverage per site and shift, and the competency checklist for trainees.

## How to run a pilot

{{< steps >}}
{{< step title="Open Clinical Trial Manager" >}}In your team workspace, click **Explore**, choose **Specialists**, click **Clinical Trial Manager**, then **Open Clinical Trial Manager**.{{< /step >}}
{{< step title="Set up the trial" >}}If no trial exists yet, the page shows **Get started**. Choose **Set up a trial from your documents** and attach your plan, or **Describe the pilot** to build it one question at a time. Otherwise, under **Start with**, click **Set up a trial** and enter the **Device / product** and **Sites**.{{< /step >}}
{{< step title="Build coverage" >}}Click **Build the coverage roster**. Enter **Which trial**, the **Minimums** (for example "1 sales + 2 clinicians") and the **Shift**. The roster is built and checked against your minimums.{{< /step >}}
{{< step title="Generate training" >}}Click **Generate the syllabus and games**. The competency checklist becomes milestones, each with a learning objective, an assessment and a short game.{{< /step >}}
{{< step title="Check status" >}}Click **Trial status and digest** at any time for coverage, usage, training completion and open tasks.{{< /step >}}
{{< step title="Close out" >}}Click **Prepare closeout**. The report is drafted, and the closeout waits on an approval card. Click **Approve** only when the report is right.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="SL-4 pilot setup" specialist="Clinical Trial Manager" caption="Illustration with fictional Northwind Vascular and Harbor Valley Medical Center details." >}}
{{< user attach="SL-4-pilot-plan.pdf" >}}Set up the SL-4 securement device pilot at Harbor Valley: ICU and Med-Surg, day and night shifts, at least 1 clinical specialist and 2 nurse champions per site per shift.{{< /user >}}
{{< lumen tools="Document read, Trial updated, Specialists updated, Roster updated" >}}
{{< task-strip >}}
{{< task state="done" label="Read the pilot plan and saved the trial setup" >}}
{{< task state="done" label="Validated the setup" meta="no errors" >}}
{{< task state="run" label="Staff Scheduler: building the coverage roster" >}}
{{< task state="run" label="Clinical Educator: building milestone 1 training" >}}
{{< task state="todo" label="Report what I assumed" >}}
{{< /task-strip >}}
{{< /lumen >}}
{{< /chat-demo >}}

{{< approval action="Close out the SL-4 pilot at Harbor Valley Medical Center" >}}The closeout report, with coverage, usage, training completion and targets as counted from the trial record.{{< /approval >}}

## Good to know

- **It coordinates other specialists.** Staffing goes to the **Staff Scheduler** and training to the **Clinical Educator**. They work at the same time, and the chat shows each one's progress. Open any of them to see its own chat.
- **Numbers come from the record.** Coverage, usage, training completion and task health are read from the trial record, never restated from memory.
- **It tells you what it assumed.** After setting up from documents, it lists the assumptions it made so you can correct them.

## Limits and safety

- Outward steps wait for approval: sending Smart IFU links to external trainees and closing out the trial. See [Approve actions](/skills-and-specialists/approvals/).
- Publishing a roster and signing a result are a person's acts, never the specialist's.
- It doesn't handle clinical questions about a patient, complaints or adverse events, or marketing claims. Those go to **Clinical Reasoning**, **Safety Intake** and **Claims Review**.
- It doesn't handle HR, payroll or travel for trial staff.

{{< callout type="important" title="Training results are knowledge checks" >}}
Game and quiz results show what trainees answered correctly. They aren't a competency attestation. Record competence through your own validation process.
{{< /callout >}}

## FAQ

{{< faq question="Is this for clinical drug trials?" >}}
It's built for device pilots and usability evaluations run at hospitals. It doesn't manage regulatory submissions or patient enrollment.
{{< /faq >}}
{{< faq question="How is this different from Product Trial Manager?" >}}
Clinical Trial Manager runs one pilot's operations: setup, coverage, training and closeout. **Product Trial Manager** tracks many hospital product evaluations across a sales pipeline, from prospect to purchase. Both need the Clinical trials product.
{{< /faq >}}
{{< faq question="Can it email the hospital staff directly?" >}}
No. It never sends free-form email. Staff hear about shifts through the roster's own notices, and IFU links go out only after approval.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/working-with-a-specialist/" "/skills-and-specialists/specialists/clinical-educator/" "/guides/staff-schedule/" "/connect/" >}}
