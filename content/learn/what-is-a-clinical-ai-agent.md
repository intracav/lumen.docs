---
title: "What Is an AI Agent? A Clinician's Guide"
description: "What is an AI agent in healthcare? A plain-language guide to how agents differ from chatbots, what delegating a task looks like, and where the limits are."
weight: 1
keywords: ["what is an AI agent in healthcare", "AI agent for clinicians", "clinical AI agent explained"]
---

Think about the difference between a textbook and a resident. A textbook answers the question you bring to it — nothing more. A resident takes a *task*: "Work up this patient's anemia and tell me what you find." The resident plans an approach, orders the right tests, reads the results, changes course when something unexpected shows up, and comes back with a synthesized answer — showing their work so you can check it.

That's the difference between a plain AI chatbot and an **AI agent**. A chatbot is the textbook. An agent is the resident. Understanding that one distinction tells you most of what you need to know about where AI in medicine is heading — and what it can already do for you today.

## A language model on its own is a very good textbook

The core technology behind tools like Lumen is a **large language model** — a system trained on enormous amounts of text that has become remarkably good at understanding questions and producing fluent, well-organized answers.

On its own, though, a language model has real limits:

- It answers **from what it absorbed during training**, like a colleague answering purely from memory. It can't look anything up.
- It gets **one pass** at your question. Ask, answer, done. It can't notice mid-answer that it needs more information and go get it.
- It has **no hands**. It can describe how to check a drug interaction; it can't actually run the check.

For quick, well-established knowledge — "what's the mechanism of action of apixaban?" — that's often fine. For anything that requires current data, calculation, or several dependent steps, memory alone isn't good enough. You wouldn't accept it from a colleague, and you shouldn't accept it from software.

## What turns a model into an agent

An agent is a language model plus three additions — each one mapping to something you already recognize from clinical training:

1. **Tools.** Real lookups and calculators the model can invoke: literature search, drug-interaction databases, code lookups, document readers. These are its labs and imaging — actual data sources, not recollection.
2. **A loop.** Instead of one pass, the agent works in cycles: decide the next step, take it, look at what came back, decide again. Exactly how you run a workup — order, review, reassess.
3. **A goal.** You give it an outcome to reach ("summarize the evidence on early mobilization after PICC placement, with citations"), not a single question. The agent keeps working until the goal is met or it needs your input.

<div class="compare-grid">
  <div class="compare-card tint-blue" style="border-top-color: var(--smoky-blue);">
    <h3>&#128214; A chatbot (the textbook)</h3>
    <div class="compare-subtitle">You look things up in it</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> One question, one answer</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> Answers from training memory</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> You drive every step</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> Fast for simple lookups</li>
    </ul>
  </div>
  <div class="compare-card tint-accent" style="border-top-color: var(--accent);">
    <h3>&#129658; An agent (the resident)</h3>
    <div class="compare-subtitle">You delegate a task to it</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> One goal, many steps</li>
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> Looks things up with real tools</li>
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> Plans, acts, reassesses in a loop</li>
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> Shows its work for your review</li>
    </ul>
  </div>
</div>

## What delegation looks like in practice

Here's a task no single question can answer: *"Review this discharge summary, check every medication for interactions, and draft a reconciliation note."*

Hand that to an agent and it behaves the way you'd want a good resident to:

- **It plans.** First read the document, then extract the med list, then check interactions pair by pair, then draft the note.
- **It acts.** Each step uses a real tool — a document reader, an interaction database — not a guess from memory.
- **It adapts.** If the interaction check turns up a serious flag, the agent doesn't bury it in step four; it surfaces the finding and adjusts the note accordingly.
- **It presents.** You get the finished draft *and* the trail of steps and sources it used, the way a resident presents findings before you sign anything.

In Lumen, this is just a chat. You describe the whole job in plain English; [agent mode](/skills-and-specialists/agent-mode/) plans the steps and works through them while you watch each one complete. There's no separate console to learn — delegation happens in the same place you ask quick questions.

## Why this changes what AI is useful for

A textbook-style chatbot saves you a search. Useful, but marginal — you were going to find that answer anyway.

An agent saves you a *workflow*. The tasks that consume clinical time are rarely single questions: prior authorizations, literature summaries for committee, medication reconciliation, turning a rambling dictation into a coded note. Each is a chain of lookups, judgments, and drafting. Agents are built for chains. That's why the arrival of agents — not chatbots — is the moment AI starts giving clinicians hours back rather than seconds.

## The honest limits

Agents make mistakes. A multi-step process multiplies opportunities for error as well as usefulness: a wrong turn at step two can shape everything after it. Anyone who tells you agents remove the need for clinical judgment is selling something.

The right mental model is the one you already use: **attending oversight**. You delegate to a resident *because* the structure around them — presenting findings, showing sources, sign-off before anything counts — makes delegation safe. Good agent design copies that structure deliberately:

- Every step is **visible** while it runs, not summarized after the fact.
- Claims come with **sources you can open**, so verification is a click, not a literature search.
- The agent **drafts; you decide**. Nothing goes into a patient's care without your review.

An agent that hides its work doesn't deserve your delegation. One that shows it earns a supervised role — the same way a resident does.

{{< callout type="success" >}}
**See it in Lumen** — [Agent mode](/skills-and-specialists/agent-mode/) turns any chat into a delegated, multi-step task with every step visible. Then try it on a real case in [Build a differential with AI support](/getting-started/differential/).
{{< /callout >}}

## Frequently asked questions

{{< faq question="What's the difference between an AI agent and a chatbot?" >}}
A chatbot answers one question at a time from its training memory. An agent takes a goal, plans the steps to reach it, uses real tools (databases, calculators, document readers) to gather facts, and adjusts its plan based on what it finds — like delegating a workup to a resident rather than looking something up in a textbook.
{{< /faq >}}

{{< faq question="Are AI agents safe to use in clinical work?" >}}
They're safe the way delegation is safe: with supervision built in. A well-designed clinical agent shows every step it takes, cites sources you can open, and drafts rather than decides — final judgment stays with you, like attending oversight of a resident. Agents do make mistakes, so review their output before it touches patient care.
{{< /faq >}}

{{< faq question="Do I need technical skills to use an AI agent?" >}}
No. In Lumen, an agent is just a chat where you describe the whole task in plain English — "check these five meds for interactions and draft a reconciliation note." The planning, tool use, and step-by-step execution happen automatically, and you watch each step as it completes.
{{< /faq >}}

---

Curious how the pieces work? The next read explains the tools an agent calls — [How AI uses tools](/learn/tool-use/) — or you can just start a conversation in [your first chat](/getting-started/first-chat/).
