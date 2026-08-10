---
title: "Dictation & Voice Input"
description: "Speak instead of type: live streaming dictation and one-shot transcription in Lumen, with tips for accurate medical dictation."
weight: 11
---

You already dictate — notes, letters, addenda. Lumen's voice input brings that habit into chat: tap the mic, talk the way you'd talk into any dictation system, and your words land in the composer as text, ready to send or edit.

## Two ways to dictate

**Live streaming dictation.** Tap the mic and start speaking — your words are transcribed as you go. Lumen uses **voice-activity detection** on the server, which means it hears when you've finished an utterance and finalizes it for you. You don't press anything between sentences; pause naturally, and the transcript keeps up. This is the mode for composing a message by voice: a question, a case summary, a draft paragraph.

**One-shot transcription.** Already have the audio — a recorded memo, a saved dictation? Lumen can transcribe a complete recording in one pass and hand you the full text. Useful when you captured your thoughts on the move and want to work with them now.

Either way, the output is ordinary text in the conversation. Everything you can do with a typed message — edit it, attach a document alongside it, send it to a [Specialist](/skills-and-specialists/) — works the same when it started as speech.

## Where you'll find it

- **The chat composer.** The mic sits in the input bar at the bottom of every chat, next to where you type.
- **The browser extension side panel** {{< status-badge "beta" >}} — dictate into Lumen while the system you're working in stays on screen, no window-switching.

## Getting a clean transcript

Lumen's transcription handles **medical vocabulary well** — drug names, anatomy, abbreviations you'd use in a note. A few habits from conventional dictation carry over:

- **Say your punctuation** if you want it placed exactly — "period", "new paragraph" — just as you would with any transcriptionist. Natural speech without dictated punctuation also works; you'll simply do a little more cleanup.
- **Speak in complete phrases** and pause between thoughts. The voice-activity detection uses your pauses to finalize utterances, so a natural cadence produces a natural transcript.
- **Review before you rely on it.** Read the transcript before sending — and *always* before any text derived from dictation ends up in a document you sign. Transcription is excellent; it is not infallible, and sound-alike drug names are exactly where it will fail if it fails.

{{< tip title="Dictate the question, not just the note" >}}
Voice input isn't only for long-form text. A spoken question — "sixty-eight-year-old on apixaban needs a dental extraction, do we hold it?" — often comes out more complete than the terse version you'd type, and [more context gets you better answers](/learn/prompting-for-clinicians/).
{{< /tip >}}

## A word about PHI

Dictated audio is processed into text — so **the same PHI judgment you apply to typing applies to speaking**. It's easy to say a patient's name aloud out of pure charting habit when you'd never have typed it. If the case details matter but the identifiers don't, dictate first, then let Lumen strip the identifiers before the text goes anywhere else.

{{< callout type="warning" >}}
**Speech becomes text, and text can carry PHI.** Before sharing or reusing a dictated case, run it through de-identification — see [Privacy &amp; Safety tools](/tools/privacy/) for how Lumen replaces identifiers with consistent pseudonyms you can reverse later.
{{< /callout >}}

## Next steps

- [Typing &amp; Sending](/chat/sending-messages/) — the rest of the composer
- [Privacy &amp; Safety tools](/tools/privacy/) — de-identify before you share
- [Attachments](/chat/attachments/) — pair a dictated question with a document
