---
title: "Run a clinical calculator"
navTitle: "Run a calculator"
description: "Describe the patient in plain words and Lumen runs a validated clinical score, such as CHA₂DS₂-VASc, CURB-65, MELD or eGFR, and explains the result."
lead: "Describe the patient the way you'd say it out loud. Lumen picks the right calculator, shows the inputs it used, and explains what the score means."
weight: 8
icon: calculator
glance:
  what: "Lumen runs validated clinical scores, such as CHA₂DS₂-VASc, CURB-65, MELD and eGFR, from a plain-language description of the patient."
  who: "Clinicians, pharmacists and nurses on any plan."
  why: "To get a score and its meaning without finding a calculator app or retyping values into a form."
  needs: "A Lumen account (any plan). About 2 minutes."
  result: "A calculator block with the score, the inputs used, an interpretation, and a button to recalculate."
---

You need a CHA₂DS₂-VASc score for a patient with new atrial fibrillation, and the calculator app is three taps away. In Lumen, describe the patient in one sentence. Lumen runs the calculator, shows each input it used, and tells you what the score means, with the reference it came from.

## Before you start

- **Plan:** any plan, including Free.
- **Have ready:** the values the score needs, such as age, sex, history, labs or vital signs. If you leave something out, Lumen asks for it or tells you what it assumed.
- **Leave out identifiers.** You don't need a name, date of birth or record number for a score.

## How to run a calculator

{{< steps >}}
{{< step title="Open a new chat" >}}
Go to [lumen.intracav.ai](https://lumen.intracav.ai) and sign in. Click **New Chat** in the sidebar.
{{< /step >}}
{{< step title="Describe the patient and name the score, if you know it" >}}
Type in the message box at the bottom. You don't have to name the calculator, but it helps. For example:

*"CHA₂DS₂-VASc for a 72-year-old woman with atrial fibrillation, hypertension and type 2 diabetes. No heart failure, stroke or vascular disease."*
{{< /step >}}
{{< step title="Send it" >}}
Press {{< kbd "Enter" >}}. A tool chip appears above the answer: **Running clinical calculator**, then **Calculation complete** when it's done.
{{< /step >}}
{{< step title="Check the inputs" >}}
The calculator block lists every input Lumen used. Read each one. If a value is wrong, change it in the block and click **Recalculate**.
{{< /step >}}
{{< step title="Read the score and the reference" >}}
The score appears with its interpretation and the published reference. Use it together with your own assessment and your local protocol.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="lumen-ui-inline" alt="A CHA₂DS₂-VASc calculator block in a Lumen chat, showing inputs, a score of 4 and the interpretation" caption="The calculator block shows the inputs, the score and what it means." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Stroke risk in atrial fibrillation" caption="Illustration with a fictional patient. Check the inputs and the reference before you act." >}}
{{< user >}}CHA₂DS₂-VASc for a 72-year-old woman with atrial fibrillation, hypertension and type 2 diabetes. No heart failure, stroke or vascular disease.{{< /user >}}
{{< lumen tools="Calculation complete" sources="1" >}}
{{< lui-block title="CHA₂DS₂-VASc" sub="Clinical decision aid" >}}
{{< lui-rows >}}
{{< lui-row title="Age 65–74" value="+1" >}}
{{< lui-row title="Female sex" value="+1" >}}
{{< lui-row title="Hypertension" value="+1" >}}
{{< lui-row title="Diabetes" value="+1" >}}
{{< /lui-rows >}}
{{< lui-score score="4" severity="Annual stroke risk about 4%" >}}Oral anticoagulation is recommended. A DOAC is generally preferred over warfarin unless it's contraindicated.{{< /lui-score >}}
{{< /lui-block >}}

The score is **4**. Points come from age 65–74, female sex, hypertension and diabetes {{< cite 1 >}}. Before starting anticoagulation, weigh bleeding risk. Ask me for a HAS-BLED score if that would help.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Calculators Lumen can run

Lumen has 28 built-in clinical calculators. The most common are:

| Calculator | What it's for |
|---|---|
| **CHA₂DS₂-VASc** | Stroke risk in atrial fibrillation |
| **HAS-BLED** | Bleeding risk on anticoagulation |
| **Wells (PE and DVT)** | Probability of pulmonary embolism or deep vein thrombosis |
| **CURB-65** | Pneumonia severity |
| **NEWS2** and **SOFA** | Early warning of deterioration; organ dysfunction in sepsis |
| **MELD**, **MELD-Na**, **Child-Pugh**, **FIB-4** | Liver disease severity and fibrosis |
| **eGFR (CKD-EPI 2021)** and **Cockcroft-Gault** | Kidney function and creatinine clearance |
| **HEART score** | Chest pain risk in the emergency department |

Others include corrected QT, mean arterial pressure, RCRI, Padua VTE, P/F ratio, corrected calcium, anion gap, osmolal gap, Winter's formula, BMI, ideal body weight, body surface area, pediatric maintenance fluids, Alvarado and corrected phenytoin. See [Calculators](/tools/calculators/) for the full list.

## Tips

- **Give exact values.** "Creatinine 1.4" works better than "mildly raised creatinine."
- **Say what's absent.** "No heart failure or prior stroke" stops Lumen from asking.
- **Chain the next question.** After the score, ask "Should she start anticoagulation? Compare apixaban and warfarin for her." Lumen uses the score in its answer.
- **eGFR doesn't use race.** Lumen uses the 2021 CKD-EPI equation, which needs only creatinine, age and sex.

## Limits and safety

- A score summarizes risk across groups of patients. It doesn't decide treatment for the person in front of you.
- If Lumen fills in a value you didn't give it, the block shows it. Correct anything that isn't right.
- Lumen can only run the calculators it has. If you ask for one it doesn't have, it will say so, or reason from published criteria and cite them. Treat that kind of answer with more care.

{{< callout type="safety" title="Check the inputs and the reference" >}}
A wrong input gives a wrong score. Read every input in the block, open the reference, and follow your organization's protocol where it differs.
{{< /callout >}}

## FAQ

{{< faq question="Do I need to know the calculator's name?" >}}
No. "What's the stroke risk for…" or "How severe is this pneumonia…" works. Naming the score makes the result more predictable.
{{< /faq >}}
{{< faq question="Can I change a value after the score appears?" >}}
Yes. Change the input in the calculator block and click **Recalculate**, or type the new value in a follow-up message.
{{< /faq >}}
{{< faq question="Is the math done by the AI?" >}}
No. The score is computed by a fixed, validated formula in Lumen's calculator tool. The AI reads your description, passes the values to the tool, and explains the result.
{{< /faq >}}

## Next steps

{{< related "/chat/interactive-answers/" "/tools/calculators/" "/getting-started/check-interaction/" "/getting-started/differential/" >}}
