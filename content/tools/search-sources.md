---
title: "Finding Information"
description: "Choose where Lumen looks for answers — clinical databases, your own documents, or the web."
weight: 1
---

When you ask Lumen a question, it searches for the best available evidence before answering. You can choose **where** it looks using three simple buttons at the bottom of the chat.

## The Three Knowledge Sources

<div class="tool-grid">

{{< tool-card name="Clinical Database" icon="&#9889;" color="#3B82F6" desc="Lumen's built-in clinical knowledge base. Contains peer-reviewed guidelines, drug databases, lab reference ranges, and clinical protocols. This is your primary source of truth." example="\"What are the current USPSTF screening recommendations for lung cancer?\"" badge="On by Default" >}}

{{< tool-card name="My Documents" icon="&#128193;" color="#6633CC" desc="Your personally uploaded files — PDFs, notes, research papers, and reference materials. Toggle this on when you want Lumen to search your own library." example="\"Based on the uploaded protocol, what are the inclusion criteria for this trial?\"" >}}

{{< tool-card name="Web Search" icon="&#127760;" color="#299966" desc="Live internet search for the most current information. Useful for breaking research, conference proceedings, or topics not yet in the clinical database." example="\"What were the key findings from the latest ASCO 2026 presentations on NSCLC?\"" >}}

</div>

## How Search Works

When you send a message with search enabled, here's what happens:

<div class="steps-container">

{{< step num="1" title="Your question is analyzed" >}}
Lumen identifies the key clinical concepts in your question and formulates search queries.
{{< /step >}}

{{< step num="2" title="Sources are searched" >}}
A **"Searching knowledge base..."** indicator appears while Lumen queries the enabled sources. This typically takes 1–3 seconds.
{{< /step >}}

{{< step num="3" title="Results are ranked" >}}
Each result gets a **similarity score** showing how relevant it is to your question. Only high-quality matches are used.
{{< /step >}}

{{< step num="4" title="Evidence is synthesized" >}}
Lumen reads the top results and synthesizes them into a coherent answer, citing each source.
{{< /step >}}

</div>

## Combining Sources

You can enable **all three sources simultaneously**. Lumen will search across all of them and merge the results, giving you the broadest coverage possible.

This is especially powerful when you want to:
- Compare your internal protocols against published guidelines
- Supplement database knowledge with the latest web-based research
- Find information that spans multiple domains

{{< callout type="info" >}}
**The sources chip** at the bottom of each response shows exactly which documents were used. Click it to verify the evidence chain.
{{< /callout >}}

## The Tools Behind the Toggles

You never call these by name, but it helps to know what Lumen can actually do when it goes looking:

<div class="tool-grid">

{{< tool-card name="Web Search" icon="&#128269;" color="var(--smoky-blue)" desc="Searches the web and returns titles, URLs, and snippets — the default way Lumen finds current information and sources to read." example="\"What were the key findings from this year's ADA Standards of Care update?\"" badge="Web" >}}

{{< tool-card name="Read a Page" icon="&#128279;" color="var(--palace-green)" desc="Fetches a single URL you've shared (or one found by search) and extracts it as clean, readable text." example="\"Read this page and summarize the dosing table: [link]\"" badge="Web" >}}

{{< tool-card name="Deep Web Research" icon="&#129517;" color="var(--accent)" desc="Searches multiple engines and automatically reads the top results in one pass — up to 9 full pages with per-source attribution. For questions that deserve more than snippets." example="\"Research the current evidence landscape for GLP-1s in heart failure with preserved EF\"" badge="Pro" >}}

{{< tool-card name="Site Mapping & Crawling" icon="&#128506;" color="var(--smoky-blue-dk)" desc="Maps the URLs of a site you point at, crawls its pages into readable text, or extracts structured data from them — useful for working through a society's guideline library or a departmental site." example="\"Crawl our department protocol site and list every airway-related page\"" badge="Pro" >}}

{{< tool-card name="YouTube Transcripts" icon="&#127909;" color="var(--accent)" desc="Pulls the spoken transcript of a YouTube video you link, so Lumen can summarize or quote a lecture or conference talk." example="\"Summarize the key points from this grand rounds recording: [link]\"" badge="Media" >}}

{{< tool-card name="Document Search & Read" icon="&#128193;" color="var(--palace-green)" desc="Semantically searches your uploaded documents for relevant passages, or reads a specific document end-to-end when the task depends on seeing every row or paragraph." example="\"Based on the uploaded protocol, what are the exclusion criteria?\"" badge="Your Library" >}}

</div>

Tools marked **Pro** are available on paid plans — see [Plans](/plans/).

## Attach Documents

Beyond the knowledge toggles, you can also **attach specific documents** to a message using the paperclip icon. Attached documents are always included regardless of toggle state.

See [Uploading Documents](/chat/attachments/) for details.
