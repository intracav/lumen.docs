---
title: "Run a clinical calculator"
navTitle: "Calculators"
description: "Lumen's 28 clinical calculators, from eGFR and CHA₂DS₂-VASc to MELD, SOFA and Wells. Ask in plain words and Lumen runs the formula."
lead: "Describe the patient and the score you need. Lumen picks the calculator, asks for anything missing, and shows the inputs beside the result."
weight: 5
icon: calculator
keywords: ["MELD calculator", "CHA2DS2-VASc calculator", "Wells score calculator", "eGFR calculator", "HAS-BLED calculator", "CURB-65 calculator", "SOFA score calculator", "Child-Pugh calculator", "anion gap calculator", "medical calculator AI"]
glance:
  what: "A built-in set of 28 clinical calculators that Lumen runs with fixed formulas when you ask for a score."
  who: "Clinicians, nurses, pharmacists and students."
  why: "To get a score with its inputs and interpretation in the same place as the rest of your question, without opening a separate calculator site."
  needs: "A Lumen account on any plan and the patient values the score needs."
  result: "A score, the inputs it used, and what the result usually means."
---

You don't need to find the right calculator or remember its inputs. Describe the situation, such as "stroke risk for a patient with atrial fibrillation", and Lumen chooses the calculator, asks for any values it's missing, and runs it. The arithmetic is done by code using the published formula, not estimated by the AI. The result shows each input so you can spot a wrong value.

## Before you start

- Calculators work on every plan.
- Have the patient's values ready, with units. Lumen asks rather than guessing when something is missing.

## The 28 calculators

| Area | Calculators |
|---|---|
| Kidney | eGFR (CKD-EPI 2021, race-free), Cockcroft-Gault creatinine clearance |
| Cardiology and anticoagulation | CHA₂DS₂-VASc, HAS-BLED, HEART score, QTc, mean arterial pressure (MAP), Revised Cardiac Risk Index (RCRI) |
| Clots | Wells DVT, Wells PE, Padua VTE risk |
| Lungs and critical care | CURB-65, SOFA, NEWS2, PaO₂/FiO₂ ratio |
| Liver | MELD (MELD-Na when sodium is given), Child-Pugh, FIB-4 |
| Chemistry and acid-base | Corrected calcium, anion gap, osmolal gap, Winters' formula |
| Body size | BMI, ideal body weight, body surface area |
| Pediatrics | Maintenance fluids (by weight) |
| Surgery | Alvarado score |
| Drug levels | Albumin-corrected phenytoin |

## How to run a calculator

{{< steps >}}
{{< step title="Ask in chat" >}}For example: "CHA₂DS₂-VASc for a 74-year-old woman with hypertension and diabetes, no prior stroke."{{< /step >}}
{{< step title="Answer any follow-up" >}}If an input is missing, Lumen asks for it.{{< /step >}}
{{< step title="Check the inputs" >}}The result lists every input with its points or value. Correct any that are wrong and ask again.{{< /step >}}
{{< step title="Read the interpretation" >}}Lumen explains what the score usually means and cites the source for that interpretation. Check it against your guidelines.{{< /step >}}
{{< /steps >}}

You can also open {{< ui-path "Explore" "Built-in tools" "Clinical Calculator" >}} to try an example.

## What you'll see

Calculator results appear as an interactive card inside the answer, drawn with **Lumen UI**, the component system Lumen uses for interactive answers.

{{< lumen-ui-example title="CHA₂DS₂-VASc result" component="Calculator" category="clinical" >}}
{{< lui-code >}}
Calculator(name="CHA₂DS₂-VASc", score=4, severity="moderate",
  interpretation="Oral anticoagulation is generally recommended. Weigh bleeding risk.",
  inputs=[{label:"Female sex", points:1}, {label:"Age 65–74", points:1},
          {label:"Hypertension", points:1}, {label:"Diabetes", points:1}])
{{< /lui-code >}}
{{< lui-block title="CHA₂DS₂-VASc" >}}
{{< lui-score score="4" severity="Elevated stroke risk" >}}Oral anticoagulation is generally recommended. Weigh bleeding risk, for example with HAS-BLED.{{< /lui-score >}}
{{< lui-rows >}}
{{< lui-row title="Female sex" value="+1" >}}
{{< lui-row title="Age 65–74" value="+1" >}}
{{< lui-row title="Hypertension" value="+1" >}}
{{< lui-row title="Diabetes" value="+1" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

{{< magicaf path="/docs/lumen-ui/components/clinical/" title="Clinical components on MagicAF" />}}

## Tips

- **Give units.** Creatinine in mg/dL and weight in kg avoid conversion mistakes.
- **Ask for two scores together.** "CHA₂DS₂-VASc and HAS-BLED" gives both in one answer.
- **Use the right kidney measure.** Drug labels usually use Cockcroft-Gault creatinine clearance. CKD staging uses eGFR. See [Medications](/tools/medications/) for renal dose checks.

## Limits and safety

{{< callout type="safety" title="A score informs a decision. It doesn't make it." >}}
Scores are only as good as their inputs. Check each input in the result, confirm the interpretation against current guidelines, and use your clinical judgment.
{{< /callout >}}

- eGFR (CKD-EPI) is validated for adults 18 and over, and the calculator won't run it for younger patients. Pediatric maintenance fluids is the one pediatric calculator.
- They are for patient care calculations only, not general math or physics.

## FAQ

{{< faq question="Is the score calculated by the AI?" >}}
No. Each calculator is a fixed formula in code. The AI gathers the inputs from your message and explains the result.
{{< /faq >}}
{{< faq question="Which eGFR equation does Lumen use?" >}}
CKD-EPI 2021, the race-free equation published by Inker and colleagues in 2021.
{{< /faq >}}
{{< faq question="My calculator isn't on the list. What happens?" >}}
The built-in set is the 28 listed above. For anything else, Lumen can explain the formula and its source, but the result isn't produced by a built-in calculator, so check the arithmetic yourself.
{{< /faq >}}

## Next steps

{{< related "/getting-started/run-a-calculator/" "/tools/medications/" "/chat/interactive-answers/" "/tools/protocols-decisions/" >}}
