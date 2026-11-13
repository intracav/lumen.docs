---
title: "Publish your first policy in qPolicy"
navTitle: "Publish your first policy"
description: "Take one policy from a Word file to in force in qPolicy: import, edit, verify, route for approval, and see staff get cited answers from it."
lead: "One Word file in, one approved policy out: in force, searchable by staff, cited in chat, with its version history kept."
weight: 12
icon: shield-check
tier: max
status: add-on
who: "policy and compliance leads"
glance:
  what: "qPolicy is Lumen's policy management add-on. This guide takes one policy from a Word file through review and sign-off until it is in force and staff can search it."
  who: "Policy coordinators, compliance and quality leads, nurse managers and department heads at hospitals and health systems."
  why: "Staff find the current, approved policy in seconds and get answers that cite it, and you keep a record of who approved which version."
  needs: "A Lumen Max team plan with the qPolicy add-on, the Admin role (or department head for a department policy), and the policy as a PDF, Word, Markdown or text file. About 20 minutes, plus your approvers' time."
  result: "A policy that is in force and searchable, with an approval record, a version history, and a test answer in chat that cites it."
---

Harbor Valley Medical Center's central line dressing policy was approved by committee and saved as a Word file. At the bedside, nobody can find it. This guide takes that one file through qPolicy: import it, tidy it, have a clinician verify it, send it for sign-off, and check that staff get answers that cite it.

qPolicy answers from your own policy manual. Your organization is called a *team* in Lumen.

## Before you start

- **Plan and add-on.** qPolicy is an add-on to **Lumen Max** {{< tier-badge "max" >}}. A team admin can add it from {{< ui-path "Billing & seats" >}} with **Add qPolicy**. Until it's active, the Policies area shows **Activate Policies**. See [Plans](/plans/), and [intracav.ai](https://intracav.ai) for pricing.
- **Role.** Team admins can import, edit and send any policy for review. A department head can do the same for their own department's policies.
- **Approvers.** By default, a department policy goes to **Department review** (the department head or a team admin), then **Sign-off** by a team admin. A team-wide policy goes straight to **Sign-off**. Your team may have set up its own approval route.
- **The file.** PDF, DOCX, Markdown or plain text, up to 25 MB.

## How to publish your first policy

{{< steps >}}
{{< step title="Open Policies in the Admin console" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai). In the sidebar, click **Admin console**, then {{< ui-path "Policies" "Library" >}}.
{{< /step >}}

{{< step title="Import the file" >}}
Click **Import**, then **Upload files**. Drop the file into **Import policies**, or click **Choose files**.

Each file becomes a **draft** policy. If a policy with exactly the same title already exists, you'll see **A policy with this title already exists**. Choose **Push as new version** if this file replaces it, **Create new policy** if it's a different policy, or **Skip this file**.
{{< /step >}}

{{< step title="Tidy the text" >}}
Open the new policy and click **Edit text**. Fix anything the import got wrong: turn section titles such as "Scope" and "Dressing changes" into headings, and repair lists that came through as paragraphs. Clear headings help Lumen find the right section when staff ask narrow questions.

Fill in **What changed** and click **Save draft**. Saving creates a new draft version. The version in force doesn't change until the policy is published.
{{< /step >}}

{{< step title="Have a clinician verify the text" >}}
Open the **Verification** tab. A clinical policy shows **Needs clinical verification**. It can't be published until a person verifies this exact text.

A team admin, the department head or a designated clinical reviewer reads the policy and clicks **Verify clinical content**, then **Verify**. The status changes to **Human verified**. If anyone edits the text afterwards, it changes to **Needs re-verification**. Purely administrative policies don't need this step.
{{< /step >}}

{{< step title="Request review" >}}
Click **Request review**. In **Send for approval?**, add a note for your approvers and click **Send**. Lumen emails the approvers for the first step.
{{< /step >}}

{{< step title="Approvers decide" >}}
Each approver opens the policy and chooses **Approve** or **Request changes**. At the final step, the button is **Approve & publish**. Approving the sign-off checks verification and formatting again, then publishes the policy. Nobody approves their own work while another eligible approver exists.

You can see where it is on the **Approvals** tab.
{{< /step >}}

{{< step title="Confirm it's in force and searchable" >}}
Back on {{< ui-path "Policies" "Library" >}}, find **How your policies move**. The policy moves from **In force** to **Searchable** once it's indexed.
{{< /step >}}

{{< step title="Ask the question a nurse would ask" >}}
Open a chat in your team and ask:

```text
How often do we change a transparent central line dressing, and when do we change it early?
```

The answer should cite your policy. Click the citation: it opens the policy in the staff **Policies** library, at the passage it used.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="qpolicy-lifecycle" alt="The qPolicy lifecycle track showing policies moving from Imported to In force, Searchable and Human verified" caption="How your policies move. Drafts, In review and Verification required appear as counts beside the track." url="lumen.intracav.ai/org/harbor-valley/admin/policies/library" >}}
{{< flow >}}
{{< flow-node kicker="Imported" title="Original file kept" icon="upload" tint="blue" >}}Text extracted into a draft.{{< /flow-node >}}
{{< flow-node kicker="In force" title="Approved and published" icon="check-circle" tint="green" >}}The organization's current policy.{{< /flow-node >}}
{{< flow-node kicker="Searchable" title="Staff can find it" icon="search" tint="plum" >}}In search and in chat answers.{{< /flow-node >}}
{{< flow-node kicker="Human verified" title="A clinician checked this text" icon="user-round-check" tint="green" >}}Verification is tied to the exact wording.{{< /flow-node >}}
{{< /flow >}}
{{< /screenshot >}}

