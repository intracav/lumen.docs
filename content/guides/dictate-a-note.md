---
title: "Dictate a Note Hands-Free"
description: "Dictate a post-procedure note into Lumen between cases: speak naturally, get a live transcript, structure it with a Skill, then review and sign."
weight: 25
audience: clinician
time: "~5 minutes"
keywords: ["medical dictation AI", "dictate clinical note", "voice to procedure note AI"]
---

It's 11:40, the next case is on the table at 12:00, and the note for the line you just placed is competing with lunch. Typing loses. In this guide you'll dictate the note the way you'd tell it to a colleague in the hallway, let Lumen turn the transcript into a structured procedure note, and walk to the next case with the note done — pending only your review.

## What you'll make

A structured post-procedure note, produced from sixty seconds of natural speech: dictate → transcript lands in the composer → the `/procedure-note` Skill gives it clinical structure → you review, correct, and sign through your normal workflow.

## Before you start

- **A microphone Lumen can use.** The first time you dictate, your browser or device will ask permission — grant it once and you're set.
- **Thirty seconds somewhere reasonably quiet.** Dictation works in a workroom; it works better when the suction isn't running.

{{< callout type="warning" >}}
**Spoken PHI is still PHI.** Everything you dictate becomes text in the chat — exactly as if you'd typed it. The same rules apply: say "the patient," not the name; skip the MRN and date of birth. "Right basilic PICC in a 58-year-old on TPN" carries everything the note needs. See [privacy and de-identification](/tools/privacy/).
{{< /callout >}}

## The steps

<div class="steps-container">

{{< step num="1" title="Start dictation in the composer" >}}
Open a chat and tap the **microphone** in the message composer.

**You should see:** a recording indicator confirming Lumen is listening. From here on, you talk instead of type.
{{< /step >}}

{{< step num="2" title="Speak naturally — pauses are punctuation" >}}
Don't perform; just tell it what happened:

```text
Post-procedure note. Ultrasound-guided right basilic PICC,
five French dual lumen. Sterile technique, chlorhexidine prep,
full barrier. Single wall puncture, wire advanced without
resistance. Tip at the cavoatrial junction on confirmation.
No immediate complications. Line flushed and dressed,
patient tolerated the procedure well.
```

Lumen listens for the natural boundaries in your speech — when you pause between thoughts, it closes out that utterance and transcribes it. So speak at a normal clinical pace and let sentences end; brief silences between sections are what segment the transcript cleanly.

**You should see:** your words appearing as text while you speak, utterance by utterance.
{{< /step >}}

{{< step num="3" title="Stop, and let the transcript land" >}}
Tap the microphone again to stop.

**You should see:** the full transcript sitting in the composer as ordinary, editable text. Fix anything the microphone mangled — a device name, a measurement — the same way you'd edit anything you typed. Nothing has been sent yet.
{{< /step >}}

{{< step num="4" title="Structure it with the /procedure-note Skill" >}}
With the transcript in the composer, invoke the [Skill](/skills-and-specialists/skills/) by typing `/` and choosing **procedure-note** — then send.

**You should see:** your hallway-style narration reorganized into a proper procedure note — indication, technique, findings, complications, disposition — with your dictated facts in the right sections and nothing invented to fill gaps. If you didn't dictate an indication, the note won't conjure one; it will leave the gap where you can see it.
{{< /step >}}

{{< step num="5" title="Review and sign — the part that stays yours" >}}
Read the note the way you'd read a resident's draft: check the laterality, the sizes, the tip position, the complications line. Then move it into the record through your normal documentation workflow and sign it there.

**You should see:** a finished note that took a minute of speaking and a minute of review. Lumen drafted; you authored. Nothing enters the chart except through you.
{{< /step >}}

</div>

{{< tip title="Getting a cleaner transcript" >}}
Three habits cover most of it: keep a normal pace (rushing blurs word boundaries), state numbers with their units ("five French," "four centimeters"), and spell out anything unusual once — an uncommon device name, an unusual eponym. If a term keeps coming out wrong, spelling it verbally beats correcting it every time.
{{< /tip >}}

## Troubleshooting

- **Nothing transcribes.** Almost always microphone permission — check that your browser or device has granted Lumen the mic, then try again.
- **Words are dropped or garbled.** Background noise is the usual culprit. Get closer to the microphone, or move a room away from the equipment; a small position change often fixes it entirely.
- **Sentences split in odd places.** Long mid-sentence pauses read as boundaries — the silence between utterances is the delimiter. Keep a thought moving until it's done, then pause.

## Next steps

- [Dictation](/chat/dictation/) — the full reference for dictating anywhere in Lumen.
- [Draft a Discharge Summary](/guides/discharge-summary/) — the same draft-then-review pattern on a bigger document.
- [Skills](/skills-and-specialists/skills/) — the `/` commands that turn raw text into structured output.
