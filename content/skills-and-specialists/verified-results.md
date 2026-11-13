---
title: "How Lumen checks a specialist's result"
navTitle: "Verified results"
description: "Before a specialist's result is saved, Lumen's server finds every quoted source again and applies that job's rules. The verdict says checked, never correct."
lead: "A specialist's result isn't just text. Lumen's server re-finds every quote in the source it came from, applies the rules for that kind of work, and records what passed and what didn't."
weight: 4
icon: badge-check
glance:
  what: "Verified results are how Lumen checks a specialist's finished work: every quoted source is found again by Lumen's server, the job's rules are applied, and the result is saved with a verdict you can read."
  who: "Clinicians who rely on a specialist's result, and reviewers, educators, compliance and quality leads who need to know what was checked."
  why: "So you can see which statements are backed by a source, word for word, and which issues still need a person, before anyone acts on the result."
  needs: "A specialist result, on any plan. Reviewing one takes a few minutes."
  result: "A saved, versioned result with a verdict, the quotes it rests on, and your sign-off if you choose to give it."
---

AI can quote a source that doesn't say what it claims. Lumen guards against that for specialist work. When a specialist finishes, it can't just write its result into the chat. It has to hand the result to Lumen's server, with each claim tied to a quote and a source. The server finds each quote again in a source it loaded itself, applies the rules for that kind of work, and saves the result with a **verdict**. If the checks fail, the specialist must fix the problems and try again.

## Before you start

- You need a result from a specialist, such as a medication review, an evidence review, a handout or an education module. See [Work with a specialist](/skills-and-specialists/working-with-a-specialist/).
- Nothing to set up. Every specialist that produces a result uses these checks.

## How it works

{{< flow >}}
{{< flow-node kicker="1 · The specialist submits" title="Result plus quotes" icon="file-text" tint="plum" >}}Each claim names its source and quotes it.{{< /flow-node >}}
{{< flow-node kicker="2 · Lumen re-finds" title="Every quote, in the real source" icon="search" tint="blue" >}}The server looks for each quote in a source it loaded itself: the chart text, your documents, PubMed, ClinicalTrials.gov, an FDA label.{{< /flow-node >}}
{{< flow-node kicker="3 · Lumen applies the rules" title="That job's checks" icon="list-checks" tint="blue" >}}For example: every medication pair screened or listed as untested.{{< /flow-node >}}
{{< flow-node kicker="4 · Saved with a verdict" title="A sealed version" icon="badge-check" tint="green" >}}Version 1 is stored with its verdict. Edits make version 2.{{< /flow-node >}}
{{< /flow >}}

Each kind of result has its own rules. A few examples, taken from the checks themselves:

| Specialist | Some of what its result must pass |
|---|---|
| **Medication Review** | Every alert quotes the FDA label it came from. Untested pairs are listed. Kidney function is computed by Lumen's server, not estimated. Nothing is phrased as an order. |
| **Clinical Research** | Every study came back from one of the review's own searches. Every effect is quoted from its abstract. No certainty grade is assigned unless a source prints one. |
| **Patient Education** | The reading grade is measured, not claimed. A machine translation is marked for review by a qualified translator. |
| **Trial Matcher** | Every criterion is quoted from that trial's own eligibility text. The words "eligible" and "good match" are never used. |
| **Clinical Educator** | Every quiz answer is quoted from a source in force. Every learning objective has at least one question. |

## How to review a verified result

