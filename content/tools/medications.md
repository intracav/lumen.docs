---
title: "Check medications"
navTitle: "Medications"
description: "Drug interactions, renal dosing, IV drip rates, drug identity, adverse event reports and recalls, looked up live from FDA and NLM data."
lead: "Ask the medication questions that come up every shift. Lumen checks FDA label data, computes the numbers, and shows its working."
weight: 3
icon: pill
keywords: ["drug interaction checker", "renal dose adjustment", "IV drip calculator", "FAERS adverse events", "FDA drug recalls"]
glance:
  what: "Built-in tools that check drug interactions, renal dose adjustments, IV infusion rates, drug identity, adverse event reports and recalls during a chat."
  who: "Nurses, pharmacists, physicians and anyone who handles medications."
  why: "To get a label-based answer with the source attached, instead of searching several references by hand."
  needs: "A Lumen account on any plan. The patient values the question depends on, such as weight, age and serum creatinine."
  result: "An answer with the label passages and calculations it used, ready for you to check."
---

Medication questions often need two things at once: what the FDA label says, and some arithmetic. Lumen's medication tools do both. They read FDA prescribing information, normalize drug names through RxNorm (the national drug naming standard), and compute rates and kidney function with fixed formulas rather than estimating them.

## Before you start

- All the tools on this page work on every plan.
- Have the drug names and doses ready. For dosing questions, have the patient's age, sex, weight and serum creatinine.
- For a full review of a medication list, use the [Medication Review](/skills-and-specialists/specialists/medication-review/) specialist instead.

## The tools

| Tool (as shown in Explore) | What it does | When finished, the chip reads |
|---|---|---|
| **Check Drug Interactions** | Checks two or more drugs against FDA label interaction, contraindication and warning sections, and names the mechanism and severity. | **Interaction check complete** |
| **Renal Dose Check** | Calculates creatinine clearance (Cockcroft-Gault) and quotes the FDA label's renal dosing adjustment. | **Renal dose check complete** |
| **IV Drip Calculator** | Converts a weight-based or fixed-rate order into mL/hr. | **IV drip rate calculated** |
| **Identify a Drug (RxNorm)** | Normalizes a brand or generic name and lists its ingredients and standard ID. | **Medication data retrieved** |
| **FDA Adverse Events** | Searches FDA Adverse Event Reporting System (FAERS) reports for a drug. | **Adverse events retrieved** |
| **FDA Drug Recalls** | Searches FDA enforcement records for recalls and market withdrawals. | **Recall data retrieved** |
| **Allergy Cross-Reactivity** | Lists drugs to avoid and likely safe alternatives for a reported allergy. | **Cross-reactivity checked** |

## How to check a medication question

{{< steps >}}
{{< step title="Ask in chat" >}}Type the question with the details that matter: "Can a patient on simvastatin 40 mg start amlodipine?"{{< /step >}}
{{< step title="Give missing values when asked" >}}If a calculation needs a value you didn't give, such as weight or creatinine, Lumen asks for it rather than guessing.{{< /step >}}
{{< step title="Read the result" >}}Lumen shows the severity, the reason and what the label recommends. Calculations show the inputs they used.{{< /step >}}
{{< step title="Check the label passage" >}}Open the cited FDA label section and confirm it before you change a dose or give a drug.{{< /step >}}
{{< /steps >}}

You can also open {{< ui-path "Explore" "Built-in tools" >}}, choose **Check medications**, and try the example questions.

## What you'll see

{{< chat-demo title="Statin and calcium channel blocker" caption="Illustration with a fictional patient. Real answers cite the FDA label." >}}
{{< user >}}A Med-Surg patient takes simvastatin 40 mg daily. The team wants to start amlodipine 5 mg. Any problem?{{< /user >}}
{{< lumen tools="Interaction check complete, FDA drug data retrieved" sources="2" >}}
Yes. The simvastatin label says the dose **should not exceed 20 mg daily** when taken with amlodipine, because amlodipine raises simvastatin levels and the risk of muscle injury (myopathy) {{< cite 1 >}}.

Options to discuss with the prescriber: lower simvastatin to 20 mg, or switch to a statin the label doesn't limit this way {{< cite 2 >}}. Check the label passage before changing the order.
{{< /lumen >}}
{{< /chat-demo >}}

## Tips

- **List every drug in one message.** Lumen checks each pair. Ask it to name any pair it could not screen.
- **Say which equation you want** if it matters. Renal Dose Check uses Cockcroft-Gault, which most drug labels are based on. For eGFR (CKD-EPI 2021), use the [calculators](/tools/calculators/).
- **Use concentrations from your pharmacy.** For drips, give the bag concentration your unit uses. Otherwise Lumen uses a standard concentration and says so.

## Limits and safety

{{< callout type="safety" title="Check before you give or change a dose" >}}
Interaction and dosing results come from FDA label text and fixed formulas, but Lumen can still misread a label or miss a drug. "No label mention" is not the same as "safe". Confirm with the label, your pharmacist and your organization's policies. Never use a drip rate without checking it against the order and your pump library.
{{< /callout >}}

- Adverse event reports (FAERS) show that something was reported, not that the drug caused it, and not how often it happens.
- Lumen doesn't see your patient's chart unless you paste the details or your organization has connected its EHR.

## FAQ

{{< faq question="Where does the interaction data come from?" >}}
From the interaction, contraindication and warning sections of FDA prescribing information, with drug names normalized through RxNorm. Each result cites the label it used.
{{< /faq >}}
{{< faq question="Does Lumen use creatinine clearance or eGFR for renal dosing?" >}}
Renal Dose Check calculates creatinine clearance with Cockcroft-Gault and quotes the label's adjustment. eGFR is available as a separate calculator.
{{< /faq >}}
{{< faq question="Can it review a whole medication list?" >}}
Yes. Paste the list, or use the Medication Review specialist for a structured review that lists every pair it screened and any it could not.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/specialists/medication-review/" "/getting-started/check-interaction/" "/tools/calculators/" "/tools/protocols-decisions/" >}}
