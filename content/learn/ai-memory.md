---
title: "How AI memory works, and what Lumen keeps"
navTitle: "AI memory"
description: "Does AI remember your conversations? The difference between a chat's working memory and saved memory, what Lumen keeps, and the controls you have."
lead: "A good colleague remembers how you like to work, not your patients' charts. That's the line Lumen's memory is built to hold."
weight: 7
icon: history
keywords: ["does AI remember my conversations", "AI memory explained", "context window", "AI persistent memory"]
glance:
  what: "AI memory is what an assistant carries from one conversation to the next. In Lumen, that's a short list of facts about you, optional team facts, and notes you choose to add."
  who: "Anyone using Lumen, and privacy or compliance leads who want to know what's stored."
  why: "So answers fit your role and preferences without repeating yourself, while you stay in control of what's kept."
  needs: "A Lumen account. Memory is managed in Settings › Memory."
  result: "You'll know what Lumen remembers, what it's built not to keep, and how to change or clear it."
---

Think of the colleague who's worked beside you for years. She knows you round at 6 a.m., that you want handoffs in bullet points, that you're the vascular access lead on the unit. She doesn't carry your patients' charts around in her head; those live in the record. Knowing *you* without hoarding *the case* is how memory should work in a clinical AI, and it's how Lumen's memory is designed.

## Two kinds of remembering

"Does AI remember my conversations?" is really two questions.

- **Working memory, inside one chat.** Everything in the current conversation (your messages, Lumen's answers, attached files) is in view while you talk. This is called the *context window*. It's why "now rewrite that for a patient" works. It belongs to that one conversation.
- **Saved memory, across chats.** A short list of lasting facts that carries into new conversations: your role, your setting, how you like answers. It's deliberately small.

Your chat history is a third thing. Old conversations stay in your chat list for you to reopen, but they don't leak into new ones.

## How it works

{{< flow >}}
{{< flow-node kicker="You chat" title="Mention a lasting fact" icon="message" tint="blue" >}}"I'm a vascular access nurse; give doses per kg."{{< /flow-node >}}
{{< flow-node kicker="Lumen saves" title="A short fact about you" icon="brain" tint="plum" >}}You see a **Memory updated** chip.{{< /flow-node >}}
{{< flow-node kicker="Later chats" title="Recall what's relevant" icon="search" tint="accent" >}}Only the facts that fit the question.{{< /flow-node >}}
{{< flow-node kicker="You control" title="Review, edit or clear" icon="sliders" tint="green" >}}In Settings › Memory.{{< /flow-node >}}
{{< /flow >}}

## How Lumen does it

Lumen's memory lives in {{< ui-path "Settings" "Memory" >}} and has three parts:

- **About you.** Facts about you and how you work, "recalled in every chat in this workspace". Lumen adds facts as you chat and when you say "remember that…". You can also use **Add memory**, edit any fact, or delete it. When Lumen isn't sure it learned something correctly, it asks under **Did Lumen get these right?**, where you keep it or mark it **Not right**.
- **Team memory.** In an organization account (called a *team* in Lumen), admins can add facts that every member's chats know, such as "our formulary uses enoxaparin for VTE prophylaxis". Members can **Suggest to team**; an admin reviews the suggestion first.
- **Notes.** Longer material you choose to drop in, such as your own reference notes. Lumen can find these and cite them as sources. See [Second brain](/knowledge/second-brain/).

When Lumen saves or changes a fact during a chat, a **Memory updated** chip appears in the conversation, so nothing is saved behind your back.

Memory is kept **per workspace**. Your personal workspace and each team workspace have separate lists, the way you'd keep your context straight at two hospitals where you hold privileges.

{{< chat-demo title="Setting a preference" caption="Illustration. Saved facts are about you, never about patients." >}}
{{< user >}}Remember that I'm a pediatric ICU nurse practitioner and I want doses in mg/kg.{{< /user >}}
{{< lumen memory="true" >}}
Saved. I'll give pediatric ICU context and weight-based doses in mg/kg from now on. You can change or remove this in Settings › Memory.
{{< /lumen >}}
{{< /chat-demo >}}

## What Lumen is built not to keep

- **Patients.** Lumen is instructed not to save information about a patient or a clinical case. Details you paste into a question stay in that conversation.
- **Guesses.** It saves things you stated, not its own inferences about you, and it asks when it's unsure.
- **Your transcript.** History isn't memory. A new chat starts fresh apart from your saved facts.

Every write to memory is recorded in Lumen's tamper-evident audit log.

## What this means for you

- **Say it once.** Tell Lumen your role and preferences, and later answers fit you better.
- **Check the list now and then.** Open {{< ui-path "Settings" "Memory" >}} to see exactly what's kept. There are no hidden entries.
- **Turn it off if you prefer.** With memory off, "chats recall nothing and Lumen learns nothing new". What was already saved stays in the list until you delete it.
- **Clear a workspace.** **Clear all** permanently deletes every fact in the current workspace. Other workspaces, your team's facts and your notes are not affected.

## Limits and safety

- **Filtering patient details is not perfect.** Lumen is built to skip patient information, but it's an AI judgment. Review your list, and don't paste identified patient information you're not permitted to share.
- **Team memory is shared.** Anything in team memory shapes every member's answers. Treat it like a shared protocol and keep it accurate.
- **Memory can be wrong or stale.** If you change roles or units, update or delete the old fact.

{{< callout type="safety" title="Memory shapes answers, so keep it accurate" >}}
A wrong saved fact, such as an outdated unit or role, can steer later answers. Review {{< ui-path "Settings" "Memory" >}} after changes in your work, and always check the sources in an answer before acting.
{{< /callout >}}

## FAQ

{{< faq question="Does Lumen remember what I asked yesterday?" >}}
Yesterday's conversation is in your chat history; reopen it and its context is all there. A new chat starts fresh, carrying only your saved facts.
{{< /faq >}}
{{< faq question="Will patient details I paste end up in memory?" >}}
Lumen is instructed not to save information about patients or clinical cases, and asks when it's unsure about a fact. Check {{< ui-path "Settings" "Memory" >}} if you want to confirm.
{{< /faq >}}
{{< faq question="How do I make Lumen forget something?" >}}
Say "forget that…" in a chat, or open {{< ui-path "Settings" "Memory" >}} and delete the fact. Deleting can't be undone.
{{< /faq >}}
{{< faq question="Who can see team memory?" >}}
Team memory is meant to be shared: every member's chats in that team use it. Team admins manage it. Your personal facts under **About you** are separate.
{{< /faq >}}

## Next steps

{{< related "/chat/memory/" "/knowledge/second-brain/" "/trust/privacy/" "/learn/prompting-for-clinicians/" >}}
