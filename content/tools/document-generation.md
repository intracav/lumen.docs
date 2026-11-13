---
title: "Create documents, slides and spreadsheets"
navTitle: "Documents and files"
description: "Ask Lumen for a PDF, Word document, PowerPoint deck, Excel workbook, interactive HTML page or quiz. It builds the file and you can download it."
lead: "Describe the document you need. Lumen writes it, builds the file, and opens it beside the chat so you can review, edit and download it."
weight: 8
icon: file-text
keywords: ["AI PDF generator", "AI PowerPoint clinical", "AI Excel workbook", "patient handout generator", "clinical quiz generator"]
glance:
  what: "Built-in tools that turn Lumen's work into files: PDF, Word, PowerPoint, Excel, interactive HTML pages, editable documents and quizzes."
  who: "Clinicians, educators, managers and anyone who needs a finished document, not only an answer."
  why: "To go from a question to a handout, slide deck or tracker you can share, in one conversation."
  needs: "A Lumen account on any plan. About 1 to 3 minutes per file."
  result: "A file card in the chat that opens in a side panel and downloads in its own format."
---

Sometimes an answer isn't enough: you need slides for grand rounds, a handout, or a spreadsheet to track a unit's numbers. Ask for the file and Lumen creates it as an *artifact*, a file attached to the chat that you can open, change and download. You can ask for changes in plain words, and Lumen edits the existing file instead of starting again.

## Before you start

- Document tools work on every plan.
- Have the content or the source ready: paste notes, attach a document, or ask Lumen to research the topic first.
- Say who the document is for and how long it should be.

## The tools

| Tool (as shown in Explore) | What it makes | When finished, the chip reads |
|---|---|---|
| **Generate PDF** | A styled, multi-page PDF. | **PDF ready** |
| Word document | A styled Word (.docx) file. | **Word document ready** |
| **Create Presentation** | A PowerPoint deck with headings, bullets and speaker notes. | **Presentation ready** |
| **Create Spreadsheet** | An Excel workbook for schedules, quality reports and tracking. | **Spreadsheet ready** |
| **Interactive Dashboard** | A self-contained HTML page with charts, tables or calculators, shown in the app. | **HTML artifact ready** |
| Editable document | A living document, such as a memo or handout, that you and Lumen keep editing. | **Document ready** |
| **Generate a Quiz** | Multiple-choice questions with answer explanations. | **Quiz ready** |

Lumen can also change a file it already made, such as editing one slide, a few cells or a paragraph. The chip then reads, for example, **Presentation updated**.

## How to create a document

{{< steps >}}
{{< step title="Ask for the file" >}}For example: "Make a one-page PDF handout for a patient starting metformin, at a 6th-grade reading level."{{< /step >}}
{{< step title="Open it" >}}When the file is ready, a card appears in the answer. Click it to open the file in the side panel.{{< /step >}}
{{< step title="Ask for changes" >}}Type what to change: "Shorter", "Add a section on low blood sugar", "Use our unit name, Harbor Valley Med-Surg".{{< /step >}}
{{< step title="Check and download" >}}Read the whole file, check every clinical statement against its source, then download it.{{< /step >}}
{{< /steps >}}

To browse these tools with examples, open {{< ui-path "Explore" "Built-in tools" >}} and choose **Write & make files**.

## What you'll see

{{< screenshot src="chat-artifact" alt="A Lumen answer with a PDF file card and the side panel open" caption="Files appear as cards in the chat and open in a side panel." url="lumen.intracav.ai" >}}
{{< chat-demo title="Metformin handout" caption="Illustration. Always review a handout before giving it to a patient." >}}
{{< user >}}Make a one-page PDF handout for a patient starting metformin. Plain language.{{< /user >}}
{{< lumen tools="FDA drug data retrieved, PDF ready" sources="1" >}}
Here's the handout. It covers how to take metformin with meals, common stomach side effects that often ease after the first few weeks, and when to call the clinic {{< cite 1 >}}.

{{< artifact type="pdf" title="Starting metformin: what to know" sub="PDF · 1 page" >}}
{{< follow-ups "Translate to Spanish|Add a section on kidney tests|Make the text larger" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Tips

- **Give the audience.** "For new graduate nurses" and "for a patient's family" produce very different documents.
- **Start from your own material.** Attach your protocol or notes and ask Lumen to turn them into slides.
- **Ask for edits, not a rebuild.** Changing one section keeps the rest of the file as it was.

## Limits and safety

{{< callout type="safety" title="You are the author" >}}
Lumen drafts the document; you are responsible for what it says. Check every clinical statement against its source and your organization's policies before you share it. Have patient handouts reviewed under your usual process.
{{< /callout >}}

- Lumen measures reading level only when the Patient Education specialist makes a handout. A plain request for "simple language" isn't measured.
- Files use Lumen's built-in design.

## FAQ

{{< faq question="Which formats can I download?" >}}
PDF, Word (.docx), PowerPoint (.pptx), Excel (.xlsx) and HTML.
{{< /faq >}}
{{< faq question="Where are my files kept?" >}}
In the chat where they were made. Open the chat again to find them. See [Reports and files](/chat/artifacts/).
{{< /faq >}}
{{< faq question="Can Lumen email the document?" >}}
On Pro and above, Lumen can send an email, but it waits for your approval and sends exactly what you approved. See [Approvals](/skills-and-specialists/approvals/).
{{< /faq >}}

## Next steps

{{< related "/chat/artifacts/" "/guides/patient-handout/" "/guides/grand-rounds-slides/" "/skills-and-specialists/skills/" >}}
