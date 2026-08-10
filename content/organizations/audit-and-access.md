---
title: "Audit Logs, Access Controls & Step-Up Auth"
description: "How Lumen organizations answer 'who did what, when' — org and department audit logs, simple roles, step-up re-authentication, and BAA records."
lead: "When your compliance office asks who changed what, the answer should be a lookup — not an investigation."
weight: 7
keywords: ["audit log", "access controls", "step-up authentication", "healthcare AI compliance"]
---

Governance in Lumen is built on a simple premise: administrative power should be **visible** (everything admins do is logged), **scoped** (nobody holds more than their role needs), and **re-verified** at the moments that matter. This page covers the four mechanisms that deliver that: audit logs, roles, step-up re-authentication, and the compliance record.

## The organization audit log

Every administrative action in your organization lands in an audit feed that org admins can review — who did what, and when. That includes:

- **Membership changes** — admissions, removals, role changes, invitations
- **Sharing and content changes** — documents moved into shared folders, pack changes, policy publishes
- **Admin actions** — compliance settings, seat changes, department restructuring

The feed is the organization's Activity view: paginated, newest first, reviewable whenever a question comes up. It's admin-only by design — audit entries can carry the details of what changed, and those details aren't for the whole roster.

This organizational feed sits on top of Lumen's deeper HIPAA-safeguard layer: AI interactions are audit-logged in a tamper-evident chain, covered in [Trust & Security](/trust/).

## Department-scoped audit views

A department head shouldn't need org-wide audit access to answer questions about their own unit — and shouldn't have it just for that. Each department has its own scoped audit view, visible to **org admins and that department's own admins**. The vascular access lead can review what changed in vascular access; she can't browse Pharmacy's history, and doesn't need to.

## Roles: deliberately few

Lumen keeps the role model small enough to reason about at 2 a.m.:

- **Org admins** manage the organization — members, departments, billing, packs, policies, and the audit log.
- **Members** use Lumen. They never see the administrative surface.
- **Department admins** manage their department's roster and content — and nothing outside it.

The full model, including how seats and invitations work, is in [Departments, seats & pooled usage](/organizations/departments-and-seats/).

## Step-up re-authentication

A signed-in session is not the same thing as the person who signed in — a browser left open at a nursing station shouldn't be able to restructure your organization. So Lumen applies **step-up re-authentication** to sensitive admin actions: the admin must have entered their password *recently*, within a short rolling window (minutes, not hours), or the action is refused until they do.

Think of it like the witness check before a high-alert medication: routine work flows freely, but the consequential action gets a deliberate second verification. Two things must be true at once — a valid signed-in session *and* a freshly verified password — before a sensitive change goes through.

The details that make it trustworthy:

- **Enforced server-side.** The check happens where the action executes, not in the interface — there is no client-side path around it.
- **Failed attempts are logged and throttled.** Every failed password verification lands in the audit log, and the verification endpoint is tightly rate-limited, so guessing is both visible and impractical.
- **The window rolls.** Re-authenticate once and you can complete a batch of admin work; go quiet past the window and the next sensitive action asks again.

## The compliance record: BAA on file

Your organization's compliance settings record whether a **Business Associate Agreement is in place** — so the answer to "do we have a BAA with this vendor?" lives in the product, not in someone's email archive. A BAA is available for enterprise agreements; if your compliance office requires one, that conversation is the right starting point even for a small team.

Marking an organization as BAA-governed also changes how Lumen treats it: the account moves to sales-led handling, so contractual terms and self-serve plan changes can't drift apart.

One related note, because it comes up in the same compliance reviews: **single sign-on is handled through an enterprise agreement — talk to sales** and we'll scope it with you.

## Workspace partitioning, one more time

All of the above operates inside a boundary worth restating: **workspaces never share data**. Your personal workspace and each organization workspace are separate — chats, documents, and [memories](/chat/memory/) stay where they were created. An org admin's audit visibility covers activity *within that organization*; it does not reach into anyone's personal workspace.

## Next steps

- [Departments, seats & pooled usage](/organizations/departments-and-seats/) — the structure these controls protect
- [Trust & Security](/trust/) — encryption, HIPAA safeguards, and the full security posture
- [Policies](/organizations/policies/) — publishing governed institutional policy

{{< cta heading="Rolling Lumen out to a team?" href="/organizations/" label="Start with For Organizations" variant="subtle" >}}
Structure, seats, packs, and governance — set up in the order that works.
{{< /cta >}}
