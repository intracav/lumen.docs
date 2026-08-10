---
title: "Patient Records & Notes"
description: "Pull patient data from your EHR, check appointment availability, and draft clinical notes — all from within the chat."
weight: 7
---

If your practice has EHR integration set up, Lumen can pull a patient's current medications, recent labs, and diagnoses right into the conversation. It can also draft clinical notes and check scheduling availability.

{{< callout type="warning" >}}
**EHR integration requires setup.** The FHIR and scheduling tools become available once your organization connects its EHR — see [EHR integration](/organizations/ehr/) or ask your administrator.
{{< /callout >}}

## Available Tools

<div class="tool-grid">

{{< tool-card name="FHIR Patient Data" icon="&#128100;" color="#3DBF80" desc="Queries your EHR via FHIR R4 — works with Epic, Oracle Health, and any FHIR R4 server. Pulls current medications, recent labs, active diagnoses, allergies, and encounter history for a specific patient." example="\"Pull the current medication list for patient ID 12345\"" badge="Pro" >}}

{{< tool-card name="Scheduling" icon="&#128197;" color="var(--smoky-blue-dk)" desc="Scheduling intelligence backed by your EHR's FHIR data — appointment availability and booking, on-call lookups, coverage-gap checks, and duty-hour and staffing-ratio review." example="\"Show available cardiology slots next week\"" badge="Pro" >}}

{{< tool-card name="Clinical Notes" icon="&#128221;" color="var(--smoky-blue)" desc="Auto-generates clinical documentation — SOAP notes, H&P notes, discharge summaries, and referral letters. Structured according to standard clinical formats. Available on every plan, no EHR required." example="\"Generate a SOAP note for today's visit — 45yo with uncontrolled HTN\"" badge="Documentation" >}}

</div>

Tools marked **Pro** are available on paid plans — see [Plans](/plans/).

## Clinical Note Generation

Lumen can draft several types of clinical documentation:

| Note Type | Best For |
|-----------|----------|
| **SOAP Note** | Routine outpatient visits |
| **H&P** | Admission history and physical |
| **Discharge Summary** | Hospital discharge documentation |
| **Referral Letter** | Specialist referral correspondence |
| **Progress Note** | Inpatient daily progress |

### Example

<div class="chat-mockup" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">Write a discharge summary for a 68yo male admitted for CHF exacerbation, treated with IV diuresis, improved, discharge on oral lasix 40mg</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Generated clinical note
          </div>
          <div class="mock-tool-detail">type: discharge summary</div>
        </div>
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--dark-text);">
          Here's your discharge summary. Review and edit as needed:
        </p>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: var(--smoky-blue-glow); color: var(--smoky-blue);">&#128221;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">Discharge Summary</div>
            <div class="mock-artifact-type">Clinical Note</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

{{< tip title="Include the key details" >}}
The more clinical context you provide in your message (diagnosis, treatments, outcomes, follow-up plans), the more complete and accurate the generated note will be.
{{< /tip >}}

{{< callout type="important" >}}
**Always review generated clinical documentation** before finalizing. Lumen drafts notes as a starting point — verify accuracy, add details, and sign per your institution's policy.
{{< /callout >}}
