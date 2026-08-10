---
title: "Managing Knowledge Packs for Your Org"
description: "How org admins build Knowledge Packs in Lumen: PDF upload, URL and whole-site ingest, YouTube transcription, publishing, visibility, and usage insights."
lead: "Your protocols become the cited answer — not a binder nobody opens."
weight: 2
keywords: ["hospital knowledge management AI", "clinical protocol AI", "organization knowledge base"]
---

Every hospital has the binder: the protocols someone spent months writing, stored somewhere between a shared drive and institutional memory. A Knowledge Pack is how that content becomes what your team actually sees — when a member asks a question your protocol answers, the response cites *your document*, by name, with a link back to the source.

This page is the admin's guide. For what members experience, see [Knowledge Packs](/knowledge/knowledge-packs/).

## Creating an org pack

Org admins create packs from the organization's knowledge admin area. A pack is just a named, governed container — "Vascular Access Protocols," "Pharmacy References," "New Hire Orientation." Create it once, then feed it through any of the ingest paths below. Content is retrievable by your members in chat as soon as it's indexed.

## Five ways to get content in

**Upload files.** The workhorse. Drop in PDFs (and other documents) directly — batch uploads are supported, so the forty-protocol backlog is one session, not forty.

**Add a single URL.** Point Lumen at a page — an intranet protocol page, a society statement — and it's fetched, extracted, and indexed on the spot. If the page changes later, refresh the document to re-index it; fetch failures come back as clear errors, not silent gaps.

**Crawl a whole site.** For a site's worth of content — a guideline library, a departmental microsite — Lumen can crawl the site and stage every page in a **review queue**. Nothing goes live until a human approves it: you see each page, quality flags (thin content, extraction problems, duplicates), and approve or reject individually or in bulk. What your members end up citing is exactly what a reviewer saw and approved.

**Ingest YouTube.** Give Lumen a video, playlist, or channel URL. It discovers every video behind the link, transcribes them automatically in the background, and adds the transcripts as pack documents. The in-service your educator recorded three years ago becomes searchable, citable knowledge.

**Publish from your library.** A document that already lives in your Lumen library can be published into a pack directly — no re-upload. If the pack also feeds your public [Website Bot](/organizations/website-bots/), Lumen asks you to confirm before anything becomes publicly answerable. Publishing to the public web should never happen by accident.

## Versions, refresh, and retraction

Pack citations are version-stamped: a member always sees which document, and which version of it, an answer came from. When a source page or document changes, refreshing it re-indexes the new content — and when a document is retracted, it disappears from retrieval within minutes, with a banner over past answers that cited it. The failure mode of paper — someone quoting the 2022 protocol in 2026 — is structurally closed.

## Entitled packs: curated and partner content

Beyond the packs you build, your organization can be entitled to **curated clinical packs** (recognized guideline libraries that ship with Lumen) and **partner packs** (manufacturer documentation licensed to your org). Admins review and accept the terms for entitled packs, then control whether they're active for the organization; members keep a per-pack toggle on their side. The layering — org grants, member preference, per-chat override — is described in [Knowledge Packs](/knowledge/knowledge-packs/).

## Per-pack visibility

Your packs default to **organization-only**: your members, nobody else. A pack can also be submitted for publication review if you want its content available beyond your org — it stays private until explicitly approved, and even then other organizations must opt in. Nothing you upload becomes public as a side effect.

## Usage insights

The admin view answers the question every knowledge manager eventually asks: *is anyone using this?*

- **Per pack** — which packs are actually being cited in members' answers, and how often.
- **Per member** — who is drawing on shared knowledge and who isn't (useful for onboarding follow-up, not surveillance — you see engagement, not transcripts).

If the sepsis pack gets cited daily and the orientation pack never does, you've learned something about your content — before an audit or an adverse event teaches you the hard way.

{{< callout type="success" >}}
**The payoff, concretely:** a nurse asks about flushing protocol for a midline. Without a pack, she gets a well-cited general answer. With your pack, she gets *your institution's* answer, citing *your* protocol, current version — the same answer her educator would give, available at 3 a.m.
{{< /callout >}}

## Next steps

- [Members' view of Knowledge Packs](/knowledge/knowledge-packs/)
- [Publish governed policy — a stronger guarantee than a pack](/organizations/policies/)
- [Ground a public website bot in your packs](/organizations/website-bots/)
