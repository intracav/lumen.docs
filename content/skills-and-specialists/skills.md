---
title: "The Skills Directory: 49 Built-In Skills (/ menu)"
description: "All 49 built-in Lumen skills — AI SOAP note generator, prior authorization letters, discharge summaries, patient handouts, literature reviews, and more."
lead: "A Skill is a precise procedure for a specific output. Type / to pick one, or just ask — Lumen recognizes the request and applies the right Skill automatically."
weight: 2
keywords: ["AI SOAP note generator", "AI prior authorization letter", "AI discharge summary", "AI patient handout", "medical AI documentation"]
---

## How Skills work

A Skill teaches Lumen the exact standard for one kind of output: the structure a SOAP note follows, the argument a prior-auth reviewer needs to see, the reading level a patient handout must hit. Type **`/`** in any chat to browse and pick one — or don't: Skills auto-trigger when your message matches their phrasing, so *"write a discharge summary"* activates the Discharge Summary skill without any menu.

Skills compose with [Specialists](/skills-and-specialists/specialists/): `@Prior Authorization` sets the expert approach, `/insurance-appeal` pins the output format. And the directory isn't closed — the **Skill Creator** (last entry below) turns your own workflow into a custom Skill Lumen follows every time.

All 49 built-in Skills, grouped the way Lumen groups them:

{{< callout type="warning" >}}
Sample prompts below use fictional clinical detail. With real cases, strip direct identifiers before pasting — de-identification starts with you.
{{< /callout >}}

## Clinical documentation

### SOAP Note
Structures a clinical encounter into Subjective, Objective, Assessment, and Plan — with ICD-10 codes attached to each working diagnosis and "not documented" flagged rather than invented.
*"Write a SOAP note for this urgent-care visit: 34-year-old with 3 days of right ear pain, exam and vitals below."*

### History & Physical
Comprehensive admission H&P in standard medical format, with the full PMH/FH/SH depth a SOAP note skips.
*"Write an H&P for this admission — history and exam findings attached."*

### Discharge Summary
Complete hospital discharge documentation with medication reconciliation, pending results, and follow-up plans built in.
*"Draft a discharge summary for this 5-day CHF admission."*

### Progress Note
Daily inpatient progress notes in APSO or DAP format — tight enough for rounds, complete enough for the chart.
*"Write today's progress note: afebrile overnight, weaned to 2L, diuresis on track."*

### Procedure Note
Operative and bedside procedure documentation, with CPT and ICD-10 lookups for accurate coding.
*"Document this ultrasound-guided paracentesis — 4.2L removed, no complications."*

### Consultation Note
Specialist consultation documentation with a clear question, focused assessment, and actionable recommendations.
*"Write a cardiology consult note answering the pre-op risk question for this patient."*

## Clinical decision support

### Vascular Access Planning
Vessel selection, catheter route planning, and tip-position assessment over a cited anatomy graph — every number sourced, every gap named.
*"Plan a right basilic PICC to the cavoatrial junction and show me the path."*

### Medication Reconciliation
Systematic med review: actives vs. discontinued, interactions, renal dosing, and safety flags.
*"Reconcile these two medication lists and flag every conflict."*

### Lab Result Interpreter
Systematic lab analysis with clinical correlation — what's abnormal, what pattern it forms, what to check next.
*"Interpret this CMP and CBC for a patient on chemotherapy."*

### ABG Analysis
Stepwise arterial blood gas interpretation: primary disorder, compensation, gaps, and the clinical story they tell.
*"Interpret this ABG: pH 7.28, pCO₂ 30, HCO₃ 14, on room air."*

### ECG Interpreter
Systematic electrocardiogram reading — rate, rhythm, axis, intervals, morphology, and the findings that matter.
*"Read this ECG: what explains the new wide-complex rhythm?"*

### Imaging Review
Systematic interpretation of radiology images and reports, with the clinical significance spelled out.
*"Review this chest CT report and tell me what needs follow-up."*

