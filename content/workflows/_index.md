---
title: "Workflows"
lead: "The built-in agents are powerful — but what if you could build your own? Workflows let you connect Lumen's tools into custom automations, no coding required."
weight: 4
---

## Why Would I Build a Workflow?

The 8 built-in agents handle common clinical tasks. But every practice is different. Maybe you need a workflow that:

- Pulls a patient's med list, checks every interaction, then drafts a reconciliation note
- Takes a research paper, summarizes it, extracts the key stats, and builds a quiz for your residents
- Reads a consult report, looks up all the codes, checks CMS coverage, and drafts a prior auth
- Translates a discharge summary into Spanish and generates a patient-friendly handout

**Workflows let you build exactly the automation you need** by connecting Lumen's tools together visually — like building a recipe from ingredients.

## The Big Picture

<div class="journey-flow">
  <div class="journey-box">
    <div class="journey-box-icon">&#128196;</div>
    <div class="journey-box-label">Build a Workflow</div>
    <div class="journey-box-sub">Connect tools visually</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#9654;</div>
    <div class="journey-box-label">Test & Refine</div>
    <div class="journey-box-sub">Run it, see results</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#129302;</div>
    <div class="journey-box-label">Export as Agent</div>
    <div class="journey-box-sub">Reusable, one-click</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#127760;</div>
    <div class="journey-box-label">Share or Sell</div>
    <div class="journey-box-sub">Publish to community</div>
  </div>
</div>

1. **Build** — Drag tools onto a canvas and connect them in the order you want
2. **Test** — Run the workflow and see what each step produces
3. **Export** — Save it as a reusable agent you can run with one click
4. **Share** — Optionally publish it for other clinicians (free or paid)

## What Does It Look Like?

Here's a simple workflow that turns a dictation transcript into a coded clinical note:

<div class="node-graph">
  <div class="node-graph-label">Workflow Editor</div>
  <div class="node-chain">
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: rgba(88,101,242,0.15); color: var(--primary);">&#127908;</div>
        <span class="wf-node-name">Voice Input</span>
      </div>
      <div class="wf-node-body">Dictation transcript</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: rgba(140,102,217,0.15); color: var(--purple);">&#128196;</div>
        <span class="wf-node-name">Extract Entities</span>
      </div>
      <div class="wf-node-body">Meds, diagnoses, labs</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: rgba(255,149,0,0.15); color: var(--orange);">&#127973;</div>
        <span class="wf-node-name">ICD-10 Lookup</span>
      </div>
      <div class="wf-node-body">Map to diagnosis codes</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: rgba(14,165,233,0.15); color: var(--cyan);">&#128221;</div>
        <span class="wf-node-name">Write Note</span>
      </div>
      <div class="wf-node-body">Draft SOAP note</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: rgba(52,199,89,0.15); color: var(--green);">&#128172;</div>
        <span class="wf-node-name">Send to Chat</span>
      </div>
      <div class="wf-node-body">Output result</div>
    </div>
  </div>
</div>

Each box is a **tool** (called a "node"). The arrows show the **order** data flows through. You build this by dragging and connecting — no code, no formulas.

## Start from a Template

Don't want to build from scratch? Lumen includes 6 ready-made templates you can customize:

<div class="template-grid">
  <div class="template-card" style="border-top-color: #0EA5E9;">
    <h4>Clinical Note Extractor</h4>
    <p>Turns dictation into structured notes with entities and a summary.</p>
    <div class="template-chain">
      <span class="template-node" style="background: rgba(88,101,242,0.1); color: var(--primary);">Voice Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(140,102,217,0.1); color: var(--purple);">Entities</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(14,165,233,0.1); color: var(--cyan);">Summarize</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(52,199,89,0.1); color: var(--green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: #34C759;">
    <h4>Discharge Summary</h4>
    <p>Uploads a document and produces a concise discharge summary.</p>
    <div class="template-chain">
      <span class="template-node" style="background: rgba(88,101,242,0.1); color: var(--primary);">Document</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(14,165,233,0.1); color: var(--cyan);">Summarize</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(52,199,89,0.1); color: var(--green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: #5865F2;">
    <h4>Prior Authorization</h4>
    <p>Answers clinical criteria questions and generates an auth letter.</p>
    <div class="template-chain">
      <span class="template-node" style="background: rgba(88,101,242,0.1); color: var(--primary);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(140,102,217,0.1); color: var(--purple);">Q&A</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(14,165,233,0.1); color: var(--cyan);">Generate</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(52,199,89,0.1); color: var(--green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: #FF9500;">
    <h4>Diagnosis Code Assist</h4>
    <p>Extracts clinical terms and suggests matching ICD-10 codes.</p>
    <div class="template-chain">
      <span class="template-node" style="background: rgba(88,101,242,0.1); color: var(--primary);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(140,102,217,0.1); color: var(--purple);">Entities</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(14,165,233,0.1); color: var(--cyan);">Classify</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(52,199,89,0.1); color: var(--green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: #8C66D9;">
    <h4>Multilingual Notes</h4>
    <p>Translates clinical text and extracts key terms.</p>
    <div class="template-chain">
      <span class="template-node" style="background: rgba(88,101,242,0.1); color: var(--primary);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(140,102,217,0.1); color: var(--purple);">Translate</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(14,165,233,0.1); color: var(--cyan);">Keywords</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(52,199,89,0.1); color: var(--green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: #E53E3E;">
    <h4>Patient Sentiment Monitor</h4>
    <p>Analyzes patient communication tone and classifies by risk.</p>
    <div class="template-chain">
      <span class="template-node" style="background: rgba(88,101,242,0.1); color: var(--primary);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(140,102,217,0.1); color: var(--purple);">Sentiment</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(14,165,233,0.1); color: var(--cyan);">Classify</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: rgba(52,199,89,0.1); color: var(--green);">Chat</span>
    </div>
  </div>
</div>

## Explore the Guides

<div class="card-grid stagger-children" style="margin-top: 1.5rem;">
  <a href="/workflows/editor/" class="guide-card">
    <span class="card-number">Guide 1</span>
    <h3>The Visual Editor</h3>
    <p>How to drag, connect, and configure nodes on the workflow canvas.</p>
    <span class="card-arrow">Read guide <span>&rarr;</span></span>
  </a>
  <a href="/workflows/building-blocks/" class="guide-card">
    <span class="card-number">Guide 2</span>
    <h3>Building Blocks</h3>
    <p>The 70+ tools you can use as nodes — organized by what they do.</p>
    <span class="card-arrow">Read guide <span>&rarr;</span></span>
  </a>
  <a href="/workflows/running/" class="guide-card">
    <span class="card-number">Guide 3</span>
    <h3>Running & Results</h3>
    <p>How to test your workflow and read the step-by-step results.</p>
    <span class="card-arrow">Read guide <span>&rarr;</span></span>
  </a>
  <a href="/workflows/publish/" class="guide-card">
    <span class="card-number">Guide 4</span>
    <h3>Turn It Into an Agent</h3>
    <p>Export your workflow as a reusable agent and optionally share it with other clinicians.</p>
    <span class="card-arrow">Read guide <span>&rarr;</span></span>
  </a>
</div>
