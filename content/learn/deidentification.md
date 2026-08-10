---
title: "De-Identification: How AI Strips PHI Safely"
description: "AI PHI de-identification explained: what the 18 HIPAA identifiers are, pseudonyms vs. redaction, and how you stay in control of re-identification."
weight: 10
keywords: ["AI PHI de-identification", "HIPAA safe harbor de-identification", "remove PHI from clinical notes", "pseudonymization vs redaction"]
---

Think about presenting a case at M&amp;M. You walk the room through everything that matters — the presentation, the labs, the decision points, the miss. What you never bring is the patient: no name, no MRN, no date of birth. The case teaches; the identifiers don't travel. Nobody in the room needs to know *who* it was to learn *what happened*.

**De-identification** is that same discipline applied to text. It removes the details that point to a specific person while preserving the clinical story — so a note, a case summary, or a question about a real patient can be shared, taught from, or asked about without carrying the patient along with it.

## What de-identification actually means

A clinical note is two documents braided together. One is the medicine: the presentation, the trend in the creatinine, the antibiotic choice, the outcome. The other is the identity: the name in the header, the MRN, the dates, the phone number in the discharge instructions, the small-town detail that narrows "a patient" to *the* patient.

De-identification separates the braid. The medicine stays; the identity comes out. Under HIPAA, health information that has been properly de-identified is no longer protected health information at all — which is exactly why the standard for doing it properly is strict.

## The 18 identifiers, in plain terms

HIPAA's **Safe Harbor** method names eighteen categories of identifiers that must be removed for text to count as de-identified. You don't need to memorize the list; it clusters into a few families you already recognize:

- **Who they are** — names, and anything that works like a name: medical record numbers, account numbers, insurance IDs, device serial numbers, biometric identifiers, full-face photos.
- **Where they are** — addresses and geographic detail smaller than a state (with narrow exceptions for partial ZIP codes).
- **When things happened** — dates tied to the person: birth dates, admission and discharge dates, and any age over 89.
- **How to reach them** — phone and fax numbers, email addresses, URLs, IP addresses, social media handles.
- **Everything else that singles them out** — the catch-all category: any other unique number, characteristic, or code that could identify the individual.

The last category is the one clinicians underestimate. "The only pediatric heart-transplant recipient in the county" contains no name, no date, and no MRN — and identifies the patient perfectly. De-identification is a judgment about *re-identifiability*, not a spell-check for names.

## Pseudonyms, not black bars

There are two ways to remove an identifier, and the difference matters more than it looks.

**Redaction** blacks it out: "John Smith" becomes ██████. Safe, but destructive — a heavily redacted note reads like a crossword puzzle, and the clinical timeline dissolves. If every date is a black bar, you can no longer see that the fever started *two days after* the line was placed. The identifiers were hiding structure, and redaction takes the structure with them.

**Pseudonymization** replaces instead of erasing: "John Smith" becomes [Patient A], "01/20/2026" becomes [Date-2] — and, critically, the substitution is **consistent**. Every mention of John Smith becomes [Patient A], everywhere in the text. The story keeps its cast and its clock. You can still follow who did what, and in what order; you just can't tell who [Patient A] is.

Lumen uses consistent pseudonyms. Ask it to de-identify a note and the result is still a readable clinical narrative — the same case, told about nobody in particular.

{{< chat-demo title="De-identify a note" >}}
{{< user >}}De-identify this before I send it to the journal club: "Maria Delgado, MRN 4471902, 71F admitted 02/03/2026 with fever 5 days after PICC placement. Blood cultures grew S. epidermidis. Line removed 02/05; defervesced within 48h."{{< /user >}}
{{< lumen >}}Here's the de-identified version:

"[Patient A], MRN [ID-1], 71F admitted [Date-1] with fever 5 days after PICC placement. Blood cultures grew S. epidermidis. Line removed [Date-2]; defervesced within 48h."

The clinical timeline is intact — the interval between admission and line removal still reads correctly. I've kept a session mapping, so I can restore the original values later if you ask, or destroy the mapping when you're done.{{< /lumen >}}
{{< /chat-demo >}}

## Re-identification stays under your control

Pseudonyms would be a liability if the mapping between [Patient A] and the real patient floated around uncontrolled. So Lumen treats the mapping like a locked key ring for one conversation:

- **The mapping lives in a session.** When Lumen de-identifies text, it records each original value, its pseudonym, and its category — privately, for that session only.
- **You can reverse it — in the same session.** Ask Lumen to re-identify the text and the original values come back. This is what makes the workflow practical: strip identifiers to work on the shareable version, restore them when the text goes back into a chart-adjacent context that legitimately needs them.
- **You can inspect it.** Ask to see the session mapping and you get the full ledger — every substitution Lumen made, so your review is a check against a list, not a hunt.
- **You can destroy it.** Mappings expire automatically, and you can destroy the session on demand the moment you're finished. After that, [Patient A] maps to no one.

The direction of control is the point: the AI removes identifiers eagerly and restores them only when you ask, only where the mapping still exists.

## When to reach for it

- **Sharing** — sending a note to a colleague, a research team, or a committee that needs the case, not the patient.
- **Teaching** — case write-ups, journal club, M&amp;M slides, board-review questions built from real presentations.
- **Asking about a real case** — when you want Lumen's help thinking through an actual patient, de-identify first. The clinical reasoning is unchanged; the question simply stops carrying PHI it never needed.

One honest caveat, because it is the same caveat that applies to every automated safeguard: **review the output**. Automated de-identification is very good at the identifiers that look like identifiers — names, dates, numbers. The eighteenth category, the "only one in the county" detail, is a judgment call, and the judgment is yours. The tool does the sweep; you do the sign-off. That division of labor is exactly how you'd run it with a human assistant, too.

{{< callout type="success" >}}
**See it in Lumen:** the de-identify, re-identify, and session-mapping tools live in [Privacy &amp; Safety](/tools/privacy/) — or watch it earn its keep in a real workflow: [building grand rounds slides from a case](/guides/grand-rounds-slides/).
{{< /callout >}}

## Frequently asked questions

{{< faq question="Does de-identified text still count as PHI?" >}}
Properly de-identified health information is no longer PHI under HIPAA — that's the entire legal purpose of the exercise. The operative word is *properly*: all eighteen Safe Harbor identifier categories removed, including the catch-all "anything else that could identify the individual." Treat Lumen's de-identification as a strong first pass that you verify, and check your institution's own policies — many set additional requirements for AI-assisted handling of patient data.
{{< /faq >}}

{{< faq question="Why pseudonyms instead of just deleting the identifiers?" >}}
Because the identifiers carry structure the clinical story needs. Consistent pseudonyms preserve who's who and what happened when — [Patient A] stays [Patient A] in every paragraph, and [Date-1] and [Date-2] keep their order — so the de-identified note remains a coherent narrative instead of a redaction puzzle. It's also what makes controlled re-identification possible in the same session.
{{< /faq >}}

{{< faq question="Can someone else re-identify text that Lumen de-identified?" >}}
Not without the session mapping, and the mapping isn't part of the text — it's held privately in your session, expires automatically, and can be destroyed on demand. Someone holding only the de-identified note holds pseudonyms with nothing to resolve them against. The practical risks to watch are the ones upstream of the tool: rare-detail re-identifiability, and sharing the *original* text by mistake. Review before you share.
{{< /faq >}}

---

Next up: the identifiers are out of the text — now make sure the *facts* in the answer are real. [Hallucinations, and how grounding catches them](/learn/hallucinations-and-grounding/).
