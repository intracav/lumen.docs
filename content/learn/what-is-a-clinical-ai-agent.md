---
title: "What is a clinical AI agent?"
navTitle: "What is an AI agent?"
description: "A plain-language guide to AI agents for clinicians: how they differ from a chatbot, how Lumen's Specialists work, and where the limits are."
lead: "An AI agent takes a task, not only a question. This page explains what that means, and how Lumen's version, called a Specialist, keeps you in charge."
weight: 1
icon: user-round-check
keywords: ["what is an AI agent in healthcare", "AI agent for clinicians", "clinical AI agent explained"]
glance:
  what: "An AI agent is an AI system that works toward a goal in several steps, looking things up with real tools along the way. In Lumen, agents are called Specialists."
  who: "Clinicians, educators, managers and anyone deciding whether to hand multi-step work to AI."
  why: "To know what you can safely delegate, what you'll see while the work runs, and what you still have to check."
  needs: "Nothing to read this page. To use a Specialist you need a Lumen account; some Specialists need a paid plan."
  result: "A clear picture of how an AI agent works and how much to trust its output."
---

Think about the difference between a textbook and a resident. A textbook answers the question you bring to it. A resident takes a task, such as "work up this patient's anemia and tell me what you find." The resident plans, orders the right tests, reads the results, changes course when something unexpected appears, and comes back with findings you can check. An **AI agent** is the resident version of AI software. In Lumen, these agents are called **Specialists**.

## What an AI agent is

Most people first meet AI as a chat assistant: you ask a question and it writes an answer. Underneath is a *large language model*, a program trained on a very large amount of text that is good at understanding questions and writing fluent replies. On its own, a language model has three limits:

- It answers from what it absorbed during training, like a colleague answering from memory.
- It gets one pass at your question. It can't notice halfway through that it needs more information and go get it.
- It can describe how to check a drug interaction, but it can't run the check.

An agent adds three things to the model:

1. **Tools.** Real lookups the model can use: literature search, drug databases, calculators, document readers. See {{< term "Tool use" >}}.
2. **A loop.** The agent works in cycles: decide the next step, take it, read what came back, decide again. See [The agentic loop](/learn/agentic-loops/).
3. **A goal.** You give it an outcome to reach ("draft a teaching handout on PICC dressing changes, with sources"), not a single question. It keeps working until the goal is met or it needs you.

## How it works

{{< flow >}}
{{< flow-node kicker="You hand off" title="A task with a goal" icon="message" tint="blue" >}}Describe the outcome you want and attach anything it should read.{{< /flow-node >}}
{{< flow-node kicker="It plans and acts" title="Steps with real tools" icon="list-checks" tint="plum" >}}Each step uses a tool: read a document, search PubMed, check interactions.{{< /flow-node >}}
{{< flow-node kicker="It checks" title="Work against sources" icon="shield-check" tint="accent" >}}Quotes are checked against the sources it read.{{< /flow-node >}}
{{< flow-node kicker="You review" title="A finished draft" icon="check-circle" tint="green" >}}You read the result and its sources, then decide.{{< /flow-node >}}
{{< /flow >}}

Here is what that looks like for a task no single question can answer: "Review this discharge medication list, check each pair for interactions, and draft a short reconciliation note."

- **It plans.** Read the list, extract each medication, check interactions, then draft the note.
- **It acts.** Each step uses a tool, not a guess from memory.
- **It adapts.** If the interaction check turns up a major flag, it puts that finding first instead of burying it.
- **It presents.** You get the draft and the trail of steps and sources behind it.

## How Lumen does it

