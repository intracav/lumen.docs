---
title: "Interactive answers: checklists, calculators, charts"
navTitle: "Interactive answers"
description: "Lumen can answer with checklists, calculators, tables, charts and drug cards you can work with right in the chat. Here's what they are and how to use them."
lead: "Some answers are easier to use than to read. When a checklist, a score or a chart fits the question better than a paragraph, Lumen draws one in the chat."
weight: 6
icon: component
glance:
  what: "Interactive answers are checklists, calculators, tables, charts and drug cards that Lumen draws inside its reply, instead of plain text."
  who: "Anyone who uses Lumen chat, on any plan. No technical knowledge needed."
  why: "To tick through a bundle, change a calculator input and recalculate, or read numbers at a glance, without copying anything into another tool."
  needs: "A Lumen account. About 4 minutes to read."
  result: "You'll recognize each kind of interactive answer and know what you can do with it."
---

Ask Lumen for a central line insertion checklist and you get a list you can tick, not a paragraph to reread. Ask for a pneumonia severity score and you get the score, the inputs it used, and a button to recalculate if one of them was wrong. These blocks are called **interactive answers**. Lumen draws them with **Lumen UI**, the set of building blocks it uses for structured replies.

## Before you start

Nothing to set up. Interactive answers work on every plan, in the web app and the apps. Lumen decides when a block fits better than text, so you don't turn them on. If you want one, you can ask for it: "Show that as a table" or "Make that a checklist."

## How to use an interactive answer

{{< steps >}}
{{< step title="Ask a question that has a structured answer" >}}
Type it in the message box as you normally would. Questions about a bundle, a score, a set of lab values, a drug, or numbers you want compared often come back as a block. For example: *"Central line insertion checklist for the ICU."*
{{< /step >}}
{{< step title="Find the block in the reply" >}}
The block appears inside Lumen's answer, usually with a short explanation above or below it. A tool chip above the answer, such as **Calculation complete**, shows which lookup produced the data.
{{< /step >}}
{{< step title="Work with it" >}}
What you can do depends on the block:

- **Checklist:** click a row to tick it. The count and progress bar at the top update as you go.
- **Calculator:** the inputs Lumen used are listed as fields. Change one, then click **Recalculate**. Lumen sends a new message asking for the score with your values.
- **Chart:** hover or tap a bar or point to see its value. Use the chart's buttons to **View data as a table**, sort it, **Copy data as CSV**, **Download CSV** or **Save chart as image**.
{{< /step >}}
{{< step title="Ask a follow-up" >}}
Keep talking in the same chat: *"Add the maintenance bundle,"* *"What if the patient were 62?"* or *"Show it by month instead."* Lumen redraws the block with the change.
{{< /step >}}
{{< step title="Check the sources" >}}
Open the sources under the answer and confirm the content matches your organization's protocol before you use it with a patient.
{{< /step >}}
{{< /steps >}}

## What you'll see

Each example below shows the block as it appears in chat. Switch to **What Lumen wrote** to see the short description Lumen sends to draw it. You never have to write this yourself. It's shown so you can see that the block is built from structured data, not a picture.

### A checklist you can tick

