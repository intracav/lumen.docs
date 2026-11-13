---
title: "Set up a Smart IFU page for a device"
navTitle: "Set up a Smart IFU"
description: "Turn a device's instructions for use into a public page that answers questions and cites the exact page, with QR stickers for the packaging."
lead: "From a product link to a printed QR sticker: a public page that answers questions from your IFU and shows the page number behind every answer."
weight: 40
icon: qr
tier: max
who: "device makers"
glance:
  what: "A Smart IFU page is a public web page for one device. Anyone who scans its QR sticker can ask a question and get an answer drawn from your instructions for use (IFU), with the document and page number shown."
  who: "Medical device makers: regulatory, clinical education, marketing and customer support teams."
  why: "Clinicians at the bedside reach the right page of your IFU in seconds instead of searching a PDF, and the page says plainly when the IFU doesn't cover something."
  needs: "A Lumen Max plan for your organization, the Admin role on your team, and the link to the product's literature page or the IFU PDF. About 20 minutes, plus reading time while Lumen indexes."
  result: "A published Smart IFU page with a fixed link, a QR sticker ready to print, and a test answer that cites the IFU page it came from."
---

Northwind Vascular makes the **SL-4 securement device**. Nurses ask the same questions about it every week: how long it can stay in place, how to remove it, and what to do when the dressing lifts. The answers are in the IFU, on page 6 or page 11, but nobody at the bedside has the PDF open. A Smart IFU page puts those answers one scan away, and every answer shows the IFU page it came from so the nurse can check it.

This guide follows Northwind (a fictional company) from a product link to a published page and a printed sticker. Your organization is called a *team* in Lumen.

## Before you start

- **Plan.** Self-serve Smart IFU pages need **Lumen Max** for your organization {{< tier-badge "max" >}}. See [Plans](/plans/), and [intracav.ai](https://intracav.ai) for pricing.
- **Role.** You need to be an admin of your team. Team members without the Admin role don't see the Smart IFUs area.
- **Product.** Smart IFUs are on by default for teams set up as a medical-device manufacturer. If you don't see **Smart IFUs** in the Admin console, ask Intracav to turn it on.
- **Have ready:** the manufacturer name exactly as it should appear on the sticker, and either the link to the product's literature page (where your IFU and brochures are listed) or the IFU as a PDF.

{{< callout type="important" title="Only public material belongs here" >}}
A Smart IFU page is public. Anyone with the link or the sticker can open it and ask questions, with no sign-in. Add only documents you already publish: IFUs, quick-reference guides, specifications and brochures.
{{< /callout >}}

## How to set up a Smart IFU page

{{< steps >}}
{{< step title="Open Smart IFUs in the Admin console" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai). In the sidebar, click **Admin console**, then {{< ui-path "Smart IFUs" >}}. If this is your first page, click **Create the first one**. Otherwise click **New page**.

The **New Smart IFU** window opens: "A public page for one product, answered from its own documentation."
{{< /step >}}

{{< step title="Name the manufacturer and the device" >}}
Fill in:

- **Manufacturer**: "Northwind Vascular". This is printed on the sticker, so type it exactly. Lumen never guesses it from a document.
- **Company website (optional)**: your main site.
- **Device name (optional)**: "SL-4 securement device". Leave it blank and Lumen reads it from the documents.
- **Link**: the short address after `/d/`, for example `northwind-sl-4`. This is what the QR code encodes.
{{< /step >}}

{{< step title="Paste the product's literature link" >}}
Under **Documents**, paste the product page into **Literature page or document link**, then click **Find documents**. Lumen reads that page, follows the document links on it, and checks the manufacturer's eIFU portal where one exists.

If you already have the files, click **Add files** and upload them instead, or do both. If a link can't be read, Lumen offers **Upload the PDF instead**.
{{< /step >}}

{{< step title="Review the documents Lumen found" >}}
The **Choose the documents** step lists everything Lumen found. Each row shows the document's type, such as **Instructions for Use**, **Quick reference**, **Specifications** or **Brochure**, and how much weight it carries in an answer:

- **Clinical**: cited as a source. Use this for IFUs, procedures, and care and maintenance guides.
- **Reference**: cited as a source. Use this for FAQs, evidence summaries and standards.
- **Marketing**: informs answers but is never cited to a clinician.

Click **Preview** on any row to check it. Untick anything that isn't for this device, then click **Ingest** followed by the number of documents selected.
{{< /step >}}

{{< step title="Let Lumen build the library" >}}
The **Building the library** step shows each document being fetched, read and indexed. Page numbers and figures are kept, so citations can point to the exact page.

You can click **Continue in background** and come back later. Progress stays on the Smart IFUs page until it finishes. When it's done, click **Open the page**. The page is created as a **draft**: only you and other admins can use it.
{{< /step >}}

{{< step title="Check the documents and starter questions" >}}
On the device's admin page, look at **Documents**. Make sure the IFU is marked **Primary IFU**. If it isn't, open the document's menu and choose **Mark as primary IFU**.

Under **Starter questions**, click **Preview answers** to see how the first suggested questions are answered. Hide or edit any question you don't want visitors to see.
{{< /step >}}

{{< step title="Ask a test question" >}}
Click **Open the page (drafts answer only you and other admins)**, or choose **Preview the assistant** from the **More** menu. Ask a question the IFU answers, such as "How often should the SL-4 be replaced?"

Check that the answer lists the IFU under **Source**, with the page number after it, for example "SL-4 Instructions for Use · p. 6". Click the source to open the document at that page. Then ask something the IFU doesn't cover, and check that the page says so.
{{< /step >}}

{{< step title="Publish the page" >}}
When the answers look right, click **Publish**. The page is now live at its `/d/` link, and anyone who opens it can ask questions without an account. You can click **Unpublish** at any time.
{{< /step >}}

{{< step title="Print the QR sticker" >}}
Click **Sticker**. Choose a size: **Standard** (3 × 1 in), **Large** (4 × 1.5 in) or **Square** (2 × 2 in). Then click **Print**, **PDF** or **Save image**.

Previewing changes nothing. Once you download or print a sticker, the page's `/d/` link is fixed for good, because it's printed on the label. To print stickers for every live page at once, click **Print sheet** on the Smart IFUs page. It lays them out on US Letter paper with crop marks.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="smart-ifu-page" alt="A Smart IFU page for the SL-4 securement device, with an answer citing the IFU on page 6" caption="A published Smart IFU page. The source line under the answer names the document and page, and opens the PDF at that page." url="lumen.intracav.ai/d/northwind-sl-4" >}}
{{< chat-demo title="Northwind Vascular SL-4 securement device" caption="Illustration with a fictional device and IFU. Real pages cite your own documents." >}}
{{< user >}}How often should the SL-4 be replaced?{{< /user >}}
{{< lumen sources="1" >}}
The SL-4 can stay in place for up to 30 days. Replace it sooner if the adhesive lifts or the site shows signs of infection {{< cite 1 >}}.

