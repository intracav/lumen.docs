---
title: "Run your team by asking: Lumen Super User"
navTitle: "Lumen Super User"
description: "Lumen Super User is an admin assistant for Max teams. Ask about your team or describe a change; you see each change in full and approve it before it applies."
lead: "Ask how your team is set up, what's overdue or where the gaps are, and describe changes in plain language. Nothing changes until you approve that exact change."
weight: 5
icon: sparkle
tier: max
status: admin
who: "team owners and admins"
glance:
  what: "Lumen Super User is an assistant for team admins. It answers questions from your team's live data and proposes changes, such as updating always-on guidance or giving a department access to a pack, that apply only after you approve them."
  who: "Owners and admins of a team on the Max plan."
  why: "Admin questions like \"Which departments use this pack?\" or \"Who is overdue on attestations?\" take one sentence instead of several screens, and every change leaves a record."
  needs: "A team on Lumen Max and the owner or admin role. About 5 minutes to try."
  result: "Answers about your team, and approved changes recorded in a change log you can review and partly undo."
---

Running a hospital's Lumen team means many small checks: which departments use a pack, what guidance is set, which attestations are overdue. **Lumen Super User** lets an admin do this by asking. It reads your team's live data to answer, and when you ask for a change it shows you the change in full first. Nothing applies until you approve that exact change, and every change, including the ones you decline, is recorded. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max. On other plans the console says *Not included on this plan* and names the plan your team is on. The owner can change the plan in {{< ui-path "Settings" "Billing & seats" >}}.
- **Role:** owner or admin. Members and department heads see *Administrators only*.
- **Scope:** Super User works on the team you have open, and only that team.

## How to ask a question

{{< steps >}}
{{< step title="Open the console" >}}In the Admin console, click **Super User** at the top of the page. You can also click **Open console** on the **Lumen Super User** tile on {{< ui-path "Overview" >}}.{{< /step >}}
{{< step title="Ask" >}}Type a question in the box (*Ask about this team, or describe a change…*), or pick a starter such as **Give me an overview of this team.** or **What standing knowledge is set for us and our departments?**{{< /step >}}
{{< step title="Read the answer" >}}Answers come from your team's live data, often as a table or chart. Type `/` to see console commands, such as `/changes` or `/approvals`.{{< /step >}}
{{< /steps >}}

## How to make a change

{{< steps >}}
{{< step title="Describe the change" >}}For example: *Give the ICU access to the Vascular Access Protocols pack.*{{< /step >}}
{{< step title="Read the preview" >}}Super User shows a card with exactly what will change, including before-and-after text for written changes. Nothing has happened yet.{{< /step >}}
{{< step title="Decide" >}}Click **Apply once** to make this change, **Allow for this session** to make it and let this one kind of change apply without asking for the rest of the session, or **Cancel**. The card stops working after 5 minutes; ask again if it expires.{{< /step >}}
{{< step title="Check the result" >}}Super User reports what happened. Open the **Changes** tab in the side panel to see the record.{{< /step >}}
{{< /steps >}}

{{< flow >}}
{{< flow-node kicker="1. Preview" title="You see the exact change" icon="eye" tint="blue" >}}Shown in full before anything happens.{{< /flow-node >}}
{{< flow-node kicker="2. Confirm" title="You approve it" icon="check-circle" tint="green" >}}Lumen applies the stored change, not a new one.{{< /flow-node >}}
{{< flow-node kicker="3. Second admin" title="Optional approval" icon="users" tint="plum" >}}If your team requires it, another admin approves.{{< /flow-node >}}
{{< flow-node kicker="4. Record" title="Change log and undo" icon="history" tint="accent" >}}Every proposal is logged. Some can be reversed.{{< /flow-node >}}
{{< /flow >}}

## What you'll see

{{< screenshot src="super-user-console" alt="Lumen Super User showing a proposed change with Apply once, Allow for this session and Cancel" caption="A proposed change. It applies only if you approve it." url="lumen.intracav.ai/org/harbor-valley/super-user" >}}
{{< chat-demo title="Lumen Super User" caption="Illustration with fictional team data." >}}
{{< user >}}Give the ICU access to the Vascular Access Protocols pack.{{< /user >}}
{{< lumen tools="Knowledge packs, Departments" >}}
Here's the change. Nothing has been applied yet.

