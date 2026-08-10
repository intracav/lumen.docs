---
title: "Write a Prior Authorization Letter with AI"
description: "Draft a submission-ready prior authorization in minutes — verified ICD-10 and HCPCS codes, CMS coverage criteria, and a cited medical-necessity argument."
weight: 1
audience: clinician
time: "~10 minutes"
keywords: ["AI prior authorization letter", "prior auth AI", "medical necessity letter AI", "CGM prior authorization"]
---

## What you'll make

A complete, submission-ready prior authorization request — verified diagnosis and procedure codes, the coverage criteria your case has to meet, a medical-necessity argument that answers those criteria point by point, and cited clinical evidence — exported as a Word or PDF document. The part that usually eats half an hour of code lookups and policy hunting takes Lumen a few minutes, and you spend your time where it matters: reviewing and personalizing.

We'll walk a realistic case end to end: a **continuous glucose monitor for a patient with type 2 diabetes on intensive insulin therapy**. Every clinical detail below is fictional.

## Before you start

- **Any plan works.** Prior authorization runs on every Lumen plan; see [Plans](/plans/) if you're bumping into message limits.
- **Have the clinical story at hand:** diagnosis, the service or device you're requesting, relevant history (regimen, prior treatments, complications), and the payer's name.
- **Optional but powerful:** if you have the payer's coverage policy or a criteria checklist, attach it — Lumen will argue against the actual criteria instead of general ones.

{{< callout type="warning" >}}
**Before you paste real patient data**, strip direct identifiers — name, MRN, dates of birth, contact details. The clinical facts are what the letter needs; the identifiers are what it doesn't. Lumen also has a [de-identification tool](/tools/privacy/) that can scrub text for you.
{{< /callout >}}

## Build the request

<div class="steps-container">

{{< step num="1" title="Bring in the Prior Authorization Specialist and describe the case" >}}
Type **@** in any chat and pick **[Prior Authorization](/skills-and-specialists/specialists/)**. Then describe the patient, the request, and the payer the way you'd present it to a colleague:

> *"Prepare a prior authorization for a continuous glucose monitor. 58-year-old woman with type 2 diabetes on intensive insulin therapy — basal glargine plus mealtime lispro, 4+ injections daily. A1c 8.9% despite adherence, fingerstick testing 4x daily, and one episode of severe hypoglycemia in the past 6 months that required assistance. Payer is Larkspur Health Plan (commercial). We're requesting a therapeutic CGM system with sensors."*

**You should see:** the Prior Authorization chip appear on your message, then a short plan — confirm codes, check coverage policy, gather evidence, draft the request — before Lumen starts working through it step by step.
{{< /step >}}

{{< step num="2" title="Watch the codes and coverage get verified" >}}
This is where Lumen earns its keep. It doesn't recite codes from memory — it looks each one up with the [ICD-10, CPT, and HCPCS coding tools](/tools/coding-labs/), pulls the relevant CMS coverage determination, and searches [PubMed](/tools/literature-research/) for supporting evidence. Each step appears live in the chat.

{{< chat-demo title="Prior Authorization at work" >}}
{{< user >}}
Prepare a prior authorization for a continuous glucose monitor — 58-year-old with T2DM on basal-bolus insulin, A1c 8.9%, one severe hypoglycemic episode in 6 months.
{{< /user >}}
{{< lumen >}}
**Plan:** confirm codes → check coverage criteria → gather evidence → draft the request.

1. ICD-10 lookup → **E11.65** (type 2 diabetes with hyperglycemia) ✓
2. HCPCS lookup → **E2103** (non-adjunctive CGM receiver), **A4239** (supply allowance) ✓
3. CMS coverage policy → insulin-treated diabetes qualifies; documented severe hypoglycemia strengthens the case ✓
4. PubMed → 3 citations: CGM reduces A1c and severe hypoglycemia in insulin-treated T2DM ✓

**Deliverable:** a prior authorization letter mapping this patient to each coverage criterion, with verified codes and cited evidence — flagging anything you still need to confirm.
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** each lookup complete with a checkmark, and — importantly — any code or criterion Lumen *couldn't* verify flagged explicitly rather than papered over. It never invents codes or coverage language.
{{< /step >}}

{{< step num="3" title="Review the draft letter" >}}
The finished letter arrives as a document card in the chat. Open it and read it the way a payer's reviewer will:

- **The codes** — diagnosis (ICD-10) and device/service (HCPCS or CPT) at the top, each one from a lookup.
- **The medical-necessity argument** — structured against the coverage criteria: insulin regimen, testing frequency, glycemic control, hypoglycemia history, each mapped to documentation.
- **The evidence** — guideline and trial citations you can verify before anything is submitted.

**You should see:** a letter where every criterion the payer will check has a named, matching fact from your patient's history — and clear placeholders anywhere Lumen needs a detail only you have.
{{< /step >}}

{{< step num="4" title="Personalize and fill the flagged gaps" >}}
Now add what only you know. Reply in the same chat:

> *"Add that the hypoglycemic episode in March required EMS response, and that she completed diabetes self-management education in January. Ordering provider is her endocrinologist. Tighten the opening paragraph — one sentence, lead with the insulin regimen."*

**You should see:** the letter update in place with your edits woven in — not appended — and the medical-necessity section now citing the EMS-documented episode, which is exactly the kind of concrete detail reviewers respond to.
{{< /step >}}

{{< step num="5" title="Export to Word or PDF" >}}
When the letter reads right, ask for the file:

> *"Export this as a Word document."*

**You should see:** a download card for a formatted .docx (say *PDF* if you prefer). Attach it to the payer's portal submission or fax cover — whatever your workflow demands. See [Creating Documents](/tools/document-generation/) for the other formats Lumen can produce.
{{< /step >}}

</div>

{{< callout type="important" >}}
**You sign it, you own it.** Lumen drafts and verifies against sources, but the clinical accuracy of the final submission is yours — review every code and every claim before it goes to the payer.
{{< /callout >}}

## Troubleshooting

- **Lumen asks follow-up questions instead of drafting.** That's deliberate — it won't guess at missing criteria facts (regimen details, prior treatments, dates). Answer them, or say *"draft it with placeholders and list what's missing at the top."*
- **The coverage criteria don't match your payer.** CMS determinations are the strongest general anchor, but commercial payers publish their own policies. Attach the payer's policy PDF or paste its criteria, then say *"re-argue medical necessity against this policy specifically."*
- **A code looks off for your regional carrier.** Codes come from live lookups, but payer-specific billing conventions vary. Ask *"show me the alternatives you considered for the device code and why you picked this one"* — then confirm with your billing team.

## Next steps

- **Denial already in hand?** [Appeal an insurance denial with evidence](/guides/appeal-a-denial/) — the counterpart guide for when the payer says no.
- **Curious how Lumen chained those lookups?** [How agentic loops work](/learn/agentic-loops/) explains the plan-verify-produce cycle you just watched.
- **All the coding tools in one place:** [Medical coding — ICD-10, CPT, HCPCS and Medicare fees](/tools/coding-labs/).
