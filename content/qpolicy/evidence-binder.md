---
title: "Build a survey evidence binder"
navTitle: "Evidence binder"
description: "Build a ZIP and PDF evidence binder for surveyors: policy texts, approval chains, attestation rosters and monitoring records, with a clear disclaimer."
lead: "When a surveyor asks for your policies and who approved and attested to them, hand over one binder they can read without a login."
weight: 8
icon: package
tier: max
status: add-on
who: "compliance and accreditation leads"
glance:
  what: "The evidence binder is a ZIP and a PDF, built from your qPolicy records, that a surveyor can read without signing in. You choose what goes in."
  who: "Compliance officers, accreditation coordinators and quality leads preparing for survey or audit."
  why: "Assembling policy evidence by hand takes days. The binder takes minutes and comes straight from the records your team keeps."
  needs: "Lumen Max with the qPolicy add-on and a team admin. One build per hour."
  result: "A downloadable ZIP and PDF with the contents you chose."
---

Surveys and audits ask for the same evidence: the current policies, who approved each version, who attested, and how you keep up with regulatory change. qPolicy assembles it into an **evidence binder**, a ZIP and a PDF that a surveyor can read without a Lumen login. Everything in it comes from records your team made in Lumen. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on.
- **Role:** team admin.
- **Records:** the binder reflects what's in qPolicy. Confirm coverage links and chase attestations first.

## How to build the binder

{{< steps >}}
{{< step title="Open Evidence" >}}Click {{< ui-path "Policies & compliance" "Compliance" "Evidence" >}}.{{< /step >}}
{{< step title="Choose the contents" >}}Click **Contents**. Under **What to include**, choose from **Full policy texts**, **Attestation roster**, **Approval chains**, **Authority monitoring**, **BAA register** and **Read receipts**. Frameworks you've adopted are included.{{< /step >}}
{{< step title="Build it" >}}Click **Build the binder**. It shows **Queued**, then **Building**.{{< /step >}}
{{< step title="Download" >}}When it shows **Ready**, click **Download**.{{< /step >}}
{{< /steps >}}

## What's in it

| Section | What it shows |
|---|---|
| **Full policy texts** | Every published policy, rendered |
| **Attestation roster** | Who was assigned each policy, and who attested |
| **Approval chains** | Who reviewed and signed off each version |
| **Authority monitoring** | The sources watched, and any recorded decision that none were needed |
| **BAA register** | Agreements your team recorded, with their assurance level |
| **Read receipts** | Who opened each policy. A weaker signal than attestation |
| **Scope and limitations** | The disclaimer below, in every binder |

## What you'll see

{{< lui-block title="Evidence" sub="The survey binder: a ZIP and a PDF a surveyor can read without a login." >}}
{{< lui-rows >}}
{{< lui-row title="Binder · Nov 12, 2:14 PM" body="Full policy texts, attestation roster, approval chains, authority monitoring" value="Ready" >}}
{{< lui-row title="Binder · Oct 30, 9:02 AM" body="Full policy texts, approval chains" value="Ready" >}}
{{< /lui-rows >}}
{{< lui-actions "Build the binder" "Contents" "Download" >}}
{{< /lui-block >}}

## The disclaimer in every binder

Every binder carries this text, word for word:

> This report is generated from records this organization entered into Lumen qPolicy. Coverage reflects mappings confirmed by a named person in this organization; it is not a legal or accreditation determination, and it is not an audit opinion. Business Associate Agreement entries marked "self-attested" record an assertion made by an administrator of this organization; Lumen has not independently verified the underlying agreement. Read receipts record that a document was opened and are not attestations. Requirement text for reference-only frameworks is summarised in our own words under licence; consult the authority's published standards for the controlling text.

## Limits and safety

- The binder is only as complete as your records. It doesn't create evidence.
- One binder per hour, because each build re-renders every policy.
- It isn't a legal or accreditation determination, and it isn't an audit opinion.
- For a full event history, also download the policy **Audit log** as CSV. See [Audit and access](/organizations/audit-and-access/).

## FAQ

{{< faq question="Does the surveyor need a Lumen account?" >}}
No. The ZIP and PDF open without a login.
{{< /faq >}}
{{< faq question="Why are read receipts optional?" >}}
They only show that someone opened a policy. Many teams leave them out so they aren't mistaken for attestation.
{{< /faq >}}
{{< faq question="Can we build a binder for one department?" >}}
The binder covers the team's qPolicy records. Choose contents to keep it focused.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/compliance-coverage/" "/qpolicy/attestation/" "/organizations/audit-and-access/" >}}
