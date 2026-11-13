---
title: "Build a workflow"
navTitle: "Build a workflow"
description: "Create a Lumen workflow from a template, a plain-language description or a blank canvas, connect the steps, configure them and save."
lead: "Start from a template or a sentence, then shape it on the canvas."
weight: 1
icon: pencil
glance:
  what: "How to create a workflow in Lumen's visual editor: choose a starting point, add and connect steps, set them up and save."
  who: "Anyone who wants to automate a repeated lookup, digest or triage task."
  why: "To turn a routine you do by hand into something Lumen can repeat the same way every time."
  needs: "A Lumen account. Drafting a workflow from a description, and some steps, need Pro or above. About 10 to 20 minutes."
  result: "A saved workflow you can run, schedule or share."
---

Every Monday someone on the vascular access team searches the FDA recall database for the devices you stock. A workflow can do that search, summarize what's new and email it to the team, the same way every week. This page shows how to build one.

## Before you start

- **A Lumen account.** Any plan can build workflows.
- **Pro or above** for **Build it with Lumen** (drafting from a description) and for some steps, such as **Agent**, **HTTP Request**, CRM steps and **De-identify PHI**. Locked steps show a lock icon.
- **A connected email account** if the workflow reads or sends email. Most templates need one.
- **A clear outcome.** Write one sentence first: "Every Monday at 8:00, email me any new FDA recalls for our PICC lines."

## How to create a workflow

{{< steps >}}
{{< step title="Open Workflows" >}}In the sidebar, open **More**, then **Workflow**. The **Workflows** list opens.{{< /step >}}
{{< step title="Start a new one" >}}Click **New workflow**. The **Start a new workflow** dialog opens.{{< /step >}}
{{< step title="Choose how to start" >}}Pick one:
- **A template.** Choose one under **Suggested**, **Starters** or **Automations**. Give it a **Workflow name** and answer the setup questions, such as **Which products or device names should we watch?** and **Who should receive the digest?** Then click **Install and open**.
- **A description.** Type what you need under **Describe the workflow you need…** and click **Build it with Lumen**. Lumen drafts the steps for you to check.
- **A blank canvas.** Choose **Blank workflow**.{{< /step >}}
{{< step title="Add steps" >}}Open the **Steps** palette. Search with **Search steps…** or browse the categories, starting with **Start here**. Click a step to add it, or drag it onto the canvas.{{< /step >}}
{{< step title="Connect the steps" >}}Drag from one step's output port to the next step's input port. The output of the first step becomes the input of the next.{{< /step >}}
{{< step title="Set up each step" >}}Click a step to open its settings in the inspector, such as the search terms for a PubMed search or the recipients for **Send Email**.{{< /step >}}
{{< step title="Save" >}}Click **Save**, or press {{< kbd "⌘" "S" >}}. Lumen doesn't save automatically. If you leave with unsaved changes, it asks you to **Save & leave**.{{< /step >}}
{{< /steps >}}

Next, try it with **Run** (see [Runs and history](/workflows/running/)), then add a trigger so it runs on its own (see [Triggers](/workflows/triggers/)).

## What you'll see

{{< screenshot src="workflows-templates" alt="The Start a new workflow dialog with a description box, Blank workflow and template cards grouped under Suggested, Starters and Automations" caption="Start from a template, a description or a blank canvas." url="lumen.intracav.ai/workflow" >}}
{{< lui-block title="Start a new workflow" sub="Describe what you need and Lumen drafts the nodes, or pick a template below." >}}
{{< lui-rows >}}
{{< lui-row type="radio" title="Blank workflow" body="Start from scratch with an empty canvas" >}}
{{< lui-row type="radio" title="Device Recall Watch" body="A weekly FDA recall and adverse-event sweep for your devices." value="Schedule" >}}
{{< lui-row type="radio" title="Referral Intake & Triage" body="Every inbound referral extracted, urgency-checked, and routed." value="Email" >}}
{{< lui-row type="radio" title="Reimbursement Brief" body="On demand: codes, coverage, and fees for one procedure, as a PDF." value="Manual" >}}
{{< /lui-rows >}}
{{< lui-actions "Build it with Lumen" "Install and open" >}}
{{< /lui-block >}}
{{< /screenshot >}}

