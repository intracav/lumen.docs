---
title: "The Agentic Loop: How AI Works Through Multi-Step Tasks"
description: "Agentic AI explained for clinicians: the plan–act–observe–adjust loop, the harness that keeps it safe, and how iteration caps work like scope-of-practice rules."
weight: 5
keywords: ["agentic AI explained", "how do AI agents work", "AI agent loop plan act observe"]
---

You already run the most battle-tested loop in professional life. Assess the patient. Order what the assessment suggests. Review what comes back. Reassess — because the troponin changes the plan, or doesn't. Nobody manages a complex patient in one pass; medicine's answer to complexity is *iteration with feedback*.

**Agentic AI** is that same loop, implemented in software. And the second half of the analogy matters just as much: a clinician doesn't loop alone. The hospital surrounds them — the paging system that carries orders, the lab that routes results back, the protocols that define what a resident may do unsupervised and what needs an attending's co-sign. In AI, that surrounding structure is called the **harness**, and it's where most of the safety lives.

## The loop: plan, act, observe, adjust

Strip any agent down and you find four beats repeating:

<div class="journey-flow">
  <div class="journey-box">
    <div class="journey-box-icon">&#129504;</div>
    <div class="journey-box-label">Plan</div>
    <div class="journey-box-sub">Assess; pick the next step</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#9889;</div>
    <div class="journey-box-label">Act</div>
    <div class="journey-box-sub">Run a tool — search, look up, draft</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128269;</div>
    <div class="journey-box-label">Observe</div>
    <div class="journey-box-sub">Read what came back</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128260;</div>
    <div class="journey-box-label">Adjust</div>
    <div class="journey-box-sub">Reassess — then loop again</div>
  </div>
</div>

- **Plan.** Given the goal — say, *"summarize the evidence on catheter-securement methods and draft a committee brief"* — the model decides the next concrete step. Not the whole path; the next step. Like a workup, the later steps depend on what the early ones find.
- **Act.** It executes that step with a real tool: a literature search, a guideline retrieval, a document read. This is an order, not a musing.
- **Observe.** The result comes back and the model actually reads it — the way you read the lab value rather than assuming it.
- **Adjust.** The findings change the plan. Twelve strong trials found? Move to synthesis. Nothing relevant? Broaden the search terms. A result contradicting the premise? Surface that, because it changes the brief's conclusion.

Then the loop runs again, until the goal is met or the agent needs you.

## Why a loop beats a one-shot answer

A single-pass answer to a complex task has to guess everything at once — what the evidence will say, what will need double-checking, what the final document should conclude — before seeing any data. That's presenting a management plan before the labs are back. Sometimes you get lucky. It isn't a method.

The loop wins for the same reasons iteration wins clinically:

- **Later steps use earlier findings.** The search results determine what's worth reading deeply; what's read shapes the draft. One-shot answers fake this chain; loops actually run it.
- **Errors get caught mid-course, not post-hoc.** A wrong assumption in step two is corrected at step three's observation — instead of silently propagating into the conclusion.
- **Dead ends are recoverable.** An empty search isn't failure; it's information that reroutes the plan. One-shot systems can't reroute anything.

## The harness: the hospital around the clinician

Here's the concept that separates a demo from something you'd let near clinical work. The loop is the clinician; the **harness** is the hospital.

A hospital doesn't just *contain* clinicians — it structures what they can do. The paging and order systems carry requests through defined channels. The lab routes results back to the ordering clinician, reliably. Scope-of-practice rules and protocols define what a resident does freely, and what requires a co-sign. Remove that structure and even excellent clinicians become dangerous.

The harness is all of that, in software. It's not the AI model — it's the system built around the model that:

- **Runs the loop** — carries each tool request to the right service and routes results back, like the paging system and the lab courier.
- **Enforces limits** — which tools this agent may touch, how many steps it may take, where it may send data. Scope of practice, in code.
- **Requires confirmation for consequential actions.** Drafting a summary is a resident acting freely; anything with real-world consequences is a co-sign moment — the harness stops and asks you first.
- **Records everything** — every step, every tool call, every result, so the run can be reviewed like a chart.

When you evaluate any agentic AI product, this is the question to ask: never just "how smart is the model?" but "**what does the harness let it do, and what does it refuse to let it do alone?**"

## Watching the loop in Lumen

In Lumen, [agent mode](/skills-and-specialists/agent-mode/) runs this loop inside an ordinary chat, and it shows you every iteration as it happens: the plan, then each step appearing as it executes — what ran, what came back — through to the finished result. You're not handed a conclusion after a mysterious silence; you watch the workup the way you'd watch a resident you're precepting. If a step surprises you, you can stop the run right there.

The same loop, with the dial turned the other way, powers [Workflows](/workflows/) — there *you* fix the steps in advance visually, and the system executes your sequence every time. Agent mode is the resident improvising a workup; a workflow is your standing protocol.

## Iteration caps and autonomy levels are safety features

Two harness behaviors are worth recognizing, because they can look like limitations and are actually the design working:

- **Iteration caps.** Agents get a bounded number of loop turns, and long runs check in rather than running forever. That's not stinginess — an agent that can loop indefinitely can wander indefinitely, burning time on a tangent no one asked for. Medicine has the same rule: you don't keep ordering tests without reassessing with the team.
- **Autonomy levels.** Reading and summarizing are granted freely; consequential actions require your confirmation. It's graduated responsibility, exactly like training: what a resident may do unsupervised is earned and bounded, and the boundary is written down before the shift starts — not negotiated during the emergency.

An agent that never asks permission isn't more advanced. It's a resident with no attending — and no hospital.

{{< callout type="success" >}}
**See it in Lumen** — Watch the loop run step-by-step in [Agent mode](/skills-and-specialists/agent-mode/), or lock your own sequence into a repeatable automation with [Workflows](/workflows/).
{{< /callout >}}

## Frequently asked questions

{{< faq question="What is an agentic loop in AI?" >}}
It's the cycle an AI agent repeats to work through a multi-step task: plan the next step, act by running a real tool, observe the result, and adjust the plan based on what came back — the software version of assess, order, review results, reassess. The loop continues until the goal is met or the agent needs your input.
{{< /faq >}}

{{< faq question="What is a harness in agentic AI?" >}}
The harness is the software structure built around the AI model — like the hospital around a clinician. It runs the loop, routes tool requests and results, enforces limits on which tools an agent may use and how many steps it may take, requires your confirmation before consequential actions, and records every step for review. Most of an agent's safety lives in the harness, not the model.
{{< /faq >}}

{{< faq question="Why do AI agents have step limits?" >}}
Bounded iterations are a safety feature, not a shortcoming. An agent that could loop forever could wander off-task indefinitely; caps force it to reach a conclusion or check in with you — the same reason clinical culture expects reassessment with the team rather than endlessly ordering tests.
{{< /faq >}}

---

That completes the concepts behind Lumen's agentic side. The fastest way to make it concrete is to delegate something real — start in [your first chat](/getting-started/first-chat/), or hand agent mode a full workup in [Build a differential](/getting-started/differential/).
