---
title: "Accuracy and clinical judgment"
navTitle: "Accuracy and judgment"
description: "How Lumen keeps AI answers checkable: citations, Lumen Evidence, verified deliverables, honest refusals and approvals, and why the clinician always decides."
lead: "Lumen is built so you don't have to take its word for anything. This page explains how answers stay checkable, where AI can still be wrong, and how to report a problem."
weight: 2
icon: scale
glance:
  what: "An explanation of how Lumen makes AI answers checkable (citations, evidence checks, honest refusals and approvals) and the limits that remain."
  who: "Clinicians, clinical leaders, and the quality, risk and procurement reviewers deciding whether to rely on Lumen."
  why: "AI can sound confident and still be wrong. Knowing how Lumen shows its work, and where it stops, lets you use it safely."
  needs: "Nothing. Applies to every plan."
  result: "You know how to check a Lumen answer, what the checks do and don't prove, and how to report a bad answer."
---

An answer you can't check is an opinion. Lumen is designed so that each statement in an answer points to the passage it came from, and so that when a specialist wants to act outside Lumen, it waits for a person to approve. (Workflows you build run their steps as you configured them.) The final decision always belongs to you.

## How it works

### Answers cite their sources

When you ask a question, Lumen looks things up (clinical databases, guidelines, PubMed, the web, and your own documents) and writes an answer that cites what it found. Numbered citations link each statement to its source, so you can open the passage and read it yourself. See [Where answers come from](/chat/sources/).

### Lumen Evidence and verified deliverables

Below some answers you'll see a **Lumen Evidence** pill. It means Lumen checked the answer's statements against the sources it read.

When a specialist produces a finished piece of work, such as an education module or an evidence review, Lumen's servers re-find every quoted passage in the sources they loaded themselves, then store the result with a verdict. If a check fails, the specialist has to repair the work. A verdict says the work was **checked**, never that it is **correct**.

### Honest refusals

If Lumen can't find support for something, it says so rather than filling the gap. The [website assistant](/connect/website-assistant/) that device makers run follows the same rule. It declines when its documents don't cover a question.

### Actions wait for approval

When Lumen proposes an action that leaves Lumen, such as sending an email or writing to another system, it stores the exact details and shows you an approval card. Nothing happens until a person approves it. On approval, Lumen confirms the details haven't changed, and then runs the action exactly as approved. Typing "I approve" in the chat does nothing.

## What you'll see

{{< screenshot src="chat-cited-answer" alt="A Lumen answer with numbered citations, the sources list and a Lumen Evidence pill" caption="Numbered citations link each statement to a source you can open." url="lumen.intracav.ai" >}}
{{< chat-demo title="Dressing change interval" caption="Illustration with fictional content. Always open the cited source." >}}
{{< user >}}How often should a transparent dressing over a PICC be changed?{{< /user >}}
{{< lumen thought="3" tools="Clinical guidelines" sources="2" evidence="true" >}}
Transparent semipermeable dressings are generally changed at least every 7 days, and sooner if the dressing is damp, loose or soiled {{< cite 1 >}}. Follow the dressing and securement device manufacturers' instructions for use as well {{< cite 2 >}}.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## How to check an answer

{{< steps >}}
{{< step title="Open the cited sources" >}}Click a numbered citation to read the passage it points to. Check that the passage says what the answer says.{{< /step >}}
{{< step title="Check it against your own rules" >}}Compare the answer with your organization's policies and, for devices, the instructions for use.{{< /step >}}
{{< step title="Report anything wrong" >}}Below the answer, click **Not helpful**, or click **Report** to open **Report this response**. Choose a reason (**Inaccurate**, **Unsafe**, **Off-topic**, **Unhelpful refusal** or **Other**), add a note if you like, and click **Submit report**.{{< /step >}}
{{< /steps >}}

## Limits and safety

- **AI can be wrong.** Language models sometimes produce fluent, confident statements that are false. This is often called *hallucination*. Citations and evidence checks reduce it, but they don't eliminate it. See [Hallucinations and grounding](/learn/hallucinations-and-grounding/).
- **A citation can be misread.** A source can be real and still not support the exact claim. Read the passage, not only the title.
- **Checked isn't the same as correct.** Lumen Evidence and deliverable verdicts confirm that quotes and statements were found in the sources. They don't confirm that the sources apply to your patient.
- **One model provider, chosen by plan.** Lumen uses one external model provider and picks the model by plan. It doesn't compare answers across several AI providers.
- **Lumen isn't a medical device.** It doesn't diagnose or treat, and it doesn't replace clinical judgment.

{{< callout type="safety" title="Lumen supports clinical judgment. It doesn't replace it." >}}
Before acting on an answer, open the cited sources, check them against your organization's policies, and use your professional judgment. The person acting on an answer is responsible for the decision.
{{< /callout >}}

## FAQ

{{< faq question="What does the Lumen Evidence pill mean?" >}}
That Lumen checked the answer's statements against the sources it read. It's a sign the answer is grounded, not a guarantee that it's right for your situation.
{{< /faq >}}
{{< faq question="Why does Lumen sometimes say it can't answer?" >}}
Because it couldn't find support in its sources. A clear "I couldn't find that" is safer than a confident guess.
{{< /faq >}}
{{< faq question="What happens when I report an answer?" >}}
Your report, its reason and your note are recorded so the Intracav team can review the answer.
{{< /faq >}}

## Next steps

{{< related "/chat/sources/" "/learn/hallucinations-and-grounding/" "/trust/privacy/" "/trust/" >}}
