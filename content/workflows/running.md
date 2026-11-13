---
title: "Run a workflow and read its history"
navTitle: "Runs and history"
description: "Run a Lumen workflow, read each step's result, replay a past run, and restore an earlier version of the workflow."
lead: "See exactly what every step did, and go back when something changes for the worse."
weight: 4
icon: history
glance:
  what: "How to run a workflow, check each step's result, find past runs in Run history, replay one, and restore an earlier version."
  who: "Anyone who builds, tests or looks after a workflow."
  why: "Every run is recorded step by step, so you can see where a result came from and fix the step that went wrong."
  needs: "A saved workflow. About 5 minutes."
  result: "A tested workflow and a clear record of its runs."
---

A workflow that runs every week needs a way to answer two questions: what did it do last Monday, and why did this week's email look odd? Lumen records each run step by step. You can open any run, see what each step received and produced, replay it with the same input, and roll the workflow back to an earlier version.

## Before you start

A saved workflow. See [Build a workflow](/workflows/editor/).

## How to run a workflow

{{< steps >}}
{{< step title="Click Run" >}}In the editor toolbar, click **Run**. Lumen saves the current canvas first, then starts.{{< /step >}}
{{< step title="Watch the steps" >}}Each step lights up as it runs. A chip shows how many steps are done, then **Finished** with the total.{{< /step >}}
{{< step title="Check each step's result" >}}Click a step to see **Last run** with what it produced. Check the important ones, such as the search results, before trusting the final output.{{< /step >}}
{{< step title="Fix and repeat" >}}Change a step's settings, then right-click it and choose **Run from here** to re-run from that point.{{< /step >}}
{{< /steps >}}

{{< callout type="important" title="Keep the editor open for runs you start there" >}}
A run you start with **Run** in the editor is interactive. Keep the editor open until it finishes. If you leave, you stop seeing its progress, and you shouldn't count on it finishing. For work that must complete without you, use a [trigger](/workflows/triggers/): triggered runs are unattended and run on Lumen's servers.
{{< /callout >}}

## How to find and replay a past run

{{< steps >}}
{{< step title="Open the history" >}}In the editor toolbar, click **Run history**. Every run is listed, whether you started it or a trigger did.{{< /step >}}
{{< step title="Open a run" >}}Click a run to see its steps, each with its status and output. Use **Back to run history** to return.{{< /step >}}
{{< step title="Replay it" >}}Click **Replay this execution with the same input**. This is useful after you fix a step: replay the run that failed and confirm it now works.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="workflows-runs" alt="Run history for the Device Recall Watch workflow, with a list of weekly runs and one run opened to show each step's status" caption="Run history. Each run lists its steps and their status." url="lumen.intracav.ai/workflow" >}}
{{< lui-block title="Run history" sub="Device Recall Watch" >}}
{{< task-strip >}}
{{< task state="done" label="Weekly sweep" meta="Mon 8:00" >}}
{{< task state="done" label="Check FDA recalls" meta="2 found" >}}
{{< task state="done" label="Check adverse events" meta="0 new" >}}
{{< task state="done" label="Write the digest" >}}
{{< task state="done" label="Email the digest" meta="Sent" >}}
{{< /task-strip >}}
{{< lui-actions "Replay this execution with the same input" "Open in editor" >}}
{{< /lui-block >}}
{{< /screenshot >}}

### Step statuses

| Status | Meaning |
|---|---|
| **Running** | The step is working now. |
| **Done** | The step finished. |
| **Reused earlier result** | The step's result was pinned, so Lumen reused it instead of running it again. |
| **Failed (handled)** | The step failed, and the workflow carried on as you set it up to. |
| **Failed** | The step failed and stopped the run. |
| **Skipped** | A condition sent the run down a different path. |
| **Not run** | The run stopped before reaching this step. |

## How to restore an earlier version

Every time you save, Lumen keeps a version.

{{< steps >}}
{{< step title="Open settings" >}}Click **Workflow settings**, then the **Versions** tab.{{< /step >}}
{{< step title="Restore" >}}Find the version that worked and click **Restore**. Confirm **Restore version N?**. Lumen shows **Restored version N**.{{< /step >}}
{{< /steps >}}

## Run settings

In **Workflow settings**:

- **General:** **Timeout (minutes)** (default 15), **Max concurrent runs**, and **Save executions** (**All runs (default)**, **Errors only** or **None (fire-and-forget)**).
- **Error handling:** a **Retry policy** for the whole run (**Max retries** and **Backoff**), and an **Error workflow** to run if this one fails, such as one that emails you.

Steps that use Lumen's AI, such as **Generate Text** and **Agent**, retry on their own up to 3 times when a temporary error happens.

## Tips

- **Pin slow steps while testing.** Pin a search step's result so you can adjust the steps after it without re-running the search every time.
- **Keep all runs at first.** Leave **Save executions** on **All runs (default)** until the workflow has run cleanly for a few weeks.
- **Add an error workflow** for anything important, so a failure reaches someone instead of sitting in the history.

## Limits and safety

- **Editor runs need the editor open.** Use a trigger for unattended work.
- **Runs have a time limit.** The default is 15 minutes per run.
- **Concurrent runs are limited by plan.** Free and Pro can run 3 at once; Plus and Max can run 10.
- **A finished run isn't a checked result.** "Done" means the step ran, not that its output is right. Read clinical output against its sources.
- **No approvals in workflows.** Email, Slack and CRM steps act immediately when the run reaches them.

## FAQ

{{< faq question="Is there a record of runs that triggers started?" >}}
Yes. **Run history** lists every run, whether you clicked **Run** or a schedule, email, webhook or CRM trigger started it.
{{< /faq >}}
{{< faq question="Does Lumen save my workflow when I run it?" >}}
Yes. **Run** saves the canvas first. Otherwise, save with **Save** or {{< kbd "⌘" "S" >}}; there's no automatic save.
{{< /faq >}}
{{< faq question="How do I undo a change that broke the workflow?" >}}
Open {{< ui-path "Workflow settings" "Versions" >}} and **Restore** the last version that worked. Then replay a recent run to check it.
{{< /faq >}}

## Next steps

{{< related "/workflows/triggers/" "/workflows/editor/" "/workflows/publish/" >}}
