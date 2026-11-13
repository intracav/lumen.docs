---
title: "Review leads and analytics"
navTitle: "Leads and analytics"
description: "See what visitors ask your website assistant, which questions your documents couldn't answer, which products come up, and which conversations became leads."
lead: "Your website assistant's conversations show what clinicians and buyers want to know. The Analytics tab summarizes them, the Leads inbox tracks follow-up, and the Lead Intelligence Report puts a quarter on paper."
weight: 4
icon: chart
who: "device makers"
glance:
  what: "The Analytics tab, Leads inbox and Lead Intelligence Report for a website assistant: traffic, answer quality, topics, products, buying signals, unanswered questions and scored leads."
  who: "Marketing, sales operations, customer support and product teams at device makers running a website assistant."
  why: "To see what visitors actually ask, where your documentation has gaps, and which conversations deserve a follow-up."
  needs: "A live website assistant and the owner or admin role on your team. About 10 minutes."
  result: "A view of what visitors ask and want, a list of leads to work, and a quarterly report you can share."
---

Every question a visitor asks your website assistant is a signal: a product they're considering, a step in the IFU that's unclear, or a gap in your documentation. Lumen reads each conversation for intent, topics, products, buying signals, objections and sentiment, and flags questions your documents couldn't answer. You see the results on the **Analytics** tab, work the leads in an inbox, and generate a quarterly report.

## Before you start

- A [website assistant](/connect/website-assistant/) that has had some conversations.
- The **owner or admin** role on your team (called a *team* in Lumen).

## How to review analytics

{{< steps >}}
{{< step title="Open the assistant" >}}Open {{< ui-path "Admin console" "Website assistants" >}} and choose the assistant.{{< /step >}}
{{< step title="Open Analytics" >}}Click **Analytics** and choose **7 days**, **30 days** or **90 days**.{{< /step >}}
{{< step title="Read traffic and quality" >}}Under **Traffic**, the **Conversion funnel** shows how many visitors **Saw the assistant**, started **Conversations**, were **Engaged (sent a message)** and **Became a lead**. **Answer quality & grounding** shows grounded and ungrounded answers, visitor satisfaction and flagged answers.{{< /step >}}
{{< step title="Find the gaps" >}}Under **Insights**, open **Questions your assistant couldn't answer**. These are the questions to cover in your documentation next.{{< /step >}}
{{< step title="Read the conversation behind a number" >}}Open **Conversations** to read the transcripts behind the figures.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="assistant-analytics" alt="The Analytics tab for a website assistant, with the conversion funnel, top topics and unanswered questions" caption="The Analytics tab. Example figures are fictional." url="lumen.intracav.ai" >}}
{{< lui-block title="Northwind Vascular assistant · 30 days" >}}
{{< lui-stats >}}
{{< lui-stat label="Conversations" value="412" >}}
{{< lui-stat label="Engaged (sent a message)" value="298" >}}
{{< lui-stat label="Became a lead" value="23" >}}
{{< /lui-stats >}}
{{< lui-bars data="Catheter sizing:64,Replacement interval:41,Ordering:30,MRI questions:12" label="Top topics" color="blue" >}}
{{< lui-rows >}}
{{< lui-row title="Questions your assistant couldn't answer" body="Is the SL-4 safe in an MRI scanner? · Is there a pediatric size?" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

The Analytics tab is organized in three groups:

| Group | What it shows |
|---|---|
| **Traffic** | **Conversion funnel**, **Answer quality & grounding**, **Channel mix**, **Top topics**, **Knowledge pack usage**, **Top origins** and a daily series |
| **Where your visitors are** | **Top countries**, **Top states / regions** and **Top cities** |
| **Insights** | **What visitors want — and what converts**, **Questions your assistant couldn't answer**, **Products of interest**, **Buying signals**, **Objections** and **Visitor sentiment** |

## How to work leads

When a visitor leaves contact details, Lumen creates a lead with the conversation attached and gives it a score.

{{< steps >}}
{{< step title="Open the inbox" >}}Open **Leads** for the assistant, or the team-wide Leads area and its **Inbox**. Filter by **All**, **Unassigned** or **Follow-up due**.{{< /step >}}
{{< step title="Read why it scored" >}}Open a lead. **Why this score** shows the score on six dimensions: **Contactability**, **Authority**, **Intent**, **Urgency**, **Fit** and **Engagement**.{{< /step >}}
{{< step title="Move it along" >}}Set the stage: **New**, **Contacted**, **Qualified**, **Won** or **Lost**. Add context under **Notes & activity** with **Add note**.{{< /step >}}
{{< step title="Export if you need to" >}}Click **Export CSV** to download the list.{{< /step >}}
{{< /steps >}}

### How scoring works

Lumen scores a lead with a fixed rubric first. The AI model may adjust a dimension only when it can quote what the visitor said to justify it, and the quote is checked. Scores fall into bands: sales-ready, hot, warm and cold. A hot lead (a score of 80 or more) triggers an in-app alert to your team.

## How to generate a Lead Intelligence Report

The **Lead intelligence** report covers the last complete quarter. It summarizes demand, leads and the questions your documentation couldn't answer, in a PDF you can share.

{{< steps >}}
{{< step title="Open Reports" >}}Open the assistant's **Reports** tab, or **Reports** in the team-wide Leads area.{{< /step >}}
{{< step title="Generate the report" >}}Under **Lead intelligence**, click **Generate**. Lumen checks the written narrative against a frozen snapshot of the figures, so the text matches the numbers.{{< /step >}}
{{< step title="Download it" >}}When the report shows **Final**, click **Download PDF**.{{< /step >}}
{{< /steps >}}

## Good to know

- **Identifiers are removed before analysis.** Visitor messages are scrubbed of personal identifiers before they're sent to the model for analysis.
- **Unanswered questions are your content roadmap.** They show exactly what visitors wanted that your documents don't cover.
- **Leads can go to your CRM.** See [CRM and webhooks](/connect/crm-and-webhooks/).

## Limits

- **Transcripts are kept 90 days by default.** Conversations captured through the widget or Zoho SalesIQ are deleted after the retention period. To change it, contact Intracav. The analysis of each message is kept after the transcript is deleted.
- **There are no per-team views.** Analytics are per assistant, not split by department such as marketing or medical affairs.
- **Declines aren't categorized.** You see grounded and ungrounded answers and the unanswered questions, but declines aren't grouped by reason.
- **There's no document-gap report by product.** Use **Questions your assistant couldn't answer** and **Products of interest** together.
- **Leads can't be assigned in the app yet.** The **Unassigned** filter exists, but you track ownership with stages and notes.
- **Alert and digest settings aren't on a screen yet.** Contact Intracav to change who gets lead alerts and how often.

## FAQ

{{< faq question="How does Lumen know a question went unanswered?" >}}
Each answer is checked for whether it was grounded in your documents. Questions the assistant couldn't support from your documents are flagged as knowledge gaps and listed under **Questions your assistant couldn't answer**.
{{< /faq >}}
{{< faq question="Can we see the full conversation behind a lead?" >}}
Yes, for as long as the transcript is retained (90 days by default). Open the lead or the **Conversations** tab.
{{< /faq >}}
{{< faq question="Is a lead score a prediction that someone will buy?" >}}
No. It's a rubric of how contactable, senior, interested, urgent, suitable and engaged the visitor appeared in the conversation. Use it to decide who to call first.
{{< /faq >}}

## Next steps

{{< related "/connect/crm-and-webhooks/" "/connect/website-assistant/" "/connect/" >}}
