---
title: "How AI uses tools instead of guessing"
navTitle: "Tool use"
description: "Tool use explained for clinicians: how an AI decides to run a real drug-interaction or code lookup instead of answering from memory, and how to see it."
lead: "A good attending knows when to call a consult. Tool use is how an AI does the same: it hands factual questions to real databases and calculators."
weight: 2
icon: plug
keywords: ["AI function calling explained", "how does AI look up drug interactions", "AI tool use in healthcare"]
glance:
  what: "Tool use (also called function calling) lets an AI run a real lookup, such as a drug-interaction check or an ICD-10 search, and answer from the result instead of from memory."
  who: "Clinicians, coders, pharmacists and anyone who wants to know where an AI answer's facts came from."
  why: "Answers built on a real lookup are current, precise and checkable. Answers from memory are none of those for certain."
  needs: "Nothing to read this page. Tools run automatically in any Lumen chat; some tools need a paid plan."
  result: "You'll know how to spot a tool call in a Lumen answer and what it tells you."
---

Picture a busy attending. A good one doesn't answer every question from memory. Renal dosing? Call pharmacy. Is that infiltrate new? Call radiology. The skill is knowing when to involve a consultant, asking a precise question, and putting the answer to use. **Tool use** gives an AI model the same skill. The model is the attending. The tools are its consult services: a drug-interaction database, a calculator, a literature search, a code lookup.

## Why memory isn't good enough for facts

A language model's memory is fluent whether or not it's right. Three problems make memory alone unsafe for factual clinical questions:

- **It goes stale.** Training stops at a date. Interaction warnings, code sets and coverage rules change after it.
- **It blurs details.** Memory reconstructs rather than retrieves. It can mix up the severity of an interaction, or two similarly named drugs.
- **It's bad at arithmetic.** Language models predict words. A risk score needs a calculator, not a paragraph that looks like one.

## How it works

{{< flow >}}
{{< flow-node kicker="1 · Recognize" title="This needs a lookup" icon="search" tint="blue" >}}The model reads your question and decides a tool should answer part of it.{{< /flow-node >}}
{{< flow-node kicker="2 · Request" title="A precise order" icon="clipboard-list" tint="plum" >}}It writes a structured request, such as "interactions: azithromycin, warfarin".{{< /flow-node >}}
{{< flow-node kicker="3 · Run" title="The real lookup" icon="zap" tint="accent" >}}Lumen's servers run the tool. This step isn't AI, so it can't be made up.{{< /flow-node >}}
{{< flow-node kicker="4 · Answer" title="From the result" icon="check-circle" tint="green" >}}The model reads what came back and explains it for you.{{< /flow-node >}}
{{< /flow >}}

The model brings judgment: when to look, what to ask, how to explain. The tool brings facts. Neither does the other's job.

## How Lumen does it

Lumen has about 90 tools. They include PubMed and ClinicalTrials.gov search, openFDA drug labels and FDA device event and recall data, RxNorm, drug interactions, renal dosing, clinical calculators, ICD-10, CPT, HCPCS and NCCI code lookups, CMS coverage, NPI lookup, document readers and web search. Lumen doesn't hand the model all of them at once. It offers the tools that fit your question, and the model can ask for more if it needs them.

When a tool runs, you see it. Above the answer, a short summary line names what happened, such as **Thought for 5s · Used Drug interactions and Drug label**, or **Used 3 tools** when more ran. Open it to see a chip for each tool. If a call failed, the line says so, for example **1 call failed**.

{{< chat-demo title="Antibiotic and anticoagulant" caption="Illustration with a fictional patient. Real answers cite the database or label the tool used." >}}
{{< user >}}Can I start azithromycin in a patient on warfarin? INR has been stable at 2.4.{{< /user >}}
{{< lumen thought="5" tools="Drug interactions, Drug label, PubMed search" sources="2" evidence="true" >}}
**Moderate interaction: use with monitoring.** Azithromycin can increase warfarin's effect, and raised INR and bleeding have been reported {{< cite 1 >}}. If you co-prescribe, consider checking the INR during the course and shortly after {{< cite 2 >}}.

Open both sources to confirm the details before you decide.
{{< /lumen >}}
{{< /chat-demo >}}

If a tool fails, Lumen says so rather than inventing a result. You'll see a short banner, such as **Request timed out** or **Service unavailable**, with a **Retry** button. If a tool needs a higher plan, the banner says **Upgrade required**. See [Troubleshooting](/help/troubleshooting/).

## What this means for you

- **Look for the chips.** A dosing or interaction answer with no tool chip and no sources came from the model's general knowledge. Treat it like a colleague's recollection.
- **Check what was asked.** The chip shows what was looked up. If you asked about azithromycin and the lookup ran on erythromycin, you'll see it.
- **Check that the answer matches the data.** The answer sits on top of its evidence, so a mismatch is visible.

## Limits and safety

- **A tool is only as good as its data.** Databases can lag behind new approvals or recalls. The source chip tells you which database answered.
- **The model still chooses.** It can pick the wrong tool or skip one. That's why the chips are shown: you can see what ran.
- **Tools inform; they don't decide.** An interaction rating or a calculator score is one input to your judgment.

{{< callout type="safety" title="Check the source before you act" >}}
Open the cited label, database entry or guideline before you change a patient's care. Lumen supports clinical judgment; it doesn't replace it.
{{< /callout >}}

## FAQ

{{< faq question="What is function calling?" >}}
It's the technical name for tool use. The model writes a structured request, Lumen's servers run it against a real database or calculator, and the model answers from the result.
{{< /faq >}}
{{< faq question="How do I know whether Lumen used a database or its memory?" >}}
Look above the answer. The summary line, such as **Used Drug interactions and Drug label**, opens to show which tools ran. Below the answer, the sources count shows what was cited. No tools and no sources means the answer came from general knowledge.
{{< /faq >}}
{{< faq question="Can I choose which tool Lumen uses?" >}}
You can steer it in plain language ("check this against the FDA label"), and Specialists come with the right tools for their job. You don't need to name tools for everyday questions.
{{< /faq >}}

## Next steps

{{< related "/learn/rag-and-citations/" "/tools/" "/chat/responses/" "/getting-started/check-interaction/" >}}
