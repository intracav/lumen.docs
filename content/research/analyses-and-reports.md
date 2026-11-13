---
title: "Run analyses and write reports in Research"
navTitle: "Analyses and reports"
description: "Run validated methods, approve analyses Lumen proposes, read the provenance record of every run, and render a report with a methods section."
lead: "Run the analysis, keep the receipts, and write it up from the record."
weight: 2
icon: file-text
tier: pro
who: "clinical researchers, QI leads"
glance:
  what: "How to analyse data in Lumen Research: validated methods, Lumen's proposed code that you approve, the History of every run, and reports."
  who: "Researchers and quality-improvement leads with a Research project and a dataset."
  why: "So every number in your paper or QI report can be traced back to the exact code, data and settings that produced it."
  needs: "A Research project with a dataset (see Get started). Pro or above. Lumen for Mac to render reports."
  result: "Recorded analyses and a report with a methods section."
---

Reviewers, ethics committees and quality boards all ask the same question: how exactly did you get that number? Lumen Research answers it by recording every run, whether you, the Playground or Lumen started it. You can then turn chosen runs into a report with a methods section written from that record.

## Before you start

- A Research project with a dataset imported. See [Get started with Research](/research/get-started/).
- Pro or above.
- To render reports to HTML or PDF: Lumen for Mac with Quarto installed. In the browser, Lumen saves the report source for you to render later.

## How to run a validated method

{{< steps >}}
{{< step title="Open the Playground" >}}In your project, open the **Playground** tab. It lists the validated methods by group, such as Clinical, Inference, Models and Survival.{{< /step >}}
{{< step title="Choose a method" >}}Pick one, such as **Kaplan-Meier survival with log-rank test** or **Two-sample t-test**. Read **Assumptions, limitations and references** and **Why the defaults** first.{{< /step >}}
{{< step title="Set it up and run" >}}Choose the dataset and columns, then run it. Use **Show code** to see the exact R, or **Open in editor** to change it.{{< /step >}}
{{< step title="Check the diagnostics" >}}Review the output and the **Diagnostics produced** for that method before you rely on the result.{{< /step >}}
{{< /steps >}}

## How to ask Lumen for an analysis

{{< steps >}}
{{< step title="Open Ask Lumen" >}}Open the **Ask Lumen** tab. Its subtitle tells you what Lumen can see, normally summaries only.{{< /step >}}
{{< step title="Ask your question" >}}For example: "Compare dwell time before and after the bundle, accounting for the unit."{{< /step >}}
{{< step title="Review the proposal" >}}Lumen shows an approval card, such as **Lumen wants to run R code** or **Lumen wants to install 2 packages from CRAN**, with exactly what it will do. **Nothing runs until you approve.**{{< /step >}}
{{< step title="Approve, edit or decline" >}}Click **Approve** to run it, **Edit** to change it first (then **Approve edited**), or **Decline**.{{< /step >}}
{{< /steps >}}

{{< chat-demo title="Ask Lumen in a Research project" caption="Illustration with fictional audit data. Lumen saw column names and summaries only." >}}
{{< user >}}Did dwell time change after the Q2 bundle? Patients are clustered by unit.{{< /user >}}
{{< lumen tools="Research" >}}
Because the data is clustered by unit, a plain t-test would overstate certainty. I suggest a **linear mixed-effects model** with period as a fixed effect and unit as a random effect.

{{< approval action="Lumen wants to run Linear mixed-effects model" >}}**Data:** audit · **Outcome:** dwell_days · **Fixed:** period · **Random:** unit. Nothing runs until you approve.{{< /approval >}}
{{< /lumen >}}
{{< /chat-demo >}}

## The methods library

The Playground has 50 validated methods. Each one says what it assumes, what it can't do, and shows the R it runs. They include:

- **Clinical:** Baseline characteristics table (Table 1), random-effects meta-analysis, ROC curve and diagnostic accuracy.
- **Inference:** t-tests, ANOVA, chi-square, Fisher's exact, Wilcoxon and Kruskal-Wallis tests, correlation, bootstrap and permutation tests, multiple-testing correction.
- **Models:** linear, logistic and mixed-effects regression, regression with multiple imputation, Bayesian linear regression.
- **Survival:** Kaplan-Meier with log-rank, Cox proportional hazards, competing risks.
- **Design:** power and sample size, group-sequential designs, trial simulations.
- **Also:** exploration (descriptive statistics, missing data, PCA), simulation and pharmacokinetic models, genomics and single-cell methods, and a cross-validated classification model.

**What "validated" means:** each method's R is run in real R against reference results, using published values where R's own documentation prints them, or a direct call to the standard R function with the same settings. Two methods need Lumen for Mac and show **Needs Lumen for Mac** in the browser.

## How provenance works

Every run is recorded in the **History** tab, whoever started it. Origin chips show **You**, **Lumen**, **Playground** or **Lumen · edited**. Each record keeps:

- the exact code that ran, with the method name and version and its settings;
- the datasets used, each with a fingerprint (a SHA-256 hash) so you can prove which version of the data was analysed;
- the R version, platform and package versions;
- the result status, warnings, plots and objects created, and how long it took.

Use **Compare two** to see what changed between two runs, and **Re-run** to repeat one.

## How to write a report

{{< steps >}}
{{< step title="Choose the runs" >}}In **History**, click **Choose runs** and select the ones that belong in the report.{{< /step >}}
{{< step title="Open the report dialog" >}}Click **Report…**. The dialog is titled **Report of N runs**.{{< /step >}}
{{< step title="Set it up" >}}Give it a **Title**. Choose **Re-running** (the report re-runs the code when rendered) or **Static**, pick **HTML** or **PDF**, and turn on **Methods section** if you want one.{{< /step >}}
{{< step title="Render it" >}}Click **Render**. On a Mac, Quarto renders the report into your project. In the browser, Lumen saves the report source (.qmd) in the `reports` folder for you to render in Lumen for Mac.{{< /step >}}
{{< /steps >}}

{{< tip title="Only need the methods paragraph?" >}}
Use **Copy methods section** in History or the report dialog. It writes a methods paragraph, with references, from the recorded runs.
{{< /tip >}}

## Limits and safety

- **Approval is required.** Lumen can't run code, install packages or write reports without your approval.
- **Validated isn't the same as appropriate.** A method can be correctly implemented and still be the wrong choice for your data. Check the assumptions, and have a statistician review confirmatory analyses.
- **Quarto runs only on the Mac.** The browser saves the report source only.
- **Lumen sees summaries only by default.** If the project owner turns on row-level data, values are de-identified first, but de-identification isn't perfect.
- **The record is only as good as the data.** Provenance proves what ran on which file. It doesn't prove the data was right.

## FAQ

{{< faq question="Can I write my own R code?" >}}
Yes. Use the editor in your project. Your runs are recorded in History with the origin **You**, like Playground and Lumen runs.
{{< /faq >}}
{{< faq question="Can a reviewer reproduce my results?" >}}
The History keeps the code, data fingerprints, R and package versions for every run, and a **Re-running** report re-runs the code when it's rendered. Share the project or download it as a zip so they have the same files.
{{< /faq >}}
{{< faq question="Does Lumen pick the statistical test for me?" >}}
It can propose one, and explain why. You decide whether to run it. Lumen uses the study design you entered to warn when a method doesn't fit.
{{< /faq >}}

## Next steps

{{< related "/research/get-started/" "/learn/deidentification/" "/tools/literature-research/" >}}
