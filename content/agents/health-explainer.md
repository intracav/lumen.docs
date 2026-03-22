---
title: "Health Explainer"
description: "Translate complex medical information into language your patients can understand."
weight: 6
---

Your patient just got a diagnosis, a lab result, or a medication change. They look confused. The Health Explainer takes complex medical content and translates it into clear, plain language at an 8th grade reading level — something they can actually read at home.

## Paste the Medical Content

> *"Newly diagnosed atrial fibrillation with RVR, CHA2DS2-VASc 4, started on apixaban 5mg BID and metoprolol succinate 50mg daily. Echo: mild LA dilation, EF 55%. Cardioversion not planned."*

## What Each Step Produces

<div class="step-timeline">

<div class="step-item">
  <div class="step-item-dot">1</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Extract Medical Terms</span></div>
    <div class="step-item-desc">Identifies every term that would need to be explained to a patient.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(140,102,217,0.1); color: var(--purple);">&#128196;</div>
        <span class="step-artifact-label">Terms to Explain</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Conditions:</span><span class="mini-value">atrial fibrillation, RVR, LA dilation</span></div>
        <div class="mini-row"><span class="mini-label">Scores:</span><span class="mini-value">CHA₂DS₂-VASc (stroke risk), EF (heart pump strength)</span></div>
        <div class="mini-row"><span class="mini-label">Medications:</span><span class="mini-value">apixaban (blood thinner), metoprolol (heart rate control)</span></div>
        <div class="mini-row"><span class="mini-label">Procedures:</span><span class="mini-value">cardioversion, echocardiogram</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">2</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Summarize Content</span></div>
    <div class="step-item-desc">Creates a clinical summary that will serve as the basis for the patient explanation.</div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">3</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Find Patient Resources</span></div>
    <div class="step-item-desc">Searches for patient-appropriate educational material from the knowledge base.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">Patient Resources</span><span class="step-artifact-type">2 sources</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">AHA Patient Guide: Living with AFib &middot; ACC Patient Guide: Blood Thinners</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">4</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Medication Information</span><span class="step-item-tool">RxNorm</span></div>
    <div class="step-item-desc">Looks up each medication to prepare patient-friendly explanations.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#128138;</div>
        <span class="step-artifact-label">Medication Details</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Apixaban (Eliquis)</span><span class="mini-value" style="margin-left: auto;">Blood thinner — prevents clots</span></div>
        <div class="mini-row"><span class="mini-label">Metoprolol (Toprol XL)</span><span class="mini-value" style="margin-left: auto;">Slows heart rate</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">5</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Lab & Test Context</span><span class="step-item-tool">Lab Ranges</span></div>
    <div class="step-item-desc">Contextualizes any measurements or test results for the patient.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(61,191,128,0.1); color: var(--teal);">&#129514;</div>
        <span class="step-artifact-label">Test Explanation</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">EF 55%</span><span class="mini-value" style="margin-left: auto; color: var(--green);">Normal (55-70%)</span></div>
        <div class="mini-row"><span class="mini-value">Your heart is pumping well — this is good news.</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">&#10003;</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Patient-Friendly Explanation</span></div>
    <div class="step-item-desc">Translates everything into plain language at an 8th grade reading level.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(140,102,217,0.1); color: var(--purple);">&#128149;</div>
        <span class="step-artifact-label">Patient Handout</span><span class="step-artifact-type">Plain Language</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.25rem;">
          <span class="mini-label">What's happening with your heart:</span>
          <span class="mini-value">Your heart has an irregular rhythm called atrial fibrillation (A-fib). This means the upper part of your heart quivers instead of beating normally. The good news: a test called an echocardiogram shows your heart is still pumping well.</span>
        </div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.25rem;">
          <span class="mini-label">Your new medications:</span>
          <span class="mini-value"><strong>Eliquis</strong> (apixaban) — a blood thinner. A-fib can cause blood clots that lead to strokes. This medicine helps prevent that. <strong>Toprol XL</strong> (metoprolol) — slows your heart rate back to a normal speed.</span>
        </div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start; gap: 0.25rem;">
          <span class="mini-label" style="color: var(--red);">When to call 911:</span>
          <span class="mini-value">Sudden weakness on one side, trouble speaking, severe dizziness, or bleeding that won't stop.</span>
        </div>
      </div>
    </div>
  </div>
</div>

</div>

{{< callout type="info" >}}
**Attach discharge paperwork or lab results** in the Sources panel. The Health Explainer reads and translates the whole document — not just summarizes, but genuinely explains in simple terms.
{{< /callout >}}
