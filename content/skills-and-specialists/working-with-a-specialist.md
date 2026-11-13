---
title: "Work with a specialist"
navTitle: "Working with a specialist"
description: "Start a specialist from Explore or with @ in chat, follow each step it takes, approve actions outside Lumen, and review its checked result."
lead: "Hand a whole job to a specialist, such as a medication review or a competency module, and watch every step. You stay in the same chat the whole time."
weight: 2
icon: list-checks
aliases:
  - /skills-and-specialists/agent-mode/
glance:
  what: "A specialist is a focused assistant in Lumen that takes a kind of work from start to finish, shows each step, and saves a result that Lumen has checked against its sources."
  who: "Clinicians, educators, pharmacists, billing staff, unit leaders and device-company teams with multi-step work."
  why: "To turn a job that takes many lookups and a document into one request you can review, instead of ten separate questions."
  needs: "A Lumen account. Most specialists work on every plan; a few need Plus or Max or a team workspace. A task can run up to about an hour."
  result: "A chat working with the specialist, a list of the steps it took, and a checked result you can open, edit and sign off."
---

Some clinical work isn't one question. Reconciling a discharge medication list means reading the list, finding each drug's label, screening every pair, checking kidney function against each label, and writing it up. A **specialist** does that whole sequence for you, in a chat, and shows you each step as it goes. When it finishes, Lumen checks the result against the sources it quoted before you see it.

## Before you start

- **Plan.** Most specialists work on every plan. Some need more: **Clinical Educator** needs Plus, and specialists for device makers, such as **Clinical Trial Manager**, need Max. A specialist's page tells you if your plan doesn't include it.
- **Workspace.** Some specialists, such as **Clinical Educator** and **Clinical Trial Manager**, work only inside a team workspace (an *organization*, called a *team* in Lumen).
- **Have your material ready.** A medication list, notes or a policy document. Many tasks let you attach files. Use fictional or de-identified details unless your organization allows patient information in Lumen.

## How to start a specialist

{{< tabs >}}
{{< tab name="From its page (recommended)" >}}
{{< steps >}}
{{< step title="Open Explore" >}}Click **Explore** in the sidebar, then choose **Specialists**.{{< /step >}}
{{< step title="Open the specialist" >}}Click a card, for example **Medication Review**, then click **Open Medication Review**. Its page shows what you get (**You get:**) and the tasks it does best under **Start with**.{{< /step >}}
{{< step title="Pick a task or describe yours" >}}Click a task, such as **Review a medication list**, and fill in the short form. If the task uses files, click **Continue to attach files**. Or type your own request under **Or describe the task**.{{< /step >}}
{{< step title="Click Start" >}}Lumen opens a new chat that works with the specialist and starts on your request.{{< /step >}}
{{< /steps >}}
{{< /tab >}}
{{< tab name="From any chat with @" >}}
{{< steps >}}
{{< step title="Call the specialist" >}}In the message box, type `@` or click **Specialists**. Pick one from the list, for example **Prior Authorization**.{{< /step >}}
{{< step title="Send your request" >}}Write what you need and press Send. The specialist handles that message.{{< /step >}}
{{< step title="Keep it for the whole chat (optional)" >}}After it answers, Lumen asks *Keep going as Prior Authorization for this whole conversation?* Click **Stay** to keep working with it.{{< /step >}}
{{< /steps >}}
{{< /tab >}}
{{< /tabs >}}

{{< screenshot src="agents-launch" alt="The Medication Review specialist page with tasks under Start with and a box under Or describe the task" caption="A specialist's page: what you get, tasks to start from, and your recent work." url="lumen.intracav.ai/agents/medication-review" >}}
{{< steps >}}
{{< step title="Medication Review" >}}Reconciliation, interaction screening, and deprescribing review.

*You get: A label-screened review: every pair checked or listed as untested, renal rules computed, proposals for the prescriber*{{< /step >}}
{{< step title="Start with" >}}**Review a medication list**: Label interactions, renal checks and deprescribing candidates. Fields: *Medications* and *Age, sex, weight, creatinine or eGFR, key problems*.{{< /step >}}
{{< step title="Or describe the task" >}}"Reconcile this med list against the discharge summary — flag any conflicts." **Start**{{< /step >}}
{{< /steps >}}
{{< /screenshot >}}

## How to follow and steer the work

