---
title: "Sharing Workflows & Blueprints"
description: "Share a workflow with your organization, package it as a reusable blueprint, or run it straight from chat."
weight: 4
---

You've built a workflow that works well. Now make it useful beyond the editor: share it with your team, package it as a **blueprint** others can reuse, or run it from any chat with a single sentence.

## Run it from chat

Every saved workflow can be run without opening the editor. Just ask:

> "Run my *Med Rec & Interaction Checker* workflow on the attached document."

Lumen finds the workflow by name, feeds it your input, and returns the result in the conversation. This is the fastest way to turn a workflow you built once into an everyday one-liner.

## Share it with your organization

Workflows are private by default. To let colleagues use one:

<div class="steps-container">

{{< step num="1" title="Open the workflow's sharing settings" >}}
From the workflow list, open the menu on the workflow card and choose **Share**.
{{< /step >}}

{{< step num="2" title="Choose who can use it" >}}
Share into your organization or a specific department. Colleagues get run access — they can use the workflow, see their own runs, and won't accidentally edit your logic.
{{< /step >}}

{{< step num="3" title="Keep improving it" >}}
You keep edit rights. When you save changes, everyone runs the updated version — workflow **version history** means you can always restore an earlier revision if a change misbehaves.
{{< /step >}}

</div>

{{< callout type="info" >}}
**Sharing a workflow doesn't share your credentials.** If your workflow uses a connected account (Gmail, a CRM, Slack), colleagues connect their own — Lumen never lets someone else's workflow act as you.
{{< /callout >}}

## Package it as a blueprint

A **blueprint** is a workflow exported as a reusable component: the logic, node layout, and configuration — without your documents, credentials, or run history.

- **Reuse it yourself** — instantiate a new copy for a different clinic, department, or use case.
- **Publish it** — published blueprints appear in the blueprint gallery, where other Lumen users can browse and add them.
- **Track it** — see how often your published blueprint is used from its analytics view.

To create one, choose **Save as blueprint** from the workflow menu, give it a clear name and description, and decide whether to publish it or keep it in your library.

## The full journey

<div class="journey-flow">
  <div class="journey-box">
    <div class="journey-box-icon">&#128196;</div>
    <div class="journey-box-label">Build</div>
    <div class="journey-box-sub">Visual editor</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#9654;</div>
    <div class="journey-box-label">Test</div>
    <div class="journey-box-sub">Run & inspect</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#129309;</div>
    <div class="journey-box-label">Share</div>
    <div class="journey-box-sub">Org & departments</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128230;</div>
    <div class="journey-box-label">Blueprint</div>
    <div class="journey-box-sub">Reusable component</div>
  </div>
</div>

{{< tip title="Automate it next" >}}
A shared workflow gets really powerful when it runs itself. Add a **trigger** — a schedule, a webhook, or an incoming email — and the workflow runs without anyone clicking anything. See [Running & Results](../running/).
{{< /tip >}}
