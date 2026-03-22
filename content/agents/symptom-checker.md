---
title: "Symptom Checker"
description: "Describe symptoms, get an ESI triage level with codes, labs, and protocol recommendations."
weight: 7
---

Describe a patient's symptoms. The Symptom Checker runs a systematic 8-step evaluation — ESI triage, guideline review, coding, lab interpretation, and protocol recommendations.

## Describe the Presentation

> *"45yo female, sudden onset worst headache of her life, 10/10 severity, nausea, neck stiffness. BP 180/100, HR 88. No prior headache history, no trauma."*

## What Each Step Produces

<div class="step-timeline">

<div class="step-item">
  <div class="step-item-dot">1</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Extract Symptoms & History</span></div>
    <div class="step-item-desc">Parses the presentation into structured clinical findings.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(88,101,242,0.1); color: var(--primary);">&#128196;</div>
        <span class="step-artifact-label">Structured Findings</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Chief Complaint:</span><span class="mini-value">Thunderclap headache, 10/10, sudden onset</span></div>
        <div class="mini-row"><span class="mini-label">Associated:</span><span class="mini-value">Nausea, nuchal rigidity</span></div>
        <div class="mini-row"><span class="mini-label">Vitals:</span><span class="mini-value">BP 180/100 (hypertensive), HR 88</span></div>
        <div class="mini-row"><span class="mini-label" style="color: var(--red);">Red flags:</span><span class="mini-value" style="color: var(--red);">"Worst headache of life" + neck stiffness + HTN → SAH until proven otherwise</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">2</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">ESI Triage Assessment</span><span class="step-item-tool">Triage</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(229,62,62,0.1); color: var(--red);">&#127973;</div>
        <span class="step-artifact-label">Triage Result</span><span class="step-artifact-type">ESI Level</span>
      </div>
      <div class="step-artifact-content">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.375rem;">
          <span style="font-size: 1.5rem; font-weight: 800; color: var(--red);">ESI 1</span>
          <span class="mini-severity major">Immediate life threat</span>
        </div>
        <div class="mini-row"><span class="mini-value">Thunderclap headache with meningismus — SAH must be emergently ruled out. Immediate CT head without contrast.</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">3</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Clinical Guidelines</span></div>
    <div class="step-item-desc">Searches for applicable clinical guidelines.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">Guidelines</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">AHA/ASA SAH Guidelines &middot; Ottawa SAH Rule &middot; ACR Appropriateness Criteria: Headache</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">4</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Triage Criteria</span><span class="step-item-tool">Triage</span></div>
    <div class="step-item-desc">Loads ESI severity definitions and decision rules.</div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">5</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Diagnostic Codes</span><span class="step-item-tool">ICD-10</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(255,149,0,0.1); color: var(--orange);">&#127973;</div>
        <span class="step-artifact-label">ICD-10 Codes</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-code">I60.9</span><span class="mini-value">Nontraumatic SAH, unspecified (working dx)</span></div>
        <div class="mini-row"><span class="mini-code">R51.9</span><span class="mini-value">Headache, unspecified (if SAH ruled out)</span></div>
        <div class="mini-row"><span class="mini-code">R29.1</span><span class="mini-value">Meningismus</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">6</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Lab Reference Ranges</span><span class="step-item-tool">Lab Ranges</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(61,191,128,0.1); color: var(--teal);">&#129514;</div>
        <span class="step-artifact-label">Expected Labs</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">CSF xanthochromia</span><span class="mini-value" style="margin-left: auto;">Positive if SAH (LP needed if CT negative)</span></div>
        <div class="mini-row"><span class="mini-label">CSF RBC count</span><span class="mini-value" style="margin-left: auto;">Elevated in SAH, does not clear with serial tubes</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">7</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Clinical Protocols</span><span class="step-item-tool">Checklist</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(61,191,128,0.1); color: var(--teal);">&#9745;</div>
        <span class="step-artifact-label">SAH Workup Protocol</span><span class="step-artifact-type">Interactive</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-check"></span><span>Non-contrast CT head (stat)</span></div>
        <div class="mini-row"><span class="mini-check"></span><span>If CT negative → LP (xanthochromia, RBC count)</span></div>
        <div class="mini-row"><span class="mini-check"></span><span>If SAH confirmed → CTA for aneurysm localization</span></div>
        <div class="mini-row"><span class="mini-check"></span><span>Neurosurgery consult</span></div>
        <div class="mini-row"><span class="mini-check"></span><span>BP management: target SBP &lt;160</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">&#10003;</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Triage Summary</span></div>
    <div class="step-item-desc">Delivers the complete assessment: ESI level, key symptoms, differential, recommended workup, and disposition.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#128203;</div>
        <span class="step-artifact-label">Triage Assessment</span><span class="step-artifact-type">Final Report</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value"><strong>ESI 1</strong> &middot; Thunderclap headache with meningismus &middot; SAH is the primary concern &middot; Emergent CT head → LP if negative → CTA if positive &middot; Neurosurgery on standby &middot; Admit to ICU if confirmed</span></div>
      </div>
    </div>
  </div>
</div>

</div>

{{< callout type="important" >}}
**This agent is a decision support tool.** The ESI triage level and recommendations support your assessment — they do not replace bedside evaluation.
{{< /callout >}}
