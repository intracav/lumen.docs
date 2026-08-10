---
title: "Run an AI Literature Review with Citations"
description: "Ask a clinical question, get a cited evidence synthesis from PubMed, trials, and guidelines — then drill down and export. Step-by-step guide."
weight: 5
audience: clinician
time: "~10 minutes"
keywords: ["AI literature review", "evidence synthesis with citations", "PubMed AI search"]
---

## What you'll make

A structured, cited evidence review of a real clinical question — *"Does early mobilization reduce complications after central line placement?"* — that you can defend at committee. Lumen searches PubMed, ClinicalTrials.gov, and guideline sources, reads what it finds, grades the evidence, and writes a synthesis with inline citations you can verify. You'll finish by narrowing the results and exporting the review as a document.

Think of it as sending a very fast research resident to the library: they come back in minutes with the studies, the quality assessment, and a written summary — and every claim has a reference you can check.

{{< callout type="important" >}}
**What this is — and isn't.** This is a rapid evidence scan: excellent for orientation, committee prep, and deciding whether a question deserves deeper work. It is **not** a substitute for a formal systematic review with a registered protocol, dual screening, and exhaustive search. Treat it the way you'd treat a sharp colleague's overnight summary — verify before you cite.
{{< /callout >}}

## Before you start

- **A focused question.** "Tell me about central lines" produces a textbook chapter; a question with a population, an intervention, and an outcome produces a review. If your question is still fuzzy, the [PICO Builder skill](/skills-and-specialists/skills/) will sharpen it — that's literally its job.
- **A few minutes of patience.** The [Clinical Research Specialist](/skills-and-specialists/specialists/) runs at high autonomy — it may take many search-and-read steps before writing. Watching the tool chips appear is normal.
- **Web search left on** (the toggle near the message box), so Lumen can reach guideline sources beyond PubMed.

## The steps

<div class="steps-container">

{{< step num="1" title="Call the Clinical Research Specialist with a focused question" >}}
Type `@` in any chat, pick **Clinical Research**, and ask the question with its parts spelled out:

```text
@Clinical Research — In adult inpatients with a central venous catheter,
does early mobilization (vs. activity restriction) reduce complications
such as thrombosis, infection, or catheter dislodgement? Synthesize the
evidence with inline citations and grade its quality.
```

**You should see:** the Specialist's chip appear on your message, then a series of tool steps — PubMed searches, ClinicalTrials.gov lookups, guideline retrieval — before any prose. That pre-writing search phase is the point: it reads first, writes second.

If your question is fuzzier than this one, run the [PICO Builder skill](/skills-and-specialists/skills/) first: *"Help me frame a PICO question about mobility restrictions after central line placement"* — then feed the structured question to the Specialist.
{{< /step >}}

{{< step num="2" title="Read the synthesis — citations first" >}}
When the searching settles, Lumen writes the review: what the evidence shows, how strong it is, and where it's thin.

**You should see:** a structured synthesis with inline citations next to each claim, evidence-quality notes (the [Evidence Grader skill](/skills-and-specialists/skills/) applies the GRADE framework), and an honest gaps section — the studies that *don't* exist yet matter as much as the ones that do. Tap any citation to verify the source; that habit is the whole game.
{{< /step >}}

{{< step num="3" title="Drill down with follow-ups" >}}
The first synthesis is a map, not the destination. Narrow it:

```text
Limit the synthesis to randomized controlled trials in adults.
Any relevant preprints or trials still recruiting?
```

**You should see:** a revised summary scoped to RCTs, with lower-quality evidence set aside rather than silently blended in — plus any registered trials or preprints flagged as such, clearly separated from peer-reviewed results.

Other follow-ups worth trying: *"What do the current vascular access guidelines say?"*, *"Which single study would you rank as most decision-relevant, and why?"*
{{< /step >}}

{{< step num="4" title="Export the review as a document" >}}
When the synthesis says what you need it to say:

```text
Export this review as a formatted document for the vascular access
committee — include the citation list and the evidence grades.
```

**You should see:** a document card appear in the chat. Open it, then use **Download** to save it as a file you can print or attach to the meeting agenda. The full citation list rides along, so anyone on the committee can check your sources.
{{< /step >}}

</div>

{{< chat-demo title="Drilling into the evidence" >}}
{{< user >}}Limit to RCTs in adults — does the effect on catheter-related thrombosis hold up?{{< /user >}}
{{< lumen >}}Restricting to randomized trials thins the evidence considerably. The signal for reduced thrombosis comes mostly from observational cohorts; the RCT base is small, with wide confidence intervals — **low-certainty evidence** by GRADE. I've kept the observational findings in a separate section so the distinction stays visible. [Sources 3, 7, 11]{{< /lumen >}}
{{< /chat-demo >}}

## Troubleshooting

- **The answer feels generic, like a textbook chapter.** Your question was probably too broad. Add a population, a comparator, and an outcome — or run the PICO Builder skill first and resubmit the structured version.
- **Very few results came back.** Some questions genuinely have thin literature — that's a finding, not a failure. Ask *"broaden the search — include observational studies and adjacent populations"* and Lumen will widen the net while labeling the weaker evidence as such.
- **A citation doesn't seem to support the claim.** Say so in the chat — *"citation 4 doesn't support that sentence, re-check it"* — and Lumen will re-read the source and correct or retract the claim. Verifying citations is expected use, not an insult.

## Next steps

- [Upload & Analyze a Clinical PDF](/guides/analyze-a-document/) — put a full-text paper or guideline in front of Lumen and question it directly.
- [RAG: How AI Cites Real Sources Instead of Guessing](/learn/rag-and-citations/) — why these citations are retrieved, not remembered.
- [Research & Evidence tools](/tools/literature-research/) — the PubMed, trials, and FDA tools the Specialist reaches for.
