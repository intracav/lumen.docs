---
title: "Onboard your team to Lumen"
navTitle: "Onboard your team"
description: "Set up your organization in Lumen: create the team, add departments, invite people by email, and check seats and usage after the first week."
lead: "From nothing to a working team account in about 15 minutes: departments that match your org chart, invitations sent, and seats that grow as people join."
weight: 10
icon: users
tier: plus
who: "team admins"
glance:
  what: "A team is your organization's shared account in Lumen. It holds your members, departments, shared knowledge and billing in one place."
  who: "Nurse managers, educators, department leads and IT or operations staff setting Lumen up for a group."
  why: "Everyone gets Lumen the same week, lands in the right department, and draws on shared knowledge and one bill instead of a dozen personal accounts."
  needs: "A Lumen account and the work email addresses of the people you're inviting. Creating a team is free; a Plus or Max team plan starts with your first invitation. About 15 minutes."
  result: "A team with departments, invited members, a department head who can manage their own people, and a usage view to check after week one."
---

The vascular access team at Harbor Valley Medical Center has twelve people: ten inserters, an educator and a manager. The manager wants everyone using Lumen by Friday, each person in the right department, with shared knowledge visible from day one and one bill for the hospital. This guide sets that up.

In Lumen, an organization's shared account is called a *team*. This page says "team" when it means the screen in the app.

## Before you start

- **Plan.** Creating a team is free. Team plans are **Plus** {{< tier-badge "plus" >}} and **Max** {{< tier-badge "max" >}}, and both include five seats. The plan starts with your first invitation. A free team's first invitation starts a 14-day Max trial. See [Plans](/plans/), and [intracav.ai](https://intracav.ai) for pricing.
- **Role.** The person who creates the team is its owner and an admin.
- **Have ready:** the work email addresses of the people you're inviting, and the departments you want. Two or three is plenty to start.
- **Larger rollouts.** Self-serve covers up to 25 seats. For more seats, single sign-on (SSO) or a written agreement covering patient information, billing switches to **Talk to sales**.

## How to onboard your team

{{< steps >}}
{{< step title="Create the team" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai). In the sidebar, click **Home**, then **Teams**, then **Create team**.

In **Create team**, enter the **Team name**, for example "Harbor Valley Medical Center". Optionally:

- Add an **Email domain (optional)**, such as `harborvalley.example`. People with that email domain can join on their own.
- Under **What kind of team is this? (optional)**, choose **Hospital or health system** or **Medical-device manufacturer**. This sets which products the Admin console starts with.

Click **Create**. Lumen opens the **Admin console** for your new team, on **Overview**.
{{< /step >}}

{{< step title="Add your departments" >}}
In the Admin console, go to {{< ui-path "Departments" >}} and click **New department**. Enter a **Name**, such as "Vascular Access", and a **Description (optional)**. Click **Create**. Repeat for "Education".

Departments decide who sees what. Knowledge Packs and policies can be limited to one department.
{{< /step >}}

{{< step title="Invite people by email" >}}
Go to {{< ui-path "Members" >}} and click **Invite a member**. In **Invite member**, type an **Email address**, choose a **Role** (**Member** or **Admin**), and click **Send invite**.

Lumen emails the invitation. If email can't be sent, you'll get a **Copy link** option to share the invitation yourself. Pending invitations are listed on the **Invitations** tab.

To put someone straight into a department, open the department and use **Invite to department** instead.
{{< /step >}}

{{< step title="Make a department head" >}}
Open the Education department, click **Add members**, choose the educator and select **Head**. Department heads can manage their own department without being admins of the whole team.

You can change this later from the member's menu with **Make department head** or **Make member**.
{{< /step >}}

{{< step title="Tell people what's coming" >}}
Send a short note so the invitation doesn't get ignored:

```text
You'll get a Lumen invitation from Harbor Valley Medical Center this week.
Accept it with your work email. It puts you in our team, with our
shared material from day one. It takes about two minutes.
```
{{< /step >}}

{{< step title="Check seats and billing" >}}
Go to {{< ui-path "Billing & seats" >}}. Your plan starts with five seats. When more people accept than you have seats, the count grows to fit, so an invitation is never blocked.

Seats don't shrink on their own. If someone leaves, remove them from **Members**, then lower the count with **Update seats**.
{{< /step >}}

{{< step title="Look at usage after week one" >}}
Go to {{< ui-path "Usage" >}}. It shows seats, messages, documents and storage across your team, including **Pending invites**. Use it to spot people who haven't accepted yet, and follow up with them in person.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="admin-departments-seats" alt="The Lumen Admin console showing the Departments page with Vascular Access and Education" caption="Departments in the Admin console. Each department lists its members and heads." url="lumen.intracav.ai/org/harbor-valley/admin/departments" >}}
{{< lui-block title="Departments · Harbor Valley Medical Center" >}}
{{< lui-rows >}}
{{< lui-row title="Vascular Access" body="10 members · 1 department head" >}}
{{< lui-row title="Education" body="1 member · 1 department head" >}}
{{< /lui-rows >}}
{{< lui-actions "New department" >}}
{{< /lui-block >}}
{{< /screenshot >}}

## Check it worked

- **Members** lists everyone who accepted. The **Invitations** tab is empty, or shows only the people you're still waiting on.
- Each department shows the right people, with the educator marked **Department head** in Education.
- **Billing & seats** shows a seat count that matches your members.

## Tips

- **Start small.** Two departments are enough for the first week. Add more when you see how people use Lumen.
- **Resend before you troubleshoot.** If someone didn't get an invitation, check spam or quarantine, then use **Resend email** from the invitation's menu.
- **Share knowledge next.** A team gets most of its value from shared material. [Build a Knowledge Pack](/guides/build-a-knowledge-pack/) so answers cite your own protocols.
- **Share links are a Max feature.** On Max, you can also create a share link from {{< ui-path "Knowledge" "Share links" >}} and post it in a staff channel. You choose whether it adds a **Team member** (uses a seat) or a **Guest** (Knowledge Pack access only), and you can limit it by email domain, number of uses and expiry date.

## Limits and safety

- **Department heads manage only their own department.** Team-wide settings, billing and other departments belong to team admins.
- **Seats never shrink automatically.** An admin lowers them with **Update seats**.
- **Patient information.** Lumen is built with security safeguards (encryption, access controls and a tamper-evident audit log). Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. Agree as a team on what may be entered, and follow your organization's policies. See [Privacy and data](/trust/privacy/).
- **No SSO in self-serve.** Single sign-on and written agreements are arranged directly with Intracav.

## FAQ

{{< faq question="Does creating a team cost anything?" >}}
No. Creating a team is free. A Plus or Max team plan starts when you send your first invitation, and a free team's first invitation starts a 14-day Max trial.
{{< /faq >}}
{{< faq question="What's the difference between an admin and a department head?" >}}
An admin manages the whole team: members, departments, billing and settings. A department head manages one department's members.
{{< /faq >}}
{{< faq question="Can people join without an invitation?" >}}
Yes, if you set an email domain when you created the team. People who sign up with that domain can join on their own. On Max, you can also use a share link.
{{< /faq >}}
{{< faq question="Where do I find the Admin console later?" >}}
In the sidebar, click **Admin console**. Department heads who aren't team admins see **My department** instead.
{{< /faq >}}

## Next steps

{{< related "/organizations/departments-and-seats/" "/guides/build-a-knowledge-pack/" "/organizations/admin-console/" "/plans/" >}}
