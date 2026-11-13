---
title: "Extended thinking: why AI pauses first"
navTitle: "Extended thinking"
description: "What happens when an AI reasons before it answers, what the Thought for line in Lumen shows you, and how to use the reasoning to check an answer."
lead: "A curbside answer and a formal consult are both useful. Extended thinking is the formal consult: the AI works the problem before it writes."
weight: 6
icon: brain
keywords: ["AI reasoning models explained", "extended thinking", "chain of thought", "why does AI pause before answering"]
glance:
  what: "Extended thinking is when an AI model reasons through a problem step by step before writing its answer. Lumen shows that reasoning so you can read it."
  who: "Clinicians and educators who want to understand, and check, how Lumen reached an answer."
  why: "Reasoning first produces better answers to hard questions, and the visible reasoning helps you spot a wrong turn."
  needs: "Nothing to read this page. Thinking appears in Lumen chats on every plan."
  result: "You'll know what the Thought for line means and when to open it."
---

There are two ways to answer a clinical question. The curbside consult: a colleague catches you in the hallway, you answer from pattern recognition, and you're right most of the time. The formal consult: you sit with the chart, work the problem, and write a note that shows your reasoning. **Extended thinking** is the formal consult for AI. Before it writes a word of the answer, the model works through the question in a private scratchpad, then answers from that work.

## What extended thinking is

A language model normally writes its answer in one pass, word by word. With extended thinking, it first writes out its reasoning: what's being asked, what it knows, what it needs to look up, what could go wrong. Only then does it write the answer you read. The reasoning isn't decoration. It *produces* the answer, the way your differential produces your plan.

## How it works

{{< flow >}}
{{< flow-node kicker="Your question" title="A real case" icon="message" tint="blue" >}}With the details that matter.{{< /flow-node >}}
{{< flow-node kicker="Think" title="Break it down" icon="brain" tint="plum" >}}Weigh options and check its own logic.{{< /flow-node >}}
{{< flow-node kicker="Look up" title="Use tools" icon="search" tint="accent" >}}Fetch the facts it decided it needs.{{< /flow-node >}}
{{< flow-node kicker="Answer" title="With reasoning attached" icon="check-circle" tint="green" >}}You can open the thinking afterwards.{{< /flow-node >}}
{{< /flow >}}

Thinking and tools work together. Reasoning tells the model what it doesn't know. Tools let it find out. On a hard question the two alternate: think, look up the interaction data, read it, think again, then answer. That's what you do with the chart and a reference open side by side.

## How Lumen does it

Lumen's model reasons before it answers. On a simple question the thinking is brief; on a question with many moving parts it takes longer. While it works you see **Thinking…**. When the answer is done, the reasoning folds into one line above the answer, such as **Thought for 12s** (or **Thought briefly** for a short think). Open that line any time to read the full reasoning.

{{< chat-demo title="Anticoagulation question" caption="Illustration with a fictional patient. The reasoning trail helps you check the logic; the sources are still what you verify." >}}
{{< user >}}78-year-old with atrial fibrillation, a GI bleed 4 months ago, CrCl 42. Restart anticoagulation? What should I weigh?{{< /user >}}
{{< lumen thought="18" tools="Renal dosing, Clinical guidelines, PubMed search" sources="4" evidence="true" >}}
{{< thinking label="Thought for 18s" >}}Stroke risk is high at this age with AF. Bleed was 4 months ago; source and treatment matter. CrCl 42 affects agent and dose choice. Check current guideline on resuming anticoagulation after GI bleeding and renal dosing for each option.{{< /thinking >}}
Guidelines generally favor **resuming anticoagulation after a GI bleed once the source is controlled**, because stroke risk often outweighs rebleeding risk {{< cite 1 >}}. With a CrCl of 42, check the label dose criteria for whichever agent you choose {{< cite 2 >}}.

Points to weigh: whether the bleeding source was found and treated, current hemoglobin trend, and fall risk {{< cite 3 >}}. Open each source and discuss with GI before deciding.
{{< /lumen >}}
{{< /chat-demo >}}

## What this means for you

- **You don't have to read it.** For routine questions, the **Thought for** line is a signal that reasoning happened.
- **Open it when it matters.** Read the reasoning when the stakes are high, when the answer surprises you, or when you want to see how the problem breaks down. It's like reading a consultant's note instead of only their one-line recommendation.
- **Use it to find the wrong turn.** If an answer seems off, the reasoning usually shows where: a misread detail, an assumption you'd challenge, or a question it misunderstood. Correct it in your next message.
- **Give it something to think about.** Clinical context, competing considerations and what you'll do with the answer give the model a real problem to reason through. See [Prompting for clinicians](/learn/prompting-for-clinicians/).

## Limits and safety

- **Reasoning isn't proof.** The thinking can be fluent and still wrong. Treat it like a trainee presenting their logic: a chance to check the steps, not a guarantee.
- **Longer isn't always better.** Thinking time reflects how complex the question looks, not how correct the answer is.
- **It takes time.** A hard question may take tens of seconds before the answer starts.
- **Facts still need sources.** Reasoning decides what to look up. The citations are what you check.

{{< callout type="safety" title="The judgment stays with you" >}}
Read the cited sources before acting on an answer, however careful the reasoning looks. Lumen supports clinical judgment; it doesn't replace it.
{{< /callout >}}

## FAQ

{{< faq question="Does a longer think mean a better answer?" >}}
Not necessarily. A long think usually means the question had many parts. A quick answer to a simple question can be equally reliable. Judge the answer by its sources.
{{< /faq >}}
{{< faq question="Can I turn thinking off or make Lumen think harder?" >}}
There's no switch. The model decides how much to think. Asking a fuller question, with context and the trade-offs you're weighing, gives it more to reason about.
{{< /faq >}}
{{< faq question="Is the thinking saved?" >}}
Yes. It stays with the answer in the conversation, behind the **Thought for** line, so you can reopen it later.
{{< /faq >}}

## Next steps

{{< related "/chat/thinking/" "/learn/tool-use/" "/learn/prompting-for-clinicians/" "/getting-started/differential/" >}}
