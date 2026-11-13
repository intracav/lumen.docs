---
title: "Set up policy review and approval"
navTitle: "Review and approval"
description: "How qPolicy routes new and changed policies through department review and sign-off, with configurable routes, reminders and a word-level redline."
lead: "Every new policy and every change goes through the steps you set. Approvers see exactly what changed, and approving the last step publishes."
weight: 3
icon: check-circle
tier: max
status: add-on
who: "policy managers, department heads and approvers"
glance:
  what: "An approval route is the ordered list of people who must approve a policy change before it's in force. qPolicy emails approvers, reminds them, and shows each change as a redline."
  who: "Policy managers who set routes, and the department heads, committee chairs and executives who approve."
  why: "Changes can't reach staff without the right sign-off, approvers decide from a clear redline, and every decision is recorded."
  needs: "Lumen Max with the qPolicy add-on. A team admin sets routes. About 15 minutes to set up a route."
  result: "A route that matches your committee structure, and approvers who can decide from one screen."
---

Policy changes stall when approvers can't see what changed or forget they're waiting. In qPolicy, a policy goes from **Draft** to **department review** to **sign-off**, and the last approval publishes it. Approvers are emailed, reminded and shown a word-level redline: added text underlined, removed text struck through. Lumen calls your organization a *team*.

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on.
- **Role:** a team admin sets routes. Anyone named on a step can decide it.
- **Have ready:** who reviews for each department and who gives final sign-off, for example the CNO or a policy committee chair.

## How a change moves

{{< flow >}}
{{< flow-node kicker="Draft" title="Author edits" icon="pencil" tint="neutral" >}}A new version is saved as a draft.{{< /flow-node >}}
{{< flow-node kicker="Department review" title="Department heads" icon="users" tint="blue" >}}For department policies.{{< /flow-node >}}
{{< flow-node kicker="Sign-off" title="Team admin or your route" icon="check-circle" tint="plum" >}}The last step signs off.{{< /flow-node >}}
{{< flow-node kicker="In force" title="Published to staff" icon="file-check" tint="green" >}}Approving the last step publishes.{{< /flow-node >}}
{{< /flow >}}

The built-in route: a department policy is reviewed by that department's heads, then any team admin signs it off. A team-wide policy goes straight to a team admin.

## How to set your approval route

{{< steps >}}
{{< step title="Open approval settings" >}}Click {{< ui-path "Policies & compliance" "Policies" "Approvals & attestation" >}}.{{< /step >}}
{{< step title="Edit the route" >}}Under **Who approves changes**, click **Choose approvers** (or **Edit**).{{< /step >}}
{{< step title="Add steps" >}}Click **Add a step**. For each step, set **What this step is called**, for example *Nursing practice council*, and under **Who decides** click **Choose people**. Use **Move up** and **Move down** to order steps. Click **Save**.{{< /step >}}
{{< step title="Add exceptions" >}}Under **Exceptions**, click **Add an exception** and choose **For one department**, **For one policy area** or **For regulatory updates** to give those policies a different route.{{< /step >}}
{{< /steps >}}

Steps happen in order. Any one person named on a step can decide it. Policies already waiting keep the approvers they had when they were sent.

## How to send a change and decide on it

{{< steps >}}
{{< step title="Request review" >}}On the policy page, click **Request review**. The first step's approvers are emailed.{{< /step >}}
{{< step title="Approvers open it" >}}Approvers see **Waiting for you** in the Lumen sidebar, with a count. They can also follow the email link.{{< /step >}}
{{< step title="Read the redline" >}}The change shows as a redline. Switch between **One column** and **Side by side**.{{< /step >}}
{{< step title="Decide" >}}Click **Approve** to move it on, or **Request changes** to send it back with a note. On the last step the button reads **Approve & publish**; approving puts the new version in force for staff.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="qpolicy-redline" alt="A policy change shown as a word-level redline with Approve and Request changes" caption="A change waiting for sign-off. Added text is underlined, removed text is struck through." url="lumen.intracav.ai/org/harbor-valley/qpolicy/approvals" >}}
{{< lui-block title="Central line dressing change · Version 5" sub="A change to a policy staff follow today. The version in force stays until this is signed off." >}}
{{< lui-rows >}}
{{< lui-row title="Transparent dressings are changed every ~~5~~ **7** days, and immediately if damp, loosened or visibly soiled." body="In “Dressing changes”" >}}
{{< lui-row title="**Document the date of the next change on the dressing label.**" body="Added" >}}
{{< /lui-rows >}}
{{< lui-callout variant="info" >}}Approving puts version 5 in force for staff.{{< /lui-callout >}}
{{< lui-actions "Approve & publish" "Request changes" >}}
{{< /lui-block >}}
{{< /screenshot >}}

{{< screenshot src="qpolicy-approval-chain" alt="The Approvals tab showing each version's reviewers, sign-off and audit record" caption="The Approvals tab: who reviewed, who signed off, and whether each audit record verifies." url="lumen.intracav.ai/org/harbor-valley/admin/policies/library" >}}
{{< lui-block title="Version 5" sub="Awaiting decision" >}}
{{< lui-rows >}}
{{< lui-row title="Reviewed · ICU review" body="Priya Nair · Nov 11" value="Approved" >}}
{{< lui-row title="Signed off" body="Waiting on Lee Chen, Dana Whitfield" value="Waiting for a decision" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

## Reminders and urgency

- Approvers are emailed when a step is assigned to them.
- If they haven't decided after 3 days, Lumen reminds them, then weekly. A request is **overdue** at 7 days.
- The person who requested review can click **Remind**, at most once a day.
- They can also **Withdraw request**; nobody is waiting on it after that.

## Tips

- To compare any two versions, open the policy's **Changes** tab, choose versions and click **Compare**. Very long or heavily rewritten sections are compared line by line instead of word by word.
- Separation of duties: the author, the requester and earlier approvers can't approve a step, unless nobody else on the step can.
- Compliance findings and AI drafts reach approvers the same way. Accepting a finding sends a new version for sign-off; it never publishes on its own.

## Limits and safety

- Publishing needs an approved sign-off. A **Publish (needs sign-off)** button appears while a policy is in review, but it's refused until the route is approved.
- Clinical policies can also need a person's verification of the text before sign-off. See [Policy lifecycle](/qpolicy/policy-lifecycle/).
- Policies imported as already in force skip this route. They keep their status and are flagged **Verification required** until a person verifies them.

## FAQ

{{< faq question="Is there a separate publish step after approval?" >}}
No. The last step on the route signs off and publishes. Its button reads **Approve & publish**.
{{< /faq >}}
{{< faq question="Can approvers decide without opening Lumen every day?" >}}
They're emailed on assignment and reminded after 3 days, then weekly. The email links straight to the change.
{{< /faq >}}
{{< faq question="What does Request changes do to the version in force?" >}}
Nothing. The version in force stays in force. The draft goes back to its author with your note.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/attestation/" "/qpolicy/policy-lifecycle/" "/qpolicy/regulatory-monitoring/" >}}
