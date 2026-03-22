---
title: "Running & Results"
description: "How to test your workflow and see what each step produces."
weight: 3
---

Once you've connected your nodes, running a workflow is one click. Here's what happens and how to read the results.

## Running Your Workflow

<div class="steps-container">

{{< step num="1" title="Click Run" >}}
Tap the **Run** button in the toolbar at the top of the editor. Your workflow saves automatically before executing.
{{< /step >}}

{{< step num="2" title="Watch it execute" >}}
Each node lights up as it runs — you'll see a progress indicator move through the chain from left to right. A **run log** panel opens at the bottom showing each step's status in real time.
{{< /step >}}

{{< step num="3" title="Review per-node results" >}}
As each node finishes, its output appears in the results panel. You can see exactly what every step produced — the entities it extracted, the codes it found, the text it generated.
{{< /step >}}

{{< step num="4" title="Check the final output" >}}
The last node in your chain delivers the final result. If it's a "Send to Chat" node, the output appears in your chat. If it's a PDF or slides export, the file is ready to download.
{{< /step >}}

</div>

## The Run Log

The run log shows each node's execution with:

- **Status** — Running, Completed, or Failed
- **Output preview** — A snippet of what the node produced
- **Elapsed time** — How long the step took (in milliseconds)
- **Error details** — If a step fails, you'll see what went wrong

## Seeing Step-by-Step Results

This is one of the most useful parts of workflows. Unlike a chat (which just gives you the final answer), a workflow lets you **inspect every intermediate step**:

- Did the entity extraction catch all the medications? Check its output.
- Did the ICD-10 lookup return the right codes? Look at the results.
- Is the generated text what you expected? Review it before it goes to the next node.

This makes it easy to figure out where to improve things — if the final output isn't quite right, you can see exactly which step needs adjustment.

## History

Every time you run a workflow, the results are saved. You can:

- **View past runs** in the History panel on the right side
- **Compare results** from different runs
- **Re-run** the same workflow with different inputs

{{< tip title="Iterate quickly" >}}
Run your workflow, check the results, adjust a node's settings, and run again. Each run takes seconds, so you can experiment freely.
{{< /tip >}}

## What If a Step Fails?

If a node fails, the run log shows the error. Common causes:

- **Missing input** — A node didn't receive data from the previous step (check your connections)
- **Invalid configuration** — A setting is missing or incorrect (click the node to fix it)
- **Tool error** — The underlying tool couldn't process the data (try a different query or input)

The workflow stops at the failed step. Fix the issue and run again — you don't need to rebuild anything.

{{< callout type="info" >}}
**Workflows auto-save.** Your nodes, connections, and configurations are preserved even if you close the editor. Pick up where you left off anytime.
{{< /callout >}}
