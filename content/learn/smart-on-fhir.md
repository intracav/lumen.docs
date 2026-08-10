---
title: "SMART on FHIR, Explained: How AI Connects to Your EHR"
description: "What is SMART on FHIR? How AI apps get scoped, audited, revocable access to EHR data — and what CDS Hooks advisory cards are. Explained for clinicians."
weight: 9
keywords: ["what is SMART on FHIR", "SMART on FHIR explained", "CDS Hooks", "AI EHR integration"]
---

When a visiting consultant comes to your hospital, they don't get a master key. They get a badge — issued after credentialing, opening only the doors their role requires, logging every entry, and deactivated the day the arrangement ends. Nobody hands over the building; the hospital grants *scoped, accountable access*.

That badge system, for software, is **SMART on FHIR** — the industry standard that lets an application like Lumen connect to your EHR with permissions your organization defines, an audit trail your IT department can read, and a revocation switch they control. If you've wondered how an AI assistant can see a patient's med list without "having access to the EHR" in the scary sense, this is the answer.

## FHIR: a common language for health records

Start with the second half of the name. **FHIR** (Fast Healthcare Interoperability Resources, said "fire") is a standard vocabulary for health data. Every EHR stores information its own way internally — but FHIR defines a shared format for the concepts that matter: a Patient, a MedicationRequest, an Observation (that's a lab result), a Condition.

Think of it as the interoperable equivalent of standardized units. A potassium of 5.8 means the same thing in any hospital because everyone agreed on mmol/L; FHIR does the same for the *structure* of the record, so a med list retrieved from one health system's EHR looks the same to software as a med list from another's. All major EHR vendors now speak it — U.S. regulation requires it.

## SMART: the badge office

FHIR is the language; **SMART** is the permission system for who gets to speak it. SMART on FHIR standardizes how an app requests access, how your organization grants it, and how narrow that grant is.

If you've ever used a "Sign in with…" button — letting a new app see your calendar but not your email — you've used this exact pattern. It's the same widely deployed authorization approach (OAuth), applied to the EHR:

<div class="journey-flow">
  <div class="journey-box">
    <div class="journey-box-icon">&#128203;</div>
    <div class="journey-box-label">App requests access</div>
    <div class="journey-box-sub">Named scopes, nothing implied</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#127380;</div>
    <div class="journey-box-label">EHR issues a badge</div>
    <div class="journey-box-sub">Only the approved doors</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128220;</div>
    <div class="journey-box-label">Every entry logged</div>
    <div class="journey-box-sub">Who, what, when</div>
  </div>
  <div class="journey-arrow">&rarr;</div>
  <div class="journey-box">
    <div class="journey-box-icon">&#128683;</div>
    <div class="journey-box-label">Revocable any time</div>
    <div class="journey-box-sub">One switch, IT-controlled</div>
  </div>
</div>

The key word is **scopes**. A SMART app must name exactly what it wants — *read this patient's medications, read their labs* — and receives a badge for those doors only. There is no master key to request.

## What Lumen does once connected

With a SMART on FHIR connection in place, Lumen can pull the patient context that makes its answers concrete: current medications, recent lab results, and active diagnoses, [right in the chat](/tools/patient-records/). Instead of you transcribing a med list into your question, Lumen reads it — and its interaction check runs against the *actual* list, not your recollection of it.

One boundary worth stating plainly: **Lumen reads; it does not write to the chart.** Nothing Lumen drafts is filed to the record by Lumen. Notes it helps you write reach the chart the same way they always have — through you, reviewed and signed. The consultant badge opens the records room, not the order-entry system.

## CDS Hooks: a tap on the shoulder

There's a companion standard called **CDS Hooks** that flips the direction of the conversation. Instead of you asking a question, the EHR can notify a connected service at defined moments in your workflow — opening a chart, entering an order — and the service can respond with an **advisory card**: a short, sourced heads-up displayed inside the EHR.

The right analogy is a sharp colleague standing at your elbow during order entry: *"Heads up — that's renally cleared and this morning's creatinine doubled."* A tap on the shoulder, not a hand on the keyboard. Cards are advisory by design — they inform the decision you're already making, and you remain free to proceed, adjust, or dismiss.

## Why your IT department likes this model

If your first thought was *"security will never approve an AI touching the EHR,"* SMART on FHIR is precisely the framework built to earn that approval:

- **Scopes, not trust.** Access is enumerated up front and technically enforced — the app cannot wander beyond what was granted.
- **Audit, not assumption.** Every data request is logged on both sides, which fits directly into Lumen's broader posture — built with HIPAA safeguards, including encryption and audit logging.
- **Revocation, not renegotiation.** One switch disables the connection instantly, without a vendor call.
- **A standard, not a one-off.** IT reviews the same SMART pattern they've already vetted for other connected apps, rather than a bespoke integration.

## Availability

EHR connection is available on Plus and above {{< tier-badge "plus" >}} and is set up with your organization — your admin and IT team configure the connection with your EHR vendor as part of [organization EHR setup](/organizations/ehr/). Org-level self-service setup is on the way {{< status-badge "coming-soon" >}}.

{{< callout type="success" >}}
**See it in Lumen:** [EHR integration for organizations](/organizations/ehr/) covers what setup involves, and [Patient Records & Notes](/tools/patient-records/) shows what pulling live patient context into a chat looks like.
{{< /callout >}}

## Frequently asked questions

{{< faq question="Does connecting Lumen give it access to every patient in our EHR?" >}}
No. SMART on FHIR access is scoped: the badge specifies which categories of data can be read, and access happens in the context of authorized use — with every request logged. It is the opposite of a bulk database connection; think visiting consultant with a badge, not a copy of the archive.
{{< /faq >}}

{{< faq question="Can Lumen change orders or write notes into the chart?" >}}
No. Lumen's EHR connection is read-only — it pulls context like medications, labs, and diagnoses to inform its answers. Anything Lumen drafts for you enters the record only through your normal workflow, under your review and signature. CDS Hooks cards are likewise advisory: they surface information; they never act.
{{< /faq >}}

{{< faq question="Do I need to be a technical admin to use this?" >}}
No — but you do need your organization to set it up once. The connection is configured between your org's admins, IT, and the EHR vendor; after that, using it is just chatting. If your practice doesn't have it yet, point your administrator at the [organization EHR guide](/organizations/ehr/).
{{< /faq >}}

---

That's the last stop in the Learn series — head back to [the Learn overview](/learn/) to fill any gaps, or see the concepts converge in a real workday in [Getting Started](/getting-started/).
