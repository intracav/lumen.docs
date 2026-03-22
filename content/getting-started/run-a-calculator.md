---
title: "Run a Clinical Calculator"
description: "Get a CHA₂DS₂-VASc, MELD, eGFR, Wells, or other validated score by describing your patient."
weight: 6
step: 6
---

You need a clinical score — CHA₂DS₂-VASc, MELD, eGFR, Wells criteria — but you don't want to look up the formula or find a calculator app. Just tell Lumen about the patient and it runs the right calculator automatically.

## What to Type

You don't even need to name the calculator. Just describe what you need:

- *"What's the stroke risk for a 72-year-old woman with AFib, hypertension, and diabetes?"*
- *"MELD score: bilirubin 3.2, INR 1.8, creatinine 1.5, sodium 131"*
- *"Calculate eGFR for a 65yo Black male, creatinine 1.4"*
- *"Wells score for PE — tachycardia, recent surgery, no hemoptysis"*

## What You'll See

<div class="chat-mockup chat-demo-animated" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">CHA2DS2-VASc for a 72yo woman with HTN and diabetes</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Ran medical calculator
          </div>
          <div class="mock-tool-detail">CHA&#8322;DS&#8322;-VASc</div>
        </div>
        <div style="text-align: center; padding: 0.5rem 0; color: var(--text-on-dark);">
          <span style="font-size: 2rem; font-weight: 800; color: #FF3B30;">5</span>
          <span style="display: block; font-size: 0.8rem; color: var(--text-muted-dark);">High stroke risk &mdash; anticoagulation recommended</span>
        </div>
        <div style="font-size: 0.8rem; color: var(--text-muted-dark); line-height: 1.7;">
          Age 65&ndash;74: +1 &bull; Age &ge;75: +1 &bull; Female: +1 &bull; HTN: +1 &bull; DM: +1
        </div>
      </div>
    </div>
  </div>
</div>

## How It Works

1. Lumen figures out **which calculator** to use based on your question
2. It extracts the **patient parameters** from your message
3. It shows the **score with interpretation** — not just a number, but what it means clinically
4. If information is missing, it **asks you** for the specific values it needs

## Common Calculators

| Calculator | What It's For |
|-----------|---------------|
| **CHA₂DS₂-VASc** | Stroke risk in AFib |
| **HAS-BLED** | Bleeding risk on anticoagulation |
| **MELD / MELD-Na** | Liver disease severity |
| **eGFR (CKD-EPI)** | Kidney function |
| **CURB-65** | Pneumonia severity |
| **Wells Criteria** | PE or DVT probability |
| **APACHE II** | ICU mortality prediction |
| **SOFA** | Organ dysfunction in sepsis |

{{< tip title="Chain your questions" >}}
After getting a score, keep going in the same chat: *"Based on that score, should I start anticoagulation? What are the options?"* Lumen will use the score in its answer.
{{< /tip >}}
