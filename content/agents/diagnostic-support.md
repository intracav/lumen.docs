---
title: "Diagnostic Support"
description: "Describe a clinical presentation and get a full workup — triage, differential, codes, labs, meds, and protocols."
weight: 2
---

A patient presents with a complex set of symptoms. You need the full picture — triage level, differential, codes, lab interpretation, medication review, and protocols. The Diagnostic Support agent runs all of that from a single prompt.

## Give It the Clinical Picture

> *"62yo male, sudden crushing substernal chest pain radiating to left arm, diaphoresis, BP 92/58, HR 110. PMH: HTN, DM2, former smoker. Meds: metformin 1000mg BID, lisinopril 40mg, aspirin 81mg. Troponin pending."*

## The 10-Step Workup

<div class="step-timeline">

<div class="step-item">
  <div class="step-item-dot">1</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Extract Clinical Findings</span></div>
    <div class="step-item-desc">Parses the presentation into structured clinical data — symptoms, vitals, history, medications.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(88,101,242,0.1); color: var(--primary);">&#128196;</div>
        <span class="step-artifact-label">Clinical Findings</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Chief Complaint:</span> <span class="mini-value">Crushing substernal chest pain, radiation to L arm, diaphoresis</span></div>
        <div class="mini-row"><span class="mini-label">Vitals:</span> <span class="mini-value">BP 92/58 (hypotensive), HR 110 (tachycardic)</span></div>
        <div class="mini-row"><span class="mini-label">Risk Factors:</span> <span class="mini-value">Male, 62yo, HTN, DM2, smoking hx</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">2</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">ESI Triage Assessment</span><span class="step-item-tool">Triage</span></div>
    <div class="step-item-desc">Applies the Emergency Severity Index v4 framework to determine acuity level.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(229,62,62,0.1); color: var(--red);">&#127973;</div>
        <span class="step-artifact-label">Triage Result</span>
        <span class="step-artifact-type">ESI Level</span>
      </div>
      <div class="step-artifact-content">
        <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.375rem;">
          <span style="font-size: 1.5rem; font-weight: 800; color: var(--red);">ESI 1</span>
          <span class="mini-severity major">Immediate life threat</span>
        </div>
        <div class="mini-row"><span class="mini-value">Hemodynamically unstable with high-risk cardiac presentation. Requires immediate intervention.</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">3</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Clinical Literature</span></div>
    <div class="step-item-desc">Searches for relevant clinical evidence and guidelines for this presentation.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">Guidelines Found</span>
        <span class="step-artifact-type">3 sources</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">ACC/AHA STEMI Guidelines 2023 &middot; ACS Management Protocol &middot; Cardiogenic Shock Pathway</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">4</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">PubMed Search</span><span class="step-item-tool">PubMed</span></div>
    <div class="step-item-desc">Searches for peer-reviewed evidence specific to this clinical scenario.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">PubMed Results</span>
        <span class="step-artifact-type">Literature</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row" style="flex-direction: column; align-items: flex-start;"><span class="mini-label">Ibanez B et al. (2023)</span><span class="mini-value">ESC Guidelines for STEMI management. Eur Heart J.</span></div>
        <div class="mini-row" style="flex-direction: column; align-items: flex-start;"><span class="mini-label">Thiele H et al. (2017)</span><span class="mini-value">PCI strategies in cardiogenic shock. NEJM.</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">5</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Diagnosis Codes</span><span class="step-item-tool">ICD-10</span></div>
    <div class="step-item-desc">Maps the differential diagnoses to specific ICD-10 codes.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(255,149,0,0.1); color: var(--orange);">&#127973;</div>
        <span class="step-artifact-label">Diagnostic Codes</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-code">I21.09</span> <span class="mini-value">STEMI involving other coronary artery of anterior wall</span></div>
        <div class="mini-row"><span class="mini-code">R57.0</span> <span class="mini-value">Cardiogenic shock</span></div>
        <div class="mini-row"><span class="mini-code">I21.4</span> <span class="mini-value">Acute subendocardial MI (NSTEMI, if confirmed)</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">6</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Lab Reference Ranges</span><span class="step-item-tool">Lab Ranges</span></div>
    <div class="step-item-desc">Contextualizes any lab values mentioned — normal ranges, clinical significance.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(61,191,128,0.1); color: var(--teal);">&#129514;</div>
        <span class="step-artifact-label">Lab Interpretation</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Troponin I</span><span class="mini-value" style="margin-left: auto;">Normal: &lt;0.04 ng/mL &middot; Pending</span></div>
        <div class="mini-row"><span class="mini-value" style="font-size: 0.7rem;">If elevated: confirms myocardial injury. Serial troponins q3h recommended.</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">7</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Medication Review</span><span class="step-item-tool">RxNorm</span></div>
    <div class="step-item-desc">Normalizes current medications and flags any relevant interactions or considerations.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#128138;</div>
        <span class="step-artifact-label">Medication Details</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Metformin 1000mg</span><span class="mini-value" style="margin-left: auto;">&#9888; Hold if contrast dye planned</span></div>
        <div class="mini-row"><span class="mini-label">Aspirin 81mg</span><span class="mini-value" style="margin-left: auto;">Already on antiplatelet — note for cath lab</span></div>
        <div class="mini-row"><span class="mini-label">Lisinopril 40mg</span><span class="mini-value" style="margin-left: auto;">&#9888; Hold — patient hypotensive</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">8</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Clinical Protocols</span><span class="step-item-tool">Checklist</span></div>
    <div class="step-item-desc">Pulls the applicable clinical protocols and emergency checklists.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(61,191,128,0.1); color: var(--teal);">&#9745;</div>
        <span class="step-artifact-label">STEMI Activation Checklist</span>
        <span class="step-artifact-type">Interactive</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-check"></span> <span>12-lead ECG within 10 minutes</span></div>
        <div class="mini-row"><span class="mini-check"></span> <span>Activate cath lab</span></div>
        <div class="mini-row"><span class="mini-check"></span> <span>Aspirin 325mg load (if not already on)</span></div>
        <div class="mini-row"><span class="mini-check"></span> <span>Heparin bolus per protocol</span></div>
        <div class="mini-row"><span class="mini-check"></span> <span>Door-to-balloon target: &lt;90 min</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">9</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Differential Diagnosis</span></div>
    <div class="step-item-desc">The agent has already researched, coded, and checked medications. Now it ranks the differential.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#129504;</div>
        <span class="step-artifact-label">Ranked Differential</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-ddx-rank">1</span><span class="mini-label">STEMI</span><span class="mini-score" style="color: var(--red);">Most likely</span></div>
        <div class="mini-row"><span class="mini-ddx-rank">2</span><span class="mini-label">NSTEMI / UA</span><span class="mini-score" style="color: var(--orange);">Consider</span></div>
        <div class="mini-row"><span class="mini-ddx-rank">3</span><span class="mini-label">Aortic dissection</span><span class="mini-score" style="color: var(--orange);">Rule out</span></div>
        <div class="mini-row"><span class="mini-ddx-rank">4</span><span class="mini-label">Tension pneumothorax</span><span class="mini-score" style="color: var(--text-tertiary);">Less likely</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">&#10003;</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Complete Clinical Assessment</span></div>
    <div class="step-item-desc">Synthesizes everything into a comprehensive assessment — ESI level, differential with codes, lab context, medication flags, and recommended workup.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#128203;</div>
        <span class="step-artifact-label">Clinical Assessment</span>
        <span class="step-artifact-type">Final Report</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">ESI Level 1 &middot; 4-diagnosis differential with ICD-10 codes &middot; 3 medication flags &middot; STEMI checklist &middot; Recommended workup: emergent ECG, serial troponins, CBC, BMP, coags, CXR, activate cath lab</span></div>
      </div>
    </div>
  </div>
</div>

</div>

{{< callout type="important" >}}
**This is a decision support tool.** It surfaces information and organizes the clinical picture. It does not replace your clinical judgment or bedside evaluation.
{{< /callout >}}
