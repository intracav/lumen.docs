---
title: "Launch a website assistant on your site"
navTitle: "Launch a website assistant"
description: "Put a Lumen website assistant on your website: give it your documents, test it, allow your domain, paste one snippet, and capture leads."
lead: "A chat button on your website that answers from your own documents, shows the document and page behind each answer, and says so when your documents don't cover a question."
weight: 13
icon: globe
who: "device makers and team admins"
aliases: ["/guides/launch-a-website-bot/"]
glance:
  what: "A website assistant is a chat button on your public website. Visitors ask questions and it answers only from the documents you give it, citing the document and page."
  who: "Medical device makers and other organizations: marketing, clinical education, customer support and web teams."
  why: "Visitors get accurate, checkable answers at any hour, your team gets leads with the conversation attached, and you see which questions your documentation doesn't answer."
  needs: "A Lumen team with Website assistants turned on (on by default for teams set up as a medical-device manufacturer), the Admin role, your public documents, and someone who can edit your website's HTML. About 30 minutes."
  result: "A tested assistant, live on your allowed domains, with lead capture on and an optional CRM connection."
---

Northwind Vascular (a fictional company) gets the same questions every day from nurses and buyers: which sizes the SL-4 comes in, how long it can stay in place, and whether it's compatible with a given catheter. The answers are in the IFU and the product brochures. A website assistant answers those questions on northwind-vascular.example, shows the IFU page each answer came from, and hands the conversation to sales when a visitor wants a quote.

Your organization is called a *team* in Lumen.

## Before you start

- **Product.** You need **Website assistants** in your Admin console. It's on by default for teams set up as a **Medical-device manufacturer**. Other teams ask Intracav to turn it on. See [Plans](/plans/).
- **Role.** You need to be an admin of your team.
- **Documents.** Public material only: IFUs, quick-reference guides, specifications, FAQs and brochures. PDFs keep their page numbers, so citations can point to the page.
- **Your website.** Someone who can add a snippet to your site's HTML, and the list of domains the assistant will run on, including any staging site.

{{< callout type="important" title="Everything you give the assistant is public" >}}
Anyone on the internet can ask the assistant questions, and its answers can draw on every document it's given. Lumen asks you to confirm **Publish to the public web?** before a Knowledge Pack is added. Never add internal procedures, pricing sheets or patient information.
{{< /callout >}}

## How to launch a website assistant

{{< steps >}}
{{< step title="Create the assistant" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai). In the sidebar, click **Admin console**, then {{< ui-path "Website assistants" >}}. Click **New assistant**.

In **New website assistant**, type a **Name**, such as "Northwind product assistant", and optionally the **Page URL (optional)** where it will appear. Click **Create assistant**. Each assistant gets its own Knowledge Pack, install snippet, leads and analytics.

Prefer a walkthrough? Choose **Guided setup** from the **More** menu instead.
{{< /step >}}

{{< step title="Give it your documents" >}}
Open the assistant and go to {{< ui-path "Knowledge" >}}. Either:

- click **Upload PDF** to add IFUs and manuals to the assistant's own pack, or
- click **Add a knowledge pack** to connect a pack your team already has. Confirm **Publish to the public web?** with **Publish**.

Wait until the documents finish processing.
{{< /step >}}

{{< step title="Add always-on guidance (optional)" >}}
On the same page, **Facts the assistant always knows** holds short facts the assistant always gets but never cites, such as "We ship to the US and Canada only." This is the assistant's *always-on guidance*. Keep it short. Anything a clinician might act on belongs in a document, where it can be cited.
{{< /step >}}

{{< step title="Set how it looks and sounds" >}}
Go to {{< ui-path "Assistant" >}}. Here you set **What visitors see**, the **Voice** (choose a **Tone**, such as **Clinical — precise, formal**), up to a few **Starter questions**, the **Disclaimer and links**, and **Branding** for the chat button.
{{< /step >}}

{{< step title="Test it before anyone else does" >}}
Click **Preview** on the Knowledge page. The preview "Answers with the settings on screen, saved or not. Nothing here is stored or seen by visitors."

Ask three kinds of question:

- one your IFU answers, such as "How long can the SL-4 stay in place?" Check that the answer cites the IFU with a page number.
- one your brochure answers, such as "What sizes does the SL-4 come in?"
- one your documents don't cover. Check that the assistant says it isn't in the documentation rather than guessing.

Open **Why this answer** under a reply to see which documents were cited and which were used only as background.
{{< /step >}}

{{< step title="Allow your website's domains" >}}
Go to {{< ui-path "Install & CRM" >}}. Under **Website embed widget**, type each domain that will host the assistant, such as `https://www.northwind-vascular.example`, and click **Add domain**. The widget loads only on domains you allow. Subdomain wildcards such as `https://*.northwind-vascular.example` also work.
{{< /step >}}

{{< step title="Copy the snippet to your site" >}}
Under **Chat button (recommended)**, click **Copy**. Paste the snippet once, just before `</body>`, on every page of your site. It shows a chat button and knows which page it's on.

**Advanced: fixed frame** places the chat inside a page at a fixed size instead. It doesn't know which page it's on, so use it only when you need an embedded panel.
{{< /step >}}

{{< step title="Turn on lead capture" >}}
Go to {{< ui-path "Lead capture" >}} and switch on **Offer a contact form** so visitors can leave their details for a follow-up. Leads appear under {{< ui-path "Leads" >}} with the conversation attached.
{{< /step >}}

{{< step title="Connect your CRM (optional)" >}}
In {{< ui-path "Install & CRM" >}}, under **Connect your CRM**, pick **Zoho** (Zoho CRM) or **HubSpot** and sign in. Set the field mapping, click **Save mapping**, then **Send test record** to confirm a contact arrives in your CRM.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="assistant-install" alt="The Install and CRM page for a Lumen website assistant, showing allowed domains and the chat button snippet" caption="Install & CRM. Add your domains, then copy the chat button snippet into your site." url="lumen.intracav.ai/org/northwind/admin/bots" >}}
{{< chat-demo title="Northwind product assistant" caption="Illustration with a fictional company and IFU. A real assistant cites your own documents." >}}
{{< user >}}How long can the SL-4 stay in place?{{< /user >}}
{{< lumen sources="1" >}}
The SL-4 can stay in place for up to 30 days. Replace it sooner if the adhesive lifts {{< cite 1 >}}.

