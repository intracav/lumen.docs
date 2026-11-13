---
title: "Lumen Connect for device makers"
navTitle: "Lumen Connect"
description: "Turn your instructions for use into Smart IFU pages and a website assistant that answer questions and cite the exact document and page."
lead: "Lumen Connect puts your approved product documentation to work: a Smart IFU page behind a QR code, and a website assistant on your own site. Both answer from your documents, cite the page, and say so when the documentation doesn't cover a question."
weight: 32
group: org
icon: globe
who: "device makers"
cascade:
  audience: org
glance:
  what: "Lumen Connect is the part of Lumen for medical device makers. It turns your instructions for use (IFUs) and product documents into Smart IFU pages and a website assistant that answer questions with the document and page cited."
  who: "Marketing, regulatory and quality, customer support, clinical education and sales operations teams at medical device, diagnostics and supply companies."
  why: "Clinicians and buyers get an answer they can trace to your approved labeling in seconds, your reviewers can check every answer, and your team sees what people actually ask."
  needs: "A Lumen team account for your company. Smart IFU self-serve setup needs Lumen Max. Your IFUs as PDFs or public links."
  result: "A clear picture of the two Connect surfaces, how they keep answers tied to your labeling, and where to start."
hideAutoGrid: true
---

People ask your products questions all day: which catheter sizes fit, how long a dressing can stay on, what to do when an alarm sounds. Today the answer is a PDF they have to search, a phone queue, or a generic AI chat tool that may say something your labeling doesn't. **Lumen Connect** answers those questions from your own approved documents, and every answer points to the document and page it came from. When your documentation doesn't cover a question, it says so instead of guessing.

## What Lumen Connect includes

{{< card-grid cols="2" >}}
{{< card title="Smart IFU pages" href="/connect/smart-ifu/" icon="qr" tint="green" kicker="For the point of use" >}}A public page for one device, built from its IFU. A clinician scans the QR code on the box or a sticker, asks a question, and gets an answer with the IFU page cited. No sign-in.{{< /card >}}
{{< card title="Website assistant" href="/connect/website-assistant/" icon="message" tint="blue" kicker="For your own website" >}}A chat assistant you embed on your site. It answers from the documents you choose, cites the document and page, captures leads, and refuses honestly when it can't find support.{{< /card >}}
{{< card title="IFU revision watch" href="/connect/ifu-revisions/" icon="refresh" tint="plum" kicker="Keeps content current" >}}Lumen re-checks your IFU sources. When a file changes, you get a pending revision with a summary of what changed. Nothing is applied until an admin approves it.{{< /card >}}
{{< card title="Leads, analytics and CRM" href="/connect/leads-and-analytics/" icon="chart" tint="accent" kicker="What visitors want" >}}See what visitors ask, which products come up, which questions your documents couldn't answer, and which conversations turned into leads. Send leads to Zoho CRM, HubSpot or a signed webhook.{{< /card >}}
{{< /card-grid >}}

## How it works

Both surfaces follow the same path: your documents go in, a person approves what is used, and answers come out with their source attached.

{{< flow >}}
{{< flow-node kicker="You add" title="Your documents" icon="upload" tint="blue" >}}IFUs, technical specifications, compatibility charts, training material.{{< /flow-node >}}
{{< flow-node kicker="An admin approves" title="What answers can use" icon="check-circle" tint="plum" >}}Choose what is cited and what only gives background.{{< /flow-node >}}
{{< flow-node kicker="Visitors ask" title="Cited answers" icon="quote" tint="green" >}}Each answer names the document and page.{{< /flow-node >}}
{{< /flow >}}

1. **Your documents are the only source for product answers.** Lumen searches the documents you added and writes the answer from what it finds. It isn't drawing on the open web for your product's facts.
2. **Each answer cites the document and page.** A visitor can open the source at the cited page. A reviewer on your team can trace any answer back to the labeling it came from.
3. **If nothing is close enough, it declines.** When none of your documents is a close enough match for the question, the assistant is instructed to say the information isn't in your documentation, rather than fill the gap from general knowledge.
4. **You decide what is off limits.** Your team can set blocked topics, such as off-label use or competitor comparisons, and turn on moderation to screen visitor messages.
5. **Changes wait for a person.** When a manufacturer's IFU changes at the source, the new copy is held until an admin approves it. Pages keep answering from the approved copy until then.

