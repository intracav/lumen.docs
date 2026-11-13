---
title: "Analyze a long document"
navTitle: "Analyze a document"
description: "Attach a long PDF and ask what it says. Get quoted answers with page numbers, or a checked extraction that flags gaps and contradictions."
lead: "Attach the document and ask a question, or have the Document Analysis Specialist pull out specific values. Every value is quoted from the document, with the page."
weight: 6
icon: file-check
who: "clinicians, educators and managers"
keywords: ["AI PDF analysis", "clinical guideline summary AI", "analyze medical document", "policy comparison AI"]
glance:
  what: "A step-by-step way to have Lumen read a long document and pull out exactly what you need, with a quote and page for each answer."
  who: "Anyone who has to find specific facts in a long policy, guideline, IFU or contract."
  why: "Skimming 60 pages misses things. Lumen reads every page, quotes what it finds, and tells you when the document is silent or contradicts itself."
  needs: "Any Lumen plan. The document as a PDF, Word or text file with selectable text. About 10 minutes."
  result: "A document extraction: each value you asked for, quoted with its page, plus a list of anything not stated or stated in conflicting ways."
---

Your hospital is replacing its central line maintenance policy, and you have the 60-page draft and the current version. Before the committee signs off, you need to know exactly what changed on dressing changes, tubing changes and needleless connectors, and whether the draft contradicts itself anywhere. Lumen's **Document Analysis Specialist** reads every page of both documents. It quotes each value with the page it's on and marks a value **Not stated** when it isn't there. If the same value appears two different ways, it lists the conflict rather than picking one.

## Before you start

- **Plan:** any Lumen plan.
- **The documents** as PDF, Word or text files. If you can't select text in your PDF viewer, the file is a scanned image and may not read well. Export a text version from the source if you can.
- **The list of what you need.** Name the specific values or facts, such as "transparent dressing change interval". A general summary is easier to get but harder to check.
- **No patient information.** Policies, guidelines and IFUs don't need it. Keep it that way.
- **Time:** about 10 minutes.

A *Specialist* is a Lumen assistant set up for one kind of work. It follows a fixed checklist and saves a result that Lumen checks before you see it.

## How to analyze the documents

{{< steps >}}
{{< step title="Attach the documents" >}}
Open a new chat. Click **+** (**Attach document**) and add both files. Wait until the file chips have finished **Uploading…** and **Reading…**. The files are also saved to your documents, so you won't need to upload them again.
{{< /step >}}
{{< step title="Choose the Document Analysis Specialist" >}}
Type `@` in the message box and choose **Document Analysis** from the **Specialists** list.
{{< /step >}}
{{< step title="Name the values you need" >}}
List the fields, then press **Send**:

{{< composer text="@Document Analysis from both attached central line maintenance policies, the current one and the 2027 draft, extract: transparent dressing change interval; gauze dressing change interval; administration set change interval for continuous infusions; needleless connector change interval; who may access the line. List any conflicts within or between the documents." >}}
{{< /step >}}
{{< step title="Let the Specialist read" >}}
You'll see **Reading document** as Lumen pages through each file, then **Checking and saving**. It reads each document in full before it answers. You can close the tab while it works.
{{< /step >}}
{{< step title="Open the extraction" >}}
Click the **Document extraction** card to open it in the side panel. Each document is a row, and each field has a status: **Found**, **Not stated**, **Not read**, **Unreadable** or **Ambiguous**. Found values show the quote and the page.
{{< /step >}}
{{< step title="Ask follow-up questions" >}}
Ask about anything in the same chat:

