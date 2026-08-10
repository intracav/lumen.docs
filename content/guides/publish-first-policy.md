---
title: "Publish Your First Policy in Lumen"
description: "Import a CLABSI-prevention policy from DOCX, publish it to a read-only Policy Library, get version-stamped citations in chat, and ship v2 without losing history."
lead: "One DOCX in, one governed policy out — cited in chat, versioned forever."
weight: 12
audience: org
tier: max
time: "~15 minutes"
keywords: ["publish hospital policy software", "policy library tutorial", "clinical policy versioning"]
---

Your CLABSI-prevention policy was written carefully, approved by committee, and saved as a DOCX — and at the bedside, nobody is reading it. This guide takes that one file through the full **Policies** loop: import, review, publish, verify the citation in chat, then ship a v2 edit without losing the version history your compliance office will ask about in two years.

## What you'll make

"Central Line Maintenance & CLABSI Prevention Policy" — published in your organization's read-only Policy Library, cited (with version) when members ask questions it answers, revised once to prove the version history holds, and optionally wired to the CDC page it's based on for change monitoring.

## Before you start

- Your organization is on [Max](/plans/) {{< tier-badge "max" >}} with the **Policies** add-on active. Policies (the qPolicy product) is an add-on to Max, not a settings toggle — if your org doesn't have it yet, that's a conversation with our team; see [Policies](/organizations/policies/).
- You're an org admin, or a department admin if the policy will be scoped to your department.
- The policy as a DOCX (PDF and Markdown import too).

<div class="steps-container">

{{< step num="1" title="Confirm the Policies add-on is active" >}}
Once the add-on is active for your organization, admins get the policy management area alongside the rest of the org admin surface. Members see nothing yet — nothing exists for them until you publish.

**You should see:** a policy management area available to you as an admin, with an empty policy list.
{{< /step >}}

{{< step num="2" title="Import the DOCX" >}}
Import `CLABSI_Prevention_Policy_v4_FINAL_(2).docx` — yes, that filename; every hospital has one. Lumen extracts the content into a draft. If a policy with the same title already existed, Lumen would ask whether this is a new policy or a new version of the existing one — no accidental duplicates. Your original file stays the document of record.

**You should see:** a draft policy with the extracted text laid out for review — visible to policy admins only.
{{< /step >}}

{{< step num="3" title="Review the draft and fix the headings" >}}
Committee DOCX files carry formatting scar tissue, and extraction is honest about it. Read the draft top to bottom and tidy the structure: promote the section titles ("Scope," "Dressing Changes," "Hub Disinfection") to real headings, fix any list that flattened into a paragraph, and delete the tracked-changes ghost text if any survived. Clean headings matter beyond aesthetics — they're how the right *section* of the policy gets found when a member asks a narrow question.

**You should see:** a draft that reads like the approved policy, with a clean heading structure.
{{< /step >}}

{{< step num="4" title="Publish" >}}
Publishing is an explicit, deliberate act — a draft never leaks to members, and until now only policy admins could see this one. Publish it. The action lands in the org audit log, like every policy admin action.

**You should see:** the policy live in the **read-only Policy Library** every member can browse, marked as version 1 (or the version you designated). Members can read it; they can't edit, fork, or delete it.
{{< /step >}}

{{< step num="5" title="Verify the citation in chat" >}}
Ask the question the policy answers, the way a nurse would at 3 a.m.:

```
How often do we change central line dressings, and when do we
change one early?
```

**You should see:** an answer prefixed with your institution's position, citing **Central Line Maintenance & CLABSI Prevention Policy — v1, published**, with a link into the Policy Library. Not a plausible summary of general practice — your policy, the version your committee approved.

{{< callout type="info" >}}
Policy answers don't replace clinical judgment — they replace *hunting for the document*. The clinician applies judgment to the right text instead of a remembered approximation.
{{< /callout >}}
{{< /step >}}

{{< step num="6" title="Make an edit and publish v2" >}}
Now prove the governance. Edit the policy — say the committee tightened the gauze-dressing change interval. The edit creates a **draft**; the published v1 stays exactly what members see until you deliberately publish again. Publish the revision.

**You should see:** members now get v2 in the Library and in citations, and the policy's linear version history shows both versions — what changed, when, and which version was in force. When compliance asks "what did the policy say last March," the answer is a lookup. (When a policy is eventually retired, archive it — it stops being cited, but history is retained.)
{{< /step >}}

{{< step num="7" title="Optional: monitor the CDC source it's based on" >}}
Your CLABSI policy leans on a CDC guideline page. Register that page as a monitored **authority source**: when it changes in a way that may affect your policy, a finding lands in a review queue with a suggested amendment your team can accept as a draft or dismiss. Nothing publishes without a human. The full loop is covered in [Authority-source monitoring](/organizations/policy-monitoring/).

**You should see:** the source registered and the monitoring loop armed — the policy office finds out about upstream changes from a queue, not from a survey citation two years later.
{{< /step >}}

</div>

## Troubleshooting

**The imported draft looks mangled.** Heavily formatted DOCX files (nested tables, text boxes, tracked changes) extract imperfectly. Fix it in the draft editor — that's what the review step is for — or re-export a cleaned copy from Word and import again.

**Members don't see the policy.** Two checks: is it actually *published* (drafts are admin-only by design), and is it scoped correctly? A department-scoped policy is visible to that department's members, not the whole organization. Org admins see everything; members see org-wide policies plus those of their own departments.

**Chat doesn't cite the policy.** Confirm it's published, then ask a question the policy text directly answers. If a Knowledge Pack document covers the same ground, note that policies are the stronger guarantee — governed, versioned, explicitly published — and the citation will say which source answered.

**Import says the title already exists.** That's the duplicate guard working. Choose "new version" if this supersedes the existing policy; choose "new policy" only if it's genuinely a different document.

## Next steps

- [Turn your protocols into a Knowledge Pack](/guides/build-a-knowledge-pack/) — for reference content that doesn't need policy-grade governance
- [Authority-source monitoring](/organizations/policy-monitoring/) — the compliance loop behind step 7
- [Policies](/organizations/policies/) — the full feature reference, department scoping, and FAQ
