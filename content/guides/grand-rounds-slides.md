---
title: "Build Grand-Rounds Slides with AI"
description: "Turn a complicated case into a structured grand-rounds deck — timeline, workup, teaching pearls, references — then refine slide by slide and export to PPTX."
weight: 7
audience: clinician
time: "~15 minutes"
keywords: ["AI grand rounds presentation", "AI case presentation slides", "medical PowerPoint AI"]
---

## What you'll make

A 20-minute case presentation, built from a description of the case and what you want the room to learn. You'll hand Lumen a complicated (and here, entirely fictional) endocarditis case; it structures the deck — case timeline, workup, imaging-findings placeholders, teaching pearls, references — as a slide artifact you can refine one slide at a time, then export to PPTX.

Lumen builds the *structure and content*: the narrative arc, the tables, the teaching points, the cited references. Your actual images — the echo stills, the chest film — get dropped into the placeholder slides in PowerPoint after export. That division of labor is deliberate: Lumen does the two evenings of organizing; you add the pixels only you have.

## Before you start

- **The case, de-identified.** You'll be describing a real patient's arc — strip names, dates, and identifiers before you type. A day-numbered timeline ("day 3 of admission") presents better than calendar dates anyway.
- **Your teaching points.** A case presentation is an argument, not a chronicle. Know the two or three things you want the audience to walk out remembering — Lumen will build the deck around them.
- **Your time slot.** Say "20 minutes" up front and the deck gets sized to fit it.

{{< callout type="warning" >}}
**A note on patient data.** Case presentations are where PHI sneaks into prompts. Remove direct identifiers and shift dates to relative time before pasting the case. The fictional details below show the level of specificity that works — none of it belongs to a real patient.
{{< /callout >}}

## The steps

<div class="steps-container">

{{< step num="1" title="Describe the case and the teaching points" >}}
Give Lumen the case arc and what you want it to teach, in one message:

```text
Build a 20-minute grand-rounds deck on this fictional case: a 46-year-old
man with a bicuspid aortic valve presents with three weeks of fevers and
fatigue. Blood cultures grow Streptococcus mitis; TTE is unrevealing, TEE
shows a 9 mm aortic valve vegetation with a new paravalvular abscess on
hospital day 6. Course complicated by a splenic infarct and first-degree
AV block. Taken for valve replacement on day 9.

Teaching points: (1) applying the modified Duke criteria, (2) TTE vs TEE
sensitivity, (3) indications for early surgery in left-sided endocarditis.
```

**You should see:** Lumen apply the [Case Presentation skill](/skills-and-specialists/skills/) — it recognizes the request without you touching the `/` menu — and propose a deck outline first: title, case timeline, workup, imaging placeholders, the complication arc, teaching pearls, references. It builds the story so each teaching point lands where the audience is already asking the question it answers.
{{< /step >}}

{{< step num="2" title="Let it build the deck — then open the artifact" >}}
Approve the outline (or reorder it — *"move the Duke criteria discussion before the surgery decision"*) and let Lumen generate the slides.

**You should see:** a presentation card appear in the chat. Tap it and the deck opens in the side panel: slide-by-slide content, a case timeline, placeholder slides marked for your TEE stills and the splenic CT, teaching-pearl slides, and a references slide with real citations. For a branded, polished treatment — your institution's look rather than a plain deck — ask for the [Branded Clinical Presentation skill](/skills-and-specialists/skills/) by name.
{{< /step >}}

{{< step num="3" title="Iterate on individual slides" >}}
Now refine it the way you'd mark up a fellow's draft — one slide at a time:

```text
Make slide 4 a table of the modified Duke criteria, with this patient's
findings checked off in a second column.
```

**You should see:** slide 4 rebuilt as a two-column table — criteria on the left, this case's findings on the right — while the rest of the deck stays untouched. Keep going: *"tighten the timeline slide to fit one screen"*, *"add a slide on antibiotic selection after the pearls"*, *"cut the word count on slide 7 in half."*
{{< /step >}}

{{< step num="4" title="Export to PPTX and add your images" >}}
When the deck says what you'd say:

```text
Export the deck as a PPTX file.
```

**You should see:** a **Download** option on the artifact panel that saves the deck as a PowerPoint file. Open it in PowerPoint, drop your echo stills and CT images into the marked placeholder slides, and do your final timing pass. Structure, content, and references came from the chat; the images and the delivery are yours.
{{< /step >}}

</div>

{{< chat-demo title="Refining one slide" >}}
{{< user >}}Make slide 4 a table of the modified Duke criteria with this patient's findings checked off.{{< /user >}}
{{< lumen >}}Done — slide 4 is now a two-column table: major and minor criteria on the left, this case's findings on the right (2 major: typical organism in two cultures, TEE vegetation; 2 minor: fever, vascular phenomena — the splenic infarct). The verdict row reads **"Definite IE — 2 major criteria met."** The rest of the deck is unchanged.{{< /lumen >}}
{{< /chat-demo >}}

## Troubleshooting

- **The deck is too dense — every slide is a wall of text.** Say so: *"halve the text on every slide; move detail to speaker notes."* Decks come out better when you state the time limit and audience up front.
- **The references aren't the ones you'd cite.** Ask Lumen to search: *"replace the references on the surgery-timing slide with the current guideline and the key RCT, and verify them."* You can also attach the papers you want cited and have it work from those.
- **You need your institution's look.** The default deck is clean but generic. Ask for the Branded Clinical Presentation skill, and set your branding once so every future deck picks it up.

## Next steps

- [Run an AI Literature Review with Citations](/guides/literature-review/) — build the evidence base behind your teaching points first.
- [How to Ask AI Clinical Questions: A Prompting Guide](/learn/prompting-for-clinicians/) — the case description you write is a prompt; write it like one.
- [Creating Documents](/tools/document-generation/) — everything Lumen can generate besides slides: PDFs, Word docs, spreadsheets.
