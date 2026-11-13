---
title: "The agentic loop: how AI works through tasks"
navTitle: "The agentic loop"
description: "How AI agents work through multi-step tasks: the plan, act, observe, adjust loop, the rules around it, and how Lumen's Specialists show each step."
lead: "Medicine handles complexity by iterating: assess, order, review, reassess. AI agents work the same way, inside rules that decide what they may do alone."
weight: 5
icon: refresh
keywords: ["agentic AI explained", "how do AI agents work", "AI agent loop plan act observe"]
glance:
  what: "The agentic loop is the cycle an AI agent repeats to finish a task: plan the next step, act with a tool, read the result, adjust."
  who: "Clinicians, managers and informatics leads who want to understand, or evaluate, AI that does multi-step work."
  why: "To know why step-by-step work beats a one-shot answer, and which safety rules should surround it."
  needs: "Nothing. About 5 minutes to read."
  result: "The questions to ask of any AI agent, and how Lumen answers them."
---

You already run the most tested loop in professional life. Assess the patient. Order what the assessment suggests. Review what comes back. Reassess, because the troponin changes the plan, or doesn't. An **AI agent** works the same way, and in Lumen these agents are called **Specialists**. Equally important, a clinician doesn't loop alone: the hospital around them carries orders, routes results and decides what a resident may do without a co-sign. For AI, that surrounding structure is called the *harness*, and it's where most of the safety lives.

## How it works

{{< flow >}}
{{< flow-node kicker="Plan" title="Pick the next step" icon="compass" tint="blue" >}}Not the whole path. The next step.{{< /flow-node >}}
{{< flow-node kicker="Act" title="Run a tool" icon="zap" tint="plum" >}}Search, look up, read, draft.{{< /flow-node >}}
{{< flow-node kicker="Observe" title="Read the result" icon="eye" tint="accent" >}}What actually came back.{{< /flow-node >}}
{{< flow-node kicker="Adjust" title="Reassess" icon="refresh" tint="green" >}}Then loop again, or finish.{{< /flow-node >}}
{{< /flow >}}

Say the goal is "summarize the evidence on catheter securement methods and draft a one-page brief for the Vascular Access committee."

- **Plan.** Decide the next concrete step: search the literature first.
- **Act.** Run the search with a real tool.
- **Observe.** Read what came back, the way you read the lab value rather than assuming it.
- **Adjust.** Twelve relevant trials? Move on to reading them. Nothing relevant? Broaden the search. A result that contradicts the premise? Flag it, because it changes the brief.

The loop repeats until the goal is met, the agent needs you, or it reaches its limits.

### Why a loop beats a one-shot answer

A single-pass answer to a complex task has to guess everything at once, before seeing any data. That's presenting a plan before the labs are back. A loop does better because later steps use earlier findings, errors get caught mid-course instead of carried into the conclusion, and dead ends become information that reroutes the plan.

### The harness: the hospital around the clinician

The *harness* is the software built around the AI model. It:

- **Runs the loop.** It carries each tool request to the right service and brings the result back.
- **Enforces limits.** Which tools the agent may use, how much work it may do, where it may send data. Scope of practice, written in code.
- **Stops for sign-off.** Drafting is fine to do alone. Anything with real-world consequences waits for a person.
- **Keeps a record.** Every step and result, so the work can be reviewed like a chart.

When you evaluate any AI agent, ask: "What does the harness let it do, and what does it refuse to let it do alone?"

## How Lumen does it

- **Written rules for every Specialist.** Each one declares its tools and Skills, how much it may do on its own, a work budget, what counts as done, and which actions need approval. These rules live in Lumen's code and the AI can't change them.
- **A visible task strip.** As a Specialist works, a strip lists each step as it finishes, with **Working…** on the current one. Press **Stop** at any point to end the work.
- **Approval before anything leaves Lumen.** Sending an email or writing to another system shows an approval card. It runs only after you press **Approve**, and exactly as shown. See [Approvals](/skills-and-specialists/approvals/).
- **A check at the end.** Finished results are checked against the quotes and sources the Specialist used, and failed checks send the work back for repair.
- **Runs on Lumen's servers.** You can close the tab and the loop keeps going, up to about an hour per task.
- **Parallel work where it's built in.** The **Clinical Trial Manager** Specialist can hand parts of a task to up to six other Specialists at once and gather their results.

{{< chat-demo title="Committee brief" specialist="Clinical Research" caption="Illustration of a Specialist's task strip. Always open the cited studies before using a brief." >}}
{{< user >}}Summarize the evidence on catheter securement methods for PICCs and draft a one-page brief for our Vascular Access committee.{{< /user >}}
{{< lumen thought="14" tools="PubMed search, Read article, Create document" sources="8" evidence="true" >}}
{{< task-strip >}}
{{< task state="done" label="Searched PubMed (3 queries)" >}}
{{< task state="done" label="Read 8 relevant studies" >}}
{{< task state="run" label="Drafting the brief" >}}
{{< task state="todo" label="Check quotes against sources" >}}
{{< /task-strip >}}
{{< /lumen >}}
{{< /chat-demo >}}

The same loop, with the steps fixed in advance, powers [Workflows](/workflows/). There, *you* lay out the steps on a canvas and Lumen runs them the same way every time, on a schedule or when something triggers it. A Specialist is a resident working up a case; a workflow is your standing protocol.

## What this means for you

- **Watch the first few steps.** If the plan heads the wrong way, stop it early and redirect.
- **Treat limits as a feature.** A budget forces the agent to finish or check in, the same reason you reassess with the team instead of ordering tests forever.
- **Expect to be asked.** An agent that never asks permission isn't more advanced. It's a resident with no attending.

## Limits and safety

- **Errors can compound.** A wrong assumption early can shape later steps. Read the trail, not only the result.
- **About an hour per task.** Large jobs may need splitting.
- **No recovery after a server failure.** If Lumen's servers fail mid-task, the task is marked interrupted and the partial work is kept. It doesn't resume on its own; you start it again.
- **Checked isn't correct.** A passed check means quotes were found in the sources, not that the conclusion fits your patient.

{{< callout type="safety" title="Review before anything counts" >}}
Open the sources behind any Specialist result before you rely on it. Lumen drafts; you decide.
{{< /callout >}}

## FAQ

{{< faq question="What is an agentic loop?" >}}
The cycle an AI agent repeats to finish a task: plan the next step, act with a real tool, read the result, adjust. It continues until the goal is met or the agent needs you.
{{< /faq >}}
{{< faq question="What is a harness?" >}}
The software around the AI model that runs the loop, enforces limits on tools and work, stops for human approval and records every step. Most of an agent's safety lives there.
{{< /faq >}}
{{< faq question="Can I stop a Specialist halfway?" >}}
Yes. Press **Stop** on the task strip. Steps already finished stay in the chat.
{{< /faq >}}

## Next steps

{{< related "/learn/what-is-a-clinical-ai-agent/" "/skills-and-specialists/working-with-a-specialist/" "/workflows/" "/learn/tool-use/" >}}
