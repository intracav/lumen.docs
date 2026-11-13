---
title: "Share and reuse a workflow"
navTitle: "Share and reuse"
description: "Share a Lumen workflow with your department or team, save a runnable copy others can use from a simple form, and export or import workflows as files."
lead: "Build it once, and let your colleagues use it too."
weight: 5
icon: share
glance:
  what: "How to share a workflow with your department or team, save a runnable copy with a simple form, and export or import a workflow file."
  who: "Workflow owners in a Lumen team, and anyone who wants to reuse a workflow."
  why: "So a workflow that works for one person becomes a shared routine, without everyone rebuilding it."
  needs: "A workflow you own that belongs to a team (Lumen's word for an organization). About 2 minutes."
  result: "A workflow your colleagues can view, run or copy."
---

You've built a referral-triage workflow that works. Now the rest of the department wants it. You can share it with your department or the whole team, save a runnable copy colleagues use from a simple form, or export it as a file. Sharing never lets anyone else change your original.

## Before you start

- **You own the workflow**, and it belongs to a team. In Lumen, a *team* is your organization's shared workspace. Personal workflows can't be shared until they're in a team.
- The workflow runs cleanly. See [Runs and history](/workflows/running/).

## How to share a workflow

{{< steps >}}
{{< step title="Open the workflow" >}}Open it in the editor.{{< /step >}}
{{< step title="Open sharing" >}}Click **Share with your team** in the toolbar. The **Who can see this workflow?** panel opens.{{< /step >}}
{{< step title="Choose who" >}}Choose **Personal** (only you), **Department**, or **Team** (everyone in your team).{{< /step >}}
{{< step title="Save" >}}Click **Update sharing**.{{< /step >}}
{{< /steps >}}

People it's shared with can view, run and make their own copy. Only you can change the original.

## How to save a runnable copy

A runnable copy lets someone use the workflow from a simple form without opening the canvas.

{{< steps >}}
{{< step title="Open the save option" >}}In the editor toolbar, click **Save as a runnable workflow**.{{< /step >}}
{{< step title="Save it" >}}Click **Save to my library**. Lumen saves a copy that anyone you share it with can run from a form.{{< /step >}}
{{< /steps >}}

## How to export or import a workflow

In the **Workflows** list, open a workflow's menu and choose **Export as JSON** to save it as a file. To bring a file in, click **Import**, then **Import from JSON…**. Use this to keep a backup or move a workflow between accounts.

## What you'll see

{{< lui-block title="Who can see this workflow?" sub="People it's shared with can view and fork — only you can change it." >}}
{{< lui-rows >}}
{{< lui-row type="radio" title="Personal" body="Only you." >}}
{{< lui-row type="radio" title="Department" body="Vascular Access" >}}
{{< lui-row type="radio" checked=true title="Team" body="Everyone in Harbor Valley Medical Center can view." >}}
{{< /lui-rows >}}
{{< lui-actions "Update sharing" >}}
{{< /lui-block >}}

## Tips

- **Share with a department first.** Let a small group use it for a few weeks before sharing it team-wide.
- **Name it for what it does.** "Referral Intake & Triage — Vascular Access" tells colleagues what they're running.
- **Export before big changes.** A JSON copy is a simple backup, alongside the versions Lumen keeps.

## Limits and safety

- **Only the owner can share.** **Share with your team** appears only for the owner of a team workflow.
- **Shared isn't the same as reviewed.** Before a department relies on a workflow, have someone check its steps and recipients.
- **Check connected accounts.** A workflow that reads or sends email uses the connected account it was set up with. Review email and CRM steps before you share.
- **No public gallery.** Runnable copies are shared within your team, not published for other Lumen users.

## FAQ

{{< faq question="Can people I share with change my workflow?" >}}
No. They can view it, run it and make their own copy. Only you can change the original.
{{< /faq >}}
{{< faq question="Can I share a workflow with someone outside my team?" >}}
Not directly. Export it with **Export as JSON** and send the file; they can bring it in with **Import from JSON…**. Check that it contains no addresses or details you don't want to share.
{{< /faq >}}
{{< faq question="Why don't I see Share with your team?" >}}
Either you aren't the workflow's owner, or the workflow is personal rather than in a team.
{{< /faq >}}

## Next steps

{{< related "/workflows/running/" "/workflows/triggers/" "/organizations/" >}}
