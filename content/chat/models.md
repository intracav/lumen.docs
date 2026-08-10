---
title: "Choosing a Model in Lumen"
description: "Which AI model powers your chat, what changes between fast and deep models, and how to switch in the model picker."
weight: 10
---

Lumen runs on more than one AI model, and the difference between them is the same one you navigate every day: **fast versus deep**. A quick dosing lookup and a genuinely hard differential don't deserve the same amount of machinery — and you shouldn't pay the time cost of the heavy machinery for the easy question.

## Fast vs. deep, in clinical terms

- **Fast models** respond almost immediately. They shine when the factual work is being done by Lumen's [tools](/learn/tool-use/) anyway — interaction checks, code lookups, guideline retrieval — and the model's job is to run the right lookup and summarize it cleanly.
- **Deep models** reason harder before answering. They're worth the extra seconds on a complicated differential, a long document you want carefully synthesized, a risk–benefit question with several interacting variables, or writing that has to land with a demanding audience.

Neither is "smarter" in the abstract — they're tuned for different points on the speed–depth curve. If you want the reasoning behind when to pick which, read [Fast vs. Deep: Choosing the Right AI Model](/learn/choosing-models/).

## Which models come with which plan

Every plan includes a sensible default — you never *have* to pick. Upgrading a plan widens the menu:

| Model | Best for | Available on |
|---|---|---|
| **DeepSeek V4 Flash** | Quick lookups, everyday questions, tool-driven answers | {{< tier-badge "free" >}} and above |
| **DeepSeek V4 Pro** | Heavier everyday reasoning with more headroom | {{< tier-badge "pro" >}} and above |
| **Claude Sonnet 5** | Strong all-round reasoning and polished clinical writing | {{< tier-badge "plus" >}} {{< tier-badge "max" >}} |
| **Claude Opus 4.8** | The hardest cases: complex differentials, long-document synthesis | {{< tier-badge "plus" >}} {{< tier-badge "max" >}} |

See [Plans](/plans/) for the full comparison of what each plan includes.

## How to switch models

Use the **model picker** in chat — it lists every model your plan includes, with your plan's default marked. Pick one and it applies from your next message onward; you can switch mid-conversation when a thread starts easy and turns hard.

{{< tip title="A practical default" >}}
Stay on your plan's default model and let Lumen's tools carry the factual load. Reach for a deeper model when you notice yourself writing a genuinely complex prompt — multiple variables, competing risks, a long attachment — the same instinct that tells you a hallway question has become a formal consult.
{{< /tip >}}

## Models and extended thinking

Deeper models don't just answer differently — they *think* differently. The depth of [extended thinking](/learn/extended-thinking/) available varies by model: a deep model can sit with a hard problem longer in its reasoning scratchpad before committing to an answer, and you'll see that reflected in the "Thought for Ns" block at the top of the response ([How Lumen Thinks](/chat/thinking/)).

## Next steps

- [Fast vs. Deep: Choosing the Right AI Model](/learn/choosing-models/) — when switching actually helps
- [Extended Thinking, Explained](/learn/extended-thinking/) — what happens during the pause
- [Plans](/plans/) — what's included where
