---
title: "Build a staff schedule that checks every rule"
navTitle: "Build a staff schedule"
description: "Describe your unit's rules and time off, and the Staff Scheduler builds a schedule with a solver, checks every rule, and exports it to Excel."
lead: "Tell Lumen your coverage rules, shift times and time off. A solver builds the schedule, every rule is checked, and you get an Excel file to post."
weight: 22
icon: calendar
tier: pro
who: "nurse managers and charge nurses"
glance:
  what: "The Staff Scheduler is a Lumen specialist that turns your scheduling rules into a staff schedule. A solver places the shifts, then every rule is checked against the finished schedule."
  who: "Nurse managers, charge nurses, department heads and clinical program directors who build rosters or rotations."
  why: "You stop hand-building grids and finding the broken rule two weeks later. When the rules can't all be met, you're told which one is the problem, before anything is posted."
  needs: "A Lumen Pro plan or above, your rules written down (coverage, shifts, limits, accommodations), and any time-off requests. About 15 minutes."
  result: "A schedule that has been checked rule by rule, a plain list of any conflicts, and an Excel workbook ready to post."
---

The manager of the vascular access team at Harbor Valley Medical Center builds a six-week schedule for nine nurses. Two never work weekends, three have time off in the middle of the block, and every weekday needs at least two people. By hand, that takes an evening and still misses something. With the Staff Scheduler, she describes the rules once, gets a schedule that has been checked against every one of them, and decides the one trade-off that the rules can't settle.

Every name and date in this guide is fictional.

## Before you start

- **Plan.** The Staff Scheduler needs **Pro** or above {{< tier-badge "pro" >}}. See [Plans](/plans/).
- **Write the rules down.** The solver applies exactly the rules you give it, and nothing else. Include:
  - shift times and how many people each shift needs
  - limits, such as maximum days in a row or weekends off
  - standing accommodations, such as "never works weekends"
  - time off, with dates
- **Bring what you have.** A roster spreadsheet, last cycle's schedule or time-off emails can be attached. Lumen reads them and pulls out the facts.

## How to build the schedule

{{< steps >}}
{{< step title="Call the Staff Scheduler" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai) and start a new chat. Type `@` and choose **Staff Scheduler**. The mention must come at the start of your message.
{{< /step >}}

{{< step title="Describe the schedule" >}}
Describe it the way you'd brief a new charge nurse, or attach your spreadsheet and emails with the paperclip:

```text
@Staff Scheduler Build a 6-week schedule for our 9-nurse vascular access
team, starting Monday March 2. Shifts are 0700–1930.

Coverage: at least 2 nurses every weekday, at least 1 on weekend days.
Rules: no more than 3 days in a row; everyone gets at least every other
weekend off; Priya and Tomas never work weekends. Spread weekend shifts
evenly across the other seven.

Time off: Dana March 9–13. Marcus March 23–27. Alice April 3.
```
{{< /step >}}

{{< step title="Check the rules Lumen read back" >}}
Before solving, Lumen lists the rules and dates it understood. Read this carefully. If a name is mapped wrongly or a rule is missing, correct it now in a reply. The schedule will follow these rules exactly.
{{< /step >}}

{{< step title="Let the solver build it" >}}
Lumen hands the rules to a solver, a program that places shifts by the rules, and then checks the finished schedule against every rule. Lumen never writes the shifts itself. This takes longer than a normal reply, and you'll see each step as it happens.
{{< /step >}}

{{< step title="Read the check, not just the grid" >}}
The result reports each rule and whether it held. If the rules can't all be met, Lumen tells you so and names the rule that blocks it, with the people and dates affected. It doesn't quietly break a rule to make the grid fit.
{{< /step >}}

{{< step title="Decide the trade-off and run it again" >}}
Reply with your decision, for example:

```text
Add our per-diem, Noor, weekends only, at most 2 shifts a month.
Solve again and re-check every rule.
```

The whole schedule is solved and checked again, including the rules that were already fine.
{{< /step >}}

{{< step title="Export to Excel" >}}
When every rule holds, ask:

```text
Export the schedule as an Excel workbook.
```

Lumen creates an .xlsx file you can download and post. Workbooks include the schedule and can include coverage, hours per person and fairness.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="chat-artifact" alt="A Lumen chat with the Staff Scheduler reporting a rule conflict and offering two options" caption="The Staff Scheduler reports a conflict instead of breaking a rule." url="lumen.intracav.ai" >}}
{{< chat-demo title="Six-week vascular access schedule" specialist="Staff Scheduler" caption="Illustration with fictional staff and dates." >}}
{{< user >}}Did every rule hold?{{< /user >}}
{{< lumen thought="3" tools="Staff scheduler" >}}
**6 of 7 rules hold across all 42 days.** One conflict:

**Week of March 9.** Dana is on time off, and Priya and Tomas don't work weekends. That leaves six nurses to cover both weekend days while everyone keeps every other weekend off. It can't be done without one of these:

- **(a)** one nurse works two weekends in a row, or
- **(b)** Saturday March 14 has nobody scheduled.

I haven't picked one. Which do you want, or is there a per-diem nurse I should add?
{{< follow-ups "Add a per-diem nurse|Allow one back-to-back weekend|Show the week of March 9" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check it worked

- The rule check says every rule holds, with no conflicts listed.
- Time off is respected: nobody is scheduled on the dates you gave.
- The Excel file opens and matches the schedule in the chat.

## Tips

- **State changes as rules.** Instead of editing a cell after export, ask: "Swap Alice and Keisha on March 20, and re-check every rule." A hand edit isn't checked.
- **Loosen the rule that's named.** When a conflict is reported, relax that one rule or add people, rather than weakening rules at random.
- **Confirm names.** "P. Sharma" in a spreadsheet and "Priya" in an email are matched as one person. Check the matching in the read-back before solving.

## Limits and safety

- **The solver applies only the rules you give it.** An unwritten rule, such as a skill mix or a union agreement, isn't checked unless you state it.
- **A checked schedule isn't an approved schedule.** Review it against your organization's staffing policies before posting.
- **Lumen doesn't message staff.** The Staff Scheduler doesn't email schedules to people. You post or share the file yourself.
- **Not a timekeeping system.** It builds and checks schedules. It doesn't track hours worked or pay.

## FAQ

{{< faq question="What if the rules can't all be met?" >}}
Lumen tells you which rule blocks the schedule and who it affects, and asks you to decide. It never breaks a rule silently.
{{< /faq >}}
{{< faq question="Can it read our existing roster spreadsheet?" >}}
Yes. Attach it, along with any time-off emails. Lumen reads them and lists the facts it took from them before solving.
{{< /faq >}}
{{< faq question="Will the same rules always give the same schedule?" >}}
Yes. The solver is deterministic: the same rules produce the same schedule, which makes changes easy to compare.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/specialists/" "/tools/document-generation/" "/guides/onboard-your-team/" "/learn/hallucinations-and-grounding/" >}}
