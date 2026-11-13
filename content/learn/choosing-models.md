---
title: "AI models: fast, deep and what Lumen uses"
navTitle: "Choosing models"
description: "What actually differs between AI models, why tools matter more than model size for factual questions, and how Lumen selects its model by plan."
lead: "You don't send every sore throat to a tertiary center. AI models are similar: different sizes suit different work. In Lumen, the model is chosen for you by plan."
weight: 11
icon: sliders
keywords: ["which AI model should I use", "fast vs deep AI models", "AI model comparison for clinicians"]
glance:
  what: "An AI model is the language engine underneath an assistant. Models differ in speed, depth of reasoning and cost. Lumen selects the model by plan; you don't pick one."
  who: "Clinicians, buyers and IT or informatics leads comparing AI tools."
  why: "To understand what a bigger model does and doesn't buy you, and what to ask any vendor about models."
  needs: "Nothing. About 4 minutes to read."
  result: "A realistic picture of how models affect answers, and an honest account of how Lumen handles them."
---

You don't send every sore throat to a tertiary referral center. Not because the referral center is bad at sore throats, but because it's slower, costs more and adds nothing the walk-in clinic wouldn't. Triage is about matching the case to the resource. AI models raise a similar question. An **AI model** (more precisely, a *large language model*) is the language engine underneath an AI assistant. Some are built to be fast, some to reason more deeply. The surprise for most clinicians is how little the model's size matters for factual questions, once the assistant uses real tools.

## What differs between models

Models differ on three measurable things:

- **Speed.** A smaller model starts answering almost at once. A larger one may take longer, especially when it reasons first.
- **Depth of reasoning.** Larger models can hold more of a complex problem in view and check their own logic more thoroughly. See [Extended thinking](/learn/extended-thinking/).
- **Cost to run.** Larger models use far more computing power per answer, which is why AI products tie them to higher plans.

"Intelligence" as a single number isn't on the list. A smaller model isn't a larger one with judgment shaved off. They're different trade-offs.

## How it works: tools carry the facts

{{< flow >}}
{{< flow-node kicker="Model" title="Decides what to look up" icon="brain" tint="blue" >}}Recognizes the question and picks tools.{{< /flow-node >}}
{{< flow-node kicker="Tools" title="Supply the facts" icon="search" tint="plum" >}}Databases, labels, calculators, your documents.{{< /flow-node >}}
{{< flow-node kicker="Model" title="Explains the result" icon="message" tint="green" >}}Turns the facts into a clear answer.{{< /flow-node >}}
{{< /flow >}}

In a well-built assistant, the facts behind a dosing, interaction or coding answer come from [tools](/learn/tool-use/) and [retrieved sources](/learn/rag-and-citations/), not from the model's memory. The model's job is to recognize what to look up, run the right tool and explain what came back. So for factual questions, **a model with good tools beats a bigger model guessing**. A large model reciting a dose threshold from memory is an attending quoting from memory; a smaller model calling the reference is a colleague with the formulary open. You want the second.

Model depth matters more when the reasoning itself is the hard part: weighing competing risks, pulling together long documents, or writing that has to persuade.

## How Lumen does it

- **The model is selected by your plan.** You don't choose a model, and there's no model picker in the app. Lumen's team plans (Plus and Max) currently use a larger model than the individual plans (Free and Pro).
- **One model per plan, not a router.** Lumen doesn't switch between models or AI vendors question by question.
- **The same tools on every paid plan.** Pro, Plus and Max have the same tools. The difference between them is usage limits and team features, not which lookups you can run. Free has fewer tools.
- **Reasoning on every plan.** Lumen's model reasons before it answers on every plan, and shows you that reasoning behind the **Thought for** line.
- **Grounding doesn't change by plan.** Citations, citation checks and the **Lumen Evidence** pill work the same way on every plan.

See [Plans](/plans/) for what each plan includes, and [intracav.ai](https://intracav.ai) for pricing.

{{< chat-demo title="A lookup question" caption="Illustration. For factual questions, the answer rests on the tool and the source, whichever plan you're on." >}}
{{< user >}}Renal dose adjustment for cefepime at a CrCl of 25?{{< /user >}}
{{< lumen thought="3" tools="Renal dosing, Drug label, Clinical guidelines" sources="2" evidence="true" >}}
Cefepime needs a dose reduction at a CrCl of 25 mL/min; the label gives the adjusted regimen by indication {{< cite 1 >}}. Check the label table for your indication and watch for neurotoxicity in kidney impairment {{< cite 2 >}}.

Open the label to confirm the exact regimen before ordering.
{{< /lumen >}}
{{< /chat-demo >}}

## What this means for you

- **You don't need to choose.** Ask your question; Lumen uses your plan's model.
- **Judge answers by their sources, not the model.** The citations and tool chips tell you how an answer was built.
- **For hard reasoning, give more context.** Spelling out the trade-offs helps any model reason better. See [Prompting for clinicians](/learn/prompting-for-clinicians/).
- **When comparing vendors, ask the right questions.** Which model is used on which plan? Do facts come from tools and sources or from memory? Are citations checked? Those answers matter more than a model's name.

## Limits and safety

- **No model is always right.** Larger models reason better on hard problems, and they still make mistakes.
- **Models change.** The model behind each plan can be updated over time. Lumen's grounding and checks stay in place when it does.
- **Speed varies.** Busy periods and long reasoning can slow answers on any plan.

{{< callout type="safety" title="Whatever the model, check the sources" >}}
Open the citations before acting on an answer. Lumen supports clinical judgment; it doesn't replace it.
{{< /callout >}}

## FAQ

{{< faq question="Can I pick a different model?" >}}
No. Lumen selects the model by plan. There's no model picker.
{{< /faq >}}
{{< faq question="Is a bigger model more accurate?" >}}
On reasoning-heavy problems, usually somewhat. On factual lookups, accuracy comes from the tool and the source, which don't change with the model. Judge any answer by its citations.
{{< /faq >}}
{{< faq question="Does Lumen send my question to several AI companies?" >}}
No. Lumen doesn't route questions between AI vendors. Each plan uses one model.
{{< /faq >}}

## Next steps

{{< related "/chat/models/" "/plans/" "/learn/tool-use/" "/learn/extended-thinking/" >}}
