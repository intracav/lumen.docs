---
title: "Run a Medication Review & Reconciliation"
description: "Turn three conflicting med lists into one reconciled list — duplicates merged, interactions checked, renal doses flagged, every change explained."
weight: 20
audience: clinician
time: "~10 minutes"
keywords: ["AI medication reconciliation", "medication review AI", "drug interaction check AI", "polypharmacy review"]
---

## What you'll make

One reconciled medication list from several sources that disagree — duplicates and therapeutic overlaps merged, drug–drug interactions checked against the FDA database, renal dose flags computed from the patient's actual kidney function, and a written rationale next to every change. The part that normally means an hour with three printouts and a highlighter, Lumen does in minutes; you spend your time on the judgment calls it surfaces.

We'll walk a classic transitions-of-care case: a **78-year-old man admitted from a skilled nursing facility with a 14-drug list assembled from three sources** — the SNF medication administration record, a six-week-old hospital discharge summary, and the pharmacy fill history. Every clinical detail below is fictional.

## Before you start

- **Any plan works.** Medication review runs on every Lumen plan; see [Plans](/plans/) if you're bumping into message limits.
- **Gather the source lists.** Paste them as text or attach them as files — photos of a MAR, a discharge PDF, a pharmacy printout all work. Label each source; conflicts between sources are exactly what reconciliation is about.
- **Have renal function handy.** A recent creatinine (plus age, sex, and weight) lets Lumen compute creatinine clearance and check every drug against FDA renal-dosing guidance instead of guessing.

{{< callout type="warning" >}}
**Before you paste real patient data**, strip direct identifiers — name, MRN, date of birth, facility names. The drug names, doses, and labs are what reconciliation needs; the identifiers are what it doesn't. Lumen also has a [de-identification tool](/tools/privacy/) that can scrub text for you.
{{< /callout >}}

## Reconcile the list

<div class="steps-container">

{{< step num="1" title="Bring in the Medication Review Specialist with all three lists" >}}
Type **@** in any chat and pick **[Medication Review](/skills-and-specialists/specialists/)**. Then hand it the whole mess, sources labeled:

```text
@Medication Review — 78-year-old man admitted from a skilled nursing
facility. Three medication lists that don't agree — reconcile them into
one list. Weight 72 kg, SCr 1.8. Flag anything that needs renal
adjustment.

SNF MAR: metoprolol tartrate 25 mg BID, furosemide 40 mg daily,
lisinopril 10 mg daily, atorvastatin 40 mg nightly, apixaban 5 mg BID,
omeprazole 20 mg daily, sertraline 50 mg daily, acetaminophen 650 mg PRN

Discharge summary (6 weeks ago): metoprolol succinate 50 mg daily,
torsemide 20 mg daily, lisinopril 10 mg daily, atorvastatin 40 mg
nightly, apixaban 5 mg BID, pantoprazole 40 mg daily

Pharmacy fills (last 90 days): metoprolol tartrate, furosemide,
torsemide, lisinopril, atorvastatin, apixaban, omeprazole, sertraline,
glipizide 10 mg BID, ibuprofen 400 mg (OTC, per family)
```

**You should see:** the Medication Review chip appear on your message, then a short plan — normalize names, deduplicate, screen interactions, check renal dosing, draft the reconciled list — before Lumen starts working through it.
{{< /step >}}

{{< step num="2" title="Watch the checks run — nothing comes from memory" >}}
Every drug name gets normalized through the [RxNorm lookup](/tools/medications/), so *metoprolol tartrate* and *metoprolol succinate* register as a formulation conflict rather than two unrelated drugs. Interactions run against the FDA database with the [drug interactions tool](/tools/medications/), and the [renal dose adjustment tool](/tools/medications/) computes creatinine clearance and checks each drug against it. Each step appears live in the chat.

