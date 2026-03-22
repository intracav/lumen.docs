---
title: "Turn It Into an Agent"
description: "Export your workflow as a reusable agent, and optionally publish it for other clinicians."
weight: 4
---

You've built a workflow that works well. Now you can turn it into a **reusable agent** — something you (or others) can run with one click, without opening the editor.

## Exporting as an Agent

<div class="steps-container">

{{< step num="1" title="Click 'Export as Agent'" >}}
In the workflow editor toolbar, tap **Export as Agent**. A dialog opens where you'll name and describe your agent.
{{< /step >}}

{{< step num="2" title="Give it a name and description" >}}
Choose a clear name that describes what the agent does. Write a short description — this is what other people see if you publish it.

*Example:*
- **Name:** "Med Rec & Interaction Checker"
- **Description:** "Extracts medications from a document, checks all pairwise interactions, and drafts a reconciliation summary."
{{< /step >}}

{{< step num="3" title="Pick an icon and color" >}}
Choose from 24 icons and 10 accent colors. This makes your agent visually distinct in the Agents screen.
{{< /step >}}

{{< step num="4" title="Select a category" >}}
Pick the category that fits best: clinical, research, documentation, billing, education, triage, or medications.
{{< /step >}}

{{< step num="5" title="Save" >}}
Click Save. Your workflow is now a reusable **agent** that appears in the **Created** tab of the Agents screen.
{{< /step >}}

</div>

## Using Your Agent

Once exported, your agent works like the built-in ones:

1. Open the **Agents** screen
2. Go to the **Created** tab
3. Click your agent
4. Type your input and hit Send
5. The workflow runs in the background and delivers the results

You don't need to open the editor or connect any nodes — it's a one-click automation.

## Publishing to the Community

Want to share your agent with other clinicians? You can publish it to the **Community** tab.

<div class="steps-container">

{{< step num="1" title="Open the agent management dialog" >}}
In the Created tab, click **Manage** on your agent card.
{{< /step >}}

{{< step num="2" title="Set visibility to public" >}}
Toggle the visibility from **Private** to **Public**. Your agent will appear in the Community tab for all Lumen users.
{{< /step >}}

{{< step num="3" title="Set pricing (optional)" >}}
You can offer your agent for **free** or set a **paid** price. Paid agents use Stripe Connect — you earn 70% of each use, Lumen keeps 30%.

To set up paid agents, you'll need to complete Stripe Connect onboarding (there's a banner in the Created tab that guides you through it).
{{< /step >}}

</div>

## The Full Journey

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
    <div class="journey-box-icon">&#129302;</div>
    <div class="journey-box-label">Export</div>
    <div class="journey-box-sub">Reusable agent</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#127760;</div>
    <div class="journey-box-label">Publish</div>
    <div class="journey-box-sub">Community (free or paid)</div>
  </div>
</div>

Your workflow started as an idea for automating a task. Now it's a polished agent that any clinician can use — and if you publish it, you can help the whole community while earning revenue from your expertise.

{{< callout type="info" >}}
**You can always update your agent.** Go back to the workflow editor, make changes, and re-export. The agent updates in place — anyone using it gets the latest version.
{{< /callout >}}

{{< tip title="Analytics" >}}
Once published, you can see how many times your agent has been run and its average rating in the **Manage** dialog.
{{< /tip >}}
