---
title: "Frequently asked questions"
navTitle: "FAQ"
description: "Short, complete answers to common questions about Lumen from clinicians, hospitals, device makers and privacy teams, with links to go deeper."
lead: "Real questions, answered briefly and fully. Each answer links to the page with the details."
weight: 1
icon: help
glance:
  what: "Answers to the questions people ask most about Lumen, the clinical AI workspace from Intracav."
  who: "Clinicians and staff, hospital and health-system leaders, medical device makers, and privacy or compliance reviewers."
  why: "To get a straight answer quickly, and know where to read more."
  needs: "Nothing. Questions are grouped by audience."
  result: "An answer, or the right page to open next."
---

**Lumen** is a clinical AI workspace made by **Intracav**. You ask questions in plain language and Lumen answers with sources you can open and check. It can also take on multi-step work, use your own documents and policies, and, for device makers, answer questions from instructions for use. The questions below are grouped by who usually asks them.

## Getting started

{{< faq question="What is Lumen, in one sentence?" >}}
A workspace where clinicians and organizations get cited answers, hand off multi-step work to AI Specialists, and keep their own knowledge in one place. Read [What is Lumen?](/getting-started/what-is-lumen/).
{{< /faq >}}

{{< faq question="Do I need to install anything?" >}}
No. Lumen runs in your web browser at [lumen.intracav.ai](https://lumen.intracav.ai). Other ways to use it, such as pairing your phone with **Satellite**, are described in [On your devices](/getting-started/on-your-devices/).
{{< /faq >}}

{{< faq question="How much does it cost?" >}}
Lumen has four plans. **Free** and **Pro** are for individuals. **Plus** and **Max** are team plans billed per seat. qPolicy is an add-on to Max. You can start free. The docs don't list prices; see [intracav.ai](https://intracav.ai) for pricing and [Plans](/plans/) for what each includes.
{{< /faq >}}

{{< faq question="What happens when I reach my message limit?" >}}
A **Rate limited** banner shows a countdown. When it reaches zero, press **Retry**. Your message isn't lost. On team plans, members share one allowance. See [Troubleshooting](/help/troubleshooting/).
{{< /faq >}}

## For clinicians

{{< faq question="Can I trust Lumen's answers?" >}}
Trust them the way you'd trust a well-referenced colleague: check the sources. Lumen cites the passage behind each claim, removes citations to sources it didn't actually retrieve, and says when it can't find support. It can still be wrong. See [Hallucinations and grounding](/learn/hallucinations-and-grounding/).
{{< /faq >}}

{{< faq question="Does Lumen replace my clinical judgment or my references?" >}}
No. Lumen supports clinical judgment and works alongside the references you already use. It isn't an electronic health record and it doesn't make decisions. You own every decision.
{{< /faq >}}

{{< faq question="What are Specialists and Skills?" >}}
A **Specialist** is an AI agent built for one kind of job, such as **Medication Review** or **Prior Authorization**. Type `@` to call one. A **Skill** is a ready-made procedure for one kind of output, such as `/soap-note`. Type `/` to use one. Browse both in **Explore**. See [Specialists and Skills](/skills-and-specialists/).
{{< /faq >}}

{{< faq question="Can Lumen draft notes, letters and handouts?" >}}
Yes. It can draft notes, discharge summaries, prior authorization letters and patient handouts from the details you give it, and save them as Word, PDF and other files. You review and edit before anything is used. Try [Draft a note](/getting-started/draft-a-note/).
{{< /faq >}}

{{< faq question="What files can I attach?" >}}
PDF, Word, PowerPoint, Excel, CSV, text, Markdown, HTML, email and images. Lumen reads them, answers questions about them and cites the passages it used. Scans and pictures are read by text recognition on Lumen's servers. See [Attachments](/chat/attachments/).
{{< /faq >}}

{{< faq question="If I close the tab, do I lose the answer?" >}}
No. Chats and Specialist work run on Lumen's servers and keep going, up to about an hour per task. Reopen the chat on any device to see the result. If Lumen's servers fail mid-answer, the reply is marked interrupted and the partial text is kept; ask again to finish it.
{{< /faq >}}

{{< faq question="Does Lumen remember me between chats?" >}}
Yes, if memory is on. It keeps a short list of facts about you and how you work, which you can review, edit, clear or turn off in {{< ui-path "Settings" "Memory" >}}. It's built not to save patient details. See [How AI memory works](/learn/ai-memory/).
{{< /faq >}}

## For hospitals and health systems

{{< faq question="How do we set up Lumen for our organization?" >}}
Choose a team plan (Plus or Max). In Lumen an organization is called a **team**. Admins add members, organize them into **Departments**, share **Folders** and turn on **Knowledge Packs** from the **Admin console**. See [Lumen for organizations](/organizations/).
{{< /faq >}}

{{< faq question="Can staff get answers from our own policy manual?" >}}
Yes, with **qPolicy**, an add-on to Lumen Max. It answers from your own policy manual and cites the specific policy version. It also manages review, approval and staff attestation. Nothing publishes automatically. See [qPolicy](/qpolicy/).
{{< /faq >}}

{{< faq question="Is there an audit trail?" >}}
Yes. Team activity is written to a tamper-evident (hash-chained) audit log, which means any later change to a record can be detected. See [Audit and access](/organizations/audit-and-access/).
{{< /faq >}}

{{< faq question="Does Lumen connect to our EHR?" >}}
Lumen supports SMART on FHIR, the standard for giving apps scoped, logged access to EHR data, and CDS Hooks for advisory cards. Connections are read-only by default and are set up by your admins and IT team with Intracav. See [SMART on FHIR](/learn/smart-on-fhir/) and [EHR integration](/organizations/ehr/).
{{< /faq >}}

{{< faq question="Can a Specialist send emails or change records without us knowing?" >}}
No. Any action that leaves Lumen, such as sending an email, waits on an approval card. It runs only after someone presses **Approve**, and exactly as shown. Typing "I approve" in the chat does nothing. See [Approvals](/skills-and-specialists/approvals/).
{{< /faq >}}

## For medical device makers

{{< faq question="What is a Smart IFU page?" >}}
A public web page built from your instructions for use (IFU). Visitors ask questions and get answers that cite the document and page number. Visitors don't need to sign in, and you can print QR sticker sheets that link to it. Self-serve setup needs Lumen Max. See [Smart IFU](/connect/smart-ifu/).
{{< /faq >}}

{{< faq question="What does the website assistant say when our documents don't cover a question?" >}}
It says the documentation doesn't cover it instead of guessing. It answers only when a passage in your documents is a close enough match, and its citations show the document and page. See [Website assistant](/connect/website-assistant/).
{{< /faq >}}

{{< faq question="Which CRMs can receive leads?" >}}
**Zoho CRM** and **HubSpot**, with field mapping, plus signed webhooks for other systems. See [CRM and webhooks](/connect/crm-and-webhooks/).
{{< /faq >}}

{{< faq question="What happens when we publish a new IFU revision?" >}}
Lumen watches your sources and, when a document changes, creates a pending revision with a summary of the differences. It's never applied until an admin approves it. See [IFU revisions](/connect/ifu-revisions/).
{{< /faq >}}

## Privacy and security

{{< faq question="How does Lumen protect patient information?" >}}
Lumen is built with security safeguards: encryption, access controls and a tamper-evident audit log. Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. See [Privacy and data](/trust/privacy/).
{{< /faq >}}

{{< faq question="Does Lumen de-identify what I type?" >}}
Lumen de-identifies text automatically before model calls in **Lumen Research** and the **website assistant**. Elsewhere, don't rely on automatic de-identification: remove identifiers yourself, or ask Lumen's de-identify tool to do it (paid plans). See [De-identification](/learn/deidentification/).
{{< /faq >}}

{{< faq question="Who can see my chats?" >}}
Your chats are yours unless you share them. A share link carries the conversation's content, so read it before you send it. In a team, admins manage members and can review the audit log. See [Privacy and data](/trust/privacy/).
{{< /faq >}}

{{< faq question="Which AI model does Lumen use?" >}}
Lumen selects the model by plan. There's no model picker, and Lumen doesn't switch between AI vendors per question. Facts in answers come from tools and cited sources, not the model's memory. See [AI models](/learn/choosing-models/).
{{< /faq >}}

## Still have a question?

Search the [help center](/help/), look up a word in the [glossary](/help/glossary/), or email [support@intracav.ai](mailto:support@intracav.ai).

## Next steps

{{< related "/getting-started/what-is-lumen/" "/help/troubleshooting/" "/help/glossary/" "/plans/" >}}
