---
title: "Approve actions before they happen"
navTitle: "Approvals"
description: "When Lumen in chat, or a specialist, wants to act outside Lumen, such as send an email, it waits on an approval card and runs exactly as you approved it."
lead: "Lumen can draft an email, schedule a meeting or offer a shift, but it can't send any of them on its own. You see exactly what will go out, then you decide."
weight: 3
icon: hand
glance:
  what: "An approval card is how Lumen asks your permission before it does something outside Lumen, such as sending an email. It shows exactly what will be sent and runs only when you click Approve."
  who: "Anyone using Lumen chat or a specialist. Compliance leads and IT reviewers who need to know which actions wait for a person."
  why: "So nothing Lumen does from a chat reaches a colleague, a vendor or another system unless a person checked it first."
  needs: "Nothing to set up. It applies on every plan, in every chat. Sending email needs Pro or above."
  result: "An action that ran exactly as you approved it, or a declined one where nothing happened."
---

When you ask Lumen to send an email or post to a Teams channel, Lumen doesn't send it. It prepares the action and shows you an **approval card** in the chat. The card shows everything that will be sent. Only your click on **Approve** runs it, exactly as shown. Typing "I approve" or "go ahead" in the chat approves nothing.

## Before you start

- Approvals work the same in ordinary chats and in chats with a specialist. There's nothing to turn on.
- Some actions need a plan or a connection first. Sending email needs Pro or above. Writing to Notion, Microsoft Teams, Zoom or Discord needs that account connected to Lumen.

## What needs your approval

| Action | Examples |
|---|---|
| Sending email | A handout to the 4C unit list, a follow-up to a vendor |
| Writing to your connected accounts | Creating or updating a Notion page; scheduling, starting or cancelling a Teams or Zoom meeting; sending a Teams chat or channel message; posting to Discord |
| Staff schedules | Offering an open shift, deciding time-off requests or swaps, sending contractors their shift links |
| Specialist actions that reach outside | **Clinical Trial Manager** sending Smart IFU links to trainees or closing out a trial; **Safety Intake** sending an acknowledgment; **Product Trial Manager** messaging a hospital contact or recording a decision |
| Lumen Studio | Setting how much a video project may spend on AI-generated media |

Reading your calendar, your Notion pages or your documents doesn't need a card. Looking things up never does.

## How to approve or decline an action

{{< steps >}}
{{< step title="Find the card" >}}The card appears in the chat, labeled **Waiting for your approval**, with a one-line summary of the action.{{< /step >}}
{{< step title="Read everything that will be sent" >}}Click **Show everything that will be sent**. For an email you see **To**, **Subject** and **Message**.{{< /step >}}
{{< step title="Decide" >}}Click **Approve** to run it exactly as shown, or **Decline** to cancel it. To change something, decline and ask Lumen for a new version, for example "Make the subject line shorter and send it only to the charge nurses."{{< /step >}}
{{< step title="Check the result" >}}The card updates to say what happened, for example **Approved and done**.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="agents-approval" alt="An approval card waiting for the user, showing the email's recipients, subject and message with Approve and Decline buttons" caption="An approval card. Nothing is sent until you click Approve." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Fall-prevention handout" caption="Illustration with fictional Harbor Valley Medical Center details." >}}
{{< user >}}Email the fall-prevention handout to the 4C charge nurses.{{< /user >}}
{{< lumen tools="Document read" >}}
I've prepared the email. It won't be sent until you approve it.

{{< approval action="Email the fall-prevention handout to the 4C charge nurses" >}}**To:** 4c-charge@harborvalley.example · **Subject:** Updated fall-prevention handout · **Message:** Attached is the updated handout for review at Thursday's huddle.{{< /approval >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

After you act, the card shows one of these:

| The card says | What it means |
|---|---|
| **Waiting for your approval** | Nothing has happened yet. |
| **Running…** | You approved it and it's running now. |
| **Approved and done** | It ran exactly as shown. |
| **Approved, but it failed** | You approved it, but the other system refused it. The reason is shown under the card. |
| **Declined — nothing happened** | You declined. Nothing was sent. |
| **Expired — nothing happened** | Nobody approved it in time. Nothing was sent. |
| **Interrupted — check whether it happened before retrying** | Lumen lost track of it partway. Check the other system, for example your sent mail, before you ask again. |

## Good to know

- **Approvals are bound to what you saw.** When you approve, Lumen's server checks that the action is identical to the one on the card, and that you're still allowed to do it. It then runs it with your identity, not one the AI supplies.
- **Cards expire after 30 minutes.** An old card can't be approved later by accident. Ask again to get a new one.
- **Each approval runs once.** A card can't be approved twice, and an interrupted action is never retried automatically.
- **Workflows run as configured.** Workflows you build run their steps, such as sending an email or posting to Slack, as you set them up, without asking each time. Review a workflow's steps before you turn it on. See [Workflows](/workflows/).
- **Pilot has its own plan review.** When Lumen Pilot works in the app for you, you review its plan and click **Run** first. See [Show me and Do it](/pilot/show-me-and-do-it/).

## Limits and safety

- Approval protects actions Lumen takes outside itself from a chat. It doesn't check whether the content is right. Read the message before you approve it.
- A specialist's saved result, such as a medication review, doesn't need approval because it stays inside Lumen. Signing a result is a separate step you take on the result itself. See [Verified results](/skills-and-specialists/verified-results/).
- Lumen records approvals and the actions they ran. For teams, activity is written to a tamper-evident audit log.

{{< callout type="important" title="Typing \"I approve\" does nothing" >}}
Only the **Approve** button on the card runs an action. A message in the chat, even one that says "approved, send it", can't approve anything. This stops a misunderstanding in the conversation from turning into a sent email.
{{< /callout >}}

## FAQ

{{< faq question="Can I turn approvals off for email?" >}}
No. Sending email always needs your approval, in every chat and with every specialist.
{{< /faq >}}
{{< faq question="Can Lumen change the email after I approve it?" >}}
No. The server stores the exact action when it shows you the card, and runs that stored action only. If anything differs, it doesn't run.
{{< /faq >}}
{{< faq question="What if I approve and the email bounces?" >}}
The card shows **Approved, but it failed** with the reason. Nothing is retried automatically.
{{< /faq >}}
{{< faq question="Does approval apply to scheduled workflows?" >}}
No. A workflow you build runs its steps, such as Send Email, Slack or CRM steps, as you configured them, without a per-run approval card. See [Workflows](/workflows/).
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/working-with-a-specialist/" "/skills-and-specialists/verified-results/" "/organizations/audit-and-access/" "/trust/responsible-ai/" >}}
