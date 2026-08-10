---
title: "Your Data & PHI: What Lumen Stores and Why"
description: "What Lumen keeps — chats, documents, memories — where each lives, who can see it, and the controls you have over all of it."
lead: "A plain-language inventory of what Lumen stores, why it stores it, and exactly where your control lives."
weight: 1
---

The fastest way to trust a system is to know precisely what it holds. Here is Lumen's inventory — what's stored, why, and the control you have over each piece.

## What Lumen stores

Three kinds of things, each with a clear purpose:

- **Your chats** — so you can pick up a conversation where you left off and review past answers. You can delete conversations you no longer need.
- **Your documents** — files you upload so Lumen can read and cite them. They live in your library, organized into [Folders](/knowledge/), and you can remove them at any time.
- **Your memories** — short, durable facts Lumen keeps about how you work (your specialty, your formatting preferences), so you don't repeat yourself every session.

Sensitive fields are encrypted at rest — see [Trust & Security](/trust/) for how.

## Memory is yours to control

Lumen's [memory](/chat/memory/) works like a colleague's working knowledge of you — not a transcript, just the useful facts. Two properties matter:

- **It's per-workspace.** What Lumen remembers about you in your personal workspace is separate from what it remembers in an organization workspace. There is no shared, organization-wide memory.
- **It's user-controllable.** You can ask Lumen to remember something, to forget something, or to list everything it currently holds — in plain language, right in the chat.

## Working with patient scenarios

When you need to reason about a real case, use Lumen's [de-identification tools](/tools/privacy/) first: they strip names, dates, MRNs, and other identifiers, replacing them with consistent pseudonyms so the clinical picture stays readable. It's the same discipline as presenting at case conference — the medicine travels, the identity doesn't.

{{< callout type="warning" >}}
Before pasting any patient text into a chat, de-identify it. Ask Lumen to *"de-identify this note"* and work from the cleaned version — see [Privacy & Safety tools](/tools/privacy/).
{{< /callout >}}

## Share links carry conversation content

When you create a share link, the recipient sees the conversation — that's the point of sharing. So treat a share link the way you'd treat forwarding an email thread: **read what's in it before you send it**, especially if the chat ever touched a clinical scenario. Links are created deliberately; nothing is shared by default.

## Organizations get audit logs

If you work inside an organization workspace, your admins have access to audit logs of AI interactions in that workspace — the same tamper-evident record described in [Trust & Security](/trust/). This is a feature, not a caveat: it's what lets a hospital adopt an AI assistant responsibly.

## Workspaces don't share data

Your personal workspace and each organization workspace are separate rooms, not one room with dividers. Documents, chats, and memories in one workspace are not visible from another. Moving content between them is always an explicit act — an upload, a share — never something that happens on its own.

## Next steps

- [How memory works in chat](/chat/memory/)
- [De-identification tools](/tools/privacy/)
- [Accuracy, citations & clinical judgment](/trust/responsible-ai/)
