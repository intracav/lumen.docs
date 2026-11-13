---
title: "Build grand rounds slides"
navTitle: "Grand rounds slides"
description: "Turn a de-identified case and your teaching points into a grand rounds deck with Lumen, refine it slide by slide, and download it as a PowerPoint file."
lead: "Describe the case and what you want the room to learn. Lumen builds the deck structure, timeline, teaching slides and references as a PowerPoint file you can keep editing."
weight: 7
icon: presentation
who: "residents, fellows, attendings and educators"
keywords: ["AI grand rounds presentation", "AI case presentation slides", "medical PowerPoint AI"]
glance:
  what: "A step-by-step way to build a case-based teaching presentation in Lumen and download it as a PowerPoint (.pptx) file."
  who: "Residents, fellows, attendings and educators preparing grand rounds, morning report or case conferences."
  why: "Turning a case into a teaching arc takes evenings. Lumen drafts the structure and content around your teaching points, so your time goes on the clinical judgment and the delivery."
  needs: "Any Lumen plan. A de-identified case summary, two or three teaching points and your time slot. About 15 minutes."
  result: "A PowerPoint deck with a case timeline, workup, teaching slides, image placeholders and references, ready for your own images and final edits."
---

You're presenting a complicated endocarditis case at grand rounds in two weeks, and you have 20 minutes. The case is clear in your head. Turning it into slides is the slow part. Lumen uses its **Case Presentation** skill to structure the story around your teaching points. It builds the deck as a PowerPoint file and lets you change one slide at a time by asking. Your own images, such as echo stills and CT scans, go into placeholder slides after you download it.

## Before you start

- **Plan:** any Lumen plan. Creating presentations is included on Free.
- **The case, de-identified.** Remove names, record numbers and dates. Use relative time ("hospital day 6"). It presents better anyway.
- **Two or three teaching points.** A case presentation is an argument. Decide what the room should remember.
- **Your time slot and audience**, such as "20 minutes, internal medicine residents".
- **Papers you want cited** (optional). Attach them, and Lumen will work from them.
- **Time:** about 15 minutes for a first draft.

A *skill* is a set of instructions Lumen follows for a kind of output. You can choose one by typing `/`, or Lumen applies it when your request matches.

## How to build the deck

{{< steps >}}
{{< step title="Choose the Case Presentation skill" >}}
Open a new chat. Type `/` in the message box and choose **Case Presentation** from the **Skills** list. If you ask for a grand rounds deck, Lumen usually applies it on its own.

{{< composer menu="skills" text="/" items="Case Presentation|Structured clinical case presentation for conferences and teaching;Journal Club|Critical appraisal of medical literature for journal club;Study Guide|Clinical education materials for medical students and residents" >}}
{{< /step >}}
{{< step title="Describe the case and the teaching points" >}}
Type the case, the teaching points and the time slot, then press **Send**:

{{< composer text="Build a 20-minute grand rounds deck as a PowerPoint for internal medicine residents. Fictional case: 46-year-old man with a known bicuspid aortic valve, 3 weeks of fevers and fatigue. Streptococcus mitis in 2 of 2 blood culture sets. TTE unrevealing. TEE on hospital day 6 shows a 9 mm aortic valve vegetation and a new aortic root abscess. Splenic infarct on CT. New first-degree AV block on day 7. Aortic valve replacement on day 9. Teaching points: applying the modified Duke criteria; TTE versus TEE; indications for early surgery in left-sided endocarditis." >}}
{{< /step >}}
{{< step title="Review the outline" >}}
Lumen proposes an outline first: title, case timeline, workup, image placeholders, the complications, one section per teaching point, take-home points and references. Reorder it if you like, for example: `Put the Duke criteria before the surgery decision.`
{{< /step >}}
{{< step title="Let Lumen build the slides" >}}
Say `Build it.` You'll see **Building presentation**, then **Presentation ready**. A presentation card appears in the chat. Click it to open the deck in the side panel.
{{< /step >}}
{{< step title="Refine one slide at a time" >}}
Ask for changes by slide number. The rest of the deck stays as it is:

