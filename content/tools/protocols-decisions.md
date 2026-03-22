---
title: "Protocols & Decision Support"
description: "Checklists, differential diagnosis, triage scoring, antibiotic selection, and clinical guidelines — the thinking tools that help you think."
weight: 5
---

When you need to work through a clinical problem systematically &mdash; building a differential, choosing an antibiotic, following a protocol &mdash; Lumen does the structured work so you can focus on the patient.

## Available Tools

<div class="tool-grid">

{{< tool-card name="Clinical Checklists" icon="&#9745;" color="#3DBF80" desc="Evidence-based protocol checklists for sepsis bundles, DKA management, central line insertion, surgical safety, and more. Interactive — track completion by checking items." example="\"Give me a sepsis 3-hour bundle checklist\"" badge="Protocols" >}}

{{< tool-card name="Triage Scoring" icon="&#127973;" color="#ED8936" desc="Emergency triage systems — ESI (Emergency Severity Index), MTS (Manchester Triage), CTAS, and START. Scores patient acuity from clinical presentation." example="\"Triage a 55-year-old with chest pain, diaphoresis, and BP 90/60\"" badge="Emergency" >}}

{{< tool-card name="Differential Diagnosis" icon="&#129504;" color="#0EA5E9" desc="Generates a ranked differential diagnosis based on symptoms, demographics, vitals, and history. Searches PubMed and maps to ICD-10. Includes distinguishing features and recommended workup." example="\"Differential for a 30-year-old with acute onset pleuritic chest pain and dyspnea\"" badge="Diagnosis" >}}

{{< tool-card name="Antimicrobial Selector" icon="&#129440;" color="#34C759" desc="Selects appropriate antibiotic therapy based on IDSA guidelines. Considers infection type, severity, allergies, and pregnancy status. Returns first/second-line regimens with dosing and duration." example="\"Best antibiotic for community-acquired pneumonia, PCN allergy, outpatient\"" badge="Treatment" >}}

{{< tool-card name="Allergy Cross-Reactivity" icon="&#128165;" color="#E53E3E" desc="Identifies cross-reactive drugs and safe alternatives for patients with known drug allergies. Maps allergy patterns and suggests de-sensitization options." example="\"What can I use instead of cephalexin if the patient has a penicillin allergy?\"" badge="Safety" >}}

{{< tool-card name="Clinical Guidelines" icon="&#128214;" color="#8C66D9" desc="Searches USPSTF and PubMed for practice guidelines (2020+). Returns recommendations with letter grades and evidence summaries." example="\"Current guidelines for managing newly diagnosed hypertension\"" badge="Guidelines" >}}

{{< tool-card name="Clinical Recommendations" icon="&#128077;" color="#0EA5E9" desc="Generates prioritized, evidence-graded recommendations (Grade A through D). Context-specific with supporting rationale." example="\"Recommendations for secondary stroke prevention in a patient with PFO\"" badge="Evidence" >}}

{{< tool-card name="NPI Lookup" icon="&#128179;" color="#5865F2" desc="Searches the NPI provider registry. Resolves provider name, specialty, taxonomy, and practice location. Useful for referrals and verification." example="\"Look up cardiologists in Austin, TX\"" badge="Directory" >}}

</div>

## Differential Diagnosis in Action

The differential diagnosis tool is one of Lumen's most powerful clinical features:

<div class="chat-mockup chat-demo-animated" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">Differential for a 45-year-old female with fatigue, weight gain, cold intolerance, and constipation</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Generated differential diagnosis
          </div>
          <div class="mock-tool-detail">symptoms: fatigue, weight gain, cold intolerance, constipation</div>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-on-dark); line-height: 1.6;">
          <p style="margin: 0 0 0.5rem 0;"><strong>Top differential diagnoses:</strong></p>
          <div style="padding: 0.375rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
            1. <strong>Hypothyroidism</strong> <span style="color: #34C759; font-size: 0.75rem;">(Most Likely)</span><br>
            <span style="color: var(--text-muted-dark); font-size: 0.8rem;">Classic presentation. Order TSH, Free T4.</span>
          </div>
          <div style="padding: 0.375rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
            2. <strong>Depression/MDD</strong><br>
            <span style="color: var(--text-muted-dark); font-size: 0.8rem;">Overlapping symptoms. Screen with PHQ-9.</span>
          </div>
          <div style="padding: 0.375rem 0;">
            3. <strong>Iron deficiency anemia</strong><br>
            <span style="color: var(--text-muted-dark); font-size: 0.8rem;">CBC, ferritin, iron studies.</span>
          </div>
        </div>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: rgba(14,165,233,0.15); color: #0EA5E9;">&#129504;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">Differential Diagnosis</div>
            <div class="mock-artifact-type">Full ranked list with workup</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Interactive Checklists

Clinical checklists are **interactive** — you can check off items as you complete them. Progress is saved automatically.

<div class="app-frame" style="margin: 2rem 0;">
  <div class="app-frame-bar">
    <div class="app-frame-dot red"></div>
    <div class="app-frame-dot yellow"></div>
    <div class="app-frame-dot green"></div>
  </div>
  <div class="app-frame-content" style="background: var(--bg-dark); padding: 1.25rem;">
    <div style="font-size: 0.9rem; font-weight: 600; color: var(--text-on-dark); margin-bottom: 0.75rem;">Sepsis 3-Hour Bundle</div>
    <div style="font-size: 0.75rem; color: var(--text-muted-dark); margin-bottom: 1rem;">
      <div style="background: rgba(61,191,128,0.15); height: 4px; border-radius: 2px; margin-bottom: 0.375rem;">
        <div style="background: #3DBF80; height: 4px; border-radius: 2px; width: 40%;"></div>
      </div>
      2 of 5 completed
    </div>
    <label style="display: flex; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem; color: var(--text-on-dark); cursor: pointer; align-items: flex-start;">
      <span style="color: #3DBF80; font-size: 1rem;">&#9745;</span>
      <span style="text-decoration: line-through; color: var(--text-muted-dark);">Measure lactate level</span>
    </label>
    <label style="display: flex; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem; color: var(--text-on-dark); cursor: pointer; align-items: flex-start;">
      <span style="color: #3DBF80; font-size: 1rem;">&#9745;</span>
      <span style="text-decoration: line-through; color: var(--text-muted-dark);">Obtain blood cultures before antibiotics</span>
    </label>
    <label style="display: flex; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem; color: var(--text-on-dark); cursor: pointer; align-items: flex-start;">
      <span style="color: var(--text-muted-dark); font-size: 1rem;">&#9744;</span>
      Administer broad-spectrum antibiotics
    </label>
    <label style="display: flex; gap: 0.5rem; padding: 0.5rem 0; border-bottom: 1px solid rgba(255,255,255,0.06); font-size: 0.85rem; color: var(--text-on-dark); cursor: pointer; align-items: flex-start;">
      <span style="color: var(--text-muted-dark); font-size: 1rem;">&#9744;</span>
      Administer 30 mL/kg crystalloid for hypotension or lactate ≥4
    </label>
    <label style="display: flex; gap: 0.5rem; padding: 0.5rem 0; font-size: 0.85rem; color: var(--text-on-dark); cursor: pointer; align-items: flex-start;">
      <span style="color: var(--text-muted-dark); font-size: 1rem;">&#9744;</span>
      Reassess volume status and tissue perfusion
    </label>
  </div>
</div>

{{< callout type="success" >}}
**Checklists save your progress.** If you close and reopen the artifact, your checked items are preserved.
{{< /callout >}}
