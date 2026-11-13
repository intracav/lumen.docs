---
title: "Lumen Research"
navTitle: "Research"
description: "A statistics workspace where your data stays on your device, Lumen proposes R code you approve, and every run is recorded for your methods section."
lead: "Run real statistics in R with Lumen beside you. Your data stays on your computer, and every step is on the record."
weight: 22
group: create
icon: flask
tier: pro
cascade:
  audience: clinician
glance:
  what: "An R statistics workspace inside Lumen. You import a dataset, run validated methods or your own code, and Lumen suggests analyses that you approve before anything runs."
  who: "Clinical researchers, quality-improvement leads, nurse scientists and educators analysing study or audit data."
  why: "To get from a spreadsheet to a defensible analysis and report, with a full record of what was run, without sending your data to a server."
  needs: "A Lumen account. Pro or above to create and sync projects. A modern browser, or Lumen for Mac (direct download) for larger data and reports."
  result: "A project with analyses, a provenance record of every run, and a report you can render."
hideAutoGrid: true
---

**Lumen Research** is a statistics workspace that runs the R language on your own device. You bring a dataset, such as a central-line audit or a pilot study export. You run tested methods from a library or write your own code, and you can ask Lumen to propose an analysis. Nothing runs until you approve it, and every run is recorded so you can write up exactly what you did.

## How it keeps your data on your device

{{< flow >}}
{{< flow-node kicker="Your device" title="Data and R" icon="monitor" tint="green" >}}The dataset is loaded and analysed in your browser or on your Mac. The values stay there.{{< /flow-node >}}
{{< flow-node kicker="Lumen sees" title="Summaries only" icon="eye" tint="blue" >}}By default, Lumen sees column names, counts and summaries, never individual rows.{{< /flow-node >}}
{{< flow-node kicker="Before any model call" title="De-identified" icon="shield-check" tint="plum" >}}What Lumen does see is de-identified before it reaches the model.{{< /flow-node >}}
{{< /flow >}}

The server stores a description of each dataset (its name, size, column names and counts) so your project can sync, but never the values themselves.

## Pages in this section

{{< card-grid cols="2" >}}
{{< card title="Get started with Research" href="/research/get-started/" icon="rocket" tint="blue" >}}Create a project, choose where R runs, import data and run your first method.{{< /card >}}
{{< card title="Analyses, provenance and reports" href="/research/analyses-and-reports/" icon="file-text" tint="green" >}}Use validated methods, approve Lumen's proposals, read the history and render a Quarto report.{{< /card >}}
{{< /card-grid >}}

**Which page do I need?** New to Research? Start with [Get started](/research/get-started/). Already have a project with data in it? Go to [Analyses, provenance and reports](/research/analyses-and-reports/).

## Where it runs

| | In your browser | Lumen for Mac |
|---|---|---|
| How R runs | Inside the browser tab (webR) | Your own R installation, through the Lumen Research helper |
| Best for | Getting started, small and medium datasets | Large data, reports, package management, long runs |
| Reports | Writes the report source; render it on a Mac | Renders HTML or PDF with Quarto |

## Good to know

- **Approval first.** When Lumen proposes code, a package install or a report, it shows you exactly what it will do. **Nothing runs until you approve.**
- **Methods are tested.** Each method in the library is checked in real R against reference results, and it lists its assumptions and limitations.
- **De-identification applies here.** Research is one of the places in Lumen where text is de-identified before any model call. It isn't perfect, so the default keeps rows away from Lumen entirely.

{{< cta heading="Start your first project" href="/research/get-started/" label="Get started" secondary-href="/plans/" secondary-label="Compare plans" >}}A small audit spreadsheet and a descriptive-statistics run take about ten minutes.{{< /cta >}}
