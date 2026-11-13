---
title: "Connect Lumen to your EHR"
navTitle: "EHR connection"
description: "What Lumen's EHR connection does today: read-only patient context over SMART on FHIR, and advisory CDS Hooks cards. How it's set up and its limits."
lead: "Patient context can flow into Lumen from your EHR. Nothing flows back to the chart."
weight: 7
icon: plug
tier: plus
status: beta
who: "CMIOs, clinical informatics and IT"
glance:
  what: "An optional connection that lets Lumen read patient context from your EHR's FHIR R4 endpoint, launch with SMART on FHIR, and return advisory cards through CDS Hooks. It's read-only."
  who: "CMIOs, clinical informatics and EHR/IT teams evaluating Lumen alongside their EHR."
  why: "Answers can take the patient's current medications and problems into account, instead of the clinician retyping them."
  needs: "Lumen Plus or above for an individual connection. An organization connection is set up with Intracav and your EHR team, and real patient data needs a written agreement with Intracav that covers it."
  result: "A clear picture of what the connection does, how it's set up, and what it doesn't do."
---

Clinicians ask better questions when the chart is in view. Lumen can connect to an EHR that exposes a standard **FHIR R4** endpoint (FHIR is the healthcare data standard most modern EHRs support). With a connection in place, Lumen reads patient context such as medications, problems and recent results to inform an answer, and the clinician still reads, judges and acts. **Lumen reads; it doesn't write to the chart.** This feature is in beta: organization connections are set up together with Intracav, and you should plan a test phase with your EHR team before any go-live.

## Before you start

- **Plan:** an individual EHR connection needs Lumen Plus or above.
- **For an organization:** an owner or admin of your Lumen team (Lumen's word for your organization), your EHR team's help registering Lumen as an app, and a written agreement with Intracav that covers protected health information (PHI) before using real patient data. Contact Intracav to discuss your organization's requirements.
- **Have ready:** your EHR's FHIR R4 base URL and the credentials your EHR team issues.

## What exists today

| Capability | What it does |
|---|---|
| **FHIR R4 reads** | Lumen reads patient context from your FHIR endpoint to inform answers. |
| **SMART on FHIR launch** | A clinician can connect from Lumen and pick a patient (standalone launch), or open Lumen from inside the EHR with the patient already in context (EHR launch). |
| **CDS Hooks** | Your EHR can call Lumen at two moments, **patient-view** (a chart is opened) and **medication-prescribe** (an order is being written). Lumen returns advisory cards with citations. Cards inform; they never change an order. |
| **Read-only by default** | Writing to the chart is switched off on Lumen's side. Moving a connection to production also requires a team admin and an agreement recorded for the team. |

## How to set up an individual connection

{{< steps >}}
{{< step title="Open your connections" >}}Click {{< ui-path "Home" >}} in the sidebar and find **Connections**. Open **EHR connection**.{{< /step >}}
{{< step title="Select your EHR" >}}On **EHR Integration**, choose your EHR system from the list, or **Custom / Other** if it isn't listed. Click **Continue**.{{< /step >}}
{{< step title="Enter the FHIR URL" >}}Paste the **FHIR R4 Base URL** your EHR team gave you. Leave **Read-only mode** on.{{< /step >}}
{{< step title="Choose authentication" >}}Pick the **Authentication method** your EHR team set up, usually **SMART on FHIR (OAuth 2.0)**, and enter the **Client ID** and **Client Secret**. **No Authentication** is for internal or sandbox servers only.{{< /step >}}
{{< step title="Test and save" >}}On **Review & Test Connection**, click **Test Connection**. When it succeeds, click **Save & Connect**.{{< /step >}}
{{< /steps >}}

When an owner or admin saves a SMART connection while working in a team, Lumen also registers it for the team, so other clinicians in the team can connect through SMART.

## What you'll see

{{< lui-block title="Review & Test Connection" sub="Verify your settings before saving." >}}
{{< lui-kv "EHR System=Your EHR system;FHIR R4 URL=https://fhir.harborvalley.example/api/FHIR/R4;Auth Method=SMART on FHIR (OAuth 2.0);Access Mode=Read-only" >}}
{{< lui-callout variant="success" title="Connected" >}}Credentials are encrypted at rest and never exposed to the LLM.{{< /lui-callout >}}
{{< lui-actions "Save & Connect" "Test Connection" >}}
{{< /lui-block >}}

## Limits and safety

{{< callout type="safety" title="Advisory only" >}}
EHR context and CDS Hooks cards support clinical judgment. They don't replace it. Clinicians should open the cited sources and check the chart before acting.
{{< /callout >}}

- **Beta.** Organization connections, EHR launch and CDS Hooks are set up with Intracav rather than from a self-service screen in the Admin console. Expect a sandbox and test phase with your EHR team.
- **No vendor certification is claimed.** The setup screen lists common EHRs, but what matters is a standard FHIR R4 endpoint and an app registration by your EHR team.
- **No writes.** Lumen doesn't create or change orders, notes or results.
- **qPolicy has no EHR integration.** Policy management doesn't connect to your EHR, Active Directory or a SAML identity provider.
- Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. See [Privacy and data](/trust/privacy/).

## FAQ

{{< faq question="Does Lumen write anything back to the EHR?" >}}
No. Writing is switched off on Lumen's side, and CDS Hooks cards are advice only.
{{< /faq >}}
{{< faq question="Which EHRs does it work with?" >}}
Any EHR that exposes a FHIR R4 endpoint and lets your team register a SMART on FHIR app. Talk to Intracav about your specific EHR before planning a rollout.
{{< /faq >}}
{{< faq question="Who sets up the organization connection?" >}}
Your EHR team and Intracav, with an owner or admin of your Lumen team. Moving a connection to production requires an agreement recorded for the team, and you shouldn't use real patient data until your organization has a written agreement with Intracav that covers it.
{{< /faq >}}

## Next steps

{{< related "/learn/smart-on-fhir/" "/guides/connect-your-ehr/" "/organizations/audit-and-access/" "/trust/privacy/" >}}
