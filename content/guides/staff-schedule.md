---
title: "Build a Staff Schedule with AI"
description: "Describe your team's rules and PTO — a deterministic solver builds the schedule, verifies every rule, and exports to Excel. No hand-written grids."
weight: 22
audience: clinician
time: "~15 minutes"
keywords: ["AI staff scheduling", "nurse schedule generator", "shift scheduling with constraints", "on-call schedule AI"]
---

## What you'll make

A six-week staff schedule that has been **checked against every rule you gave it** — coverage minimums met, PTO respected, weekend accommodations honored — with a verification report that says so, rule by rule, and an Excel export ready to post. And when your rules genuinely can't all be satisfied at once, you get the honest answer: *which* constraint is binding, not a grid that quietly breaks one.

We'll build a real-shaped example: a **six-week schedule for a 9-nurse vascular access team** with PTO in the middle of it, two staff who never work weekends, and a minimum-coverage rule. Every name and date below is fictional.

## Before you start

- **Any plan works.** Scheduling runs on every Lumen plan; see [Plans](/plans/) if you're bumping into message limits.
- **Get the rules out of your head and into words.** Coverage minimums, shift times, consecutive-day limits, weekend rotation, individual accommodations — if a rule matters, it has to be stated. The solver enforces exactly what you give it.
- **Attach what you already have.** A roster spreadsheet, last cycle's schedule, PTO request emails — the [Staff Scheduler](/skills-and-specialists/specialists/) reads attached sources in full and extracts the facts, with a verbatim quote behind every availability claim.

## Build the schedule

<div class="steps-container">

{{< step num="1" title="Bring in the Staff Scheduler and state every constraint" >}}
Type **@** in any chat and pick **[Staff Scheduler](/skills-and-specialists/specialists/)**. Describe the schedule the way you'd brief a new charge nurse — or attach your spreadsheet and emails and let it read them:

```text
@Staff Scheduler — build a 6-week schedule for our 9-nurse vascular
access team, starting Monday March 2. Shifts are 0700–1930.

Coverage: at least 2 nurses every weekday, at least 1 on weekend days.
Rules: no one works more than 3 consecutive days; everyone gets at
least every other weekend off; Priya and Tomas never work weekends
(standing accommodation). Rotate weekend load evenly across the
other seven.

PTO: Dana out March 9–13. Marcus out March 23–27. Alice out April 3.
```

**You should see:** the Staff Scheduler chip appear, then Lumen restating your rules as a formal schedule spec — every constraint listed back to you, every PTO date quoted — *before* any solving starts. Read that spec carefully; it's your chance to catch a rule it heard wrong.
{{< /step >}}

{{< step num="2" title="Let the solver work — and understand what's actually happening" >}}
This Specialist works differently from every other one: **it interprets, the solver schedules.** Lumen extracts the spec; a deterministic constraint solver produces the assignments; then every rule is verified against the finished grid. Lumen never hand-writes a schedule cell, which means no "it looked fine until Tuesday week 4" surprises — the schedule is checked against every rule, not vibes.

**You should see:** solve and verification steps appearing live. This takes longer than a chat reply, because reading, mapping, solving, and verifying are real steps — that's the [Shift Scheduler skill](/skills-and-specialists/skills/) doing its job.
{{< /step >}}

{{< step num="3" title="Read the verification report, not just the grid" >}}
The result comes with a rule-by-rule report: each constraint, and whether it held across all six weeks. If everything can't be satisfied at once, you don't get a broken grid — you get the binding constraint, named.

{{< chat-demo title="An infeasible week, reported honestly" >}}
{{< user >}}
Did every rule hold?
{{< /user >}}
{{< lumen >}}
**Verified: 6 of 7 rules hold across all 42 days.** One conflict:

**Week of March 9** — Dana is on PTO, and Priya and Tomas don't work weekends. That leaves 6 nurses to cover both weekend days while keeping "at least every other weekend off" for all of them. The math doesn't close: weekend coverage that week requires either **(a)** one nurse working back-to-back weekends, or **(b)** dropping Saturday March 14 to zero scheduled coverage.

I have **not** silently picked one. Option (a) affects Keisha, who is otherwise even in the rotation. Which trade-off do you want — or is there a per-diem I should add to the roster?
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** violations and trade-offs surfaced as decisions for *you*, with the specific staff and dates named — never resolved silently.
{{< /step >}}

{{< step num="4" title="Decide the trade-off and re-solve" >}}
Answer the question and let it re-run:

```text
Add our per-diem, Noor, available weekends only, max 2 shifts per
month. Re-solve the week of March 9 with her covering Saturday,
and re-verify everything.
```

**You should see:** a fresh solve with the new roster, and a clean verification report — all rules holding, including the ones that were fine before (re-verification is total, not incremental).
{{< /step >}}

{{< step num="5" title="Export to a spreadsheet" >}}
When the report is clean:

```text
Export the schedule as an Excel workbook — one tab for the grid,
one tab for the per-nurse shift counts.
```

**You should see:** a download card for an .xlsx file ready to post to the unit — see [Spreadsheets (Excel)](/tools/document-generation/) for what else the workbook export can carry, like conditional formatting and summary tabs.
{{< /step >}}

</div>

{{< callout type="info" >}}
**Why the honesty matters.** A hand-built schedule fails quietly — someone notices the uncovered Saturday two weeks in. A solved-and-verified schedule fails *loudly, before publication*: an unsatisfiable rule set is reported as exactly that, with the binding constraint named. "It says so" is the feature.
{{< /callout >}}

## Troubleshooting

- **"Infeasible" — the solver says the rules can't all be satisfied.** That's information, not an error. The report names the binding constraint; loosen that one specifically (*"allow one back-to-back weekend per cycle"*) or add capacity, rather than weakening rules at random.
- **Names don't line up across your sources.** "P. Sharma" in the roster and "Priya" in the PTO email get resolved into one person, but confirm the mapping in the spec Lumen reads back in step 1 before solving — a mis-mapped name means a wrong schedule that verifies cleanly.
- **You want to hand-tweak one cell after export.** Fine — but a manual edit is unverified by definition. Better: state the change as a constraint (*"swap Alice and Keisha on March 20, re-verify"*) and let the solver confirm nothing else broke.

## Next steps

- **Rolling Lumen out to the whole unit?** [Onboard Your Clinical Team to Lumen](/guides/onboard-your-team/) — get everyone building their own schedules and notes.
- **Why doesn't the AI just write the grid itself?** [Hallucinations and grounding](/learn/hallucinations-and-grounding/) — the reasoning behind "the model interprets, the solver decides."
- **Meet the rest of the roster:** [The 11 Lumen Specialists](/skills-and-specialists/specialists/) — the Staff Scheduler's colleagues for clinical, research, and admin work.