{{< steps >}}
{{< step title="Watch the task strip" >}}Under the specialist's reply, a task strip names the step it's on, for example *Working — 1 step done, now: reading a document*. Click **Details** to see every step.{{< /step >}}
{{< step title="Approve or decline actions" >}}If the specialist wants to do something that leaves Lumen, such as send an email, an approval card appears. Nothing happens until you click **Approve**. See [Approve actions](/skills-and-specialists/approvals/).{{< /step >}}
{{< step title="Stop it if you need to" >}}Click **Stop** on the task strip. The strip then shows how many steps ran before you stopped it.{{< /step >}}
{{< step title="Open the result" >}}When it's done, click the result's link (**Open** followed by its title) to see the result with its verdict, its sources and what was checked. See [Verified results](/skills-and-specialists/verified-results/).{{< /step >}}
{{< step title="Hand back when you're finished" >}}The chat header shows **Working with** and the specialist's name. Click **Back to normal chat** to continue as an ordinary chat.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="agents-task-strip" alt="A Medication Review chat showing the task strip with completed steps and a link to the saved review" caption="The task strip lists what the specialist did. The verified chip appears when the result passed its checks." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Discharge med review" specialist="Medication Review" caption="Illustration with a fictional patient at Harbor Valley Medical Center. Real reviews quote the FDA labels they used." >}}
{{< user attach="4C-discharge-meds.pdf" >}}Review this discharge list. 84F, 58 kg, creatinine 1.4, atrial fibrillation, falls.{{< /user >}}
{{< lumen tools="Medication data retrieved, FDA drug data retrieved, Interaction check complete, Saved and checked" sources="9" >}}
{{< task-strip >}}
{{< task state="done" label="Read the discharge list" meta="11 medicines" >}}
{{< task state="done" label="Resolved each medicine to its FDA label" >}}
{{< task state="done" label="Screened every pair for label mentions" >}}
{{< task state="done" label="Computed kidney function the way each label asks" >}}
{{< task state="done" label="Saved the review and checked its quotes" >}}
{{< /task-strip >}}

**Apixaban 5 mg twice daily**: the label's dose reduction applies when two of three criteria are met: age 80 or older, weight 60 kg or less, serum creatinine 1.5 mg/dL or higher {{< cite 1 >}}. This patient meets two (age 84, weight 58 kg). Proposal for the prescriber: review for 2.5 mg twice daily.

**Simvastatin 40 mg with amlodipine**: the simvastatin label says not to exceed 20 mg daily with amlodipine {{< cite 2 >}}. Proposal: review the simvastatin dose.

{{< artifact type="review" title="Medication review — fictional patient" sub="Medication review · version 1" >}}
{{< verdict >}}Passed its checks: every quote was found word for word in the cited label.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

In your chat list, a chat that works with a specialist shows **With** and the specialist's name under its title, so you can find it again.

## Good to know

- **It's still a chat.** You can reply, ask follow-ups, attach more files or correct it ("the weight is 62 kg") at any point.
- **Close the tab if you need to.** Specialist work runs on Lumen's servers. You can close your laptop, and the work keeps going and is there when you come back, on any device. A single task can run up to about an hour.
- **Specialists hand off to each other.** If you ask a specialist for work that belongs to another, it says *This looks like work for* and names it. Click **Switch to** followed by its name, or **Stay**.
- **See how it works.** On a specialist's page, click **See this as a workflow** to see its steps drawn as a diagram.
- **Some specialists coordinate others.** **Clinical Trial Manager** can send parts of a job to other specialists at the same time and shows each one's progress.

## Limits and safety

- A specialist proposes. It never places orders, signs, or submits anything on its own. A prior authorization packet is a draft for you to review; sending one is your act.
- "Passed its checks" means each quote was found in its source and the result met that specialist's rules. It doesn't mean the result is correct or complete. Read it and open the sources.
- If the server restarts during a task, the task stops and the strip says *This run stopped (the server restarted). Nothing after step* followed by a number *ran.* Start it again; the earlier steps are kept in the chat.
- A task has a time limit of about an hour. Break very large jobs into parts.

{{< callout type="safety" title="Check before you act" >}}
Specialists can be wrong, and they only know what you give them and what their sources say. Before acting on a result, open its sources, check them against your organization's policies, and use your clinical judgment.
{{< /callout >}}

## FAQ

{{< faq question="Is a specialist the same as an AI agent?" >}}
Yes, in general terms. In Lumen we call them specialists. Each one has a defined job, the tools it may use, the actions that need your approval, and the checks its result must pass. See [What is a clinical AI agent?](/learn/what-is-a-clinical-ai-agent/)
{{< /faq >}}
{{< faq question="Can I use a specialist and a skill together?" >}}
Yes. Each specialist already loads the skills it needs. You can also add another skill with `/` for a single message.
{{< /faq >}}
{{< faq question="What happens if I close the tab while it's working?" >}}
The work continues on Lumen's servers. Open the chat again from your chat list, on any device, to see where it got to.
{{< /faq >}}
{{< faq question="Why did my @ mention not start the specialist?" >}}
The specialist may need a higher plan, a team workspace, or a product your organization hasn't enabled. Lumen answers as an ordinary chat and tells you why.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/approvals/" "/skills-and-specialists/verified-results/" "/skills-and-specialists/specialists/" "/skills-and-specialists/explore/" >}}
