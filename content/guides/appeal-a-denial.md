---
title: "Appeal an Insurance Denial with Evidence"
description: "Turn a denial letter into a point-by-point rebuttal — Lumen analyzes the payer's rationale, gathers guideline citations, and drafts the appeal."
weight: 2
audience: clinician
time: "~15 minutes"
keywords: ["AI insurance appeal letter", "appeal insurance denial", "not medically necessary appeal", "MRI denial appeal"]
---

## What you'll make

A point-by-point appeal letter that answers a denial on its own terms: the payer's stated rationale, dismantled one claim at a time, with verified codes, coverage criteria, and guideline citations behind every counterargument — exported and ready to submit inside the appeal deadline. Most denials are won or lost on whether the appeal *answers the actual denial reason*; that's exactly the structure this produces.

Our case: a payer — call it **Stonebridge Mutual**, entirely fictional — has denied a **lumbar spine MRI as "not medically necessary."** All clinical details below are fictional too.

## Before you start

- **Any plan works.** Higher-volume weeks are easier on [Pro and above](/plans/).
- **Have the denial letter** — as a PDF or a photo you can attach, or text you can paste. The letter's exact wording matters: the denial reason codes and the appeal deadline drive everything.
- **Have the clinical timeline:** symptoms, duration, what conservative treatment was tried, and what happened.

{{< callout type="warning" >}}
**Denial letters are full of identifiers** — member ID, claim number, name, dates of birth. Redact or crop them before attaching; the appeal argument only needs the clinical facts and the denial rationale. The [de-identification tool](/tools/privacy/) can strip identifiers from pasted text for you.
{{< /callout >}}

## Build the appeal

<div class="steps-container">

{{< step num="1" title="Attach the denial and state the goal" >}}
Attach the (redacted) denial letter and tell Lumen what you want. The **[Insurance Appeal](/skills-and-specialists/skills/)** skill activates on its own when it recognizes the request — no menu needed, though you can always type **/** and pick it explicitly:

> *"This is a denial from Stonebridge Mutual for a lumbar spine MRI, denied as 'not medically necessary.' Patient is a 49-year-old man with L5-S1 radiculopathy — 8 weeks of radiating leg pain with a positive straight-leg raise, completed 6 weeks of physical therapy plus NSAIDs with no improvement, now with new dorsiflexion weakness. Analyze the denial and draft an appeal."*

**You should see:** Lumen read the letter and extract the denial's skeleton — the stated reason, any criteria the payer says weren't met, and the appeal deadline — before it argues anything.
{{< /step >}}

{{< step num="2" title="Check the denial's reasoning against the record" >}}
A "not medically necessary" denial is a claim, and claims can be wrong in specific ways: the payer applied the wrong criteria, missed documented conservative care, or coded the condition incorrectly. Lumen checks each possibility — verifying the [ICD-10 and CPT codes](/tools/coding-labs/) on the claim, pulling the relevant coverage criteria, and lining up the patient's timeline against them.

**You should see:** a short analysis naming exactly where the denial fails — for instance, that imaging criteria for radiculopathy after failed conservative care are met on the payer's own terms, and that the new motor deficit independently justifies imaging.
{{< /step >}}

{{< step num="3" title="Gather the clinical evidence" >}}
Now ask for the ammunition:

> *"Gather guideline and literature support for MRI in persistent lumbar radiculopathy after failed conservative therapy, especially with a progressive motor deficit. Give me citations I can verify."*

Lumen searches [PubMed and guideline sources](/tools/literature-research/) and returns citations tied to each point of the argument — not a reading list, but evidence mapped to the specific criteria in dispute.

**You should see:** each search step live in the chat, then a set of citations with a one-line note on what each supports. Spot-check them — every citation is real and verifiable, and the letter will stand on them.
{{< /step >}}

{{< step num="4" title="Draft the point-by-point rebuttal" >}}
{{< chat-demo title="The rebuttal takes shape" >}}
{{< user >}}
Draft the appeal — answer their denial rationale point by point.
{{< /user >}}
{{< lumen >}}
**Structure of the appeal:**

1. **Their claim:** "Conservative therapy not exhausted." → **Response:** 6 weeks of documented PT + NSAIDs, completed, symptoms progressed — meets the policy's own threshold.
2. **Their claim:** "No red-flag findings." → **Response:** new dorsiflexion weakness is a progressive neurologic deficit — an imaging indication in its own right, with guideline citations.
3. **Coding check:** diagnosis verified as **M54.17**, requested study **72148** — both correct; no coding basis for denial.
4. **Close:** requested remedy, appeal deadline referenced, peer-to-peer offered.

Drafting the full letter now — each point cited, each citation verifiable.
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** a document card with the complete appeal letter — the denial's own language quoted, then answered, point by point, with the evidence attached to the exact claim it rebuts.
{{< /step >}}

{{< step num="5" title="Review, personalize, export" >}}
Read it as the payer's medical director will. Then fill in what only you know — dates, the ordering clinician, anything the record supports that Lumen flagged as unconfirmed — and ask for the file:

> *"Add that PT notes from March through April are attached as supporting documentation, then export this as a PDF."*

**You should see:** a download card for the formatted letter ([Word works too](/tools/document-generation/)), ready to submit through the payer's appeal channel — before the deadline the letter itself now cites.
{{< /step >}}

</div>

{{< tip title="If the appeal escalates to a phone call" >}}
Many denials end in a peer-to-peer review. The **[Peer-to-Peer Prep](/skills-and-specialists/skills/)** skill builds your talking points from the same case: the criteria, the likely counterarguments, and the citations at your fingertips. Just say *"prep me for the peer-to-peer on this case"* in the same chat — everything carries over.
{{< /tip >}}

## Troubleshooting

- **The denial letter attached but Lumen missed the reason codes.** Scanned faxes can defeat text extraction. Paste the denial rationale paragraph as text and say *"use this as the denial reason"* — the argument matters more than the artifact.
- **The appeal reads generic.** That usually means the prompt was thin on timeline. Add specifics — dates, completed treatments, objective findings (*"positive SLR at 40 degrees, dorsiflexion 4/5"*) — and ask Lumen to rebuild the rebuttal around them.
- **You disagree with a citation's relevance.** Say so: *"Drop citation 3 and find something specific to progressive motor deficit."* The letter should only carry evidence you'd defend on a call.

## Next steps

- **Prevent the next denial:** [Write a prior authorization letter with AI](/guides/prior-auth-in-minutes/) — the strongest appeal is the one you never have to write.
- **How Lumen grounds claims in sources:** [RAG and citations, explained](/learn/rag-and-citations/) — why every citation in your letter is checkable.
- **The evidence tools behind step 3:** [Research and evidence](/tools/literature-research/).
