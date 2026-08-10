---
title: "How AI Uses Tools: Function Calling for Clinicians"
description: "AI function calling explained for clinicians: how a model decides to run a real drug-interaction lookup instead of answering from memory — and how you see it."
weight: 2
keywords: ["AI function calling explained", "how does AI look up drug interactions", "AI tool use in healthcare"]
---

Picture the model as an attending running a busy service. A good attending doesn't answer every question from memory — they know *when to call a consult*. Renal dosing question? Call pharmacy. Is that infiltrate new? Call radiology. The skill isn't knowing everything; it's knowing which specialist to involve, asking a precise question, and integrating the answer.

That is exactly what **tool use** — the feature AI engineers call *function calling* — gives a language model. The model is the attending. The tools are its consult services: a drug-interaction database, a medical calculator, a literature search, a code lookup. The model's job is to recognize when a question deserves a consult instead of a recollection.

## Why a model shouldn't answer a drug question from memory

A language model's memory is impressive but has the same failure mode as any memory: it's fluent whether or not it's right. Three problems make memory alone unacceptable for factual clinical questions:

- **Staleness.** Training data has a cutoff. Interaction warnings, code sets, and coverage rules change after it.
- **Precision.** Memory reconstructs; it doesn't retrieve. A model recalling "there's an interaction between those two drugs" may blur *which* mechanism, *what* severity, or *which* similarly-named drug.
- **Arithmetic.** Language models predict text — they're genuinely unreliable at calculation. A risk score deserves a calculator, not an essay that resembles one.

You already hold humans to this standard. A colleague who rattles off dosing thresholds from memory when the reference is one click away isn't being efficient — they're being risky. The same rule should bind the software.

## How a tool call actually works

The mechanics are simpler than the name "function calling" suggests. Four steps:

1. **The model recognizes the need.** Reading your question, it decides this is a consult, not a recollection — the same judgment call an attending makes.
2. **It writes a structured request.** Not prose — a precise, machine-readable order: *check interactions for azithromycin and warfarin*. Think of it as a well-filled consult request rather than a hallway "hey, quick question."
3. **The system runs the real lookup.** This part isn't AI at all. The request goes to an actual database or calculator, which returns actual data. The model cannot make this step up — the lookup happens outside it.
4. **The model reads the result and answers.** Now it does what language models are genuinely best at: turning verified data into a clear, contextualized answer for you.

The division of labor is the point. The model contributes judgment (when to look, what to ask, how to explain). The tool contributes facts. Neither is asked to do the other's job.

## What this looks like in Lumen

You don't have to take any of this on faith — Lumen shows you the consult happening. When the model calls a tool, a **tool chip** appears right in the response: which tool ran and what it was asked.

{{< chat-demo title="Chat" >}}
{{< user >}}Can I start azithromycin in a patient who's on warfarin?{{< /user >}}
{{< lumen >}}
<div class="mock-tool">
  <div class="mock-tool-header"><span class="mock-tool-status done"></span> Checked drug interactions</div>
  <div class="mock-tool-detail">azithromycin &times; warfarin</div>
</div>

**Moderate interaction — use with monitoring.** Azithromycin can potentiate warfarin's anticoagulant effect; increased INR and bleeding events have been reported. If co-prescribing is necessary, consider closer INR monitoring during and shortly after the course.
{{< /lumen >}}
{{< /chat-demo >}}

That chip is the difference between *"trust me"* and *"here's the consult note."* You can see the model didn't answer from memory — it ran the lookup, and the answer sits directly on top of the returned data. Lumen has a whole catalog of these consult services — literature search, ICD-10 and CPT lookups, clinical calculators, guideline retrieval and more — in the [tools reference](/tools/).

## Why tool use makes answers checkable

The deepest benefit isn't accuracy — it's **auditability**. An answer from memory is a black box: to verify it, you'd have to redo the entire lookup yourself. An answer built on a visible tool call decomposes into pieces you can check independently:

- **Was the right tool called?** A dosing question that never triggered a database lookup should raise your eyebrow — the chip's absence is information too.
- **Was the question right?** The chip shows what was actually queried. If you asked about azithromycin and the lookup ran on erythromycin, you'll see it.
- **Does the answer match the data?** The prose sits next to its evidence, so a mismatch is visible rather than hidden.

This is the same reason you chart your reasoning: not because you expect to be wrong, but because checkable work is trustworthy work. [Reading answers](/chat/responses/) walks through every element of a Lumen response — thinking indicators, tool chips, sources — so you know exactly what you're looking at.

{{< callout type="success" >}}
**See it in Lumen** — Browse the full consult roster in [Tools](/tools/), and learn to read tool chips, thinking blocks, and sources in [Reading answers](/chat/responses/).
{{< /callout >}}

## Frequently asked questions

{{< faq question="What is function calling in AI?" >}}
Function calling (or tool use) is how an AI model requests real actions instead of answering from memory. The model writes a structured request — like "check interactions for drug A and drug B" — the surrounding system runs it against a real database or calculator, and the model reads the returned data before answering. The model supplies judgment; the tool supplies facts.
{{< /faq >}}

{{< faq question="How does AI look up drug interactions instead of guessing?" >}}
When a model with tool access reads a drug-interaction question, it recognizes that memory isn't reliable enough and issues a lookup request to an actual interaction database. The database returns the current data, and the model builds its answer on that result. In Lumen you can verify this happened: a tool chip in the response shows which lookup ran and what was queried.
{{< /faq >}}

{{< faq question="How do I know when the AI used a real database versus its memory?" >}}
In Lumen, every tool call appears as a visible chip in the response showing the tool's name and inputs. If an answer has no tool chip and no sources, it came from the model's general knowledge — treat it like a colleague's recollection and verify anything consequential.
{{< /faq >}}

---

Tools answer point questions. For evidence-backed answers with citations, the model uses a related technique — retrieval. That's the next read: [RAG: how AI cites real sources](/learn/rag-and-citations/). Or see a live interaction check in [Check a drug interaction](/getting-started/check-interaction/).
