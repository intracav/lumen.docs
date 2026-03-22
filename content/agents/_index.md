---
title: "Agents"
lead: "Chat gives you quick answers. Agents do the whole job — multiple steps, multiple tools, one polished result."
weight: 3
---

## What's the Difference?

The **Chat** is perfect for quick questions — *"Any interactions between these two drugs?"* Ask, get an answer, move on.

But some clinical tasks aren't one question. They're a whole workflow: pull the patient's meds, check codes, search the literature, *then* draft the document. Doing that in chat would take five back-and-forth messages.

**Agents do all of those steps in one go.** You give them a prompt, optionally attach some documents, and the agent runs an entire pipeline — researching, looking up codes, checking databases, and delivering a polished result at the end.

<div class="compare-grid">
  <div class="compare-card" style="border-top-color: #0EA5E9;">
    <h3>&#128172; Chat</h3>
    <div class="compare-subtitle">Like texting a colleague for a quick answer</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--cyan);">&#10003;</span> One question, one answer</li>
      <li><span class="compare-check" style="color: var(--cyan);">&#10003;</span> You guide the conversation</li>
      <li><span class="compare-check" style="color: var(--cyan);">&#10003;</span> Great for quick lookups</li>
      <li><span class="compare-check" style="color: var(--cyan);">&#10003;</span> Uses 1&ndash;2 tools per question</li>
      <li><span class="compare-check" style="color: var(--cyan);">&#10003;</span> Conversational &mdash; ask follow-ups</li>
    </ul>
  </div>
  <div class="compare-card" style="border-top-color: #8C66D9;">
    <h3>&#129302; Agent</h3>
    <div class="compare-subtitle">Like handing a complete task to a specialist</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--purple);">&#10003;</span> One prompt, multi-step result</li>
      <li><span class="compare-check" style="color: var(--purple);">&#10003;</span> The agent decides the workflow</li>
      <li><span class="compare-check" style="color: var(--purple);">&#10003;</span> Great for complex tasks</li>
      <li><span class="compare-check" style="color: var(--purple);">&#10003;</span> Runs 5&ndash;10 tools automatically</li>
      <li><span class="compare-check" style="color: var(--purple);">&#10003;</span> Structured &mdash; step-by-step pipeline</li>
    </ul>
  </div>
</div>

## See an Agent Work

Here's what happens when you tell the **Clinical Scribe** agent to turn your notes into documentation. It runs 7 steps automatically:

<div class="pipeline-mockup">
  <div class="pipeline-header">
    <div class="pipeline-header-icon" style="background: rgba(14,165,233,0.15); color: #0EA5E9;">&#128221;</div>
    <div class="pipeline-header-title">Clinical Scribe</div>
    <div class="pipeline-header-badge">7 steps</div>
  </div>
  <div class="pipeline-steps">
    <div class="pipeline-step">
      <div class="pipeline-dot done">&#10003;</div>
      <div class="pipeline-connector done"></div>
    </div>
    <div class="pipeline-step">
      <div class="pipeline-dot done">&#10003;</div>
      <div class="pipeline-connector done"></div>
    </div>
    <div class="pipeline-step">
      <div class="pipeline-dot done">&#10003;</div>
      <div class="pipeline-connector done"></div>
    </div>
    <div class="pipeline-step">
      <div class="pipeline-dot done">&#10003;</div>
      <div class="pipeline-connector done"></div>
    </div>
    <div class="pipeline-step">
      <div class="pipeline-dot active">5</div>
      <div class="pipeline-connector pending"></div>
    </div>
    <div class="pipeline-step">
      <div class="pipeline-dot pending">6</div>
      <div class="pipeline-connector pending"></div>
    </div>
    <div class="pipeline-step">
      <div class="pipeline-dot pending">7</div>
    </div>
  </div>
  <div class="pipeline-labels">
    <div class="pipeline-label">Entities</div>
    <div class="pipeline-label">Research</div>
    <div class="pipeline-label">RxNorm</div>
    <div class="pipeline-label">ICD-10</div>
    <div class="pipeline-label">CPT</div>
    <div class="pipeline-label">Draft</div>
    <div class="pipeline-label">Review</div>
  </div>
  <div class="pipeline-body">
    <div class="pipeline-active-step">
      <span class="pipeline-active-dot"></span>
      Looking up CPT codes&hellip;
    </div>
    <div class="pipeline-output">
      Identified procedures: 99214 (Office visit, established patient, moderate complexity), 93000 (ECG with interpretation)&hellip;
    </div>
  </div>