{{< composer text="What does the draft say about chlorhexidine-impregnated dressings? Quote it and give the page." >}}
{{< /step >}}
{{< step title="Make a summary for your team" >}}
Type `Make a one-page Word document: each field, current versus draft, with page numbers, and the conflicts at the top.` Open the document card and click **Download**.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="agents-deliverable" alt="A document extraction in Lumen's side panel with fields, quoted values, page numbers and a conflicts list" caption="A document extraction. Each value is quoted with its page, and conflicts are listed, not resolved." url="lumen.intracav.ai" >}}
{{< chat-demo title="Current policy versus draft" specialist="Document Analysis" caption="Illustration with fictional Harbor Valley Medical Center policies." >}}
{{< user attach="cvc-maintenance-current.pdf, cvc-maintenance-2027-draft.pdf" >}}From both attached policies, extract dressing, administration set and needleless connector change intervals, and who may access the line. List any conflicts.{{< /user >}}
{{< lumen thought="13" tools="Document read, Saved and checked" sources="2" >}}
| Field | Current policy | 2027 draft |
|---|---|---|
| Transparent dressing | **Found**: "at least every 7 days" (p. 6) | **Found**: "at least every 7 days" (p. 9) |
| Gauze dressing | **Found**: "every 2 days" (p. 6) | **Found**: "every 2 days" (p. 9) |
| Administration set, continuous | **Found**: "every 72 hours" (p. 8) | **Found**: "every 96 hours" (p. 14) |
| Needleless connector | **Not stated** | **Found**: "with each administration set change" (p. 15) |
| Who may access the line | **Found**: "RNs who have completed CVC competency" (p. 3) | **Found**: "RNs and LPNs with CVC competency" (p. 4) |

**Conflict in the 2027 draft:** the transparent dressing interval is "at least every 7 days" on p. 9, but the quick-reference table on p. 41 says "every 5 days".

{{< verdict >}}Passed its checks. 9 of 9 quotes were found word for word in the documents.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

Lumen works out the page numbers from the document itself. The Specialist doesn't guess them. **Not stated** means Lumen read the whole document and the value isn't there. That's often the most useful finding.

## Check the result

{{< lui-block title="Before you share it" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Open the page for each value that matters" body="The quote and page let you confirm it in seconds." >}}
{{< lui-row type="check" title="No field is Not read or Unreadable" body="If one is, the file may be a scan. Upload a text version and ask again." >}}
{{< lui-row type="check" title="Every conflict has been sent to the document's owner" body="Lumen lists conflicts. It doesn't decide which version is right." >}}
{{< lui-row type="check" title="Not stated items are real gaps" body="Search the document yourself for one or two of them to be sure." >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **For a quick answer, skip the Specialist.** Attach the file in a normal chat and ask `What does this say about bridging anticoagulation? Quote it.` You get a cited answer without the checked extraction.
- **Ask for differences, not summaries.** "What changed between these two versions?" is more useful than "Summarize this".
- **Long documents.** The Specialist pages through the whole file. If a field shows **Not read**, ask it to keep reading from where it stopped.
- **Make it searchable for your team.** A document you rely on often belongs in a *Knowledge Pack*, a shared collection of documents Lumen can search and cite in every chat. See [Knowledge Packs](/knowledge/knowledge-packs/).

## Limits and safety

{{< callout type="safety" title="A quote proves what the document says, not that it's right" >}}
A verified quote shows that the document contains those words. It doesn't show that the document is clinically correct or current. Check clinical content against your organization's policies and current guidance before you act on it.
{{< /callout >}}

- **Scanned PDFs** may read poorly or not at all. Fields will show **Unreadable**.
- **Lumen works only from the documents attached to this chat** for the extraction. It doesn't fill gaps from general knowledge.
- **Figures and tables drawn as images** may not be read as text.

## FAQ

{{< faq question="What file types work?" >}}
PDF, Word and plain text files work best. See [Attachments](/chat/attachments/) for the full list and size limits.
{{< /faq >}}
{{< faq question="Can it compare more than two documents?" >}}
Yes. Attach each one. The extraction has one row per document, and conflicts are listed across all of them.
{{< /faq >}}
{{< faq question="Does Lumen keep my document?" >}}
Attached files are saved to your documents so you can use them again. You can delete them at any time. See [Documents](/knowledge/documents/).
{{< /faq >}}

## Next steps

{{< related "/chat/attachments/" "/knowledge/documents/" "/guides/literature-review/" "/skills-and-specialists/specialists/" >}}
