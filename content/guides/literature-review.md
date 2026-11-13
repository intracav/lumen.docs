---
title: "Run a literature review with citations"
navTitle: "Literature review"
description: "Ask a focused clinical question and get a reproducible evidence review: real PubMed searches, screened studies and effects quoted from the abstracts."
lead: "Give the Clinical Research Specialist a focused question. Lumen runs the PubMed searches itself, screens what comes back and quotes every effect from the abstract it came from."
weight: 5
icon: library
who: "clinicians, educators and committee members"
keywords: ["AI literature review", "evidence synthesis with citations", "PubMed AI search"]
glance:
  what: "A step-by-step way to get a cited, reproducible review of the published evidence on a clinical question with Lumen's Clinical Research Specialist."
  who: "Clinicians, nurse educators, pharmacists and committee members who need to know what the literature says."
  why: "A committee decision needs evidence you can check. Lumen records the exact searches it ran, which studies it kept and why, and quotes every number from its source, so anyone can re-run or challenge it."
  needs: "Any Lumen plan. A focused question with a population, an intervention, a comparison and outcomes. About 10 to 15 minutes."
  result: "An evidence review with the searches, the screened studies, an evidence table of quoted effects and a written summary, exportable as a Word document."
---

Your vascular access committee wants to know whether peripheral IV catheters should be replaced on a schedule or only when there's a clinical reason. A textbook answer won't settle it. The committee needs the trials. Lumen's **Clinical Research Specialist** runs the PubMed searches itself and records each search with its date and hit count. It screens the records that come back and builds an evidence table in which every effect is quoted from the study's abstract. The result is a review someone else can re-run and check.

## Before you start

- **Plan:** any Lumen plan. Pro adds searches of ClinicalTrials.gov and deeper web research.
- **A focused question.** State the population, the intervention, the comparison and the outcomes you care about. This structure is called *PICO*. "Tell me about IVs" gets you a textbook chapter. A PICO question gets you a review.
- **Time:** about 10 to 15 minutes. The Specialist searches and reads before it writes.

A *Specialist* is a Lumen assistant set up for one kind of work. It follows a fixed checklist and saves a result that Lumen checks before you see it.

## How to run the review

{{< steps >}}
{{< step title="Sharpen the question (optional)" >}}
If your question is still loose, type `/` in the message box and choose **PICO Builder** from the **Skills** list. Then describe the question in your own words. Lumen turns it into a PICO question you can use in the next step.

{{< composer menu="skills" text="/" items="PICO Builder|Formulate clinical questions in structured PICO format;Literature Review|Systematic literature search and evidence synthesis;Evidence Grader|Grade quality of evidence using GRADE framework" >}}
{{< /step >}}
{{< step title="Choose the Clinical Research Specialist" >}}
Start a new chat. Type `@` and choose **Clinical Research** from the **Specialists** list.
{{< /step >}}
{{< step title="Ask the question" >}}
Type the question with its parts spelled out, then press **Send**:

{{< composer text="@Clinical Research in adults with peripheral intravenous catheters, does replacing the catheter only when clinically indicated, compared with routine replacement every 72 to 96 hours, change rates of phlebitis, catheter-related bloodstream infection or infiltration? Randomized trials and systematic reviews." >}}
{{< /step >}}
{{< step title="Let the Specialist search and screen" >}}
You'll see **Searching PubMed** several times, then **Checking and saving**. Lumen runs each search on PubMed itself and records the query, the date and the number of hits. You can close the tab while it works.
{{< /step >}}
{{< step title="Open the evidence review" >}}
Click the **Evidence review** card to open it in the side panel. Read it in this order: the searches, then the included and excluded records, then the evidence table, then the summary.
{{< /step >}}
{{< step title="Narrow or widen it" >}}
Ask follow-ups in the same chat. For example:

