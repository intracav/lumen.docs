---
title: "Tool index"
description: "Every built-in tool Lumen can use, grouped by the job it does, with what each does in plain words and whether it needs Pro."
lead: "You never call a tool by name. Lumen picks them for you. When you want to know exactly what it can reach for, this is the list."
weight: 10
icon: list
keywords: ["Lumen tools list", "clinical AI tools", "medical AI tool index"]
glance:
  what: "A plain-language list of the built-in tools Lumen uses during chats and specialist work, grouped by job."
  who: "Anyone evaluating or using Lumen, including clinicians, hospital IT and compliance, and device makers."
  why: "To see what Lumen looks up live, and which tools need a paid plan, before you rely on it."
  needs: "Nothing. Most tools work on every plan; those marked Pro need Pro or above."
  result: "A clear picture of what Lumen can look up, make and do."
---

A *tool* is a lookup or action Lumen runs while it answers. Lumen chooses tools on its own and shows each one as a chip in the answer, such as **Searched PubMed**. The names below are the ones you see in **Explore** and in those chips. "Free" means every plan, including Free. "Pro" means Pro or above; on a lower plan Lumen answers without that tool.

## Before you start

Nothing to set up for most tools. A few need a connection first (your EHR, or your own Notion, Microsoft Teams, Zoom or Discord account), and these say so below. To browse the clinical tools with examples, open {{< ui-path "Explore" "Built-in tools" >}}.

## How to use a tool

{{< steps >}}
{{< step title="Ask your question" >}}Describe what you need in chat. You don't need to name the tool.{{< /step >}}
{{< step title="Watch the chips" >}}Each tool Lumen runs appears as a chip in the answer.{{< /step >}}
{{< step title="Check the sources" >}}Open the cited sources and results before you rely on them.{{< /step >}}
{{< /steps >}}

## Answer a clinical question

| Tool | What it does | Plan |
|---|---|---|
| Clinical Checklists | Steps through evidence-based protocols, such as a sepsis bundle. | Free |
| Triage Assessment | Scores a patient in one of 9 triage systems (ESI, MTS, CTAS and others). | Free |
| Differential Diagnosis | Builds a ranked differential with literature and a suggested workup. | Free |
| Antimicrobial Selector | Suggests antibiotics with dosing and allergy-safe alternatives. | Free |
| Clinical Guidelines | Retrieves USPSTF recommendations and practice guidelines. | Free |
| Clinical Recommendations | Writes evidence-graded recommendations for treatment or follow-up. | Free |
| Clinical Calculator | Runs 28 clinical calculators, such as eGFR, CHA₂DS₂-VASc and MELD. | Free |
| Lab Reference Ranges | Returns reference intervals for common lab tests. | Free |

More: [Protocols and decisions](/tools/protocols-decisions/), [Calculators](/tools/calculators/).

## Check medications

| Tool | What it does | Plan |
|---|---|---|
| Check Drug Interactions | Screens drugs against FDA label interaction and warning sections. | Free |
| Renal Dose Check | Calculates creatinine clearance and quotes the label's renal adjustment. | Free |
| IV Drip Calculator | Converts an infusion order into mL/hr. | Free |
| Identify a Drug (RxNorm) | Normalizes a drug name and lists its ingredients. | Free |
| FDA Drug Label | Reads official FDA prescribing information. | Free |
| FDA Adverse Events | Searches FAERS reports for a drug. | Free |
| FDA Drug Recalls | Searches FDA recalls and market withdrawals. | Free |
| Allergy Cross-Reactivity | Lists drugs to avoid and safe alternatives for an allergy. | Free |
| FDA device reports | Searches FDA medical device adverse event reports (MAUDE). | Free |

More: [Medications](/tools/medications/).

## Find evidence

| Tool | What it does | Plan |
|---|---|---|
| Search PubMed | Finds peer-reviewed articles and reads abstracts. | Free |
| medRxiv search | Finds preprints (not peer reviewed). | Free |
| Clinical Trials | Searches ClinicalTrials.gov. | Pro |
| Web search | Searches the web for titles, links and snippets. | Free |
| Fetch a page | Reads one web page Lumen or you name. | Free |
| Deep web research | Reads several pages in depth, maps or crawls a site, or extracts structured data from pages. | Pro |
| Video and audio transcripts | Gets the spoken words of a video or recording as text. | Free |

More: [Research and evidence](/tools/literature-research/), [Where Lumen looks](/tools/search-sources/).

## Code and bill

| Tool | What it does | Plan |
|---|---|---|
| Find Diagnosis Code (ICD-10) | Finds the most specific ICD-10-CM code. | Free |
| Find Procedure Code (CPT) | Looks up CPT codes. | Free |
| HCPCS Code Lookup | Finds HCPCS Level II codes. | Free |
| NCCI edit check | Checks whether two codes can be billed together under Medicare. | Free |
| Medicare fee lookup | Looks up Medicare Physician Fee Schedule pricing. | Free |
| CMS Coverage Lookup | Checks Medicare NCDs and LCDs. | Free |
| Find a Provider (NPI) | Looks up a clinician in the NPI registry. | Free |

More: [Coding and labs](/tools/coding-labs/).

## Write and make files

