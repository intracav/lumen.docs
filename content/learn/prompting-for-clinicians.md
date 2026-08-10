---
title: "How to Ask AI Clinical Questions: A Prompting Guide"
description: "How to write AI prompts for clinical questions: give context, ask a focused question, name the output. Three habits that upgrade every answer."
weight: 8
keywords: ["how to write AI prompts for clinical questions", "prompting guide for clinicians", "clinical AI prompts", "prompt engineering for doctors"]
---

You already know how to prompt an AI — you learned it writing consult requests. A good consult gives the consultant three things: the context (*"68-year-old on warfarin, mechanical mitral valve"*), the specific question (*"how would you bridge for his colonoscopy?"*), and what you'll do with the answer (*"procedure is Thursday; I need a plan for the clinic note"*). Write *"eval and treat"* or *"rule out badness"* on the consult and you get a worse consult back — not because the consultant got worse, but because the request gave them nothing to aim at.

Asking Lumen a clinical question works exactly the same way. No computer science, no magic phrases — just the skills of a well-written consult, applied in chat. Here's the anatomy, one before-and-after, and the three habits worth keeping.

## The anatomy of a good clinical prompt

**1. Context — who's asking, about what.** A sentence of clinical setting changes everything: patient factors that matter, your role, your environment. *"I'm a hospitalist"* and *"I'm a home-infusion pharmacist"* deserve different answers to the same question. You don't need the whole H&P — just the variables that would change *your* answer if a colleague asked you.

**2. The specific question.** "Tell me about DOACs" invites an essay. "Which DOAC has the best renal-dosing evidence for a CrCl of 22?" invites an answer. If you can name the decision you're actually facing, name it — the question behind the question is the one worth asking.

**3. The output you want.** Say what the answer is *for*: a table you can scan on rounds, three bullet points for a patient call-back, a paragraph for a committee memo, a citation-backed summary. Lumen will happily match the format — but only if you name it.

## Before and after

{{< chat-demo title="Before — the 'rule out badness' consult" >}}
{{< user >}}Tell me about vancomycin dosing{{< /user >}}
{{< lumen >}}Vancomycin dosing depends on the indication, patient weight, and renal function. Typical adult dosing is 15&ndash;20 mg/kg every 8&ndash;12 hours, with trough or AUC-guided monitoring&hellip; *(a textbook chapter follows — accurate, generic, and not about your patient)*{{< /lumen >}}
{{< /chat-demo >}}

{{< chat-demo title="After — the focused consult" >}}
{{< user >}}I'm covering the ICU. 52-year-old, 110 kg, MRSA bacteremia, CrCl around 30 and falling. Starting vancomycin — give me a loading dose, an initial maintenance plan, and when to draw the first level, as three short bullets I can put in my note.{{< /user >}}
{{< lumen >}}**For a 110 kg patient with MRSA bacteremia and CrCl ~30, declining:**

- **Load:** 25 mg/kg &asymp; 2,750 mg (round per your protocol) &mdash; loading dose is not reduced for renal function
- **Maintain:** start ~15 mg/kg every 24 h given the falling CrCl; reassess with renal trend, target AUC/MIC 400&ndash;600
- **First level:** before the second dose given the unstable renal function, then per pharmacy monitoring

Renal function is moving &mdash; consider looping in pharmacy for AUC-based dosing. Want this as a note-ready plan block?{{< /lumen >}}
{{< /chat-demo >}}

Same topic, same model — the second answer is usable at the bedside because the prompt told it whose bedside.

{{< callout type="warning" >}}
**Pasting clinical text? De-identify first.** The examples above use fictional details. When you paste real notes or results, strip names, MRNs, and dates — Lumen's [de-identification tool](/tools/privacy/) does this in one step.
{{< /callout >}}

## Iterating beats perfecting

Here's where the consult analogy breaks in your favor: follow-ups are free. A real consultant you get once; Lumen you can redirect all day. So don't polish the perfect prompt before sending — send the decent one, look at what comes back, and steer: *"shorter,"* *"now as a table,"* *"what about the CKD population,"* *"cite the guideline for that second claim."*

A rough prompt plus two follow-ups reliably beats ten minutes of prompt-crafting. The conversation *is* the method.

## The menu is the prompt library

You may have seen lists of elaborate prompt templates to copy and paste. In Lumen, most of that engineering is already done and hanging on two keystrokes:

- Type **`@`** for a [Specialist](/skills-and-specialists/) — a whole expert configuration. `@Prior Authorization` already knows the tools, the steps, and what a finished appeal looks like; you just bring the case.
- Type **`/`** for a [Skill](/skills-and-specialists/) — a precise output procedure. `/soap-note` carries the structure and standards, so you never have to describe what a SOAP note is.

Reaching for the menu *is* prompting — you're selecting a professionally built prompt instead of composing one.

## Attach, don't describe

If your question is about a document — a policy, a discharge summary, a paper — don't summarize it into the prompt. [Attach it](/chat/attachments/). Your paraphrase of a 40-page policy is a lossy compression; the original lets Lumen quote the actual line that answers your question. The same goes for lab printouts and guideline PDFs: the document is always a better witness than your description of it.

## Three habits to leave with

1. **Write the consult, not the topic.** Context, specific question, intended output — one or two sentences each.
2. **Steer with follow-ups.** First answer too generic? Say so. Iterating is faster than perfecting.
3. **Reach for `@`, `/`, and the paperclip before prose.** Specialists, Skills, and attachments replace paragraphs of description.

{{< callout type="success" >}}
**See it in Lumen:** Browse the ready-made expertise in [Specialists & Skills](/skills-and-specialists/), then put the three habits to work in [your first chat](/getting-started/first-chat/).
{{< /callout >}}

## Frequently asked questions

{{< faq question="Do I need to learn 'prompt engineering'?" >}}
No. Prompt engineering matters when you're building automated systems that get one shot at a prompt. In conversation, clarity plus iteration beats clever phrasing every time — and Lumen's Specialists and Skills package the genuinely engineered prompts behind a menu, so the remaining skill is the one you already have: writing a good consult request.
{{< /faq >}}

{{< faq question="Is it worth telling Lumen my role every time?" >}}
Say it once and tell Lumen to remember it — *"remember that I'm a pediatric ICU nurse practitioner"* — and it will shape future answers automatically. See [how AI memory works](/learn/ai-memory/) for what persists and what doesn't.
{{< /faq >}}

{{< faq question="What if I don't know enough to ask a specific question?" >}}
Then say exactly that — it's a legitimate prompt. *"I'm seeing my first case of X and don't know what I don't know — what should I be asking?"* turns Lumen into the orienting colleague first, and you can narrow from there. Vague is only a problem when it's unintentional.
{{< /faq >}}

---

Good prompts get even more powerful when Lumen can see your patient's actual chart — [SMART on FHIR, explained](/learn/smart-on-fhir/) covers how that connection works.