{{< lumen-ui-example title="Central line insertion checklist" component="Checklist" category="clinical" >}}
{{< lui-code >}}
Checklist(title="Central line insertion — ICU",
  items=[
    {text:"Before insertion", section:true},
    {text:"Hand hygiene performed", checked:true},
    {text:"Chlorhexidine–alcohol skin prep, allowed to dry", checked:true},
    {text:"Maximal sterile barriers: cap, mask, sterile gown, sterile gloves, full-body drape", critical:true},
    {text:"Site chosen to avoid the femoral vein in adults where possible"},
    {text:"After insertion", section:true},
    {text:"Sterile dressing applied and dated"}
  ])
{{< /lui-code >}}
{{< lui-block title="Central line insertion — ICU" count="2 of 5" progress="40" >}}
{{< lui-rows >}}
{{< lui-row type="check" checked=true title="Hand hygiene performed" >}}
{{< lui-row type="check" checked=true title="Chlorhexidine–alcohol skin prep, allowed to dry" >}}
{{< lui-row type="check" title="Maximal sterile barriers" body="Cap, mask, sterile gown, sterile gloves, full-body drape. Critical." >}}
{{< lui-row type="check" title="Site chosen to avoid the femoral vein in adults where possible" >}}
{{< lui-row type="check" title="Sterile dressing applied and dated" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

### A calculator you can recalculate

{{< lumen-ui-example title="Pneumonia severity score" component="Calculator" category="clinical" >}}
{{< lui-code >}}
Calculator(name="CURB-65", score="3", severity="high",
  interpretation="Severe pneumonia. Manage in hospital; assess for ICU if the score is 4 or 5.",
  inputs={age:78, confusion:"no", bun_mg_dl:24, respiratory_rate:32, blood_pressure:"104/62"})
{{< /lui-code >}}
{{< lui-block title="CURB-65" sub="Clinical decision aid" >}}
{{< lui-rows >}}
{{< lui-row title="Age" value="78" >}}
{{< lui-row title="Confusion" value="No" >}}
{{< lui-row title="BUN" value="24" unit=" mg/dL" >}}
{{< lui-row title="Respiratory rate" value="32" unit=" /min" >}}
{{< lui-row title="Blood pressure" value="104/62" >}}
{{< /lui-rows >}}
{{< lui-actions "Recalculate with these values" >}}
{{< lui-score score="3" severity="High severity" tint="accent" >}}Severe pneumonia. Manage in hospital; assess for ICU if the score is 4 or 5.{{< /lui-score >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

Points here come from age 65 or older, BUN above 19 mg/dL and a respiratory rate of 30 or more. Blood pressure doesn't score, because the systolic is above 90 and the diastolic is above 60.

### A chart you can read and export

{{< lumen-ui-example title="Hand hygiene audit by unit" component="BarChart" category="charts" >}}
{{< lui-code >}}
BarChart(title="Hand hygiene compliance, October", unit="%",
  data=[{label:"Vascular Access", value:95}, {label:"ICU", value:92},
        {label:"Med-Surg", value:88}, {label:"Emergency", value:84}],
  sort="value desc")
{{< /lui-code >}}
{{< lui-block title="Hand hygiene compliance, October" sub="Harbor Valley Medical Center (fictional audit data)" >}}
{{< lui-bars data="Vascular Access:95,ICU:92,Med-Surg:88,Emergency:84" unit="%" max="100" color="green" label="Hand hygiene compliance by unit" >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

## Kinds of interactive answers

| You'll see | What it's for | Examples |
|---|---|---|
| **Clinical blocks** | Results from Lumen's clinical lookups, laid out for reading | Drug card, drug interactions, renal dosing, lab reference ranges, calculator, checklist, differential, clinical trials |
| **Tables and lists** | Comparing items side by side | Code lists, medication comparisons, timelines |
| **Charts** | Numbers you want to see at a glance | Bar, line, pie and scatter charts, gauges |
| **Forms** | Giving Lumen a few values in one go | Fields, dropdowns, sliders, toggles |
| **Status and notes** | Flagging what matters | Warnings, callouts, progress bars |

Developers and partners can see every block and its options on MagicAF, Intracav's technical reference:

{{< magicaf path="/docs/lumen-ui/components/clinical/" title="Clinical components" />}}
{{< magicaf path="/docs/lumen-ui/components/charts/" title="Chart components" />}}
{{< magicaf path="/docs/lumen-ui/components/data-display/" title="Tables and data display" />}}

## Tips

- **Ask for the shape you want.** "As a table," "as a checklist" or "chart this by unit" all work.
- **Change one input at a time** on a calculator, so you can see what moved the score.
- **Bigger results open in the panel.** Long documents, slide decks and spreadsheets open as files beside the chat instead. See [Reports and files](/chat/artifacts/).

## Limits and safety

- **Ticks aren't a record.** Checking items in a checklist helps you work through it on screen. Ticks aren't saved to a chart or an audit trail, and they may reset when you reload the chat. Document in your own system as usual.
- **Recalculate sends a new message.** The new score is a new answer. Read it again rather than assuming only the number changed.
- **A block is only as good as its inputs.** Check every input a calculator lists. If Lumen guessed a value you didn't give it, correct it.
- **Charts show what Lumen was given.** A chart drawn from numbers you pasted or uploaded is only as accurate as those numbers.

{{< callout type="safety" title="Check before you act" >}}
A checklist, score or drug card supports your clinical judgment. It doesn't replace your organization's protocols. Open the cited sources, and follow local policy where it differs.
{{< /callout >}}

## FAQ

{{< faq question="Do I need to know how to code to use these?" >}}
No. Lumen writes the description that draws the block. You click, tick and read. The code view in the examples above is there only to show how the block is built.
{{< /faq >}}
{{< faq question="Can I save or export an interactive answer?" >}}
Charts can be copied or downloaded as CSV, or saved as an image. For other blocks, copy the reply, or ask Lumen to turn the content into a document you can download.
{{< /faq >}}
{{< faq question="Why did I get text instead of a block?" >}}
Lumen uses a block only when it fits. If you want one, ask for it, for example "Show that as a checklist."
{{< /faq >}}
{{< faq question="What is Lumen UI?" >}}
It's the set of building blocks Lumen uses to draw interactive answers. Developers can read the technical reference on [MagicAF](https://magicaf.intracav.ai/docs/lumen-ui/).
{{< /faq >}}

## Next steps

{{< related "/chat/artifacts/" "/getting-started/run-a-calculator/" "/chat/sources/" "/developers/lumen-ui/" >}}