{{< steps >}}
{{< step title="Open the result" >}}In the chat, click the result's link (**Open** followed by its title). It opens beside the chat.{{< /step >}}
{{< step title="Read the verdict" >}}At the top you'll see either **Passed its checks** or **Needs attention** with the number of blocking issues.{{< /step >}}
{{< step title="Check what was checked" >}}Open **What was checked** for the method in plain words, and **What this rests on** for the assumptions the checks couldn't confirm. Issues are listed under **Blocking** and **Warnings**.{{< /step >}}
{{< step title="Open the quotes" >}}Each quote shows its source and its status, such as *Found word for word in the cited source.* Open the source to read the passage in context.{{< /step >}}
{{< step title="Edit or ask for changes" >}}Edit the result yourself, or ask the specialist in the chat. Each change makes a new version, listed under **Versions**, and is checked again.{{< /step >}}
{{< step title="Sign off (optional)" >}}Click **Sign off version** followed by its number. If blocking issues remain, Lumen asks you to write why you're signing anyway, and stores that reason with your sign-off.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="agents-deliverable" alt="A medication review result open beside the chat, showing Passed its checks, the quotes with their sources, and the Sign off button" caption="A verified result: the verdict, what was checked, each quote with its source, and sign-off." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Evidence review" specialist="Clinical Research" caption="Illustration. The trials named are real; check the cited abstracts before relying on any figure." >}}
{{< user >}}Synthesize the evidence for SGLT2 inhibitors in heart failure with preserved ejection fraction.{{< /user >}}
{{< lumen tools="Searched PubMed, Saved and checked" sources="2" >}}
Two large randomized trials, EMPEROR-Preserved (empagliflozin) {{< cite 1 >}} and DELIVER (dapagliflozin) {{< cite 2 >}}, reported fewer of the combined outcome of cardiovascular death or worsening heart failure compared with placebo.

{{< verdict >}}Passed its checks: every effect is quoted from its abstract, and every study came from the review's own searches.{{< /verdict >}}
{{< sources >}}
{{< source n="1" title="Empagliflozin in Heart Failure with a Preserved Ejection Fraction" meta="PubMed · N Engl J Med · 2021" >}}EMPEROR-Preserved. Quote status: found word for word in the cited source.{{< /source >}}
{{< source n="2" title="Dapagliflozin in Heart Failure with Mildly Reduced or Preserved Ejection Fraction" meta="PubMed · N Engl J Med · 2022" >}}DELIVER. Quote status: found word for word in the cited source.{{< /source >}}
{{< /sources >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

A quote that couldn't be confirmed is shown plainly, for example:

| Quote status | Meaning |
|---|---|
| *Found word for word in the cited source.* | Lumen found it. |
| *The quote is not in the cited source.* | The source doesn't contain it. Treat the claim as unsupported. |
| *The cited source could not be read, so the quote could not be checked.* | Lumen couldn't open the source. Check it yourself. |
| *No quote was given.* | The claim has no supporting quote. |

{{< verdict state="warn" >}}Needs attention · 1 blocking: the label found for one medicine does not match the medicine on the list (Wrong label).{{< /verdict >}}

## Good to know

- **The verdict is earned, not claimed.** The specialist can't mark its own work as checked. Only Lumen's server sets the verdict, after its own checks.
- **Versions are sealed.** Each saved version is stored as it was, with the verdict it received. You can always see which version you signed.
- **The strongest check is the quote.** A claim with a quote found in its source is one you can verify in seconds. A claim without one deserves more scrutiny.

## Limits and safety

- **"Checked" isn't "correct".** **Passed its checks** means the quotes were found and the job's rules were met. It doesn't mean the result is clinically right, complete or safe for a particular patient.
- A quote can be real and still be the wrong source for your situation, for example an adult label for a child. Read the passage.
- The checks only cover what a specialist puts in its result. Anything else it says in the chat isn't part of the verdict.
- Signing records that you reviewed that version and take responsibility for it. Lumen never signs.

{{< callout type="safety" title="You make the clinical decision" >}}
A verified result tells you where each statement came from. It can't tell you whether the plan is right for your patient. Use your clinical judgment and your organization's policies before you act.
{{< /callout >}}

## FAQ

{{< faq question="Is this the same as Lumen Evidence on ordinary answers?" >}}
They're related. Ordinary chat answers can show a **Lumen Evidence** pill when Lumen checked its statements against the sources it read. Specialist results go further: a saved version, rules for that kind of work, a verdict and sign-off. See [Where answers come from](/chat/sources/).
{{< /faq >}}
{{< faq question="What happens when a check fails?" >}}
The specialist is told what failed and has to repair its result before it finishes. If it still can't fix an issue, the result is saved as **Needs attention** and the reply names each remaining issue and why.
{{< /faq >}}
{{< faq question="Can I edit a result after it's checked?" >}}
Yes. Your edit is saved as a new version, marked as edited by you, and checked again.
{{< /faq >}}
{{< faq question="Who can see my sign-off?" >}}
The sign-off is stored with that version of the result, along with any written reason for signing with open issues.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/working-with-a-specialist/" "/skills-and-specialists/specialists/" "/chat/sources/" "/learn/hallucinations-and-grounding/" >}}
