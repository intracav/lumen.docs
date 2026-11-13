---
title: "Upload documents Lumen can cite"
navTitle: "Documents"
description: "Upload PDFs, Word, PowerPoint, Excel and other files to My documents. Lumen reads them, makes them searchable, and cites them in your chats."
lead: "Upload a policy or an IFU once, and Lumen can find it and cite the exact passage in later answers."
weight: 1
icon: file-text
glance:
  what: "My documents is your personal library in Lumen. Files you upload there are read, made searchable, and cited when they answer a question."
  who: "Any Lumen user with policies, protocols, device instructions, papers or notes they want Lumen to use."
  why: "So answers draw on the material you actually work from, with a citation to the passage, instead of general knowledge alone."
  needs: "A Lumen account (any plan). Files up to 30 MB each. About 1 minute per document."
  result: "Documents Lumen can find and cite in your chats."
---

Your unit's midline policy lives in a PDF on a shared drive. Upload it to **My documents** and Lumen reads it, indexes it by meaning, and can cite it whenever a question touches it, with a link to the passage. You don't have to attach it every time.

## Before you start

- **Supported files:** PDF, Word, PowerPoint, Excel, CSV, plain text, Markdown, HTML, email (.eml) and images. Older formats (.doc, .xls, .ppt, .rtf and OpenDocument) are converted to PDF. Scanned pages and images are read with OCR (text recognition) on Lumen's servers.
- **Size:** up to 30 MB per file, and up to 100 uploads a day.
- **Permission:** only upload documents you're allowed to share with Lumen. See [Privacy and data](/trust/privacy/).

## How to upload a document

{{< steps >}}
{{< step title="Open My documents" >}}Go to {{< ui-path "Settings" "Privacy & data" "Data & storage" "My documents" >}}. You can also open **Documents** from the **At a glance** card on your profile.{{< /step >}}
{{< step title="Upload" >}}Click **Upload**, or drag files onto the page and **Release to upload**.{{< /step >}}
{{< step title="Wait for it to be read" >}}Each file shows its progress: **Queued…**, **Reading text…** or **Reading scanned pages…**, then **Indexing…**. When the label disappears, the document is ready.{{< /step >}}
{{< step title="Ask a question it answers" >}}Start a chat and ask, for example, "What's our dwell-time limit for midlines?" When Lumen uses your document, the answer cites it.{{< /step >}}
{{< step title="Open the citation" >}}Click the citation to see the passage in your document. Check it before you rely on the answer.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="documents" alt="My documents with an Upload button, a drop zone and a list of uploaded policies, one still indexing" caption="My documents. A file is ready when its status label disappears." url="lumen.intracav.ai/profile/documents" >}}
{{< lui-block title="My documents" sub="Data & storage" >}}
{{< lui-rows >}}
{{< lui-row title="Midline Catheter Policy — Med-Surg.pdf" body="12 pages" >}}
{{< lui-row title="SL-4 securement device IFU.pdf" body="28 pages · 3 pages read with OCR" >}}
{{< lui-row title="CLABSI bundle checklist 2026.docx" body="Indexing…" >}}
{{< /lui-rows >}}
{{< lui-actions "Upload" "New folder" >}}
{{< /lui-block >}}
{{< /screenshot >}}

{{< chat-demo title="Your document, cited" caption="Illustration with a fictional policy. Open the citation to check the passage." >}}
{{< user >}}What's our dwell-time limit for midlines on Med-Surg?{{< /user >}}
{{< lumen sources="1" >}}
Your Med-Surg policy doesn't set a fixed dwell time. Midlines stay in place while clinically indicated, with a documented daily assessment of need {{< cite 1 >}}.
{{< sources >}}
{{< source n="1" title="Midline Catheter Policy — Med-Surg.pdf" meta="My documents · p. 4" quote="Midline catheters may remain in place as long as clinically indicated, with daily documented assessment of need." >}}{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< /chat-demo >}}

## Managing your documents

Open a document's menu for **Open**, **Move to folder**, **Rename** and **Delete**. Deleting removes the file and stops Lumen using it. If a file shows **Couldn't read**, choose **Retry indexing**. Use **Download original** in the viewer to get the file back.

The search box, **Search documents…**, finds documents by title. To search inside documents, ask Lumen in a chat.

## Attach, or upload?

- **Attach** a file to a message when it's the subject of one question, such as "Summarize this consult note". See [Attachments](/chat/attachments/).
- **Upload** it to My documents when you'll want Lumen to find it again in later chats.
- **Put it in a shared folder** when colleagues' answers should cite it too. See [Folders](/knowledge/folders/).

## Limits and safety

- **30 MB per file, 100 uploads a day.**
- **Your documents are yours.** Files in My documents are used in your chats. Put them in a shared folder to make them available to colleagues.
- **Available isn't approved.** A searchable document hasn't been checked by anyone. Lumen cites what it says, even if it's out of date.
- **Patient information.** Uploads are stored encrypted with access controls, but don't upload patient details you don't need for the task. See [Privacy tools](/tools/privacy/).

## FAQ

{{< faq question="How do I know Lumen has finished reading a file?" >}}
While Lumen is working, the file shows **Queued…**, **Reading text…** or **Indexing…**. When the label disappears, it's ready. If it shows **Couldn't read**, use **Retry indexing**.
{{< /faq >}}
{{< faq question="Can Lumen read scanned PDFs?" >}}
Yes. Scanned pages and images are read with OCR, and the document notes how many pages were read that way. Check passages from poor scans carefully.
{{< /faq >}}
{{< faq question="Can my colleagues see my documents?" >}}
Not unless you move them into a folder shared with them. See [Folders](/knowledge/folders/).
{{< /faq >}}

## Next steps

{{< related "/knowledge/folders/" "/chat/attachments/" "/chat/sources/" "/knowledge/knowledge-packs/" >}}
