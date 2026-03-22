---
title: "Clinical Scribe"
description: "Turn rough notes into complete clinical documentation with proper codes — automatically."
weight: 1
---

You dictated some notes between patients. Now you need to turn them into a proper clinical document — with the right ICD-10 codes, CPT codes, and medication details. The Clinical Scribe agent does all of that for you.

## Give It Your Notes

Paste your rough notes, a dictation transcript, or even bullet points. For example:

> *"55yo male, HTN follow-up. BP 168/96, up from last visit. On lisinopril 20mg. Adding amlodipine 5mg. A1c 6.8 last month, discussing lifestyle changes. ECG normal sinus. Follow up 2 weeks."*

## What Happens Next — Step by Step

The Scribe runs 7 steps automatically. Here's exactly what each step produces:

<div class="step-timeline">

<div class="step-item">
  <div class="step-item-dot">1</div>
  <div class="step-item-body">
    <div class="step-item-header">
      <span class="step-item-name">Extract Clinical Entities</span>
    </div>
    <div class="step-item-desc">Reads your notes and identifies every medication, diagnosis, procedure, and lab value mentioned.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(88,101,242,0.1); color: var(--primary);">&#128196;</div>
        <span class="step-artifact-label">Extracted Entities</span>
        <span class="step-artifact-type">Clinical NER</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Medications:</span> <span class="mini-value">lisinopril 20mg, amlodipine 5mg (new)</span></div>
        <div class="mini-row"><span class="mini-label">Diagnoses:</span> <span class="mini-value">essential hypertension (uncontrolled), prediabetes</span></div>
        <div class="mini-row"><span class="mini-label">Procedures:</span> <span class="mini-value">office visit, ECG</span></div>
        <div class="mini-row"><span class="mini-label">Labs:</span> <span class="mini-value">A1c 6.8%</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">2</div>
  <div class="step-item-body">
    <div class="step-item-header">
      <span class="step-item-name">Search Clinical Guidelines</span>
    </div>
    <div class="step-item-desc">Searches the knowledge base for relevant guidelines to inform the documentation.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">Clinical Context</span>
        <span class="step-artifact-type">Knowledge Base</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.125rem;">
          <span class="mini-label">JNC 8 HTN Guidelines</span>
          <span class="mini-value">Target BP &lt;140/90 for general population; add CCB or thiazide as second agent...</span>
        </div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.125rem;">
          <span class="mini-label">ADA Prediabetes Standards 2026</span>
          <span class="mini-value">A1c 5.7–6.4% criteria; lifestyle intervention first-line...</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">3</div>
  <div class="step-item-body">
    <div class="step-item-header">
      <span class="step-item-name">Medication Lookup</span>
      <span class="step-item-tool">RxNorm</span>
    </div>
    <div class="step-item-desc">Looks up each medication via NLM RxNorm — generic name, drug class, RxCUI identifier.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#128138;</div>
        <span class="step-artifact-label">Medication Details</span>
        <span class="step-artifact-type">Drug Card</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Lisinopril 20mg</span> <span class="mini-value" style="margin-left: auto;">ACE Inhibitor &middot; RxCUI 314076</span></div>
        <div class="mini-row"><span class="mini-label">Amlodipine 5mg</span> <span class="mini-value" style="margin-left: auto;">CCB &middot; RxCUI 329526</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">4</div>
  <div class="step-item-body">
    <div class="step-item-header">
      <span class="step-item-name">Diagnosis Codes</span>
      <span class="step-item-tool">ICD-10</span>
    </div>
    <div class="step-item-desc">Maps each identified condition to the most specific ICD-10-CM code.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(255,149,0,0.1); color: var(--orange);">&#127973;</div>
        <span class="step-artifact-label">ICD-10 Codes</span>
        <span class="step-artifact-type">Diagnostic Codes</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-code">I10</span> <span class="mini-value">Essential (primary) hypertension</span></div>
        <div class="mini-row"><span class="mini-code">R73.09</span> <span class="mini-value">Other abnormal glucose (prediabetes)</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">5</div>
  <div class="step-item-body">
    <div class="step-item-header">
      <span class="step-item-name">Procedure Codes</span>
      <span class="step-item-tool">CPT</span>
    </div>
    <div class="step-item-desc">Identifies the correct CPT codes for services rendered during the visit.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(255,149,0,0.1); color: var(--orange);">&#129534;</div>
        <span class="step-artifact-label">CPT Codes</span>
        <span class="step-artifact-type">Procedure Codes</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-code">99214</span> <span class="mini-value">Office visit, established, moderate complexity</span></div>
        <div class="mini-row"><span class="mini-code">93000</span> <span class="mini-value">ECG, 12-lead, with interpretation and report</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">6</div>
  <div class="step-item-body">
    <div class="step-item-header">
      <span class="step-item-name">Draft Clinical Note</span>
    </div>
    <div class="step-item-desc">Writes the complete structured note — combining your original notes with all the codes, medication details, and guideline context from previous steps.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128221;</div>
        <span class="step-artifact-label">SOAP Note — HTN Follow-up</span>
        <span class="step-artifact-type">Clinical Note</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.125rem;">
          <span class="mini-label">S:</span>
          <span class="mini-value">55yo M presents for HTN follow-up. Reports compliance with lisinopril 20mg. No headaches, chest pain, or visual changes...</span>
        </div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.125rem;">
          <span class="mini-label">O:</span>
          <span class="mini-value">BP 168/96, HR 78, BMI 29.4. ECG: normal sinus rhythm. A1c 6.8% (01/2026)...</span>
        </div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.125rem;">
          <span class="mini-label">A:</span>
          <span class="mini-value">1. Essential hypertension (I10) — uncontrolled on monotherapy. 2. Prediabetes (R73.09)...</span>
        </div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.125rem;">
          <span class="mini-label">P:</span>
          <span class="mini-value">1. Add amlodipine 5mg daily (RxCUI 329526). Continue lisinopril 20mg. Recheck BP in 2 weeks...</span>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">&#10003;</div>
  <div class="step-item-body">
    <div class="step-item-header">
      <span class="step-item-name">Review & Finalize</span>
    </div>
    <div class="step-item-desc">Reviews the complete note for accuracy, completeness, proper code specificity, and HIPAA compliance. Flags anything that needs your attention.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#9989;</div>
        <span class="step-artifact-label">Review Complete</span>
        <span class="step-artifact-type">Quality Check</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span> <span class="mini-value">All diagnoses coded to highest specificity</span></div>
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span> <span class="mini-value">Medications include RxCUI identifiers</span></div>
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span> <span class="mini-value">E/M level supported by documentation</span></div>
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span> <span class="mini-value">No PHI in free-text fields</span></div>
      </div>
    </div>
  </div>
</div>

</div>

## The Final Result

You get a **complete, coded clinical note** that you can review, edit if needed, copy to your EHR, or download as a document. All the codes are embedded inline so you don't have to look them up separately.

{{< tip title="Attach your dictation" >}}
If you use Lumen's dictation feature, you can paste or attach the transcript directly. The Scribe handles even messy, unformatted dictation.
{{< /tip >}}

{{< callout type="important" >}}
**Always review before signing.** The Scribe produces a draft. Verify the codes, check the details, and sign off per your institution's policy.
{{< /callout >}}
