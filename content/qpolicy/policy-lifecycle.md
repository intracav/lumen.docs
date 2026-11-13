---
title: "Understand the policy lifecycle"
navTitle: "Policy lifecycle"
description: "What each qPolicy state means: Imported, Draft, In review, In force, Searchable, Not yet searchable, Verification required, Human verified and Retired."
lead: "Every policy's state is shown in plain words, so you always know what staff can see, what's waiting, and what a person has checked."
weight: 2
icon: history
tier: max
status: add-on
who: "policy and compliance managers"
aliases: ["/organizations/policies/"]
glance:
  what: "The lifecycle is the set of states a policy moves through in qPolicy, from draft to in force to retired, plus separate marks for whether staff can find it and whether a clinician has verified its text."
  who: "Policy managers, compliance leads and department heads who own policies."
  why: "\"Published\", \"searchable\" and \"verified\" are different things. Seeing them separately stops a policy being treated as checked just because it's live."
  needs: "Lumen Max with the qPolicy add-on. Admins and department heads see the lifecycle; staff see only policies in force."
  result: "You can read any policy's state and know what to do next."
---

A policy can be in force without anyone having checked its clinical text, and checked without staff being able to find it yet. qPolicy keeps these questions apart. The **lifecycle** shows where each policy is: draft, in review, in force or retired. Separate marks show whether staff can find it in search and chat, and whether a clinician verified this exact text. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on.
- **Role:** team admins see every policy; department heads see their department's. Members see only policies in force that apply to them.

## How it works

{{< flow >}}
{{< flow-node kicker="Draft" title="Not in force" icon="pencil" tint="neutral" >}}Being written or revised.{{< /flow-node >}}
{{< flow-node kicker="In review" title="Waiting for approval" icon="users" tint="blue" >}}Moving through your approval route.{{< /flow-node >}}
{{< flow-node kicker="In force" title="Your current policy" icon="check-circle" tint="green" >}}Approving the last step publishes it.{{< /flow-node >}}
{{< flow-node kicker="Retired" title="Superseded or withdrawn" icon="history" tint="accent" >}}Kept for the record; staff no longer see it.{{< /flow-node >}}
{{< /flow >}}

| State | What it means |
|---|---|
| **Imported** | Brought in from another system. The original file is kept and the text extracted. |
| **Draft** | Not in force. Staff can't see it and chat doesn't use it. |
| **In review** | Waiting for approval on your route. The version in force, if any, stays in force until sign-off. |
| **In force** | The organization's current policy. |
| **Searchable** | In force, and staff can find the current version in search and chat. |
| **Not yet searchable** | In force, but search is behind or couldn't process it. Staff may not find it yet. |
| **Verification required** | Clinical text a person hasn't checked yet. |
| **Human verified** | A clinician checked this exact text. Any edit needs a new check. |
| **Retired** | Superseded or withdrawn. Its version history is kept. |

**Searchable**, **Human verified** and **Approved** are separate on purpose. A policy can be searchable without being verified, and approved without being verified.

## What you'll see

{{< screenshot src="qpolicy-lifecycle" alt="The lifecycle track above the policy Library, with counts for each state" caption="How your policies move: counts for each state, with problems called out." url="lumen.intracav.ai/org/harbor-valley/admin/policies/library" >}}
{{< lui-block title="How your policies move" sub="Searchable vs verified?" >}}
{{< lui-stats >}}
{{< lui-stat label="Imported" value="212" change="Original file kept" >}}
{{< lui-stat label="In force" value="198" change="Your current policies" >}}
{{< lui-stat label="Searchable" value="196" change="Staff can find it" >}}
{{< lui-stat label="Human verified" value="61" change="A clinician checked the text" >}}
{{< /lui-stats >}}
{{< lui-rows >}}
{{< lui-row title="Drafts" value="9" >}}
{{< lui-row title="In review" value="5" >}}
{{< lui-row title="Verification required" value="74" >}}
{{< lui-row title="Not yet searchable" value="2" >}}
{{< lui-row title="Retired" value="31" >}}
{{< lui-row title="Duplicates to review" value="3" >}}
{{< lui-row title="Review overdue" value="6" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

## How to manage a policy through its life

{{< steps >}}
{{< step title="Open the policy" >}}Click {{< ui-path "Policies & compliance" "Policies" "Library" >}} and open the policy. Its tabs are **Document**, **Verification**, **Changes**, **Versions**, **Approvals**, **Compliance**, **Attestation**, **Attachments & related** and **Activity**.{{< /step >}}
{{< step title="Edit" >}}Click **Edit text**. Saving creates a new draft version; the version in force stays in force.{{< /step >}}
{{< step title="Send it for approval" >}}Click **Request review** (or **Request review of revision**). See [Review and approval](/qpolicy/review-and-approval/).{{< /step >}}
{{< step title="Verify clinical text" >}}On the **Verification** tab, a clinician checks the text. Verification is tied to that exact text.{{< /step >}}
{{< step title="Set the review cycle" >}}In the Library, select policies and choose **Set review cycle**. Lumen reminds admins, and department heads for department policies, 30 days before a review is due and again when it's overdue.{{< /step >}}
{{< step title="Retire" >}}When a policy is replaced or withdrawn, choose **Retire** and give a reason, for example *replaced by the new sepsis protocol*.{{< /step >}}
{{< /steps >}}

## Tips

- On the **Versions** tab, open any version to **Read this version**, **Compare with previous**, **Restore as new draft** or **Download original**.
- Use **Clone** to start a new policy from an existing one's text and settings.
- Members read the version in force, with *Uncontrolled copy when printed* on printouts.

## Limits and safety

- Versions are a single line of history. There are no branches or merges.
- Imported in-force policies stay in force without a new sign-off, and clinical ones show **Verification required** until a person checks them. Plan verification for high-risk policies first.
- AI drafts and suggestions never publish on their own. New and changed policies go through your approval route.
- **Duplicates to review** lists possible duplicates and overlaps for a person to merge. qPolicy doesn't detect contradictions between policies.

## FAQ

{{< faq question="What happens to answers when a policy is retired?" >}}
A retired policy leaves the staff library and isn't used in chat answers. Its versions stay on record for "what did the policy say at the time" questions.
{{< /faq >}}
{{< faq question="If I edit a verified policy, is it still verified?" >}}
No. Verification is bound to the exact text. Any edit needs a new check.
{{< /faq >}}
{{< faq question="Why is a policy in force but not searchable?" >}}
Search hasn't caught up with the current version, or couldn't process it. It usually clears on its own; if it doesn't, check the policy's document for unreadable content.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/review-and-approval/" "/qpolicy/import-policies/" "/qpolicy/policy-answers/" >}}