{{< sources >}}
{{< source n="1" title="SL-4 Instructions for Use · p. 6" meta="Northwind Vascular · PDF" quote="Replace the SL-4 at least every 30 days, or sooner if adhesion is compromised." >}}{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< user >}}Is it MRI safe?{{< /user >}}
{{< lumen sources="0" >}}
That isn't in the SL-4 documentation I have access to. You can leave your details and the Northwind team will follow up.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check it worked

- The chat button appears on your live site, and on no other site.
- A question your IFU answers shows the document and page under the reply.
- A question your documents don't cover gets a plain "not in the documentation" answer.
- A test lead from the contact form appears under **Leads**, and in your CRM if you connected one.

## Tips

- **One assistant per audience.** A team can run several assistants, for example one per product line, each with its own documents and snippet.
- **Read Analytics after a week.** {{< ui-path "Analytics" >}} shows topics, products and questions the assistant couldn't answer from your documents. Those are the documents to write next.
- **Put it on specific pages.** The **Site map** view lets you place an assistant on particular pages, with a page-specific welcome and starter questions, and publish or pause it per page.
- **Set daily limits.** {{< ui-path "Access" >}} has **Daily quotas** and **Moderation** to protect against misuse.

## Limits and safety

- **Answers come only from your documents.** The assistant declines when nothing relevant is found, when a question hits a topic you've blocked, or when moderation stops it.
- **Citations show the document and page**, not a section or paragraph.
- **Privacy.** Visitor messages are de-identified before they're sent to the AI model. Conversation transcripts are kept for 90 days by default.
- **CRM destinations are Zoho CRM and HubSpot.** Signed webhooks are available for anything else. Zoho SalesIQ can also route chats to the assistant.
- **Analytics are per assistant.** There are no per-team views or categorized decline reports.

{{< callout type="safety" title="An assistant is not a clinician" >}}
The assistant helps people find what your documentation says. It doesn't give individual medical advice. Review test answers against your documents before going live, and again whenever documents change.
{{< /callout >}}

## FAQ

{{< faq question="Can someone copy our snippet onto their own site?" >}}
It won't work there. The widget loads only on the domains you allow.
{{< /faq >}}
{{< faq question="What happens when a question isn't in our documents?" >}}
The assistant says the documentation doesn't cover it and, if lead capture is on, offers a way to reach your team. These questions appear in Analytics so you can fill the gap.
{{< /faq >}}
{{< faq question="Does it work with Salesforce?" >}}
Not directly. Lead sync supports Zoho CRM and HubSpot. For other systems, use signed webhooks from {{< ui-path "Install & CRM" >}}.
{{< /faq >}}
{{< faq question="Is a website assistant the same as a Smart IFU page?" >}}
No. A website assistant lives on your website and covers whatever documents you give it. A Smart IFU page is a separate public page for one device, opened from a QR sticker. See [Set up a Smart IFU page](/guides/set-up-a-smart-ifu/).
{{< /faq >}}

## Next steps

{{< related "/connect/website-assistant/" "/connect/leads-and-analytics/" "/connect/crm-and-webhooks/" "/developers/embed/" >}}
