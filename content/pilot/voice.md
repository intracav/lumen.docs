---
title: "Talk to Lumen Pilot"
navTitle: "Voice and Young Lumen"
description: "Talk to Lumen Pilot instead of typing, and approve its plans by voice. Young Lumen, an always-listening mode, is experimental."
lead: "Speak to Pilot instead of typing, and say \"run it\" or \"cancel\" when it shows a plan. Young Lumen, an always-listening mode, is an experiment."
weight: 4
icon: mic
status: experimental
glance:
  what: "You can talk to Lumen Pilot, the assistant for the Lumen app, instead of typing. Young Lumen is an experimental mode where Pilot listens all the time."
  who: "Anyone who prefers speaking, or whose hands are busy while they use Lumen. Young Lumen is for people willing to try an experiment on a computer."
  why: "To ask Pilot for help and approve its plans without stopping to type."
  needs: "Lumen open in a browser or the desktop app, and permission for Lumen to use your microphone. Young Lumen needs a computer and may not be on for your account."
  result: "Pilot answering and acting on what you say, with the same approvals as typing."
---

Typing isn't always convenient. You can talk to **Lumen Pilot**, the assistant that shows you around the Lumen app and can do steps for you after you approve its plan. When Pilot shows a plan, you can approve or cancel it by voice.

There is also **Young Lumen**, an experimental mode where Pilot listens all the time and acts on what it hears. Read the warning below before you try it.

{{< callout type="warning" title="Young Lumen is experimental" >}}
Young Lumen is an early experiment, not a finished feature. It keeps your microphone open the whole time it's on. It may misunderstand you, act on something you didn't mean as an instruction, or do nothing when you expected it to. It may be off for your account, and it may change or be removed. Don't use it for anything you can't check yourself afterward, and turn it off when you're done.
{{< /callout >}}

## Before you start

- **Allow the microphone.** Your browser or computer asks for permission the first time. If you refuse, voice won't work until you allow it in your browser or system settings.
- **Pick a quiet place** if you can. Background talk can be picked up.
- **For Young Lumen,** use Lumen on a computer: in a desktop web browser or the macOS app. It's off by default on phones and tablets, and in the Windows and Linux apps.

## How to talk to Pilot

{{< steps >}}
{{< step title="Open Lumen Pilot" >}}Click the Pilot dot on the screen, or press {{< kbd "⌘" "/" >}} (Ctrl + / on Windows) or {{< kbd "F1" >}}.{{< /step >}}
{{< step title="Start talking" >}}Select the microphone button, **Talk to Lumen**. When it says **Speak when you’re ready**, ask your question, for example "Where do I find my certifications?"{{< /step >}}
{{< step title="Approve a plan by voice" >}}If Pilot is at the **Do it** level and shows a plan, the hint reads **Run or Cancel the plan — or just say "run it" or "cancel"**. Say "run it" to approve, or "cancel" to stop. You can still tap the buttons.{{< /step >}}
{{< step title="Stop talking" >}}Select the button again (**End voice**) to end the voice conversation.{{< /step >}}
{{< /steps >}}

In an ordinary chat, the **Voice conversation** button in the message box works the same way: Lumen listens, then answers. Spoken requests about the app, such as "open my workflows", go to Pilot first.

## How to try Young Lumen

{{< steps >}}
{{< step title="Open Lumen Pilot on a computer" >}}Press {{< kbd "⌘" "/" >}} (Ctrl + / on Windows) or {{< kbd "F1" >}}.{{< /step >}}
{{< step title="Go live" >}}In the **Lumen Pilot** panel, select **Go live (Young Lumen, always listening)**. If you see **Young Lumen is not on for this account or device.**, it isn't available to you.{{< /step >}}
{{< step title="Talk normally" >}}A small bar on every page shows that Young Lumen is listening. It ignores ordinary conversation and acts only on what sounds like an instruction, such as naming a screen to open or saying "look up" something. What it finds appears in small windows over the page, which close when the conversation moves on.{{< /step >}}
{{< step title="Turn it off" >}}Select **Stop Young Lumen**.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Lumen Pilot" caption="Illustration of approving a Pilot plan by voice, with a fictional request." >}}
{{< user >}}Set up a knowledge check on CLABSI prevention for the Harbor Valley ICU.{{< /user >}}
{{< lumen >}}
Here's my plan. Nothing runs until you approve it.

{{< lui-block title="Lumen plan" sub="Review before Lumen runs this" >}}
{{< lui-rows >}}
{{< lui-row title="Open Live" >}}
{{< lui-row title="Start a new session" body="CLABSI prevention, ICU" >}}
{{< lui-row title="Add a knowledge check" >}}
{{< /lui-rows >}}
{{< lui-actions "Run" "Cancel" >}}
{{< /lui-block >}}

Run or Cancel the plan — or just say "run it" or "cancel".
{{< /lumen >}}
{{< /chat-demo >}}

## Tips

- **Say "run it" only when you've read the plan.** Voice approval is the same as pressing **Run**.
- **Use captions.** In a voice conversation you can choose **Show captions** to see what Lumen heard.
- **Mute when you need to.** Select **Mute**; the hint reads **Muted — unmute to talk**.

## Limits and safety

- **Approvals work the same by voice.** Pilot still shows its plan first, and controls it never presses, such as delete, publish or sign, stay blocked.
- **Young Lumen always listens.** While it's on, your microphone stays open. It never speaks back; it shows what it does on screen. Turn it off when you don't need it, and don't leave it on near private conversations.
- **Young Lumen keeps its own conversations out of History.** Background tasks you ask it to start are ordinary chats and do appear there.
- **Pilot works in the open app.** Voice doesn't make Pilot a background worker. If you close the app, it stops.
- **Speech recognition can be wrong.** Check what Pilot heard before you approve a plan.
- Don't say information you aren't permitted to share. See [Privacy and data](/trust/privacy/).

## FAQ

{{< faq question="Does Pilot talk back?" >}}
In a voice conversation, Lumen answers you. Young Lumen is different: it never speaks, and shows what it found on screen instead.
{{< /faq >}}
{{< faq question="Can I use Young Lumen on my phone?" >}}
Not by default. It's off on phones and tablets. To control your computer from your phone, pair it with [Satellite](/pilot/satellite/).
{{< /faq >}}
{{< faq question="Is voice the same as dictation?" >}}
No. Dictation types your words into the message box for you to send. A voice conversation with Pilot acts on what you say, with the same approvals as typing. See [Dictation](/chat/dictation/).
{{< /faq >}}

## Next steps

{{< related "/pilot/show-me-and-do-it/" "/pilot/satellite/" "/chat/dictation/" "/trust/privacy/" >}}
