---
title: "The 11 Lumen Specialists (@ menu)"
description: "Meet Lumen's 11 AI clinical specialists — expert modes for differential diagnosis, literature review, prior auth, discharge summaries, and more."
lead: "Type @ in any chat and hand the whole job to an expert configuration — one that already knows which tools to reach for and what a finished result looks like."
weight: 1
keywords: ["AI clinical specialist assistant", "clinical AI agent", "medical AI assistant modes"]
---

## What a Specialist is

A Specialist is a curated expert configuration for a kind of clinical work. Picking one doesn't switch you to a different app — it tunes the chat you're already in: which skills come pre-loaded, which tools Lumen prefers, how many steps it's willing to take on its own, and what "done" means.

By default a Specialist joins for that one message — like curbsiding a colleague. If you want it to drive the rest of the conversation, tap **Stay** on its chip. Either way, everything stays a normal chat you can revisit, continue, or fork.

{{< callout type="warning" >}}
**A note on patient data.** Several sample prompts below include clinical detail — all of it fictional. When you work with real cases, remove direct identifiers first. Lumen is built with HIPAA safeguards — encryption at rest and audit logging — but de-identification starts with you.
{{< /callout >}}

## Clinical Reasoning

The diagnostician. Built for differential diagnosis, lab interpretation, and evidence-based treatment reasoning — it works the case systematically, surfaces the leading differentials with rough probabilities, and always calls out the can't-miss diagnoses even when they're unlikely.

Reach for it when a presentation doesn't add up, when you want a structured workup plan, or when you'd like a second set of eyes on your reasoning before committee or attending review.

**Sample prompt:** *"72-year-old with progressive dyspnea over 3 weeks, BNP 1,180, echo shows preserved EF. Walk me through the differential and the workup that discriminates between them."*

**Comes loaded with:** the [Differential Diagnosis Builder and Lab Result Interpreter skills](/skills-and-specialists/skills/), and favors PubMed, the FDA drug database, drug interaction checking, lab reference ranges, ICD-10 lookup, and ClinicalTrials.gov.

## Vascular Access

The line planner. Built for vessel selection, catheter route planning, and tip-position assessment for PICC, midline, and CVAD placement. It reasons over a cited anatomy graph — never over an image — so every depth, diameter, and tolerance it quotes arrives with a citation key, and it tells you explicitly when a number is *not* sourced rather than filling the gap from memory.

Reach for it when planning an insertion, comparing access sites, or making sense of a malpositioned tip — it names the point where the catheter diverged, not just where it ended up.

**Sample prompt:** *"Chest film shows the PICC tip in the right internal jugular after a left basilic insertion — explain what happened and what to do next."*

**Comes loaded with:** the [Vascular Access Planning skill](/skills-and-specialists/skills/), and favors the anatomy graph, clinical guidelines, clinical checklists, and PubMed.

## Clinical Research

The evidence synthesizer. Built for literature synthesis, evidence grading, and PICO-driven research, it runs at high autonomy — up to 25 tool steps — because a real evidence review means searching broadly across PubMed, ClinicalTrials.gov, and regulatory sources, then grading what it finds before it writes a word.

Reach for it when you need a defensible answer, not a quick one: committee prep, protocol justification, a genuinely open clinical question.

**Sample prompt:** *"Synthesize the current evidence on chlorhexidine-impregnated dressings for central-line infection prevention. Grade the evidence and give me inline citations I can verify."*

**Comes loaded with:** the [Literature Review, PICO Builder, and Evidence Grader skills](/skills-and-specialists/skills/), and favors PubMed, ClinicalTrials.gov, FDA sources, and web research.

## Trial Matcher

The enrollment scout. Built to treat a patient profile as a set of inclusion and exclusion criteria, search ClinicalTrials.gov, score each candidate trial against those criteria, and return a ranked shortlist — with site contacts and the specific eligibility gaps spelled out.

Reach for it when a patient has exhausted standard options, or when a research coordinator needs a screening shortlist rather than 400 raw search results.

**Sample prompt:** *"Find active trials for a 58-year-old woman with metastatic ER+ HER2− breast cancer who has progressed on two lines of endocrine therapy."*

**Comes loaded with:** the [Clinical Trial Matcher skill](/skills-and-specialists/skills/), and favors ClinicalTrials.gov, PubMed, the NPI provider directory, and ICD-10 lookup.

## Document Analysis

The careful reader. Built for deep analysis of attached PDFs, notes, and clinical documents, it grounds every claim in the source — quoting sparingly, with page or section references — and when two documents disagree, it surfaces the conflict instead of silently picking a side.

Reach for it when the answer is somewhere in a 60-page admission packet and you need it extracted, summarized, or cross-checked.

**Sample prompt:** *"Here's the discharge summary and the outside-hospital records. Summarize the hospitalization and flag anything that needs PCP follow-up."*

**Comes loaded with:** no pinned skill — it adapts to whatever you attach — and favors search across your documents, PubMed, and document creation for polished outputs.

## Patient Education

The plain-language translator. Built for explanations and printable handouts at a 6th-grade reading level, with no jargon unless it's defined inline, and a "When to call your clinician" section on every handout. It runs at low autonomy — this is craft work, not a research expedition.

