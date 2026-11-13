---
title: "Set up departments, members and seats"
navTitle: "Departments and seats"
description: "How hospital admins invite staff, set roles, create departments with their own heads, and manage seats and billing in a Lumen team."
lead: "Mirror the units that use Lumen, let department heads run their own rosters, and keep seats and billing predictable."
weight: 2
icon: users
status: admin
who: "team owners and admins"
glance:
  what: "Members are the people in your Lumen team. Departments group them, for example ICU or Emergency, so each unit gets its own folders, knowledge and head. Seats are what you pay for."
  who: "Team owners and admins, and department heads who manage their own unit."
  why: "Staff see the knowledge and policies that apply to their unit, managers can onboard their own people, and billing follows real head-count."
  needs: "A Lumen team on the Plus or Max plan. Owner or admin role (department heads can manage their own department). About 15 minutes for a first department."
  result: "Departments that match your org chart, each with a head and members, and a seat count that fits."
---

Lumen works best when its structure matches your hospital's. A **department** in Lumen is a group of members inside your team (Lumen's word for your organization), such as Vascular Access or the ICU. Each department can have its own head, shared folders, Knowledge Packs and policies. Members see what applies to them, and unit managers handle their own onboarding without filing a ticket.

## Before you start

- **Role:** owner or admin. A **department head** can add and remove members of their own department only.
- **Plan:** Plus or Max. The plan starts with your first invitation.
- **Have ready:** the list of units going live first and who leads each, plus staff work email addresses.

## Roles at a glance

| Role | Set in | Can do |
|---|---|---|
| **Admin** (and the owner) | {{< ui-path "Members & access" "Members" >}} | Everything in the Admin console |
| **Member** | {{< ui-path "Members & access" "Members" >}} | Use Lumen, read shared knowledge and policies |
| **Department head** | The department's page | Manage that department's members and folders |
| **Guest** | {{< ui-path "Knowledge" "Share links" >}} | Chat with the Knowledge Packs a link shares. Uses no seat |

## How to invite members

{{< steps >}}
{{< step title="Open Members" >}}In the Admin console, click {{< ui-path "Members & access" "Members" >}}.{{< /step >}}
{{< step title="Start an invitation" >}}Click **Invite a member**.{{< /step >}}
{{< step title="Enter the details" >}}Type the person's **Email address** and choose a **Role**: **Member** or **Admin**. Click **Send invite**.{{< /step >}}
{{< step title="Track it" >}}The invitation waits under **Invitations** until it's accepted. Open it to **Copy invite link**, **Resend email** or **Revoke**.{{< /step >}}
{{< step title="Change a role later" >}}On **Members**, open a person with **Manage member** and choose **Make admin**, **Make member** or **Remove**.{{< /step >}}
{{< /steps >}}

{{< callout type="tip" title="Inviting a whole unit at once" >}}
For a rotation or a large unit, create a link in {{< ui-path "Knowledge" "Share links" "New link" >}}. Choose **Team member** to add people to the team (each uses a seat) or **Guest** to share only the packs you pick (no seat). You can limit a link to **Email domains**, set **Max uses** and choose when it **Expires**.
{{< /callout >}}

## How to create a department

{{< steps >}}
{{< step title="Open Departments" >}}Click {{< ui-path "Members & access" "Departments" >}}.{{< /step >}}
{{< step title="Create it" >}}Click **New department**, enter a **Name** such as *ICU* and an optional **Description**, then click **Create**.{{< /step >}}
{{< step title="Add members" >}}Open the department and click **Add members**. Pick people who are already in the team.{{< /step >}}
{{< step title="Name a head" >}}Open a member with **Manage member** and choose **Make department head**. They can now manage the department's members and folders.{{< /step >}}
{{< step title="Give it knowledge" >}}In {{< ui-path "Knowledge" "Sources" >}}, open a pack's **Manage** menu and switch it on under **Departments**. See [Manage Knowledge Packs](/organizations/knowledge-packs-admin/).{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="admin-departments-seats" alt="The ICU department page with members, shared folders, policies and activity" caption="A department page: members and their roles, shared folders, department policies and recent activity." url="lumen.intracav.ai/org/harbor-valley/admin/departments" >}}
{{< lui-block title="ICU" sub="Folders, members, and activity scoped to this department." >}}
{{< lui-block title="Members · 4" >}}
{{< lui-rows >}}
{{< lui-row title="Priya Nair" body="priya.nair@harborvalley.example" value="Department head" >}}
{{< lui-row title="Sam Ortiz" body="sam.ortiz@harborvalley.example" value="Member" >}}
{{< lui-row title="Jordan Blake" body="jordan.blake@harborvalley.example" value="Member" >}}
{{< lui-row title="Lee Chen" body="lee.chen@harborvalley.example" value="Team admin" >}}
{{< /lui-rows >}}
{{< lui-actions "Add members" >}}
{{< /lui-block >}}
{{< lui-block title="Shared folders" >}}
{{< lui-rows >}}
{{< lui-row title="ICU protocols" body="18 documents" >}}
{{< lui-row title="Sedation and delirium" body="6 documents" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lui-block >}}
{{< /screenshot >}}

## How seats and billing work

Open {{< ui-path "Settings" "Billing & seats" >}}. Only owners and admins can change billing.

- **Five seats minimum.** Team plans start at five seats, even with fewer people.
- **Seats grow when people join.** Admitting a member when you're out of seats adds a seat. An invitation is never blocked by a purchasing step.
- **Seats never shrink on their own.** Removing someone frees a seat but keeps it paid for. To reduce the count, use **Remove a seat** and **Update seats**. You can't go below five or below the number of current members.
- **Self-serve up to 25 seats.** Above 25, or if your team is flagged as needing a Business Associate Agreement (BAA), the page shows **Talk to sales** and Intracav sets up an Enterprise agreement.
- **Shared usage.** Everyone on the team draws from one shared usage allowance, sized by your plan and seat count. Guests on share links draw from it too, so keep guest links tight. {{< ui-path "Settings" "Usage" >}} shows how much has been used.

The qPolicy add-on is added from the same page with **Add qPolicy**. It needs the Max plan. See [qPolicy](/qpolicy/).

## Limits and safety

- Removing a member from the team ends their access to all department folders straight away. Their chats stay private to them.
- Deleting a department keeps its members in the team, but its folders are removed. Move anything you need first.
- Lumen has no single sign-on setting in the Admin console. If your organization requires SSO, raise it with Intracav before rollout; it's handled as part of an Enterprise agreement.
- Pricing isn't shown in these docs. See [intracav.ai](https://intracav.ai).

## FAQ

{{< faq question="Can someone belong to more than one department?" >}}
Yes. A member can be in several departments, for example a float nurse in ICU and Med-Surg. They see the shared folders and department knowledge of each.
{{< /faq >}}
{{< faq question="What's the difference between a department head and an admin?" >}}
An admin manages the whole team in the Admin console. A department head manages only their department's members and folders and doesn't see billing, compliance or other departments.
{{< /faq >}}
{{< faq question="Does a guest on a share link see our policies or folders?" >}}
No. A guest can chat only with the Knowledge Packs the link shares. They don't use a seat and don't see the team's folders, members or policies.
{{< /faq >}}
{{< faq question="What happens if we go over 25 seats?" >}}
Self-serve billing stops at 25 seats. Intracav sales moves you to an Enterprise agreement, and nothing about your team's content changes.
{{< /faq >}}

## Next steps

{{< related "/organizations/knowledge-packs-admin/" "/organizations/audit-and-access/" "/organizations/admin-console/" "/plans/" >}}
