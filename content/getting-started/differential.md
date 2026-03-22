---
title: "Build a Differential"
description: "Describe symptoms and get a ranked differential diagnosis with recommended workup."
weight: 4
step: 4
---

You're working up a patient and want to make sure you're not missing anything. Tell Lumen the key symptoms, and it generates a ranked differential with the tests that would help distinguish between them.

## What to Type

Include as much clinical detail as you have — symptoms, age, sex, relevant history:

- *"Differential for a 28yo female with acute pleuritic chest pain and tachycardia"*
- *"45yo male, 2 weeks of fatigue, night sweats, 10lb weight loss, cervical lymphadenopathy"*
- *"What could cause acute onset vertigo in a 60yo with hypertension?"*

The more detail you give, the better the differential.

## What You'll See

<div class="chat-mockup chat-demo-animated" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">Differential for a 28yo female with acute pleuritic chest pain and tachycardia, on OCPs</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Generated differential diagnosis
          </div>
        </div>
        <div style="font-size: 0.85rem; color: var(--text-on-dark); line-height: 1.6;">
          <div style="padding: 0.375rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
            1. <strong>Pulmonary embolism</strong> <span style="color: #FF3B30; font-size: 0.75rem;">(Urgent)</span><br>
            <span style="color: var(--text-muted-dark); font-size: 0.8rem;">OCP use is a major risk factor. Order CT-PA, D-dimer, Wells score.</span>
          </div>
          <div style="padding: 0.375rem 0; border-bottom: 1px solid rgba(255,255,255,0.06);">
            2. <strong>Pericarditis</strong><br>
            <span style="color: var(--text-muted-dark); font-size: 0.8rem;">Pleuritic pain, may have friction rub. ECG, troponin, echo.</span>
          </div>
          <div style="padding: 0.375rem 0;">
            3. <strong>Pneumothorax</strong><br>
            <span style="color: var(--text-muted-dark); font-size: 0.8rem;">Sudden onset in young female. CXR is first-line imaging.</span>
          </div>
        </div>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: rgba(14,165,233,0.15); color: #0EA5E9;">&#129504;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">Full Differential Diagnosis</div>
            <div class="mock-artifact-type">6 diagnoses with workup plan</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## What the Full Report Includes

Tap the card to open the detailed view. For each diagnosis, you'll see:

- **Likelihood ranking** — most likely to least likely
- **Key distinguishing features** — what makes this diagnosis more or less probable given the presentation
- **Recommended workup** — specific tests and imaging to confirm or rule out
- **ICD-10 codes** — mapped automatically for each differential

## Follow Up in the Same Chat

The conversation doesn't stop at the differential. You can keep going:

- *"The D-dimer came back at 1200. What next?"*
- *"Run Wells criteria for this patient"*
- *"What's the PE treatment protocol?"*

Lumen remembers the context from earlier in the chat, so you don't need to repeat the patient details.

{{< callout type="info" >}}
For more decision support tools (checklists, triage scoring, antibiotic selection), see [Protocols & Decision Support](/tools/protocols-decisions/).
{{< /callout >}}
