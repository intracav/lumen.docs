---
title: "See how Lumen worked out an answer"
navTitle: "How Lumen thinks"
description: "Lumen shows its reasoning and every lookup it ran. Here's how to open that working line, what it shows, and how to use it to judge an answer."
lead: "Above each answer is a line that shows how Lumen got there: how long it reasoned and which lookups it ran. Open it when you want to check the path, not just the result."
weight: 4
icon: lightbulb
glance:
  what: "The working line above each Lumen answer, which shows its reasoning and the tools it used."
  who: "Everyone who uses Lumen chat, on any plan."
  why: "Seeing which lookups Lumen ran, and what it considered, helps you decide how far to trust the answer."
  needs: "A Lumen account. About 3 minutes to read."
  result: "You'll know how to open Lumen's reasoning and tool steps, and what to look for in them."
---

You wouldn't trust a colleague who said "trust me" without explaining. Lumen shows its working instead. While it answers, a short live summary says what it's doing. When it's done, that folds into one line, such as **Thought for 6s · Used 3 tools**, that you can open to see the reasoning and each lookup.

## Before you start

Ask a question that needs some working, such as a dosing question with a complication or a case with several variables. Simple questions may be answered without visible reasoning.

## How to see Lumen's working

{{< steps >}}
{{< step title="Watch while it works" >}}
After you send a message, a live summary appears above the answer, describing the current step. A chip appears for each lookup, such as **Searching PubMed** or **Checking renal dosing**.
{{< /step >}}
{{< step title="Find the working line" >}}
When the answer is finished, the working folds into one line, such as **Thought for 6s · Used 3 tools**, or **Searched the web 4 times** when it only searched the web.
{{< /step >}}
{{< step title="Open it" >}}
Click the line. You see the reasoning, headed **Thought for 6s**, and each tool chip with its result, such as **Searched PubMed** or **Renal dose check complete**.
{{< /step >}}
{{< step title="Open a tool step" >}}
Click a tool chip to see what it looked up. Where a result can be shown in full, click **Open in side panel**.
{{< /step >}}
{{< step title="Close it" >}}
Click the line again to fold it away.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="chat-thinking-tools" alt="The working line opened above a Lumen answer, showing reasoning and three completed tool chips" caption="The working line opened: Lumen's reasoning and each tool it ran." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Anticoagulation after a GI bleed" caption="Illustration with a fictional patient. Reasoning shows what Lumen considered. It isn't a source." >}}
{{< user >}}78-year-old man with atrial fibrillation and a GI bleed 3 months ago, now healed. Should he restart anticoagulation?{{< /user >}}
{{< lumen thought="11" tools="Calculation complete, Guidelines retrieved, Searched PubMed" sources="3" >}}
{{< thinking label="Thought for 11s" >}}Need stroke risk and bleeding risk. Age 78 gives 2 points on CHA₂DS₂-VASc on its own. Check what's known about other risk factors before scoring HAS-BLED. Look for guideline advice on restarting after GI bleeding, and evidence on timing.{{< /thinking >}}

Restarting anticoagulation is usually favored once the bleeding source has been treated, because stroke risk generally outweighs re-bleeding risk {{< cite 1 >}}. To score his risks properly, I need more detail: does he have hypertension, diabetes, heart failure, or a prior stroke? What was the bleeding source, and how was it treated?
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## What to look for

- **Did it look things up?** Tool chips show which lookups ran. A dosing answer with no dosing lookup deserves more scrutiny.
- **Did any step fail?** A failed step opens automatically and shows why, such as **Timed out after 30s**. Lumen should tell you if it answered without that information.
- **Did it notice what's missing?** Good reasoning names the information it doesn't have. If it assumed something, the reasoning usually shows it.
- **Does the reasoning match the answer?** If the reasoning raised a concern that the answer drops, ask about it.

## Tips

- **Ask for the reasoning in the answer.** *"Explain your reasoning step by step"* puts it in the reply, where it's easier to copy and share.
- **Give the missing facts.** If the reasoning shows Lumen guessing, answer its questions in a follow-up.
- **Not every answer has reasoning.** "What's the generic name of Lipitor?" doesn't need it.

## Limits and safety

- The reasoning shows what Lumen considered. It isn't evidence. Base decisions on the cited sources, not the reasoning.
- The reasoning is a summary of Lumen's process. It can be incomplete, and it can contain mistakes that the final answer corrects, or the other way round.
- How long Lumen thinks depends on the question and your plan. A longer think isn't a guarantee of a better answer.

{{< callout type="safety" title="Reasoning isn't a citation" >}}
Use the reasoning to understand how Lumen reached its answer. Check clinical statements against the cited sources before you act.
{{< /callout >}}

## FAQ

{{< faq question="Why didn't my answer show any reasoning?" >}}
Simple questions are often answered directly. The working line still shows any tools Lumen used.
{{< /faq >}}
{{< faq question="Can I share the reasoning with a colleague?" >}}
Yes. When you share a chat, you choose whether to include **Thinking steps** and **Tool call details**. See [Share a chat](/chat/sharing/).
{{< /faq >}}
{{< faq question="What does Lumen think about while it reasons?" >}}
How to break down the question, which tools and sources to use, what information is missing, and how to put the answer together. See [Extended thinking, explained](/learn/extended-thinking/).
{{< /faq >}}

## Next steps

{{< related "/chat/responses/" "/chat/sources/" "/learn/extended-thinking/" "/learn/tool-use/" >}}
