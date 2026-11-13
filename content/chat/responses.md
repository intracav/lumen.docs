---
title: "Read a Lumen answer"
navTitle: "Reading answers"
description: "What each part of a Lumen answer means: the working line, tool chips, citations, interactive blocks, files, sources, the evidence grade and actions."
lead: "A Lumen answer is more than text. Here's what each part tells you, from top to bottom, and what you can do with it."
weight: 2
icon: message
glance:
  what: "A guide to every part of a Lumen reply and the actions you can take on it."
  who: "Everyone who uses Lumen chat, on any plan."
  why: "Knowing what each part means lets you check an answer quickly and decide whether to rely on it."
  needs: "A Lumen account. About 4 minutes to read."
  result: "You'll be able to read any answer, see how it was produced, and copy, regenerate, rate, share or report it."
---

When Lumen answers, it shows its working as well as the result. A line at the top says what it did. The answer cites its sources. A footer shows the sources it used and, often, how well they support what it wrote. This page walks through each part from top to bottom.

## Before you start

Ask any question in a chat. Follow [Ask your first question](/getting-started/first-chat/) if you haven't yet.

## What you'll see

{{< screenshot src="chat-thinking-tools" alt="A Lumen answer with the working line expanded to show tool chips, then the answer with citations and a sources pill" caption="An answer with its working line opened. Each tool chip is a lookup Lumen ran." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Renal dosing" caption="Illustration with a fictional patient. Always open the cited sources." >}}
{{< user >}}Enoxaparin dose for VTE treatment in a 70 kg adult with a creatinine clearance of 24 mL/min?{{< /user >}}
{{< lumen thought="5" tools="Renal dose check complete, Interaction check complete" sources="2" >}}
For a creatinine clearance below 30 mL/min, the labeled treatment dose of enoxaparin is **1 mg/kg once daily** instead of every 12 hours {{< cite 1 >}}. For 70 kg, that's **70 mg subcutaneously once daily** {{< cite 1 >}}.

Consider anti-Xa monitoring, and watch closely for bleeding {{< cite 2 >}}.

{{< follow-ups "When should anti-Xa be checked?|Is unfractionated heparin a better option here?|Make this a one-page nurse reference" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## How to read an answer, top to bottom

{{< steps >}}
{{< step title="The working line" >}}
While Lumen works, you see a short live summary of what it's doing and a chip for each lookup, such as **Checking renal dosing**. When it finishes, this folds into one line, such as **Thought for 5s · Used 2 tools**. Click it to see each step again. See [How Lumen thinks](/chat/thinking/).
{{< /step >}}
{{< step title="The answer" >}}
The answer streams in as Lumen writes, so you can start reading straight away. Numbers in the text are citations. Each one points to a source below.
{{< /step >}}
{{< step title="Interactive blocks and files" >}}
Some answers include a block you can use, such as a checklist, calculator, table or chart. See [Interactive answers](/chat/interactive-answers/). Longer outputs, such as a document or a slide deck, appear as a file card. Click **Open** to view it in the panel. See [Reports and files](/chat/artifacts/).
{{< /step >}}
{{< step title="Suggested follow-ups" >}}
Some answers end with suggested next questions. Click one to send it.
{{< /step >}}
{{< step title="The footer" >}}
- The **sources** pill, for example **2 sources**, lists what Lumen used. Click it to expand the list, or **View all** to open the sources panel.
- An **evidence grade**, such as **Strong support**, **Moderate support** or **Limited support**, appears when Lumen has checked its statements against the cited passages. Click it to open **Lumen Evidence** and see each statement it checked.
- A memory line, such as **Remembered 2 facts**, appears when Lumen used things you've asked it to remember. See [Memory](/chat/memory/).
{{< /step >}}
{{< step title="The actions" >}}
Under the reply: **Copy**, **Regenerate**, **Helpful** or **Not helpful**, **Share** (on the latest reply), and **Report**.
{{< /step >}}
{{< /steps >}}

## What the actions do

| Action | What happens |
|---|---|
| **Copy** | Copies the reply text. You'll see **Copied**. |
| **Regenerate** | Writes a new version of the reply. Use the **< 1/2 >** arrows (**Previous version**, **Next version**) to compare versions. |
| **Helpful** / **Not helpful** | Tells Intracav whether the reply was useful. |
| **Share** | Opens **Share Chat**. See [Share a chat](/chat/sharing/). |
| **Report** | Opens **Report this response**. Choose **Inaccurate**, **Unsafe**, **Off-topic**, **Unhelpful refusal** or **Other**. |

## When something goes wrong

- **A tool fails.** The chip shows the reason, such as **Rate limited — try again shortly** or **Network error — service unavailable**. Click **Try again**. Lumen often works around a failed lookup with other sources, and should say so.
- **An answer was interrupted.** If a server problem stops an answer, Lumen says the reply was interrupted and that what's shown is incomplete. Click **Retry**.
- **You came back mid-answer.** If you reopen a chat while Lumen is still working, you'll see **Lumen is still working — picking up where we left off…**

## Tips

- **Open the working line on hard questions.** It shows what Lumen looked up, which helps you judge the answer.
- **Regenerate rather than retype.** If an answer misses the point, regenerate it or ask a sharper follow-up.
- **Report unsafe answers.** It's the fastest way to get a problem in front of the people who fix it.

## Limits and safety

- A citation shows where a statement came from. It doesn't prove the statement is right for your patient. Open it and read it.
- An evidence grade measures how well the cited passages support the answer. It isn't a measure of clinical correctness.
- If an answer has no sources, Lumen answered from its general training. Treat it with extra care for anything clinical.

{{< callout type="safety" title="Check before you act" >}}
Open the sources for any clinical statement you plan to rely on, and follow your organization's policies.
{{< /callout >}}

## FAQ

{{< faq question="Can I see older versions of a reply after I regenerate it?" >}}
Yes. Use the **< 1/2 >** arrows under the reply to move between versions.
{{< /faq >}}
{{< faq question="Why doesn't every answer have an evidence grade?" >}}
The grade appears when Lumen has checked statements against cited passages. Short or conversational replies may not have one.
{{< /faq >}}
{{< faq question="Does closing the tab stop the answer?" >}}
No. Answers are written on Lumen's servers. Reopen the chat to see the finished reply, for up to about an hour per answer.
{{< /faq >}}

## Next steps

{{< related "/chat/sources/" "/chat/thinking/" "/chat/interactive-answers/" "/chat/editing-and-branching/" >}}
