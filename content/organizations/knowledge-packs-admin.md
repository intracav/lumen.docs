---
title: "Manage Knowledge Packs for your organization"
navTitle: "Knowledge Packs"
description: "How hospital admins build Knowledge Packs from protocols and references, choose which departments answer from them, and see whether staff use them."
lead: "Turn the protocols your staff already rely on into sources Lumen cites, and decide exactly which units answer from each one."
weight: 3
icon: library
status: admin
who: "team owners and admins"
glance:
  what: "A Knowledge Pack is a named collection of your documents, such as protocols, references and education material, that Lumen can search and cite. Admins create packs and choose who answers from them."
  who: "Admins who own clinical content: nursing education, clinical informatics, department leads."
  why: "When a nurse asks about your flush protocol, the answer cites your protocol, not a general source, and you control which units see which content."
  needs: "A Lumen team on Plus or Max, the owner or admin role, and your documents as files or web pages. About 20 minutes for a first pack."
  result: "A pack of your documents that the right departments answer from, and a view of how it's used."
---

Every hospital has protocols that took months to write and are hard to find at 3 a.m. A **Knowledge Pack** is a named collection of documents that Lumen searches when it answers. When an answer uses one of your documents, it cites it by name, so staff can open the source and check it. Admins decide which departments answer from each pack, and Lumen shows you what would change before you switch one off. Lumen calls your organization a *team*.

## Before you start

- **Role:** owner or admin.
- **Plan:** Plus or Max.
- **Have ready:** the documents (PDF, Word and similar) or the web addresses of pages you want included. Start with the five or ten documents staff ask about most.

## How to create a pack and add documents

{{< steps >}}
{{< step title="Open Sources" >}}In the Admin console, click {{< ui-path "Knowledge" "Sources" >}}.{{< /step >}}
{{< step title="Create the pack" >}}Click **New pack**, name it, for example *Vascular Access Protocols*, and click **Create**.{{< /step >}}
{{< step title="Add documents" >}}Drop files onto the pack, or open its **Add** menu and choose **Upload files**. To add a web page, choose **Add page URL** and paste the full address. To add recorded education, choose **Add YouTube videos** and paste a video, playlist or channel link; Lumen adds the transcripts.{{< /step >}}
{{< step title="Wait for processing" >}}Each document shows its state: **Processing**, then searchable. Page URLs usually take under a minute. If a file shows **Couldn't process**, it may be a scan with no readable text; replace it with a text version.{{< /step >}}
{{< step title="Choose who answers from it" >}}Open the pack's **Manage** menu. Under **Departments**, switch on each department whose members should get answers from this pack, then click **Done**.{{< /step >}}
{{< /steps >}}

{{< callout type="warning" title="Website assistants are public" >}}
The same **Manage** screen lists **Website assistants**. A website assistant answers anyone on the internet, so adding a pack there makes its documents quotable to the public. Lumen asks you to confirm with **Publish** before it does this. Keep internal protocols off public assistants.
{{< /callout >}}

## What you'll see

{{< screenshot src="knowledge-packs" alt="The Knowledge Sources page with a team pack, its documents and its department access" caption="Knowledge Sources: your packs, licensed packs your team can switch on, and who each pack is used by." url="lumen.intracav.ai/org/harbor-valley/admin/knowledge/sources" >}}
{{< lui-block title="Knowledge sources" >}}
{{< lui-block title="Vascular Access Protocols" sub="Used by: Vascular Access · ICU · Med-Surg" >}}
{{< lui-rows >}}
{{< lui-row title="PICC insertion and maintenance" body="PDF · 14 pages" value="Searchable" >}}
{{< lui-row title="Midline flushing and locking" body="PDF · 6 pages" value="Searchable" >}}
{{< lui-row title="CLABSI bundle checklist" body="Web page" value="Processing" >}}
{{< /lui-rows >}}
{{< lui-actions "Add" "Manage" >}}
{{< /lui-block >}}
{{< lui-block title="Available knowledge" sub="Licensed clinical packs your team can switch on" >}}
{{< lui-rows >}}
{{< lui-row title="A licensed clinical pack" value="Needs terms" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lui-block >}}
{{< /screenshot >}}

## The other Knowledge pages

- **Map** shows where your knowledge goes: each pack, your policy library and your always-on guidance, and what answers from each. Open a node to see what depends on it.
- **Standing knowledge** holds [always-on guidance](/organizations/always-on-guidance/): short facts that shape every answer and are never cited.
- **Insights** shows **Knowledge coverage** (how many questions were answered from your knowledge), **Gaps worth filling** (the most common topics among questions your packs could not answer) and adoption per person. It shows activity counts only, never what anyone asked.
- **Share links** creates guest or member links. See [Departments and seats](/organizations/departments-and-seats/).

## Tips

- **Check the impact before you switch a pack off.** When you deactivate a pack, Lumen lists everything that stops answering from it. Its documents are kept, and you can activate it again.
- **Keep one topic per pack.** Separate packs make it easy to give the ICU its sedation protocols without giving them to Emergency.
- **Refresh changed web pages.** A page added by URL is read when you add it. Use the document's re-fetch option after the page changes.
- **Licensed packs.** Under **Available knowledge**, your team may have licensed clinical or partner packs. Those marked **Needs terms** wait for an admin to accept their license terms.
- **Policies belong in qPolicy.** A pack holds reference material. For governed policy with approvals, versions and attestation, use [qPolicy](/qpolicy/).

## Limits and safety

- Lumen cites what's in your documents. If a protocol is out of date, answers that cite it are out of date too. Remove or replace superseded documents.
- Uploaded documents don't keep a version history in a pack. Replacing a file replaces what Lumen answers from.
- A pack you build stays private to your team. Making it available to all Lumen accounts needs a request that Intracav reviews first.
- Answers support clinical judgment. Staff should open the cited document and follow your policies before acting.

## FAQ

{{< faq question="How quickly can staff use a new document?" >}}
As soon as it has finished processing. A web page usually takes under a minute; long PDFs take longer.
{{< /faq >}}
{{< faq question="Can I see who uses a pack?" >}}
Yes, as counts. {{< ui-path "Knowledge" "Insights" >}} shows adoption per person and which questions your packs answered. It never shows what anyone asked.
{{< /faq >}}
{{< faq question="What's the difference between a pack and always-on guidance?" >}}
A pack holds documents Lumen searches and cites. Always-on guidance is a short block of facts Lumen keeps in mind for every answer and never cites. Anything staff should be able to check belongs in a pack.
{{< /faq >}}

## Next steps

{{< related "/organizations/always-on-guidance/" "/knowledge/knowledge-packs/" "/organizations/departments-and-seats/" "/qpolicy/" >}}