Check the site at every dressing change {{< cite 1 >}}.

{{< sources >}}
{{< source n="1" title="SL-4 Instructions for Use · p. 6" meta="Northwind Vascular · Instructions for Use" quote="Replace the SL-4 at least every 30 days, or sooner if adhesion is compromised." >}}{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< user >}}Can I use it on a neonate?{{< /user >}}
{{< lumen sources="0" >}}
That isn't in the SL-4 documentation I have access to. Please check with Northwind Vascular before using it outside the labeled population.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check it worked

- The page shows **Live** in the Smart IFUs list, not draft.
- Scanning the printed QR code on a phone opens the page, with no sign-in.
- A question the IFU answers shows the IFU and a page number under **Source**, and the link opens the PDF at that page.
- A question the IFU doesn't cover gets a plain "That isn't in the … documentation I have access to" rather than a guess.

## Tips

- **Write starter questions the way a nurse would ask them.** "How do I remove it?" works better than "Removal procedure". The suggested questions in **What the documents suggest** are a good starting point.
- **Mark brochures as Marketing.** They can still help with product names and sizes, but they never appear as the source of a clinical answer.
- **Use company-wide knowledge for facts that apply to every device**, such as "Sizes are listed in French." It's shown to the assistant on every page for your company and never cited. Anything a clinician acts on belongs in a document, where it can be cited.
- **Watch for changes.** When a document changes on your website, its row shows **Changed at the source — review**. Nothing changes on the page until an admin approves it. See [IFU revisions](/connect/ifu-revisions/).

## Limits and safety

- **Public by design.** Visitors don't sign in, so anything in the documents can be read by anyone with the link.
- **Answers come only from the documents you added.** If the IFU doesn't cover a question, the page says so. It doesn't fill gaps from general knowledge.
- **Citations show the document and page**, not a section or paragraph.
- **The link is fixed once stickers exist.** Changing it afterwards would break every printed sticker, so choose it carefully before you print.
- **It isn't a patient product.** The page answers questions about your documentation. It doesn't give individual medical advice.

{{< callout type="safety" title="Clinicians stay in charge" >}}
A Smart IFU page helps people find the right page of your IFU. It doesn't replace the IFU or clinical judgment. Review test answers against the IFU before you publish, and again after every document change.
{{< /callout >}}

## FAQ

{{< faq question="Do visitors need a Lumen account?" >}}
No. A published Smart IFU page is public. Anyone who scans the sticker or opens the link can read the starter questions and ask their own.
{{< /faq >}}
{{< faq question="What happens when we update the IFU?" >}}
Lumen re-checks the document's source. When it changes, the document is flagged for review with a summary of what changed, and nothing is applied until an admin approves it. You can also choose **Re-read documents** from the page's **More** menu.
{{< /faq >}}
{{< faq question="Can one IFU serve several devices?" >}}
Yes. Documents belong to your company library, so you can add the same IFU to several device pages with **From company library**. A change to the document applies everywhere it's used.
{{< /faq >}}
{{< faq question="Which plan do we need?" >}}
Self-serve Smart IFU pages need Lumen Max for your organization. See [Plans](/plans/).
{{< /faq >}}

## Next steps

{{< related "/connect/smart-ifu/" "/connect/ifu-revisions/" "/guides/launch-a-website-assistant/" "/connect/leads-and-analytics/" >}}
