---
title: "Documents, Sources & Exports"
description: "Upload documents to Lumen, search your library semantically, compare files, and export the documents Lumen creates to PDF, Word, PowerPoint, or Excel."
lead: "Upload it once, and it becomes something Lumen can find, cite, and compare — usually in under a minute."
weight: 2
---

Your document library is where Lumen's general knowledge meets *your* material — the policies, papers, and notes that make its answers specific to your practice. This page covers the full life of a document: in, searched, cited, compared, and back out again.

## Uploading

Upload PDFs, Word documents, plain text, and other common formats — from the library, from inside a folder, or straight into a chat. On upload, Lumen:

1. **Extracts** the text (including scanned PDFs that need OCR)
2. **Indexes** it for meaning, not just keywords — each passage becomes searchable by what it says
3. **Makes it citable** — from then on, answers that draw on it carry a citation you can tap to see the exact passage

The whole pipeline usually finishes in under a minute. Once indexed, the document behaves like any other source Lumen can quote.

{{< callout type="warning" >}}
**Careful with patient information.** Documents you upload are stored encrypted and access-controlled, but the safest identifier is the one that never leaves your device. If a file contains PHI you don't need for the task, de-identify it first — see [privacy and de-identification tools](/tools/privacy/).
{{< /callout >}}

## Attached vs found: two ways Lumen uses a document

There are two ways a document enters a conversation, and the difference matters:

**Attach it to a message.** Add the file to the message you're typing, and Lumen treats it as *the* subject of that turn — it reads the document directly and answers about it specifically. Use this for "summarize this consult note" or "what does this IFU say about flushing?" See [attachments](/chat/attachments/) for details.

**Let Lumen find it.** Once a document is indexed in your library, you don't have to attach it at all. Ask a question, and if a document in your library (or a shared folder you belong to) answers it, Lumen retrieves the relevant passages and cites them — the same way a good librarian doesn't need you to name the book.

{{< chat-demo title="The library finds it for you" >}}
{{< user >}}What's our dwell-time policy for midline catheters?{{< /user >}}
{{< lumen >}}Per your department's *Midline Catheter Policy* (Section 4.2), midlines may remain in place as long as clinically indicated with documented daily assessment — routine replacement is not recommended. Want me to pull the assessment checklist from the same document?{{< /lumen >}}
{{< /chat-demo >}}

## Searching your library

Library search is **semantic**: it matches meaning, not exact wording. Searching *"catheter infection prevention"* finds the paragraph about "reducing CLABSI risk through insertion bundles" even though no word overlaps. You can search your whole library or scope to a single folder.

## Comparing two documents

Ask Lumen to compare two documents — last year's policy against this year's draft, two vendors' IFUs, a guideline against your local protocol. Lumen reads both and reports what changed, what conflicts, and what's unique to each, with citations into both documents so you can verify every claim.

## Downloads are protected

Every document download goes through Lumen's authenticated endpoints — files are decrypted only for a signed-in user with access to that document. There are no public file links to leak in an email thread: no login and no access, no file.

## Artifacts: the documents Lumen makes for you

Not everything in your library came from an upload. When Lumen drafts a report, a patient handout, a slide deck, or a table for you, the result is an [artifact](/chat/artifacts/) — a living document that sits alongside your uploads, can be pinned into folders, and can be edited in place.

When you're ready to take one out of Lumen:

- **PDF** — for anything headed to print or a chart
- **Word (DOCX)** — for documents a colleague will keep editing
- **PowerPoint (PPTX)** — for slide decks
- **Excel (XLSX)** — for tables and worksheets

Exports always reflect the current state of the artifact — edit it, export again, and the file matches what's on screen. The same renderer produces every copy, so a PDF you download and a PDF Lumen emails are identical.

## Next steps

- [Folders & departments](/knowledge/folders/) — organize documents so the right people (and the right chats) can find them
- [Artifacts](/chat/artifacts/) — how Lumen's generated documents work
- [Attachments](/chat/attachments/) — attaching files to a single message

{{< cta heading="Put your first document to work" href="/getting-started/" label="Get started" variant="subtle" >}}
Upload a policy, then ask Lumen a question it answers — and watch the citation come back.
{{< /cta >}}
