---
title: "Turn your protocols into a Knowledge Pack"
navTitle: "Build a Knowledge Pack"
description: "Build a Knowledge Pack from protocol PDFs, web pages and training videos, so Lumen answers your staff with citations to your own documents."
lead: "Put your protocols, intranet pages and training videos in one searchable collection, and get answers that cite your organization's own documents."
weight: 11
icon: library
tier: max
who: "team admins"
glance:
  what: "A Knowledge Pack is a curated, searchable collection of documents that Lumen answers from and cites. This guide builds one for your organization."
  who: "Team admins, educators and infection prevention or quality leads who own their organization's protocols."
  why: "Staff get your organization's answer, with the document it came from, instead of a general answer they have to check against the protocol themselves."
  needs: "A Lumen Max team plan, the Admin role on your team, and your documents: PDFs or Word files, public web page links, or YouTube links. About 20 minutes, plus processing time."
  result: "An active Knowledge Pack, switched on for the right departments, and a test answer in chat that cites one of your documents."
---

Infection prevention at Harbor Valley Medical Center keeps its material in three places: about thirty protocol PDFs on a shared drive, a hand hygiene page on the public website, and two in-service videos on YouTube. When a nurse asks how long to scrub a needleless connector, nobody can find the answer quickly. A Knowledge Pack puts all of it in one place, so Lumen answers from your protocols and shows which document each answer came from.

Your organization is called a *team* in Lumen.

## Before you start

