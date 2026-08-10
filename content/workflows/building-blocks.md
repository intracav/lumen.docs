---
title: "Building Blocks"
description: "The 70+ tools you can use as nodes in your workflows — organized by what they do."
weight: 2
---

Every node in a workflow is a tool that does one thing. Here are all the tools available, grouped by the kind of work they do.

## Where Data Comes In

These nodes start your workflow — they're how you get information into the pipeline.

<div class="tool-grid">

{{< tool-card name="Text Input" icon="&#128221;" color="var(--accent)" desc="Type or paste text. This is the most common starting point — paste a clinical note, a question, or any text you want to process." >}}

{{< tool-card name="Document Upload" icon="&#128196;" color="var(--accent)" desc="Upload a PDF, Word doc, or text file. The workflow reads and extracts the text automatically." >}}

{{< tool-card name="Voice Input" icon="&#127908;" color="var(--accent)" desc="Use a dictation transcript as input. Pairs well with Lumen's dictation feature." >}}

{{< tool-card name="Web Scrape" icon="&#127760;" color="var(--smoky-blue)" desc="Fetch and parse content from a URL. Useful for pulling in guidelines or reference material from the web." >}}

</div>

{{< tip title="Or skip the manual input entirely" >}}
Trigger nodes — schedule, webhook, incoming email, CRM events — can start a workflow with no one at the keyboard. See [Workflow Triggers](/workflows/triggers/).
{{< /tip >}}

## Text Analysis

These nodes read text and extract useful structure from it.

<div class="tool-grid">

{{< tool-card name="Summarize" icon="&#128203;" color="var(--smoky-blue)" desc="Condense long text into a shorter summary. You control the length." >}}

{{< tool-card name="Extract Entities" icon="&#128196;" color="var(--smoky-blue)" desc="Find medications, diagnoses, procedures, and lab values in unstructured text." >}}

{{< tool-card name="Classify" icon="&#127991;" color="var(--smoky-blue)" desc="Sort text into categories you define. Example: classify a note as 'urgent', 'routine', or 'follow-up'." >}}

{{< tool-card name="Sentiment" icon="&#128200;" color="var(--smoky-blue)" desc="Detect whether text is positive, negative, or neutral — with a confidence score." >}}

{{< tool-card name="Translate" icon="&#127760;" color="var(--smoky-blue)" desc="Translate text between languages. Useful for multilingual patient communication." >}}

{{< tool-card name="Keywords" icon="&#128273;" color="var(--smoky-blue)" desc="Extract the most important terms from a piece of text." >}}

{{< tool-card name="Q&A" icon="&#10067;" color="var(--smoky-blue)" desc="Answer a specific question based on the text that comes in. Example: 'What medications is this patient on?'" >}}

{{< tool-card name="Generate Text" icon="&#9999;" color="var(--smoky-blue)" desc="Write new text based on a prompt. Example: 'Write a patient-friendly explanation of these lab results.'" >}}

</div>

## Knowledge & Research

These nodes search databases and bring in external evidence.

<div class="tool-grid">

{{< tool-card name="Search Clinical Knowledge" icon="&#128218;" color="var(--smoky-blue)" desc="Search Lumen's clinical database for relevant guidelines and evidence." >}}

{{< tool-card name="Search Your Documents" icon="&#128193;" color="var(--smoky-blue)" desc="Search your personally uploaded files for relevant passages." >}}

{{< tool-card name="PubMed Search" icon="&#128218;" color="var(--smoky-blue)" desc="Search PubMed for peer-reviewed articles. Set the query and max results." >}}

{{< tool-card name="FDA Drug Labels" icon="&#128138;" color="var(--palace-green)" desc="Look up FDA-approved prescribing information — indications, warnings, dosing." >}}

{{< tool-card name="Clinical Trials" icon="&#129514;" color="var(--smoky-blue)" desc="Search ClinicalTrials.gov for active and completed studies." badge="Pro" >}}

</div>

## Medications

<div class="tool-grid">

{{< tool-card name="Identify a Drug (RxNorm)" icon="&#128138;" color="var(--palace-green)" desc="Normalize drug names — brand to generic, get drug class and RxCUI." >}}

{{< tool-card name="Check Drug Interactions" icon="&#9888;" color="var(--accent-dk)" desc="Check for interactions between drugs. Returns severity and management." >}}

{{< tool-card name="IV Drip Calculator" icon="&#128167;" color="var(--palace-green)" desc="Calculate infusion rates from weight-based dosing." >}}

{{< tool-card name="Renal Dose Check" icon="&#129656;" color="var(--palace-green)" desc="Compute CrCl and look up renal dose adjustments." >}}

</div>

## Coding & Labs

<div class="tool-grid">

{{< tool-card name="ICD-10 Lookup" icon="&#127973;" color="var(--accent-dk)" desc="Find diagnosis codes from a clinical description." >}}

{{< tool-card name="CPT Lookup" icon="&#129534;" color="var(--accent-dk)" desc="Find procedure codes." >}}

{{< tool-card name="HCPCS Lookup" icon="&#128203;" color="var(--accent-dk)" desc="Find Level II codes for DME, supplies, and drugs." >}}

{{< tool-card name="Lab Reference Ranges" icon="&#129514;" color="var(--palace-green)" desc="Get normal ranges for any lab test." >}}

{{< tool-card name="Clinical Calculator" icon="&#129518;" color="var(--accent)" desc="Run validated scoring tools — eGFR, CHA₂DS₂-VASc, MELD, Wells, and more." >}}

{{< tool-card name="CMS Coverage" icon="&#9989;" color="var(--palace-green)" desc="Check Medicare coverage determinations (NCDs and LCDs)." >}}

</div>

## Protocols & Decisions

<div class="tool-grid">

{{< tool-card name="Clinical Checklist" icon="&#9745;" color="var(--palace-green)" desc="Load evidence-based protocol checklists (sepsis, DKA, central line, etc.)." >}}

{{< tool-card name="Triage Assessment" icon="&#127973;" color="var(--accent-dk)" desc="Score patient acuity using ESI, Manchester, CTAS, or START." >}}

{{< tool-card name="Differential Diagnosis" icon="&#129504;" color="var(--smoky-blue)" desc="Generate a ranked differential with workup recommendations." >}}

{{< tool-card name="Antimicrobial Selector" icon="&#129440;" color="var(--palace-green)" desc="Select appropriate antibiotics with dosing and allergy alternatives." >}}

{{< tool-card name="Clinical Guidelines" icon="&#128214;" color="var(--smoky-blue)" desc="Search USPSTF and current practice guidelines." >}}

</div>

## Where Results Go Out

These nodes deliver the final output of your workflow.

<div class="tool-grid">

{{< tool-card name="Send to Chat" icon="&#128172;" color="var(--palace-green)" desc="Output appears in the chat — the most common output node." >}}

{{< tool-card name="Export as PDF" icon="&#128196;" color="var(--accent)" desc="Generate a downloadable PDF document." >}}

{{< tool-card name="Export as Slides" icon="&#128202;" color="var(--accent)" desc="Generate a PowerPoint presentation." >}}

{{< tool-card name="Create Spreadsheet" icon="&#128203;" color="var(--accent)" desc="Generate an Excel workbook." >}}

{{< tool-card name="Send Email" icon="&#128231;" color="var(--accent-dk)" desc="Email the output to a specified address." badge="Pro" >}}

</div>

{{< callout type="info" >}}
**A Pro badge** means that tool needs a paid plan — see [plans](/plans/) for what each tier includes. Everything else here, from entity extraction to ICD-10 lookup to PDF export, is available on every plan.
{{< /callout >}}
