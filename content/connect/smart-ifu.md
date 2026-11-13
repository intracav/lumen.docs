---
title: "Create a Smart IFU page"
navTitle: "Smart IFU pages"
description: "Turn a device's instructions for use into a public page that answers questions with the IFU page cited, reached by QR code, with no sign-in for visitors."
lead: "Paste a product link, choose the documents Lumen finds, and publish a page that answers questions about one device from its IFU. Print QR stickers so clinicians can reach it from the box."
weight: 1
icon: qr
tier: max
who: "device makers"
glance:
  what: "A Smart IFU page is a public web page for one device. Visitors ask questions and get answers from that device's instructions for use (IFU), with the page cited. A QR sticker takes them there."
  who: "Regulatory, customer support, clinical education and marketing teams at medical device makers."
  why: "Clinicians at the point of use get the answer from your IFU in seconds, with the page to check, instead of searching a long PDF or calling support."
  needs: "Lumen Max on a team account with Smart IFUs turned on (on by default for device-maker teams), the owner or admin role, and a link to the product's page or its IFU. About 15 minutes per device."
  result: "A published Smart IFU page at its own link, and a sheet of QR stickers ready to print."
---

A clinician holding your device usually has one question, and the answer is somewhere in a long IFU. A **Smart IFU page** answers that question directly from the IFU and cites the page, so the clinician can check it. You build one by pasting a link to the product. Lumen finds the documents, you choose which ones the page answers from, and you publish it. A QR sticker on the packaging, a binder or a booth takes clinicians to the page. Visitors don't sign in.

## Before you start

- **Lumen Max** on your company's team account (called a *team* in Lumen), with Smart IFUs turned on. They're on by default for device-maker teams.
- **The owner or admin role** on the team.
- **A starting point** for the device: the product's web page, a direct link to its IFU, or the PDFs themselves. Its catalog or REF numbers help Lumen find the IFU on manufacturer eIFU portals.

{{< callout type="info" title="Not on Max?" >}}
If your plan is below Max, setup shows "Smart IFUs are part of the Max plan. Contact us to enable them for your organization." See [Plans](/plans/).
{{< /callout >}}

## How to create a Smart IFU page

{{< steps >}}
{{< step title="Open Smart IFUs" >}}Open {{< ui-path "Admin console" "Smart IFUs" >}} and click **New page** (or **Create the first one** if you have none yet).{{< /step >}}
{{< step title="Tell Lumen where to look" >}}In **New Smart IFU**, keep **Find or upload** selected. Enter the **Manufacturer**, paste the **Literature page or document link**, and add any **Catalog / REF numbers**. You can also click **Add files** to upload PDFs. To build from documents you already have in Lumen, choose **Use a knowledge pack** instead.{{< /step >}}
{{< step title="Find the documents" >}}Click **Find documents**. Lumen reads the page you gave it and related pages on the same site, follows document links, and searches supported eIFU portals by REF number. Then click **Review**.{{< /step >}}
{{< step title="Choose the documents" >}}On **Choose the documents**, each item shows its type, such as **Instructions for Use**, **Quick reference**, **Brochure** or **Sell sheet**, and where it was found. For each one you keep, choose how it's used: **Clinical** or **Reference** documents are cited as sources. **Marketing** material informs answers but is never cited. Clear anything that shouldn't be used.{{< /step >}}
{{< step title="Build the page" >}}Click **Ingest** to build the library. Lumen keeps the pages and figures of each PDF, so answers can cite the exact page. You can click **Continue in background** while it works, then **Open the page**.{{< /step >}}
{{< step title="Check it, then publish" >}}Ask the draft page a few questions, including one the IFU doesn't answer. Only admins can chat with a draft. When the answers look right, click **Publish**.{{< /step >}}
{{< step title="Print QR stickers" >}}On the page, open the stickers and click **Print**, **PDF** or **Save image**. For every live page at once, click **Print sheet** on the Smart IFUs list.{{< /step >}}
{{< /steps >}}

## What you'll see

During setup, Lumen shows what it found and lets you decide how each document is used.

