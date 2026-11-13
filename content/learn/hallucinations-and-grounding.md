---
title: "AI hallucinations and how grounding helps"
navTitle: "Hallucinations and grounding"
description: "Why AI states fluent falsehoods, the layered defenses that make them rarer and easier to catch, and what you should still check yourself."
lead: "An AI can be wrong in exactly the same confident voice it uses when it's right. Here's why, what Lumen does about it, and what stays your job."
weight: 4
icon: shield-check
keywords: ["AI hallucinations in medicine", "why does AI make things up", "AI grounding explained"]
glance:
  what: "A hallucination is a fluent, specific statement from an AI that is false. Grounding means building answers from real sources so errors are rarer and easier to spot."
  who: "Every clinician, educator, compliance lead or device-company reviewer who reads AI output."
  why: "To know why AI makes things up, what defenses actually help, and how to check an answer quickly."
  needs: "Nothing. About 6 minutes to read."
  result: "A practical checklist for deciding how far to trust an AI answer."
---

Every clinician has met confabulation. The patient is charming and specific: they describe yesterday's visit from a brother who lives abroad, down to what he wore. Nothing in the delivery signals a problem. It's also not true. You don't catch it by listening harder. You catch it by **checking the chart**. An AI **hallucination** is confabulation in software, and the fix is the same: don't trust the delivery; check the record.

## What a hallucination is

A {{< term "Hallucination" >}} is a plausible, specific, false statement from an AI model: a study that doesn't exist, a dosing threshold that's slightly off, a guideline recommendation blended from two real ones.

It happens because of how language models work. A model writes by predicting what text plausibly comes next, based on what it learned in training. There's no built-in step where it checks a claim against a database. A made-up citation *looks* real, with a plausible journal, authors and year, because the model learned the shape of citations very well. Truth has to be added from outside the model.

So hallucination isn't a bug a future update will delete. It's the natural failure of the technology. The answer is to build systems, and habits, that expect it.

## Why it matters more in medicine

- **Errors carry weight.** A wrong renal-dosing threshold can end up in an order.
- **Mistakes look reasonable.** Medical hallucinations are rarely absurd. They're near-misses: the right drug class with the wrong drug, a real trial with its conclusion reversed.
- **Confidence tells you nothing.** A model sounds equally sure when reciting settled fact and when inventing one.

## How it works: layers of defense

No single fix exists, so a well-built system stacks several. Each catches some of what the one before it misses.

{{< flow >}}
{{< flow-node kicker="Layer 1" title="Look it up" icon="search" tint="blue" >}}Facts come from real sources and tools, not memory.{{< /flow-node >}}
{{< flow-node kicker="Layer 2" title="Cite it" icon="quote" tint="plum" >}}Each claim points to the passage it came from.{{< /flow-node >}}
{{< flow-node kicker="Layer 3" title="Check it" icon="shield-check" tint="accent" >}}Software checks citations and quotes against the sources.{{< /flow-node >}}
{{< flow-node kicker="Layer 4" title="Say so" icon="alert-circle" tint="green" >}}When nothing supports an answer, it says so.{{< /flow-node >}}
{{< /flow >}}

## How Lumen does it

- **Retrieval first.** Lumen finds relevant passages in clinical sources, your documents and your team's Knowledge Packs before it answers. See [RAG and citations](/learn/rag-and-citations/).
- **Tools for facts.** Interactions, codes, doses and scores go to real databases and calculators. You see a chip for each tool that ran. See [Tool use](/learn/tool-use/).
- **Citations are checked.** If an answer cites a source Lumen didn't actually retrieve, that citation is removed before you see it. The **Lumen Evidence** pill shows how well the cited sources support the answer.
- **Specialist results are checked against quotes.** When a *Specialist* (Lumen's name for an AI agent that does multi-step work) produces a finished result, Lumen's server looks for every quoted passage in the sources it loaded itself. Failed checks send the work back for repair, and the result carries a verdict. See [Verified results](/skills-and-specialists/verified-results/).
- **Permission to say "not found".** The [website assistant](/connect/website-assistant/) on a device maker's site declines to answer when no passage in the maker's documents is a close enough match, and says the documentation doesn't cover it.

{{< chat-demo title="When the sources run out" caption="Illustration. An honest gap is the system working, not failing." >}}
{{< user >}}What's the maximum dwell time for the Northwind SL-4 securement device on a midline?{{< /user >}}
{{< lumen thought="4" sources="1" >}}
The SL-4 instructions for use describe placement and removal steps {{< cite 1 >}}, but I couldn't find a stated maximum dwell time for midlines in the documents I searched.

Check the current IFU from Northwind Vascular or contact their clinical support before setting a dwell limit.
{{< /lumen >}}
{{< /chat-demo >}}

These layers make hallucinations much rarer and make most of the rest visible. They don't make them impossible. Anyone promising zero hallucinations is describing a product that doesn't exist.

## What this means for you

- **Check anything new or consequential.** Anything surprising, or anything that will touch a patient's care, gets its source opened.
- **Use the citations.** They exist to make checking a ten-second job. A confident claim with no source deserves the skepticism you'd give a confident colleague with no reference.
- **Report answers that miss.** Use **Report** under an answer when it's wrong or its sources don't support it. That's how weak spots get found and fixed.

## Limits and safety

- **Correct sources can be summarized wrongly.** Read the passage, not only the answer.
- **Checks confirm quotes, not clinical truth.** A verdict or the Lumen Evidence pill tells you how well the answer matches its sources. It doesn't tell you the sources fit your patient.
- **Uncited answers come from general knowledge.** They can be right, but you can't check them with a click.

{{< callout type="safety" title="Lumen can be wrong" >}}
Before acting on any answer, open the cited sources, check them against your organization's policies, and use your professional judgment. Lumen is never the last check before the patient.
{{< /callout >}}

## FAQ

{{< faq question="Can AI hallucinations be prevented completely?" >}}
No. Grounding answers in sources, sending facts to real tools, checking citations and saying "not found" make them much rarer and easier to catch. Checking the source is still your job.
{{< /faq >}}
{{< faq question="How can I tell whether an answer is trustworthy?" >}}
Ignore how confident it sounds. Look for tool chips and citations, open the sources, and confirm they say what the answer says. Under an answer, the **Lumen Evidence** pill shows how well the cited sources support it.
{{< /faq >}}
{{< faq question="What should I do when I find a wrong answer?" >}}
Don't act on it, and use **Report** under the answer. If it could affect patient safety, follow your organization's usual safety reporting process as well.
{{< /faq >}}

## Next steps

{{< related "/learn/rag-and-citations/" "/chat/sources/" "/trust/responsible-ai/" "/skills-and-specialists/verified-results/" >}}
