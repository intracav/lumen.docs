---
title: "De-identify text and send email safely"
navTitle: "Privacy tools"
description: "Ask Lumen to replace patient identifiers in text with consistent stand-ins before you share it, and send email only after you approve it."
lead: "Two tools for when information leaves your hands: de-identification for text you want to share, and email that waits for your approval."
weight: 9
icon: shield
tier: pro
keywords: ["de-identify PHI", "pseudonymize clinical text", "remove patient identifiers"]
glance:
  what: "Built-in tools that replace patient identifiers in text with consistent stand-ins (and can restore them later), and send email only after you approve it."
  who: "Clinicians, educators, researchers and staff who share clinical text outside the care team."
  why: "To prepare a case for teaching or review without exposing who the patient is, and to keep email from going out without your say."
  needs: "Pro or above. About 2 minutes."
  result: "A de-identified copy of your text, or an email sent exactly as you approved it."
---

Before you present a case at a conference or send notes for outside review, you usually need to remove the patient's name, dates, record numbers and other identifiers. Lumen's de-identification tool does this with consistent stand-ins, made-up names, dates and numbers that stay the same throughout the text, so the clinical meaning stays clear. If you need the originals back later, Lumen can restore them from the same session. When Lumen sends an email from a chat, it always waits for your approval first.

## Before you start

- **Plan:** De-identify PHI, Re-identify PHI and sending email need **Pro** or above.
- **Permission:** only paste patient information into Lumen if your organization allows it, in a workspace approved for it. See [Privacy and data](/trust/privacy/).

## The tools

| Tool (as shown in Explore) | What it does | When finished, the chip reads |
|---|---|---|
| **De-identify PHI** | Replaces names, dates, record numbers and other identifiers with consistent stand-ins, and counts what it replaced. | **Identifiers removed** |
| **Re-identify PHI** | Puts the original values back into de-identified text from the same session. | **Identifiers restored** |
| Clear a session | Deletes a session's mapping between stand-ins and real values. | **De-identification session cleared** |
| Send email | Sends an email after you approve the exact message. | **Email sent** |

## How to de-identify text

{{< steps >}}
{{< step title="Paste the text and ask" >}}For example: "De-identify this discharge summary for a teaching conference." Paste or attach the text in the same message.{{< /step >}}
{{< step title="Review the result" >}}The chip reads **Identifiers removed**. Read the whole output. Look for identifiers the tool may have missed, such as a rare job title, a unique event or a free-text address.{{< /step >}}
{{< step title="Restore if needed" >}}Later in the same chat, ask "Re-identify this text using the same session."{{< /step >}}
{{< step title="Clear the mapping when you're done" >}}Ask Lumen to clear the de-identification session so the link between stand-ins and real values is deleted.{{< /step >}}
{{< /steps >}}

## How to send an email

{{< steps >}}
{{< step title="Ask Lumen to send it" >}}For example: "Email this handout to the 4C nursing unit list."{{< /step >}}
{{< step title="Review the approval card" >}}Lumen doesn't send anything yet. An approval card shows **Waiting for your approval**. Click **Show everything that will be sent** to see the recipients, subject and message.{{< /step >}}
{{< step title="Approve or decline" >}}Click **Approve** to send exactly that message, or **Decline**. Typing "I approve" in the chat does nothing.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Case for teaching conference" caption="Illustration with a fictional patient." >}}
{{< user >}}De-identify this for M&M: "Maria Lopez, MRN 0048213, admitted 3/14 to Harbor Valley ICU with septic shock..."{{< /user >}}
{{< lumen tools="Identifiers removed" >}}
"**Ana Torres**, MRN **7731904**, admitted **5/02** to **Lakeside General** ICU with septic shock..."

I replaced 4 identifiers with consistent made-up values. The same real value always gets the same stand-in in this session. Read the full text for anything else that could identify the patient before you share it.
{{< /lumen >}}
{{< /chat-demo >}}

## Good to know

- **This tool is something you ask for.** Lumen doesn't automatically de-identify your chats. Automatic de-identification before outside model calls applies only to [Research](/research/) and the website assistant.
- **The mapping lives in a session.** Re-identification only works with the session that created the stand-ins.

## Limits and safety

{{< callout type="important" title="Pasting text into a chat shares it with Lumen" >}}
De-identification makes a clean copy for sharing elsewhere. The original text you pasted is still part of the chat, and Lumen read it to de-identify it. If you're not permitted to put the original into Lumen, de-identify it another way first.
{{< /callout >}}

- No automatic tool catches every identifier. Review the output yourself before sharing, and follow your organization's de-identification policy.
- Emails go out from Lumen exactly as approved. An approval card expires if you don't act on it, and nothing is sent. See [Approvals](/skills-and-specialists/approvals/).

## FAQ

{{< faq question="Does Lumen remove identifiers from everything I type?" >}}
No. Only when you ask it to use this tool. Automatic de-identification applies in Research and the website assistant only.
{{< /faq >}}
{{< faq question="Is the result safe to publish?" >}}
It's a strong first pass, not a guarantee. A person should review it against your organization's de-identification rules before it's shared.
{{< /faq >}}
{{< faq question="Can Lumen send email without asking me?" >}}
No. Every email waits on an approval card and is sent exactly as approved.
{{< /faq >}}

## Next steps

{{< related "/trust/privacy/" "/learn/deidentification/" "/skills-and-specialists/approvals/" "/tools/tool-index/" >}}
