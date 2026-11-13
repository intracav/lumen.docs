---
title: "Memory and notes: what Lumen remembers"
navTitle: "Memory and notes"
description: "Lumen remembers facts about you and your team and can answer from your notes vault, citing a note when it uses one. You stay in control."
lead: "Lumen recalls what you've told it and the notes you keep, and shows you when it does."
weight: 5
icon: brain
glance:
  what: "Memory is what Lumen remembers about you and your team, plus your notes vault: notes you write or import (Obsidian-compatible) that answers can cite."
  who: "Any Lumen user who wants answers that fit their role and work, and anyone who keeps their own clinical or study notes."
  why: "So you don't repeat your role, unit and preferences in every chat, and so your own notes can inform answers, with a citation showing which note was used."
  needs: "A Lumen account. Team memory needs a team (Lumen's word for an organization). About 5 minutes to review."
  result: "Memory and notes set up the way you want, with full control to review, edit or switch them off."
---

You've told Lumen you're a vascular access nurse at a community hospital and you prefer short answers. You shouldn't have to say it again in every chat. Lumen's **memory** remembers facts like these. Your **notes**, a personal vault of notes you write or import from Obsidian, can also inform answers. When Lumen uses a note, it cites it like any other source.

## Before you start

- **A Lumen account.** Memory and notes are in every account.
- **For team memory:** a team account. Admins add team facts; members can suggest them.
- **To import notes:** your Obsidian vault as a .zip file.

## How memory works

Each time you chat, Lumen recalls what's relevant:

- **About you:** facts you've stated, such as your role, unit and preferences.
- **Team memory:** shared facts your team's admins have added, such as "Our ICU uses chlorhexidine-impregnated dressings."
- **Your notes:** notes from vaults you can read.

When it recalls something, the reply shows a line such as "Remembered 3 facts · 2 notes". Click it to see what was used. A note used in an answer appears as a source labelled **Your notes**, and opens the note.

Lumen is careful about what it saves. It only keeps facts you stated clearly, it never stores patient or case information, and anything it's unsure about goes to you for review first. Facts you haven't confirmed are never recalled.

## How to review what Lumen remembers

{{< steps >}}
{{< step title="Open Memory" >}}Go to {{< ui-path "Settings" "Privacy & data" "Memory" >}}. You'll see the tabs **About you**, **Notes**, **Connections**, **Activity** and **Settings**.{{< /step >}}
{{< step title="Review new facts" >}}Under **Did Lumen get these right?**, choose **Keep** or **Not right** for each fact Lumen proposed.{{< /step >}}
{{< step title="Edit or delete" >}}Choose **Edit memory** to correct a fact, or delete it. Click **Add memory** to add one yourself.{{< /step >}}
{{< step title="Turn it off if you prefer" >}}Switch **Memory is on** to off. Chats then recall nothing and Lumen learns nothing new. What's saved stays until you delete it, or use **Clear all**.{{< /step >}}
{{< /steps >}}

## How to add notes

{{< steps >}}
{{< step title="Open Notes" >}}In Memory, open the **Notes** tab.{{< /step >}}
{{< step title="Capture something" >}}In **Write a thought, paste a link, or drop files here**, type a note, paste a link or drop a file, then click **Save** (or **Save link**). Lumen files it, tags it and links it to related notes. You can review what it did under **Inbox**.{{< /step >}}
{{< step title="Or import from Obsidian" >}}In Memory's **Settings** tab, choose **Import an Obsidian vault** and pick the .zip. Notes, links, tags and files come in as they are.{{< /step >}}
{{< step title="Ask your notes" >}}Use **Search & ask** to ask a question over **This vault** or **Everything I can read**. If nothing in your notes answers it, Lumen says **Not found in your notes**.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="memory-second-brain" alt="Settings › Memory with tabs About you, Notes, Connections, Activity and Settings, showing remembered facts and a review section" caption="Memory in Settings. Review, edit or remove anything Lumen remembers." url="lumen.intracav.ai/profile/memory" >}}
{{< lui-block title="Memory" sub="What Lumen knows about you and your team, and the notes it can draw on — recalled in every chat." >}}
{{< lui-rows >}}
{{< lui-row title="Vascular access nurse, Harbor Valley Medical Center" body="About you" >}}
{{< lui-row title="Prefers short answers with a source for each dose" body="About you" >}}
{{< lui-row title="ICU uses chlorhexidine-impregnated dressings for central lines" body="Team memory · added by an admin" >}}
{{< lui-row type="radio" title="Works night shift on 4 West" body="Did Lumen get these right?" value="Keep · Not right" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

{{< chat-demo title="A note cited in an answer" caption="Illustration with fictional notes." >}}
{{< user >}}What did I decide about flushing volumes for the midline teaching session?{{< /user >}}
{{< lumen memory="true" sources="1" >}}
Your note from the planning meeting says you'll teach a 10 mL flush before and after each medication, and refer staff to the policy for the exact volume by device {{< cite 1 >}}.
{{< sources >}}
{{< source n="1" title="Your notes · Teaching/Midline session plan" meta="Your notes" quote="Teach 10 mL flush before/after meds; point to policy for device-specific volumes." >}}{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< /chat-demo >}}

## Vaults and sharing

Your personal vault is **Personal: only you**. In a team, you can create a **New team vault** and give colleagues **Can read**, **Can edit** or **Owner** access. In Memory's **Settings**, you can choose how much Lumen does on its own with your notes: **Off**, **Suggest only**, **Balanced (recommended)** or **Trusted**. Use **Export this vault** to download a .zip you can open in Obsidian.

## Limits and safety

- **You're in control.** Everything Lumen remembers is listed under **About you** and can be edited or deleted. **Memory is off** stops recall and learning.
- **No patient information in memory.** Lumen won't save patient or case details as memories. Don't write identifiable patient details in notes either.
- **Notes are your words, not evidence.** A note can be out of date or wrong. When an answer cites **Your notes**, check it like any other source. Lumen prefers newer notes when they disagree.
- **Size limits.** Notes up to 2 MB each, and files up to 50 MB.
- **Team memory is moderated.** Only admins add team facts directly. Members' suggestions wait for an admin.
- **Access is recorded.** Changes to memory and notes are written to the audit log.

## FAQ

{{< faq question="Can I see everything Lumen remembers about me?" >}}
Yes. Go to {{< ui-path "Settings" "Privacy & data" "Memory" >}} and open **About you**.
{{< /faq >}}
{{< faq question="How do I stop Lumen remembering things?" >}}
Switch **Memory is on** to off. Lumen stops recalling and learning. Use **Clear all** to delete what's saved.
{{< /faq >}}
{{< faq question="Does it work with Obsidian?" >}}
Yes. Import a vault as a .zip with **Import an Obsidian vault**, and export with **Export this vault**. Links, tags and files are kept.
{{< /faq >}}
{{< faq question="Can my team see my personal memories?" >}}
No. Personal facts and your personal vault are only yours. Team memory and team vaults are separate and shared on purpose.
{{< /faq >}}

## Next steps

{{< related "/chat/memory/" "/knowledge/documents/" "/learn/ai-memory/" "/trust/privacy/" >}}
