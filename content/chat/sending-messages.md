---
title: "Write and send a message"
navTitle: "Writing and sending"
description: "Use Lumen's message box: send and stop, choose sources, call a specialist with @, use a skill with /, and ask questions that get better answers."
lead: "The message box at the bottom of every chat does more than send text. Here's every control in it, and how to ask questions that get useful answers."
weight: 1
icon: send
glance:
  what: "The message box (composer) where you type to Lumen, and the buttons around it for files, sources, skills, specialists and chat settings."
  who: "Everyone who uses Lumen chat, on any plan."
  why: "Knowing the controls lets you point Lumen at the right sources and get a better answer the first time."
  needs: "A Lumen account. About 4 minutes to read."
  result: "You'll know how to send, stop, pick sources, call a specialist or skill, and phrase a strong question."
---

You type to Lumen in the message box at the bottom of the chat. It reads **Ask Lumen** until you start typing. Around it are a few buttons that control what Lumen searches, which expert approach it takes, and what format it produces. You can ignore them all and just ask. When you want more control, they're one click away.

## Before you start

Open a chat: click **New Chat** in the sidebar at [lumen.intracav.ai](https://lumen.intracav.ai). Everything on this page works on every plan, though some specialists and Knowledge Packs need a higher plan or a team.

## How to send a message

{{< steps >}}
{{< step title="Type your question" >}}
Click the message box and type. On a computer, press {{< kbd "Shift" "Enter" >}} for a new line. On a phone, **Enter** adds a new line.
{{< /step >}}
{{< step title="Send it" >}}
Press {{< kbd "Enter" >}} or click the send button (**Send message (Enter)**). On a phone, tap the send button.
{{< /step >}}
{{< step title="Stop it if you need to" >}}
While Lumen writes, the send button becomes **Stop generating**. Click it to stop. If Lumen asks **Stop generating?**, click **Stop**, or **Keep going** to let it finish. What's already written stays in the chat, marked **Stopped**.
{{< /step >}}
{{< /steps >}}

## How to choose where Lumen looks

{{< steps >}}
{{< step title="Open the sources menu" >}}
Click the **Sources** chip in the row under the message box. It shows how many sources are on, for example **Sources · 2**.
{{< /step >}}
{{< step title="Turn sources on or off" >}}
Choose what Lumen draws from:
- **Clinical knowledge base**: Intracav-curated clinical literature and policies.
- **My Documents**: files you've uploaded to Lumen.
- **Knowledge Packs**: curated collections of documents that you or your team have turned on. Click **Browse Knowledge Packs** to find more.
{{< /step >}}
{{< step title="Turn web search on or off" >}}
Click **Chat settings** under the message box, then go to **Sources & retrieval**. **Allow web search** is on by default. When it's on, web sources are cited with their address.
{{< /step >}}
{{< /steps >}}

## How to call a specialist or use a skill

- Type `@` (or click **Call a specialist (@)**) to open **Specialists**. A *specialist* is a persona that takes on multi-step work, such as **Medication Review** or **Prior Authorization**. Pick one, and the chat shows **Working with** and the specialist's name. Click the × next to it (**Back to normal chat**) to hand back.
- Type `/` (or click **Use a skill (/)**) to open **Suggested skills**. A *skill* is a set procedure for one kind of output, such as a **SOAP Note** or a **Discharge Summary**. Keep typing to filter the list.

You don't have to use either. If you write "draft a discharge summary," Lumen picks the matching skill itself.

## What you'll see

{{< screenshot src="composer-specialists" alt="The Lumen message box with the specialists menu open after typing @" caption="Typing @ opens the specialists menu." url="lumen.intracav.ai/chat" >}}
{{< composer text="@" menu="specialists" items="Medication Review|Checks a medication list for problems;Prior Authorization|Drafts payer letters and packets;Clinical Educator|Builds teaching material with sourced questions" >}}
{{< /screenshot >}}

| Control | What it does |
|---|---|
| Paperclip (**Attach document**) | Attach a file from **Your documents** or upload a new one. See [Attach files](/chat/attachments/). |
| **Sources · N** | Choose the knowledge Lumen searches. |
| **Use a skill (/)** | Pick a skill. |
| **Call a specialist (@)** | Bring a specialist into the chat. |
| **Help and capabilities** | See what Lumen can do from here. |
| **Chat settings** | Web search, source options and the model your plan uses. |
| Microphone (**Voice conversation**) | Talk to Lumen instead of typing. See [Talk to Lumen by voice](/chat/dictation/). |

## Tips for better questions

| Instead of | Try |
|---|---|
| "drug interactions" | "Any interactions between metformin 1,000 mg twice daily and lisinopril 10 mg in a 65-year-old with CKD stage 3?" |
| "sepsis" | "What's in the 1-hour sepsis bundle? Make it a checklist." |
| "write a letter" | "Draft a referral letter to cardiology for a 42-year-old with a new murmur and exertional breathlessness." |

- **Give context:** age, relevant conditions, medicines and doses, setting.
- **Say the format:** a table, a checklist, three bullets, a one-page handout.
- **Say the audience:** "for a new graduate nurse," or "at a 6th-grade reading level."
- **Drafts are saved.** If you leave a chat mid-message, your text is waiting when you come back on that device.

## Limits and safety

- Lumen sees only what's in the chat, the sources you've turned on, and files you've attached.
- Turning a source off means Lumen won't search it for that chat. If an answer is missing something you expected, check the **Sources** menu.
- Don't type information you're not permitted to share. Leave out patient identifiers.

## FAQ

{{< faq question="Is web search on by default?" >}}
Yes. You can turn it off in **Chat settings** > **Sources & retrieval** > **Allow web search**.
{{< /faq >}}
{{< faq question="Can I send a message while Lumen is still answering?" >}}
Stop the current answer first with **Stop generating**, then send your next message.
{{< /faq >}}
{{< faq question="What's the difference between @ and /?" >}}
`@` brings in a specialist, which shapes how Lumen works through multi-step tasks. `/` picks a skill, which sets the format of one output. You can use both in the same message.
{{< /faq >}}

## Next steps

{{< related "/chat/responses/" "/chat/attachments/" "/skills-and-specialists/" "/chat/sources/" >}}
