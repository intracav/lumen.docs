---
title: "Departments, Seats & Pooled Usage"
description: "How Lumen organizations are structured: departments with their own admins, seats that grow automatically, and usage pooled across your whole team."
lead: "Mirror your real org chart, stop policing per-person quotas, and let department heads run their own rosters."
weight: 1
keywords: ["clinical team AI seats", "hospital AI licensing", "pooled AI usage"]
---

An organization in Lumen is built to look like the institution you already run — not a flat list of logins. You get structure that matches how clinical teams actually work, seat management that never blocks an invitation, and one shared usage pool instead of fifty individual meters.

## Organization → Department → Folder

Three levels, each with a clear job:

- **Organization** — the billing and governance boundary. Plans, seats, entitled Knowledge Packs, and the audit log live here.
- **Departments** — Vascular Access, Pharmacy, Infection Prevention, the ICU. Each department has its own members and can have its own admins. Department-scoped content (including [department-scoped policies](/organizations/policies/)) is visible to that department, not the whole hospital.
- **Folders** — the working shelves inside a department or the shared library: protocols here, device documentation there. Folders are where documents live and where sharing is controlled day to day.

The practical payoff: the ICU's weaning protocol doesn't show up in Dermatology's answers, and nobody has to maintain a permissions matrix by hand — visibility follows the structure.

## Roles: who can do what

Lumen keeps roles deliberately simple:

- **Org admins** manage the organization — members, departments, billing, packs, policies, and the audit log. The owner is an admin who can also transfer ownership.
- **Members** use Lumen — chat, shared Knowledge Packs, the Policy Library — without seeing any of the administrative surface.
- **Department admins** sit in between: they manage *their* department's roster and department-scoped content, and nothing outside it. A department admin cannot touch another department or create org-wide policy.

That last one matters at scale. The vascular access team lead can invite her own new hires the day they start, without filing a ticket with whoever owns the org account.

## Inviting your team

Two paths, both admin-controlled:

- **Email invitations** — send an invitation from the org (or from a department, if you're its admin). The invitee accepts and lands in the right place with the right access.
- **Quick-share links** — on [Max](/plans/) {{< tier-badge "max" >}}, generate a link you can drop in a staff email or post in your internal channels. Anyone who opens it sees a preview of what they're joining — the organization and what membership includes — *before* they sign up. You can cap, revoke, and review redemptions per link.

Either way, admission is the moment access begins — there's no separate provisioning step to forget.

## Seats that grow with you

Every organization plan includes **five seats**. From there:

- **Seats expand automatically.** When an admin admits a member and you're out of seats, the seat count grows to fit — the invitation is never blocked by a purchasing step.
- **Seats never shrink silently.** Removing a member frees the seat but keeps it purchased, so you're not surprised by a plan change you didn't make. An admin can explicitly reduce the seat count at any time (down to your current head-count or the five-seat floor, whichever is higher).
- **Self-serve up to 25 seats.** Card on file, no procurement cycle.

Think of it like staffing a unit: you can always bring someone onto the floor today and square the paperwork after — the system never makes a new team member wait.

## Usage is pooled

Usage limits apply to the organization, not to individuals. A light week for one clinician funds a heavy week for another — the educator preparing a competency day can lean on the pool while the per-diem nurse who asked two questions doesn't waste an allowance nobody used.

Admins get an org-wide usage summary, so you can see how the pool is being drawn without surveilling individual message logs.

## Beyond 25 seats — or when compliance leads

Three situations move you from self-serve to a conversation with our team:

- **More than 25 seats.** Larger rollouts are handled as sales-led agreements — you get contract terms and support built for that scale.
- **You need single sign-on.** SSO/SAML is handled through an enterprise agreement, not a settings toggle — talk to us and we'll scope it.
- **You need a signed BAA.** A BAA is a legal artifact, and it's part of an enterprise agreement. If your compliance office requires one, that's the conversation to start with — even for a small team. Lumen is built with HIPAA safeguards (encryption at rest, audit logging) regardless of plan; see [Trust](/trust/) for the full posture.

## The org audit log

Every administrative action — admissions, removals, policy publishes, pack changes — lands in an organization audit log that admins can review. Departments have their own scoped view. When your compliance office asks "who published this and when," the answer is a lookup, not an archaeology project.

## Next steps

- [Put your protocols in a Knowledge Pack](/organizations/knowledge-packs-admin/)
- [Publish institutional policy with Policies](/organizations/policies/)
- [Compare plans](/plans/)
