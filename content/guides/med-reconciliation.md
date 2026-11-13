---
title: "Run a medication review and reconciliation"
navTitle: "Medication review"
description: "Reconcile medication lists that disagree: each drug matched to its FDA label, every pair screened, kidney function computed, proposals listed."
lead: "Paste the lists, label each source and give the kidney inputs. The Medication Review Specialist shows every conflict, label warning and renal rule, with its source."
weight: 20
icon: pill
who: "nurses, pharmacists and prescribers"
keywords: ["AI medication reconciliation", "medication review AI", "drug interaction check AI", "polypharmacy review"]
glance:
  what: "A step-by-step way to reconcile several medication lists into one reviewed list with Lumen's Medication Review Specialist."
  who: "Nurses, pharmacists and prescribers who reconcile medications at admission, transfer or discharge."
  why: "Lists from different sources rarely agree. Lumen lines them up, screens every drug pair against the FDA labels and computes kidney function, so you spend your time on the decisions."
  needs: "Any Lumen plan. The medication lists from each source, plus age, sex, weight and serum creatinine. About 10 minutes."
  result: "A checked medication review: each medicine matched to its label, label warnings quoted, renal rules computed and proposals for the prescriber."
---

A 78-year-old man arrives from a skilled nursing facility. You have three medication lists: the facility's administration record, a discharge summary from six weeks ago and the pharmacy's fill history. They don't agree. Lumen's **Medication Review Specialist** puts the lists side by side. It matches each medicine to its FDA label and screens every pair for label warnings. Then it computes kidney function from the values you give it and sets out proposals for the prescriber to decide. Every finding shows where it came from.

## Before you start

- **Plan:** any Lumen plan.
- **The lists, each labeled with its source.** Paste them as text, or attach files or photos. Conflicts between sources are what you're looking for, so keep the sources separate.
- **Kidney inputs:** age, sex, weight in kilograms and a recent serum creatinine. Lumen won't guess a missing weight or sex. Without them, it marks the renal check **Cannot assess**.
- **The indication** for any drug whose dosing depends on it, such as apixaban for atrial fibrillation.
- **No identifiers.** Leave out names, record numbers, dates of birth and facility names.
- **Time:** about 10 minutes.

A *Specialist* is a Lumen assistant set up for one kind of work. It follows a fixed checklist and saves a result that Lumen checks before you see it.

## How to run the review

{{< steps >}}
{{< step title="Choose the Medication Review Specialist" >}}
Open a new chat. Type `@` in the message box and choose **Medication Review** from the **Specialists** list.
{{< /step >}}
{{< step title="Paste the lists and the patient facts" >}}
Paste each list under its own heading, add the kidney inputs, then press **Send**:

{{< composer text="@Medication Review reconcile these three lists. 78-year-old man, 72 kg, serum creatinine 1.8 mg/dL. Atrial fibrillation, heart failure, type 2 diabetes, depression. FACILITY RECORD: metoprolol tartrate 25 mg twice daily; furosemide 40 mg daily; lisinopril 10 mg daily; atorvastatin 40 mg nightly; apixaban 5 mg twice daily for atrial fibrillation; omeprazole 20 mg daily; sertraline 50 mg daily; acetaminophen 650 mg every 6 hours as needed. DISCHARGE SUMMARY 6 WEEKS AGO: metoprolol succinate 50 mg daily; torsemide 20 mg daily; lisinopril 10 mg daily; atorvastatin 40 mg nightly; apixaban 5 mg twice daily; pantoprazole 40 mg daily. PHARMACY FILLS, LAST 90 DAYS: metoprolol tartrate, furosemide, torsemide, lisinopril, atorvastatin, apixaban, omeprazole, sertraline, glipizide 10 mg twice daily. Family reports he takes ibuprofen 400 mg for knee pain." >}}
{{< /step >}}
{{< step title="Watch the checks run" >}}
You'll see **Looking up medication in RxNorm**, **Querying FDA drug database** and **Checking and saving**. RxNorm is the national list of drug names. Matching to it means metoprolol tartrate and metoprolol succinate show up as two forms of one drug, not two unrelated drugs.
{{< /step >}}
{{< step title="Open the review" >}}
Click the **Medication review** card to open it in the side panel. It lists each medicine with the source lines it came from. Below that you'll find the drug pairs and the renal rules. Proposals for the prescriber come last.
{{< /step >}}
{{< step title="Answer the open questions" >}}
Reply in the same chat with the decisions only you or the care team can make:

{{< composer text="The switch to torsemide at the last discharge was intentional; drop furosemide. Family says he will stop ibuprofen. Keep omeprazole and drop pantoprazole. Endocrinology plans to stop glipizide this admission; record why." >}}

