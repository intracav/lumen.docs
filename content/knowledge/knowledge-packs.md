---
title: "Use Knowledge Packs in your chats"
navTitle: "Knowledge Packs"
description: "Knowledge Packs are curated collections, such as clinical guidelines or a device maker's documents, that you switch on so Lumen can search and cite them."
lead: "Switch on the guidelines and device documents you trust, and Lumen cites them in your answers."
weight: 3
icon: package
aliases:
  - /extensions/
glance:
  what: "A Knowledge Pack is a curated collection of documents, such as a society's guidelines or a manufacturer's instructions for use, that Lumen can search and cite when it's switched on."
  who: "Any Lumen user. Team admins manage which licensed and team packs are available."
  why: "So answers draw on recognized guidance and official device documents, with citations you can open, instead of general web material."
  needs: "A Lumen account. Packs included with Lumen are free on every plan. Some partner packs are licensed and need an admin to accept terms. About 2 minutes."
  result: "The packs you want switched on for your chats."
---

A **Knowledge Pack** is a curated collection of documents that Lumen can search and cite, such as a clinical society's guidelines or a device maker's instructions for use. When a pack is on, Lumen can draw on it in your chats, and every passage it uses is cited so you can open the source. Lumen answers from the AVA 2026 guidelines by default; you choose which other packs to switch on.

## Before you start

- **A Lumen account.** Packs **Included with Lumen** are free with every plan.
- **For licensed packs:** your team's admin may need to accept the publisher's terms first. Until then, members see **Awaiting admin**.

## The kinds of packs

| Group (as shown in Lumen) | What it is |
|---|---|
| **Included with Lumen** | Curated by Intracav, free with every plan. |
| **Public packs** | Packs anyone can switch on, such as published guideline collections. |
| **Partner packs** | Official content from a publisher or device maker, such as instructions for use. |
| **Available to license** | Partner content your team can license. Locked packs say **Licensed content — not available on your plan.** |
| Your team's packs | Collections your team's admins build from your own policies and references. See [Manage Knowledge Packs](/organizations/knowledge-packs-admin/). |

## How to switch on a pack

{{< steps >}}
{{< step title="Open Knowledge Packs" >}}In a chat, open the sources menu and choose **Browse Knowledge Packs**. You can also open **Knowledge packs** in a chat's settings.{{< /step >}}
{{< step title="Find a pack" >}}Use **Search packs or publishers**, or filter by **Guidelines**, **Devices** or **Pharma**.{{< /step >}}
{{< step title="Switch it on" >}}Turn the pack on. It moves to the **On** group and shows **Active in your chats**.{{< /step >}}
{{< step title="Ask a question" >}}In a chat, ask something the pack covers. When Lumen uses it, the answer cites the pack's document so you can open it.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="knowledge-packs" alt="The Knowledge Packs page with packs grouped under On, Included with Lumen, Public packs and Partner packs, each with a switch" caption="Knowledge Packs. Switch a pack on to use it in your chats." url="lumen.intracav.ai/profile/knowledge-packs" >}}
{{< lui-block title="Knowledge Packs" sub="All · Guidelines · Devices · Pharma" >}}
{{< lui-rows >}}
{{< lui-row type="check" checked=true title="AVA clinical practice guidelines (2026)" body="On · Active in your chats" >}}
{{< lui-row type="check" title="Surviving Sepsis Campaign guidelines" body="Included with Lumen" >}}
{{< lui-row type="check" title="Northwind Vascular — SL-4 securement device" body="Partner packs · Awaiting admin" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

## Who controls what

- **You** switch packs on and off for your own chats.
- **A folder** can set default packs for chats created in it, under the folder's **Packs** tab. See [Folders](/knowledge/folders/).
- **Your team's admins** decide which licensed and team packs are available, and accept publishers' terms. Some packs are **Always on** in a publisher's own chats.

## Tips

- **Switch on only what you use.** Fewer, relevant packs give more focused answers.
- **Pair a pack with a folder.** Set a device maker's pack as the default in your vascular access folder, so every chat there answers from it.
- **Use packs in workflows.** The **Knowledge Pack Lookup** step lets a [workflow](/workflows/building-blocks/) answer from a pack.

## Limits and safety

- **Available isn't approved.** A pack being on means Lumen can search it. It doesn't mean your organization has adopted that guidance. Follow your own policies where they differ.
- **Check the date.** Guidelines change. Open the citation and check the document's version and date before acting.
- **Licensed content stays licensed.** Partner packs are available only to teams that have them.

{{< callout type="safety" title="Citations are where to check, not proof" >}}
A pack citation shows which document a statement came from. Open it, read the passage in context, and use your clinical judgment.
{{< /callout >}}

## FAQ

{{< faq question="Which packs are on by default?" >}}
The AVA 2026 guidelines. Other packs, including those **Included with Lumen**, are off until you switch them on.
{{< /faq >}}
{{< faq question="Why does a pack say Awaiting admin?" >}}
It's a licensed pack, and your team's admin needs to review and accept the publisher's terms before members can use it.
{{< /faq >}}
{{< faq question="Can we make a pack from our own policies?" >}}
Yes. Team admins can build packs from PDFs, web pages and more. See [Manage Knowledge Packs](/organizations/knowledge-packs-admin/) and [Build a Knowledge Pack](/guides/build-a-knowledge-pack/).
{{< /faq >}}

## Next steps

{{< related "/knowledge/folders/" "/knowledge/knowledge-map/" "/organizations/knowledge-packs-admin/" "/chat/sources/" >}}