{{< screenshot src="workflows-canvas" alt="The Device Recall Watch workflow on the editor canvas: Weekly sweep, Check FDA recalls, Check adverse events, Write the digest, Email the digest" caption="The editor. The toolbar has Save, Activate and Run. Steps connect left to right." url="lumen.intracav.ai/workflow" >}}
{{< flow >}}
{{< flow-node kicker="Schedule trigger" title="Weekly sweep" icon="clock" tint="blue" >}}Mondays at 8:00, America/Chicago{{< /flow-node >}}
{{< flow-node kicker="Tool" title="Check FDA recalls" icon="search" tint="plum" >}}SL-4 securement device{{< /flow-node >}}
{{< flow-node kicker="Tool" title="Check adverse events" icon="activity" tint="plum" >}}Same products{{< /flow-node >}}
{{< flow-node kicker="Generate" title="Write the digest" icon="file-text" tint="accent" >}}Plain-language summary{{< /flow-node >}}
{{< flow-node kicker="Send Email" title="Email the digest" icon="mail" tint="green" >}}Vascular Access team{{< /flow-node >}}
{{< /flow >}}
{{< /screenshot >}}

## The editor toolbar

| Control | What it does |
|---|---|
| **Save** | Saves the workflow and keeps a new version. |
| **Activate** | Turns on its triggers. It becomes a green **Live** pill; hover to **Pause**. |
| **Run** | Saves, then runs the workflow now so you can watch each step. |
| **Tidy up (auto-layout)** | Lines the steps up neatly. |
| **Run history** | Lists past runs. See [Runs and history](/workflows/running/). |
| **Share with your team** | Shares the workflow. See [Share and reuse](/workflows/publish/). |
| **Workflow settings** | Timeout, retries, versions and triggers. |

Right-click a step for **Duplicate**, **Rename**, **Run from here**, **Remove connections** and **Delete**.

## Tips

- **Start small.** Three or four steps that work beat ten that don't. Add steps once the first version runs well.
- **Pin a result while you build.** After a run, pin a step's result so later steps reuse it while you adjust them. This saves re-running slow searches.
- **Export a copy.** In the list, use **Export as JSON** on a workflow's menu to keep a backup, and **Import from JSON…** to bring it back.

## Limits and safety

- **No automatic save.** Click **Save** before you leave.
- **Some steps need Pro.** Locked steps show a lock icon. See [Plans](/plans/).
- **Lumen's draft is a starting point.** **Build it with Lumen** can pick the wrong step or setting. Check every step before you activate it.
- **Outputs don't wait for approval.** **Send Email**, Slack and CRM steps run as soon as the workflow reaches them. Test with your own address first.
- **Clinical content needs a person.** A workflow summary can be wrong or incomplete. Anyone acting on it should open the cited sources.

## FAQ

{{< faq question="Do I need to know how to code?" >}}
No. You build workflows by choosing steps and filling in their settings. Steps such as **Python Sandbox** and **HTTP Request** exist for people who want them, but you don't need them.
{{< /faq >}}
{{< faq question="Can Lumen build the workflow for me?" >}}
On Pro or above, describe it in **Start a new workflow** and click **Build it with Lumen**. Lumen drafts the steps on the canvas for you to review, change and save.
{{< /faq >}}
{{< faq question="What's the difference between a starter and an automation template?" >}}
Starters, such as **Discharge Summary**, open a pre-filled canvas with no trigger, for you to run by hand. Automations, such as **Device Recall Watch**, come with a trigger already set up, so they can run on their own once you activate them.
{{< /faq >}}

## Next steps

{{< related "/workflows/building-blocks/" "/workflows/triggers/" "/workflows/running/" >}}
