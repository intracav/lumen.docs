---
title: "Review IFU revisions"
navTitle: "IFU revisions"
description: "Lumen re-checks your IFU sources. When a file changes, it holds the new copy with a summary of what changed, and nothing is applied until an admin approves it."
lead: "When a manufacturer's IFU changes, Lumen notices, summarizes what changed, and waits. Your Smart IFU page keeps answering from the approved copy until an admin reviews the change."
weight: 3
icon: refresh
tier: max
who: "device makers"
glance:
  what: "IFU revision watch re-downloads the documents behind your Smart IFU pages. When a file changes, Lumen holds the new copy as a pending revision with a summary of the sections that changed."
  who: "Regulatory, quality and labeling teams, and anyone who approves what a Smart IFU page says."
  why: "So a public page never drifts from current labeling without anyone noticing, and never changes without a person's approval."
  needs: "A Smart IFU page (Lumen Max) and the owner or admin role. A few minutes per revision."
  result: "Each change either approved and live, or dismissed, with the page answering from the copy you chose."
---

Labeling changes. When a new IFU revision goes up on your website or an eIFU portal, the public page built from the old revision can fall out of step. **IFU revision watch** checks each document's source for you. When the file changes, Lumen keeps the new copy aside, summarizes which sections changed, and alerts your admins. Nothing is applied until an admin approves it.

## Before you start

- At least one [Smart IFU page](/connect/smart-ifu/) whose documents came from a link (not only from uploaded files).
- **Lumen Max** and the **owner or admin** role on your team.

## How it works

{{< flow >}}
{{< flow-node kicker="Lumen checks" title="The source file" icon="refresh" tint="blue" >}}About once a day for each document.{{< /flow-node >}}
{{< flow-node kicker="If the file changed" title="A pending revision" icon="git-compare" tint="plum" >}}Stored and summarized, but not used for answers.{{< /flow-node >}}
{{< flow-node kicker="An admin decides" title="Approve or dismiss" icon="check-circle" tint="green" >}}Only an approved copy reaches the page.{{< /flow-node >}}
{{< /flow >}}

1. **Lumen re-downloads each source document** about once a day. If a check fails, it waits longer before trying again.
2. **A change is any difference in the file.** If the downloaded file isn't identical to the approved copy, Lumen stores the new copy, reads it, and writes a summary of the sections that changed. The new copy isn't searched or cited yet.
3. **Admins are notified.** Your team's owners and admins get an in-app notification such as "SL-4 securement device: a revised document is waiting for review". Several changes found at once arrive as one digest.
4. **The page keeps using the approved copy** until someone approves the new one.
5. **If the source disappears,** the document is marked "Gone from the manufacturer's site". Nothing is deleted, and the page keeps answering from the approved copy.

## How to review a revision

{{< steps >}}
{{< step title="Open the device page" >}}Open {{< ui-path "Admin console" "Smart IFUs" >}} and open the page with the change. A banner reads **A manufacturer changed a document** (or **N documents changed at the source**). Click **Review**.{{< /step >}}
{{< step title="Read what changed" >}}The review shows **Sections that changed**. To compare with the original, click **Open the manufacturer's copy**.{{< /step >}}
{{< step title="Decide" >}}Click **Approve new copy** to make the revision live on the page. Click **Dismiss** to keep the approved copy. A dismissed version won't alert you again.{{< /step >}}
{{< /steps >}}

To check right away instead of waiting for the next daily check, use **Check for IFU updates** on the page.

## What you'll see

{{< lui-block title="A manufacturer changed a document" sub="Pages keep answering from the approved copy until you review each change." >}}
{{< lui-rows >}}
{{< lui-row title="SL-4 Securement Device, Instructions for Use" body="Changed at the source — review" >}}
{{< /lui-rows >}}
{{< lui-kv "Sections that changed=Warnings; Replacement and removal" >}}
{{< lui-actions "Approve new copy" "Dismiss" >}}
{{< /lui-block >}}

## Good to know

- **"Changed" means the file changed.** A new upload of the same text with a different file can still trigger a review. Read the summary before you decide.
- **Dismissed is remembered.** If you dismiss a version, Lumen won't raise that exact file again.
- **A missing source is flagged, not removed.** If the link stops working, choose **Keep the approved copy** until you have a new link.

## Limits

- **Uploaded files aren't watched.** Revision watch only checks documents that came from a link. If you uploaded a PDF, upload the new revision yourself.
- **The summary is a guide.** It points you to sections that changed. Your regulatory review of the new revision is still required.
- **Checks aren't instant.** Each document is checked about once a day, and less often after repeated failures.

{{< callout type="important" title="Nothing changes without approval" >}}
Lumen never applies a revision on its own. A Smart IFU page answers from the copy an admin approved until an admin approves a new one.
{{< /callout >}}

## FAQ

{{< faq question="Who gets notified about a revision?" >}}
The team's owners and admins, through in-app notifications.
{{< /faq >}}
{{< faq question="Will visitors see the new IFU before we approve it?" >}}
No. The new copy isn't searched or cited until an admin clicks **Approve new copy**.
{{< /faq >}}
{{< faq question="Does this work for website assistants?" >}}
Revision watch covers the documents behind Smart IFU pages. For a website assistant, replace documents on its **Knowledge** tab when your labeling changes.
{{< /faq >}}

## Next steps

{{< related "/connect/smart-ifu/" "/connect/website-assistant/" "/connect/" >}}
