---
title: "Reports & Files"
description: "Lumen can create documents, reports, and interactive tools right in the chat. Here's how they work."
weight: 4
---

Sometimes a text answer isn't enough. When you ask about drug interactions, Lumen doesn't just tell you &mdash; it creates a **detailed report** you can tap to open. Ask for a presentation, and it builds one you can download. These attached files and reports are called **artifacts**, and they show up as tappable cards in the chat.

## What Are Artifacts?

An artifact is a structured, interactive piece of content that Lumen creates during a conversation. They appear as clickable cards within the chat.

<div class="chat-mockup" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <p style="margin: 0; font-size: 0.875rem; color: var(--dark-text);">Here's the drug interaction report you requested:</p>
        <div class="mock-artifact" style="margin-top: 0.75rem;">
          <div class="mock-artifact-icon" style="background: var(--accent-glow); color: var(--accent);">&#9888;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">Warfarin × Amiodarone Interactions</div>
            <div class="mock-artifact-type">Drug Interaction Report</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
        <div class="mock-artifact" style="margin-top: 0.5rem;">
          <div class="mock-artifact-icon" style="background: var(--accent-glow); color: var(--accent);">&#128196;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">Patient Safety Summary</div>
            <div class="mock-artifact-type">PDF Document</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Viewing Artifacts

When you click an artifact card, it opens in a **side panel** on the right side of the screen (or a bottom sheet on mobile). The side panel shows the full content while keeping the chat visible.

<div class="app-frame" style="margin: 2rem 0;">
  <div class="app-frame-bar">
    <div class="app-frame-dot red"></div>
    <div class="app-frame-dot yellow"></div>
    <div class="app-frame-dot green"></div>
  </div>
  <div class="app-frame-content" style="display: flex; gap: 0; padding: 0;">
    <div style="flex: 1; padding: 1rem; border-right: 1px solid rgba(255,255,255,0.08); background: var(--dark-bg);">
      <div style="font-size: 0.75rem; color: var(--dark-text-muted); text-align: center;">Chat area</div>
    </div>
    <div style="width: 260px; padding: 1rem; background: var(--dark-canvas);">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.75rem;">
        <div style="font-size: 0.8rem; font-weight: 600; color: var(--dark-text);">&#9888; Drug Interactions</div>
        <div style="font-size: 0.75rem; color: var(--dark-text-muted); cursor: pointer;">&#10005;</div>
      </div>
      <div style="font-size: 0.75rem; color: var(--dark-text-muted); line-height: 1.6;">
        <div style="padding: 0.5rem; background: var(--accent-glow); border-radius: 6px; margin-bottom: 0.5rem; border-left: 3px solid var(--accent);">
          <strong style="color: var(--accent);">Moderate Risk</strong><br>
          Amiodarone inhibits CYP2C9, increasing warfarin levels. Monitor INR closely.
        </div>
        <div style="padding: 0.5rem; background: rgba(255,255,255,0.05); border-radius: 6px;">
          <strong style="color: var(--dark-text);">Recommendation</strong><br>
          Reduce warfarin dose by 30&ndash;50% when initiating amiodarone.
        </div>
      </div>
    </div>
  </div>
</div>

## Types of Artifacts

Lumen can generate over **30 types** of artifacts. Here are the most common:

### Clinical Tools

<div class="tool-grid" style="margin: 1rem 0;">
  <div class="tool-card">
    <div class="tool-icon" style="background: var(--accent-glow); color: var(--accent);">&#9888;</div>
    <div class="tool-info">
      <div class="tool-name">Drug Interaction Reports</div>
      <div class="tool-desc">Severity ratings, mechanisms, and management recommendations for drug combinations.</div>
    </div>
  </div>
  <div class="tool-card">
    <div class="tool-icon" style="background: rgba(61,191,128,0.1); color: #3DBF80;">&#9745;</div>
    <div class="tool-info">
      <div class="tool-name">Clinical Checklists</div>
      <div class="tool-desc">Interactive checklists for sepsis bundles, surgical safety, DKA management, and more. Track your progress by checking items.</div>
    </div>
  </div>
  <div class="tool-card">
    <div class="tool-icon" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">&#128202;</div>
    <div class="tool-info">
      <div class="tool-name">Lab Reference Ranges</div>
      <div class="tool-desc">Normal intervals with units, color-coded thresholds, and clinical significance notes.</div>
    </div>
  </div>
</div>

### Documents

<div class="tool-grid" style="margin: 1rem 0;">
  <div class="tool-card">
    <div class="tool-icon" style="background: var(--accent-glow); color: var(--accent);">&#128196;</div>
    <div class="tool-info">
      <div class="tool-name">PDF Documents</div>
      <div class="tool-desc">Formatted reports, patient summaries, and reference documents. Downloadable directly.</div>
    </div>
  </div>
  <div class="tool-card">
    <div class="tool-icon" style="background: rgba(214,158,46,0.1); color: #D69E2E;">&#128202;</div>
    <div class="tool-info">
      <div class="tool-name">Presentations (PPTX)</div>
      <div class="tool-desc">Slide decks for grand rounds, patient education, and team presentations.</div>
    </div>
  </div>
  <div class="tool-card">
    <div class="tool-icon" style="background: rgba(33,115,70,0.1); color: #217346;">&#128203;</div>
    <div class="tool-info">
      <div class="tool-name">Spreadsheets (Excel)</div>
      <div class="tool-desc">Data tables, tracking sheets, and structured clinical data exports.</div>
    </div>
  </div>
</div>

### Clinical Decision Support

<div class="tool-grid" style="margin: 1rem 0;">
  <div class="tool-card">
    <div class="tool-icon" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">&#129504;</div>
    <div class="tool-info">
      <div class="tool-name">Differential Diagnosis</div>
      <div class="tool-desc">Ranked list of possible diagnoses with distinguishing features and recommended workup.</div>
    </div>
  </div>
  <div class="tool-card">
    <div class="tool-icon" style="background: rgba(237,137,54,0.1); color: #ED8936;">&#127973;</div>
    <div class="tool-info">
      <div class="tool-name">Triage Assessments</div>
      <div class="tool-desc">ESI, MTS, and CTAS triage scoring with acuity levels and rationale.</div>
    </div>
  </div>
</div>

## Artifact Actions

At the bottom of every artifact panel, you'll find action buttons:

- **Copy** — Copy the content to your clipboard
- **Download** — Export as a file: PDF, DOCX, PPTX, or XLSX, depending on the artifact type
- **Share** — Create a link so a colleague can view the artifact

{{< callout type="success" >}}
**Interactive artifacts update in real time.** Checklists save your progress, and calculators update as you change inputs.
{{< /callout >}}
