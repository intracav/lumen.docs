---
title: "Dictate a procedure note by voice"
navTitle: "Dictate a note"
description: "Speak a procedure note to Lumen in a voice conversation. Lumen transcribes it, structures it as a procedure note in the chat, and you review and sign."
lead: "Start a voice conversation, describe the procedure as you would to a colleague, and Lumen writes a structured note in the chat for you to correct and sign."
weight: 25
icon: mic
who: "proceduralists, nurses and advanced practice clinicians"
keywords: ["medical dictation AI", "dictate clinical note", "voice to procedure note AI", "PICC procedure note"]
glance:
  what: "A step-by-step way to speak a procedure note to Lumen and get a structured draft back in the chat."
  who: "Clinicians who document bedside procedures, such as PICC placement, and would rather talk than type between cases."
  why: "The note competes with the next case. Speaking takes a minute. Lumen organizes what you said into a standard note and leaves gaps visible instead of filling them."
  needs: "Any Lumen plan. A device with a microphone and a reasonably quiet spot. About 5 minutes."
  result: "A structured procedure note in the chat, built only from what you said, ready for you to correct, copy into your record and sign."
---

You've just placed a PICC, and the next case starts in 20 minutes. Typing the note will make you late. In Lumen you can hold a **voice conversation**. You speak, Lumen turns your words into a message, and it replies in the chat and aloud. Describe the procedure the way you'd tell a colleague in the hallway, and Lumen writes a structured procedure note in the chat. It uses only what you said and leaves anything you didn't mention as a visible gap. Then you correct it, copy it into your record and sign it.

## Before you start

- **Plan:** any Lumen plan.
- **A microphone.** The first time, your browser or device asks for permission to use it. Allow it.
- **A reasonably quiet spot.** Background noise causes most transcription errors.
- **No identifiers in what you say.** Say "the patient", not a name. Leave out the record number and date of birth. Spoken words become text in the chat, the same as typed words.
- **Time:** about 5 minutes.

## How to dictate the note

{{< steps >}}
{{< step title="Open a new chat" >}}
Go to [lumen.intracav.ai](https://lumen.intracav.ai) and start a new chat.
{{< /step >}}
{{< step title="Start a voice conversation" >}}
Click the microphone button next to the message box (**Start voice conversation**). The message box becomes the voice panel. Wait for **Speak when you're ready**.
{{< /step >}}
{{< step title="Say it in one go" >}}
Start with the words "procedure note", then describe the procedure at a normal pace. Short pauses are fine. Lumen waits while you're mid-thought. For example:

{{< composer text="Procedure note. Ultrasound-guided right basilic vein PICC, 5 French double lumen, for long-term IV antibiotics. Consent obtained. Chlorhexidine prep, maximal sterile barrier precautions. Single needle pass, modified Seldinger technique, no resistance. Tip at the cavoatrial junction by ECG tip confirmation. External length 1 centimeter, arm circumference 28 centimeters. Both lumens flush and draw. Chlorhexidine dressing applied. No immediate complications, estimated blood loss minimal." >}}
{{< /step >}}
{{< step title="Let Lumen write the note" >}}
When you stop, Lumen transcribes what you said. Your words appear in the chat as your message. Lumen then writes the procedure note in the chat and reads its reply aloud. To stop the reading, start talking or click **End**.
{{< /step >}}
{{< step title="If your dictation was split" >}}
If a long pause sent part of your dictation early, keep going. Then say `Combine everything I just said into one procedure note.`
{{< /step >}}
{{< step title="End the voice conversation and correct the note" >}}
Click **End** to finish. Read the note carefully. Type any corrections in the message box, for example `Change the external length to 2 centimeters and add the ordering clinician's name.` Lumen updates the note.
{{< /step >}}
{{< step title="Move it into the record and sign" >}}
Copy the note into your EHR through your usual documentation workflow, and sign it there.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< chat-demo title="PICC procedure note" caption="Illustration with a fictional procedure." >}}
{{< user >}}Procedure note. Ultrasound-guided right basilic vein PICC, 5 French double lumen, for long-term IV antibiotics. Consent obtained. Chlorhexidine prep, maximal sterile barrier precautions. Single needle pass, modified Seldinger technique…{{< /user >}}
{{< lumen thought="5" >}}
**Procedure:** Ultrasound-guided PICC placement, right basilic vein

**Indication:** Long-term IV antibiotics

**Consent:** Obtained

**Technique:** Chlorhexidine skin prep. Maximal sterile barrier precautions. Ultrasound-guided access with a single needle pass, modified Seldinger technique.

**Device:** 5 French double-lumen PICC. External length 1 cm. Arm circumference 28 cm.

**Tip confirmation:** Cavoatrial junction by ECG tip confirmation.

**Function:** Both lumens flush and draw.

**Dressing:** Chlorhexidine dressing applied.

**Complications:** None immediate. Estimated blood loss minimal.

**Not stated:** time-out, operator, ultrasound image saved, catheter lot number.
{{< follow-ups "Add the time-out|Make it shorter|Format for pasting into the EHR" >}}
{{< /lumen >}}
{{< /chat-demo >}}

## Check the result

{{< lui-block title="Before you sign" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Side, vein and device are right" body="Right versus left, basilic versus brachial, French size and number of lumens." >}}
{{< lui-row type="check" title="Every measurement matches what you did" body="External length, arm circumference and tip position. Numbers are where transcription goes wrong most often." >}}
{{< lui-row type="check" title="Every Not stated item is filled in or deliberately left out" >}}
{{< lui-row type="check" title="Nothing was added that you didn't say" >}}
{{< lui-row type="check" title="Any suggested codes have been confirmed by you or your coder" >}}
{{< lui-row type="check" title="You've signed it in your record system" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Say numbers with their units:** "5 French", "28 centimeters".
- **Spell unusual terms once.** If a device name keeps coming out wrong, spell it, then type the correction.
- **Mute while someone else talks.** Click **Mute** in the voice panel, then **Unmute** when you're ready.
- **See what Lumen hears.** Click **Show captions** to see the live transcript while you speak.
- **Prefer to type?** Type `/` and choose **Procedure Note** from the **Skills** list, then type or paste the details.

## Limits and safety

{{< callout type="safety" title="You author the note" >}}
Lumen drafts the note from what it heard. Transcription can mishear sound-alike words and numbers, and Lumen won't know anything you didn't say. Read every line before you sign, and follow your organization's documentation policy. Don't say patient identifiers or anything you're not permitted to share. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Lumen doesn't write to your EHR.** You copy the note into your record and sign it there.
- **Voice is a conversation, not a dictation pad.** What you say is sent as a message when you stop speaking. You correct the note afterward, in the chat.
- **Noisy rooms reduce accuracy.** Move away from equipment if you can.

## FAQ

{{< faq question="Will Lumen read the note aloud?" >}}
In a voice conversation, Lumen reads its replies aloud, and the full note also appears as text in the chat. To stop the reading, start talking or click **End**. The text stays in the chat either way.
{{< /faq >}}
{{< faq question="Can I dictate other kinds of notes?" >}}
Yes. Say the kind of note first, such as "progress note" or "SOAP note", and Lumen uses the matching structure.
{{< /faq >}}
{{< faq question="Why didn't anything happen when I clicked the microphone?" >}}
Your browser or device probably blocked the microphone. Allow microphone access for lumen.intracav.ai in your browser's site settings, then try again.
{{< /faq >}}

## Next steps

{{< related "/chat/dictation/" "/skills-and-specialists/skills/" "/guides/discharge-summary/" "/trust/privacy/" >}}
