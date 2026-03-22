---
title: "Codes, Labs & Calculators"
description: "Find the right ICD-10 or CPT code, check lab normals, verify Medicare coverage, or run a clinical calculator — just by describing what you need."
weight: 4
---

Nobody went to medical school to memorize billing codes. Describe the diagnosis or procedure in your own words and Lumen finds the right code. It also checks lab reference ranges, verifies Medicare coverage, and runs clinical calculators like CHA₂DS₂-VASc and MELD.

## Available Tools

<div class="tool-grid">

{{< tool-card name="ICD-10 Lookup" icon="&#127973;" color="#0EA5E9" desc="Search ICD-10-CM diagnostic codes. Matches clinical descriptions to specific codes with laterality, severity, and sequencing guidance." example="\"ICD-10 code for acute anterolateral STEMI, initial encounter\"" badge="Coding" >}}

{{< tool-card name="CPT Lookup" icon="&#129534;" color="#FF9500" desc="Find CPT procedure codes. Resolves procedure descriptions to billing codes with intensity levels and component breakdowns." example="\"CPT code for laparoscopic cholecystectomy\"" badge="Coding" >}}

{{< tool-card name="HCPCS Lookup" icon="&#128203;" color="#8C66D9" desc="Search HCPCS Level II codes for DME, supplies, and non-physician services. Covers J-codes for drugs, E-codes for equipment, and more." example="\"HCPCS code for a standard wheelchair\"" badge="Coding" >}}

{{< tool-card name="CMS Coverage Lookup" icon="&#9989;" color="#34C759" desc="Check Medicare coverage determinations — both National (NCDs) and Local (LCDs). Returns coverage criteria and required documentation." example="\"Does Medicare cover continuous glucose monitoring for type 2 diabetes?\"" badge="Insurance" >}}

{{< tool-card name="Lab Reference Ranges" icon="&#129514;" color="#3DBF80" desc="LOINC-mapped laboratory reference ranges. Returns normal intervals adjusted for units, age, and sex, with clinical significance notes for abnormal values." example="\"What is the normal reference range for TSH?\"" badge="Labs" >}}

{{< tool-card name="Medical Calculator" icon="&#129518;" color="#5865F2" desc="Validated clinical scoring tools — eGFR, CHA₂DS₂-VASc, MELD, CURB-65, Wells criteria, APACHE II, and more. Returns scores with interpretation." example="\"Calculate MELD-Na score: bilirubin 3.2, INR 1.8, creatinine 1.5, sodium 131\"" badge="Calculator" >}}

</div>

## ICD-10 Code Search in Action

<div class="chat-mockup" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">ICD-10 code for type 2 diabetes with diabetic chronic kidney disease stage 3</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Looked up ICD-10 codes
          </div>
          <div class="mock-tool-detail">query: "type 2 diabetes diabetic chronic kidney disease stage 3"</div>
        </div>
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--text-on-dark);">
          For T2DM with diabetic CKD stage 3, you'll need two codes:<br><br>
          <strong>E11.22</strong> — Type 2 diabetes mellitus with diabetic chronic kidney disease<br>
          <strong>N18.3</strong> — Chronic kidney disease, stage 3 (unspecified)
        </p>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: rgba(14,165,233,0.15); color: #0EA5E9;">&#127973;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">ICD-10 Results</div>
            <div class="mock-artifact-type">Diagnostic Codes</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Common Medical Calculators

Lumen supports dozens of validated scoring tools. Here are the most frequently used:

| Calculator | Used For |
|-----------|----------|
| **CHA₂DS₂-VASc** | Stroke risk in atrial fibrillation |
| **HAS-BLED** | Bleeding risk on anticoagulation |
| **MELD / MELD-Na** | Liver disease severity |
| **eGFR (CKD-EPI)** | Kidney function estimation |
| **CURB-65** | Pneumonia severity |
| **Wells Criteria** | DVT/PE probability |
| **APACHE II** | ICU mortality prediction |
| **Glasgow Coma Scale** | Neurological assessment |
| **SOFA Score** | Organ dysfunction in sepsis |
| **BMI** | Body mass index |

{{< tip title="Just ask naturally" >}}
You don't need to know the calculator name. Just describe what you need: *"What's the stroke risk for my AFib patient?"* and Lumen will select CHA₂DS₂-VASc automatically.
{{< /tip >}}