{{< composer text="Limit the evidence table to randomized trials. List any excluded record that looks relevant and say why it was excluded." >}}
{{< /step >}}
{{< step title="Export for the committee" >}}
Type `Make this review a Word document for the committee, with the search list and the evidence table.` Open the document card and click **Download**.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="agents-deliverable" alt="An evidence review in Lumen's side panel with the PubMed searches, screened records and an evidence table" caption="An evidence review. Every effect in the table is quoted from the abstract it came from." url="lumen.intracav.ai" >}}
{{< chat-demo title="Peripheral IV replacement" specialist="Clinical Research" caption="Illustration. Search counts and wording are examples." >}}
{{< user >}}In adults with peripheral IV catheters, does clinically indicated replacement, compared with routine replacement every 72 to 96 hours, change phlebitis or bloodstream infection rates?{{< /user >}}
{{< lumen thought="16" tools="Searched PubMed, Saved and checked" sources="9" >}}
**Searches:** 3 PubMed searches, run today. Each query, date and hit count is listed in the review.

**Records:** 9 included, 31 excluded with a reason, 0 unscreened.

**Summary:** The included randomized trials and the systematic review that pooled them found no clear difference in phlebitis or catheter-related bloodstream infection between the two approaches. Each statement names the records it rests on, and the numbers are quoted in the evidence table.

**Study design** comes from PubMed's publication types. None of the included records is flagged as retracted.

**Limits:** abstracts only. Full texts weren't read.

{{< verdict >}}Passed its checks. 14 of 14 quotes were found word for word in the PubMed abstracts.{{< /verdict >}}
{{< follow-ups "Limit to randomized trials|Show the excluded records|Make this a Word document" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

The review doesn't assign a GRADE certainty rating such as "high-quality evidence". That judgment belongs to a guideline panel, outcome by outcome. If a source prints its own grade, Lumen quotes it and says where it came from.

## Check the result

{{< lui-block title="Before you present it" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="The searches match your question" body="Read each query. If a key term is missing, ask Lumen to add a search." >}}
{{< lui-row type="check" title="The exclusions make sense" body="Every excluded record has a reason. Skim the list for anything you'd have kept." >}}
{{< lui-row type="check" title="The key numbers match the abstracts" body="Open at least the studies the summary leans on most." >}}
{{< lui-row type="check" title="Each summary statement names its studies" >}}
{{< lui-row type="check" title="You've noted the limits" body="Abstracts only, and the number of searches is capped. Pull full texts for the studies that decide the question." >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **One question per review.** If you have two questions, run two reviews.
- **Ask for the search strings** so your librarian can extend them.
- **Recruiting trials.** On Pro and higher, ask `Are there registered trials still recruiting on this question?` Lumen searches ClinicalTrials.gov and keeps those separate from published results.
- **Thin evidence is a finding.** If very little comes back, say so in your report rather than widening the question until something appears.

## Limits and safety

{{< callout type="safety" title="A rapid review, not a systematic review" >}}
This is a fast, reproducible scan of PubMed abstracts. It isn't a registered systematic review with dual screening and full-text appraisal. Use it to prepare and orient. Read the key papers in full before you change practice, and check the findings against your organization's policies.
{{< /callout >}}

- **PubMed only, abstracts only.** Studies not indexed in PubMed, or numbers that appear only in the full text, won't be included.
- **Lumen reports retractions that PubMed flags.** It can't catch problems PubMed hasn't recorded.
- **Quoted isn't the same as correct.** A matched quote shows what the abstract says. It doesn't show that the study was well done.

## FAQ

{{< faq question="Can someone else re-run my review?" >}}
Yes. The review lists each PubMed query with the date it ran and the number of hits, and each included record by its PubMed ID. Anyone can run the same searches.
{{< /faq >}}
{{< faq question="Why doesn't Lumen grade the evidence?" >}}
A GRADE rating is a structured judgment made by a panel for each outcome. Lumen reports study design from PubMed's publication types and quotes any grade a source prints. It doesn't invent one.
{{< /faq >}}
{{< faq question="Which plan do I need?" >}}
Any plan. PubMed searching is included on Free. ClinicalTrials.gov searches and deeper web research need Pro. See [Plans](/plans/).
{{< /faq >}}

## Next steps

{{< related "/guides/deep-web-research/" "/guides/analyze-a-document/" "/tools/literature-research/" "/chat/sources/" >}}
