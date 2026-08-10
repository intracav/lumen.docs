---
title: "Hospital Policy Management Software — Policies"
description: "Policies turns hospital policy PDFs into versioned, published, cited answers: a read-only Policy Library for staff and policy citations directly in chat."
lead: "Your policies, versioned and published — cited in the answer, not buried in a binder."
weight: 3
tier: max
keywords: ["hospital policy management software", "policy compliance software hospital", "clinical policy management", "policy library software"]
---

{{< tier-badge "max" >}} **Policies** (the qPolicy product) is an add-on to Lumen [Max](/plans/) for organizations that treat policy as governed infrastructure, not shared-drive folklore.

## The problem every hospital knows

Your CLABSI prevention policy exists. It was written carefully, approved by committee, and saved as a PDF — and at the bedside, at 3 a.m., nobody is reading it. Clinicians answer policy questions from memory, from the colleague on the last shift, or from whichever version of the document is pinned to the unit's bulletin board. The policy office maintains the truth; the floor runs on an approximation of it.

Policies closes that gap by making your published policy the thing Lumen cites when a member asks the question the policy answers.

## The loop: upload → version → publish → cited

<div class="steps-container">

{{< step num="1" title="Upload your policy" >}}
Import PDF, DOCX, or Markdown. Lumen extracts the content and, if a policy with that title already exists, asks whether this is a new policy or a new version of the existing one — no accidental duplicates.
{{< /step >}}

{{< step num="2" title="Versions are tracked" >}}
Every policy has a linear version history you can review — what changed, when, and which version was in force. Edits create drafts; the published version stays stable until you say otherwise.
{{< /step >}}

{{< step num="3" title="Publish when ready" >}}
Publishing is an explicit, deliberate act — a draft never leaks to members. Until you publish, only policy admins see it.
{{< /step >}}

{{< step num="4" title="Members see it everywhere it matters" >}}
Published policies appear in a **read-only Policy Library** every member can browse — and, just as important, they become citable sources in chat. Ask a question your policy answers, and the answer cites the policy, version included.
{{< /step >}}

</div>

## What it looks like on the floor

{{< chat-demo title="A nurse, mid-shift" >}}
{{< user >}}How often do we change central line dressings on adult ICU patients?{{< /user >}}
{{< lumen >}}
**Per your institution's policy:** transparent semipermeable dressings are changed **every 7 days**, and immediately if the dressing becomes damp, loosened, or visibly soiled. Gauze dressings are changed every 48 hours.

*Cited: Central Line Maintenance & CLABSI Prevention Policy — v4, published. Open in Policy Library →*
{{< /lumen >}}
{{< /chat-demo >}}

The answer isn't a plausible summary of general practice — it's your policy, the version your committee approved, with a link into the Policy Library. If the policy changes next quarter, the answer changes with it. (Clinical details above are illustrative, not a recommendation.)

## Department-scoped policies

Not every policy is house-wide. A policy can be scoped to a department — the ICU's device policy stays the ICU's — and department admins can manage their own department's policies without touching anyone else's. Org admins see everything; department admins are fenced to their department by design. Members see org-wide policies plus those of the departments they belong to.

## Archiving

When a policy is retired, archive it. It leaves the Policy Library and stops being cited — but its version history is retained, because "what did the policy say at the time?" is a question compliance offices ask for years.

## Compliance checks

Policies doesn't stop at distribution. The add-on includes compliance metrics for admins and a findings workflow: when one of your registered authority sources (CDC, FDA, CMS, specialty societies) changes in a way that may affect a policy, a finding lands in a review queue — with a suggested amendment your team can accept as a draft or dismiss. Nothing publishes without a human. The full loop is covered in [Authority-source monitoring](/organizations/policy-monitoring/).

## Common questions

{{< faq question="Is Policies included in Lumen Max?" >}}
Policies (qPolicy) is an add-on to the Max organization plan — Max provides the platform, and the add-on activates policy management for the seats that need it. See [plans](/plans/) or talk to us for details.
{{< /faq >}}

{{< faq question="Can members edit or download-and-fork policies?" >}}
No. Members get a read-only Policy Library and citations in chat. Editing, versioning, publishing, and archiving are admin actions, and each one is recorded in the org audit log.
{{< /faq >}}

{{< faq question="What file formats can we import?" >}}
PDF, DOCX, and Markdown. Lumen extracts the text for retrieval and citation; your original stays the document of record.
{{< /faq >}}

{{< faq question="Do policy answers replace clinical judgment?" >}}
No — they replace *hunting for the document*. Lumen surfaces what your institution published, cited and versioned, so the clinician can apply judgment to the right text instead of a remembered approximation.
{{< /faq >}}

{{< cta heading="Put your policies where your clinicians already are" href="https://intracav.ai/" label="Talk to us" variant="contrast" >}}
Policies is available as an add-on for Max organizations — we'll walk you through a pilot with your own documents.
{{< /cta >}}
