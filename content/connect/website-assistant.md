---
title: "Add a website assistant to your site"
navTitle: "Website assistant"
description: "Embed a Lumen website assistant that answers from your approved documents, cites the document and page, declines when it can't find support, and captures leads."
lead: "A chat assistant for your own website that answers from the documents you choose, shows the document and page behind each answer, and says so when your documentation doesn't cover a question."
weight: 2
icon: message
who: "device makers"
aliases: ["/organizations/website-bots/"]
keywords: ["medical device website assistant", "website chat for medical device companies", "cited answers"]
glance:
  what: "A website assistant is a chat window you embed on your own site. It answers visitors' questions from documents your team approved, and each answer cites the document and page."
  who: "Marketing, regulatory, customer support and web teams at medical device, diagnostics and supply companies."
  why: "Visitors get accurate answers in seconds, your reviewers can trace every answer to approved labeling, and your team sees what people ask."
  needs: "A Lumen team account with website assistants turned on (on by default for device-maker teams), the owner or admin role, your documents, and access to your website's code. About an hour for a first assistant."
  result: "A live assistant on your site, limited to your domains, answering from your documents with page-level citations."
---

Visitors to a device maker's website ask specific questions: which sizes are available, whether a product is compatible with another, what the instructions say about a step. A **website assistant** answers those questions from the documents your team approved, such as instructions for use (IFUs), specifications and compatibility charts. Every answer names the document and page it came from, so a visitor can check it and your regulatory team can review it. When nothing in your documents supports an answer, the assistant says the information isn't in your documentation.

## Before you start

- **A team account with website assistants turned on.** Your company's Lumen account (called a *team* in Lumen) needs the website assistants feature. It's on by default for device-maker teams. Otherwise, Intracav turns it on for you.
- **The owner or admin role** on that team.
- **Your documents.** PDFs of your IFUs and other approved material, or an existing [Knowledge Pack](/knowledge/knowledge-packs/), which is a curated collection of documents Lumen can search.
- **Your website's addresses,** such as `https://www.northwindvascular.example`, and someone who can add a script tag to the site.

## How to set up a website assistant

{{< steps >}}
{{< step title="Create the assistant" >}}Open {{< ui-path "Admin console" "Website assistants" >}} and click **New assistant**. To be walked through each part, click **Guided setup** instead.{{< /step >}}
{{< step title="Describe the assistant" >}}On the **Assistant** tab, set how the assistant introduces itself to visitors. The **Preview** pane shows how it answers with the settings on screen, saved or not. Nothing in the preview is stored or seen by visitors.{{< /step >}}
{{< step title="Add its knowledge" >}}On the **Knowledge** tab, add documents or an existing Knowledge Pack. For each document, choose whether it can be **cited** as a source or only used as **background**. Background documents inform answers but never appear as citations.{{< /step >}}
{{< step title="Set access and safety" >}}On the **Access** tab, turn on {{< ui-path "Moderation" "Screen visitor messages" >}} and set **Daily quotas** for messages, sessions and leads (0 means unlimited).{{< /step >}}
{{< step title="Allow your domains" >}}Open **Install & CRM**, then the **Allowed domains** tile, and add each address the assistant may appear on, such as `https://www.northwindvascular.example`. To cover every subdomain, add `https://*.northwindvascular.example`. The bare domain needs its own entry.{{< /step >}}
{{< step title="Try it before you go live" >}}On **Install & CRM**, use **Try the assistant**. Ask questions your documents answer, and one they don't, and check both replies.{{< /step >}}
{{< step title="Install it on your site" >}}Under **Install on your website**, choose **Chat button (recommended)** and click **Copy snippet**. Paste the snippet into your site's pages, before the closing body tag. If the snippet has no key yet, open the **API keys** tile and click **Mint publishable key** first.{{< /step >}}
{{< /steps >}}

The snippet looks like this. It adds a chat button to the corner of the page that opens the assistant.

```html
<script src="https://api.intracav.ai/embed/loader.js"
  data-assistant="northwind-vascular"
  data-key="pk_…"
  async></script>
```

The *publishable key* (it starts with `pk_`) is safe to put in a web page. It can only start visitor conversations. It can't read your data. If you need the assistant in a fixed place on a page instead of a button, use **Advanced: fixed frame** and **Copy frame**. For the technical details, see [Embed the website assistant](/developers/embed/).

### Customize the welcome for one page (optional)

Different pages can greet visitors differently while using the same assistant and the same knowledge. On {{< ui-path "Admin console" "Website assistants" >}}, switch from **Assistants** to **Site map**, open a page, and click **Customize welcome for this page**. Set a **Welcome message** and **Starter questions**, then click **Save for this page**. You can **Publish** or **Pause** the assistant on each page. To answer from different documents, create a separate assistant.

## What you'll see

