---
title: "The Lumen Browser Extension (Beta)"
description: "Lumen in a side panel next to your work: it reads the page when you ask, and acts on pages only with your explicit, action-by-action confirmation."
weight: 26
audience: clinician
tier: pro
status: beta
time: "~10 minutes"
keywords: ["AI browser extension clinical", "AI side panel assistant", "clinical AI copilot browser"]
---

{{< status-badge "beta" >}}

Most of your screen time isn't in a chat window — it's in the systems where the work lives. The Lumen browser extension puts Lumen in a **side panel next to whatever you're working in**, where it can read the page you're on when you ask it to, and — with your explicit confirmation, action by action — interact with pages while you watch. In this guide you'll open the panel, have Lumen read what's in front of you, approve its first actions, and use dictation and Specialists without leaving the page.

## What you'll make

A working side-by-side setup: Lumen reading the page you're looking at on request, taking small, confirmed actions under your eyes, and answering questions with your current context already in view — no copy-paste shuttle between windows.

## Before you start

- **A Pro plan or above** {{< tier-badge "pro" >}} — see [Plans](/plans/).
- **Beta access.** The extension is in beta and isn't in the Chrome Web Store yet — access is through the early-access program. If you're interested, ask your Lumen contact to add you; you'll receive the extension and install steps directly.

{{< callout type="warning" >}}
**PHI moves when you ask it to.** The extension reads a page only when you ask — but when you do, what's on that page enters your conversation, exactly as if you'd pasted it. If the page in front of you shows patient information, the same rules apply as for anything you type: bring in what the question needs, and see [privacy and de-identification](/tools/privacy/).
{{< /callout >}}

## The safety design, up front

This is the part to understand before the first click, because the whole extension is built around one line: **nothing that changes a page happens without your confirmation.**

The extension gives Lumen twelve browser abilities, split into two classes:

- **Read-only** — take a screenshot, read the page, find something on it, scroll, wait for content to load, hover to reveal a tooltip. These observe; they change nothing.
- **Confirm-gated** — click, type, choose from a menu, press a key, navigate, drag. Every one of these is previewed to you with a plain-language description of exactly what it's about to do, and runs only after you approve it. There's no batch approval — each action is confirmed on its own, and you watch it happen. Decline one, and Lumen stops and asks how you want to proceed rather than trying again.

Two more rails worth knowing. Text on a web page is treated as **data, never as instructions** — a page can't smuggle commands to Lumen; only your messages direct it. And Lumen is designed never to sign, attest, or finalize anything — the steps that carry your name belong to you alone.

## The steps

<div class="steps-container">

{{< step num="1" title="Install through the early-access program and open the panel" >}}
Follow the install steps that came with your beta access, then open the Lumen side panel from the extension icon in your browser toolbar.

**You should see:** Lumen docked beside the page you were already on — same account, same chats, same [Skills and Specialists](/skills-and-specialists/) as the full app, in a panel that stays put while you work.
{{< /step >}}

{{< step num="2" title="Ask about the page in front of you" >}}
With any work page open — a guideline, a formulary page, a supplier portal — ask about it directly:

```text
What am I looking at? Summarize this page and pull out
anything about dosing adjustments.
```

**You should see:** Lumen read the page and answer from what's actually on it — no URL pasting, no copy-paste. Say "this page," "here," "what I'm looking at," and it knows you mean the tab in front of you. For visual content — a chart, a figure — it can take a screenshot and literally look.
{{< /step >}}

{{< step num="3" title="Let it act — and approve each step" >}}
Now ask for something that requires touching the page:

```text
On this supply catalog page, search for 5 Fr dual-lumen PICC kits
and open the first result.
```

**You should see:** a confirmation prompt before anything happens — "type *5 Fr dual-lumen PICC kit* into the search field," then, separately, "click the first result." Each prompt describes the action in plain language; you approve or decline each one, and the page responds where you can see it. It should feel like supervising, because it is.
{{< /step >}}

{{< step num="4" title="Decline something, just to feel the brakes" >}}
On any confirmation prompt, choose decline.

**You should see:** Lumen stop — no retry, no workaround — and ask how you'd like to proceed. Worth doing once deliberately: knowing exactly what the brakes feel like is what makes the accelerator comfortable.
{{< /step >}}

{{< step num="5" title="Use dictation and Specialists in the panel" >}}
The panel is a full Lumen chat, so the composer works the way it does everywhere: tap the microphone to [dictate](/chat/dictation/) instead of typing, and type `@` to bring in a [Specialist](/skills-and-specialists/specialists/) for the deep version of a task:

```text
@Document Analysis — compare what this page recommends
against the protocol PDF I uploaded last week.
```

**You should see:** the same capabilities you have in the main app, applied with your current page as context.
{{< /step >}}

</div>

## Troubleshooting

- **Lumen says it can't read the tab.** If the tab is a file — a PDF, Word, or Excel document in the browser's viewer — there's no page text to read. The extension attaches the file to your conversation instead, and Lumen reads it as a document, page by page, citing page numbers.
- **An action failed after the page changed.** Lumen's picture of a page goes stale when the page updates; it takes a fresh look before acting again. If something stalls, just restate what you want.
- **An action was blocked without your input.** Beyond your confirmations there's a safety policy that can refuse actions outright. Blocked means blocked — Lumen will tell you and ask how to proceed.

## Next steps

- [How AI Tool Use Works](/learn/tool-use/) — what's actually happening when Lumen reads and acts.
- [Connect Lumen to Your EHR](/guides/connect-your-ehr/) — the governed way to bring patient context in.
- [Dictate a Note Hands-Free](/guides/dictate-a-note/) — the dictation workflow, panel or full app.