- **Plan.** Members get answers from your own Knowledge Packs on a **Lumen Max** team plan {{< tier-badge "max" >}}. See [Plans](/plans/), and [intracav.ai](https://intracav.ai) for pricing.
- **Role.** You need to be an admin of your team.
- **Have ready:**
  - your protocol files (PDF, Word or text), in one folder on your computer
  - the links to any web pages you want included. They must be public. A page behind your intranet login or VPN can't be fetched, so save it as a PDF and upload it instead.
  - the links to any YouTube videos. Lumen adds their transcripts.

{{< callout type="warning" title="No patient information in a Knowledge Pack" >}}
Everyone the pack is shared with can search it. If you later connect the pack to a public website assistant, anyone on the internet can get answers from it. Use protocols, procedures and training material only.
{{< /callout >}}

## How to build a Knowledge Pack

{{< steps >}}
{{< step title="Open Knowledge in the Admin console" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai). In the sidebar, click **Admin console**, then {{< ui-path "Knowledge" "Sources" >}}.
{{< /step >}}

{{< step title="Create the pack" >}}
Click **New pack**. In **New knowledge pack**, type a name, such as "Infection Prevention Protocols", and click **Create**. The pack is active as soon as it's created, but it's empty.
{{< /step >}}

{{< step title="Upload your files" >}}
On the pack, open the **Add documents** menu and choose **Upload files**. Select all the protocol files at once.

Each document shows its progress: **Queued**, **Reading text** (or **Reading scanned pages** for scanned PDFs), **Indexing**, then **Ready**. You can carry on with the next steps while they process.
{{< /step >}}

{{< step title="Add a web page" >}}
From **Add documents**, choose **Add page URL**. Paste the public page link and click **Add**. Lumen fetches the page and indexes its text as a document in the pack.
{{< /step >}}

{{< step title="Add training videos" >}}
From **Add documents**, choose **Add YouTube videos** and paste the links. To add every video from a channel, choose **YouTube channel…** instead. Lumen adds each video's transcript as a document. Progress shows as "Ingesting video transcripts…".

Videos must be public. Some Lumen deployments don't fetch from YouTube; if that happens, the add window tells you.
{{< /step >}}

{{< step title="Check every document is Ready" >}}
Scan the pack's document list. Every row should say **Ready**. If one says **Couldn't read**, open it to see why, then upload a cleaner copy, such as a PDF exported from Word rather than a scan.

Each document also has a setting for how it's used: **Cited source** (searched and cited), **Background only** (informs answers but isn't cited) or **Off**. Leave protocols as **Cited source**.
{{< /step >}}

{{< step title="Choose who can read it" >}}
On the pack, find **Used by** and click **Manage**. In **Who can read**, switch on the **Departments** that should get answers from this pack.
{{< /step >}}

{{< step title="Ask a test question" >}}
Open a new chat and ask something one of your documents answers clearly:

```text
How long do we scrub a needleless connector before accessing a central line?
```

Check that the answer cites your protocol by name in its sources. Open the source to confirm the passage is the one you expected.
{{< /step >}}

{{< step title="See how it fits on the Map" >}}
Go to {{< ui-path "Knowledge" "Map" >}}. The Map shows your pack, its documents, and everything that **answers from** it: departments, member chat, website assistants and Smart IFU pages. Use it before you change or remove anything.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="knowledge-packs" alt="The Knowledge Sources tab in the Lumen Admin console, showing a pack with its documents marked Ready" caption="A Knowledge Pack in the Admin console. Each document shows its processing state and how it's used." url="lumen.intracav.ai/org/harbor-valley/admin/knowledge/sources" >}}
{{< lui-block title="Infection Prevention Protocols · Active" count="33 documents" >}}
{{< lui-rows >}}
{{< lui-row title="Central Line Access and Hub Disinfection" body="PDF · Cited source" value="Ready" >}}
{{< lui-row title="Hand Hygiene (harborvalley.example)" body="Web page · Cited source" value="Ready" >}}
{{< lui-row title="In-service: CHG bathing" body="YouTube transcript · Cited source" value="Indexing" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

## Check it worked

- Every document in the pack says **Ready**.
- On the **Map**, your pack is connected to the departments you chose.
- A test question in chat cites one of your documents, and opening the source shows the matching passage.
- After a week, {{< ui-path "Knowledge" "Insights" >}} shows **Citations** from your pack.

## Tips

- **Check Insights after a week.** {{< ui-path "Knowledge" "Insights" >}} shows counts and topics only, not conversations: **Citations**, **Most-cited documents**, **Pack usage** and **Gaps worth filling**, the questions your material didn't answer well.
- **Use Always-on guidance for short standing facts.** Text in {{< ui-path "Knowledge" "Standing knowledge" >}} is always given to Lumen and never searched or cited. Anything a clinician acts on belongs in a document, where it can be cited.
- **Replace, don't pile up.** When a protocol is revised, remove the old version so answers don't cite two versions.
- **Policies belong in qPolicy.** For documents that need approval, versions and sign-off, see [Publish your first policy](/guides/publish-first-policy/).

## Limits and safety

- **Answers are only as good as the documents.** If a protocol is out of date, Lumen will cite the out-of-date text. Keep the pack current.
- **Public pages only.** Lumen can't fetch pages behind a login or VPN.
- **Turning a pack off affects others.** **Deactivate** shows you what will lose access (website assistants, departments, member chat and Smart IFUs) before anything changes.
- **Searchable isn't the same as approved.** A Ready document can be found and cited. That doesn't mean anyone has reviewed it. Review documents before you add them.

{{< callout type="safety" title="Check the source before you act" >}}
Lumen can still misread a passage. Staff should open the cited document and confirm the passage before acting on an answer.
{{< /callout >}}

## FAQ

{{< faq question="Which file types can I upload?" >}}
PDF, Word and plain-text files work well. Scanned PDFs are read with text recognition, which takes longer. If a file says **Couldn't read**, try exporting a clean PDF.
{{< /faq >}}
{{< faq question="Who can see the documents in a pack?" >}}
The people and departments you choose in **Who can read**, plus any website assistant you add the pack to. Adding a pack to a website assistant asks you to confirm **Publish to the public web?** first.
{{< /faq >}}
{{< faq question="Can I see who is using the pack?" >}}
{{< ui-path "Knowledge" "Insights" >}} shows counts and topics: citations, people, conversations and the most-cited documents. It doesn't show anyone's conversations.
{{< /faq >}}

## Next steps

{{< related "/knowledge/knowledge-packs/" "/organizations/knowledge-packs-admin/" "/knowledge/knowledge-map/" "/guides/launch-a-website-assistant/" >}}