## Why page-level citations matter for a regulated company

For a device maker, what an assistant says about a product is product communication. Your regulatory and quality teams need to know that an answer matches approved labeling, and they need to be able to show it.

- **Reviewable.** A citation to the document and page means a reviewer can check an answer in seconds, rather than reconstructing where a sentence came from.
- **Consistent with labeling.** Answers come from the documents you approved, not from what a general model learned from the internet.
- **Honest about gaps.** A clear "that isn't in our documentation" is safer than a fluent guess, and each one shows you where your documentation has a gap.
- **Current.** When an IFU changes, the revision waits for your approval, so the public page and the label on the box don't drift apart silently.

{{< callout type="important" title="Lumen Connect isn't a medical device" >}}
Lumen Connect is a tool for publishing and answering from your documentation. It makes no diagnostic or treatment claims, and Intracav claims no FDA clearance or approval for it. Review, approval and regulatory sign-off of the documents you load remain your responsibility.
{{< /callout >}}

## Who on your team uses it

{{< tabs >}}
{{< tab name="Marketing" >}}
Put an assistant on product pages that answers from your approved materials, see which products and questions come up most, and capture leads with the conversation attached. Start with [Website assistant](/connect/website-assistant/).
{{< /tab >}}
{{< tab name="Regulatory and quality" >}}
Decide which documents are cited and which are background only, set blocked topics, and approve every IFU revision before it reaches a public page. Start with [IFU revisions](/connect/ifu-revisions/).
{{< /tab >}}
{{< tab name="Customer support and clinical education" >}}
Give clinicians a QR code that answers routine IFU questions with the page cited, and review the questions the documentation couldn't answer. Start with [Smart IFU pages](/connect/smart-ifu/).
{{< /tab >}}
{{< tab name="Sales operations" >}}
Send captured leads to Zoho CRM or HubSpot with field mapping, or to any system through signed webhooks. Start with [CRM and webhooks](/connect/crm-and-webhooks/).
{{< /tab >}}
{{< /tabs >}}

## Plans and setup

Lumen Connect runs inside a Lumen team account for your company (called a *team* in Lumen). Website assistants are part of the organization features. Setting up Smart IFU pages yourself needs **Lumen Max**. If your company's account was created as a hospital rather than a device maker, Intracav enables the Connect features for you. See [Plans](/plans/) for the comparison and [intracav.ai](https://intracav.ai) for pricing.

## FAQ

{{< faq question="What's the difference between a Smart IFU page and a website assistant?" >}}
A Smart IFU page is a public page for one device, hosted by Lumen and usually reached by QR code. A website assistant is a chat window you embed on your own website, and it can answer across many products. Both answer only from the documents you choose and cite the page.
{{< /faq >}}
{{< faq question="Does the assistant answer clinical-use questions?" >}}
Yes, when your documents cover them. Questions about how to use the device are in scope by default, because that is what an IFU is for. It declines when no document supports an answer, when a question hits one of your blocked topics, or when moderation stops it.
{{< /faq >}}
{{< faq question="Do visitors need an account?" >}}
No. Visitors to a Smart IFU page or your website assistant don't sign in.
{{< /faq >}}
{{< faq question="Can we keep marketing material out of the citations?" >}}
Yes. During Smart IFU setup, marketing material can inform answers in the background but is never cited. For a website assistant, you choose for each document whether it can be cited or is background only.
{{< /faq >}}

## Next steps

{{< related "/connect/smart-ifu/" "/connect/website-assistant/" "/connect/ifu-revisions/" "/connect/crm-and-webhooks/" >}}

{{< cta heading="See Lumen Connect with your own IFU" href="https://intracav.ai" label="Talk to Intracav" secondary-href="/plans/" secondary-label="Compare plans" >}}We'll walk through a Smart IFU page and a website assistant built from your documentation.{{< /cta >}}
