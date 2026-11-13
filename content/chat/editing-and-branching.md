---
title: "Edit a question, regenerate or stop an answer"
navTitle: "Edit, regenerate, stop"
description: "Fix a question you've already sent, get a new version of an answer, switch between versions, and stop an answer that's going the wrong way."
lead: "Sent the wrong dose? Edit the question and Lumen answers again. The earlier version is kept, so you can switch back. You can also regenerate an answer or stop one partway through."
weight: 9
icon: git-branch
glance:
  what: "The ways to change course in a chat: edit a sent message, regenerate an answer, switch between versions, and stop an answer."
  who: "Everyone who uses Lumen chat, on any plan."
  why: "To correct a mistake or try a different angle without starting over, and without losing what was already said."
  needs: "A Lumen account. About 3 minutes to read."
  result: "You'll be able to correct a question, compare answers, and stop a reply you don't need."
---

You asked about amiodarone for stable wide-complex tachycardia, then noticed you'd typed the cardiac arrest dose. Don't start a new chat. Edit the question and send it again. Lumen writes a fresh answer, and keeps the original question and answer as an earlier version you can switch back to.

## Before you start

Have a chat with at least one question and answer. Everything here works on every plan.

## How to edit a question you've sent

{{< steps >}}
{{< step title="Find your message" >}}
Hover over your message on a computer, or tap it on a phone, to show its actions.
{{< /step >}}
{{< step title="Click Edit" >}}
Click **Edit**. Your message's text moves into the message box.
{{< /step >}}
{{< step title="Change it and send" >}}
Correct the text and press {{< kbd "Enter" >}}. Lumen answers the corrected question.
{{< /step >}}
{{< step title="Switch between versions" >}}
The original is kept. Use the **< 1/2 >** arrows (**Previous version**, **Next version**) to switch between the original and the edited conversation.
{{< /step >}}
{{< /steps >}}

## How to regenerate an answer

Click **Regenerate** under any answer. Lumen writes a new version of it. Use the **< 1/2 >** arrows to compare versions. The version you're viewing is the one Lumen builds on when you send your next message.

## How to stop an answer

While Lumen is writing, the send button becomes **Stop generating**. Click it. If Lumen asks **Stop generating?**, click **Stop**. Whatever was written stays in the chat, marked **Stopped**, and you can send your next message straight away.

## What you'll see

{{< chat-demo title="After editing the question" caption="Illustration. The original question and answer are kept as version 1." >}}
{{< user >}}What's the initial IV dose of amiodarone for **stable** wide-complex tachycardia in an adult?{{< /user >}}
{{< lumen sources="1" >}}
For stable wide-complex tachycardia, the initial dose is **amiodarone 150 mg IV over 10 minutes**, repeated as needed if the arrhythmia comes back, followed by a maintenance infusion of 1 mg/min for the first 6 hours {{< cite 1 >}}. The 300 mg IV push is the dose for pulseless VT or VF during cardiac arrest {{< cite 1 >}}.
{{< /lumen >}}
{{< /chat-demo >}}

## When a lookup fails

Sometimes one of Lumen's lookups fails, for example because a service is busy. The tool chip shows why, such as **Rate limited — try again shortly** or **Timed out after 30s**, with these options:

- **Try again** reruns the lookup.
- **Edit args & retry** lets you change what was looked up, then rerun it.
- **Copy error** copies the details, which helps if you report a problem.

Lumen often works around a failed lookup with other sources. It should tell you when it did.

## Tips

- **Edit, don't pile on.** If the first question was wrong, editing it keeps the chat clean. A correction sent as a new message leaves the wrong answer in the middle of the thread.
- **Stop early.** If the first sentence shows Lumen has misunderstood, stop it, edit your question, and send again.
- **Regenerate for a different angle,** for example when an answer is correct but too long.

## Limits and safety

- Editing changes the conversation from that message onwards. Later messages belong to the version you edited from, and appear only when you switch back to it.
- An answer you stopped is incomplete. Don't rely on a stopped answer for anything clinical.
- Regenerating can give a different answer. If two versions disagree on a clinical point, check the sources rather than picking the one you prefer.

{{< callout type="safety" title="Different versions, same check" >}}
Whichever version you use, open its cited sources before you act on it.
{{< /callout >}}

## FAQ

{{< faq question="Does editing delete the original answer?" >}}
No. The original question and answer are kept as an earlier version. Use the **< 1/2 >** arrows to see them.
{{< /faq >}}
{{< faq question="Can I copy a chat to continue it in a different direction?" >}}
You can't duplicate your own chat. Edit an earlier message to branch from that point instead. If someone shares a chat with you, you can continue it as your own copy. See [Share a chat](/chat/sharing/).
{{< /faq >}}
{{< faq question="If I stop an answer, does Lumen keep working in the background?" >}}
No. Stopping ends that answer.
{{< /faq >}}

## Next steps

{{< related "/chat/responses/" "/chat/sharing/" "/chat/sending-messages/" >}}
