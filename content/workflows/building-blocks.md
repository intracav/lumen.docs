---
title: "Workflow building blocks"
navTitle: "Building blocks"
description: "The kinds of steps you can use in a Lumen workflow: triggers, inputs, text analysis, clinical lookups, logic, connections, privacy and outputs."
lead: "Every workflow is made of steps. Here's what each family of steps does."
weight: 2
icon: layers
glance:
  what: "A guide to the steps in Lumen's workflow palette, grouped the way the palette groups them."
  who: "Anyone building or adjusting a workflow."
  why: "Knowing which step does what lets you build a workflow that does exactly the job, without extra steps."
  needs: "A Lumen account. Steps marked with a lock in the palette need Pro or above."
  result: "A clear idea of which steps to use for your workflow."
---

A workflow is a chain of **steps**. Each step does one job, such as search PubMed, summarize text or send an email, and passes its result to the next. The **Steps** palette in the editor groups them by what they do. You don't need to learn them all: the **Start here** group covers most first workflows.

## Before you start

Open a workflow in the editor (see [Build a workflow](/workflows/editor/)). The palette is on the side of the canvas. Steps that need Pro or above show a lock icon.

## How to find and add a step

{{< steps >}}
{{< step title="Open the palette" >}}In the editor, open the **Steps** palette.{{< /step >}}
{{< step title="Search or browse" >}}Type in **Search steps…**, such as "recall" or "email", or open a category.{{< /step >}}
{{< step title="Add it" >}}Click the step, or drag it onto the canvas, then connect it to the step before it.{{< /step >}}
{{< /steps >}}

## The step families

### Start here

The most-used steps: **Text Input**, **Document**, **Generate Text**, **Knowledge Bases**, **Summarize**, **Condition**, **Send Email**, **Export PDF** and **Write the Final Answer**. Most first workflows use only these.

### Triggers: when it runs

**Schedule trigger**, **Email trigger**, **Webhook trigger**, **CRM trigger** and **Manual trigger**. A trigger starts the workflow. See [Triggers](/workflows/triggers/).

### Inputs and your documents

Bring material in: text you type, a document, or search your knowledge with **Knowledge Bases** (your documents) and **Knowledge Pack Lookup** (a [Knowledge Pack](/knowledge/knowledge-packs/), a curated collection of documents Lumen can search and cite).

### Text Analysis

**Summarize**, **Extract Entities** (medications, diagnoses, procedures, lab values), **Classify** (into categories you define), **Sentiment**, **Translate**, **Keywords**, **Q & A** (answer a question about the text) and **Generate Text**.

### Clinical lookups

Steps grouped as **Medications**, **Coding & Labs**, **Insurance & Coverage**, **Protocols**, **Records**, **Education** and **Research**. They use the same clinical tools as Lumen chat, such as FDA recalls and adverse events, PubMed, ClinicalTrials.gov, drug interactions, ICD-10 and CPT lookup, and CMS coverage.

### Agent

The **Agent** step hands a task to Lumen to work through with tools, the way a specialist does in chat. Use it when the task needs judgment across several lookups. It needs Pro or above.

### Logic and flow control

**Condition** sends the workflow down different paths, such as "only email if something new was found". **Delay**, **Loop / iterate** and **Sub-workflow** control timing and repetition.

### Connections

Work with other systems: **Read Email**, **Send Email**, **Slack: send**, **CRM: Find Contact**, **CRM: Upsert Contact** and **Contact List**. These use accounts you've connected.

### Data and privacy

**Format**, **JSON extract**, **Merge** and **Transform** reshape results. **De-identify PHI** removes identifiers before later steps, and **Re-identify PHI** puts them back where you need them.

### Outputs: where results go

**Send Email**, **Export PDF**, **Export Presentation**, **Newsletter**, **Post to Chat Thread**, **Send to Webhook**, **Download as Text** and **Write the Final Answer** (the result you see at the end of a run).

### System

**HTTP Request**, **Python Sandbox** and **Other tool**, for technical users. They need Pro or above.

## What you'll see

{{< lui-block title="Steps" sub="Click to add · or drag onto the canvas" >}}
{{< lui-rows >}}
{{< lui-row title="Start here" body="Text Input · Document · Generate Text · Knowledge Bases · Summarize · Condition · Send Email · Export PDF · Write the Final Answer" >}}
{{< lui-row title="Triggers" body="Webhook trigger · Schedule trigger · Email trigger · CRM trigger · Manual trigger" >}}
{{< lui-row title="Text Analysis" body="Summarize · Extract Entities · Sentiment · Classify · Translate · Keywords · Q & A" >}}
{{< lui-row title="Privacy" body="De-identify PHI · Re-identify PHI" value="Pro" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **End with a clear output.** A workflow that runs on a schedule needs an output step, such as **Send Email** or **Post to Chat Thread**, or nobody will see the result.
- **Use Condition to stay quiet.** A weekly digest that only sends when something changed gets read. One that sends "nothing new" every week gets ignored.
- **Search your own knowledge.** **Knowledge Pack Lookup** lets a workflow answer from your organization's documents, with citations.

## Limits and safety

- **Some steps need Pro or above.** They show a lock icon in the palette. See [Plans](/plans/).
- **Outputs run without approval.** **Send Email**, **Slack: send**, **Send to Webhook** and CRM steps act as soon as the workflow reaches them, including in unattended runs.
- **Clinical lookups can miss things.** A recall or literature sweep is a prompt to look, not proof that nothing changed. Check the cited sources.
- **De-identification isn't perfect.** **De-identify PHI** reduces risk but can miss identifiers. Keep patient data out of workflows that don't need it.

## FAQ

{{< faq question="Which steps should I learn first?" >}}
The **Start here** group: **Text Input**, **Document**, **Summarize**, **Generate Text**, **Condition**, **Send Email** and **Write the Final Answer**.
{{< /faq >}}
{{< faq question="Can a workflow search my own documents?" >}}
Yes. Use **Knowledge Bases** for your documents, or **Knowledge Pack Lookup** for a Knowledge Pack you have access to.
{{< /faq >}}
{{< faq question="Why is a step locked?" >}}
It needs Pro or above. The lock tells you before you build it in.
{{< /faq >}}

## Next steps

{{< related "/workflows/editor/" "/workflows/triggers/" "/tools/" >}}
