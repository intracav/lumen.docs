---
title: "Turn Your Protocols into a Knowledge Pack"
description: "Build an org Knowledge Pack in Lumen from 30 protocol PDFs, an intranet page, and two YouTube videos — then watch chat answers cite your own documents."
lead: "Thirty PDFs, one intranet page, two training videos — one pack your whole team gets cited answers from."
weight: 11
audience: org
tier: max
time: "~20 minutes"
keywords: ["build clinical knowledge base AI", "upload hospital protocols AI", "knowledge pack tutorial"]
---

Your infection-control content exists in three places: thirty protocol PDFs on a shared drive, a policies page on the intranet, and two in-service videos your educator posted to YouTube during the pandemic. Today none of it answers questions. By the end of this guide, a nurse who asks about dressing changes gets *your institution's* answer, citing *your* document by name and version — at 3 a.m., without paging anyone.

## What you'll make

An organization Knowledge Pack — call it "Infection Control Protocols" — containing all three content types, active for your members, verified with a live chat question, and measured after a week with pack insights.

## Before you start

- You're an org admin on a [Max](/plans/) {{< tier-badge "max" >}} organization plan.
- The thirty PDFs gathered in one folder on your machine (batch upload means this is one session, not thirty).
- The intranet page's URL, reachable from the internet — a page locked behind your hospital VPN can't be fetched.
- The two YouTube links (individual videos, a playlist, or a whole channel all work).

{{< callout type="warning" >}}
**No PHI in pack documents.** Everything you put in this pack becomes retrievable by every member of your organization — and, if the pack later feeds a public [Website Bot](/organizations/website-bots/), potentially by the public. Protocols, procedures, and training material belong here; anything derived from patient records does not. When in doubt, run it through [de-identification](/tools/privacy/) first.
{{< /callout >}}

<div class="steps-container">

{{< step num="1" title="Create the pack" >}}
From your organization's knowledge admin area, create a new pack named **Infection Control Protocols**. A pack is just a named, governed container — create it once, then feed it through any of the ingest paths below.

**You should see:** an empty pack, owned by your organization, defaulting to organization-only visibility — your members, nobody else.
{{< /step >}}

{{< step num="2" title="Upload the thirty PDFs" >}}
Batch-upload the whole folder of protocol PDFs into the pack. Each document is extracted, chunked, and indexed; content becomes retrievable by your members as soon as it's indexed.

**You should see:** all thirty documents listed in the pack, each moving from processing to indexed. A handful still processing while you do the next step is normal.
{{< /step >}}

{{< step num="3" title="Add the intranet page by URL" >}}
Add the policies page as a single URL — for the fictional St. Alder Medical Center, something like:

```
https://policies.stalder-health.example/infection-control/hand-hygiene
```

Lumen fetches the page, extracts the content, and indexes it on the spot. If the page changes next quarter, refresh the document to re-index it — and if a fetch fails, you get a clear error, not a silent gap.

**You should see:** the page appear in the pack as its own document, indexed alongside the PDFs.
{{< /step >}}

{{< step num="4" title="Add the two YouTube videos" >}}
Paste in the two training-video links. Lumen discovers each video behind the link, transcribes it automatically in the background, and adds the transcript as a pack document. This runs on its own — start it and move on; there's no need to babysit it.

**You should see:** two new entries in the pack marked as processing, flipping to indexed transcripts when transcription finishes.
{{< /step >}}

{{< step num="5" title="Review what got ingested" >}}
Before you tell the team, skim the pack's document list end to end. You're checking three things: every PDF you meant to upload is there and indexed, the intranet page extracted cleanly (open it — does the text look like the page?), and the video transcripts read sensibly. Anything that ingested badly is cheaper to fix now than after a clinician quotes it.

**You should see:** thirty-three documents (30 PDFs + 1 page + 2 transcripts), all indexed, none flagged with extraction problems.
{{< /step >}}

{{< step num="6" title="Confirm it's active for your members" >}}
Check that the pack shows as active for the organization. Members get a per-pack toggle on their side — it's on by default when your org grants the pack — and can override it per chat. The layering (org grant → member preference → per-chat override) is described in [Knowledge Packs](/knowledge/knowledge-packs/).

**You should see:** the pack listed as active for your org, and visible in your own member-side pack settings.
{{< /step >}}

{{< step num="7" title="Verify it with a real question" >}}
Open a chat and ask something one of your protocols actually answers:

```
How long do we scrub the hub before accessing a central line,
and what does our infection-control protocol say about
disinfecting cap changes?
```

**You should see:** an answer that cites *your* document — "Central Line Access & Hub Disinfection Protocol," by name, with a version stamp and a link back to the source — not a well-cited general answer. That difference is the whole product: your institution's answer instead of an approximation of it.
{{< /step >}}

{{< step num="8" title="Check pack insights after a week" >}}
Come back in a week and open the pack's usage insights. Two views matter:

- **Per pack** — is this pack actually being cited in members' answers, and how often?
- **Per member** — who is drawing on shared knowledge and who isn't? You see engagement, not transcripts — this is onboarding follow-up, not surveillance.

**You should see:** citation counts accumulating. If the pack is cited daily, your content is doing its job; if it never is, you've learned something about your content before an audit teaches you the hard way.
{{< /step >}}

</div>

## Troubleshooting

**The URL fetch failed.** The page must be reachable from the internet — intranet pages behind a VPN or a login wall can't be fetched. Options: export the page to PDF and upload it, or use a publicly reachable mirror of the policy.

**The YouTube transcripts haven't appeared.** Transcription runs in the background and long videos take longer. If a video never lands, check that the link is public — private or unlisted-with-restrictions videos can't be transcribed.

**Chat answers don't cite your documents.** Three usual causes, in order: the document is still indexing (check the pack list), the member you tested with has the pack toggled off on their side, or the question genuinely isn't answered by the content (ask something a specific document clearly covers — the answer you'd expect the educator to give).

**A protocol was updated.** Refresh that document to re-index the new content. Citations are version-stamped, so members always see which version an answer came from — and if you retract a document, it disappears from retrieval within minutes, with a banner over past answers that cited it.

## Next steps

- [Launch a grounded bot on your website](/guides/launch-a-website-bot/) — the same pack, answering the public
- [Managing Knowledge Packs for your org](/organizations/knowledge-packs-admin/) — whole-site crawling, entitled packs, visibility, and retraction
- [Knowledge Packs](/knowledge/knowledge-packs/) — what your members see, and who controls what