{{< approval action="Let ICU members get answers from Vascular Access Protocols" >}}**Pack:** Vascular Access Protocols · **Department:** ICU · **Now used by:** Vascular Access, Med-Surg · **After:** Vascular Access, Med-Surg, ICU{{< /approval >}}
{{< lui-actions "Apply once" "Allow for this session" "Cancel" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

The side panel has four tabs:

- **Sessions:** your past conversations with Super User, so you can reopen one and see what you asked. Other admins can't read your sessions.
- **Changes:** every change proposed in this team and what became of it, shared by all admins. Applied changes that can be reversed show **Propose reversing this change**.
- **Approve:** changes waiting for a second admin, with **Approve and apply** and **Reject — nothing changes**.
- **Allowed:** kinds of change you allowed for a session, each showing *Applies without asking until* a time, with **Withdraw**. When nothing is allowed, it says **Everything asks first**.

## What Super User can do

| Area | It can tell you | It can change, with your approval |
|---|---|---|
| People and departments | Members, roles, departments and their packs | It reads only. Invite or remove people in {{< ui-path "Members & access" >}} |
| Knowledge | Packs, documents, who uses each, unanswered topics | Create a pack, add a page by URL, set a document's usage, give a department or assistant access to a pack, edit always-on guidance |
| Guardrails | Blocked topics, required disclaimer, member chat settings, who approves Super User changes | Update them |
| Policies and compliance (qPolicy) | Policy overview, evidence coverage, findings, attestation status | Decide a compliance finding, confirm coverage, remind people about attestations |
| Website assistants, Smart IFU pages, leads | Settings, test answers, lead analytics | Update settings and leads |

Type `/help` (**What this console can do**) to see the exact list your plan allows. Items marked ± change something and always ask first.

## Second-admin approval

Your team can require a second admin for Super User changes. Ask Super User to change who approves, for example *Require a second admin for every change.* There are three settings: one admin confirms, a second admin approves changes that reach the public, or a second admin approves every change.

With a second-admin rule, your approval parks the change in the **Approve** tab. A different owner or admin must approve it there; nobody approves their own change, and changes can't be approved from the chat. A parked change lapses after 7 days.

## Undo

Some applied changes can be reversed from the **Changes** tab with **Propose reversing this change**, or by asking *Undo this change*. The reversal is a new change, so you approve it the same way. Today, undo covers always-on guidance, a document's usage setting, and which departments or website assistants use a pack.

## Limits and safety

- Super User acts on your team's setup, not on patient care, and isn't a clinical tool.
- It can't invite, remove or change the role of members. Do that in the Admin console.
- Only the changes listed under Undo can be reversed. Others, such as creating a pack or updating guardrails, need a new change to put right.
- **Allow for this session** removes the preview step for one kind of change for up to 2 hours in that session. Withdraw it in the **Allowed** tab when you're done.
- Questions typed by public website visitors can appear in its answers (for example, unanswered topics). Super User treats them as data, and never changes anything because of them without your approval.

## FAQ

{{< faq question="Can Super User change something without me?" >}}
Not unless you allowed that kind of change for the current session. Otherwise every change waits for you to approve the exact change shown, and with a second-admin rule, for another admin too.
{{< /faq >}}
{{< faq question="Is this the same as the Lumen Super User tool for IT teams?" >}}
No. This page is about the assistant inside the Admin console. It works only on your team's Lumen setup.
{{< /faq >}}
{{< faq question="Where is the record of changes kept?" >}}
In the **Changes** tab, shared by all admins, including changes that were declined. Super User changes are also written to Lumen's tamper-evident audit log.
{{< /faq >}}

## Next steps

{{< related "/organizations/admin-console/" "/organizations/always-on-guidance/" "/organizations/audit-and-access/" "/plans/" >}}
