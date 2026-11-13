---
title: "Privacy and your data"
navTitle: "Privacy and data"
description: "What Lumen stores, how long it keeps it, who can see it, and how to delete it: chats, documents, memory, share links and website assistant transcripts."
lead: "A plain inventory of what Lumen keeps, why, for how long, and the controls you have over each part."
weight: 1
icon: lock
glance:
  what: "A list of the data Lumen stores (chats, documents, memory, share links and website assistant transcripts), how long it is kept, and how to remove it."
  who: "Anyone who uses Lumen, and the privacy, security and procurement reviewers at their organization."
  why: "To know what Lumen holds before you put work into it, and to be able to remove it."
  needs: "A Lumen account to use the controls. No plan requirement. About 5 minutes."
  result: "You know what is stored and how to clear your memory, revoke a share or delete your account."
---

You can trust a system more easily when you know what it holds. This page lists what Lumen stores, how long each part is kept, who can see it, and how to remove it.

## What Lumen stores

| What | Why it's kept | How long | Who can see it |
|---|---|---|---|
| **Your chats** | So you can return to a conversation, on any device | Until you delete the chat or your account | You, and anyone you share it with |
| **Your documents** | So Lumen can read and cite them | Until you delete them or your account | You, or the team you added them to |
| **Your memory** | Short facts about how you work, so you don't repeat yourself | Until you edit or clear it | You (team memory: your team) |
| **Share links** | So the people you chose can open a chat | Until they expire or you revoke them | Whoever has the link and is allowed by its setting |
| **Guest chats** (chats started without an account) | So a guest can continue, or claim the chat by signing up | Deleted after 14 days unless claimed | The guest |
| **Website assistant transcripts** (for device makers) | So the device maker can review conversations | 90 days by default, set by the device maker | The device maker's team admins |

Files are encrypted when stored, and selected sensitive fields are encrypted individually. See [Trust and security](/trust/).

## Workspaces are separate

Your personal workspace and each team workspace (called a *team* in Lumen) are separate. Chats, documents and memory in one aren't visible from another. Content moves between them only when someone uploads or shares it.

If you work in a team workspace, your team's admins can review the team's activity in a tamper-evident audit log. See [Audit and access](/organizations/audit-and-access/).

## How to manage your data

{{< steps >}}
{{< step title="Review or clear your memory" >}}Open {{< ui-path "Settings" "Privacy & data" "Memory" >}}. You can turn memory on or off, use **Edit memory**, review what Lumen suggested under **Did Lumen get these right?**, or click **Clear all** to remove every fact in the current workspace.{{< /step >}}
{{< step title="Revoke a share" >}}Open the shared chat and revoke the link. You can revoke one share or every share for that chat. A revoked or expired link stops working.{{< /step >}}
{{< step title="Delete documents and chats" >}}Delete a document from your documents list, or a chat from your history. Deleted documents are no longer searched or cited.{{< /step >}}
{{< step title="Delete your account" >}}Open {{< ui-path "Settings" "Account" "Delete account" >}}. Lumen asks you to confirm, because this removes your chats, documents, memories, notes and settings, and can't be undone. You may need to sign in again first.{{< /step >}}
{{< /steps >}}

{{< callout type="warning" title="If you own a team" >}}
You can't delete your account while you own a team that has other members. Transfer ownership first, or remove the other members.
{{< /callout >}}

## Working with patient information

Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. Before you paste patient text into a chat, de-identify it with the [de-identification tool](/tools/privacy/) (Pro and above). It replaces names, dates, record numbers and other identifiers with consistent placeholders, so the clinical picture still reads clearly.

Lumen also removes identifiers automatically before text reaches the external AI model in two places: [Research](/research/) and the embedded [website assistant](/connect/website-assistant/). Don't rely on that elsewhere.

## Share links carry the conversation

When you share a chat, the people you share it with see the conversation. Read it before you send the link, especially if it touched a clinical case. A share can be public, limited to signed-in users, or limited to your team, and it can have an expiry date. Team quick-share links for guests (Max) expire after 30 days by default and allow a limited number of uses.

## Limits

- **There's no self-serve data export.** To request an export of your data, contact Intracav.
- **Lumen doesn't automatically delete signed-in users' chats.** They stay until you delete them or your account.
- **Audit records aren't removed when you delete content.** The audit log records that activity happened, and it is tamper-evident by design.
- **A device maker's website assistant transcripts are controlled by that device maker,** not by the visitor.

## FAQ

{{< faq question="Can my team's admins read my personal chats?" >}}
No. Your personal workspace is separate from team workspaces. Team admins can review activity in the team workspace, through its audit log.
{{< /faq >}}
{{< faq question="What happens to a chat I started without an account?" >}}
It's kept for 14 days. If you sign up within that time, you can claim it. Otherwise it is deleted.
{{< /faq >}}
{{< faq question="How do I make Lumen forget something?" >}}
Open **Settings**, then **Privacy & data**, then **Memory**, and edit or remove the fact. **Clear all** removes everything Lumen remembers in the current workspace.
{{< /faq >}}
{{< faq question="How long are website assistant conversations kept?" >}}
90 days by default. The device maker running the assistant can change that. See [Leads and analytics](/connect/leads-and-analytics/).
{{< /faq >}}

## Next steps

{{< related "/trust/" "/chat/memory/" "/tools/privacy/" "/trust/responsible-ai/" >}}
