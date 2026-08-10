---
title: "Knowledge Packs"
description: "Knowledge Packs are curated, cited, version-pinned clinical content collections — guideline libraries, device documentation, and your own organization's protocols."
weight: 3
aliases:
  - /extensions/
---

A **Knowledge Pack** is a curated collection of clinical content that Lumen can cite in its answers. When content comes from a pack, it is:

- **Grounded** — surfaced only via citation, never paraphrased without attribution.
- **Version-pinned** — every retrieved passage carries a publisher-stamped version tag and effective date.
- **Retraction-safe** — when the publisher pulls a document (recall, update, withdrawal), it disappears from search within minutes and a banner appears above any message that cited it.
- **Scoped** — you and your organization control exactly which packs are active, down to the individual chat.

## Three kinds of packs

**Curated clinical packs** ship with Lumen and are available to every organization — including the AVA clinical practice guidelines and the Surviving Sepsis campaign guidelines. These give every answer a foundation of recognized, citable guidance.

**Partner packs** carry a manufacturer's official documentation — IFUs, service manuals, prescribing information — licensed to your organization. Citations render with the publisher's name, version, and effective date, and tapping one opens the source PDF at the right page.

**Your organization's packs** hold your own protocols, policies, and reference material. Org admins build them from PDFs, web pages, whole sites, or even YouTube videos — see the admin guide to [managing Knowledge Packs](/organizations/knowledge-packs-admin/).

## Where packs show up

Pack content flows through four surfaces, all controlled by the same on/off switch:

- **Chat citations** — verified-source badges; tapping opens the source document.
- **Tools** — some partner packs add typed lookup tools (for example, a device IFU lookup by product code) that appear automatically when the pack is active for you.
- **Skills** — packs can ship curated skills that trigger on matching questions.
- **Workflow nodes** — workflows can query a pack directly for pack-gated retrieval in automations.

## Who controls what

| Scope | Control | Default |
|---|---|---|
| Your organization | Licenses packs; org admins accept the terms and activate them | pending until activated |
| You | Per-pack toggle in your settings | on when your org grants it |
| A single chat | Per-chat override | inherits your setting |

The narrowest layer wins — a per-chat override beats your personal preference, which beats the organization default.

{{< callout type="info" >}}
**Toggling a pack is instant and complete.** Turning a pack off removes its citations, tools, and skills everywhere at once — mid-conversation included.
{{< /callout >}}
