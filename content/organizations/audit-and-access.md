---
title: "Audit trail and access control"
navTitle: "Audit and access"
description: "How Lumen controls who can do what in a hospital team, and where admins find the tamper-evident (hash-chained) record of who changed what."
lead: "When your compliance office asks who published a policy, who approved it and who attested, the answer is a lookup, not an investigation."
weight: 6
icon: shield-check
status: admin
who: "compliance leads, team owners and admins"
glance:
  what: "Lumen keeps access simple (owner, admin, department head, member) and records admin and policy actions in a tamper-evident, hash-chained audit log. Admins can review and export the policy record."
  who: "Compliance and privacy officers, team admins and department heads, and IT security reviewers."
  why: "You can show who had access, who changed what and when, and that the record hasn't been altered since."
  needs: "A Lumen team and the owner or admin role. The policy audit log and the agreement record are part of the qPolicy add-on on Max."
  result: "You know where each record lives, how to export it, and what the hash chain does and doesn't prove."
---

Hospitals need to answer two questions about any system that touches clinical work: who can do what, and who did what. Lumen keeps the first simple, with four roles, and answers the second with a **tamper-evident audit log**. Each record carries a fingerprint (a hash) of the record before it, so a record that's edited or removed afterwards breaks the chain and shows up. Lumen calls your organization a *team*.

## Before you start

- **Role:** owner or admin. Department heads can see their own department's activity.
- **Plan:** any team plan for roles and department activity. The policy **Audit log**, per-version audit records and the agreement record are part of [qPolicy](/qpolicy/), a Lumen Max add-on.

## Who can do what

| Role | Sees | Can change |
|---|---|---|
| **Owner** | Everything in the Admin console | Everything an admin can, plus owner-only actions such as making the team a health system |
| **Admin** | Everything in the Admin console | Members, departments, knowledge, billing, policies, compliance |
| **Department head** | Their department's members, folders and activity | Their department's members and folders |
| **Member** | Lumen, shared knowledge, the **Policies** library | Their own chats and documents; attest to policies |

Members' chats are private to them. Admins see counts and settings, never what anyone asked.

## How to review the record

{{< tabs >}}
{{< tab name="Policy actions" >}}
1. In the Admin console, click {{< ui-path "Policies & compliance" "Compliance" "Evidence" >}}, then open **Audit log**.
2. The list shows *who wrote, approved, published and attested to what*, newest first.
3. Under **Event kinds**, filter to **Everything**, **Wrote**, **Approved**, **Published** or **Attested**.
4. Click **Download CSV** to export it for a survey or an internal audit.
{{< /tab >}}
{{< tab name="One policy" >}}
1. Open the policy from {{< ui-path "Policies" "Library" >}} and choose the **Approvals** tab.
2. Each version shows who reviewed and signed it off, when it was published, and its **Audit record**.
3. The audit record shows **Hash chain verified**, **Hash does NOT verify**, or **Predates the hash chain** for older entries.
{{< /tab >}}
{{< tab name="A department" >}}
1. Open {{< ui-path "Members & access" "Departments" >}} and choose the department.
2. The **Activity** section lists member changes, role updates and folder shares for that department.
3. Org admins and that department's heads can see it. Other department heads can't.
{{< /tab >}}
{{< tab name="Super User changes" >}}
1. Open [Lumen Super User](/organizations/super-user/) (Max).
2. The **Changes** tab lists every change proposed through it, including declined ones, and who made each.
{{< /tab >}}
{{< /tabs >}}

## What you'll see

{{< screenshot src="admin-audit-log" alt="The policy Audit log with event-kind filters and Download CSV" caption="The policy Audit log: who wrote, approved, published and attested to what." url="lumen.intracav.ai/org/harbor-valley/admin/compliance/audit" >}}
{{< lui-block title="Audit log" sub="Who wrote, approved, published and attested to what, newest first." >}}
{{< lui-actions "Download CSV" "Everything" "Wrote" "Approved" "Published" "Attested" >}}
{{< lui-rows >}}
{{< lui-row title="**Published** Central line dressing change, version 5" body="Lee Chen · Nov 12, 9:41 AM" >}}
{{< lui-row title="**Approved** Central line dressing change, version 5" body="Priya Nair · ICU review · Nov 11, 4:02 PM" >}}
{{< lui-row title="**Attested** Hand hygiene, version 3" body="Sam Ortiz · Nov 11, 7:15 AM" >}}
{{< lui-row title="**Wrote** Restraint use and monitoring, draft" body="Dana Whitfield · Nov 10, 2:30 PM" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

## The agreement record

A Business Associate Agreement (BAA) is a contract that governs how a vendor handles protected health information (PHI). With qPolicy, you can record an agreement your team holds in {{< ui-path "Compliance" "Readiness" "Compliance settings" >}} under **Business Associate Agreement**: click **Record an agreement** and enter the counterparty, who signed it, and the dates it runs from and to. The card then shows how many days remain. The record is for your own tracking and for the evidence binder. Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements.

## Limits and safety

- **Tamper-evident isn't tamper-proof.** The hash chain shows that a record was changed or removed after it was written. It doesn't stop someone with database access from trying, and it isn't a certification.
- The in-app **Audit log** covers policy actions. Membership, role and folder changes appear in each department's **Activity**; there's no single team-wide activity screen yet.
- Lumen has no single sign-on (SSO) setting in the Admin console. If your security policy requires SSO, raise it with Intracav before rollout.
- Lumen is built with security safeguards: encryption, access controls and a tamper-evident audit log. It is not "certified" by any body, and no page here claims it is.
- An agreement you record is your own statement. Lumen doesn't independently verify the agreement behind it.

## FAQ

{{< faq question="Can we prove a policy record wasn't edited after the fact?" >}}
Each policy version's **Audit record** shows whether its hash still verifies against the chain. Lumen also has a verification tool that recomputes every link in the chain; ask Intracav if your auditors need a full chain check.
{{< /faq >}}
{{< faq question="Can admins read staff conversations?" >}}
No. The Admin console shows membership, settings and usage counts. Knowledge insights show counts only, never what anyone asked.
{{< /faq >}}
{{< faq question="Who can see a department's activity?" >}}
Team admins and that department's heads.
{{< /faq >}}

## Next steps

{{< related "/organizations/departments-and-seats/" "/qpolicy/evidence-binder/" "/trust/privacy/" "/organizations/super-user/" >}}
