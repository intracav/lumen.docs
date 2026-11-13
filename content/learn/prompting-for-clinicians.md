---
title: "How to ask AI clinical questions"
navTitle: "Prompting for clinicians"
description: "Write AI questions the way you write a good consult: context, a specific question and the output you need. Plus how Specialists, Skills and attachments help."
lead: "You already know how to prompt an AI. You learned it writing consult requests."
weight: 8
icon: message
keywords: ["how to write AI prompts for clinical questions", "prompting guide for clinicians", "clinical AI prompts"]
glance:
  what: "A prompt is what you type to an AI. This page shows how to write one that gets a usable clinical answer the first time."
  who: "Clinicians, educators, coders and staff who use Lumen, or any AI assistant, for work."
  why: "A focused question gets an answer you can use at the bedside instead of a textbook chapter."
  needs: "Nothing. About 5 minutes to read. Try the examples in any Lumen chat."
  result: "Three habits that improve every answer."
---

A good consult request gives the consultant three things: the context ("68-year-old on warfarin, mechanical mitral valve"), the specific question ("how would you bridge for his colonoscopy?") and what you'll do with the answer ("procedure is Thursday; I need a plan for the clinic note"). Write "eval and treat" and you get a worse consult back, not because the consultant got worse, but because the request gave them nothing to aim at. Asking Lumen works the same way. A **prompt** is what you type; a good one reads like a good consult.

## How it works: the anatomy of a good question

{{< flow >}}
{{< flow-node kicker="1 · Context" title="Who and what" icon="user" tint="blue" >}}Your role, your setting, the patient factors that change the answer.{{< /flow-node >}}
{{< flow-node kicker="2 · Question" title="The decision you face" icon="target" tint="plum" >}}Specific enough to have an answer.{{< /flow-node >}}
{{< flow-node kicker="3 · Output" title="What it's for" icon="file-text" tint="green" >}}A table, three bullets, a note-ready paragraph.{{< /flow-node >}}
{{< /flow >}}

- **Context.** One sentence changes everything. "I'm a hospitalist" and "I'm a home-infusion pharmacist" deserve different answers. You don't need the whole history, only the details that would change *your* answer if a colleague asked you.
- **The specific question.** "Tell me about DOACs" invites an essay. "Which DOAC has the clearest dosing guidance at a CrCl of 22?" invites an answer.
- **The output.** Say what the answer is for: a table to scan on rounds, three bullets for a call-back, a paragraph for a committee memo.

### Before and after

{{< chat-demo title="Before: the topic, not the question" caption="Illustration. A vague question gets a generic answer." >}}
{{< user >}}Tell me about vancomycin dosing{{< /user >}}
{{< lumen sources="3" >}}
Vancomycin dosing depends on the indication, weight and kidney function, with AUC-guided monitoring now preferred in many settings {{< cite 1 >}}… *(a general overview follows: accurate, but not about your patient)*
{{< /lumen >}}
{{< /chat-demo >}}

{{< chat-demo title="After: the focused consult" caption="Illustration with a fictional ICU patient. Confirm doses with your pharmacy protocol and the cited sources." >}}
{{< user >}}I'm covering the ICU. 52-year-old, 110 kg, MRSA bacteremia, CrCl about 30 and falling. Starting vancomycin. Give me the loading dose approach, an initial maintenance plan and when to draw the first level, as three short bullets for my note.{{< /user >}}
{{< lumen thought="11" tools="Renal dosing, Clinical guidelines, Dose calculator" sources="3" evidence="true" >}}
- **Load:** a weight-based loading dose is commonly used in serious MRSA infection, and it isn't reduced for kidney function {{< cite 1 >}}. Round per your protocol.
- **Maintain:** extend the interval for the falling CrCl and adjust to an AUC target {{< cite 2 >}}.
- **First level:** check early, given the unstable kidney function, and involve pharmacy for AUC dosing {{< cite 3 >}}.

Open each source and confirm against your institution's vancomycin protocol before ordering.
{{< /lumen >}}
{{< /chat-demo >}}

Same topic, same model. The second answer is usable because the question said whose bedside it was for.

## How Lumen does it

Lumen gives you three shortcuts that replace paragraphs of instructions:

- **Type `@` for a Specialist.** A *Specialist* is Lumen's name for an AI agent built for one kind of job. `@Prior Authorization` already knows the tools, the steps and what a finished appeal looks like. You bring the case.
- **Type `/` for a Skill.** A *Skill* is a ready-made procedure for one kind of output. `/soap-note` or `/discharge-summary` carries the structure, so you don't describe what a SOAP note is.
- **Attach, don't describe.** If your question is about a document, attach it with the paperclip. Your summary of a 40-page policy loses detail; the original lets Lumen quote the exact line.

You can browse every Specialist and Skill in **Explore**, the one list of Specialists, Skills and tools.

## What this means for you

1. **Write the consult, not the topic.** Context, specific question, intended output.
2. **Steer with follow-ups.** Follow-ups cost nothing. Send a decent question, look at the answer, then say "shorter", "as a table", "what about CKD?" or "cite the guideline for that second point". A rough question and two follow-ups usually beat ten minutes of polishing.
3. **Reach for `@`, `/` and the paperclip before long instructions.**

If you aren't sure what to ask, say so: "I'm seeing my first case of X and don't know what I don't know. What should I be asking?" is a good prompt.

## Limits and safety

- **A better question doesn't make an answer correct.** It makes it relevant. You still check the sources.
- **Only share what you're permitted to share.** Use the minimum patient detail the question needs, and follow your organization's rules. Never paste identifiers you aren't permitted to share. See [De-identification](/learn/deidentification/).
- **Watch for assumptions.** If Lumen fills a gap you didn't mention, such as weight or kidney function, correct it in your next message.

{{< callout type="safety" title="End every clinical question by checking the sources" >}}
Open the citations, confirm them against your institution's protocols, and use your judgment before acting.
{{< /callout >}}

## FAQ

{{< faq question="Do I need to learn prompt engineering?" >}}
No. Clear questions and follow-ups matter more than clever wording. Specialists and Skills package the detailed instructions for you.
{{< /faq >}}
{{< faq question="Do I have to tell Lumen my role every time?" >}}
No. Say "remember that I'm a pediatric ICU nurse practitioner" once, and Lumen saves it to memory for later chats. See [How AI memory works](/learn/ai-memory/).
{{< /faq >}}
{{< faq question="Is there a list of good prompts?" >}}
Explore lists every Specialist and Skill, and each one is in effect a well-built prompt. The [Getting started](/getting-started/) scenarios show example questions for common tasks.
{{< /faq >}}

## Next steps

{{< related "/getting-started/first-chat/" "/skills-and-specialists/" "/chat/attachments/" "/learn/ai-memory/" >}}
