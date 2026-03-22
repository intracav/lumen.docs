---
title: "Document Analyzer"
description: "Upload any clinical document and get a structured analysis with key findings, codes, and supporting literature."
weight: 5
---

You received a consult report, a research paper, or a lengthy clinical document. You need the key findings organized, mapped to codes, and backed with evidence. Upload the document and let the agent do the rest.

## Upload and Ask

Attach a PDF or paste the text in the Sources panel, then type:

> *"Analyze this cardiology consult and summarize the key findings and recommendations"*

## The 7-Step Analysis

<div class="step-timeline">

<div class="step-item">
  <div class="step-item-dot">1</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Summarize Document</span></div>
    <div class="step-item-desc">Creates a comprehensive executive summary of the entire document.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(88,101,242,0.1); color: var(--primary);">&#128196;</div>
        <span class="step-artifact-label">Executive Summary</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">68yo male referred for evaluation of new systolic murmur. Echo reveals moderate-severe aortic stenosis (AVA 0.9 cm², mean gradient 38 mmHg). LVEF preserved at 58%. Coronary angiography recommended prior to valve intervention...</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">2</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Extract Entities</span></div>
    <div class="step-item-desc">Identifies all clinical entities — conditions, medications, procedures, lab values, measurements.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(140,102,217,0.1); color: var(--purple);">&#128196;</div>
        <span class="step-artifact-label">Clinical Entities</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Conditions:</span><span class="mini-value">aortic stenosis (moderate-severe), exertional dyspnea</span></div>
        <div class="mini-row"><span class="mini-label">Measurements:</span><span class="mini-value">AVA 0.9 cm², mean gradient 38 mmHg, LVEF 58%</span></div>
        <div class="mini-row"><span class="mini-label">Medications:</span><span class="mini-value">lisinopril, atorvastatin, aspirin</span></div>
        <div class="mini-row"><span class="mini-label">Procedures:</span><span class="mini-value">echocardiogram, coronary angiography (recommended)</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">3</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Extract Keywords</span></div>
    <div class="step-item-desc">Pulls the primary clinical topics for literature searching.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(88,101,242,0.1); color: var(--primary);">&#128196;</div>
        <span class="step-artifact-label">Key Topics</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">aortic stenosis, TAVR, surgical AVR, valve area, gradient, exercise tolerance</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">4</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Knowledge Base Search</span></div>
    <div class="step-item-desc">Searches for relevant clinical guidelines and context.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">Guidelines</span><span class="step-artifact-type">3 sources</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">ACC/AHA Valvular Heart Disease Guidelines 2023 &middot; AS Intervention Criteria &middot; TAVR vs SAVR Decision Framework</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">5</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">PubMed Literature</span><span class="step-item-tool">PubMed</span></div>
    <div class="step-item-desc">Finds supporting or contradicting evidence from peer-reviewed studies.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">PubMed Results</span><span class="step-artifact-type">8 articles</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row" style="flex-direction: column; align-items: flex-start;"><span class="mini-label">PARTNER 3 (2019)</span><span class="mini-value">TAVR vs SAVR in low-risk patients. NEJM.</span></div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start;"><span class="mini-label">Carabello BA (2023)</span><span class="mini-value">Timing of intervention in AS. Circulation.</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">6</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Diagnostic Codes</span><span class="step-item-tool">ICD-10</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(255,149,0,0.1); color: var(--orange);">&#127973;</div>
        <span class="step-artifact-label">ICD-10 Codes</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-code">I35.0</span><span class="mini-value">Nonrheumatic aortic (valve) stenosis</span></div>
        <div class="mini-row"><span class="mini-code">R06.00</span><span class="mini-value">Dyspnea, unspecified</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">&#10003;</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Structured Analysis Report</span></div>
    <div class="step-item-desc">Combines everything into an organized report: summary, key findings, ICD-10 codes, supporting evidence, and clinical recommendations.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#128203;</div>
        <span class="step-artifact-label">Analysis Report</span><span class="step-artifact-type">Final Report</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">Summary &middot; 6 key findings &middot; 2 ICD-10 codes &middot; 8 supporting articles &middot; 3 guideline citations &middot; Recommended next steps: coronary angio, valve clinic referral, STS risk score</span></div>
      </div>
    </div>
  </div>
</div>

</div>

{{< tip title="Compare multiple documents" >}}
Upload several documents — reports over time, or competing guidelines — and ask the agent to compare them.
{{< /tip >}}
