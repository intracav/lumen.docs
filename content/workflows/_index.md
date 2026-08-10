---
title: "Workflows"
description: "Build no-code clinical automations with Lumen workflows: a visual editor, 40+ building blocks, triggers, and team sharing."
lead: "Specialists and Skills are powerful — but what if you could build your own automation? Workflows let you connect Lumen's tools into custom pipelines, no coding required."
weight: 7
hideAutoGrid: true
cascade:
  audience: clinician
---

## Why Would I Build a Workflow?

[Specialists (`@`) and Skills (`/`)](/skills-and-specialists/) handle common clinical tasks out of the box. But every practice is different. Maybe you need a workflow that:

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
    <div class="journey-box-icon">&#9200;</div>
    <div class="journey-box-label">Automate It</div>
    <div class="journey-box-sub">Triggers run it for you</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128230;</div>
    <div class="journey-box-label">Share It</div>
    <div class="journey-box-sub">Org sharing & blueprints</div>
  </div>
</div>

1. **Build** — Drag tools onto a canvas and connect them in the order you want
2. **Test** — Run the workflow and see what each step produces
3. **Automate** — Add a trigger so it runs on a schedule, on a webhook, or when email arrives
4. **Share** — Share it with your organization, or package it as a reusable blueprint

## What Does It Look Like?

Here's a simple workflow that turns a dictation transcript into a coded clinical note:

<div class="node-graph">
  <div class="node-graph-label">Workflow Editor</div>
  <div class="node-chain">
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: var(--accent-glow); color: var(--accent);">&#127908;</div>
        <span class="wf-node-name">Voice Input</span>
      </div>
      <div class="wf-node-body">Dictation transcript</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">&#128196;</div>
        <span class="wf-node-name">Extract Entities</span>
      </div>
      <div class="wf-node-body">Meds, diagnoses, labs</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: var(--accent-glow); color: var(--accent-dk);">&#127973;</div>
        <span class="wf-node-name">ICD-10 Lookup</span>
      </div>
      <div class="wf-node-body">Map to diagnosis codes</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">&#128221;</div>
        <span class="wf-node-name">Write Note</span>
      </div>
      <div class="wf-node-body">Draft SOAP note</div>
    </div>
    <div class="wf-connector"></div>
    <div class="wf-node">
      <div class="wf-node-header">
        <div class="wf-node-icon" style="background: var(--palace-green-glow); color: var(--palace-green);">&#128172;</div>
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
  <div class="template-card" style="border-top-color: var(--smoky-blue);">
    <h4>Clinical Note Extractor</h4>
    <p>Turns dictation into structured notes with entities and a summary.</p>
    <div class="template-chain">
      <span class="template-node" style="background: var(--accent-glow); color: var(--accent);">Voice Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Entities</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Summarize</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--palace-green-glow); color: var(--palace-green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: var(--palace-green);">
    <h4>Discharge Summary</h4>
    <p>Uploads a document and produces a concise discharge summary.</p>
    <div class="template-chain">
      <span class="template-node" style="background: var(--accent-glow); color: var(--accent);">Document</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Summarize</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--palace-green-glow); color: var(--palace-green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: var(--accent);">
    <h4>Prior Authorization</h4>
    <p>Answers clinical criteria questions and generates an auth letter.</p>
    <div class="template-chain">
      <span class="template-node" style="background: var(--accent-glow); color: var(--accent);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Q&A</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Generate</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--palace-green-glow); color: var(--palace-green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: var(--accent-dk);">
    <h4>Diagnosis Code Assist</h4>
    <p>Extracts clinical terms and suggests matching ICD-10 codes.</p>
    <div class="template-chain">
      <span class="template-node" style="background: var(--accent-glow); color: var(--accent);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Entities</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Classify</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--palace-green-glow); color: var(--palace-green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: var(--smoky-blue-dk);">
    <h4>Multilingual Notes</h4>
    <p>Translates clinical text and extracts key terms.</p>
    <div class="template-chain">
      <span class="template-node" style="background: var(--accent-glow); color: var(--accent);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Translate</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Keywords</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--palace-green-glow); color: var(--palace-green);">Chat</span>
    </div>
  </div>
  <div class="template-card" style="border-top-color: var(--palace-green-dk);">
    <h4>Patient Sentiment Monitor</h4>
    <p>Analyzes patient communication tone and classifies by risk.</p>
    <div class="template-chain">
      <span class="template-node" style="background: var(--accent-glow); color: var(--accent);">Text Input</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Sentiment</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">Classify</span>
      <span class="template-arrow">&rarr;</span>
      <span class="template-node" style="background: var(--palace-green-glow); color: var(--palace-green);">Chat</span>
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
    <p>How to test your workflow, read the step-by-step results, and use run history and versions.</p>
    <span class="card-arrow">Read guide <span>&rarr;</span></span>
  </a>
  <a href="/workflows/publish/" class="guide-card">
    <span class="card-number">Guide 4</span>
    <h3>Sharing & Blueprints</h3>
    <p>Share a workflow with your organization or package it as a reusable blueprint.</p>
    <span class="card-arrow">Read guide <span>&rarr;</span></span>
  </a>
  <a href="/workflows/triggers/" class="guide-card">
    <span class="card-number">Guide 5</span>
    <h3>Triggers</h3>
    <p>Run workflows automatically — on a schedule, from a webhook, on incoming email, or on CRM events.</p>
    <span class="card-arrow">Read guide <span>&rarr;</span></span>
  </a>
</div>
