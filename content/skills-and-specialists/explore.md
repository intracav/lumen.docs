---
title: "Find what Lumen can do in Explore"
navTitle: "Explore"
description: "Explore is the one list of Lumen's specialists, skills and built-in tools. Search by task, see what your plan includes, and start with one click."
lead: "One screen answers \"can Lumen do this?\": every specialist, skill and built-in tool, grouped by the job you're trying to get done."
weight: 1
icon: compass
glance:
  what: "Explore is the screen in Lumen that lists every specialist, skill and built-in tool, with examples you can start from."
  who: "Anyone using Lumen, on any plan. Team admins can use it to see what their staff can reach."
  why: "To find the right starting point for a task without knowing Lumen's vocabulary first."
  needs: "A Lumen account. About 2 minutes."
  result: "A new chat, or a specialist's page, ready for your task."
---

You know the job, such as checking a medication list, finding a billing code or building a staff quiz, but not what Lumen calls the feature that does it. **Explore** fixes that. It is one list of everything Lumen can do for you, which you can search by plain words or filter by the task in front of you.

Explore holds three kinds of things:

- **Specialists**: focused assistants that take a kind of work from start to finish, such as **Medication Review**.
- **Skills**: instructions Lumen follows for one kind of output, such as a **Discharge Summary**.
- **Built-in tools**: the lookups Lumen uses on its own mid-answer, such as **Check Drug Interactions**. You never have to switch these on.

## Before you start

- Sign in at [lumen.intracav.ai](https://lumen.intracav.ai). Explore is in the sidebar on every plan.
- If you belong to a team, check which workspace you're in (Personal or your team). Some specialists, such as **Clinical Educator**, work only inside a team workspace, and team skills appear only there.

## How to find and start something

{{< steps >}}
{{< step title="Open Explore" >}}Click **Explore** in the sidebar. The page opens with **Start with…**, a short row of suggestions that changes each day.{{< /step >}}
{{< step title="Narrow it down" >}}Type in the search box, for example "renal dosing" or "discharge". Or pick the job you're doing: **Answer a clinical question**, **Check medications**, **Find evidence**, **Code & bill**, **Write & make files**, **Teach & educate**, **Plan, schedule & records** or **Protect privacy**. To see only one kind, choose **Specialists**, **Skills** or **Built-in tools**.{{< /step >}}
{{< step title="Open the details" >}}Click a card. The details panel shows **What it does**, **When it helps**, **How it works**, **Before you start** (if it needs setup), an **Example output** and **Try asking** prompts.{{< /step >}}
{{< step title="Start" >}}For a specialist, click **Open** followed by its name to go to its own page, then pick a task or describe yours and click **Start**. For a skill or tool, click **Start a chat with** followed by its name. Lumen opens a new chat with it ready. Nothing is sent until you press Send.{{< /step >}}
{{< /steps >}}

{{< callout type="tip" title="Try asking" >}}
Click any prompt under **Try asking** to open a new chat with that text ready to edit. Replace the example details with your own before you send.
{{< /callout >}}

## What you'll see

Each card carries a status chip, so you know before you click whether it will work for you:

| Chip | What it means |
|---|---|
| **Included** | Ready to use on your plan. |
| **Pro plan** | A built-in tool that needs Pro or above. On a lower plan, Lumen answers without it. |
| **Needs setup** | Works once something is connected, for example **Patient Record (FHIR)** needs an EHR connection. |

{{< composer menu="specialists" items="Medication Review|Reconciliation, interaction screening, and deprescribing review.;Clinical Educator|Competency modules from your own policies and guidelines.;Prior Authorization|Prior-auth requests, denial appeals, and peer-to-peer prep." text="@Medication Review" >}}

The same specialists also appear when you type `@` in any chat, as above. Skills appear when you type `/`.

## Good to know

- **Specialists open their own page.** The page shows what the specialist produces (**You get:**), one-tap tasks under **Start with**, a box under **Or describe the task**, anything **Running now**, and **Pick up where you left off** for recent work.
- **Your own skills are here too.** Skills you made are marked **Yours**, and your team's are marked **Your team**. Click **Manage your skills** to create or edit your own. See [Use and create skills](/skills-and-specialists/skills/).
- **The feature map is different.** Explore is for getting work done. The *feature map*, opened from Lumen Pilot, shows where every part of the app is and how the parts fit together. See [Feature map](/pilot/feature-map/).
- **Old links still work.** Links to the former specialist gallery open Explore with only specialists showing.

## Limits and safety

- Explore shows what exists and what your plan includes. It doesn't grant access: Lumen checks your plan and permissions again on every message.
- Example outputs in Explore are illustrations of the shape of a result, labeled **Example · illustrative**. They are not real results.
- Some specialists need a higher plan or a team workspace. Their page tells you which plan, with a **See plans** button.

## FAQ

{{< faq question="What's the difference between a specialist, a skill and a tool?" >}}
A tool looks one thing up, such as a drug label or an ICD-10 code. A skill tells Lumen how to shape an answer, such as a SOAP note. A specialist takes on a whole piece of work, uses many tools, and saves a checked result you can review.
{{< /faq >}}
{{< faq question="Do I have to start from Explore?" >}}
No. You can type `@` for a specialist or `/` for a skill in any chat, or ask in your own words. Lumen chooses tools on its own and applies a matching skill when your request calls for one.
{{< /faq >}}
{{< faq question="Why does a tool say \"Pro plan\"?" >}}
A few built-in tools, such as **Clinical Trials** search, deep web research, email and EHR access, need Pro or above. See [Plans](/plans/) and [intracav.ai](https://intracav.ai) for pricing.
{{< /faq >}}
{{< faq question="Can my organization add its own skills?" >}}
Yes. Skills shared by your team appear in Explore marked **Your team** when you're in that team's workspace.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/working-with-a-specialist/" "/skills-and-specialists/specialists/" "/skills-and-specialists/skills/" "/tools/tool-index/" >}}
