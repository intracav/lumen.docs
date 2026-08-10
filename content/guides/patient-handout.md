---
title: "Create a Patient Handout at an 8th-Grade Level"
description: "Build a plain-language patient education handout — reading level you control, a 'when to call' section built in, exported as a printable PDF."
weight: 4
audience: clinician
time: "~5 minutes"
keywords: ["AI patient education handout", "plain language patient handout", "8th grade reading level handout", "warfarin patient education"]
---

## What you'll make

A one-page, plain-language patient handout at the reading level you choose — what the medication does, what to eat and avoid, and exactly when to call — exported as a PDF ready for the printer at the nurses' station. The explanation you've given verbally a hundred times, finally on paper the patient can take home and actually read.

Our case: a patient **newly started on warfarin** (fictional details throughout) — high-stakes teaching, food interactions, and a "call us if" list that genuinely matters.

## Before you start

- **Any plan works.** Handout creation and PDF export are included on every [plan](/plans/).
- **Know your audience:** reading level, language, and anything specific to this patient's situation (why they're on the drug, how monitoring will work at your clinic).
- **Have your clinic's specifics on hand** — INR check schedule, phone number placeholders, anything local you want printed on the page.

{{< callout type="warning" >}}
**Building from a real patient's chart?** Paste the clinical facts, not the identifiers — the handout needs "started on warfarin for a blood clot in the leg," never a name or MRN. The [de-identification tool](/tools/privacy/) can scrub source text before it enters the chat.
{{< /callout >}}

## Build the handout

<div class="steps-container">

{{< step num="1" title="Bring in Patient Education and set the audience" >}}
Type **@** and pick **[Patient Education](/skills-and-specialists/specialists/)** — the plain-language translator. Tell it who the handout is for and at what level. This Specialist defaults to a 6th-grade reading level; you're in control, so say what you want:

> *"Create a one-page handout for a 66-year-old patient newly started on warfarin for a DVT. 8th-grade reading level. Cover: what warfarin does, why INR checks matter, what to eat and what to keep steady (vitamin K foods), what to avoid (alcohol, NSAIDs, new supplements without asking), and a clear 'when to call us' section. Warm but direct tone."*

**You should see:** the Patient Education chip on your message, and a draft that opens with what the medicine does in plain words — no "anticoagulant" without an immediate translation.
{{< /step >}}

{{< step num="2" title="Review it like a patient, not a clinician" >}}
Read the draft out loud. Every sentence should survive the kitchen-table test: could your patient read this to a family member without either of them stopping to ask what a word means?

**You should see:** short sentences, jargon defined inline the moment it appears ("INR — a blood test that shows how thin your blood is"), the vitamin K guidance framed as *keep it steady* rather than a forbidden-foods list, and a **"When to call your clinician"** section — the Patient Education Specialist puts one on every handout, with the 911-level symptoms clearly separated from the call-the-office ones.
{{< /step >}}

{{< step num="3" title="Simplify further, or translate" >}}
This Specialist is also Lumen's medical translator — the same plain-language engine that turns a dense after-visit summary into something a family can read now lives here. Reading level and language are both one sentence away:

{{< chat-demo title="Dialing in the audience" >}}
{{< user >}}
His daughter helps manage his medications and reads Spanish more comfortably. Make a Spanish version too, and bring both down to a 6th-grade level.
{{< /user >}}
{{< lumen >}}
Done — two versions, same structure:

- **English, 6th-grade:** shorter sentences, "blood thinner" throughout, the food section now three simple rules with examples.
- **Español, 6th-grade:** fully translated — not word-for-word, but the same warm, direct instructions a Spanish-speaking family would write.

Both keep the same red-flag list: call 911 for signs of stroke or bleeding that won't stop; call the office for new bruising, dark stools, or a missed dose.
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** both versions as documents in the chat, structurally identical — so you can hand them out side by side and know they say the same thing.
{{< /step >}}

{{< step num="4" title="Add your clinic's specifics" >}}
Generic handouts get recycled; specific ones get taped to the fridge. Fill in the local details:

> *"Add a line that INR checks are every week for the first month at our anticoagulation clinic, and leave a blank line for the clinic phone number. Add a 'bring this list to every visit' note at the bottom."*

**You should see:** the handout update in place with your clinic's rhythm built in — and blanks where front-desk staff will write the specifics.
{{< /step >}}

{{< step num="5" title="Export to PDF and print" >}}
> *"Export the English and Spanish versions as PDFs for printing."*

**You should see:** download cards for print-ready PDFs — one page each, clean margins, headings a tired reader can navigate. See [Creating documents](/tools/document-generation/) for other formats, including Word if your clinic edits handouts before printing.
{{< /step >}}

</div>

{{< tip title="Reuse it forever" >}}
If this handout becomes your clinic's standard, teach it to Lumen once: the [Skill Creator](/skills-and-specialists/skills/) turns your finished template into a custom Skill, so next month *"warfarin handout for a new start"* produces your version — structure, tone, clinic details and all.
{{< /tip >}}

## Troubleshooting

- **It still reads too clinical.** Name the test, not just the level: *"My patient reads at about a 5th-grade level — shorter sentences, no word over three syllables unless you define it."* Reading level is a dial, and you can keep turning it.
- **The handout is creeping past one page.** Scope, not font size: *"Cut to the five things he must know this week; move everything else to a 'questions for your next visit' line."*
- **A dietary detail looks off.** Ask for the source: *"What's the basis for the leafy-greens guidance?"* Lumen grounds its claims and will show you — and if something is clinic-specific lore rather than evidence, you'll see that too.

## Next steps

- **Where handouts usually start:** [Write a discharge summary in 5 minutes](/guides/discharge-summary/) — then turn it into the patient's version.
- **Why grounding matters for patient-facing text:** [Hallucinations and grounding](/learn/hallucinations-and-grounding/) — how Lumen keeps plain language from becoming wrong language.
- **The full Skills directory:** [All 49 built-in Skills](/skills-and-specialists/skills/) — Patient Handout, Patient Letter, and the Skill Creator that makes your own.
