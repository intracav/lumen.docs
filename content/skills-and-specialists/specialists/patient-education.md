---
title: "AI Patient Education Assistant"
description: "Create AI patient education materials with Lumen — plain-language handouts, discharge instructions, and letters at the reading level your patient needs."
lead: "Type @Patient Education and turn what you just explained in clinic into something the patient can actually take home, reread, and follow."
weight: 3
keywords: ["AI patient education materials", "patient handout generator", "plain language medical AI", "health literacy AI", "discharge instructions generator"]
---

You explained it perfectly in the room. Then the patient got home, the details blurred, and the first thing they found online was either terrifying or wrong. The fix is old and proven — written materials at a reading level the patient can manage — but writing them takes time nobody budgeted for.

The Patient Education Specialist produces that material on demand: handouts, discharge instructions, and letters written in plain language, at the reading level you choose, ready to print before the patient leaves.

## Plain language by default, reading level on demand

Out of the box, the Specialist writes at a **6th-grade reading level** with no medical jargon — and when a technical term is unavoidable, it defines it inline, in the same sentence. That default matches health-literacy guidance: most adults read comfortably several grades below their last year of schooling, and a scared patient reads lower still.

But the default is just a starting point. Reading level is a dial you control in plain English:

- *"Rewrite this for a patient with a nursing background."*
- *"Simplify further — 4th grade, short sentences."*
- *"Make a version for the patient and a more detailed one for their daughter, who's a pharmacist."*

The same clinical content, tuned per reader — that's the difference between a handout that gets read and one that lines the recycling bin.

## Translation

Ask for the handout in another language and the Specialist produces it — same structure, same warnings, same "when to call" section. Generate the English version first, verify the clinical content, then request the translation so you know exactly what the translated version says. For high-stakes consent conversations, your institution's interpreter services remain the standard; AI translation is best for take-home reinforcement of what an interpreter already covered.

## Formats it produces

- **Handouts** — one-page explainers for a new diagnosis, a new medication, or a procedure: what it is, what to expect, what to do, warning signs. Every handout ends with a **"When to call your clinician"** section, always.
- **Discharge instructions** — what happened, what changed in the med list, what to do at home, which appointments come next, and the red flags that mean *come back*.
- **Patient letters** — results letters and follow-up notes in a warm, plain voice, via the [Patient Letter skill](/skills-and-specialists/skills/#patient-letter).

Everything exports as a print-ready PDF or a clean web page — formatted for the waiting-room printer, not just the screen.

## A worked example

{{< chat-demo title="Chat" >}}
{{< user >}}@Patient Education — one-page handout for a patient starting metformin: what it does, common side effects, and warning signs to call about.{{< /user >}}
{{< lumen >}}Here's the one-pager, written at a 6th-grade level:

**Starting Metformin: What You Need to Know**

**What it does** — Metformin helps lower your blood sugar. It helps your body use insulin (the hormone that controls blood sugar) the way it should.

**How to take it** — Take it with food. This helps prevent stomach upset, which is the most common side effect in the first few weeks — and it usually gets better on its own.

**Common side effects** — Loose stools, mild nausea, a metal taste. Most fade within a few weeks.

**When to call your clinician** — Call right away if you have: severe stomach pain with vomiting, trouble breathing, unusual muscle pain, or you feel much weaker or more tired than normal.

Exported as a print-ready PDF. Want a Spanish version, or a large-print version for low vision?{{< /lumen >}}
{{< /chat-demo >}}

## When it saves the most time

- **New diagnoses** — the CHF, diabetes, or hypertension conversation that deserves a take-home version, personalized to what you actually discussed.
- **New medications** — a "what to expect this month" sheet beats the pharmacy's fine-print leaflet every time.
- **Discharge** — instructions the patient can follow at home are the cheapest readmission prevention there is.
- **The question you answer ten times a week** — write the handout once, save it, reuse it with each patient's specifics.

## What's under the hood

Picking `@Patient Education` pre-loads the [Patient Handout skill](/skills-and-specialists/skills/#patient-handout) and points Lumen at [PubMed](/tools/literature-research/) for accuracy plus [PDF and web-page creation](/tools/document-generation/) for print-ready output. It deliberately runs at low autonomy — this is craft work, shaping words for one reader, not a research expedition — so it stays close to what you asked for instead of wandering.

## The honest limits

The Specialist writes teaching material; **it doesn't practice medicine.** The clinical content of every handout is yours to verify before it reaches a patient — especially doses, thresholds, and warning signs, where your institution's protocols govern. And a handout supplements the conversation; it never replaces it.

{{< callout type="warning" >}}
**Keep identifiers out of the prompt.** A great handout needs the diagnosis and the plan — never the patient's name or record number. If you're personalizing from chart text, strip identifiers first; Pro plans add [de-identification tools](/tools/privacy/) that do it automatically.
{{< /callout >}}

## Next steps

- Build one start to finish: [Create a patient handout](/guides/patient-handout/)
- Browse all the output Skills it can pull in: [Skills library](/skills-and-specialists/skills/)
- See the document formats available: [Document generation](/tools/document-generation/)

{{< cta heading="Send your next patient home with something they can read" href="/getting-started/" label="Get started free" variant="subtle" >}}
Type @ in any chat, pick Patient Education, and describe what the patient needs to understand.
{{< /cta >}}