{{< screenshot src="assistant-overview" alt="A website assistant answering a product question with a source chip showing the document and page" caption="An answer cites the document and page. Visitors can open the source at that page." url="northwindvascular.example" >}}
{{< chat-demo title="Northwind Vascular assistant" caption="Fictional company and content. The assistant answers only from the documents Northwind Vascular approved." >}}
{{< user >}}What catheter sizes does the SL-4 securement device fit?{{< /user >}}
{{< lumen sources="1" actions="false" >}}
The SL-4 securement device is labeled for the catheter sizes listed in its instructions for use {{< cite 1 >}}. Check the size table on that page before use.

{{< sources >}}
{{< source n="1" title="SL-4 Securement Device, Instructions for Use · p. 4" meta="Northwind Vascular · IFU" >}}Indications and compatible catheter sizes.{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< user >}}Can I use it on a patient in an MRI scanner?{{< /user >}}
{{< lumen actions="false" >}}
That information isn't in the Northwind Vascular documents I have access to. Please contact Northwind Vascular's customer support for an answer.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

The assistant's hub in the Admin console has two groups of tabs:

| Group | Tabs |
|---|---|
| **Performance** | **Overview**, **Conversations**, **Leads**, **Reports**, **Analytics** |
| **Setup** | **Assistant**, **Knowledge**, **Lead capture**, **Install & CRM**, **Access** |

## How the assistant decides what to say

- **It searches your documents first.** Each question is matched against the documents you added. Only passages that are a close enough match are given to the model.
- **It declines when nothing matches.** When no passage meets the similarity threshold, the assistant is instructed to say the information isn't in your documents and point the visitor to you, instead of answering from general knowledge.
- **Clinical-use questions are in scope.** Questions about how to use the device are answered when your documents cover them, because that's what an IFU is for.
- **Citations show the document and page.** Sources appear as the document title with the page, such as "p. 4" or "pp. 4–5". A visitor can open the original file at that page.
- **Identifiers are removed before the model sees them.** If a visitor types a name, date of birth, phone number or similar identifier, Lumen replaces it before the question goes to the external AI model, and restores it in the reply.
- **Moderation screens messages.** With **Screen visitor messages** on, a flagged message gets a polite refusal instead of an answer.

### Blocked topics

A *blocked topic* is a subject your team doesn't want the assistant to discuss at all, such as off-label use or competitor comparisons. When a visitor's message contains a blocked phrase, the assistant replies with the response you wrote for that topic, or "I can't help with that topic here. Please contact the organization directly." The model isn't called. Today, blocked topics are set by asking [Super User](/organizations/super-user/), the admin assistant in the Admin console (Max).

## Good to know

- **Visitors don't sign in.** Each visitor gets a short-lived, anonymous session.
- **Your branding updates everywhere.** The assistant's name, colors and welcome come from its settings, so a change appears on every page the next time it loads.
- **Conversations are kept 90 days by default.** See [Leads and analytics](/connect/leads-and-analytics/).
- **You can run more than one assistant,** for example one per product line, each with its own knowledge.
- **Already use Zoho SalesIQ?** Lumen can answer inside your SalesIQ chat instead. See [Zoho SalesIQ](/developers/salesiq-webhook/).

## Limits and safety

- **It answers only from what you give it.** If your documents are out of date, its answers are too. Keep IFUs current with [IFU revisions](/connect/ifu-revisions/).
- **The refusal is written by the model.** Below the similarity threshold, the model is instructed to decline, so the exact wording can vary.
- **Blocked topics match phrases,** not meanings. Add the phrasings visitors are likely to use.
- **Usage limits apply.** Each conversation allows one message per second and up to 200 messages. Your daily quotas cap total use.
- **It isn't a medical device,** and Intracav claims no regulatory clearance for it. Review of the documents you load is your responsibility.

{{< callout type="important" title="Review what you make citable" >}}
Anything marked as citable can be shown to the public as a source. Before you publish, check that each citable document is current, approved labeling, and mark internal or marketing material as background only.
{{< /callout >}}

## FAQ

{{< faq question="Will the assistant make things up if it doesn't know?" >}}
It is built not to. Only passages that closely match the question reach the model, and when none do, the assistant is instructed to say the information isn't in your documentation. Test this with **Try the assistant** before you go live.
{{< /faq >}}
{{< faq question="Can someone copy our snippet onto their own site?" >}}
The assistant only appears inside pages on the domains you allowed. Browsers refuse to show it anywhere else.
{{< /faq >}}
{{< faq question="Does it work on mobile?" >}}
Yes. The chat button and window adapt to the screen, and follow the visitor's light or dark setting.
{{< /faq >}}
{{< faq question="Can it send leads to our CRM?" >}}
Yes. Leads can go to Zoho CRM, HubSpot, or any system through signed webhooks. See [CRM and webhooks](/connect/crm-and-webhooks/).
{{< /faq >}}

## Next steps

{{< related "/connect/leads-and-analytics/" "/connect/crm-and-webhooks/" "/developers/embed/" "/connect/smart-ifu/" >}}