### Dose Calculator
Weight-based, renal-adjusted, and age-appropriate medication dosing with the arithmetic shown.
*"Calculate vancomycin dosing for a 92 kg patient with CrCl 38."*

### Differential Diagnosis Builder
Ranked differential with likelihood, can't-miss diagnoses flagged, and the workup that discriminates between candidates.
*"Build a differential for new-onset confusion in an 80-year-old post-op patient."*

### Antimicrobial Stewardship
Evidence-based antibiotic selection with allergy cross-reactivity, renal dosing, and interaction checks built in.
*"Empiric coverage for sepsis of unknown source in a patient with a documented penicillin allergy?"*

### Drug Safety Review
FDA safety surveillance for a drug: adverse-event signals, recalls, and boxed warnings in one structured review.
*"Run a safety review on apixaban — any recalls or new warnings?"*

### Patient Record Review
Structured review of connected FHIR patient records — conditions, medications, labs, and encounters, summarized.
*"Pull up this patient's record and summarize the last six months."*

### IV Drip Titration
Continuous-infusion math: weight-based and concentration-based rates for pressors, sedation, and anticoagulation drips.
*"Set up a norepinephrine drip for a 70 kg patient — starting dose and titration steps."*

### ED Triage
Emergency triage with ESI scoring and disposition reasoning from vitals and presentation.
*"Triage this patient: 62-year-old, chest pressure, HR 118, BP 88/60."*

### Drug Label Research
Full FDA label lookup — indications, dosing, contraindications, and pharmacology, straight from the prescribing information.
*"What are the approved indications and renal dosing for duloxetine?"*

## Administrative

### Prior Authorization
A complete PA request package: ICD-10 and CPT/HCPCS codes, a medical-necessity argument, cited evidence, and CMS policy references.
*"Prepare a prior auth for a cardiac MRI — suspected infiltrative disease, echo inconclusive."*

### Insurance Appeal
Denial appeal letters with evidence, applicable statutes, and an escalation strategy — built to be answered, not filed.
*"Write an appeal for this denied biologic — moderate-to-severe Crohn's, failed two conventional agents."*

### Peer-to-Peer Prep
Talking points and evidence for the peer-to-peer call: the criteria, the counterarguments, the citations at your fingertips.
*"Prep me for tomorrow's P2P on the denied spine MRI."*

### Referral Letter
Professional specialist referrals with the clinical context the consultant actually needs.
*"Draft a referral to endocrinology for this patient with refractory hypercalcemia."*

### CDI Query
Compliant clinical-documentation-improvement queries that ask the question without leading the answer.
*"Write a CDI query for possible acute-on-chronic respiratory failure in this chart."*

### Shift Scheduler
Constraint-solved staff scheduling: reads your rules and availability sources in full, extracts a spec, solves deterministically, and verifies every rule before delivering the spreadsheet.
*"Here are the rules doc and availability emails — build the June call schedule."*

## Education

### Patient Handout
Plain-language patient education at a 6th–8th-grade reading level, with actionable instructions and a "when to call" section.
*"Create a handout for a patient starting insulin — how to inject, store, and spot low blood sugar."*

### Study Guide
Clinical education material for students and residents — organized for retention, aimed at boards.
*"Make me a study guide on acid-base disorders for Step 2."*

### Case Presentation
Structured case formatting for grand rounds, morning report, and conference — the arc, not just the facts.
*"Format this case for morning report: delayed diagnosis of adrenal insufficiency."*

### Journal Club
Critical appraisal of a paper: design, bias, statistics, and whether the conclusion actually follows.
*"Prepare a journal club appraisal of this RCT on early mobilization in the ICU."*

### Clinical Quiz Builder
Interactive clinical quizzes with explanations and evidence citations behind every answer.
*"Build a 10-question quiz on DKA management for my interns."*

### Scientific Animation
Mathematical and scientific animations for medical education — pharmacokinetic curves, physiologic relationships, rendered as video.
*"Animate the Starling curve and what happens in decompensated heart failure."*

