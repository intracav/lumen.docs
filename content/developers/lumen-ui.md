---
title: "Lumen UI: the format behind interactive answers"
navTitle: "Lumen UI"
description: "Lumen UI is the format Lumen writes to draw checklists, tables, charts and clinical cards in answers. The DSL, the JSON form and the categories."
lead: "When Lumen answers with a checklist, a chart or a drug card instead of plain text, it is writing Lumen UI. This page explains the format, the eight component categories, and where the full reference lives."
weight: 4
icon: component
who: "developers and partners"
glance:
  what: "Lumen UI is a small language (and an equivalent JSON format) that describes interface components, such as tables, charts, checklists and clinical cards. Lumen writes it, and the Lumen app draws it as live, interactive UI."
  who: "Developers, partner engineers and technical evaluators who want to understand or reuse the format behind Lumen's interactive answers."
  why: "Answers that arrive as structured components are easier to check and act on than paragraphs, and the same format works across chat, specialists and workflows."
  needs: "No Lumen plan is needed to read the format. The full technical reference, live examples and integration guide are on MagicAF."
  result: "You can read a Lumen UI block, write one by hand, and know where to go to render it in your own product."
---

Most AI answers are paragraphs. Many clinical answers aren't: a pre-procedure checklist, a renal dose table or a risk score is easier to check when it looks like one. **Lumen UI** is the component format Lumen uses for those answers. Lumen writes a short description of the components it wants, and the app turns that description into real, interactive interface: rows you can tick, charts you can hover, tables you can sort.

{{< magicaf path="/docs/lumen-ui/" title="Lumen UI on MagicAF" >}}The full technical reference: introduction, quick start, every component with live examples, integration and the API reference.{{< /magicaf >}}

## Before you start

