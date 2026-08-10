---
title: "Creating Documents"
description: "Ask Lumen to draft a PDF report, build a slide deck, create a spreadsheet, or write a quiz — and download it immediately."
weight: 8
---

Need slides for grand rounds by tomorrow? A patient education handout? A spreadsheet tracking your department's metrics? Just tell Lumen what you need, and it creates a professional, ready-to-edit document you can download right away.

## Available Tools

<div class="tool-grid">

{{< tool-card name="PDF Creation" icon="&#128196;" color="var(--accent)" desc="Generates formatted PDF documents — patient summaries, protocol references, research summaries, and more. Download directly from the artifact panel." example="\"Create a PDF summary of our discussion about this patient's treatment plan\"" badge="Documents" >}}

{{< tool-card name="Word Documents (DOCX)" icon="&#128209;" color="var(--smoky-blue)" desc="Generates Word documents you can keep editing in Microsoft Word or Google Docs — letters, policies, handouts, and reports." example="\"Draft a prior authorization appeal letter as a Word document\"" badge="Documents" >}}

{{< tool-card name="Living Documents" icon="&#128221;" color="var(--palace-green)" desc="Creates an editable prose document that lives in the conversation — Lumen can then revise individual paragraphs on request instead of regenerating the whole file. Export to PDF or DOCX when it's ready." example="\"Start a draft of our new sepsis escalation policy we can refine together\"" badge="Editable" >}}

{{< tool-card name="Presentations (PPTX)" icon="&#128202;" color="#D69E2E" desc="Builds PowerPoint slide decks with professional formatting. Great for grand rounds, patient education, and team presentations." example="\"Create a 10-slide presentation on the latest sepsis management guidelines for our grand rounds\"" badge="Documents" >}}

{{< tool-card name="Spreadsheets (Excel)" icon="&#128203;" color="#217346" desc="Generates Excel workbooks with formatted data tables, calculations, and organized sheets. Useful for tracking, reporting, and data organization." example="\"Create a spreadsheet tracking our department's antibiotic stewardship metrics\"" badge="Documents" >}}

{{< tool-card name="Interactive HTML" icon="&#127760;" color="var(--smoky-blue)" desc="Creates self-contained interactive HTML documents — calculators, decision trees, patient education materials with interactive elements." example="\"Build an interactive patient education page about diabetes self-management\"" badge="Interactive" >}}

{{< tool-card name="CME Quiz" icon="&#127891;" color="var(--smoky-blue-dk)" desc="Generates board-style multiple-choice questions with detailed rationales. Perfect for self-study, teaching, and exam preparation." example="\"Create a 5-question quiz on atrial fibrillation management\"" badge="Education" >}}

{{< tool-card name="Saved Artifacts" icon="&#128190;" color="var(--palace-green)" desc="Saves substantial deliverables — documents, tables, checklists, interactive views — to your library so they survive the conversation and can be reopened, versioned, and shared." example="\"Save this dosing table to my library so I can find it later\"" badge="Library" >}}

{{< tool-card name="Scientific Animations & Explainer Videos" icon="&#127916;" color="var(--accent)" desc="Renders scientific animations (Manim) and branded explainer videos (Remotion) — turn a mechanism of action or patient-education script into a short video." example="\"Create a short animation explaining how ACE inhibitors lower blood pressure\"" badge="Pro" >}}

</div>

Tools marked **Pro** are available on paid plans — see [Plans](/plans/).

## Presentation Example

<div class="chat-mockup" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">Create a presentation on COPD management guidelines for our nursing staff education session</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Created presentation
          </div>
          <div class="mock-tool-detail">title: "COPD Management Guidelines" &middot; 8 slides</div>
        </div>
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--dark-text);">
          I've created an 8-slide presentation covering GOLD guidelines, pharmacotherapy stepwise approach, and acute exacerbation management.
        </p>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: rgba(214,158,46,0.15); color: #D69E2E;">&#128202;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">COPD Management Guidelines</div>
            <div class="mock-artifact-type">PowerPoint &middot; 8 slides</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Tips for Better Documents

{{< tip title="Be specific about format and audience" >}}
Tell Lumen who the document is for and how it will be used. A patient education handout should look very different from a grand rounds presentation.
{{< /tip >}}

- **Specify the audience** — "for nursing staff", "for patient education", "for the board meeting"
- **Set the length** — "a 5-slide presentation", "a 2-page summary"
- **Define the structure** — "include an introduction, key findings, and recommendations"
- **Request visuals** — "include tables comparing treatment options"

## Downloading Documents

All generated documents can be downloaded from the artifact panel:

1. Click the **artifact card** to open the side panel
2. Review the content in the preview
3. Click the **Download** button at the bottom

Documents are generated in standard formats (PDF, PPTX, XLSX) compatible with all major applications.

{{< callout type="info" >}}
**Documents are saved with your chat.** You can return to any conversation later and re-download generated documents from the artifact cards.
{{< /callout >}}