{{< screenshot src="smart-ifu-setup" alt="The Choose the documents step, listing found documents with their type and whether they are cited or marketing" caption="Choose the documents: clinical and reference documents are cited. Marketing informs answers but is never cited." url="lumen.intracav.ai" >}}
{{< lui-block title="Choose the documents" sub="These ground every answer. Marketing material informs answers but is never cited to a clinician." count="3 of 4" >}}
{{< lui-rows >}}
{{< lui-row type="check" checked=true title="SL-4 Securement Device, Instructions for Use" body="Instructions for Use · eIFU portal · Clinical (cited as a source)" >}}
{{< lui-row type="check" checked=true title="SL-4 Quick reference card" body="Quick reference · Found on northwindvascular.example · Reference (cited as a source)" >}}
{{< lui-row type="check" checked=true title="SL-4 product brochure" body="Brochure · Found on northwindvascular.example · Marketing (informs answers, never cited)" >}}
{{< lui-row type="check" title="Northwind Vascular catalog 2026" body="Catalog · Another site" >}}
{{< /lui-rows >}}
{{< lui-actions "Ingest 3" "Clear all" >}}
{{< /lui-block >}}
{{< /screenshot >}}

Visitors see a page for the device. They type a question and get an answer with the IFU page cited.

{{< screenshot src="smart-ifu-page" alt="A public Smart IFU page answering a question with the IFU page cited" caption="A published Smart IFU page. No sign-in is needed." url="lumen.intracav.ai/d/sl-4" >}}
{{< chat-demo title="SL-4 securement device · Smart IFU" caption="Fictional device and content." >}}
{{< user >}}How often should the SL-4 be replaced?{{< /user >}}
{{< lumen sources="1" actions="false" >}}
The instructions for use give the replacement interval and the conditions for replacing it sooner {{< cite 1 >}}. Follow your facility's policy as well.

{{< sources >}}
{{< source n="1" title="SL-4 Securement Device, Instructions for Use · p. 6" meta="Northwind Vascular · IFU" >}}Replacement and removal.{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Good to know

- **Each page has its own link** in the form `lumen.intracav.ai/d/<name>`. Once you download or print its stickers, that link is fixed for good, so the printed QR codes keep working.
- **Sticker sizes.** Stickers come as a standard 3 × 1 inch label, a large 4 × 1.5 inch label, or a 2 × 2 inch square, with an optional inverted QR code. **Print sheet** lays out every live page on US Letter with crop marks.
- **Figures are kept.** Figures from the IFU can appear in answers, labeled with their caption and page.
- **Conversations know their device.** A follow-up question is answered in the context of the same device and the earlier questions.
- **Unpublish anytime.** **Unpublish** takes a page offline, and **Restore** brings it back.

## Limits and safety

- **Answers come only from the documents you chose.** If the IFU doesn't cover a question, the page is instructed to say so.
- **Marketing is never cited.** It can shape how an answer is phrased, but the citation always points to a clinical or reference document.
- **eIFU portal search covers a few portals.** If Lumen doesn't find your IFU, paste its link or upload the PDF.
- **IFUs change.** Lumen watches the sources and holds every change for your approval. See [IFU revisions](/connect/ifu-revisions/).
- **Patients may read it.** The page is public and needs no sign-in. It makes no patient-specific claims, so write nothing into it you wouldn't put in the IFU itself.

{{< callout type="safety" title="The IFU is the authority" >}}
A Smart IFU page helps people find what the IFU says. It doesn't replace the IFU, clinical training or your facility's policies. Each answer cites the page so the reader can check the original.
{{< /callout >}}

## FAQ

{{< faq question="Do clinicians need a Lumen account to use the page?" >}}
No. Anyone with the link or QR code can ask questions without signing in.
{{< /faq >}}
{{< faq question="Why is our brochure not cited?" >}}
Because you marked it as marketing. Marketing material can inform answers, but Smart IFU pages only cite clinical and reference documents, so every citation points to labeling a reviewer can check.
{{< /faq >}}
{{< faq question="Can we build a Smart IFU page without Max?" >}}
Self-serve setup needs Max. Intracav can also build pages for your organization. Contact [Intracav](https://intracav.ai).
{{< /faq >}}
{{< faq question="What happens when we publish a new IFU revision?" >}}
Lumen notices the change at the source and shows it to your admins for review. The page keeps answering from the approved copy until an admin approves the new one.
{{< /faq >}}

## Next steps

{{< related "/connect/ifu-revisions/" "/connect/website-assistant/" "/connect/leads-and-analytics/" "/connect/" >}}
