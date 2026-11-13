---
title: "SMART on FHIR: how AI connects to the EHR"
navTitle: "SMART on FHIR"
description: "What SMART on FHIR and CDS Hooks are, how they give an app scoped, logged, revocable access to EHR data, and what Lumen does with a connection."
lead: "A visiting consultant gets a badge, not a master key. SMART on FHIR is the badge system for software that reads the health record."
weight: 9
icon: hospital
keywords: ["what is SMART on FHIR", "SMART on FHIR explained", "CDS Hooks", "AI EHR integration"]
glance:
  what: "SMART on FHIR is the healthcare standard that lets an app read approved parts of an electronic health record (EHR), with the organization deciding what it can see."
  who: "Clinicians, CMIOs, informatics and IT security teams evaluating AI that connects to the EHR."
  why: "To understand how an AI tool can see a patient's medications or labs without broad access to your EHR, and what stays under your control."
  needs: "Nothing to read this page. Using it in Lumen needs an organization account with an EHR connection set up by your admins and Intracav."
  result: "The vocabulary and questions you need for an EHR integration conversation."
---

When a visiting consultant comes to your hospital, they don't get a master key. They get a badge, issued after credentialing, that opens only the doors their role needs, logs every entry and stops working the day the arrangement ends. **SMART on FHIR** is that badge system for software. It lets an app like Lumen read approved parts of the EHR, with permissions your organization sets, a record of access and a way to switch it off.

## What the words mean

- **{{< term "FHIR" >}}** (Fast Healthcare Interoperability Resources, said "fire") is a shared format for health data. Every EHR stores data its own way inside, but FHIR defines common shapes for the things that matter: a Patient, a MedicationRequest, an Observation (such as a lab result), a Condition. It's like standard units: a potassium of 5.8 means the same in any hospital because everyone agreed on mmol/L.
- **SMART** is the permission system on top. It standardizes how an app asks for access, how the organization grants it and how narrow that grant is. If you've ever used "Sign in with…" to let an app see your calendar but not your email, you've used the same pattern (called OAuth).
- **Scopes** are the named permissions an app asks for, such as "read this patient's medications". There's no master key to request.
- **CDS Hooks** is a companion standard. Instead of you asking a question, the EHR can call a connected service at set moments, such as opening a chart or composing an order, and the service can return an advisory card inside the EHR.

## How it works

{{< flow >}}
{{< flow-node kicker="1 · Request" title="App asks for scopes" icon="clipboard-list" tint="blue" >}}Named permissions, nothing implied.{{< /flow-node >}}
{{< flow-node kicker="2 · Grant" title="EHR issues access" icon="key" tint="plum" >}}Only for what was approved.{{< /flow-node >}}
{{< flow-node kicker="3 · Log" title="Access is recorded" icon="history" tint="accent" >}}Who, what and when.{{< /flow-node >}}
{{< flow-node kicker="4 · Revoke" title="Switch it off" icon="stop" tint="green" >}}The organization controls the connection.{{< /flow-node >}}
{{< /flow >}}

## How Lumen does it

Lumen is built on these standards. With a connection in place:

- **Patient context in chat.** Lumen can read FHIR R4 data such as current medications, recent results and active problems, so an interaction check runs against the actual list instead of one you retyped. See [Patient records](/tools/patient-records/).
- **Two ways to launch.** A clinician can connect from Lumen and sign in to the EHR (a *standalone launch*), or Lumen can open from inside the EHR with the patient already in context (an *EHR launch*).
- **Read-only by default.** Connections read data. Writing to the record is switched off unless an organization admin turns it on for that connection. Notes Lumen helps you draft reach the chart the way they always have: through you, reviewed and signed.
- **Advisory cards with CDS Hooks.** When a chart is opened (*patient-view*) or an order is being written (*medication-prescribe*), Lumen can return advisory cards. The cards are built from retrieved clinical sources with citations. They inform; they don't change the order.
- **Audit.** Connection activity and every CDS Hooks call are recorded in Lumen's tamper-evident audit log.
- **Set up with your organization.** Connections belong to an organization account (called a *team* in Lumen). Your admins and IT team set them up with Intracav. See [EHR integration](/organizations/ehr/).

{{< chat-demo title="Med list from the EHR" caption="Illustration with a fictional patient. Data shown would come from the connected EHR; always confirm against the chart." >}}
{{< user >}}Any interaction concerns if I start azithromycin for this patient?{{< /user >}}
{{< lumen thought="6" tools="Patient record, Drug interactions, Drug label" sources="2" evidence="true" >}}
From the connected record: the active medication list includes **warfarin** and **amiodarone**.

Azithromycin with warfarin can raise the INR {{< cite 1 >}}, and azithromycin with amiodarone adds QT-prolongation risk {{< cite 2 >}}. Consider a baseline ECG and INR follow-up, and check both sources before ordering.
{{< /lumen >}}
{{< /chat-demo >}}

## What this means for you

- **Less retyping.** Lumen reads the med list instead of relying on your memory of it.
- **The same review as always.** Anything Lumen drafts still goes through you before it enters the record.
- **Questions for IT.** Ask which scopes are requested, whether the connection is read-only, where access is logged and who can switch it off. SMART on FHIR is designed to answer all four.

## Limits and safety

- **Only what's in the EHR, only what's granted.** If a result isn't in the record or isn't in scope, Lumen can't see it.
- **The record can be wrong or out of date.** Confirm critical values in the chart itself.
- **Cards are advice.** A CDS Hooks card is one input. You stay free to proceed, change or dismiss.
- **Not every organization has a connection.** Without one, Lumen works from what you type and attach.

{{< callout type="safety" title="Check the chart and the sources" >}}
Confirm medication lists and results in the EHR before acting, and open the cited sources behind any advice. Lumen supports clinical judgment; it doesn't replace it.
{{< /callout >}}

## FAQ

{{< faq question="Does connecting Lumen give it access to every patient?" >}}
No. Access is limited to the scopes your organization approves and happens in the context of an authorized user, with activity logged. It isn't a copy of your database.
{{< /faq >}}
{{< faq question="Can Lumen write notes or orders into the chart?" >}}
Not by default. Connections are read-only unless an organization admin turns on writing for that connection. CDS Hooks cards are advisory only.
{{< /faq >}}
{{< faq question="Do I need to be technical to use it?" >}}
No. Once your organization has set up the connection, you use it by chatting. If you don't have one yet, point your administrator to [EHR integration](/organizations/ehr/).
{{< /faq >}}

## Next steps

{{< related "/organizations/ehr/" "/tools/patient-records/" "/trust/privacy/" "/learn/tool-use/" >}}