| Tool | What it does | Plan |
|---|---|---|
| Write a Clinical Note | Drafts SOAP notes, H&Ps, discharge summaries and letters. | Free |
| Generate PDF | Builds a styled PDF. | Free |
| Word document | Builds a Word (.docx) file. | Free |
| Create Presentation | Builds a PowerPoint deck. | Free |
| Create Spreadsheet | Builds an Excel workbook. | Free |
| Interactive Dashboard | Builds an interactive HTML page with charts or calculators. | Free |
| Editable document | Creates a living document you and Lumen keep editing. | Free |
| Edit a file | Changes part of a file Lumen made: a slide, cells or a section. | Free |
| Interactive answers | Draws checklists, tables, charts and drug cards inside the answer. | Free |
| Python analysis | Runs Python code in an isolated sandbox for data analysis. | Free |
| Scientific animation and clinical video | Renders teaching animations and short explainer videos. | Pro |

More: [Documents and files](/tools/document-generation/), [Interactive answers](/chat/interactive-answers/).

## Teach and educate

| Tool | What it does | Plan |
|---|---|---|
| Generate a Quiz | Writes multiple-choice questions with explanations. | Free |
| Anatomy schematic | Draws a vascular anatomy map for catheter placement reasoning (PICC, midline, central lines). | Free |
| Organ model | Shows a 3D organ to explain anatomy to a patient or learner. Not a clinical reference. | Free |
| Vascular access simulation | Simulates catheter placement over a standard upper-limb anatomy. | Free |
| Ultrasound viewer | Opens your own uploaded ultrasound images and clips. | Free |

## Plan, schedule and records

| Tool | What it does | Plan |
|---|---|---|
| Patient Record (FHIR) | Reads a patient's EHR record. Needs your organization's EHR connection. | Pro |
| Check Scheduling | Checks availability over FHIR. Needs an EHR connection. | Pro |
| Staff schedule | Builds and checks staff schedules from rules you give it. | Free |
| Roster | Keeps a living staff roster. Offers and decisions that reach staff wait for approval. | Pro |
| Run a workflow | Runs one of your saved workflows. | Pro |
| Health data | Reads your own synced health data (for example from Apple Health or Oura) when you've connected it. | Free |

## Protect privacy and send

| Tool | What it does | Plan |
|---|---|---|
| De-identify PHI | Replaces identifiers in text with consistent stand-ins. | Pro |
| Re-identify PHI | Restores the originals from the same session. | Pro |
| Send email | Sends an email after you approve the exact message. | Pro |

More: [Privacy tools](/tools/privacy/), [Approvals](/skills-and-specialists/approvals/).

## Your own accounts

These work only after you connect your own account. Reading runs without asking. Anything that writes or posts waits for your approval.

| Tool | Reads | Writes (approval first) |
|---|---|---|
| Notion | Pages you shared with Lumen. | Create, add to or update a page. |
| Microsoft Teams | Your calendar and chats. | Schedule, start or cancel a meeting; send a chat or channel message. |
| Zoom | Your meetings. | Schedule, start, update or cancel a meeting. |
| Discord | Your servers. | Post a message. |

## Memory and history

| Tool | What it does | Plan |
|---|---|---|
| Memory | Recalls and saves what Lumen knows about you and your team. | Free |
| Chat history | Finds something in your own past chats. | Free |

## Used by specialists

Some tools only appear when a specialist is working. Each keeps a record the server checks, so numbers come from the record rather than the AI's memory.

| Tool | What it does |
|---|---|
| Deliverable (**Saved and checked**) | Saves a specialist's finished work as a version and checks each quoted source. See [Verified results](/skills-and-specialists/verified-results/). |
| Safety record | Keeps a device complaint or adverse event record with its reporting clocks (Safety Intake). |
| Trial | Keeps a device pilot's setup, coverage and tasks (Clinical Trial Manager). |
| Product trial record | Keeps a manufacturer's hospital product evaluations (Product Trial Manager). |
| Specialist dispatch (**Specialists updated**) | Lets one specialist hand parts of a job to others and follow their progress. |
| Studio | Works on a Lumen Studio video project. Studio is being rolled out and isn't on for everyone. |

Lumen also has behind-the-scenes helpers, such as reading the current time, converting time zones, counting business days and loading extra tools or skills when a conversation needs them.

## Limits and safety

{{< callout type="safety" title="A tool result is a starting point" >}}
Tools look things up live, but Lumen can still choose the wrong tool, misread a result or miss something. Open the cited sources and use your judgment before acting.
{{< /callout >}}

- Tool availability depends on your plan and, for some tools, a connection your organization or you set up.
- Lumen picks the model by plan. The tools are the same on Pro, Plus and Max.

## FAQ

{{< faq question="Do I have to choose which tool to use?" >}}
No. Ask your question and Lumen picks. You can mention a tool by name if you want a specific one.
{{< /faq >}}
{{< faq question="Why does a tool say Pro plan in Explore?" >}}
That tool needs Pro or above. On your current plan, Lumen answers without it.
{{< /faq >}}
{{< faq question="Are Plus and Max tools different from Pro?" >}}
No. Paid plans have the same tools. Some specialists and team features need Plus or Max. See [Plans](/plans/).
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/explore/" "/tools/medications/" "/tools/literature-research/" "/plans/" >}}