</div>

You type one prompt. The agent extracts clinical entities, searches guidelines, looks up every medication, diagnosis code, and procedure code, drafts the full note, and reviews it for accuracy. The result is a complete, coded clinical document.

## The 8 Agents

Each agent is built for a specific kind of clinical work. Pick the one that matches your task and it handles the rest.

<div class="agent-grid stagger-children">

<a href="/agents/clinical-scribe/" class="agent-card" style="border-left-color: #0EA5E9;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(14,165,233,0.12); color: #0EA5E9;">&#128221;</div>
    <div>
      <div class="agent-card-title">Clinical Scribe</div>
      <div class="agent-card-subtitle">Notes &rarr; structured documentation</div>
    </div>
  </div>
  <p>Paste your rough notes or dictation. The agent extracts entities, looks up codes, and produces a complete clinical document with ICD-10, CPT, and RxNorm data embedded.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Entities</span>
    <span class="agent-step-chip">Research</span>
    <span class="agent-step-chip">RxNorm</span>
    <span class="agent-step-chip">ICD-10</span>
    <span class="agent-step-chip">CPT</span>
    <span class="agent-step-chip">Draft</span>
    <span class="agent-step-chip">Review</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

<a href="/agents/diagnostic-support/" class="agent-card" style="border-left-color: #FF9500;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(255,149,0,0.12); color: #FF9500;">&#127973;</div>
    <div>
      <div class="agent-card-title">Diagnostic Support</div>
      <div class="agent-card-subtitle">Full clinical workup</div>
    </div>
  </div>
  <p>Describe a presentation. The agent runs a 10-step workup: triage scoring, differential, code lookup, lab interpretation, medication check, and protocol selection.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Entities</span>
    <span class="agent-step-chip">Triage</span>
    <span class="agent-step-chip">PubMed</span>
    <span class="agent-step-chip">ICD-10</span>
    <span class="agent-step-chip">Labs</span>
    <span class="agent-step-chip">RxNorm</span>
    <span class="agent-step-chip">Protocols</span>
    <span class="agent-step-chip">Assessment</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

<a href="/agents/research-advisor/" class="agent-card" style="border-left-color: #0EA5E9;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(14,165,233,0.12); color: #0EA5E9;">&#128300;</div>
    <div>
      <div class="agent-card-title">Research Advisor</div>
      <div class="agent-card-subtitle">Evidence synthesis</div>
    </div>
  </div>
  <p>Ask a clinical question. The agent searches PubMed, checks FDA data, finds active trials, and delivers a structured literature review with citations.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Keywords</span>
    <span class="agent-step-chip">Knowledge Base</span>
    <span class="agent-step-chip">PubMed</span>
    <span class="agent-step-chip">FDA</span>
    <span class="agent-step-chip">Trials</span>
    <span class="agent-step-chip">RxNorm</span>
    <span class="agent-step-chip">Synthesis</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

<a href="/agents/insurance/" class="agent-card" style="border-left-color: #5865F2;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(88,101,242,0.12); color: #5865F2;">&#127970;</div>
    <div>
      <div class="agent-card-title">Insurance Manager</div>
      <div class="agent-card-subtitle">Prior auth &amp; billing</div>
    </div>
  </div>
  <p>Describe the procedure and diagnosis. The agent verifies codes, checks CMS coverage, gathers medical necessity evidence, and drafts the complete prior auth or appeal.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Extract</span>
    <span class="agent-step-chip">ICD-10</span>
    <span class="agent-step-chip">CPT</span>
    <span class="agent-step-chip">HCPCS</span>
    <span class="agent-step-chip">CMS</span>
    <span class="agent-step-chip">PubMed</span>
    <span class="agent-step-chip">NPI</span>
    <span class="agent-step-chip">Draft</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