- **To read the format,** you need nothing. Every example on this page is self-contained.
- **To see it in Lumen,** ask a question that has a structured answer, such as "Make me a central line insertion checklist", in any Lumen chat. See [Interactive answers](/chat/interactive-answers/) for the reader-facing view.
- **To render it in your own product,** follow the [MagicAF quick start](https://magicaf.intracav.ai/docs/lumen-ui/quick-start/). This page explains concepts; it doesn't replace that guide.

## How it works

Lumen UI has three parts: a **format** that describes components, a **catalog** of components the format can name, and a **renderer** that draws them.

{{< flow >}}
{{< flow-node kicker="Lumen writes" title="A component description" icon="code" tint="blue" >}}In the DSL or JSON, inside an answer or as a tool result.{{< /flow-node >}}
{{< flow-node kicker="The client parses" title="A component tree" icon="layers" tint="plum" >}}Partial input is repaired while it streams in.{{< /flow-node >}}
{{< flow-node kicker="You see" title="Live, interactive UI" icon="component" tint="green" >}}Checklists, tables, charts and clinical cards.{{< /flow-node >}}
{{< /flow >}}

Lumen produces Lumen UI in two ways:

1. **Inline in an answer.** Lumen writes a `<lumen>` block in its reply, and the app draws it in place.
2. **Through the `lumen_ui` tool.** Lumen calls a tool named `lumen_ui` with a component tree (a root `component`, its `props`, and nested `children`). The tool result is drawn as a panel in the conversation. Lumen uses it for new compositions, such as a dashboard or a side-by-side comparison, rather than to re-display data another tool already returned.

Many of Lumen's own clinical tools, such as drug lookups, lab reference ranges and FDA recall searches, return their results already wrapped as Lumen UI. That's why a drug lookup shows a drug card rather than a block of text.

### The DSL

The DSL is function-call style. Component names are PascalCase, properties are `key=value`, and children are nested inside the parentheses.

```text
Card(title="Lab results",
  Table(
    columns=[{key:"test", label:"Test"}, {key:"value", label:"Value"}],
    rows=[{test:"WBC", value:"7.2"}, {test:"Hgb", value:"14.1"}]
  )
)
```

- Strings take single or double quotes. Triple quotes (`"""`) hold multi-line text.
- Numbers, booleans (`true`, `false`), arrays (`[...]`) and objects (`{...}`) work as you'd expect.
- `//` starts a comment.
- A variable holds a component for reuse: `$header = Card(title="Dashboard")`.
- Names are stored in snake_case internally, so `BarChart` becomes `bar_chart` and `DrugCard` becomes `drug_card`.

### The JSON form

Every DSL component has a JSON equivalent. `type` is required and uses the snake_case name. Properties sit at the top level or under `props`, and nested components go in `children`.

```json
{
  "type": "card",
  "title": "Lab results",
  "children": [
    {
      "type": "table",
      "columns": [{"key": "test", "label": "Test"}, {"key": "value", "label": "Value"}],
      "rows": [{"test": "WBC", "value": "7.2"}]
    }
  ]
}
```

The parser detects the format on its own: input that starts with `{` or `[` is read as JSON, and anything else as DSL. Optional keys include `slots` (named children such as a header and footer), `text` (raw text for a leaf) and `id` (a stable key so a component keeps its place while an answer streams).

### The envelope

When a server-side tool returns Lumen UI, it wraps the result in an **envelope**: a JSON object with a `__lumen__` key that names the component `type` and its `props`, plus the `raw` data. The client recognizes the envelope and draws the component. The model is told not to repeat the same data as prose, so you don't see it twice.

```json
{"__lumen__": {"type": "drug_card", "props": {"name": "Lisinopril", "rxcui": "104377"}}, "raw": "{…}"}
```

{{< magicaf path="/docs/lumen-ui/core-concepts/" title="Core concepts on MagicAF" >}}Parsing, the component tree, streaming recovery, actions and the envelope protocol in depth.{{< /magicaf >}}

## The eight component categories

The catalog is organized in eight categories. The names below are real component names you can use in the DSL. Each category links to its MagicAF page, which shows every component with its properties and a live example.

| Category | What it's for | Example components |
|---|---|---|
| **Layout** | Arranging other components | `Card`, `Stack`, `Grid`, `Tabs`, `Accordion`, `Steps`, `Section`, `SplitView` |
| **Data display** | Showing values and text | `Table`, `KeyValue`, `Stat`, `Markdown`, `CodeBlock`, `ListView`, `Timeline` |
| **Charts** | Interactive charts | `Chart`, `Dashboard`, `Metrics`, `BarChart`, `LineChart`, `PieChart`, `Gauge`, `Sparkline` |
| **Forms** | Collecting input | `Input`, `Select`, `Checkbox`, `RadioGroup`, `Slider`, `DatePicker`, `Toggle`, `TextArea` |
| **Clinical** | Clinical decision support | `Checklist`, `Calculator`, `DrugCard`, `DrugInteractions`, `RenalDose`, `LabRanges`, `TriageCard`, `Guidelines` |
| **Media** | Images and files | `Image`, `ImageGallery`, `FileCard`, `PdfViewer` |
| **Feedback** | Status and alerts | `Alert`, `Callout`, `Badge`, `Progress`, `EmptyState` |
| **AI** | The parts of an AI turn | `ToolCall`, `ToolResult`, `ThinkingBlock`, `FollowUp`, `SourceCard` |

### Layout

Layout components hold other components. `Card` is the usual outer container; `Grid` and `Stack` arrange children; `Tabs` and `Accordion` fold them away.

{{< lumen-ui-example title="A card with key facts and a warning" component="Card" category="layout" >}}
{{< lui-code >}}
Card(title="SL-4 securement device",
  KeyValue(items=[{key:"Catheter sizes", value:"3–7 Fr"}, {key:"Change interval", value:"Per the IFU"}]),
  Callout(variant="warning", message="Check the IFU revision on file before training staff.")
)
{{< /lui-code >}}
{{< lui-block title="SL-4 securement device" >}}
{{< lui-kv "Catheter sizes=3–7 Fr;Change interval=Per the IFU" >}}
{{< lui-callout variant="warning" >}}Check the IFU revision on file before training staff.{{< /lui-callout >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

{{< magicaf path="/docs/lumen-ui/components/layout/" title="Layout components on MagicAF" />}}

### Data display

`Stat` shows a single number with a label, unit and trend. `KeyValue`, `Table` and `Timeline` show structured facts.

{{< lumen-ui-example title="Two stats" component="Stat" category="data-display" >}}
{{< lui-code >}}
Grid(columns=2,
  Stat(label="Heart rate", value="72", unit="bpm", trend="down", change="6 since yesterday"),
  Stat(label="eGFR", value="48", unit="mL/min", trend="up", change="3")
)
{{< /lui-code >}}
{{< lui-stats >}}
{{< lui-stat label="Heart rate" value="72" unit="bpm" change="▼ 6 since yesterday" trend="up" >}}
{{< lui-stat label="eGFR" value="48" unit="mL/min" change="▲ 3" trend="down" >}}
{{< /lui-stats >}}
{{< /lumen-ui-example >}}

{{< magicaf path="/docs/lumen-ui/components/data-display/" title="Data display components on MagicAF" />}}

### Charts

Charts are interactive by default: tooltips, legend toggles, zoom, a table view, and CSV or PNG export. `Chart` is the general form (`kind` can be line, area, bar, scatter, pie, heatmap, funnel and more). Several charts over one dataset go in a `Dashboard` so their filters stay linked.

{{< lumen-ui-example title="A bar chart" component="BarChart" category="charts" >}}
{{< lui-code >}}
BarChart(title="Prior authorization status",
  data=[{label:"Pending", value:12}, {label:"Approved", value:18}, {label:"Denied", value:3}])
{{< /lui-code >}}
{{< lui-block title="Prior authorization status" >}}
{{< lui-bars data="Pending:12,Approved:18,Denied:3" label="Prior authorization status" color="green" >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

{{< magicaf path="/docs/lumen-ui/components/charts/" title="Chart components on MagicAF" />}}

### Forms

Form components collect input. When someone submits, the component sends a `submitForm` action with the field values to the host app, which decides what to do with them.

{{< lumen-ui-example title="A single choice" component="RadioGroup" category="forms" >}}
{{< lui-code >}}
RadioGroup(label="Which device were you using?", id="device",
  options=[{value:"sl4", label:"SL-4 securement device"}, {value:"other", label:"Another device"}])
{{< /lui-code >}}
{{< lui-block title="Which device were you using?" >}}
{{< lui-rows >}}
{{< lui-row type="radio" title="SL-4 securement device" >}}
{{< lui-row type="radio" title="Another device" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

{{< magicaf path="/docs/lumen-ui/components/forms/" title="Form components on MagicAF" />}}

### Clinical

Clinical components are specific to healthcare: checklists, calculator results, drug and interaction cards, renal dosing, lab ranges, triage, guidelines, coverage policies and trial listings. Most are produced by Lumen's own clinical tools.

{{< lumen-ui-example title="A checklist" component="Checklist" category="clinical" >}}
{{< lui-code >}}
Checklist(title="Before you secure the line",
  items=[{text:"Confirm catheter size against the IFU", checked:true},
         {text:"Skin prepped and dry", checked:true},
         {text:"Device placed per the IFU figure"},
         {text:"Dressing applied and dated"}])
{{< /lui-code >}}
{{< lui-block title="Before you secure the line" count="2 of 4" progress="50" >}}
{{< lui-rows >}}
{{< lui-row type="check" checked=true title="Confirm catheter size against the IFU" >}}
{{< lui-row type="check" checked=true title="Skin prepped and dry" >}}
{{< lui-row type="check" title="Device placed per the IFU figure" >}}
{{< lui-row type="check" title="Dressing applied and dated" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

{{< lumen-ui-example title="A calculator result" component="Calculator" category="clinical" >}}
{{< lui-code >}}
Calculator(name="CHA₂DS₂-VASc", score=4, severity="moderate",
  interpretation="Anticoagulation is generally recommended. Discuss bleeding risk.",
  inputs=[{label:"Age 65–74", points:1}, {label:"Hypertension", points:1},
          {label:"Female sex", points:1}, {label:"Diabetes", points:1}])
{{< /lui-code >}}
{{< lui-block title="CHA₂DS₂-VASc" >}}
{{< lui-score score="4" severity="Moderate–high risk" >}}Anticoagulation is generally recommended. Discuss bleeding risk.{{< /lui-score >}}
{{< lui-rows >}}
{{< lui-row title="Age 65–74" value="+1" >}}
{{< lui-row title="Hypertension" value="+1" >}}
{{< lui-row title="Female sex" value="+1" >}}
{{< lui-row title="Diabetes" value="+1" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

{{< magicaf path="/docs/lumen-ui/components/clinical/" title="Clinical components on MagicAF" />}}

### Media

Media components show images, galleries, file cards and PDFs. `PdfViewer` takes a `url`, an optional `title` and `pages`.

{{< magicaf path="/docs/lumen-ui/components/media/" title="Media components on MagicAF" />}}

### Feedback

Feedback components show status. `Callout` and `Alert` take a `variant` of `info`, `warning`, `error` or `success`.

{{< lumen-ui-example title="A callout" component="Callout" category="feedback" >}}
{{< lui-code >}}
Callout(variant="warning", title="Renal dosing", message="Reduce the dose when CrCl is below 30 mL/min.")
{{< /lui-code >}}
{{< lui-callout variant="warning" title="Renal dosing" >}}Reduce the dose when CrCl is below 30 mL/min.{{< /lui-callout >}}
{{< /lumen-ui-example >}}

{{< magicaf path="/docs/lumen-ui/components/feedback/" title="Feedback components on MagicAF" />}}

### AI

AI components draw the parts of an AI turn: a tool call and its result, a reasoning block, follow-up suggestions and a source card.

```text
FollowUp(suggestions=["Make it shorter", "Add the IFU page numbers", "Turn it into a handout"])
```

{{< magicaf path="/docs/lumen-ui/components/ai/" title="AI components on MagicAF" />}}

## What you'll see

In the Lumen app, a Lumen UI answer appears inside the conversation, in the same place as text. Interactive parts work in place: you can tick checklist rows, hover chart points and switch tabs.

{{< screenshot src="lumen-ui-inline" alt="A Lumen answer containing an interactive checklist drawn with Lumen UI" caption="A checklist drawn with Lumen UI inside a chat answer." url="lumen.intracav.ai" >}}
{{< chat-demo title="Securement checklist" caption="Illustration with fictional content. Check every step against the device's IFU." >}}
{{< user >}}Make me a short checklist for securing a PICC with the SL-4 securement device.{{< /user >}}
{{< lumen thought="3" tools="Search documents" sources="1" >}}
Here's a checklist drawn from the SL-4 instructions for use {{< cite 1 >}}. Confirm each step against the IFU revision your facility uses.

{{< lui-block title="Before you secure the line" count="0 of 4" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Confirm catheter size against the IFU" >}}
{{< lui-row type="check" title="Skin prepped and dry" >}}
{{< lui-row type="check" title="Device placed per the IFU figure" >}}
{{< lui-row type="check" title="Dressing applied and dated" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Good to know

- **Streaming is handled.** While an answer is still arriving, the JSON parser closes unfinished strings, brackets and braces, and marks the result as partial, so components appear as they stream instead of after.
- **One bad component doesn't break the answer.** Each component is drawn inside its own error boundary. If one fails, a fallback card takes its place and the rest of the answer still renders.
- **Unknown names don't crash.** A component name the renderer doesn't know is shown as a plain card with its type name and text.
- **Actions go to the host.** Components can send actions, such as sending a follow-up message, opening a link, copying text, submitting a form or toggling a checkbox. The host app decides what each action does.
- **The catalog travels with the request.** The Lumen app sends its component catalog with each chat request, so Lumen writes only components the app can draw.

## Limits

- **Lumen UI is presentation, not proof.** A neat table can still contain a wrong value. Clinical content in a component comes from the same answer, with the same citations, and needs the same checking.
- **Form input goes to the host app.** A Lumen UI form doesn't store or send data on its own. What happens on submit is up to the app that renders it.
- **This page isn't the full reference.** Property lists, every component, theming and the renderer API are on [MagicAF](https://magicaf.intracav.ai/docs/lumen-ui/api-reference/). If this page and MagicAF ever disagree on a property name, MagicAF's reference is the one to follow.

{{< callout type="safety" title="Check the sources behind a component" >}}
A checklist or dosing table drawn by Lumen is a draft for a clinician to check. Open the cited sources, compare them with your organization's policies and the device's instructions for use, and use your professional judgment before acting.
{{< /callout >}}

## FAQ

{{< faq question="Is Lumen UI the same as HTML?" >}}
No. Lumen UI describes components by name and properties, such as `Checklist(items=[…])`, and a renderer draws them natively. There's no HTML, CSS or script in a Lumen UI block, which keeps it safe to render content that a model wrote.
{{< /faq >}}
{{< faq question="Do I have to use the DSL, or can I send JSON?" >}}
Either. The parser accepts both and detects which one it's reading. The DSL is shorter for people and models to write. JSON is easier to generate from code.
{{< /faq >}}
{{< faq question="Where do I find every property of every component?" >}}
On MagicAF: start with the [component pages](https://magicaf.intracav.ai/docs/lumen-ui/components/layout/) for each category, and the [API reference](https://magicaf.intracav.ai/docs/lumen-ui/api-reference/) for the renderer itself.
{{< /faq >}}
{{< faq question="Can I render Lumen UI in my own product?" >}}
The renderer, theming and integration steps are documented on MagicAF. Start with the [integration guide](https://magicaf.intracav.ai/docs/lumen-ui/integration/) and the [advanced topics](https://magicaf.intracav.ai/docs/lumen-ui/advanced/) for streaming and custom components.
{{< /faq >}}

## Next steps

{{< magicaf path="/docs/lumen-ui/introduction/" title="Introduction to Lumen UI on MagicAF" />}}

{{< related "/chat/interactive-answers/" "/developers/api/" "/developers/mcp/" "/developers/" >}}