### Clinical Video Explainer
Branded clinical explainer videos for patients and teams, generated from your outline.
*"Make a short explainer video on what atrial fibrillation is and why anticoagulation matters."*

## Research

### Literature Review
Systematic search and evidence synthesis: multiple query strategies, quality assessment, GRADE-graded conclusions, citations throughout.
*"What does the evidence say about time-restricted eating for NAFLD? Full lit review."*

### PICO Builder
Turns a fuzzy clinical question into a structured Population–Intervention–Comparison–Outcome question worth searching.
*"Help me frame a PICO question about music therapy for post-op pain."*

### Evidence Grader
Grades evidence quality using the GRADE framework — and tells you why it lands where it does.
*"Grade the evidence behind this guideline recommendation."*

### Clinical Trial Matcher
Searches ClinicalTrials.gov against a patient's condition and eligibility profile, returning scored matches with contacts.
*"Find recruiting trials for refractory focal epilepsy in adults."*

## Communication

### Patient Letter
Professional patient correspondence — results letters, follow-up instructions — clear, kind, and complete.
*"Write a letter explaining these normal biopsy results and the surveillance plan."*

### Clinical Handoff
Structured handoffs in I-PASS or SBAR format that survive the shift change.
*"Turn these three patient summaries into I-PASS handoffs for night float."*

## Quality & safety

### Root Cause Analysis
Systematic incident analysis using healthcare RCA methodology — contributing factors, not scapegoats.
*"Walk me through an RCA for this mislabeled specimen event."*

### Quality Measure Report
Clinical quality metrics reporting and improvement planning — HEDIS, MIPS, and local QI measures.
*"Draft a quality report on our 30-day readmission performance with an improvement plan."*

## Deliverables

### Branded Clinical Document
Turns any result in the chat into a branded PDF or Word document, ready to print or send.
*"Export this medication review as a PDF."*

### Branded Clinical Presentation
Polished, branded PowerPoint decks for grand rounds, conferences, and teaching sessions.
*"Build grand rounds slides from this case and the attached literature."*

### Interactive Dashboard
Branded interactive calculators, charts, and scoring tools as live HTML — a CHA₂DS₂-VASc calculator, a metrics dashboard.
*"Build me a CHA₂DS₂-VASc calculator I can use at the bedside."*

### Clinical Spreadsheet
Branded Excel workbooks for schedules, quality reports, tracking sheets, and data analysis.
*"Build a tracking workbook for our CLABSI audit data."*

## Publisher

### Calculator Builder
Co-authors a cited cost or value calculator for a medical device — every coefficient bound to a citation — and publishes it as a tamper-proof, shareable tool.
*"Build a savings calculator for our securement device vs. standard dressings, every input cited."*

## Meta

### Skill Creator
The Skill that makes Skills: describe your workflow or paste your template, and Lumen turns it into a custom Skill it follows every time after.
*"Teach Lumen how our practice writes operative notes — here's our template."*

## Training

### Oracle Health Training
A guided, hands-on trainer for Oracle Health (Cerner Millennium) and SMART on FHIR — it explains concepts, walks clinical workflows, and demos live reads against your connected EHR tenant.
*"Walk me through finding a patient's recent labs in Cerner."*

### Epic Training
The same guided trainer for Epic — concepts, workflows, and live demonstration reads against a connected Epic tenant or Epic's sandbox patients.
*"Train me on reviewing active medications in Epic."*

## Make your own

If a Skill you need isn't here, that's what the Skill Creator is for — your protocols, your templates, your standard, saved once and applied every time. And for work that needs several Skills chained together with tools in between, hand it to a [Specialist](/skills-and-specialists/specialists/) or run it in [agent mode](/skills-and-specialists/agent-mode/).

{{< cta heading="Try a Skill on your next note" href="/getting-started/" label="Get started with Lumen" variant="subtle" >}}
Type / in any chat — or just ask for the document you need.
{{< /cta >}}
