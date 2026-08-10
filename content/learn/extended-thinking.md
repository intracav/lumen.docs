---
title: "Extended Thinking: Why AI Sometimes Pauses Before Answering"
description: "AI reasoning models explained: what happens during the pause, when Lumen thinks longer, and why a slower answer is often a safer one."
weight: 6
keywords: ["AI reasoning models explained", "extended thinking", "chain of thought", "why does AI pause before answering"]
---

There are two ways to answer a clinical question. The curbside consult — a colleague catches you in the hallway, you answer from pattern recognition, and you're right most of the time. And the formal consult — you sit down with the chart, work the problem, and write a note that shows your reasoning. Psychologists call these System 1 and System 2 thinking. Both are legitimate. The skill is knowing which one the case deserves.

AI models have the same two gears. **Extended thinking** is the formal consult: instead of producing an answer in one pass, the model works through the problem in a private scratchpad first — laying out what's being asked, what it knows, what could go wrong — and only then writes its response. For a hard case, you *want* your consultant to sit with it. This page explains what's happening during that pause, and why it's worth the wait.

## What extended thinking actually is

A language model normally generates its answer directly: your question goes in, the response comes out, word by word. That's the curbside gear — fast, fluent, and usually fine for "what's the max daily dose of acetaminophen in cirrhosis?"

With extended thinking turned on, the model gets room to reason *before* committing to an answer. In that scratchpad it can decompose the question, recall relevant evidence, weigh competing considerations, catch its own early mistakes, and change course — all before you see a single word of the reply. The reasoning isn't decoration on top of the answer; it *produces* the answer, the way your differential produces your plan.

<div class="journey-flow">
  <div class="journey-box">
    <div class="journey-box-icon">&#10067;</div>
    <div class="journey-box-label">Your question</div>
    <div class="journey-box-sub">A genuinely hard case</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128221;</div>
    <div class="journey-box-label">Scratchpad</div>
    <div class="journey-box-sub">Decompose, weigh, self-check</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128295;</div>
    <div class="journey-box-label">Look things up</div>
    <div class="journey-box-sub">Tools, guidelines, evidence</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#9989;</div>
    <div class="journey-box-label">Answer</div>
    <div class="journey-box-sub">With reasoning attached</div>
  </div>
</div>

## When Lumen thinks longer

Lumen doesn't run the formal consult on every message — that would be like ordering a workup for every hallway question. Simple factual lookups get direct answers. Extended thinking engages when the question earns it:

- **Multiple interacting variables** — anticoagulation in a patient with both stroke risk and a bleeding history
- **Risk–benefit trade-offs** — where the right answer depends on weighing, not just knowing
- **Multi-step planning** — building a differential, sequencing a workup, drafting a complex document
- **Coordinating several tools** — when answering requires deciding *what to look up*, in what order

You'll notice the difference as a pause before the response starts, with a live indicator showing that Lumen is thinking.

## The "Thought for Ns" block

When Lumen thinks, the reasoning isn't hidden. It streams into a collapsible block at the top of the response, and when the answer is done, the block folds down to a single line: **"Thought for 12s."** Click it any time to reopen the scratchpad.

Most of the time you won't need to. But reading it is occasionally illuminating — the way reading a consultant's note teaches you more than reading their one-line recommendation. You can see which possibilities Lumen considered and discarded, which assumption it flagged as uncertain, and where it decided your question was ambiguous. If an answer ever surprises you, the thinking block is the first place to look: either the reasoning holds up and you've learned something, or it doesn't and you've caught the error before it mattered.

{{< callout type="info" >}}
**The thinking block is a reasoning trail, not a transcript of certainty.** Treat it the way you'd treat a trainee presenting their logic — a chance to verify the steps, not a guarantee the conclusion is right. The clinical judgment stays with you.
{{< /callout >}}

## Thinking and tools, together

Extended thinking gets most powerful when it's combined with tool use. Reasoning tells Lumen *what it doesn't know*; tools let it go find out. On a hard question you'll often see the two interleave: Lumen thinks, decides it needs the actual interaction data rather than its memory of it, runs a [drug interaction check](/tools/medications/), reads the result, and thinks again before answering.

That loop — reason, look up, reconsider — is exactly what you do with a chart and a reference open side by side. It's also why extended-thinking answers tend to come with better citations: the model has already asked itself "how do I know that?" before you had to.

## The trade-off: slower, deeper

Extended thinking has one honest cost — time. A response that would start instantly might take ten or twenty seconds to begin while Lumen works the problem. For a quick lookup, that's the wrong trade, which is why Lumen answers simple questions directly.

For a genuinely hard question, it's the right one. You wouldn't want a consultant who returns a complex recommendation faster than they could have read the chart. The pause isn't the model being slow; it's the model doing the part of the work that makes the answer trustworthy.

{{< callout type="success" >}}
**See it in Lumen:** Watch the thinking block stream in real time on [How Lumen Thinks](/chat/thinking/), or trigger it yourself by [building a differential](/getting-started/differential/) — a question hard enough that Lumen sits with it first.
{{< /callout >}}

## Frequently asked questions

{{< faq question="Does a longer thinking time mean a better answer?" >}}
Not linearly. Thinking time scales with how hard the model judges the question to be, so a 30-second think usually signals a genuinely complex problem — but a fast answer to a simple question is just as reliable. What matters is that hard questions *get* the pause. If a complex clinical question comes back instantly and thinly, rephrase it with more context so Lumen treats it as the formal consult it is.
{{< /faq >}}

{{< faq question="Should I read the thinking block every time?" >}}
No — that would defeat the point of having a consultant. Read it when the stakes are high, when the answer surprises you, or when you want to learn how the problem decomposes. For routine questions, the collapsed "Thought for Ns" line is simply your signal that the reasoning happened and is there if you need it.
{{< /faq >}}

{{< faq question="Can I make Lumen think harder about a specific question?" >}}
Effectively, yes — by asking a question worth thinking about. Adding clinical context, competing considerations, and what you plan to do with the answer gives the model a real problem to reason through rather than a fact to retrieve. See [the prompting guide](/learn/prompting-for-clinicians/) for how to frame one.
{{< /faq >}}

---

Next up: the other half of what makes an AI colleague useful — [what it remembers between conversations, and what it deliberately doesn't](/learn/ai-memory/).