{{< chat-demo title="Medication Review at work" >}}
{{< user >}}
Reconcile these three lists — 78-year-old, 72 kg, SCr 1.8, flag renal issues.
{{< /user >}}
{{< lumen >}}
**Checks complete.** CrCl ≈ 34 mL/min (Cockcroft-Gault). Key findings:

1. **Therapeutic duplication** — furosemide (SNF) *and* torsemide (discharge, still being filled). One loop diuretic should survive reconciliation. ⚠
2. **Formulation conflict** — metoprolol *tartrate* 25 BID vs. *succinate* 50 daily across sources. Same daily dose, different drug entries. ⚠
3. **Interaction** — apixaban + ibuprofen (OTC): additive bleeding risk. ⚠
4. **Renal flags** — glipizide at CrCl 34 carries hypoglycemia risk; apixaban dose criteria worth re-checking at this age and creatinine. ⚠

Drafting the reconciled list with a rationale for each decision — and a short list of questions only the prescriber can answer.
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** each lookup complete with a live tool step — and anything Lumen *couldn't* verify flagged explicitly rather than papered over. It doesn't invent interactions or renal thresholds; it looks them up.
{{< /step >}}

{{< step num="3" title="Review the reconciled list and the rationale" >}}
The draft arrives structured, not as prose: medications to **continue**, proposed **changes** (each with the reason — duplication resolved, interaction avoided, renal adjustment), and items to **confirm** — the questions only you or the patient can answer, like which diuretic the SNF actually intended and whether anyone is still taking the ibuprofen.

**You should see:** an indication attached to every drug, a source citation for every conflict ("SNF MAR says X, discharge summary says Y"), and no silent decisions — where the sources disagree, the disagreement is shown, not quietly resolved.
{{< /step >}}

{{< step num="4" title="Answer the open questions" >}}
Fill in what only you know, in the same chat:

```text
The torsemide switch was intentional at the last discharge — drop
furosemide. Family confirms he stopped ibuprofen last month. Keep
omeprazole, not pantoprazole. Endocrine is deprescribing glipizide
this admission — remove it and note why.
```

**You should see:** the list update in place — furosemide retired with the rationale recorded, the interaction flag cleared with a note, and the change log growing so the next clinician can see *why* each decision was made, not just what it was.
{{< /step >}}

{{< step num="5" title="Export the reconciled list" >}}
When the list is right:

```text
Export this as a one-page medication reconciliation document — final
list first, change log with rationale second.
```

**You should see:** a download card for a formatted document (Word or PDF — your choice). See [Creating Documents](/tools/document-generation/) for the other formats Lumen can produce.
{{< /step >}}

</div>

{{< callout type="important" >}}
**Decision support, not a decision.** Lumen verifies against RxNorm and FDA sources, but the final medication list is a prescribing decision — review every change against your institution's pharmacy resources before it reaches the chart.
{{< /callout >}}

## Troubleshooting

- **A brand name and its generic show up as two different drugs.** They shouldn't — RxNorm normalization catches these. Ask *"show me how you mapped each entry to its RxNorm name"* and you'll see the resolution table; correct any entry that mapped wrong.
- **Lumen asks which source should win instead of deciding.** That's deliberate. Source conflicts (SNF says 40 mg, discharge says 20 mg) are clinical judgment calls, not lookups. Tell it your source hierarchy — *"treat the discharge summary as authoritative unless the pharmacy fills contradict it"* — and it will apply that rule consistently.
- **The interaction list is overwhelming.** Fourteen drugs generate many minor pairs. Say *"rank interactions by severity and show only moderate and above, with management recommendations"* — the full list stays available if you want it.

## Next steps

- **Med changes feed the discharge paperwork:** [Write a Discharge Summary in 5 Minutes](/guides/discharge-summary/) — the reconciled list drops straight into the med-changes section.
- **Curious how those lookups actually work?** [How AI uses tools](/learn/tool-use/) explains why Lumen checks databases instead of reciting from memory.
- **All the medication tools in one place:** [Medication Questions](/tools/medications/) — interactions, renal dosing, RxNorm, FDA labels and recalls.
