---
title: "Fast vs. Deep: Choosing the Right AI Model"
description: "Which AI model should you use? What actually differs between fast and deep models, when the default is fine, and when switching up pays off."
weight: 11
keywords: ["which AI model should I use", "fast vs deep AI models", "AI model comparison for clinicians", "when to use a reasoning model"]
---

You don't send every sore throat to a tertiary referral center. Not because the referral center is bad at sore throats — it would handle them beautifully — but because the visit costs more, takes longer, and buys nothing the walk-in clinic wouldn't have delivered. Triage isn't about ranking institutions from worst to best. It's about matching the case to the resource.

Choosing an AI model is the same decision. Lumen offers more than one model, and the honest way to think about them is not "weaker versus smarter" but **fast versus deep** — a walk-in clinic and a referral center, both competent, tuned for different cases. This page is about doing that triage well.

## What actually differs between models

Strip away the mystique and models differ on three measurable axes:

- **Speed.** A fast model starts answering almost immediately. A deep model may spend seconds — sometimes tens of seconds — reasoning before the first word appears.
- **Depth of reasoning.** Deep models sustain longer chains of reasoning before committing to an answer: more variables held in play at once, more self-checking, more room for the [extended thinking](/learn/extended-thinking/) that hard problems reward. Fast models reason too — just with less headroom before they need to conclude.
- **Cost to run.** Deep models consume far more computation per answer. That's not your bill to think about in the moment, but it *is* why every AI product ties its deepest models to higher plans — and why "run the biggest model for everything" is nobody's actual workflow.

Notice what's not on the list: "intelligence" as some single magic quantity. A fast model isn't a deep model with points shaved off its judgment. They're different trade-offs on the same curve, the way a walk-in clinic isn't a defective hospital.

<div class="compare-grid">
  <div class="compare-card tint-blue" style="border-top-color: var(--smoky-blue);">
    <h3>&#9889; Fast model</h3>
    <div class="compare-subtitle">The walk-in clinic — right for most visits</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#8226;</span> Answers start immediately</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#8226;</span> Lookups, single-topic questions, everyday drafting</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#8226;</span> Tools supply the facts; the model orchestrates</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#8226;</span> Cheap enough to use all day</li>
    </ul>
  </div>
  <div class="compare-card tint-accent" style="border-top-color: var(--palace-green);">
    <h3>&#129504; Deep model</h3>
    <div class="compare-subtitle">The referral center — for the cases that earn it</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--palace-green);">&#10003;</span> Sustained multi-step reasoning before answering</li>
      <li><span class="compare-check" style="color: var(--palace-green);">&#10003;</span> Complex differentials, competing risks, long documents</li>
      <li><span class="compare-check" style="color: var(--palace-green);">&#10003;</span> Deeper extended-thinking budget</li>
      <li><span class="compare-check" style="color: var(--palace-green);">&#10003;</span> Slower and costlier — worth it selectively</li>
    </ul>
  </div>
</div>

## The default is fine for most questions

Here's the part that saves you from decision fatigue: **you usually don't need to choose.** Your plan's default model handles the large majority of clinical questions well, for a reason that's easy to miss if you think of the model as doing all the work.

It isn't. In Lumen, the factual heavy lifting — drug interactions, code lookups, guideline retrieval, calculations, current literature — is done by [tools](/learn/tool-use/), not by the model's memory. The model's job on those questions is to recognize what to look up, run the right tool, and summarize what came back. That's an orchestration task, and fast models orchestrate well.

This inverts the intuition that "harder question → bigger model." **A fast model with good tools beats a slow model guessing.** A deep model answering a dosing question from its own recollection is a referral-center attending reciting a threshold from memory; a fast model calling the actual reference is a clinic doc with the formulary open. You want the second one. For factual questions, the trustworthiness lives in the lookup, not in the model's size.

## When to switch up

Some questions really do earn the referral. Switch to a deeper model when the *reasoning itself* is the hard part — when no single lookup settles it:

- **Complex reasoning under competing risks.** Anticoagulation with a bleeding history; chemotherapy timing around surgery; anything where the answer is a weighing, not a fact. Deep models hold more of the problem in view at once and spend more [thinking time](/learn/extended-thinking/) checking their own logic.
- **Long documents.** Synthesizing a 60-page guideline against your local protocol, or reconciling three specialists' notes into one coherent picture, rewards a model with the depth to track detail across the whole text rather than summarizing the first impression.
- **Nuanced writing.** An appeal letter that has to persuade a medical director, a committee summary where tone and precision both matter — writing quality is one place where deeper models are visibly better, because the "reasoning" is in every sentence.

The tell, in practice: if you find yourself writing a long, careful prompt with multiple considerations, you've already triaged the question as complex. Match the model to the effort you just put in.

## When fast is right

Choose fast — that is, happily stay on the default — when the question has a findable answer:

- "Renal dosing for cefepime at a CrCl of 25?"
- "Is there an interaction between apixaban and diltiazem?"
- "What does the current guideline say about first-line therapy here?"

Each of these resolves to a lookup Lumen's tools perform identically regardless of which model asked. Waiting twenty extra seconds for a deep model buys you a more elaborately worded copy of the same retrieved fact. Fast is not the budget option here; it's the *correct* option — the sore throat seen promptly at the clinic instead of impressively at the referral center.

## What your plan includes

Model lineup scales with plan: Free includes **DeepSeek V4 Flash**; Pro adds **DeepSeek V4 Pro**; Plus and Max add **Claude Sonnet 5** and **Claude Opus 4.8**, the deepest models in the lineup. The full table — and how to switch using the model picker in chat — lives on [Choosing a Model in Lumen](/chat/models/), and plan details are on [Plans](/plans/).

{{< callout type="success" >}}
**See it in Lumen:** open the model picker in any chat to see your plan's lineup — the walkthrough is at [Choosing a Model in Lumen](/chat/models/). Then give a deep model a case that deserves it: [build a differential](/getting-started/differential/) and watch the thinking block earn its seconds.
{{< /callout >}}

## Frequently asked questions

{{< faq question="Which AI model should I use for everyday clinical questions?" >}}
Your plan's default. Everyday questions — dosing, interactions, guideline lookups, quick drafts — are resolved by Lumen's tools, and a fast model directs those lookups just as well as a deep one while responding sooner. Save the deep models for questions where the reasoning, not the retrieval, is the hard part.
{{< /faq >}}

{{< faq question="Is a deeper model more accurate?" >}}
On reasoning-heavy problems, deeper models genuinely do better — more of the problem held in view, more self-checking before committing. On factual lookups, accuracy comes from the tool call and the retrieved source, which don't change with the model. That's why the fast-model-plus-tools combination is so strong, and why you should judge any answer by its citations rather than by which model produced it.
{{< /faq >}}

{{< faq question="Can I switch models in the middle of a conversation?" >}}
Yes — pick a different model from the model picker and it applies from your next message. This fits how real threads evolve: a conversation that starts as a quick lookup and grows into a management question can graduate to a deeper model without starting over. See [Choosing a Model in Lumen](/chat/models/).
{{< /faq >}}

---

Next up: the reason fast models punch above their weight — [how AI uses tools instead of guessing](/learn/tool-use/).
