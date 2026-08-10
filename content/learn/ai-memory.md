---
title: "How AI Memory Works (and What Lumen Remembers)"
description: "Does AI remember your conversations? Context windows vs persistent memory, what Lumen saves and never saves, and the controls that keep you in charge."
weight: 7
keywords: ["does AI remember my conversations", "AI memory explained", "context window", "AI persistent memory"]
---

Think of the colleague who's worked alongside you for years. She knows you round at 6 a.m., that you want handoffs in bullet points, that you're the vascular access person on the unit. What she *doesn't* carry around is your patients' charts — those live in the record, pulled up fresh each time. That split — knowing *you* without hoarding *the case* — is exactly how memory should work in a clinical AI, and it's how Lumen is built.

"Does the AI remember my conversations?" is really two questions, because there are two very different kinds of remembering. Untangling them tells you precisely what Lumen keeps, what it deliberately lets go, and where the off switch is.

## Two kinds of remembering

The first kind is the **context window** — the working memory of the *current* conversation. Everything in the active chat (your messages, Lumen's answers, attached documents) sits in the context window, which is why you can say "now rewrite that for the patient" and Lumen knows what *that* means. Like your own working memory during a case discussion, it's complete but temporary: it belongs to this conversation.

The second kind is **persistent memory** — a small set of durable facts that carry across conversations. This is the colleague-who-knows-you layer: your role, your setting, your preferences. It's deliberately sparse, the way a good colleague retains the useful constants about you and not a transcript of every hallway exchange.

<div class="compare-grid">
  <div class="compare-card tint-blue" style="border-top-color: var(--smoky-blue);">
    <h3>&#128173; Context window</h3>
    <div class="compare-subtitle">Working memory — this conversation</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> Holds everything in the current chat</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> Includes attached documents</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> Why follow-up questions work</li>
      <li><span class="compare-check" style="color: var(--smoky-blue);">&#10003;</span> Scoped to one conversation</li>
    </ul>
  </div>
  <div class="compare-card tint-accent" style="border-top-color: var(--accent);">
    <h3>&#128218; Persistent memory</h3>
    <div class="compare-subtitle">Durable — across conversations</div>
    <ul class="compare-list">
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> A short list of facts about you</li>
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> Your role, setting, preferences</li>
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> Deliberately conservative</li>
      <li><span class="compare-check" style="color: var(--accent);">&#10003;</span> Fully visible and editable by you</li>
    </ul>
  </div>
</div>

## What Lumen saves

Lumen's persistent memory captures **high-confidence facts you assert about yourself and your practice**. Tell it *"I'm a vascular access nurse in a pediatric hospital"* or *"always give me doses per kilogram"* and that's worth keeping — it makes every future answer land closer to your reality without you re-explaining yourself.

The bar is deliberately high. Lumen isn't transcribing your conversations into a dossier; a curation step reviews each exchange and keeps only clear, durable, first-person facts — the kind you'd want a new colleague to know by week two. Say **"remember that…"** and the fact is saved immediately; otherwise, passing details simply don't make the cut. When something is saved, you'll see a memory-updated indicator in the chat, so nothing is written behind your back.

## What Lumen deliberately does not save

Just as important is the negative space:

- **Not your patients.** Clinical details from your questions — the 68-year-old with the GI bleed, the lab values you pasted — stay in that conversation's context window. They are not promoted into persistent memory.
- **Not speculation.** Lumen doesn't save its own inferences about you, only things you actually stated.
- **Not the transcript.** Your chat history is yours to revisit in the chat list, but history is not memory — old conversations don't silently leak into new ones.

The colleague analogy holds: she remembers that you prefer bullet points; she doesn't recite last Tuesday's census from memory. The chart stays in the chart.

## Separate clinics, separate memories

If you belong to an organization in Lumen, memory is **partitioned by workspace**. What Lumen learns about you in your Personal workspace stays there; each organization workspace keeps its own separate list — like holding privileges at two hospitals and keeping your context straight at each. And memories are always *yours alone*: they are never shared with colleagues or pooled across your organization.

## You hold the controls

Memory in Lumen is inspectable and reversible, not a black box:

- **Ask in plain language.** *"Remember that I work nights"* saves a fact. *"Forget what I told you about my schedule"* removes it. *"What do you remember about me?"* lists everything.
- **Review the list.** Your saved memories appear in Settings as a plain, readable list — no hidden entries — where you can delete any item.
- **Turn it off.** Prefer every conversation to start cold? Disable memory entirely and Lumen keeps nothing between chats.

{{< callout type="success" >}}
**See it in Lumen:** The [Memory](/chat/memory/) page shows saving, listing, and forgetting in action — and [Privacy](/trust/privacy/) covers how memory fits Lumen's broader safeguards, including encryption and audit logging.
{{< /callout >}}

## Frequently asked questions

{{< faq question="Does Lumen remember what I asked yesterday?" >}}
Not automatically. Yesterday's conversation lives in your chat history — reopen it and its full context is right there — but a *new* chat starts fresh, carrying over only your short list of persistent memories (your role, preferences, and other facts you've asserted). If something from yesterday should follow you everywhere, tell Lumen to remember it explicitly.
{{< /faq >}}

{{< faq question="Will patient details I paste into a chat end up in Lumen's memory?" >}}
No. Persistent memory only captures high-confidence facts about *you and your practice* — clinical details about patients stay in that conversation and are not promoted into memory. As good hygiene, de-identify text before pasting it anywhere; Lumen's [de-identification tool](/tools/privacy/) can strip names and record numbers for you.
{{< /faq >}}

{{< faq question="Can my organization's admins see my memories?" >}}
No. Memories are private to your account. Workspace partitioning means an organization workspace keeps its own memory list separate from your Personal one — but in every workspace, the list belongs to you alone and is never shared with or visible to anyone else.
{{< /faq >}}

---

Now that you know what Lumen remembers, make what you *say* to it count — [the prompting guide for clinicians](/learn/prompting-for-clinicians/) is next.