Lumen saves a new version and checks it again.
{{< /step >}}
{{< step title="Export the list" >}}
Type `Make a one-page Word document: final list first, then each change and its reason.` and press **Send**. Open the document card and click **Download**.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="agents-deliverable" alt="A medication review in Lumen's side panel, showing medicines, label-mention pairs, kidney function and proposals" caption="A medication review. Each warning quotes the FDA label it came from." url="lumen.intracav.ai" >}}
{{< chat-demo title="Three lists, one review" specialist="Medication Review" caption="Illustration with a fictional patient." >}}
{{< user >}}Reconcile these three lists. 78-year-old man, 72 kg, serum creatinine 1.8 mg/dL…{{< /user >}}
{{< lumen thought="12" tools="Medication data retrieved, FDA drug data retrieved, Saved and checked" sources="11" >}}
**Kidney function (computed):** creatinine clearance about 34 mL/min by Cockcroft-Gault.

**Conflicts between sources**

1. **Two loop diuretics.** Furosemide (facility record) and torsemide (discharge summary), and both are being filled.
2. **Two forms of metoprolol.** Tartrate 25 mg twice daily versus succinate 50 mg daily.
3. **Two proton pump inhibitors.** Omeprazole and pantoprazole.

**Label mentions**

- **Apixaban with ibuprofen** and **apixaban with sertraline**: the apixaban label lists NSAIDs and SSRIs among drugs that raise bleeding risk.
- **Lisinopril with ibuprofen**: the lisinopril label mentions NSAIDs, including reduced kidney function in older adults.

**Renal rules**

- **Apixaban:** for atrial fibrillation the label reduces the dose only when two of three apply: age 80 or older, weight 60 kg or less, serum creatinine 1.5 mg/dL or higher. One applies, so the label condition for 2.5 mg doesn't apply.

**Proposals for the prescriber:** consider keeping one loop diuretic, one metoprolol form and one proton pump inhibitor. Consider stopping ibuprofen.

{{< verdict >}}Passed its checks. 66 of 66 drug pairs screened. 7 of 7 label quotes were found word for word.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

Each pair is marked **Label mention**, **No label mention** or **Not screened**. A pair is **Not screened** when Lumen couldn't load one of the labels. The review says how many weren't screened, and it never calls a list "safe".

## Check the result

{{< lui-block title="Before the list reaches the chart" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Every source line appears" body="Each medicine shows the line it was taken from. Nothing from your lists is missing." >}}
{{< lui-row type="check" title="Each medicine matched the right label" body="Look for Wrong label or No label found, and correct the name if needed." >}}
{{< lui-row type="check" title="No pair is left Not screened" body="If some are, check those pairs in your usual drug reference." >}}
{{< lui-row type="check" title="The kidney inputs are right" body="Age, sex, weight and creatinine match the chart, and the renal rules use them." >}}
{{< lui-row type="check" title="Each proposal has a prescriber decision" body="Proposals are suggestions. A prescriber accepts or rejects each one." >}}
{{< lui-row type="check" title="A pharmacist or prescriber has reviewed the final list" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Label every source.** "Facility record says 40 mg, discharge summary says 20 mg" is a finding. One merged list hides it.
- **Give the indication** when dosing depends on it. Apixaban's dose rules for atrial fibrillation differ from those for treating a clot.
- **Tell Lumen your source order** if you have one: `Treat the discharge summary as current unless the pharmacy fills say otherwise.`
- **Over-the-counter drugs and supplements** are often missing from every list. Ask the patient or family, and add them.

## Limits and safety

{{< callout type="safety" title="A screen, not a prescribing decision" >}}
The review screens the text of FDA labels. It isn't a full interaction database, and it doesn't check Beers or STOPP criteria. A pair with no label mention can still interact. Every change is a prescribing decision, so check it against your pharmacy resources before it reaches the chart. Don't enter patient identifiers. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Proposals start with "Consider".** Lumen never writes orders.
- **Missing inputs aren't guessed.** Without a weight, sex or creatinine, kidney-based checks show **Cannot assess**.
- **Combination products** may not match a single label. Check those by hand.

## FAQ

{{< faq question="Does Lumen decide which list is right?" >}}
No. It shows where the lists disagree and quotes each source. You or the prescriber decide, and you can tell Lumen the decision so the final list and change log reflect it.
{{< /faq >}}
{{< faq question="Is this the same as an interaction checker?" >}}
Not quite. Lumen screens every pair for mentions in the FDA labels and quotes the label text. That catches many interactions but not all of them. If no label mentions a pair, that doesn't prove the drugs are safe together.
{{< /faq >}}
{{< faq question="Which kidney equation does it use?" >}}
Whichever one the label names. Lumen computes Cockcroft-Gault creatinine clearance or CKD-EPI 2021 eGFR from the values you give, and it doesn't swap one for the other.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/specialists/medication-review/" "/guides/discharge-summary/" "/tools/medications/" "/getting-started/check-interaction/" >}}
