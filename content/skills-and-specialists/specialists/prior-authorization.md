---
title: "AI Prior Authorization Assistant"
description: "How Lumen's AI prior authorization assistant builds submission-ready requests — ICD-10 and CPT codes, CMS coverage criteria, evidence, and the letter."
lead: "Type @Prior Authorization and hand over the paperwork: it looks up the codes, pulls the coverage policy, gathers the evidence, and drafts the letter — you review and submit."
weight: 1
keywords: ["AI prior authorization", "prior authorization AI assistant", "prior auth automation", "medical necessity letter AI", "denial appeal AI"]
---

Prior authorization is the least clinical hour of your week. The medicine is usually settled — you know the patient needs the MRI, the biologic, the procedure. What eats the hour is everything around it: the right ICD-10 and CPT codes, the payer's coverage criteria, the evidence citations, and a letter that ties them together in the order a reviewer expects.

The Prior Authorization Specialist does that assembly for you. You describe the case; it returns a submission-ready package. What used to be an evening of portal archaeology becomes a few minutes of review.

## What it does, end to end

Think of it as four steps a good billing colleague would take, run in sequence without you asking:

1. **Codes.** It looks up the diagnosis in ICD-10 and the requested service in CPT or HCPCS — real lookups against the code databases, not from memory. If a code is ambiguous, it shows you the candidates instead of guessing.
2. **Coverage.** It checks CMS coverage policies — National and Local Coverage Determinations — for the criteria that actually decide approval, and maps your patient's documented history against them.
3. **Evidence.** It searches PubMed for the studies and guidelines that support medical necessity, so the rationale cites literature a reviewer can verify.
4. **The letter.** It assembles everything into a structured request: diagnosis with its code, requested service with its code, a medical-necessity rationale tied to the coverage policy, and the supporting evidence — exportable as a polished PDF.

One rule holds through all four steps: **it never invents codes or coverage language.** Anything it can't verify with a lookup is flagged clearly for you to confirm before submission.

## A worked example

{{< chat-demo title="Chat" >}}
{{< user >}}@Prior Authorization — prepare a prior auth for a lumbar spine MRI. L5-S1 radiculopathy, six weeks of documented failed conservative care (NSAIDs + PT).{{< /user >}}
{{< lumen >}}Here's the submission-ready package:

**Diagnosis:** Lumbar radiculopathy, L5-S1 — **ICD-10 M54.17** (radiculopathy, lumbosacral region)

**Requested service:** MRI lumbar spine without contrast — **CPT 72148**

**Coverage criteria met:** The applicable coverage policy requires ≥6 weeks of conservative therapy before advanced imaging for low back pain with radiculopathy. Your documentation shows 6 weeks of NSAIDs and physical therapy without improvement — criterion satisfied. No red-flag exception needed.

**Medical-necessity rationale:** Drafted, citing the failed conservative course, persistent radicular findings, and guideline support for MRI when symptoms persist beyond 6 weeks.

**Flagged for you to confirm:** the ordering provider's NPI and the payer's specific plan name.

Ready to export as a PDF for the portal — want the appeal-ready version too, in case it's denied?{{< /lumen >}}
{{< /chat-demo >}}

The example is fictional, but the shape is exactly what you get: codes with their sources, the coverage logic spelled out, and open items flagged rather than filled in.

{{< callout type="warning" >}}
**Before you paste real chart details** — remove direct identifiers first. The Specialist needs the clinical facts (diagnosis, history, prior treatment), never the name or MRN. Lumen is built with HIPAA safeguards — encryption at rest and audit logging — and Pro plans add [de-identification tools](/tools/privacy/) that pseudonymize text before the AI sees it.
{{< /callout >}}

## When it saves the most time

- **Imaging and procedures with conservative-care requirements** — the MRI, the injection, the surgery where approval hinges on documenting what was tried first. The Specialist knows to lead with that timeline.
- **Specialty drugs with step-therapy criteria** — biologics and other high-cost agents where the request must show which preferred agents failed and why.
- **Denials.** Paste the denial letter and it drafts a point-by-point appeal, matching each denial reason against your documentation and the coverage policy — the [Insurance Appeal skill](/skills-and-specialists/skills/#insurance-appeal) comes pre-loaded.
- **Peer-to-peer prep.** Before the call with the payer's medical director, it builds your talking points: the criteria, where your case meets them, and the citations — via the [Peer-to-Peer Prep skill](/skills-and-specialists/skills/#peer-to-peer-prep).

## What's under the hood

Picking `@Prior Authorization` pre-loads three Skills — [Prior Authorization](/skills-and-specialists/skills/#prior-authorization), [Insurance Appeal](/skills-and-specialists/skills/#insurance-appeal), and [Peer-to-Peer Prep](/skills-and-specialists/skills/#peer-to-peer-prep) — and points Lumen at the tools this work needs: [ICD-10, CPT, and HCPCS lookup, CMS coverage policies](/tools/coding-labs/), [PubMed](/tools/literature-research/), the NPI provider directory, and PDF creation for the final package.

You don't manage any of that. It's simply what "hand the job to the prior-auth expert" means.

## The honest limits

Lumen prepares; **you review and submit.** The Specialist doesn't log into payer portals, doesn't submit on your behalf, and doesn't know a specific plan's internal criteria beyond what's in public CMS policy — commercial payers vary, and their portal is still yours to drive. Treat the output the way you'd treat a strong draft from your best billing coordinator: nearly done, but your signature means you checked it.

## Next steps

- Walk through a full request in the tutorial: [Prior auth in minutes](/guides/prior-auth-in-minutes/)
- Fighting a denial right now? [Appeal a denial](/guides/appeal-a-denial/)
- See the code lookups it relies on: [Coding & labs tools](/tools/coding-labs/)

{{< cta heading="Draft your next prior auth with Lumen" href="/getting-started/" label="Get started free" variant="subtle" >}}
Type @ in any chat, pick Prior Authorization, and describe the case — the package comes back in minutes.
{{< /cta >}}
