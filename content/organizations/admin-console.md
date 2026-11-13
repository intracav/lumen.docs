---
title: "The Admin console"
navTitle: "Admin console"
description: "The Admin console is where a Lumen team's admins see what needs attention and manage people, departments, knowledge, policies and billing."
lead: "One screen tells you the state of your organization in Lumen and what to do next. Every other admin task is one click from it."
weight: 1
icon: layers
status: admin
who: "team owners and admins"
glance:
  what: "The Admin console is the management area of a Lumen team. Its Overview page shows what needs attention, the state of each part of your setup, and how the parts feed each other."
  who: "Owners and admins of a hospital or health-system team. Department heads see a reduced version scoped to their own department."
  why: "You can answer \"Is everything set up and working?\" in a minute, and go straight to whatever needs a decision."
  needs: "A Lumen team on the Plus or Max plan, and the owner or admin role. About 5 minutes to learn your way around."
  result: "You know where each admin task lives and what the Overview is telling you."
---

When Lumen is rolled out across a hospital, someone has to own it: who has access, what Lumen answers from, which policies are current. The **Admin console** is that person's workspace. Its **Overview** works like a control panel. It lists what needs your attention, shows each part of your setup as ready or not, and links straight to the screen where you fix it. Lumen calls your organization a *team*, so the console manages one team at a time.

## Before you start

- **Role:** you must be the team's owner or an admin. A department head who isn't an admin sees **My department** in the sidebar instead, which opens their department.
- **Plan:** any team plan (Plus or Max). Some sections, such as **Policies** and **Compliance**, appear only when your team has the matching product, here the qPolicy add-on.
- **Right team:** if you belong to more than one team, switch to the right one first with the team switcher in the sidebar.

## How to open the Admin console

{{< steps >}}
{{< step title="Sign in" >}}Go to [lumen.intracav.ai](https://lumen.intracav.ai) and sign in with your work account.{{< /step >}}
{{< step title="Switch to your team" >}}Use the team switcher in the sidebar and pick your hospital's team, for example **Harbor Valley Medical Center**.{{< /step >}}
{{< step title="Open the console" >}}Click {{< ui-path "Admin console" >}} in the sidebar. You can also choose **Admin console** from the team switcher menu. The console opens on {{< ui-path "Overview" >}}.{{< /step >}}
{{< step title="Work through what needs attention" >}}Read the **Needs attention** list from the top. Each item links to the screen where you resolve it. Click **Show all** to see the full list.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="admin-overview" alt="The Admin console Overview for Harbor Valley Medical Center, with Needs attention, module tiles and the relationship map" caption="The Overview. Items that need a decision come first, then the state of each module." url="lumen.intracav.ai/org/harbor-valley/admin/overview" >}}
{{< lui-block title="Overview" sub="Harbor Valley Medical Center" >}}
{{< lui-block title="Needs attention · 3" >}}
{{< lui-rows >}}
{{< lui-row title="**3 policies are past their review date**" body="Policies" value="Open" >}}
{{< lui-row title="**12 people have attestations overdue**" body="Policies" value="Open" >}}
{{< lui-row title="**1 rule change needs a decision**" body="Compliance" value="Open" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< lui-block title="Your modules" >}}
{{< lui-rows >}}
{{< lui-row title="Knowledge" body="4 packs · used by 4 departments" value="Ready" >}}
{{< lui-row title="Policies" body="212 in force" value="Needs attention" >}}
{{< lui-row title="Compliance" body="Medicare Conditions of Participation for Hospitals" value="Needs attention" >}}
{{< lui-row title="People" body="38 members · 4 departments" value="Ready" >}}
{{< lui-row title="Lumen Super User" body="Ask about this team, or describe a change" value="Ready" >}}
{{< lui-row title="Website assistants" value="Not on your plan" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lui-block >}}
{{< /screenshot >}}

The Overview has three parts:

- **Needs attention.** A ranked list of things waiting on an admin, each with a link to fix it. When nothing is waiting it says *Everything is running. Nothing needs you right now.*
- **Your modules.** One tile per part of your setup, such as **Knowledge**, **Policies**, **Compliance**, **People** and **Lumen Super User**, each marked **Ready**, **Needs setup**, **Needs attention** or **Not on your plan**. Click **Open** on a tile to go to it.
- **How it fits together.** A map of what feeds what. For example, a Knowledge Pack is *used by* the departments that answer from it, and your policy library *feeds* member chat.

If one module can't load, only that tile shows an error. The rest of the page still works.

## Where everything lives

For a team set up as a hospital or health system, the console's navigation is grouped like this:

| Group | Pages | What you do there |
|---|---|---|
| **Overview** | Overview | See what needs attention and the state of each module |
| **Knowledge** | Map, Sources, Standing knowledge, Insights, Share links | Manage Knowledge Packs, [always-on guidance](/organizations/always-on-guidance/) and guest links |
| **Members & access** | Members, Departments, Scheduling | Invite people, set roles, run departments |
| **Policies & compliance** | Policies, Compliance | [qPolicy](/qpolicy/): your manual, approvals, attestation and regulatory coverage |
| **Settings** | Team profile, Billing & seats, Usage, Shared work, and more | Team details, plan, seats and usage |
| **Products** | Products | What your team has, what still needs setting up, and what's available |

The **Super User** button at the top of the console opens [Lumen Super User](/organizations/super-user/), the admin assistant included with Max.

## Tips

- On a new team, the Overview also shows a setup checklist: **Add your team's knowledge**, **Invite your team** and, with qPolicy, **Finish setting up Policies**.
- Each console page has its own web address. You can bookmark a page or send a link to another admin.
- On a phone, the console's sections appear as a scrolling row of chips at the top of the page.

## Limits and safety

- The console shows counts and settings, not anyone's chats. Admins can't read members' conversations.
- **Needs attention** lists what Lumen can detect, such as overdue reviews, overdue attestations and rule changes waiting for a decision. It isn't a full compliance or risk review.
- Hiding a button from a role isn't the only protection. Lumen checks the person's role on the server for every admin action.

## FAQ

{{< faq question="Who can open the Admin console?" >}}
The team's owner and admins. Department heads get a reduced view of their own department. Members don't see it.
{{< /faq >}}
{{< faq question="Why is a section missing from my console?" >}}
Sections appear only for products your team has. **Policies** and **Compliance** need the qPolicy add-on on Max. Check {{< ui-path "Products" >}} to see what your team has and what needs setting up.
{{< /faq >}}
{{< faq question="Can two admins work in the console at the same time?" >}}
Yes. Changes save as you make them. Policy and Super User changes are recorded with who made them.
{{< /faq >}}

## Next steps

{{< related "/organizations/departments-and-seats/" "/organizations/knowledge-packs-admin/" "/organizations/super-user/" "/qpolicy/" >}}