## Check it worked

- The policy shows as **In force** and **Searchable** in the Library.
- The **Versions** tab shows the version marked **Published**.
- Staff see it in **Policies** in the sidebar ("The published policies that apply to you").
- A chat question cites it, and the citation opens the policy.

## How to make a change later

Click **Edit text** on the policy, make the change, and **Save draft**. Staff keep seeing the version in force while the draft goes through **Request review** again. When it's approved, the new version is published.

The **Versions** tab keeps every version. Use **Compare with previous** to see a word-by-word redline, **Restore as new draft** to bring back older wording, and **Download original** for the file you imported. To withdraw a policy, click **Retire** and give a reason. A retired policy is no longer searched, and its history is kept.

## Tips

- **Import a whole manual later.** **Import** › **Migrate from another system** moves policies from PolicyStat, PolicyTech, Lucidoc or SharePoint with a review step. Migrated policies can come in already in force with their original dates, without going through sign-off, so check them afterwards.
- **Watch the side counts.** **Review overdue**, **Verification required** and **Not yet searchable** appear beside the track only when something needs attention.

## Limits and safety

- **Searchable isn't verified.** A policy can be in force and searchable while it still needs clinical verification (for example, after a migration). The track shows both, separately.
- **Approval isn't verification.** An approved policy has passed your sign-off route. Verification means a clinician checked this exact text.
- **Citations open the current version.** If the policy has been republished since the answer was written, the reader tells you so.
- **qPolicy is an add-on to Max only.** It isn't available on Plus.
- **No EHR, Active Directory or SAML single sign-on integration** for qPolicy.
- **Nothing is approved by Lumen.** People approve and verify. Lumen drafts, indexes and routes.

## FAQ

{{< faq question="Who can publish a policy?" >}}
Approving the final sign-off step publishes it. Who can approve depends on your route: by default, a team admin. Team members without an admin or department head role can't publish.
{{< /faq >}}
{{< faq question="What if two policies cover the same thing?" >}}
qPolicy flags exact title matches when you import, and suggests overlaps and duplicates for a person to merge. It doesn't detect contradictions between policies.
{{< /faq >}}
{{< faq question="Does staff reading a policy count as attestation?" >}}
No. Attestation is a separate, version-bound acknowledgement you run as a campaign. See [Attestation](/qpolicy/attestation/).
{{< /faq >}}

## Next steps

{{< related "/qpolicy/policy-lifecycle/" "/qpolicy/review-and-approval/" "/qpolicy/import-policies/" "/qpolicy/attestation/" >}}
