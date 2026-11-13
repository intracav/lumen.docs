---
title: "Search the literature and trials"
navTitle: "Research and evidence"
description: "Lumen searches PubMed, medRxiv, FDA drug labels, ClinicalTrials.gov and the web during a chat, and cites what it finds."
lead: "Ask for the evidence in plain words. Lumen runs the searches, reads the results and links every claim to the paper, label or trial record it came from."
weight: 2
icon: book-open
keywords: ["PubMed search AI", "ClinicalTrials.gov search", "FDA drug label lookup", "medical literature search"]
glance:
  what: "Built-in tools that search PubMed, medRxiv preprints, FDA drug labels, ClinicalTrials.gov and the web while Lumen writes an answer."
  who: "Clinicians, pharmacists, educators and researchers who need the evidence behind a decision."
  why: "To get a cited summary in seconds instead of searching several databases by hand."
  needs: "Any plan for PubMed, medRxiv, drug labels and basic web search. Pro or above for ClinicalTrials.gov and deep web research."
  result: "An answer with numbered citations you can open, plus the searches Lumen ran."
---

When a question turns on the evidence, such as a trial result, what a label says or whether studies are recruiting, Lumen looks it up rather than answering from memory. It decides which databases to search, runs the searches live, and cites the specific article, label section or trial record behind each statement.

## Before you start

- **Plan:** PubMed, medRxiv, the FDA drug label and basic web search work on every plan. **Clinical Trials** (ClinicalTrials.gov) and deep web research ({{< tier-badge "pro" >}}) need Pro or above.
- **Have ready:** the question, and any limits that matter, such as population, years or study type.
- **For a full review:** a structured, reproducible literature review is the job of the Clinical Research specialist. See [Clinical Research](/skills-and-specialists/specialists/clinical-research/).

## The tools

| Tool (as shown in Explore) | What it does | Plan |
|---|---|---|
| **Search PubMed** | Finds peer-reviewed articles in PubMed and reads their abstracts. | Free |
| **FDA Drug Label** | Pulls the official FDA prescribing information: indications, dosing, contraindications, warnings. | Free |
| medRxiv search | Finds preprints on medRxiv. Preprints are not peer reviewed. | Free |
| **Clinical Guidelines** | Retrieves USPSTF recommendations and recent practice guidelines found on PubMed. | Free |
| **Clinical Trials** | Searches ClinicalTrials.gov by condition, drug, phase or location. | Pro |
| Web search | Searches the web and returns titles, links and snippets. | Free |
| Deep web research | Searches and reads several pages in depth, or crawls and extracts from a site. | Pro |

## How to search the evidence

{{< steps >}}
{{< step title="Ask the question in chat" >}}Describe what you need. For example: "What did the SGLT2 inhibitor trials in heart failure with preserved ejection fraction show?"{{< /step >}}
{{< step title="Narrow it if needed" >}}Add limits in the same message: "RCTs only, since 2020" or "recruiting trials in Ohio".{{< /step >}}
{{< step title="Watch the tool chips" >}}While Lumen works, chips such as **Searching PubMed** appear. When finished they read **Searched PubMed**, **Searched ClinicalTrials.gov** or **FDA drug data retrieved**.{{< /step >}}
{{< step title="Open the sources" >}}Click a numbered citation to read the passage it came from. Check the population, dose and outcome match your patient before you rely on it.{{< /step >}}
{{< /steps >}}

To browse these tools with example questions, open {{< ui-path "Explore" "Built-in tools" >}} and pick **Search PubMed** or **Clinical Trials**.

## What you'll see

{{< screenshot src="chat-thinking-tools" alt="A Lumen answer with PubMed tool chips and numbered citations" caption="Tool chips show each search Lumen ran. Citations link to the articles." url="lumen.intracav.ai" >}}
{{< chat-demo title="SGLT2 inhibitors in HFpEF" caption="Illustration. Real answers cite real, checkable sources." >}}
{{< user >}}What did the big SGLT2 inhibitor trials in HFpEF show?{{< /user >}}
{{< lumen thought="3" tools="Searched PubMed" sources="2" evidence="true" >}}
Two large randomized trials found a lower risk of the combined outcome of cardiovascular death or worsening heart failure. In **EMPEROR-Preserved**, empagliflozin reduced it compared with placebo (hazard ratio 0.79) {{< cite 1 >}}. In **DELIVER**, dapagliflozin did the same in patients with mildly reduced or preserved ejection fraction (hazard ratio 0.82) {{< cite 2 >}}. In both trials the benefit was driven mainly by fewer heart-failure events.

Open each trial to check its inclusion criteria against your patient.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Tips

- **Say what kind of evidence you want.** "Meta-analyses only" or "guidelines, not primary studies" changes which searches Lumen runs.
- **Ask for the label directly** when the question is regulatory: "What does the FDA label say about apixaban in severe renal impairment?"
- **Use a specialist for a full review.** The Clinical Research specialist records its searches so another person can rerun them.

## Limits and safety

{{< callout type="safety" title="Read the source before you act" >}}
Lumen summarizes what it found, and summaries can miss detail or be wrong. Open the cited article, label or trial record, check it fits your patient, and use your own judgment. Preprints from medRxiv are not peer reviewed.
{{< /callout >}}

- Lumen reads abstracts and the text it can reach. It may not see a full article behind a paywall.
- Trial records change. Confirm eligibility and recruiting status with the trial site.
- If no search returns support for a statement, Lumen should say so instead of filling the gap.

## FAQ

{{< faq question="Does Lumen make up references?" >}}
References come from the searches Lumen runs, and each citation links to the record it found. Still, open the link and confirm the article says what the answer claims.
{{< /faq >}}
{{< faq question="Why can't I search ClinicalTrials.gov?" >}}
The **Clinical Trials** tool needs Pro or above. On Free, Lumen answers without it. In **Explore**, the tool shows **Pro plan** when your plan doesn't include it.
{{< /faq >}}
{{< faq question="Can Lumen search a journal my library subscribes to?" >}}
No. It searches public databases and the web. You can upload a full-text article you are permitted to share, and Lumen will read it.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/specialists/clinical-research/" "/chat/sources/" "/tools/search-sources/" "/guides/literature-review/" >}}
