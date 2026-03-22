---
title: "Insurance & Appeals"
description: "Two agents that handle prior authorizations, fight claim denials, and draft legally-grounded appeals."
weight: 4
---

Prior auths and claim denials consume hours of your week. Lumen has two agents that do the heavy lifting — one for clinicians handling the paperwork, and one that aggressively fights denials on behalf of patients.

---

## Insurance Manager

**For clinicians and billing staff.** Describe the procedure and diagnosis, and the agent handles the rest.

> *"Prior auth for MRI lumbar spine. 55yo with 6 weeks of radiculopathy, failed conservative management with PT and NSAIDs. Payer: UnitedHealthcare."*

<div class="step-timeline">

<div class="step-item">
  <div class="step-item-dot">1</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Extract Clinical & Billing Data</span></div>
    <div class="step-item-desc">Parses the request into structured fields — diagnoses, procedures, payer, dates, prior treatments.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(88,101,242,0.1); color: var(--primary);">&#128196;</div>
        <span class="step-artifact-label">Extracted Data</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">Procedure:</span><span class="mini-value">MRI lumbar spine without contrast</span></div>
        <div class="mini-row"><span class="mini-label">Indication:</span><span class="mini-value">Radiculopathy, 6 weeks, failed PT + NSAIDs</span></div>
        <div class="mini-row"><span class="mini-label">Payer:</span><span class="mini-value">UnitedHealthcare</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">2</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Coverage Policies</span></div>
    <div class="step-item-desc">Searches for relevant payer and CMS coverage policies.</div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">3</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Diagnosis Codes</span><span class="step-item-tool">ICD-10</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(255,149,0,0.1); color: var(--orange);">&#127973;</div>
        <span class="step-artifact-label">ICD-10 Codes</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-code">M54.17</span><span class="mini-value">Radiculopathy, lumbosacral region</span></div>
        <div class="mini-row"><span class="mini-code">M51.16</span><span class="mini-value">Intervertebral disc disorder with radiculopathy, lumbar</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">4</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Procedure Codes</span><span class="step-item-tool">CPT</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(255,149,0,0.1); color: var(--orange);">&#129534;</div>
        <span class="step-artifact-label">CPT Codes</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-code">72148</span><span class="mini-value">MRI lumbar spine without contrast</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">5</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">HCPCS Codes</span><span class="step-item-tool">HCPCS</span></div>
    <div class="step-item-desc">Checks for applicable HCPCS Level II codes (DME, supplies, drugs).</div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">6</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">CMS Coverage Determination</span><span class="step-item-tool">CMS</span></div>
    <div class="step-item-desc">Searches National and Local Coverage Determinations — the strongest justification for medical necessity.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(52,199,89,0.1); color: var(--green);">&#9989;</div>
        <span class="step-artifact-label">Coverage Determination</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-label">LCD L33619:</span><span class="mini-value">MRI of the spine is covered when radiculopathy persists &ge;4 weeks despite conservative treatment</span></div>
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span><span class="mini-value">Patient meets all LCD criteria (6 weeks, failed PT + NSAIDs)</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">7</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Medical Necessity Evidence</span><span class="step-item-tool">PubMed</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(14,165,233,0.1); color: var(--cyan);">&#128218;</div>
        <span class="step-artifact-label">Supporting Evidence</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">ACP Guidelines: MRI recommended for persistent radiculopathy &ge;6 weeks with motor deficit or failed conservative Rx</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">8</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Provider Verification</span><span class="step-item-tool">NPI</span></div>
    <div class="step-item-desc">Looks up the ordering provider's NPI and practice details.</div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">9</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Documentation Checklist</span><span class="step-item-tool">Checklist</span></div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(61,191,128,0.1); color: var(--teal);">&#9745;</div>
        <span class="step-artifact-label">Prior Auth Checklist</span><span class="step-artifact-type">Interactive</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span><span>Verified ICD-10 + CPT codes</span></div>
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span><span>CMS LCD criteria met</span></div>
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span><span>Conservative Rx documented</span></div>
        <div class="mini-row"><span style="color: var(--green);">&#10003;</span><span>Clinical evidence attached</span></div>
      </div>
    </div>
  </div>
</div>

<div class="step-item">
  <div class="step-item-dot">&#10003;</div>
  <div class="step-item-body">
    <div class="step-item-header"><span class="step-item-name">Generate Prior Authorization</span></div>
    <div class="step-item-desc">Drafts the complete prior authorization request — ready to submit to the payer.</div>
    <div class="step-artifact-preview">
      <div class="step-artifact-bar">
        <div class="step-artifact-icon" style="background: rgba(88,101,242,0.1); color: var(--primary);">&#128221;</div>
        <span class="step-artifact-label">Prior Authorization Request</span><span class="step-artifact-type">Document</span>
      </div>
      <div class="step-artifact-content">
        <div class="mini-row"><span class="mini-value">Complete prior auth letter with verified codes (M54.17, 72148), LCD L33619 criteria, clinical evidence, provider NPI, and patient history documenting failed conservative management.</span></div>
      </div>
    </div>
  </div>
</div>

</div>

---

## Patient Advocate

**For fighting claim denials.** Takes an aggressive, legally-grounded approach.

Paste a denial letter and the agent identifies the insurer's tactics, cites federal statutes (ACA, ERISA, No Surprises Act), and builds a case backed by CMS policy and clinical evidence.

> *"My patient's CGM was denied by Aetna as 'not medically necessary.' T1DM, A1c 8.9, 2 ER visits for severe hypoglycemia this year."*

**What this agent produces at each step:**

1. **Analyze Denial** — Extracts denial reason codes, identifies bad-faith tactics, finds appeal deadlines
2. **Patient Rights** — Looks up appeal procedures, external review rights (ACA §2719, ERISA)
3. **Verify Diagnosis Coding** — Checks if insurer miscoded the condition
4. **Verify Procedure Coding** — Confirms the correct HCPCS/CPT for CGM
5. **CMS Coverage Policy** — Finds NCD/LCD supporting coverage (strongest argument)
6. **Clinical Evidence** — PubMed studies proving medical necessity
7. **Appeal Rights Checklist** — Your patient's full rights and deadlines
8. **Appeal Letter** — Aggressive, legally-grounded letter citing federal statutes, CMS policy, and clinical evidence

{{< callout type="info" >}}
**The Patient Advocate only sends emails when you explicitly include a recipient address** in your prompt. Otherwise it drafts the letter for you to review.
{{< /callout >}}
