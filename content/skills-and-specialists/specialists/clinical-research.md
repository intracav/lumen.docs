---
title: "Review the evidence with Clinical Research"
navTitle: "Clinical Research"
description: "The Clinical Research specialist builds a reproducible evidence review: a PICO question, searches Lumen runs and counts, screened studies and quoted effects."
lead: "Ask a clinical question. Clinical Research turns it into a PICO, runs the searches, screens what comes back, and builds an evidence table where every effect is quoted from its abstract."
weight: 5
icon: flask
who: "physicians, nurses, pharmacists, educators, researchers"
glance:
  what: "Clinical Research is a Lumen specialist that produces a reproducible literature review: the question in PICO form, the searches it ran, the studies it kept and why, and the effects quoted from each abstract."
  who: "Physicians, advanced practice providers, nurses, pharmacists, educators and researchers who need to know what the evidence says."
  why: "To get a review you can audit and re-run, instead of a summary you have to take on trust."
  needs: "A Lumen account on any plan. A clinical question. About 5 to 10 minutes."
  result: "A saved evidence review with its searches, screened records, an evidence table with quoted effects, and a synthesis based only on included studies."
---

A literature summary is only as good as its searches. **Clinical Research** shows its work. It writes your question as a PICO (population, intervention, comparison, outcome), runs the searches on PubMed and other sources through Lumen's server, which records exactly what was searched and how many results came back. It screens the records, gives a reason for each one it excludes, and quotes each study's effect from the abstract. The synthesis uses only the studies it included.

## Before you start

- **Plan:** any plan. PubMed search works on every plan. Deep web research, which reads many web pages at once, needs Pro or above.
- **Have ready:** a focused clinical question. "SGLT2 inhibitors in HFpEF: cardiovascular death and heart-failure hospitalization" works better than "heart failure drugs".
- **Optional:** attach a paper you want appraised.

## How to run an evidence review

{{< steps >}}
{{< step title="Open Clinical Research" >}}Click **Explore**, choose **Specialists**, click **Clinical Research**, then **Open Clinical Research**. Or type `@Clinical Research` in any chat.{{< /step >}}
{{< step title="Pick the task" >}}Under **Start with**, click **Review the evidence**. To critique one study, click **Appraise a paper** and attach it.{{< /step >}}
{{< step title="Enter your question" >}}Under **Clinical question**, type it, for example "early mobilization after hip fracture surgery". Then send.{{< /step >}}
{{< step title="Check the PICO and searches" >}}When the review is ready, open it. Read the PICO and the search terms first; if they missed your intent, say so in the chat and Lumen re-runs them.{{< /step >}}
{{< step title="Read the evidence table" >}}Each row is a study with its effect quoted from the abstract. Open the PubMed record for any study you'll rely on.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="SGLT2 inhibitors in HFpEF" specialist="Clinical Research" caption="Illustration. EMPEROR-Preserved and DELIVER are real trials; read their abstracts before quoting any figure." >}}
{{< user >}}Synthesize the evidence for SGLT2 inhibitors in heart failure with preserved ejection fraction.{{< /user >}}
{{< lumen tools="Searched PubMed, Searched ClinicalTrials.gov, Saved and checked" sources="2" >}}
{{< task-strip >}}
{{< task state="done" label="Wrote the PICO" >}}
{{< task state="done" label="Ran 3 searches" meta="counts recorded" >}}
{{< task state="done" label="Screened the records, with reasons for exclusions" >}}
{{< task state="done" label="Quoted each included study's effect" >}}
{{< task state="done" label="Saved the review and checked its quotes" >}}
{{< /task-strip >}}

Two large placebo-controlled trials, EMPEROR-Preserved with empagliflozin {{< cite 1 >}} and DELIVER with dapagliflozin {{< cite 2 >}}, reported a lower rate of the combined outcome of cardiovascular death or worsening heart failure. Most of the benefit came from fewer heart-failure events.

{{< verdict >}}Passed its checks: every study came from the review's own searches, and every effect is quoted from its abstract.{{< /verdict >}}
{{< follow-ups "Make this a one-page summary for journal club|Build slides from this review|What do current guidelines say?" >}}
{{< /lumen >}}
{{< /chat-demo >}}

## Tips

- Narrow the population when you can: age group, setting, severity.
- Ask Lumen to export the review as a document or slide deck for journal club or a committee.
- Clinical Research doesn't assign a certainty grade, such as GRADE, unless a source prints one. If you need grading, use the **Evidence Grader** skill and review its reasoning.

## Limits and safety

- The review covers what its searches returned. It isn't a full systematic review; it may miss studies outside PubMed, in other languages, or not yet indexed.
- Effects are quoted from abstracts. Read the full paper before you rely on a result.
- No recommendation strength is assigned unless a source states one.

{{< callout type="safety" title="Evidence isn't a treatment decision" >}}
A review tells you what studies found in their populations. Apply it to a patient with your clinical judgment, current guidelines and your organization's protocols.
{{< /callout >}}

## FAQ

{{< faq question="Which sources does it search?" >}}
PubMed first, plus ClinicalTrials.gov for ongoing studies (Pro), FDA drug labels, and the web where useful. Every record in the review came back from one of its own searches.
{{< /faq >}}
{{< faq question="Can I re-run the review later?" >}}
Yes. The searches are recorded in the review. Ask Lumen to re-run them in the same chat to see what's new.
{{< /faq >}}

## Next steps

{{< related "/guides/literature-review/" "/tools/literature-research/" "/skills-and-specialists/verified-results/" "/skills-and-specialists/specialists/trial-matcher/" >}}