<a href="/agents/document-analyzer/" class="agent-card" style="border-left-color: #34C759;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(52,199,89,0.12); color: #34C759;">&#128196;</div>
    <div>
      <div class="agent-card-title">Document Analyzer</div>
      <div class="agent-card-subtitle">Extract &amp; analyze</div>
    </div>
  </div>
  <p>Upload a paper, report, or clinical document. The agent summarizes it, extracts key findings, maps to diagnostic codes, searches for supporting literature, and produces a structured analysis.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Summarize</span>
    <span class="agent-step-chip">Entities</span>
    <span class="agent-step-chip">Keywords</span>
    <span class="agent-step-chip">Research</span>
    <span class="agent-step-chip">PubMed</span>
    <span class="agent-step-chip">ICD-10</span>
    <span class="agent-step-chip">Report</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

<a href="/agents/health-explainer/" class="agent-card" style="border-left-color: #8C66D9;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(140,102,217,0.12); color: #8C66D9;">&#128149;</div>
    <div>
      <div class="agent-card-title">Health Explainer</div>
      <div class="agent-card-subtitle">Patient-friendly language</div>
    </div>
  </div>
  <p>Paste a complex clinical explanation or lab results. The agent translates it into plain language your patients can understand — at an 8th grade reading level.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Extract Terms</span>
    <span class="agent-step-chip">Summarize</span>
    <span class="agent-step-chip">Research</span>
    <span class="agent-step-chip">Medications</span>
    <span class="agent-step-chip">Labs</span>
    <span class="agent-step-chip">Explain</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

<a href="/agents/symptom-checker/" class="agent-card" style="border-left-color: #FF9500;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(255,149,0,0.12); color: #FF9500;">&#129657;</div>
    <div>
      <div class="agent-card-title">Symptom Checker</div>
      <div class="agent-card-subtitle">Triage &amp; assessment</div>
    </div>
  </div>
  <p>Describe the patient's symptoms. The agent runs an ESI triage assessment, maps to codes, checks labs, and delivers a structured triage recommendation.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Symptoms</span>
    <span class="agent-step-chip">ESI Triage</span>
    <span class="agent-step-chip">Guidelines</span>
    <span class="agent-step-chip">ICD-10</span>
    <span class="agent-step-chip">Labs</span>
    <span class="agent-step-chip">Protocols</span>
    <span class="agent-step-chip">Summary</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

<a href="/agents/insurance/" class="agent-card" style="border-left-color: #E53E3E;">
  <div class="agent-card-header">
    <div class="agent-card-icon" style="background: rgba(229,62,62,0.12); color: #E53E3E;">&#128737;</div>
    <div>
      <div class="agent-card-title">Patient Advocate</div>
      <div class="agent-card-subtitle">Fight claim denials</div>
    </div>
  </div>
  <p>Paste a denial letter. The agent analyzes the insurer's reasoning, looks up your patient's rights, gathers clinical evidence, and drafts an aggressive, legally-grounded appeal.</p>
  <div class="agent-card-steps">
    <span class="agent-step-chip">Analyze Denial</span>
    <span class="agent-step-chip">Patient Rights</span>
    <span class="agent-step-chip">ICD-10</span>
    <span class="agent-step-chip">CPT</span>
    <span class="agent-step-chip">CMS Policy</span>
    <span class="agent-step-chip">Evidence</span>
    <span class="agent-step-chip">Appeal Letter</span>
  </div>
  <span class="scenario-arrow">Learn more <span>&rarr;</span></span>
</a>

</div>

## How to Start an Agent

<div class="steps-container">

{{< step num="1" title="Open the Agents screen" >}}
Tap **Agents** in the sidebar. You'll see three tabs: System Agents (the built-in ones), Created (your custom agents), and Community (agents published by others).
{{< /step >}}

{{< step num="2" title="Pick the right agent for your task" >}}
Tap **New Agent** and select the type that matches what you need. Not sure which one? Read the descriptions above.
{{< /step >}}

{{< step num="3" title="Add sources (optional)" >}}
You can attach documents — PDFs, clinical notes, URLs — in the left panel. The agent reads and indexes them before running.
{{< /step >}}

{{< step num="4" title="Type your prompt and hit Send" >}}
Describe what you need in plain English. The agent starts its pipeline immediately. You'll see each step light up as it progresses.
{{< /step >}}

{{< step num="5" title="Review the results" >}}
When the pipeline finishes, you get a structured result with all the artifacts — notes, code lookups, reports — ready to review, copy, or download.
{{< /step >}}

</div>

{{< callout type="info" >}}
**Agent sessions save automatically.** You can come back later, view past runs, or run the agent again with different inputs. Everything is preserved.
{{< /callout >}}
