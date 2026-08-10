---
title: "Troubleshooting Common Issues"
description: "Fix-first answers to the most common Lumen issues — message limits, uncited uploads, generic answers, shared folder visibility, memory, and more."
lead: "The fix first, the explanation second. Find your symptom and go."
weight: 3
---

Nine issues cover most of what lands in support. Each answer starts with what to do, then explains why it works.

## Messages and limits

### I hit my message limit

**Wait a little — capacity comes back on its own.** Limits use a **rolling window**, not a midnight reset: as your older messages age out of the window, room returns gradually, like a drip rate rather than a bolus. Nothing is lost in the meantime — your chats and documents stay exactly where they are.

If you're hitting the ceiling regularly, that's the usual sign you've outgrown your plan — compare windows and allowances in [Plans](/plans/).

## Documents and citations

### My uploaded document isn't being cited

**First, give it a minute — then attach it directly.** Two common causes:

1. **It's still processing.** Uploads are extracted and indexed before they're citable — usually under a minute, longer for big scanned PDFs. Check the document's status in your library.
2. **Your question didn't retrieve it.** Library retrieval is by meaning, and sometimes another document answers first. To make a specific file *the* subject of a turn, attach it to your message — an attached document is read directly, not merely eligible for retrieval.

How the two modes differ is covered in [Documents, sources & exports](/knowledge/documents/).

### A document in a shared folder isn't visible to a teammate

**Check that the document is actually *in* the shared folder, and that your teammate is a member of it.** Sharing is by folder, not by file: everything in a shared folder is searchable by the folder's members, and a document that sits in your personal folder is visible to no one but you — no matter how many times it's been discussed. Access follows location, so *moving* the document into the shared folder is the fix, and moving it out revokes it.

Also worth a glance: the teammate's access level. Folder members can hold edit or view access, and either is enough to search and read — but they must be on the folder's member list (directly or through its department). Details in [Folders & Departments](/knowledge/folders/).

### The answer came back with no sources

**That's usually the system being honest, not broken.** When retrieval finds nothing authoritative for your question, Lumen's correct behaviors are to say so, hedge explicitly, or show you what it *did* find — rather than dressing up a guess with confidence. Treat an uncited confident claim as the anomaly, not the empty-handed honesty.

If you expected a source to match, check that the document is uploaded and finished processing, or attach it directly. Why citation-free answers deserve skepticism is explained in [RAG & citations](/learn/rag-and-citations/).

## Answer quality

### Answers seem generic

**Give Lumen something specific to stand on.** Three escalating fixes:

1. **Attach the context** — the policy, the note, the paper. An answer grounded in your document beats an answer from general knowledge every time.
2. **Bring in a Specialist** — type `@` to focus Lumen on a domain (a scribe, a research advisor, an insurance expert) instead of asking the generalist.
3. **Sharpen the ask** — "summarize this" invites mush; "list what changed from last year's version, with section numbers" gets you a work product.

The full craft is in [Prompting for clinicians](/learn/prompting-for-clinicians/).

### A tool call failed mid-answer

**Just ask again.** Transient tool failures — a slow upstream database, a network blip — are retried automatically behind the scenes, and when a tool still can't deliver, Lumen says so and works with what it has rather than fabricating the result. A fresh ask (or a slight rephrase, which may route to a different tool) resolves most of the rest. How tool calls work end to end: [Tool use](/learn/tool-use/).

### Memory remembered something wrong

**Say "forget that…" and it's gone.** Memory is fully under your control, in chat and in settings:

- **"Forget that I…"** removes a specific memory immediately
- **"What do you remember about me?"** lists everything stored
- **Settings** shows the same list, where you can edit or delete individual entries, clear everything, or switch memory off entirely — off means Lumen neither saves new facts nor uses stored ones

Every memory change also announces itself with a chip in the chat, so a wrong save is visible the moment it happens. More in [Memory](/chat/memory/).

## Everything else

### I want dark mode (or want it gone)

**Settings → Preferences → Appearance.** Choose **System** (follow your device), **Light**, or **Dark**. If Lumen seems to switch themes "by itself," it's set to System and your device schedules the change.

### Where do I report a bad answer or send feedback?

**Flag it in the app.** Every response can be reported as bad, and that feedback ties to the exact answer you flagged — which is what makes it actionable. A flagged answer does more for accuracy than a hundred silent successes; if something looks off, take the two seconds. Why this matters: [Accuracy, citations & clinical judgment](/trust/responsible-ai/).

## Still stuck?

- [FAQ](/help/faq/) — the questions that aren't symptoms
- [Glossary](/help/glossary/) — the terms behind the error you're reading
- [Getting started](/getting-started/) — one-minute scenarios that show the happy path
