---
title: "Which AI model Lumen uses"
navTitle: "Plans and the model"
description: "Lumen picks its AI model based on your plan, so there's nothing to choose. What changes between plans, and what matters more than the model."
lead: "You don't choose a model in Lumen. Your plan decides it, and Lumen's tools and sources do most of the factual work. Here's what that means for your answers."
weight: 11
icon: sliders
glance:
  what: "How Lumen picks the AI model behind your answers, and where you can see which one your plan uses."
  who: "Anyone comparing plans, and anyone who wants to know what's behind Lumen's answers."
  why: "To understand what a plan upgrade changes, and why the model matters less than the sources an answer cites."
  needs: "A Lumen account. About 3 minutes to read."
  result: "You'll know how the model is chosen, where to see it, and what affects answer quality most."
---

Lumen runs on a large language model, the kind of AI that reads your question and writes the answer. You don't pick it. Lumen chooses the model by your plan, so everyone on the same plan gets the same one. Higher plans use a more capable model. On any plan, the facts in a clinical answer come from Lumen's lookups and sources, not from the model's memory.

## Before you start

Nothing to set up. To see your plan, go to {{< ui-path "Settings" "Plan & billing" >}}.

## How to see which model your plan uses

{{< steps >}}
{{< step title="Open a chat" >}}
Click **New Chat** in the sidebar, or open any chat.
{{< /step >}}
{{< step title="Open Chat settings" >}}
Click **Chat settings** in the row under the message box.
{{< /step >}}
{{< step title="Find AI model" >}}
The **AI model** section says **Lumen picks the right model for your plan.** The card below names the model and says **Included with your** plan.
{{< /step >}}
{{< /steps >}}

## How it works

| | Free and Pro | Plus and Max |
|---|---|---|
| **Model** | A fast model, suited to everyday questions and lookups | A more capable model, for harder reasoning and longer documents |
| **Who chooses** | Lumen, by plan | Lumen, by plan |
| **Can you switch?** | No | No |

What else a higher plan adds, such as more specialists and team features, is listed on [Plans](/plans/). For prices, see [intracav.ai](https://intracav.ai).

## What matters more than the model

- **Tools.** For a dose, an interaction, a code or a score, Lumen runs a lookup or a fixed formula. The model reads the result and explains it. See [How AI uses tools](/learn/tool-use/).
- **Sources.** Answers cite the passages they came from. A stronger model writes better, but the citation is what you check.
- **Your question.** Context such as age, conditions, medicines and setting improves an answer on any plan.
- **Specialists and skills.** A specialist or skill gives Lumen a set procedure and checks for a kind of work, whichever model is behind it.

## Tips

- **Hard question on a lower plan?** Give more context, break it into steps, or ask Lumen to show its reasoning.
- **Long documents.** Ask about specific sections rather than "summarize this 200-page manual."

## Limits and safety

- Every model can be wrong, including the most capable one. Check the cited sources whichever plan you're on.
- Lumen uses one AI provider. It doesn't switch between providers for different questions.

{{< callout type="safety" title="The model doesn't change the rule" >}}
On every plan, open the sources for any clinical statement before you act on it.
{{< /callout >}}

## FAQ

{{< faq question="Can I choose a different model?" >}}
No. Lumen chooses the model by plan. There's no model picker in chat.
{{< /faq >}}
{{< faq question="Does upgrading make answers more accurate?" >}}
A more capable model reasons better on hard questions and handles longer documents. Clinical facts still come from Lumen's tools and sources on every plan, so always check the citations.
{{< /faq >}}
{{< faq question="Which company makes the model?" >}}
Lumen uses a commercial large language model through its own servers. Your organization can ask Intracav for details as part of a security review. See [Privacy and data](/trust/privacy/).
{{< /faq >}}

## Next steps

{{< related "/plans/" "/learn/tool-use/" "/chat/thinking/" "/trust/privacy/" >}}
