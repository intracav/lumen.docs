---
title: "Use patient records, providers and notes"
navTitle: "Patient records and notes"
description: "With an EHR connection, Lumen can read a patient's FHIR record and check scheduling. It also finds providers by NPI and drafts clinical notes."
lead: "If your organization has connected its EHR, Lumen can bring a patient's medications, labs and problems into the chat. On any plan, it can find a provider's NPI and draft a note."
weight: 7
icon: stethoscope
tier: pro
glance:
  what: "Built-in tools that read patient records over FHIR, check appointment availability, look up providers in the NPI registry, and draft clinical notes."
  who: "Clinicians and staff at organizations that have connected an EHR, and anyone who needs a provider lookup or a note draft."
  why: "To work with the patient's real data, or to draft documentation, without switching applications."
  needs: "Pro or above and an EHR connection set up by your organization for records and scheduling. Provider lookup and note drafts work on every plan."
  result: "Record data, availability, provider details or a note draft in the chat, each showing where it came from."
---

Lumen can only see a patient's chart if your organization has connected its electronic health record (EHR) using *FHIR*, the standard way health systems share records. Once that's done, you can ask about a patient and Lumen reads their record directly. Two other tools here work for everyone: finding a provider in the national NPI registry, and drafting a structured clinical note from what you tell it.

## Before you start

- **Patient records and scheduling** need **Pro** or above and an EHR connection. Your organization (called a *team* in Lumen) sets this up. In **Explore**, these tools show **Needs setup** until it's done, with the note "Needs an EHR connection — set it up in Settings › EHR connection." See [EHR connection](/organizations/ehr/).
- **Find a Provider (NPI)** and **Write a Clinical Note** work on every plan.
- Only use patient information you're permitted to access, in a workspace your organization has approved for it.

## The tools

| Tool (as shown in Explore) | What it does | Plan |
|---|---|---|
| **Patient Record (FHIR)** | Reads patients, encounters, conditions, medications, observations and other FHIR R4 resources from your EHR. | Pro, needs an EHR connection |
| **Check Scheduling** | Checks practitioner and appointment availability over FHIR. It can book or cancel only if your admin has allowed writes on the connection. | Pro, needs an EHR connection |
| **Find a Provider (NPI)** | Looks up a clinician's NPI number and practice details in the CMS NPPES registry. | Free |
| **Write a Clinical Note** | Structures what you describe into a SOAP note, H&P, discharge summary, referral letter or other format. | Free |

## How to pull a patient's record into a chat

{{< steps >}}
{{< step title="Check the connection" >}}Open {{< ui-path "Explore" "Built-in tools" "Patient Record (FHIR)" >}}. If it shows **Needs setup**, ask your team admin to connect the EHR.{{< /step >}}
{{< step title="Ask about the patient" >}}In a chat in your team workspace, ask: "Current medications and allergies for the patient with MRN 0000123."{{< /step >}}
{{< step title="Review what was retrieved" >}}The chip reads **Patient records retrieved**. Lumen lists what it found and where in the record it came from.{{< /step >}}
{{< step title="Confirm in the EHR" >}}Before acting, check the data in the EHR itself.{{< /step >}}
{{< /steps >}}

## How to draft a note

{{< steps >}}
{{< step title="Describe the encounter" >}}For example: "SOAP note: 55-year-old woman, 3 days of productive cough, T 38.4 °C, SpO₂ 94% on room air, chest X-ray shows right lower lobe consolidation."{{< /step >}}
{{< step title="Review the draft" >}}The chip reads **Clinical note generated**. Edit anything Lumen got wrong, and add what only you know.{{< /step >}}
{{< step title="Copy it into your record" >}}You are the author. Sign it in your own system after you've checked it.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Provider lookup" caption="Illustration with fictional details. Real lookups cite the NPI registry." >}}
{{< user >}}Find the NPI for an endocrinologist named Dr. Priya Raman in Columbus, Ohio.{{< /user >}}
{{< lumen tools="Provider found" sources="1" >}}
I found one matching provider in the NPI registry: **Priya Raman, MD**, Endocrinology, Diabetes and Metabolism, with a practice address in Columbus, OH {{< cite 1 >}}. Check the registry entry before using the number on a referral or claim.
{{< /lumen >}}
{{< /chat-demo >}}

## Good to know

- **Connections are read-only by default.** Lumen can't create, change or delete EHR data unless a team admin turns on writes for that connection. Notes are drafts for you to copy and sign.
- **Work in the right workspace.** EHR access belongs to your team, so ask from your team workspace, not your personal one.
- **Pre-fill is not verification.** A value pulled from the EHR is only as current as the record.

## Limits and safety

{{< callout type="safety" title="Check patient data in the source system" >}}
Before you act on a medication, allergy or result Lumen retrieved, confirm it in the EHR. Notes Lumen drafts can contain errors or omit details. Review every note before it becomes part of the record.
{{< /callout >}}

- Lumen can only read what your EHR connection allows.
- Don't paste patient details into a personal workspace or a chat your organization hasn't approved for patient information. See [Privacy and data](/trust/privacy/).

## FAQ

{{< faq question="Which EHRs work with Lumen?" >}}
Lumen reads records over the FHIR R4 standard. Whether your EHR can connect depends on how your organization sets it up. See [EHR connection](/organizations/ehr/).
{{< /faq >}}
{{< faq question="Can Lumen book an appointment?" >}}
Check Scheduling looks up availability. It can book or cancel only when your team admin has allowed writes on the EHR connection, which is off by default. Confirm any booking in your scheduling system.
{{< /faq >}}
{{< faq question="Do I need Pro to draft notes?" >}}
No. Write a Clinical Note and Find a Provider (NPI) work on every plan.
{{< /faq >}}

## Next steps

{{< related "/organizations/ehr/" "/getting-started/draft-a-note/" "/tools/document-generation/" "/trust/privacy/" >}}
