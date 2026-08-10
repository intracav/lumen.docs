---
title: "EHR Integration: SMART on FHIR & CDS Hooks"
description: "Connect Lumen to Epic or Oracle Health via SMART on FHIR: read-only patient context in chat and advisory CDS Hooks cards — no writes to the chart."
lead: "Patient context flows in. Nothing flows back to the chart."
weight: 6
keywords: ["SMART on FHIR AI assistant", "Epic AI integration", "CDS Hooks", "EHR chatbot integration"]
---

Lumen can connect to your EHR so that answers are informed by the patient in front of the clinician — current medications, problems, recent results — instead of a hypothetical patient the clinician has to describe by hand.

The design principle comes first, because it's the one your CMIO will ask about: **Lumen reads; it does not write.** Connections use read-only access by default, and the write path is disabled by default at the platform level. Nothing Lumen does lands in the chart.

## What connecting actually does

With a connection active, Lumen retrieves patient context over **FHIR R4** and uses it to inform the answer. "Any interaction concerns with starting azithromycin?" stops being a generic lookup and becomes one that accounts for the med list the EHR just provided. The clinician still reads, judges, and acts — Lumen's role is to make sure the answer was formed with the chart in view, the way a good consultant reads the chart before opining.

For the underlying concepts — what SMART on FHIR is, what the scopes mean — see [SMART on FHIR explained](/learn/smart-on-fhir/).

## Two ways to launch

- **Standalone launch** — a clinician connects from Lumen itself, authenticates against your EHR, and selects a patient. Good for pilots and for users who live in Lumen.
- **EHR launch** — Lumen launches from inside the EHR with patient context already established: the patient on screen is the patient in scope. This is the SMART on FHIR launch flow your EHR team already knows from other integrated apps.

## Works with Epic and Oracle Health

Lumen speaks standards, not one vendor's dialect: SMART on FHIR authorization and FHIR R4 reads, which is the integration surface exposed by **Epic** and **Oracle Health (Cerner)** style R4 endpoints. Authentication follows the modern app-registration model your EHR security team will expect, including signed-key (JWKS) flows.

## CDS Hooks: advisory cards inside the workflow

Beyond chat, Lumen implements **CDS Hooks** — the standard your EHR uses to request decision support at defined moments:

- **patient-view** — when a chart is opened, Lumen can return advisory cards relevant to that patient.
- **medication-prescribe** — at prescribing time, Lumen can return advisory cards about the order being composed.

Cards are exactly that — *advisory*. They inform; they never act, never modify the order, never write back. Every hook invocation is recorded in the audit log.

## Availability and setup — the honest version

- **Per-user EHR configuration is available on Plus and above** {{< tier-badge "plus" >}}.
- **Organization connection setup is done with Lumen's team.** {{< status-badge "coming-soon" >}} Today, standing up your org's EHR connection — endpoint registration, key exchange, environment validation — is a guided process with us rather than a self-service screen. Org self-service setup is on the way, but we'd rather tell you that plainly than hide it behind a settings page that ends in a support ticket. In practice, a guided setup is also what most EHR security teams prefer for a first integration.

## Security posture

- **Scoped, read-only tokens** — Lumen requests the narrow read scopes it needs; write access is default-denied platform-wide.
- **Audit trail** — connection activity and every CDS Hook invocation are audit-logged.
- **Organizational controls** — org-level EHR connections are managed by org admins, and enterprise agreements with a signed BAA are the expected frame for production PHI use. Lumen is built with HIPAA safeguards — encryption at rest, audit logging, BAA available for enterprise; see [Trust](/trust/).

{{< callout type="warning" >}}
**PHI caution:** an EHR connection is the governed way to bring patient context into Lumen. Outside of it, don't paste identified patient data into chat — use de-identification first.
{{< /callout >}}

## Next steps

- [SMART on FHIR, explained for clinicians](/learn/smart-on-fhir/)
- [Departments, seats, and admin roles](/organizations/departments-and-seats/)

{{< cta heading="Bring the chart into the conversation" href="https://intracav.ai/" label="Talk to us" variant="subtle" >}}
EHR connections are set up with our team — tell us your EHR and we'll scope the pilot.
{{< /cta >}}