Reach for it whenever a patient (or family member) needs to actually understand what you just told them.

**Sample prompt:** *"Make a one-page handout for a patient starting metformin: what it does, common side effects, and warning signs to call about."*

**Comes loaded with:** the [Patient Handout skill](/skills-and-specialists/skills/), and favors PubMed plus PDF and web-page creation for print-ready output.

## Medication Review

The pharmacist's eye. Built for reconciliation, interaction screening, and deprescribing review, it produces a structured result: actives vs. discontinued, an indication for every drug, interactions, renal and hepatic dose adjustments, and an explicit deprescribing candidate list with rationale (Beers/STOPP where they apply).

Reach for it at transitions of care, after a hospitalization scrambles the med list, or any time the count crosses double digits.

**Sample prompt:** *"85-year-old on 14 medications — reconcile this list against the attached discharge summary, flag conflicts, and propose a deprescribing plan with rationale."*

**Comes loaded with:** the [Medication Reconciliation and Drug Safety Review skills](/skills-and-specialists/skills/), and favors RxNorm, the drug interaction checker, FDA drug data, and lab reference ranges.

## Care Transitions

The handoff writer. Built for discharge summaries, I-PASS handoffs, and post-acute follow-up plans — documentation that survives the handoff: explicit pending workup, med changes *with reasons*, follow-up appointments with time windows, red-flag return criteria, and a one-line illness summary at the top.

Reach for it at end of shift, at discharge, or before a service transfer, when the next clinician's picture of the patient is only as good as what you write.

**Sample prompt:** *"Build an I-PASS handoff for these three patients before night shift — the day's events are in the attached notes."*

**Comes loaded with:** the [Discharge Summary and Clinical Handoff skills](/skills-and-specialists/skills/), and favors ICD-10 lookup, RxNorm, and PDF/web-page creation.

## Prior Authorization

The payer whisperer. Built for prior-auth requests, denial appeals, and peer-to-peer prep, it assembles submission-ready packages: the diagnosis with its ICD-10 code, the requested service with CPT/HCPCS, a medical-necessity rationale tied to the payer or CMS policy, and the supporting evidence. It never invents codes or coverage language — it looks them up, or flags them clearly for you to confirm before submission.

Reach for it the moment a denial lands, or before it does — when you know a request will need a paper trail.

**Sample prompt:** *"Prepare a prior auth for a lumbar spine MRI — L5-S1 radiculopathy, six weeks of documented failed conservative care."*

**Comes loaded with:** the [Prior Authorization, Insurance Appeal, and Peer-to-Peer Prep skills](/skills-and-specialists/skills/), and favors ICD-10, CPT, and HCPCS lookup, CMS coverage policies, PubMed, the NPI directory, and document creation.

## Calculator Builder

The value-analysis co-author. Built for sales and device teams who need a cited cost or value calculator: every coefficient in the formula must be bound to a citation, and it never invents numbers — if a source isn't on hand, it asks or searches for one. The finished calculator publishes as a shareable, tamper-proof tool.

Reach for it before a value-analysis committee meeting, when "trust me, it saves money" needs to become arithmetic with references.

**Sample prompt:** *"Build a cost calculator comparing our securement device against standard adhesive dressings — annual savings per 100 lines placed, every input cited."*

**Comes loaded with:** the [Calculator Builder skill](/skills-and-specialists/skills/), and favors PubMed, FDA sources, and web research. (It deliberately skips trial search — this is economics, not enrollment.)

## Staff Scheduler

The constraint solver's interpreter. Built for staff schedules, coverage planning, and swap arbitration, it works differently from every other Specialist: *it interprets, the solver schedules.* It reads every attached source in full, resolves who's who across rules docs and availability emails, extracts a formal schedule spec with a verbatim quote behind every availability fact — then a deterministic solver produces and verifies every assignment. It never hand-writes a schedule cell. It runs at high autonomy, because reading, mapping, solving, verifying, and repairing takes real steps.

Reach for it when the call schedule has become a monthly puzzle of leave requests, duty-hour rules, and competing constraints — and when an infeasible request deserves an honest "here's the binding constraint" instead of a quietly broken grid.

**Sample prompt:** *"Here are the rules doc and the availability emails — build the June fellows' call schedule, respecting everyone's leave."*

**Comes loaded with:** the [Shift Scheduler skill](/skills-and-specialists/skills/), and favors full document reading, the scheduling solver, Excel export, document search, and email.

## Choosing between them

If your task is *produce a specific document*, you may only need a [Skill](/skills-and-specialists/skills/). If your task is *do the whole job* — gather, check, reason, then produce — start with the Specialist, and let it pull in the Skills it needs. For what happens under the hood when a Specialist works through a multi-step task, see [agent mode](/skills-and-specialists/agent-mode/).

{{< cta heading="Try a Specialist on real work" href="/getting-started/" label="Get started with Lumen" variant="subtle" >}}
Type @ in any chat and pick the expert for the job — the first result usually sells itself.
{{< /cta >}}

Four Specialists get full deep-dive pages below — what they do end to end, worked examples, and when each one saves you the most time.
