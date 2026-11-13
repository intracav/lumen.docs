---
title: "De-identification: removing patient identifiers"
navTitle: "De-identification"
description: "What de-identification is, why consistent pseudonyms beat black bars, and exactly where Lumen de-identifies text automatically and where it doesn't."
lead: "At M&M you present the case, never the patient. De-identification does the same for text: the clinical story stays, the identity comes out."
weight: 10
icon: lock
keywords: ["AI PHI de-identification", "HIPAA safe harbor de-identification", "remove PHI from clinical notes", "pseudonymization vs redaction"]
glance:
  what: "De-identification removes the details that point to a specific person, such as names, record numbers and dates, while keeping the clinical content."
  who: "Clinicians, researchers, educators and privacy or compliance leads."
  why: "So a case can be taught from, studied or asked about without carrying the patient's identity with it."
  needs: "Nothing to read this page. Automatic de-identification applies in Lumen Research and the website assistant. The de-identify tool in chat needs a paid plan."
  result: "A clear view of what de-identification does, where Lumen applies it and what you still check."
---

When you present a case at M&M, you walk the room through everything that matters: the presentation, the labs, the decisions, the miss. You never bring the patient's name, MRN or date of birth. The case teaches; the identifiers don't travel. **De-identification** is that discipline applied to text. It removes the details that point to a specific person and keeps the clinical story.

## What de-identification means

A clinical note is two documents braided together. One is the medicine: the presentation, the creatinine trend, the antibiotic choice. The other is the identity: the name in the header, the MRN, the dates, the phone number, the small-town detail that turns "a patient" into *the* patient. De-identification separates them. Under HIPAA, health information that has been properly de-identified is no longer protected health information (PHI), which is why the standard for doing it properly is strict.

HIPAA's *Safe Harbor* method lists 18 kinds of identifiers that must be removed. They fall into a few families:

- **Who:** names, record numbers, account and insurance numbers, device serial numbers, photos of the face, biometrics.
- **Where:** addresses and any place smaller than a state, with narrow exceptions.
- **When:** dates tied to the person, such as birth, admission and discharge, and any age over 89.
- **How to reach them:** phone and fax numbers, email, web and IP addresses.
- **Anything else unique:** any other number, characteristic or code that could identify the person.

The last one is the one people miss. "The only pediatric heart-transplant recipient in the county" has no name or date, and identifies the patient perfectly. De-identification is a judgment about whether someone could be re-identified, not a spell-check for names.

## How it works: pseudonyms, not black bars

{{< flow >}}
{{< flow-node kicker="Detect" title="Find identifiers" icon="search" tint="blue" >}}Names, numbers, dates, contacts.{{< /flow-node >}}
{{< flow-node kicker="Replace" title="Consistent pseudonyms" icon="refresh" tint="plum" >}}"Maria Delgado" becomes [Patient A] everywhere.{{< /flow-node >}}
{{< flow-node kicker="Keep a key" title="Private mapping" icon="key" tint="accent" >}}Held for that session only.{{< /flow-node >}}
{{< flow-node kicker="You review" title="Check the result" icon="eye" tint="green" >}}Especially rare, telling details.{{< /flow-node >}}
{{< /flow >}}

**Redaction** blacks things out. It's safe but destructive: if every date is a black bar, you can't see that the fever started two days after the line went in. **Pseudonymization** replaces instead: "Maria Delgado" becomes [Patient A] and "02/03/2026" becomes [Date-1], the same way every time. The story keeps its cast and its timeline; you can't tell who [Patient A] is.

## How Lumen does it

Lumen de-identifies in two different ways. Be clear about which applies where.

**Automatic, before text goes to the AI model, in two places only:**

- **Lumen Research**, the statistics workspace, where your data stays on your device and what goes to the model about your analysis is de-identified first. See [Research](/research/).
- **The website assistant**, the assistant device makers embed on their own websites, where visitors' messages are de-identified before they reach the model. See [Website assistant](/connect/website-assistant/).

Outside those two places, including everyday chat and Specialists, don't rely on automatic de-identification. Treat what you type as going to the model as written, and follow your organization's rules on patient information.

**On request, in chat (paid plans):** you can ask Lumen to de-identify a piece of text with its de-identify tool. It replaces identifiers with consistent pseudonyms and keeps a private mapping for that session. In the same session you can ask to see the mapping, restore the original values, or destroy the mapping when you're done. Mappings also expire on their own. See [Privacy tools](/tools/privacy/).

{{< chat-demo title="De-identify before sharing" caption="Illustration with a fictional patient. Review the output yourself before sharing it." >}}
{{< user >}}De-identify this for journal club: "Maria Delgado, MRN 4471902, 71F admitted 02/03/2026 with fever 5 days after PICC placement. Blood cultures grew S. epidermidis. Line removed 02/05; afebrile within 48h."{{< /user >}}
{{< lumen tools="De-identify text" >}}
"[Patient A], MRN [ID-1], 71F admitted [Date-1] with fever 5 days after PICC placement. Blood cultures grew S. epidermidis. Line removed [Date-2]; afebrile within 48h."

The timeline still reads correctly. I've kept a private mapping for this session; ask me to show it, restore the original, or destroy it. Review the text for any rare detail that could still identify the patient before you share it.
{{< /lumen >}}
{{< /chat-demo >}}

## What this means for you

- **Use it for sharing and teaching.** Case write-ups, journal club, M&M slides and board-style questions built from real cases.
- **Remove identifiers yourself before pasting them into chat** unless your organization permits otherwise. Don't rely on chat to de-identify for you.
- **Do the final review.** The tool sweeps the obvious identifiers; you judge the rare, telling detail.

## Limits and safety

- **Automated detection misses things.** It's good at names, numbers and dates. Unusual details, free-text descriptions and context can still identify someone.
- **Pictures can't be de-identified as text.** Scans and photos may show names or faces.
- **De-identified doesn't mean anonymous forever.** Combined with other data, a case can sometimes be re-identified. Share the minimum needed.
- **Your organization's rules come first.** Many organizations set stricter requirements for AI tools than Safe Harbor.

{{< callout type="important" title="Where automatic de-identification applies" >}}
Lumen's automatic de-identification before model calls is a safeguard **only in Lumen Research and the website assistant**. In other parts of Lumen, use the de-identify tool or remove identifiers yourself, and don't enter patient information you're not permitted to share.
{{< /callout >}}

## FAQ

{{< faq question="Is de-identified text still PHI?" >}}
Properly de-identified information isn't PHI under HIPAA. "Properly" means all 18 Safe Harbor categories are removed, including the catch-all for anything else that could identify the person. Treat Lumen's output as a strong first pass that you check.
{{< /faq >}}
{{< faq question="Does Lumen de-identify everything I type?" >}}
Don't count on it. Automatic de-identification is a documented safeguard only in Lumen Research and the website assistant. In chat, you can ask for it with the de-identify tool on paid plans, or remove identifiers yourself.
{{< /faq >}}
{{< faq question="Can someone reverse the pseudonyms?" >}}
Not from the text alone. The mapping is held privately in your session, expires on its own and can be destroyed on request. The bigger risks are rare details that identify someone and sharing the original text by mistake.
{{< /faq >}}

## Next steps

{{< related "/tools/privacy/" "/trust/privacy/" "/research/" "/connect/website-assistant/" >}}