In Lumen, an agent is a **Specialist**: a named expert you call by typing `@` in the message box, or pick from **Explore**, the one list of Specialists, Skills and tools. Examples include **Medication Review**, **Clinical Educator**, **Prior Authorization**, **Clinical Research** and **Patient Education** (which writes handouts *for* patients; it isn't a patient-facing product).

{{< chat-demo title="Discharge medication check" specialist="Medication Review" caption="Illustration with a fictional patient at Harbor Valley Medical Center. Always open the cited sources." >}}
{{< user attach="discharge-meds-fictional.pdf" >}}Check this discharge list for interactions and draft a two-paragraph reconciliation note for the receiving nurse.{{< /user >}}
{{< lumen thought="9" tools="Read document, Drug interactions, Create document" sources="3" evidence="true" >}}
{{< task-strip >}}
{{< task state="done" label="Read the discharge list (7 medications)" >}}
{{< task state="done" label="Checked 21 medication pairs" >}}
{{< task state="done" label="Drafted the reconciliation note" >}}
{{< task state="done" label="Checked quotes against sources" >}}
{{< /task-strip >}}

One pair needs attention: **amiodarone with warfarin** is a major interaction that can raise the INR {{< cite 1 >}}. The draft note flags it first and suggests INR follow-up per your protocol {{< cite 2 >}}.

{{< artifact type="docx" title="Reconciliation note (draft)" sub="Word document · 1 page" >}}
{{< verdict >}}Checked: every quoted source was found in the material Lumen read.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}

What happens behind a Specialist, in plain terms:

- **Each Specialist has written rules.** Its tools, the Skills it can use, how much it may do on its own, a work budget, what counts as "done", and which actions need your approval are set in Lumen's code. The AI can't rewrite them.
- **You see each step.** A task strip lists the steps as they finish, so you can follow the work and stop it.
- **Actions that leave Lumen wait for you.** Sending an email or writing to another system shows an approval card with **Approve** and **Decline**. If you approve, it runs exactly as shown. Typing "I approve" in the chat does nothing. See [Approvals](/skills-and-specialists/approvals/).
- **Results are checked.** When a Specialist produces a finished piece of work, Lumen's server looks for every quoted passage in the sources it loaded itself. Checks that fail send the work back for repair. The result carries a verdict, and that verdict means "checked against sources", never "clinically correct". See [Verified results](/skills-and-specialists/verified-results/).
- **Work keeps going if you close the tab.** Specialist work runs on Lumen's servers, up to about an hour per task, and is there when you come back on any device.

## What this means for you

- **Delegate chains, not only questions.** The jobs that eat time, such as a literature summary for a committee or a handout with sources, are chains of lookups and drafting. That's where a Specialist helps most.
- **Read the trail.** The steps and sources are there so you can check the work the way you'd check a resident's.
- **You decide.** A Specialist drafts. Nothing reaches a patient's care, a colleague's inbox or another system without you.

## Limits and safety

- **Agents make mistakes.** A wrong turn at step two can shape everything after it. More steps mean more chances for error as well as more work done.
- **"Checked" isn't "correct".** A verdict means quotes were found in the sources. It doesn't mean the sources were right for your patient.
- **One task, about an hour.** Very large jobs may need to be split. If Lumen's servers fail mid-task, the task is marked interrupted and the partial work is kept; it isn't resumed automatically.

{{< callout type="safety" title="A Specialist supports your judgment. It doesn't replace it." >}}
Open the cited sources before you act on any result, check them against your organization's policies, and use your professional judgment. Don't enter patient information you're not permitted to share.
{{< /callout >}}

## FAQ

{{< faq question="What's the difference between an AI agent and a chatbot?" >}}
A chatbot answers one question at a time, mostly from training memory. An agent takes a goal, plans steps, uses real tools to gather facts, and adjusts as it goes. In Lumen, agents are called Specialists, and you can watch each step.
{{< /faq >}}
{{< faq question="Why does Lumen call them Specialists instead of agents?" >}}
Because that's how clinicians already think about delegation: you call the right specialist for the job. You type `@` and pick one, such as `@Medication Review`, the way you'd page a consult service.
{{< /faq >}}
{{< faq question="Can a Specialist send an email or change a record on its own?" >}}
No. Any action that leaves Lumen waits on an approval card. It runs only after you press **Approve**, and it runs exactly as shown on the card.
{{< /faq >}}
{{< faq question="Do I need technical skills?" >}}
No. You describe the task in plain language. Lumen handles the planning and tool use, and shows you each step.
{{< /faq >}}

## Next steps

{{< related "/learn/agentic-loops/" "/learn/tool-use/" "/skills-and-specialists/working-with-a-specialist/" "/skills-and-specialists/approvals/" >}}
