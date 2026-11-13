---
title: "Review a medication list with Medication Review"
navTitle: "Medication Review"
description: "The Medication Review specialist screens a med list against FDA labels, checks renal rules and proposes changes for the prescriber, quoting every alert."
lead: "Give Medication Review a list and a few patient details. It resolves each drug to its FDA label, screens every pair, checks kidney function the way each label asks, and lists proposals for the prescriber."
weight: 2
icon: pill
who: "pharmacists, physicians, nurses"
keywords: ["AI medication reconciliation", "medication review AI", "drug interaction checker AI", "deprescribing AI", "polypharmacy review"]
glance:
  what: "Medication Review is a Lumen specialist that checks a medication list against each drug's FDA label: interactions, renal dosing rules and deprescribing candidates, with every alert quoted from the label."
  who: "Pharmacists and physicians, and nurses doing admission or discharge reconciliation."
  why: "To screen a long list the same thorough way every time, and see exactly which label sentence each alert comes from."
  needs: "A Lumen account on any plan. The medication list, plus age, sex, weight and a creatinine or eGFR. About 2 to 5 minutes."
  result: "A saved medication review with a verdict, every alert quoted from its label, untested pairs listed, and proposals for the prescriber."
---

A 12-drug list has 66 possible pairs. Checking each against the label by hand takes a long time, and a gap is easy to miss. **Medication Review** does the whole pass: it identifies each medicine, finds its FDA label, screens every pair for label mentions, and applies each label's kidney-function rules using values Lumen's server computes. Anything it couldn't check is listed, not hidden.

## Before you start

- **Plan:** any plan.
- **Have ready:** the medication list with doses, and the patient's age, sex, weight and serum creatinine or eGFR. Medication Review never assumes a weight; without one it says it can't assess the renal rules that need it.
- **Optional:** attach a discharge summary or medication administration record as a PDF or document.
- Use fictional or de-identified details unless your organization permits patient information in Lumen.

## How to run a medication review

{{< steps >}}
{{< step title="Open Medication Review" >}}Click **Explore** in the sidebar, choose **Specialists**, click **Medication Review**, then click **Open Medication Review**. Or type `@Medication Review` in any chat.{{< /step >}}
{{< step title="Pick the task" >}}Under **Start with**, click **Review a medication list**.{{< /step >}}
{{< step title="Fill in the form" >}}Under **Medications**, paste the list, for example "apixaban 5 mg BID, simvastatin 40 mg nightly, amlodipine 10 mg daily…". Under **Age, sex, weight, creatinine or eGFR, key problems**, enter "84F, 58 kg, creatinine 1.4, falls, atrial fibrillation".{{< /step >}}
{{< step title="Attach files if you have them" >}}Click **Continue to attach files** and add the document. Then send.{{< /step >}}
{{< step title="Review the result" >}}When the task strip says **Done**, open the medication review. Check the verdict, then read each alert and its quoted label text.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Discharge med review" specialist="Medication Review" caption="Illustration with a fictional patient at Harbor Valley Medical Center. Real reviews quote the labels they used; open them before you act." >}}
{{< user attach="discharge-med-list.pdf" >}}Review this list. 84F, 58 kg, creatinine 1.4, atrial fibrillation, two falls this year.{{< /user >}}
{{< lumen tools="Medication data retrieved, FDA drug data retrieved, Interaction check complete, Saved and checked" sources="11" >}}
{{< task-strip >}}
{{< task state="done" label="Identified 11 medicines and their FDA labels" >}}
{{< task state="done" label="Screened every pair for label mentions" >}}
{{< task state="done" label="Computed kidney function the way each label asks" >}}
{{< task state="done" label="Saved the review and checked its quotes" >}}
{{< /task-strip >}}

**Apixaban 5 mg twice daily.** The label calls for a lower dose when a patient with atrial fibrillation has two of: age 80 or older, weight 60 kg or less, serum creatinine 1.5 mg/dL or higher {{< cite 1 >}}. This patient meets two. *Proposal for the prescriber:* review for 2.5 mg twice daily.

**Simvastatin 40 mg with amlodipine.** The simvastatin label limits the dose to 20 mg daily with amlodipine {{< cite 2 >}}. *Proposal:* review the simvastatin dose.

**Not screened:** one over-the-counter supplement had no FDA label to check. Ask about it directly.

{{< verdict >}}Passed its checks: every alert quotes the label it came from, and untested pairs are listed.{{< /verdict >}}
{{< follow-ups "Make a table for the discharge summary|Which of these increase fall risk?|Write this up for the prescriber" >}}
{{< /lumen >}}
{{< /chat-demo >}}

The saved review shows each medicine with a status such as **Label loaded**, **No label found** or **Wrong label**, and each pair as **Label mention**, **No label mention** or **Not screened**.

## What Medication Review checks

| It does | It never does |
|---|---|
| Quotes every alert from the FDA label it came from | Says "no interactions" while any pair is untested |
| Lists untested pairs and medicines it couldn't identify | Assumes a weight or a creatinine you didn't give |
| Computes kidney function on the basis each label names, or says "cannot assess" and lists what's missing | Phrases a change as an order |

## Tips

- Paste the list exactly as it appears in the chart, including frequency and route. Lumen quotes your list back, so the record is traceable.
- Include problems that change prescribing decisions, such as falls, bleeding history or liver disease.
- Ask follow-ups in the same chat, for example "Which of these are on the Beers Criteria?" Lumen answers with sources.
- For a single pair, you don't need the specialist. Ask in an ordinary chat. See [Check a drug interaction](/getting-started/check-interaction/).

## Limits and safety

- Screening is based on FDA label text. A pair with **No label mention** may still interact in ways the label doesn't describe. Use your pharmacy references and clinical judgment.
- Proposals are for the prescriber. Medication Review doesn't change orders, and it doesn't write to your EHR.
- Kidney-function rules depend on the values you give. Recheck if the creatinine changes.
- **Passed its checks** means the quotes were found and the rules applied. It doesn't mean the regimen is safe for this patient.

{{< callout type="safety" title="Confirm before changing therapy" >}}
Open each quoted label, confirm the indication and dose, and consider the whole patient before acting on any proposal. Follow your organization's medication policies.
{{< /callout >}}

## FAQ

{{< faq question="Where do the interaction alerts come from?" >}}
From the drug interaction, contraindication and warning sections of each drug's FDA label, after Lumen identifies the drug with RxNorm. Every alert quotes the sentence it's based on.
{{< /faq >}}
{{< faq question="Does it use Cockcroft-Gault or eGFR?" >}}
Whichever basis the label names. Lumen's server does the calculation from the values you give, and shows which one it used.
{{< /faq >}}
{{< faq question="Can it reconcile two lists, such as admission and discharge?" >}}
Yes. Attach or paste both and ask it to compare them. It quotes each medicine from its own list and lists any conflict.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/verified-results/" "/tools/medications/" "/guides/med-reconciliation/" "/skills-and-specialists/working-with-a-specialist/" >}}
