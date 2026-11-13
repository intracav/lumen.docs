---
title: "Attach a file to a chat"
navTitle: "Attaching files"
description: "Attach a PDF, Word file, spreadsheet, slide deck or scan to a Lumen chat and ask about it. Supported types, size limits and what Lumen does with it."
lead: "Give Lumen a guideline, a protocol or a study, then ask about it. Lumen reads the file and cites the passages it used."
weight: 7
icon: paperclip
glance:
  what: "Attaching a file to a chat so Lumen can read it, answer questions about it, and cite it."
  who: "Anyone who works with documents in Lumen, on any plan."
  why: "To summarize a paper, compare a protocol with a guideline, or draft from your own material, with answers you can trace back to the page."
  needs: "A Lumen account (any plan). A file up to 30 MB. About 3 minutes."
  result: "Answers that cite passages from your file."
---

You have a new sepsis protocol and want to know how it differs from the national guidance. Attach it to a chat and ask. Lumen reads the file, answers from it, and cites the passages it used, so you can check each point against the page.

## Before you start

- **Plan:** any plan.
- **File:** up to 30 MB. See the list of supported types below.
- **Remove identifiers.** If the file contains patient information, make sure you're permitted to upload it, and remove identifiers first where you can.

## How to attach a file

{{< steps >}}
{{< step title="Open the document tray" >}}
In the chat, click the paperclip under the message box (**Attach document**). On a phone, tap **+** (**Tools and attachments**) first. The **Your documents** tray opens.
{{< /step >}}
{{< step title="Upload a file, or pick one you already have" >}}
Click **Upload a document** and choose the file, or drag it onto the tray (**Drop to upload**). To reuse a file you've uploaded before, find it with **Search documents…** and click **Attach to this chat**.
{{< /step >}}
{{< step title="Wait for it to be read" >}}
The file shows **Uploading…**, then **Reading…**. Scanned pages show **Reading scanned pages** while Lumen reads the text with OCR (optical character recognition). Large files can take a minute.
{{< /step >}}
{{< step title="Ask your question" >}}
Type your question and send it. For example: *"Compare this protocol with the 2021 Surviving Sepsis Campaign guidelines. List the differences in a table."*
{{< /step >}}
{{< step title="Check the cited passages" >}}
Open the sources under the answer to see the passages from your file.
{{< /step >}}
{{< /steps >}}

Attached files stay in context for every message in that chat, so you can keep asking without attaching again.

## What you'll see

{{< chat-demo title="Sepsis protocol review" caption="Illustration with a fictional document." >}}
{{< user attach="HVMC-sepsis-protocol-2026.pdf" >}}Compare this protocol with the 2021 Surviving Sepsis Campaign guidelines. List the differences in a table.{{< /user >}}
{{< lumen thought="8" tools="Guidelines retrieved" sources="5" >}}
Your protocol matches the guidelines on most points. Three differences stand out:

| Topic | Your protocol | 2021 guidelines |
|---|---|---|
| Screening tool | qSOFA alone {{< cite 1 >}} | Recommends against qSOFA as a single screening tool {{< cite 4 >}} |
| Lactate | Not specified {{< cite 2 >}} | Suggests measuring lactate {{< cite 4 >}} |
| Antibiotic timing, possible sepsis without shock | Within 1 hour {{< cite 3 >}} | Rapid assessment; antibiotics within 3 hours if concern persists {{< cite 5 >}} |
{{< /lumen >}}
{{< /chat-demo >}}

## Supported files

| Kind | File types |
|---|---|
| Documents | PDF, Word (.docx, .doc), plain text (.txt), Markdown (.md), rich text (.rtf), OpenDocument text (.odt), web pages (.html, .htm), email (.eml) |
| Spreadsheets | Excel (.xlsx, .xls), CSV, OpenDocument spreadsheet (.ods) |
| Presentations | PowerPoint (.pptx, .ppt), OpenDocument presentation (.odp) |
| Images and scans | PNG, JPEG, GIF, WebP, TIFF, BMP. Lumen reads the text in them with OCR. |

Each file can be up to **30 MB**.

## Tips

- **Ask about specific parts.** "What does section 4 say about escalation?" gets a sharper answer than "summarize this."
- **Attach more than one file** to compare them: "Where do these two policies disagree?"
- **Keep files you use often** in your documents, so you can attach them in two clicks. See [Documents](/knowledge/documents/).
- **For your whole team,** an admin can add documents to a Knowledge Pack instead.

## Limits and safety

- **Images are read for their text.** Lumen reads printed and typed text in images and scans. It doesn't interpret the picture itself, such as a wound photo, an ECG trace or an X-ray.
- **Handwriting and poor scans** may be read badly. Check quotes against the original.
- **Up to 30 MB per file,** and a daily upload limit applies.
- **Lumen can misread a table or chart** in a PDF. Check numbers against the page.
- Uploaded files are saved to your documents in the workspace you're using, so you can reuse them. Delete them from your documents if you no longer need them.

{{< callout type="warning" title="Only upload what you're permitted to share" >}}
Follow your organization's rules on patient information. Remove identifiers where you can. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

## FAQ

{{< faq question="Can Lumen look at a photo, such as a wound or an ECG?" >}}
Not as a picture. Lumen reads any text in an image, but it doesn't interpret what the image shows.
{{< /faq >}}
{{< faq question="Do I have to attach the file again for each question?" >}}
No. Attached files stay in context for every message in that chat.
{{< /faq >}}
{{< faq question="My upload failed. What should I do?" >}}
Check that the file is under 30 MB and one of the supported types. If you see **Couldn't read**, the file may be protected or damaged. Try saving it again as a PDF.
{{< /faq >}}

## Next steps

{{< related "/chat/sources/" "/knowledge/documents/" "/chat/artifacts/" "/trust/privacy/" >}}
