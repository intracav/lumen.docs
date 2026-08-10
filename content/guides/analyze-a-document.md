---
title: "Upload & Analyze a Clinical PDF"
description: "Upload a 40-page guideline PDF, get a structured summary of what changed, drill into specifics with page-cited answers, and export a team brief."
weight: 6
audience: clinician
time: "~10 minutes"
keywords: ["AI PDF analysis", "clinical guideline summary AI", "analyze medical document"]
---

## What you'll make

A 40-page anticoagulation guideline just landed in your inbox, and somewhere in it are the three changes that actually affect your practice. In this guide you'll upload the PDF, get a structured summary of what changed versus current practice, interrogate the specifics — with every answer citing the page it came from — and finish with a one-page summary your team can read in the elevator.

The difference between this and skimming: Lumen reads all 40 pages, and it shows its work. You never have to take its word for anything — each claim points back to a page you can open and check.

## Before you start

- **The PDF on hand.** Up to 5 MB — plenty for a text-based guideline. (Scanned-image PDFs with no text layer extract poorly; if the text isn't selectable in your PDF viewer, Lumen will struggle too.)
- **A rough sense of your current practice**, so you can ask the question that matters: not "summarize this" but "what's *different*?"

{{< callout type="warning" >}}
**A note on patient data.** A published guideline contains no PHI — but the moment your follow-ups do (*"so what about my patient, DOB 3/14/58, on…"*), you're pasting patient data into a chat. Strip direct identifiers first: "a 67-year-old on apixaban with a planned colonoscopy" carries everything Lumen needs. De-identification starts with you.
{{< /callout >}}

## The steps

<div class="steps-container">

{{< step num="1" title="Upload the PDF and attach it to your message" >}}
Click the **paperclip icon** in the input bar and upload the guideline. You'll watch it move through four stages — Uploading, Extracting, Embedding, Done — usually in under a minute. When it's ready, the file appears as a chip above the text field.

**You should see:** the document chip sitting above your message box, which means it will ride along with whatever you send next. The file also lands in your document library, so you won't upload it twice.
{{< /step >}}

{{< step num="2" title="Ask for a structured summary of what changed" >}}
Don't ask for a summary — ask for a *delta*. Type `@` and pick the **Document Analysis** Specialist for the deepest read:

```text
@Document Analysis — This is the 2026 update of the anticoagulation
guideline we follow. Give me a structured summary of what changed
from typical current practice: new recommendations, reversed
recommendations, and dose or monitoring changes. Cite the page for
each item.
```

**You should see:** a structured breakdown — new, changed, and unchanged — with a page reference on each claim. The [Document Analysis Specialist](/skills-and-specialists/specialists/) grounds every statement in the source and quotes sparingly, so what you get is a map of the document, not a paraphrase of its abstract.
{{< /step >}}

{{< step num="3" title="Drill into the sections that affect you" >}}
Now interrogate the document like a colleague who has actually read it:

```text
What does it say about periprocedural bridging for patients on DOACs?
Anything different for renal impairment?
```

**You should see:** a specific answer with the page it came from — and if the guideline is silent or equivocal on something, Lumen says so instead of filling the gap from general knowledge. That "the document doesn't address this" answer is a feature: it tells you where the guideline ends and judgment begins.
{{< /step >}}

{{< step num="4" title="Generate a one-page summary for your team" >}}
When you've confirmed the key points:

```text
Create a one-page summary for our clinic team: the five changes that
affect daily practice, each with its page reference. Keep it scannable.
```

**You should see:** a document card appear in the chat. Open it in the side panel, then **Download** it as a PDF or Word file to send around. Page references stay in, so a skeptical colleague can go straight to the source.
{{< /step >}}

</div>

{{< chat-demo title="Interrogating page by page" >}}
{{< user >}}What does it say about periprocedural bridging?{{< /user >}}
{{< lumen >}}The update recommends **against routine heparin bridging** for most patients on DOACs undergoing elective procedures, reserving it for select high-thrombotic-risk cases — a firmer stance than the previous "consider case-by-case" language *(p. 23, Recommendation 4.2)*. Renal impairment changes the hold times, covered in the table on *p. 25*.{{< /lumen >}}
{{< /chat-demo >}}

## Comparing two versions

If you still have last year's edition, upload both and ask Lumen to compare them directly: *"Compare the 2024 and 2026 versions — what changed, what conflicts, what's new?"* Lumen reads both and reports differences with citations into each document. Details in [Documents](/knowledge/documents/).

## Troubleshooting

- **"Extracting" fails or the answers seem to miss whole sections.** The PDF is probably a scan without a text layer. Re-export it from the source, or run it through OCR before uploading.
- **Answers feel like general knowledge, not the document.** Anchor your question to the attachment explicitly — *"according to this document…"* — and make sure the file chip was on the message you sent.
- **A page reference looks wrong.** Ask Lumen to re-check: *"quote the exact passage from page 23."* If the quote isn't there, Lumen will correct itself — and you've just verified the one claim that mattered.

## Next steps

- [Build Grand-Rounds Slides with AI](/guides/grand-rounds-slides/) — turn source material like this into a presentation.
- [AI Hallucinations in Medicine — and How Grounding Prevents Them](/learn/hallucinations-and-grounding/) — why page-cited answers beat fluent ones.
- [Uploading Your Files](/chat/attachments/) — file types, size limits, and how attachments work in any chat.
