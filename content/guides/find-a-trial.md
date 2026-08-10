---
title: "Match a Patient to Clinical Trials"
description: "Give Lumen a de-identified patient profile and get a ranked shortlist of recruiting trials from ClinicalTrials.gov — with the eligibility gaps spelled out."
weight: 21
audience: clinician
time: "~10 minutes"
tier: pro
keywords: ["AI clinical trial matching", "find clinical trials for patient", "ClinicalTrials.gov search AI", "trial eligibility screening"]
---

## What you'll make

A ranked shortlist of actively recruiting clinical trials matched to a patient's profile — each with its NCT number, phase, the eligibility criteria your patient clearly meets, and the criteria you still need to verify — plus a plain-language summary you can use in the conversation with the patient. What normally means an evening wading through hundreds of raw registry results becomes a screening shortlist in minutes.

We'll walk a case where trials are often the next real option: a **61-year-old with metastatic pancreatic adenocarcinoma who has progressed after FOLFIRINOX**. Every clinical detail below is fictional.

{{< callout type="warning" >}}
**De-identify before you describe.** A trial search needs a *profile*, not a patient: age, diagnosis and stage, prior treatment lines, performance status, key organ function. It never needs a name, MRN, date of birth, or exact dates of care — leave them out. If you're pasting from a note, run it through the [de-identification tool](/tools/privacy/) first. This is the habit that makes everything downstream safe.
{{< /callout >}}

## Before you start

- **You'll need Pro or above.** Trial matching runs on [Pro, Plus, and Max plans](/plans/).
- **Build the profile first:** diagnosis with stage and relevant markers, every prior line of therapy, performance status (ECOG or Karnofsky), and the organ-function facts that gate most oncology trials.
- **Know the practical limits:** how far the patient can realistically travel matters as much as eligibility — have a geography in mind, even a rough one.

## Find the candidates

<div class="steps-container">

{{< step num="1" title="Bring in the Trial Matcher with a de-identified profile" >}}
Type **@** in any chat and pick **[Trial Matcher](/skills-and-specialists/specialists/)**. Give it the profile as a set of match criteria:

```text
@Trial Matcher — de-identified profile: 61-year-old with metastatic
pancreatic adenocarcinoma, progressed after 6 cycles of FOLFIRINOX.
ECOG performance status 1. No prior immunotherapy. Adequate hepatic
and renal function, no active biliary obstruction. Find actively
recruiting trials — phase 2 or 3 — and score each candidate against
this profile.
```

**You should see:** the Trial Matcher chip appear on your message, then a plan — search the registry, filter to recruiting studies, score each candidate against your criteria — before any results.
{{< /step >}}

{{< step num="2" title="Watch the registry search run" >}}
Lumen queries ClinicalTrials.gov live with the [Clinical Trials Search tool](/tools/literature-research/) — filtered to **recruiting** studies and the phases you asked for — then reads each candidate's inclusion and exclusion criteria and scores it against the profile. Several search passes are normal: by condition, by treatment setting, by mechanism.

**You should see:** tool steps appearing in the chat as each search and read completes. This is a registry lookup, not a recollection — every trial in the shortlist has an NCT number you can check yourself.
{{< /step >}}

{{< step num="3" title="Read the shortlist — matches and gaps" >}}
The result is a ranked list, and the ranking logic is visible: for each trial, the criteria the profile clearly meets, the criteria it clearly fails, and — most useful — the criteria that **can't be determined from the profile** and need a lab value, a biopsy result, or a records review to answer.

{{< chat-demo title="A candidate with its gaps spelled out" >}}
{{< user >}}
What's the top match, and what would we still need to verify?
{{< /user >}}
{{< lumen >}}
**Top candidate:** a phase 2 study of a maintenance combination after first-line chemotherapy in metastatic pancreatic adenocarcinoma — recruiting at 14 sites, 2 within your region.

**Meets:** metastatic disease ✓ · prior FOLFIRINOX allowed as first line ✓ · ECOG 0–1 ✓ · no prior immunotherapy ✓

**To verify before screening:** measurable disease per RECIST · absolute neutrophil count and platelet thresholds · germline testing status — the trial stratifies on it and it isn't in the profile.

**Fails nothing on paper**, but two criteria depend on labs I don't have. Site contact and NCT number are in the full table above.
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** honest gaps, not forced matches. A trial that looks perfect except for one unverifiable criterion is presented exactly that way — the gap is the next thing to check, not a detail to gloss over.
{{< /step >}}

{{< step num="4" title="Turn the shortlist into a conversation aid" >}}
Before you raise trials with the patient, get the framing right:

```text
Draft a plain-language summary of the top 3 candidates I can talk
through with the patient — what each trial is testing, what
participation would involve, and what we'd need to find out before
they could be screened.
```

**You should see:** a patient-facing summary that presents each study as a *possibility to explore*, with the screening steps made explicit — not a promise of a slot.
{{< /step >}}

</div>

{{< callout type="important" >}}
**A shortlist is not enrollment.** Lumen surfaces candidates worth screening; it cannot enroll anyone, and neither can you from this list. Eligibility is determined by the trial's investigator after formal screening — labs, imaging, and consent — and registry listings lag reality. Treat every candidate as "worth a call to the site," nothing more.
{{< /callout >}}

## Troubleshooting

- **Zero or very few results.** Real, and worth knowing — but before concluding that, widen the net: *"include phase 1/2 studies and basket trials that accept pancreatic adenocarcinoma, and expand the geography."* Rare-profile patients often match mechanism-based trials that condition-only searches miss.
- **Too many candidates to be useful.** Sharpen the exclusions: add the specifics that gate oncology trials — prior lines by name, measurable disease, notable comorbidities — and ask Lumen to re-score. Ten trials with visible gaps beat forty raw hits.
- **A trial on the list turns out to be closed.** Registry status lags what sites know. Always confirm recruitment status with the listed site contact before mentioning a specific trial to the patient — ask Lumen to *"pull the site contacts for the top 3"* to make those calls easy.

## Next steps

- **Want the evidence behind a candidate's approach?** [Run an AI Literature Review with Citations](/guides/literature-review/) on the trial's mechanism before the patient conversation.
- **Curious how the search-score-verify cycle works?** [How agentic loops work](/learn/agentic-loops/) explains the multi-step process you just watched.
- **The registry and evidence tools in one place:** [Research & Evidence tools](/tools/literature-research/) — ClinicalTrials.gov, PubMed, guidelines, and preprints.
