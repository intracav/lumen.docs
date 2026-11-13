---
title: "Get started with Lumen Research"
navTitle: "Get started"
description: "Create a Research project, choose whether R runs in your browser or on your Mac, import a dataset and run your first validated method."
lead: "From an empty project to your first analysis, with your data kept on your device."
weight: 1
icon: rocket
tier: pro
who: "clinical researchers, QI leads"
glance:
  what: "How to set up a Lumen Research project: create it, pick where R runs, import a dataset and run a first method."
  who: "Clinical researchers, quality-improvement leads and educators with a dataset to analyse."
  why: "To start a reproducible analysis in minutes without installing a statistics package or uploading your data to a server."
  needs: "A Lumen account on Pro or above (to create and sync projects). A modern browser, or Lumen for Mac with R installed. About 10 minutes."
  result: "A project with your dataset loaded and a first recorded run."
---

You have an export from last quarter's central-line audit and a question: did dwell time change after the new bundle? Lumen Research lets you answer it in R, the statistics language most researchers use, without sending the data anywhere. This page gets you to your first recorded result.

## Before you start

- **Plan:** Pro or above to create and sync projects. On a lower plan you can still open projects shared with you. See [Plans](/plans/).
- **Where R will run.** Choose one:
  - **In your browser.** Nothing to install. Good for datasets under about 0.9 GB.
  - **Lumen for Mac** (the direct-download version, not the App Store version). Uses your own R installation, and adds Quarto reports, package management and larger data. You'll need R from [cloud.r-project.org](https://cloud.r-project.org/bin/macosx/) or Homebrew.
- **A dataset.** CSV, TSV, Excel (.xlsx or .xls), R data (.rds, .RData), Parquet, Feather or JSON. SAS and SPSS files aren't supported; export them to CSV first.
- **Permission to use the data.** Follow your organization's research and data-governance rules, including any ethics approval.

## How to set up a project

{{< steps >}}
{{< step title="Open Research" >}}In the sidebar, open **More**, then **Research**. You'll see **Lumen Research** and your projects.{{< /step >}}
{{< step title="Create a project" >}}Click **New project**. Give it a **Name** and a **Research question**, such as "Did mean central-line dwell time change after the Q2 bundle?". Choose an **Objective**: **Exploratory**, **Confirmatory** or **Unspecified**.{{< /step >}}
{{< step title="Describe the study design" >}}Answer **Randomized**, **Repeated measures**, **Clustered** and **Pre-specified** with **Yes**, **No** or **Not sure**. Lumen uses this to warn you when a method doesn't fit your design. Click **Create**.{{< /step >}}
{{< step title="Check where R is running" >}}In the browser, the runtime card says **R 4.6.0 runs in this browser (webR 0.6.0)**. On a Mac, click **Turn on the Research helper**. If macOS asks, click **Open Login Items**, allow Lumen, then click **I allowed it**. When it's ready, you'll see **The Lumen Research helper is running**.{{< /step >}}
{{< step title="Import your dataset" >}}In the **Files** tab, click **Import dataset**, choose the file, and give it a **Name in R**, such as `audit`. In the browser you can also drag the file in.{{< /step >}}
{{< step title="Run a first method" >}}Open the **Playground** tab, choose **Descriptive statistics**, select your dataset and columns, and run it. The output appears in **Data** and **Plots**, and the run is added to **History**.{{< /step >}}
{{< /steps >}}

{{< tip title="Try an example project first" >}}
If you'd like to see Research before using your own data, open one of the example projects, such as the ICU central-lines example. They use made-up data.
{{< /tip >}}

## What you'll see

{{< screenshot src="research-workspace" alt="The Lumen Research workspace with a project's files on the left, R output in the centre and the History tab listing recorded runs" caption="A project in the Research workspace. Files and objects are on the left. Plots, Data, Playground, History and Ask Lumen are on the right." url="lumen.intracav.ai/research" >}}
{{< lui-block title="Central-line dwell time, Q1 vs Q3" sub="Harbor Valley Medical Center · ICU · fictional data" >}}
{{< lui-kv "Runtime=R 4.6.0 runs in this browser (webR 0.6.0);Dataset=audit (412 rows, 9 columns);Lumen sees=Summaries only" >}}
{{< lui-stats >}}
{{< lui-stat label="Median dwell, Q1" value="6.2" unit="days" >}}
{{< lui-stat label="Median dwell, Q3" value="5.1" unit="days" >}}
{{< /lui-stats >}}
{{< lui-rows >}}
{{< lui-row title="Descriptive statistics" body="Playground · v1 · You" value="ok" >}}
{{< lui-row title="Missing data overview" body="Playground · v1 · You" value="ok" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

A shield icon in the top bar tells you how R is isolated. In the browser, R runs in its own worker inside the tab. On a Mac, R runs as a separate process under a macOS sandbox that can only change files inside your project.

## What Lumen can see

By default, **Lumen sees: summaries only**: column names, counts and summaries, never individual rows. Small groups (fewer than 5) are suppressed in those summaries.

The project owner can turn on **Row-level data for Lumen** in **Project settings**. Values are then de-identified before they leave your computer. De-identification is not perfect, so leave this off unless you need it and your governance allows it.

## Limits and safety

- **Browser limits.** About 2 GB of objects, one task at a time, and stopping a run restarts R. Files bigger than roughly 0.9 GB need Lumen for Mac. Quarto reports, package locking, linked data folders and background jobs also need the Mac app.
- **Mac app.** The Research helper comes only with the direct-download Lumen for Mac, not the App Store version. Lumen doesn't install R for you.
- **No SAS or SPSS import.** Export to CSV first.
- **De-identification has limits.** It applies to everything Research sends to a model, but it can miss things. The safest data is data that never leaves your device, which is the default.
- **You're responsible for the analysis.** Lumen can propose a wrong or unsuitable method. Check assumptions and have a statistician review confirmatory work.

## FAQ

{{< faq question="Does my data get uploaded to Lumen's servers?" >}}
No. The data is read and analysed on your device. The server keeps a description of each dataset (name, size, column names and counts) so the project can sync, never the values.
{{< /faq >}}
{{< faq question="Do I need to know R?" >}}
No. You can run methods from the **Playground** with forms, and ask Lumen to propose an analysis. Every method shows the R it runs, so you can learn as you go or hand the code to a statistician.
{{< /faq >}}
{{< faq question="Can I share a project with a colleague?" >}}
Yes. Colleagues you invite see it under **Invitations** and can **Accept** or **Decline**. Invitations last 14 days.
{{< /faq >}}
{{< faq question="Why don't I see Research?" >}}
Research appears in the sidebar under **More** when it's available for your account. Creating and syncing projects needs Pro or above.
{{< /faq >}}

## Next steps

{{< related "/research/analyses-and-reports/" "/learn/deidentification/" "/plans/" >}}
