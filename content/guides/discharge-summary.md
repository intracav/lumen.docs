---
title: "Write a Discharge Summary in 5 Minutes"
description: "Turn rough hospital-course notes into a complete discharge summary — med changes highlighted, follow-up plan built in, ready to paste into the EHR."
weight: 3
audience: clinician
time: "~5 minutes"
keywords: ["AI discharge summary generator", "discharge summary AI", "hospital discharge documentation AI"]
---

## What you'll make

A complete, structured discharge summary — admission diagnosis, hospital course, discharge medications with every change highlighted and explained, follow-up appointments, and patient instructions — built from the rough notes you already have. The next clinician who opens it will know what happened, what changed, and what's pending, without calling you.

Our case: a **3-day heart-failure admission** (all details fictional) — the kind of discharge you might otherwise write at 6 p.m. with four more waiting.

## Before you start

- **Any plan works** — see [Plans](/plans/) if you're near your message limit at the end of a long day.
- **Have your rough material:** daily progress notes, the med list with changes, pending results, and the follow-up plan. Messy is fine — bullet fragments, dictation, even a photo of your scribbled sign-out sheet ([attachments](/chat/attachments/) work).
- **Know your pending items.** The most dangerous discharge summary is the one that forgets the culture still cooking in the lab.

{{< callout type="warning" >}}
**Strip identifiers before you paste.** Your course notes carry the clinical story; the name, MRN, and room number stay behind. The [de-identification tool](/tools/privacy/) can scrub pasted text automatically if your notes are tangled up with identifiers.
{{< /callout >}}

## Write the summary

<div class="steps-container">

{{< step num="1" title="Dump your rough course notes into the chat" >}}
Type **/** and pick **[Discharge Summary](/skills-and-specialists/skills/)** — or skip the menu entirely, because asking for a discharge summary activates the skill on its own. Then paste your notes exactly as they are:

> *"/discharge-summary — 71M admitted with acute decompensated HFrEF (EF 30%), 3-day stay. Presented with 5 kg weight gain, orthopnea, JVD, bibasilar crackles. IV furosemide 40 BID x2 days, net negative 4.2 L, transitioned to oral. Med changes: home furosemide 40 daily switched to torsemide 20 daily; started dapagliflozin 10 daily; metoprolol succinate continued at 50; lisinopril held day 1 for SBP 90s, resumed at discharge. Cr peaked 1.6, back to baseline 1.2. K 4.1 at discharge. Discharge weight 82 kg. Follow-up: HF clinic in 7 days, labs (BMP) in 1 week, daily weights, 2 g sodium diet. Echo pending final read."*

Dictation works too — tap the microphone and talk through the course the way you'd sign out to a colleague.

**You should see:** the Discharge Summary skill chip on your message, and Lumen begin structuring — not paraphrasing — your notes.
{{< /step >}}

{{< step num="2" title="Review the structured draft" >}}
{{< chat-demo title="From fragments to a summary" >}}
{{< user >}}
/discharge-summary — 71M, ADHF EF 30%, 3-day stay, IV diuresis net -4.2 L, switched furosemide → torsemide 20, started dapagliflozin, lisinopril held then resumed, echo pending…
{{< /user >}}
{{< lumen >}}
Structured your course into a full summary:

- **Admission diagnosis:** acute decompensated heart failure with reduced EF
- **Hospital course:** presentation, diuresis, renal bump and recovery, transition to oral
- **Discharge medications:** every change flagged — **torsemide 20 mg replaces furosemide 40 mg** (better absorption in HF), **dapagliflozin 10 mg NEW**, lisinopril **resumed** after transient hypotension
- **Pending at discharge:** final echo read — flagged for follow-up
- **Follow-up:** HF clinic in 7 days, BMP in 1 week, daily weights, 2 g sodium
- **Patient instructions:** plain-language weight and symptom thresholds, when to call

One gap: no discharge BP documented — placeholder added.
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** a document card with the full summary. The medication section is the heart of it — changes are *highlighted with reasons*, not buried in a flat list, because "torsemide replaces furosemide" without the *why* is how post-discharge confusion starts. Anything you didn't state isn't invented — it's flagged.
{{< /step >}}

{{< step num="3" title="Edit inline until it's yours" >}}
Fix anything by saying so — no re-drafting from scratch:

> *"Discharge BP was 112/68. Add that his daughter was educated on daily weights and has the HF clinic number. Make the patient instructions a bulleted list."*

**You should see:** the summary update in place, with your corrections integrated where they belong. Keep going until every section reads the way you'd sign it.
{{< /step >}}

{{< step num="4" title="Copy into the EHR or export" >}}
When it's right, take it where it needs to go:

> *"Give me the final version as plain text I can paste into the EHR."*

Or, for a formatted document: *"Export as PDF."*

**You should see:** clean text ready to paste into your EHR's discharge navigator, or a download card from the [document tools](/tools/document-generation/) if the summary travels as a file — to a SNF, a PCP fax line, or the chart.
{{< /step >}}

</div>

{{< callout type="important" >}}
**Review before it enters the chart.** The summary is a draft built from your notes — you verify the medications, doses, and pending items, and you sign it per your institution's policy.
{{< /callout >}}

## Troubleshooting

- **A med change appears without a reason.** Lumen only knows the *why* if you give it. Say *"lisinopril was held for hypotension, day 1"* and the medication table gets the rationale — the part the next clinician actually needs.
- **The summary is too long for your EHR field.** Ask for it: *"Condense the hospital course to one paragraph; keep the med table full."* Structure is negotiable; completeness of the med changes shouldn't be.
- **You dictated and a drug name came through wrong.** Transcription can stumble on sound-alike drugs. Scan the med list first when you dictate, and correct in chat: *"That's torsemide, not furosemide, at discharge."*

## Next steps

- **The patient needs their own version:** [Create a patient handout at an 8th-grade level](/guides/patient-handout/) — turn this discharge into instructions the family can actually use.
- **Better inputs, better drafts:** [How to ask AI clinical questions](/learn/prompting-for-clinicians/) — the consult-request habits that upgrade every note.
- **Every document format Lumen produces:** [Creating documents](/tools/document-generation/).
