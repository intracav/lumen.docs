---
title: "Edit, Branch, Fork & Stop"
description: "Fix a question after you've sent it, regenerate the answer, fork a conversation into a fresh thread, or stop a response mid-stream."
weight: 7
---

Conversations with Lumen aren't set in stone. Typed the wrong dose in your question? Edit the message and the answer regenerates. Want to explore a "what if" without losing the thread you're on? Fork the chat. Answer going in the wrong direction? Stop it mid-sentence. This page covers all the ways to steer a conversation after you've hit send.

## Editing a sent message

Hover over (or long-press) any of your own messages and choose **Edit**. Fix the text, send it again, and Lumen generates a fresh answer to the corrected question.

Say you asked about amiodarone for stable wide-complex tachycardia but typed the cardiac-arrest dose by mistake. Edit the message, correct the dose, and the answer regenerates against what you actually meant:

{{< chat-demo title="After editing the question" >}}
{{< user >}}What's the initial IV dose of amiodarone for *stable* wide-complex tachycardia?{{< /user >}}
{{< lumen >}}For **stable** wide-complex tachycardia, the initial dose is **amiodarone 150 mg IV over 10 minutes**, followed by a 1 mg/min infusion. The 300 mg rapid push you may be thinking of is reserved for pulseless VT/VF in cardiac arrest.{{< /lumen >}}
{{< /chat-demo >}}

### Editing creates a branch — nothing is deleted

When you edit a message, Lumen doesn't overwrite history. The edited message starts a **new branch** of the conversation from that point, and the original question and its answer are preserved. Think of it like a chart amendment rather than an erasure: the record of what was asked and answered stays intact, and the conversation simply continues down the corrected path.

{{< callout type="info" >}}
**Why branching matters clinically.** If an earlier answer was based on a wrong detail, you don't want it silently replaced — you want a clean, corrected thread *and* an intact record. Branching gives you both.
{{< /callout >}}

## Forking a whole chat

Sometimes you don't want to change a message — you want to take an entire conversation in a second direction. **Fork** copies the whole chat into a brand-new thread that you own, and the original stays exactly as it was.

Forking is useful when:

- A long working conversation has reached a good state and you want to explore an alternative plan without disturbing it
- Someone shared a chat with you and you want to continue it yourself (see [Share a Chat](/chat/sharing/))
- You want a clean starting point that already contains all the context you've built up

The fork is a personal copy — it belongs to you alone, even if the original chat was shared within your organization.

## Stopping a response mid-stream

While Lumen is streaming an answer, the send button becomes a **Stop** button (a square icon). Tap it and generation halts immediately — whatever text has already appeared stays in the chat, and you can send your next message right away.

Stop is handy when the first sentence tells you the answer is heading somewhere you didn't intend: stop it, edit your question, and regenerate rather than waiting out a long answer you won't use.

## When a tool call fails

Lumen often calls specialized tools mid-answer — a drug-interaction lookup, a calculator, a literature search. Occasionally one of these fails: a source is temporarily unreachable, or a tool hits its rate limit.

When that happens, the tool block in the response shows the failure and Lumen tells you whether trying again is likely to help. For transient problems (like a rate limit), simply ask again — resending the same question, or editing your last message, triggers a fresh attempt. Lumen will also often work around a failed tool on its own by drawing on other sources it can still reach.

---

**Next steps:**

- [Share a Chat](/chat/sharing/) — send a read-only link, and let colleagues fork it
- [Reading Answers](/chat/responses/) — what every part of a response means
- [Typing & Sending](/chat/sending-messages/) — get better answers from better prompts
