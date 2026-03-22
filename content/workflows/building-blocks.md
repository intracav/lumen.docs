---
title: "Building Blocks"
description: "The 70+ tools you can use as nodes in your workflows — organized by what they do."
weight: 2
---

Every node in a workflow is a tool that does one thing. Here are all the tools available, grouped by the kind of work they do.

## Where Data Comes In

These nodes start your workflow — they're how you get information into the pipeline.

<div class="tool-grid">

{{< tool-card name="Text Input" icon="&#128221;" color="#5865F2" desc="Type or paste text. This is the most common starting point — paste a clinical note, a question, or any text you want to process." >}}

{{< tool-card name="Document Upload" icon="&#128196;" color="#5865F2" desc="Upload a PDF, Word doc, or text file. The workflow reads and extracts the text automatically." >}}

{{< tool-card name="Voice Input" icon="&#127908;" color="#5865F2" desc="Use a dictation transcript as input. Pairs well with Lumen's dictation feature." >}}

{{< tool-card name="Web Scrape" icon="&#127760;" color="#8C66D9" desc="Fetch and parse content from a URL. Useful for pulling in guidelines or reference material from the web." badge="Pro" >}}

</div>

## Text Analysis

These nodes read text and extract useful structure from it.

<div class="tool-grid">

{{< tool-card name="Summarize" icon="&#128203;" color="#0EA5E9" desc="Condense long text into a shorter summary. You control the length." >}}

{{< tool-card name="Extract Entities" icon="&#128196;" color="#8C66D9" desc="Find medications, diagnoses, procedures, and lab values in unstructured text." >}}

{{< tool-card name="Classify" icon="&#127991;" color="#8C66D9" desc="Sort text into categories you define. Example: classify a note as 'urgent', 'routine', or 'follow-up'." >}}

{{< tool-card name="Sentiment" icon="&#128200;" color="#8C66D9" desc="Detect whether text is positive, negative, or neutral — with a confidence score." >}}

{{< tool-card name="Translate" icon="&#127760;" color="#0EA5E9" desc="Translate text between languages. Useful for multilingual patient communication." >}}

{{< tool-card name="Keywords" icon="&#128273;" color="#8C66D9" desc="Extract the most important terms from a piece of text." >}}

{{< tool-card name="Q&A" icon="&#10067;" color="#0EA5E9" desc="Answer a specific question based on the text that comes in. Example: 'What medications is this patient on?'" >}}

{{< tool-card name="Generate Text" icon="&#9999;" color="#0EA5E9" desc="Write new text based on a prompt. Example: 'Write a patient-friendly explanation of these lab results.'" >}}

</div>

## Knowledge & Research

These nodes search databases and bring in external evidence.

<div class="tool-grid">

{{< tool-card name="Search Clinical Knowledge" icon="&#128218;" color="#0EA5E9" desc="Search Lumen's clinical database for relevant guidelines and evidence." >}}

{{< tool-card name="Search Your Documents" icon="&#128193;" color="#8C66D9" desc="Search your personally uploaded files for relevant passages." >}}

{{< tool-card name="PubMed Search" icon="&#128218;" color="#0EA5E9" desc="Search PubMed for peer-reviewed articles. Set the query and max results." badge="Pro" >}}

{{< tool-card name="FDA Drug Labels" icon="&#128138;" color="#34C759" desc="Look up FDA-approved prescribing information — indications, warnings, dosing." badge="Pro" >}}

{{< tool-card name="Clinical Trials" icon="&#129514;" color="#8C66D9" desc="Search ClinicalTrials.gov for active and completed studies." badge="Pro" >}}

</div>

## Medications

<div class="tool-grid">

{{< tool-card name="Identify a Drug (RxNorm)" icon="&#128138;" color="#34C759" desc="Normalize drug names — brand to generic, get drug class and RxCUI." badge="Pro" >}}

{{< tool-card name="Check Drug Interactions" icon="&#9888;" color="#FF9500" desc="Check for interactions between drugs. Returns severity and management." badge="Pro" >}}

{{< tool-card name="IV Drip Calculator" icon="&#128167;" color="#0EA5E9" desc="Calculate infusion rates from weight-based dosing." badge="Pro" >}}

{{< tool-card name="Renal Dose Check" icon="&#129656;" color="#8C66D9" desc="Compute CrCl and look up renal dose adjustments." badge="Pro" >}}

</div>

## Coding & Labs

<div class="tool-grid">

{{< tool-card name="ICD-10 Lookup" icon="&#127973;" color="#FF9500" desc="Find diagnosis codes from a clinical description." badge="Pro" >}}

{{< tool-card name="CPT Lookup" icon="&#129534;" color="#FF9500" desc="Find procedure codes." badge="Pro" >}}

{{< tool-card name="HCPCS Lookup" icon="&#128203;" color="#8C66D9" desc="Find Level II codes for DME, supplies, and drugs." badge="Pro" >}}

{{< tool-card name="Lab Reference Ranges" icon="&#129514;" color="#3DBF80" desc="Get normal ranges for any lab test." badge="Pro" >}}

{{< tool-card name="Clinical Calculator" icon="&#129518;" color="#5865F2" desc="Run validated scoring tools — eGFR, CHA₂DS₂-VASc, MELD, Wells, and more." badge="Pro" >}}

{{< tool-card name="CMS Coverage" icon="&#9989;" color="#34C759" desc="Check Medicare coverage determinations (NCDs and LCDs)." badge="Pro" >}}

</div>

## Protocols & Decisions

<div class="tool-grid">

{{< tool-card name="Clinical Checklist" icon="&#9745;" color="#3DBF80" desc="Load evidence-based protocol checklists (sepsis, DKA, central line, etc.)." badge="Pro" >}}

{{< tool-card name="Triage Assessment" icon="&#127973;" color="#FF9500" desc="Score patient acuity using ESI, Manchester, CTAS, or START." badge="Pro" >}}

{{< tool-card name="Differential Diagnosis" icon="&#129504;" color="#0EA5E9" desc="Generate a ranked differential with workup recommendations." badge="Pro" >}}

{{< tool-card name="Antimicrobial Selector" icon="&#129440;" color="#34C759" desc="Select appropriate antibiotics with dosing and allergy alternatives." badge="Pro" >}}

{{< tool-card name="Clinical Guidelines" icon="&#128214;" color="#8C66D9" desc="Search USPSTF and current practice guidelines." badge="Pro" >}}

</div>

## Where Results Go Out

These nodes deliver the final output of your workflow.

<div class="tool-grid">

{{< tool-card name="Send to Chat" icon="&#128172;" color="#34C759" desc="Output appears in the chat — the most common output node." >}}

{{< tool-card name="Export as PDF" icon="&#128196;" color="#E53E3E" desc="Generate a downloadable PDF document." badge="Pro" >}}

{{< tool-card name="Export as Slides" icon="&#128202;" color="#D69E2E" desc="Generate a PowerPoint presentation." badge="Pro" >}}

{{< tool-card name="Create Spreadsheet" icon="&#128203;" color="#217346" desc="Generate an Excel workbook." badge="Pro" >}}

{{< tool-card name="Send Email" icon="&#128231;" color="#FF9500" desc="Email the output to a specified address." badge="Max" >}}

</div>

{{< callout type="info" >}}
**Pro and Max badges** indicate which subscription tier is needed for that tool. Free-tier users can still build workflows with basic text analysis and output nodes.
{{< /callout >}}
