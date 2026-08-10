---
title: "Onboard Your Clinical Team to Lumen"
description: "Set up a Lumen organization for a clinical team: departments, email invitations, automatic seats, pooled usage, and your first week-one check-in."
lead: "From zero to a 12-clinician organization — structured like your unit, running on one shared usage pool."
weight: 10
audience: org
tier: plus
time: "~15 minutes"
keywords: ["onboard clinical team AI", "set up hospital AI accounts", "invite team to Lumen"]
---

You run a 12-clinician vascular access team — say, the fictional Riverbend Health VAT: ten inserters, an educator, and you. Everyone should get Lumen the same week, land in the right department automatically, and draw from one shared usage pool instead of twelve individual meters. That's about fifteen minutes of admin work, most of it writing one staff email.

## What you'll make

A working Lumen organization with two departments (Vascular Access and Education), all twelve people invited and admitted, seats sized automatically, and a week-one habit: a two-minute glance at the org audit log and usage summary.

## Before you start

- A [Plus](/plans/) {{< tier-badge "plus" >}} or Max organization plan — every organization plan includes five seats, and seats grow automatically as people join.
- The work email addresses of the people you're inviting.
- Five minutes of thought about structure: which departments mirror how your team actually works? Two is plenty to start — you can add more later.

<div class="steps-container">

{{< step num="1" title="Create your organization" >}}
Create the organization and give it the name your team will recognize — for Riverbend, "Riverbend Health — Vascular Access." You become the owner, which makes you an org admin who can also transfer ownership later.

**You should see:** the organization's admin area — members, departments, usage, and the audit log — with you as the only member and five seats included.
{{< /step >}}

{{< step num="2" title="Create your departments" >}}
Add two departments: **Vascular Access** and **Education**. Departments are how visibility follows structure — content scoped to Vascular Access stays with Vascular Access, and each department can have its own admins who manage their own roster.

Make your educator a department admin of Education. She'll be able to invite and manage her own people without touching the rest of the organization — and without filing a ticket with you.

**You should see:** both departments listed in the organization, with the educator marked as an admin of Education and nothing else.
{{< /step >}}

{{< step num="3" title="Invite your twelve" >}}
Send email invitations from the org — or from a department, so each person lands in the right place with the right access the moment they accept. There's no separate provisioning step to forget: admission is when access begins.

Paste something like this into your staff email so people know what's coming:

```
Team — you'll get a Lumen invitation from Riverbend Health this week.
Accept it with your work email. It puts you straight into our
Vascular Access department, so you'll see our shared content
from day one. Takes about two minutes.
```

On [Max](/plans/) {{< tier-badge "max" >}}, you can also mint a **quick-share link** to drop in a staff channel — anyone who opens it sees a preview of the organization and what membership includes *before* signing up, and you can cap, revoke, and review redemptions per link.

**You should see:** pending invitations listed per person, flipping to admitted members as each one accepts.
{{< /step >}}

{{< step num="4" title="Let the seats take care of themselves" >}}
This step is deliberately empty of work. Your plan starts with five seats; when the sixth clinician accepts and you're out of seats, the count grows to fit — an invitation is never blocked by a purchasing step. Seats never shrink silently either: removing a member frees the seat but keeps it purchased until an admin explicitly reduces the count. Self-serve covers you up to 25 seats.

Usage works the same way: limits apply to the organization, not to individuals. Your educator's heavy prep week draws on the same pool as the per-diem nurse's two questions.

**You should see:** the seat count at 12 once everyone's in — without you having touched a billing screen mid-onboarding.
{{< /step >}}

{{< step num="5" title="Point everyone at Getting Started" >}}
The fastest way to make the rollout stick is to give each person one real task on day one. Send the team to [Getting Started](/getting-started/) — six short scenarios, each ending with something usable — and suggest a first prompt that matches their actual work:

```
Draft a short teaching outline for a new nurse on midline vs. PICC
selection — indications, dwell time, and when to escalate to the
vascular access team.
```

{{< callout type="warning" >}}
**Before anyone pastes patient information:** make de-identification part of the team norm from day one. Lumen is built with HIPAA safeguards — encryption at rest, audit logging — but the habit of stripping identifiers belongs to the clinician. Point your team at the [privacy and de-identification tools](/tools/privacy/) in their first week, not after an incident.
{{< /callout >}}

**You should see:** members showing up in the org with activity of their own — not just accepted invitations.
{{< /step >}}

{{< step num="6" title="Check in after week one" >}}
Open two admin views:

- **The org audit log** — every administrative action (admissions, removals, content changes) is a lookup, not an archaeology project. Confirm the roster matches reality: twelve members, right departments.
- **The usage summary** — an org-wide view of how the pool is being drawn. You see engagement, not transcripts; the point is spotting the three people who never logged in so you can walk over and help, not surveilling the nine who did.

**You should see:** most of the team active, the pool comfortably inside its limit, and a short list of stragglers to nudge personally.
{{< /step >}}

</div>

## Troubleshooting

**Someone never got the invitation.** Check the address for typos and have them look in spam/quarantine — hospital mail filters are enthusiastic. Re-sending a fresh invitation is cheap; do that before opening a ticket.

**A member joined but can't see department content.** They're probably in the organization but not in the department that scopes the content. Add them to the right department (or have its department admin do it) — visibility follows structure, so no manual permission fixing is needed beyond that.

**A department admin says they "can't do" something.** Check whether it's an org-level action. Department admins manage *their* department's roster and content, and nothing outside it — they can't touch another department or create org-wide content. That fence is by design; the action belongs to an org admin.

**You need more than 25 seats, SSO, or a signed BAA.** Those are handled through a sales-led or enterprise agreement rather than self-serve — see [Departments, Seats & Pooled Usage](/organizations/departments-and-seats/) for where the line sits, and start that conversation early if compliance leads your rollout.

## Next steps

- [Turn your protocols into a Knowledge Pack](/guides/build-a-knowledge-pack/) — the reason the team is here
- [Departments, seats & pooled usage](/organizations/departments-and-seats/) — the full model behind what you just set up
- [Compare plans](/plans/) — what Plus and Max add as your rollout grows
