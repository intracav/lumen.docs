---
title: "Import your policy manual"
navTitle: "Import policies"
description: "Migrate a hospital policy manual into qPolicy from PolicyStat, PolicyTech, Lucidoc, SharePoint or files, with a review step before anything goes live."
lead: "Bring your whole manual across, with owners, areas and the dates a surveyor asks about, and confirm everything before it reaches staff."
weight: 1
icon: upload
tier: max
status: add-on
who: "policy and compliance managers"
glance:
  what: "A guided migration that reads your exported policies, suggests a safe decision for anything unclear, and imports them either in force with their original dates or as drafts for review."
  who: "Policy managers and team admins moving off PolicyStat, PolicyTech, Lucidoc, SharePoint, a shared drive or another system."
  why: "You keep your manual's history and dates, avoid duplicates, and decide exactly what staff see, without retyping hundreds of policies."
  needs: "Lumen Max with the qPolicy add-on, the owner or admin role, and an export of your policies (plus the system's policy report if it has one). A few hours for a large manual."
  result: "Your manual in qPolicy, with every unclear item decided by a person."
---

Moving a policy manual is the step most hospitals dread: hundreds of documents, owners who have left, dates that disagree. qPolicy's migration reads your export, pulls out titles, owners, areas and dates, and groups anything unclear for you to decide. Nothing in your current Lumen manual changes until you click import. Lumen calls your organization a *team*.

## Before you start

- **Plan and role:** Lumen Max with qPolicy; only team admins can migrate policies.
- **Departments:** create the departments that own policies first, so you can assign them. See [Departments and seats](/organizations/departments-and-seats/).
- **Exports:** the steps for each system are shown on screen. For example, in PolicyStat, export the **Active Policies** report and ask RLDatix support for a bulk PDF export. From SharePoint, sync the policy library to a folder.
- **File types:** PDF, Word, HTML or text, as files, a folder or a zip.

## How to import your policies

{{< steps >}}
{{< step title="Start a migration" >}}Click {{< ui-path "Policies & compliance" "Policies" "Library" >}}, open **Import** and choose **Migrate from another system**. The page asks *Moving from another policy system?*{{< /step >}}
{{< step title="Pick your old system" >}}Under **1. Export from your old system**, choose **PolicyStat**, **PolicyTech**, **Lucidoc**, **SharePoint** or **Another system**, and follow the export steps shown.{{< /step >}}
{{< step title="Choose how policies arrive" >}}Under **2. How policies arrive**, pick **In force, keeping their dates** (published straight away with their original effective, approval and review dates) or **As drafts for review** (nothing reaches staff or chat until each is reviewed and published).{{< /step >}}
{{< step title="Choose who can see them" >}}Under **Who can see them**, pick **The whole team** or one department. You can change this for single policies later. Click **Start migration**.{{< /step >}}
{{< step title="Upload" >}}Drop your files, a folder or a zip, or use **Choose files** or **Choose folder**. Add the system's report spreadsheet if you have one; it fills in owners, areas and dates. Click **Read documents**.{{< /step >}}
{{< step title="Let Lumen read" >}}Lumen reads each file. Reading carries on if you leave the page, and you can come back to it from **All migrations**.{{< /step >}}
{{< step title="Decide what's unclear" >}}Lumen groups items that need a decision and suggests a safe default for each. Accept them all at once, or decide one by one.{{< /step >}}
{{< step title="Import" >}}Click **Import** with the count shown, for example **Import 212 policies**. Items you haven't finished stay behind; you can import them later.{{< /step >}}
{{< /steps >}}

The run moves through **Upload · Read · Review · Import · Summary**. To start over, click **Discard**; the uploaded files and every decision are deleted.

## What you'll see

{{< lui-block title="Migration from PolicyStat" sub="Whole team · Started Nov 3" >}}
{{< lui-rows >}}
{{< lui-row title="**Look like policies you already have**" body="Each can become a new version of the policy already in your manual." value="4" >}}
{{< lui-row title="**Copies in this upload**" body="Leave the copies out" value="7" >}}
{{< lui-row title="**Dates that disagree**" body="Keep the dates shown" value="11" >}}
{{< lui-row title="**Retired in your old system**" body="Leave them out" value="23" >}}
{{< lui-row title="**Little or no text**" body="Probably a scan Lumen could not read. Leave them out" value="2" >}}
{{< lui-row title="**Flowcharts read from pictures**" body="Import them, check later" value="3" >}}
{{< /lui-rows >}}
{{< lui-actions "Import 212 policies" "Change settings" "Discard" >}}
{{< /lui-block >}}

## What Lumen checks for

- **Policies you already have:** matched by title or number. Each can become a new version of the existing policy, or come in as its own.
- **Copies in this upload:** the same document uploaded twice. Extra copies are left out.
- **Dates that disagree:** between the document and the report.
- **Retired in your old system:** left out, or kept as retired records that staff never see.
- **Only older versions were exported:** kept as retired records.
- **Little or no text** and **Files that are not policies:** usually scans or forms; left out unless you choose otherwise.
- **Owners not yet on Lumen:** people who own policies but haven't joined. Invite them to keep ownership accurate.

## Good to know

- **In force means no new sign-off.** Policies imported in force keep their dates. No new sign-off is requested, staff aren't asked to attest, and nobody is notified.
- **Clinical text still needs a person.** Imported in-force clinical policies stay in force and are flagged **Verification required** until a clinician checks the text. See [Policy lifecycle](/qpolicy/policy-lifecycle/).
- **Flowcharts.** Pathways Lumen reads from a picture import now, but sign-off stays blocked until each pathway is checked.
- **Single documents.** To add one or two policies, use {{< ui-path "Import" "Upload files" >}} instead.

## Limits and safety

- Lumen reads text; scanned pages may be read imperfectly. Items read from scans are marked *worth a glance*. Open and check them.
- Duplicate detection at import matches identical files, titles and numbers. Similar-but-different policies are suggested for merging later, under **Duplicates to review**, for a person to decide. Lumen doesn't detect contradictions between policies.
- Your original files are kept with each imported version.

## FAQ

{{< faq question="Will importing change anything staff see today?" >}}
Not until you click import. If you choose **As drafts for review**, staff see nothing until each policy is published through your approval route.
{{< /faq >}}
{{< faq question="Do we keep our original effective and review dates?" >}}
Yes, when you import **In force, keeping their dates**. Lumen reads the dates from each document and the report, and asks you when they disagree.
{{< /faq >}}
{{< faq question="Our system isn't listed. Can we still import?" >}}
Yes. Choose **Another system**, export the documents (for example from MCN Policy Manager, Lippincott Procedures or a shared drive) and, if you can, a spreadsheet of titles, owners and dates.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/policy-lifecycle/" "/qpolicy/review-and-approval/" "/qpolicy/attestation/" >}}
