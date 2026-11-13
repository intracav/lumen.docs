---
title: "Build a differential diagnosis"
navTitle: "Build a differential"
description: "Describe a presentation and Lumen returns a ranked differential, flags the diagnoses you can't miss, and suggests the workup that tells them apart."
lead: "Describe the presentation the way you'd present it on rounds. Lumen ranks the possibilities, flags what you can't afford to miss, and suggests the tests that separate them."
weight: 6
icon: stethoscope
glance:
  what: "Lumen turns a de-identified clinical presentation into a ranked differential diagnosis with supporting and opposing features and a suggested workup."
  who: "Physicians, advanced practice providers, residents and students, on any plan."
  why: "To check you haven't missed a dangerous diagnosis, and to plan the workup that narrows the list."
  needs: "A Lumen account (any plan). The key history, exam and vital signs, without identifiers. About 3 minutes."
  result: "A ranked list with can't-miss diagnoses flagged, the reasoning for each, and a suggested workup, with cited literature."
---

A 28-year-old woman has sharp chest pain that's worse on breathing in, and her heart rate is 112. Before you settle on a diagnosis, you want to be sure nothing dangerous is slipping past. Describe the case to Lumen. It returns a ranked differential, marks the diagnoses that can't be missed, gives the features for and against each, and suggests the tests that tell them apart.

## Before you start

- **Plan:** any plan, including Free.
- **Have ready:** age, sex, the main symptoms and how long they've lasted, vital signs, relevant history and medicines, and any results you already have.
- **Remove identifiers.** Leave out names, dates of birth, record numbers and exact dates. Lumen needs the clinical picture, not the person's identity.

## How to build a differential

{{< steps >}}
{{< step title="Open a new chat" >}}
Go to [lumen.intracav.ai](https://lumen.intracav.ai), sign in, and click **New Chat**.
{{< /step >}}
{{< step title="Present the case" >}}
Type it the way you'd present it to a colleague. For example:

*"Differential for a 28-year-old woman with 1 day of sharp left-sided chest pain, worse on deep breathing. HR 112, BP 118/74, RR 22, SpO2 95% on room air, afebrile. Takes a combined oral contraceptive. Returned from a 10-hour flight 4 days ago. No prior history."*
{{< /step >}}
{{< step title="Send it" >}}
Press {{< kbd "Enter" >}}. You'll see **Generating differential diagnosis**, then **Differential generated**. Lumen also searches the literature to support the list.
{{< /step >}}
{{< step title="Read the list from the top" >}}
Diagnoses are ranked by likelihood. Can't-miss diagnoses are flagged whatever their rank. Each one shows the features that support it and the features that argue against it.
{{< /step >}}
{{< step title="Plan the workup and check the sources" >}}
Read the suggested tests, then open the cited sources. Add new results in the same chat to narrow the list.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Pleuritic chest pain" caption="Illustration with a fictional patient. A differential supports your assessment. It doesn't make the diagnosis." >}}
{{< user >}}Differential for a 28-year-old woman with 1 day of sharp left-sided chest pain, worse on deep breathing. HR 112, BP 118/74, RR 22, SpO2 95% on room air, afebrile. Takes a combined oral contraceptive. Returned from a 10-hour flight 4 days ago.{{< /user >}}
{{< lumen thought="9" tools="Differential generated, Searched PubMed" sources="4" >}}
{{< lui-block title="Differential diagnosis" sub="Pleuritic chest pain with tachycardia" >}}
{{< lui-rows >}}
{{< lui-row title="1. Pulmonary embolism — can't miss" body="For: estrogen-containing contraceptive, recent long flight, tachycardia, pleuritic pain. Against: normal blood pressure, SpO2 only mildly low." >}}
{{< lui-row title="2. Pneumothorax — can't miss" body="For: sudden pleuritic pain in a young adult. Against: no reported dyspnea at rest; check breath sounds." >}}
{{< lui-row title="3. Acute pericarditis" body="For: pleuritic pain. Against: no positional change or friction rub described." >}}
{{< lui-row title="4. Pneumonia or pleurisy" body="For: pleuritic pain. Against: afebrile, no cough described." >}}
{{< lui-row title="5. Musculoskeletal chest pain" body="A diagnosis of exclusion here, given the tachycardia." >}}
{{< /lui-rows >}}
{{< /lui-block >}}

**Suggested workup:** ECG and chest X-ray. Estimate pretest probability for PE with the Wells criteria {{< cite 1 >}}. The PERC rule can't be used to rule PE out here, because she is tachycardic and takes estrogen {{< cite 2 >}}. If PE is unlikely, check a D-dimer; if it's likely, or the D-dimer is raised, go to CT pulmonary angiography {{< cite 3 >}}. Add troponin if pericarditis or myocardial involvement is a concern {{< cite 4 >}}.
{{< /lumen >}}
{{< /chat-demo >}}

## Tips

- **Include what's normal.** A normal blood pressure or no fever changes the ranking as much as an abnormal finding.
- **Add results as they come in.** *"D-dimer is 1,100 ng/mL FEU. What next?"* Lumen keeps the earlier details from the chat.
- **Ask it to argue the other side.** *"What would make you think this isn't PE?"*
- **Use a skill for a structured write-up.** Type `/` and pick **Differential Diagnosis Builder** for a fuller, structured differential with workup plan.
- **Run the score.** *"Calculate her Wells score for PE."* See [Run a clinical calculator](/getting-started/run-a-calculator/).

## Limits and safety

- Lumen sees only what you type. It can't examine the patient, and a missing detail can change the list.
- Rankings come from typical presentations in the literature. Atypical presentations are common, especially in older adults, pregnancy and immunosuppression.
- A differential is a thinking aid. It isn't a diagnosis, and it isn't triage advice for an unstable patient.

{{< callout type="safety" title="Don't let a list delay urgent care" >}}
If the patient is unstable, follow your emergency protocol first. Use Lumen's differential alongside your own assessment, and open the cited sources before you act on it.
{{< /callout >}}

## FAQ

{{< faq question="How does Lumen rank the diagnoses?" >}}
By how well each one fits the features you gave, using published clinical literature. Can't-miss diagnoses are flagged regardless of how likely they are.
{{< /faq >}}
{{< faq question="Can I continue the case later?" >}}
Yes. The chat is saved. Open it from the sidebar and add new results.
{{< /faq >}}
{{< faq question="Should I paste the whole note?" >}}
You can, after removing identifiers. A focused summary of the history, exam and results usually works as well.
{{< /faq >}}

## Next steps

{{< related "/getting-started/run-a-calculator/" "/tools/protocols-decisions/" "/chat/thinking/" "/chat/sources/" >}}