{{< composer text="Make slide 5 a two-column table: modified Duke criteria on the left, this patient's findings on the right, with a final row giving the classification." >}}
{{< /step >}}
{{< step title="Download and add your images" >}}
Click **Download** in the side panel to save the .pptx file. Open it in PowerPoint or Keynote, place your de-identified images on the placeholder slides and do a timing run.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="chat-artifact" alt="A presentation card in a Lumen chat, with the deck open in the side panel" caption="A presentation built in chat. Open it in the side panel, refine it, then download the .pptx file." url="lumen.intracav.ai" >}}
{{< chat-demo title="Refining one slide" caption="Illustration with a fictional case." >}}
{{< user >}}Make slide 5 a two-column table: modified Duke criteria on the left, this patient's findings on the right, with the classification at the bottom.{{< /user >}}
{{< lumen thought="6" tools="Presentation ready" >}}
Slide 5 is now a two-column table.

- **Major:** typical organism in 2 separate blood cultures (*Streptococcus mitis*, a viridans group streptococcus). Echocardiographic evidence: vegetation and new perivalvular abscess on TEE.
- **Minor:** predisposing heart condition (bicuspid aortic valve). Fever. Vascular phenomena (splenic infarct).
- **Classification:** definite infective endocarditis (2 major criteria).

The other slides haven't changed.

{{< artifact type="pptx" title="Grand rounds: aortic valve endocarditis" sub="PowerPoint · 16 slides" >}}
{{< follow-ups "Halve the text on every slide|Add speaker notes|Add a slide on antibiotic choice" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check the result

{{< lui-block title="Before you present" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Every clinical fact matches the case" body="Timeline, organisms, sizes and days." >}}
{{< lui-row type="check" title="Criteria and recommendations match the current guideline" body="Open the guideline and compare the teaching slides with it." >}}
{{< lui-row type="check" title="Every reference is real and says what the slide says" body="Open each one. Replace any you wouldn't cite yourself." >}}
{{< lui-row type="check" title="No identifiers anywhere" body="Check slide text, speaker notes and image metadata." >}}
{{< lui-row type="check" title="It fits the time slot" body="Do a timed run. Cut slides rather than speaking faster." >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **State the time and audience up front.** Decks come out the right length when Lumen knows both.
- **Too much text?** Ask `Halve the text on every slide and move the detail into speaker notes.`
- **Use your own sources.** Attach the guideline and key papers and say `Cite only the attached papers.`
- **Build the evidence first.** For the teaching points, run a [literature review](/guides/literature-review/) and use it for the reference slides.

## Limits and safety

{{< callout type="safety" title="Check the teaching content" >}}
Lumen can be wrong, and teaching slides spread errors to a whole room. Check every criterion, dose and recommendation against the current guideline before you present. Don't enter information you're not permitted to share. Even a de-identified case can be recognizable, so follow your institution's rules for case presentations. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Lumen doesn't add your clinical images.** Place them yourself after download.
- **The default design is plain.** Apply your institution's template in PowerPoint if you need one.
- **Complex layouts** such as custom diagrams are easier to finish in PowerPoint.

## FAQ

{{< faq question="What file do I get?" >}}
A PowerPoint file (.pptx). It opens in PowerPoint, Keynote and Google Slides. You can also ask for a PDF copy for handouts.
{{< /faq >}}
{{< faq question="Can I keep editing in Lumen after I download?" >}}
Yes, in the same chat. Lumen edits the deck it built there, slide by slide. Download again to get the new version. Changes you make in PowerPoint stay in your downloaded file only.
{{< /faq >}}
{{< faq question="Do I need a paid plan?" >}}
No. Presentations and other documents can be created on every plan, including Free. Paid plans give you more usage. See [Plans](/plans/).
{{< /faq >}}

## Next steps

{{< related "/chat/artifacts/" "/tools/document-generation/" "/guides/literature-review/" "/guides/study-guide-quiz/" >}}
