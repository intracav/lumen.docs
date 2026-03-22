---
title: "The Visual Editor"
description: "How to drag, connect, and configure tools on the workflow canvas."
weight: 1
---

The workflow editor is a visual canvas where you build automations by placing tools and connecting them. Think of it like drawing a flowchart — except each box actually *does something*.

## The Canvas

When you create a new workflow, you get a large open canvas. You can:

- **Drag to pan** — Move around the canvas
- **Add nodes** — Click the palette on the right to browse tools, or right-click the canvas
- **Connect nodes** — Drag from an output port (right side of a node) to an input port (left side of another)
- **Click a node** — Configure its settings (e.g., what text to input, how many results to return)
- **Delete connections** — Click on a connecting line to remove it

## Adding a Node

<div class="steps-container">

{{< step num="1" title="Open the tool palette" >}}
Click the **palette icon** on the right side of the editor. You'll see all available tools organized by category — Inputs, Text Analysis, Medications, Coding, Protocols, and more.
{{< /step >}}

{{< step num="2" title="Pick a tool" >}}
Click the tool you want. It appears on the canvas as a node — a small card with the tool's name and icon.
{{< /step >}}

{{< step num="3" title="Position it" >}}
Drag the node to where you want it on the canvas. Nodes further to the right generally run later in the workflow.
{{< /step >}}

{{< step num="4" title="Configure it" >}}
Click the node to open its settings. Each tool has different options:
- **Text Input** — Type or paste the text to process
- **PubMed Search** — Set the search query and max number of articles
- **ICD-10 Lookup** — Enter the clinical description to code
- **Summarize** — Set the desired summary length
{{< /step >}}

</div>

## Connecting Nodes

Every node has a small dot on its right side (output) and left side (input). To connect them:

1. Hover over the **output dot** on the right side of a node — it highlights
2. **Click and drag** from that dot to the **input dot** on the left side of the next node
3. A line appears connecting them — this means data will flow from the first node to the second

<div class="node-graph">
  <div class="node-graph-label">Example: connect two nodes</div>
  <div class="node-chain">
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: rgba(88,101,242,0.15); color: var(--primary);">&#128196;</div>
        <span class="wf-node-name">Text Input</span>
      </div>
      <div class="wf-node-body">"55yo male, chest pain..."</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: rgba(140,102,217,0.15); color: var(--purple);">&#128196;</div>
        <span class="wf-node-name">Extract Entities</span>
      </div>
      <div class="wf-node-body">Finds meds, diagnoses, labs</div>
    </div>
  </div>
</div>

The first node's output becomes the second node's input — automatically. You don't need to copy/paste anything between them.

## Tips

{{< tip title="Start simple" >}}
Begin with 3–4 nodes. Get it working, then add more. A workflow with Text Input → Summarize → Send to Chat is a great first test.
{{< /tip >}}

- **You can branch.** One node's output can connect to multiple downstream nodes
- **Order matters.** Nodes run left to right based on how they're connected
- **Undo mistakes.** Click any connecting line to delete it. Drag a node off the canvas to remove it
- **Auto-save.** Your workflow saves automatically when you run it

{{< callout type="info" >}}
**Don't worry about getting it perfect.** You can always rearrange, reconnect, and re-run. The editor is designed for experimentation.
{{< /callout >}}
