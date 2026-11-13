---
title: "Work through a clinical decision"
navTitle: "Protocols and decisions"
description: "Checklists, differential diagnosis, triage scoring in 9 systems, antibiotic selection, allergy cross-reactivity, guidelines and recommendations."
lead: "When a problem needs to be worked through step by step, Lumen's decision tools give you a structure, with sources, to check against your own judgment."
weight: 6
icon: clipboard-list
keywords: ["clinical checklist", "differential diagnosis AI", "ESI triage", "antibiotic selection", "USPSTF recommendations"]
glance:
  what: "Built-in tools for protocols and checklists, differential diagnosis, triage scoring, antibiotic choice, allergy cross-reactivity, guidelines and graded recommendations."
  who: "Physicians, nurses, advanced practice providers, pharmacists and students."
  why: "To make sure no step or diagnosis is missed, with the evidence for each suggestion attached."
  needs: "A Lumen account on any plan and a clear description of the patient or situation."
  result: "A structured checklist, differential, triage level or regimen with its sources."
---

Some questions are better answered with a structure than a paragraph: a sepsis bundle to step through, a ranked differential, a triage level, a first-line antibiotic with allergy-safe alternatives. These tools give Lumen that structure. The result is shown as an interactive card or a clear list, and each recommendation cites where it came from.

## Before you start

- All the tools on this page work on every plan.
- Give the facts that change the answer: age, vital signs, allergies, kidney function, pregnancy, culture results and the care setting.
- For a full, checked workup, use the Clinical Reasoning specialist. See [Specialists](/skills-and-specialists/specialists/).

## The tools

| Tool (as shown in Explore) | What it does | When finished, the chip reads |
|---|---|---|
| **Clinical Checklists** | Steps through evidence-based protocols, such as a sepsis bundle or DKA management. | **Checklist generated** |
| **Triage Assessment** | Scores a patient with one of 9 triage systems: ESI, MTS, CTAS, ATS, RETTS, START, SALT, PAT (pediatric) and AMHTS (mental health). | **Triage assessment complete** |
| **Differential Diagnosis** | Builds a ranked differential with PubMed literature, ICD-10 codes and a suggested workup. | **Differential generated** |
| **Antimicrobial Selector** | Suggests empiric or culture-directed antibiotics with dosing, duration and allergy-safe alternatives. | **Regimen selected** |
| **Allergy Cross-Reactivity** | Lists drugs to avoid and likely safe alternatives for a reported drug allergy. | **Cross-reactivity checked** |
| **Clinical Guidelines** | Retrieves USPSTF recommendations with their grades and recent practice guidelines. | **Guidelines retrieved** |
| **Clinical Recommendations** | Writes prioritized recommendations for treatment, diagnosis or follow-up, graded by evidence. | **Recommendations ready** |

## How to use a decision tool

{{< steps >}}
{{< step title="Describe the situation" >}}For example: "ED patient, 58-year-old man, chest pain and sweating, HR 115, BP 88/60. ESI level?"{{< /step >}}
{{< step title="Name the system if it matters" >}}Say "use CTAS" or "pediatric" if your setting uses a different triage system.{{< /step >}}
{{< step title="Work through the result" >}}Checklists are interactive. Tick items as you go.{{< /step >}}
{{< step title="Check the sources" >}}Open the cited guideline or article for each recommendation before you act.{{< /step >}}
{{< /steps >}}

To browse with examples, open {{< ui-path "Explore" "Built-in tools" >}} and choose **Answer a clinical question**.

## What you'll see

{{< screenshot src="lumen-ui-inline" alt="An interactive checklist inside a Lumen answer" caption="Checklists appear inside the answer. You can tick items as you work." url="lumen.intracav.ai" >}}
{{< lumen-ui-example title="Sepsis checklist" component="Checklist" category="clinical" >}}
{{< lui-code >}}
Checklist(title="Hour-1 sepsis bundle", items=[
  {text:"Measure lactate", checked:true},
  {text:"Blood cultures before antibiotics", checked:true},
  {text:"Broad-spectrum antibiotics"},
  {text:"30 mL/kg crystalloid for hypotension or lactate ≥ 4 mmol/L"},
  {text:"Vasopressors if hypotensive during or after fluids (target MAP ≥ 65 mmHg)"}])
{{< /lui-code >}}
{{< lui-block title="Hour-1 sepsis bundle" count="2 of 5" progress="40" >}}
{{< lui-rows >}}
{{< lui-row type="check" checked=true title="Measure lactate" >}}
{{< lui-row type="check" checked=true title="Blood cultures before antibiotics" >}}
{{< lui-row type="check" title="Broad-spectrum antibiotics" >}}
{{< lui-row type="check" title="30 mL/kg crystalloid" body="For hypotension or lactate of 4 mmol/L or more" >}}
{{< lui-row type="check" title="Vasopressors" body="If hypotensive during or after fluids, to keep MAP at 65 mmHg or more" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}
{{< /screenshot >}}

## Tips

- **Tell Lumen about allergies up front.** The antibiotic and cross-reactivity tools use them.
- **Ask for the can't-miss diagnoses.** "What must I rule out?" makes the differential lead with dangerous causes.
- **Follow your own protocol.** If your organization's protocol is in your documents or a Knowledge Pack, ask Lumen to use it.

## Limits and safety

{{< callout type="safety" title="Decision support, not a decision" >}}
These tools organize information. They don't examine the patient and can be wrong. A triage level, differential or regimen is a suggestion to check against your assessment, your organization's protocols and local antibiograms. Open the cited sources and use your judgment.
{{< /callout >}}

- Antibiotic suggestions follow published guidance and don't know your local resistance patterns unless you tell Lumen.
- Guidelines change. Check the date of each cited guideline.

## FAQ

{{< faq question="Which triage systems does Lumen support?" >}}
Nine: ESI, MTS, CTAS, ATS, RETTS, START, SALT, PAT for pediatrics, and AMHTS for mental health.
{{< /faq >}}
{{< faq question="Where do guideline answers come from?" >}}
From USPSTF recommendations and practice guidelines found on PubMed, cited in the answer.
{{< /faq >}}
{{< faq question="Can I save a checklist?" >}}
The checklist stays in the chat, where you can come back to it. To make a document from it, ask Lumen to create a PDF.
{{< /faq >}}

## Next steps

{{< related "/getting-started/differential/" "/tools/medications/" "/tools/calculators/" "/chat/interactive-answers/" >}}
