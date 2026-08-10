---
title: "AI Medication Review & Reconciliation"
description: "Lumen's AI medication reconciliation assistant: interaction screening, renal dosing, duplicate therapy, and a structured deprescribing review in one pass."
lead: "Type @Medication Review and put a pharmacist's eye on the whole list — interactions, renal dosing, duplicates, and deprescribing candidates, all in one structured pass."
weight: 2
keywords: ["AI medication reconciliation", "medication review AI", "drug interaction checker AI", "deprescribing AI", "polypharmacy review"]
---

Every transition of care scrambles the med list. The discharge summary says one thing, the ambulatory record says another, the patient's bag of bottles says a third. Somewhere in the disagreement is a duplicated anticoagulant, a dose that ignores the new creatinine, or a drug whose indication left the building two admissions ago.

The Medication Review Specialist works the list the way a clinical pharmacist would — systematically, drug by drug, with a lookup behind every claim — and hands you one structured review instead of fourteen separate questions.

## Review or reconcile? It does both — know which you're asking for

The two words get used interchangeably, but they're different jobs:

- **Reconciliation** answers *"what is this patient actually taking?"* — merging sources, resolving conflicts, and producing one true list with actives separated from discontinued. Give the Specialist two or more sources (a discharge summary plus a clinic list, say) and this is where it starts.
- **Review** answers *"should they be taking it?"* — every drug checked for interactions, dose appropriateness, therapeutic overlap, and whether it still has an indication.

Ask for either by name, or just paste the list — a full pass covers both, in that order, because a review of the wrong list is worthless.

## What a structured review contains

Each pass returns the same skeleton, so you always know where to look:

1. **Actives vs. discontinued** — the reconciled list, with source conflicts called out rather than silently resolved.
2. **An indication for every drug** — and an explicit flag on any drug it can't tie to a documented indication.
3. **Interactions** — screened against FDA prescribing information, with severity, mechanism, and what to do about it.
4. **Renal and hepatic dose adjustments** — flagged where the labeled dosing changes with organ function.
5. **Duplicates and therapeutic overlap** — two drugs from the same class, or two drugs doing the same job by different names (the brand/generic trap RxNorm resolves cleanly).
6. **A deprescribing candidate list with rationale** — citing Beers or STOPP criteria where they apply, so the recommendation arrives with its reasoning attached.

## A worked example

{{< chat-demo title="Chat" >}}
{{< user >}}@Medication Review — 85-year-old, 14 medications. Reconcile this list against the attached discharge summary and flag what I should consider stopping. SCr is 1.9.{{< /user >}}
{{< lumen >}}Reconciled: **11 active, 2 discontinued at discharge, 1 conflict** — the clinic list shows metoprolol tartrate 50 mg BID but the discharge summary switched to succinate 100 mg daily. Confirm which survived.

**Interactions (2 flagged):** amiodarone + warfarin — major; expect INR rise, recheck within the week. Omeprazole + clopidogrel — consider pantoprazole.

**Renal dosing at CrCl ~28 mL/min:** rivaroxaban and gabapentin both exceed labeled dosing for this range — adjustment recommended for each.

**Therapeutic overlap:** pantoprazole *and* famotidine are both active — pick one.

**Deprescribing candidates (4), with rationale:** long-term zolpidem (Beers — falls risk at 85), the PPI without a documented indication past 8 weeks, glimepiride (Beers — hypoglycemia; consider alternatives), and docusate (evidence of benefit is poor).

Want this as a one-page PDF for the chart or the family meeting?{{< /lumen >}}
{{< /chat-demo >}}

Fictional patient, real shape: every flag names its source — an interaction database, a renal dosing label, a Beers criterion — so you can verify before you act.

{{< callout type="warning" >}}
**Paste the drug list, not the patient.** Names, MRNs, and dates of birth add nothing to a medication review — leave them out. Lumen is built with HIPAA safeguards — encryption at rest and audit logging — and Pro plans add [de-identification tools](/tools/privacy/) that scrub text automatically.
{{< /callout >}}

## When it saves the most time

- **Hospital discharge** — the classic reconciliation moment, when the inpatient team's changes meet the outpatient list and nobody has 40 minutes to merge them.
- **Post-discharge clinic visits** — reconcile before the visit, walk in knowing the three things worth discussing.
- **Any list past ten drugs** — polypharmacy review is exactly the systematic, cross-referencing work that AI with real lookups does well and tired humans do badly at 4 pm.
- **A new renal or hepatic result** — "the creatinine doubled; which of these doses are now wrong?" is a one-message question.

## What's under the hood

Picking `@Medication Review` pre-loads the [Medication Reconciliation](/skills-and-specialists/skills/#medication-reconciliation) and [Drug Safety Review](/skills-and-specialists/skills/#drug-safety-review) skills, and points Lumen at the pharmacy toolset: [RxNorm drug lookup, the drug interaction checker, FDA drug labels](/tools/medications/), and [lab reference ranges](/tools/coding-labs/) for interpreting the renal function that drives dosing.

Every interaction, dose adjustment, and label claim comes from a live lookup — not from the model's memory.

## The honest limits

This is decision support, not a prescriber. The Specialist flags and recommends; **starting, stopping, and dose changes are yours**, and your institution's pharmacy remains the authority on formulary and protocol questions. Interaction databases also can't see what a database can't see — supplements the patient never mentioned, or adherence that differs from the list.

## Next steps

- See every medication tool it draws on: [Medication questions](/tools/medications/)
- Turn the review into chart-ready output: [Guides](/guides/)
- Prefer a single output instead of the whole job? Use the [Medication Reconciliation skill](/skills-and-specialists/skills/#medication-reconciliation) directly.

{{< cta heading="Put a second eye on your next med list" href="/getting-started/" label="Get started free" variant="subtle" >}}
Type @ in any chat, pick Medication Review, and paste the list — the structured review comes back in one pass.
{{< /cta >}}
