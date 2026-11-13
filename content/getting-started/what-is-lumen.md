---
title: "What is Lumen?"
description: "Lumen is the clinical AI workspace from Intracav: cited answers, specialists that take on multi-step work, your own knowledge and policies, in one place."
lead: "A two-minute overview for anyone new to Lumen: what it is, who uses it, and how it keeps answers checkable."
weight: 1
icon: lumen
hideOrientation: true
glance:
  what: "Lumen is a clinical AI workspace. You ask questions in plain language, and Lumen answers with sources you can open and check."
  who: "Clinicians and staff, hospitals and health systems, and medical device makers."
  why: "To get trustworthy answers and finished work, such as notes, letters, handouts and reviews, faster, without losing sight of where the information came from."
  needs: "A web browser and a free account at lumen.intracav.ai. Some features need a paid plan or a team account."
  result: "A clear picture of what Lumen can do for you, and where to start."
---

Lumen is a workspace where you can ask clinical questions, hand off multi-step work and keep your team's knowledge in one place. It is made by **Intracav**. Lumen looks things up in clinical databases, guidelines, the literature and your own documents. It tells you where each part of its answer came from, so you can check it before you rely on it.

## What you can do with Lumen

{{< card-grid cols="2" >}}
{{< card title="Ask and get cited answers" href="/chat/" icon="message" tint="blue" >}}Ask about a drug, a code, a guideline or a patient scenario. Numbered citations link each statement to the passage it came from.{{< /card >}}
{{< card title="Hand off work to a specialist" href="/skills-and-specialists/" icon="user-round-check" tint="plum" >}}Specialists take on multi-step work, such as a medication review or a prior authorization letter, and show each step as they go.{{< /card >}}
{{< card title="Use your own knowledge" href="/knowledge/" icon="library" tint="green" >}}Upload documents, organize them in folders, and turn on Knowledge Packs so answers draw on material you trust.{{< /card >}}
{{< card title="Run work on a schedule" href="/workflows/" icon="workflow" tint="green" >}}Workflows run on their own, such as a weekly device-recall watch or an evidence alert, and keep a history of every run.{{< /card >}}
{{< /card-grid >}}

For organizations, Lumen adds shared knowledge, departments and an audit log. **qPolicy** manages policies and compliance. **Lumen Connect** lets device makers publish instructions for use that answer questions and cite the exact page.

## How a Lumen answer works

When you ask a question, Lumen doesn't answer from memory alone. It decides which tools to use, looks the information up, and then writes an answer that cites what it found.

{{< flow >}}
{{< flow-node kicker="You ask" title="A plain-language question" icon="message" tint="blue" >}}Type it as you would ask a colleague.{{< /flow-node >}}
{{< flow-node kicker="Lumen looks it up" title="Tools and sources" icon="search" tint="plum" >}}Drug databases, guidelines, PubMed, your documents.{{< /flow-node >}}
{{< flow-node kicker="You check" title="An answer with citations" icon="quote" tint="green" >}}Each claim links to the passage it came from.{{< /flow-node >}}
{{< /flow >}}

{{< screenshot src="chat-cited-answer" alt="A Lumen answer with numbered citations and the sources panel open" caption="A cited answer. The numbered chips match the sources listed below the answer." url="lumen.intracav.ai" >}}
{{< chat-demo title="Renal dosing question" caption="Illustration with a fictional patient. Real answers cite real, checkable sources." >}}
{{< user >}}Does apixaban need a dose change for a patient with a creatinine clearance of 25?{{< /user >}}
{{< lumen thought="4" tools="Renal dosing, Drug label" sources="3" evidence="true" >}}
The usual dose reduction for apixaban in atrial fibrillation is based on **two of three** criteria: age 80 or older, weight 60 kg or less, and serum creatinine 1.5 mg/dL or higher {{< cite 1 >}}. Creatinine clearance alone isn't one of those criteria {{< cite 1 >}}, but data are limited below a CrCl of 25 mL/min {{< cite 2 >}}.

Check the patient's age, weight and serum creatinine against the label before deciding {{< cite 3 >}}.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

Below each answer you'll see how many sources were used, and often an evidence grade such as **Strong support**, **Moderate support** or **Limited support**. Click the grade to open the **Lumen Evidence** panel and see how well each statement is supported by the sources Lumen read. Open any source to read the original passage.

## Who uses Lumen

{{< tabs >}}
{{< tab name="Clinicians and staff" >}}
Nurses, physicians, pharmacists, educators and coders use Lumen to check drug interactions, draft notes and letters, find codes, write patient handouts and review the literature. Start with [Ask your first question](/getting-started/first-chat/).
{{< /tab >}}
{{< tab name="Hospitals and health systems" >}}
Teams use Lumen to answer staff questions from their own policy manual, manage policy reviews and sign-offs in **qPolicy**, organize knowledge by department, and keep a tamper-evident record of activity. Start with [Lumen for organizations](/organizations/).
{{< /tab >}}
{{< tab name="Medical device makers" >}}
Device companies use **Lumen Connect** to turn instructions for use (IFUs) into **Smart IFU pages** and **website assistants**. These answer questions and cite the exact page of the IFU, and they say plainly when the documentation doesn't cover something. Start with [Lumen Connect](/connect/).
{{< /tab >}}
{{< tab name="Developers" >}}
Developers use the Lumen API, embed the website assistant, connect tools over MCP, and use **Lumen UI**, the component system behind Lumen's interactive answers. Start with [Developers](/developers/).
{{< /tab >}}
{{< /tabs >}}

## How Lumen keeps you in control

- **Sources you can check.** Answers cite the passage they came from. If Lumen can't find support for something, it says so.
- **Specialists ask before acting.** When a specialist wants to do something outside Lumen, such as send an email, it waits for your approval and runs exactly as you approved it. (Workflows you build run their steps as you set them up.)
- **Work continues if you close the tab.** Answers and specialist work run on Lumen's servers, so you can close your laptop and pick up where you left off, on any device.
- **A record of activity.** Team activity is written to a tamper-evident audit log.

{{< callout type="safety" title="Lumen supports clinical judgment. It doesn't replace it." >}}
Lumen can be wrong. Before acting on an answer, open the cited sources, check them against your organization's policies, and use your professional judgment. Don't enter information you're not permitted to share. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

## Plans at a glance

Lumen has four plans: **Free**, **Pro**, **Plus** and **Max**. You can start free. Some features, such as more specialists, team features, qPolicy and Smart IFU self-serve, need a higher plan. Pages in these docs show a plan badge where it matters. See [Plans](/plans/) for the comparison, and [intracav.ai](https://intracav.ai) for pricing.

## FAQ

{{< faq question="Is Lumen a replacement for clinical references or my EHR?" >}}
No. Lumen looks things up in references and cites them, so it works alongside the references you already use. It isn't an electronic health record.
{{< /faq >}}
{{< faq question="Where do Lumen's answers come from?" >}}
From the tools and sources it uses for each question: clinical databases, published guidelines, PubMed, ClinicalTrials.gov, the web, and any documents or Knowledge Packs you've given it. Every answer lists the sources it used. See [Where answers come from](/chat/sources/).
{{< /faq >}}
{{< faq question="Do I need to install anything?" >}}
No. Lumen runs in your web browser at [lumen.intracav.ai](https://lumen.intracav.ai). Desktop and phone options are described in [Get started](/getting-started/).
{{< /faq >}}

## Next steps

{{< related "/getting-started/first-chat/" "/chat/sources/" "/skills-and-specialists/" "/plans/" >}}
