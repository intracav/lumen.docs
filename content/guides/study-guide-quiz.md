---
title: "Make a Study Guide & Quiz (Cert Binder)"
description: "Build a study guide from a guideline PDF, generate a scored quiz, and let staff take it in chat — attempts save to the Cert Binder with proof PDFs."
weight: 23
audience: clinician
time: "~15 minutes"
keywords: ["AI study guide generator", "clinical quiz builder", "nursing competency quiz", "CRBSI prevention training"]
---

## What you'll make

A complete competency package from a single source document: a focused study guide distilled from your guideline PDF, a scored quiz with an explanation and citation behind every answer, and — because staff take the quiz right in chat — **a record of every attempt saved automatically to the [Cert Binder](/knowledge/cert-binder/), with a proof PDF** you can hand to a surveyor or an educator. The part that usually means an evening in a slide editor and a separate quiz tool becomes one conversation.

We'll build a real-shaped example: **preparing a unit for a CRBSI-prevention competency** from a central-line infection-prevention guideline. Every detail below is fictional.

## Before you start

- **Any plan works.** Study guides and quizzes run on every Lumen plan; see [Plans](/plans/) if you're bumping into message limits.
- **Have the source document.** One authoritative guideline PDF beats five loose ones — the guide and the quiz will both be grounded in what you attach, so attach the version your competency is actually based on.
- **Know your audience and the bar.** "Vascular access nurses, bedside competency" produces a different guide than "new residents, boards prep" — say which one you mean.

## Build the package

<div class="steps-container">

{{< step num="1" title="Attach the guideline and run /study-guide" >}}
Start a chat, attach the guideline PDF, and type **/** to pick **[Study Guide](/skills-and-specialists/skills/)** — or just type the command:

```text
/study-guide — build a study guide from the attached CRBSI-prevention
guideline for our vascular access nurses. Focus on insertion bundle
elements, dressing and hub care, and when to draw blood cultures.
Keep it to what a bedside competency would actually test.
```

**You should see:** Lumen read the attachment first — the guide is built from *your* document, with section references back to it — then a structured study guide: key concepts, the must-know numbers, and the points where units most often drift from the guideline.
{{< /step >}}

{{< step num="2" title="Review and sharpen the guide" >}}
Read it as the educator, not the student. Trim what your competency doesn't cover; deepen what it does:

```text
Cut the pediatric section — we're an adult unit. Expand hub
disinfection: scrub time, agent, and dry time as their own bullet
list. Add a one-page quick-reference summary at the top.
```

**You should see:** the guide revised in place, with your emphasis reflected — and every clinical claim still traceable to the attached guideline rather than general knowledge.
{{< /step >}}

{{< step num="3" title="Generate the scored quiz with /clinical-quiz-builder" >}}
Turn the finished guide into the assessment with the **[Clinical Quiz Builder](/skills-and-specialists/skills/)** skill:

```text
/clinical-quiz-builder — turn this study guide into a 10-question
scored quiz for the CRBSI-prevention competency. Mix scenario-based
and recall questions. Passing score 80%. Explanation and guideline
citation behind every answer.
```

**You should see:** a 10-question quiz where the wrong answers are plausible (real distractors, not giveaways), and each question carries a hidden explanation plus a citation into the guideline — revealed after the question is answered, not before.
{{< /step >}}

{{< step num="4" title="Have staff take the quiz in chat" >}}
Each staff member takes the quiz in their own chat — question by question, one answer at a time, with the explanation appearing after each response so the quiz teaches as it scores.

{{< chat-demo title="Taking the quiz" >}}
{{< user >}}
B — hold the culture and re-draw from a peripheral site only.
{{< /user >}}
{{< lumen >}}
**Correct — 7 of 7 so far.** When a central-line infection is suspected, paired cultures are the standard: one from the catheter hub *and* one peripheral, drawn before antimicrobials start. A catheter-only draw can't distinguish colonization from bloodstream infection — which is exactly what the differential time-to-positivity comparison needs. *(Guideline §4.2)*

Question 8 of 10: a dressing placed 5 days ago is clean, dry, and intact…
{{< /lumen >}}
{{< /chat-demo >}}

**You should see:** a running score, an explanation with its guideline citation after every answer, and a final scored result against the passing bar when the last question is done.
{{< /step >}}

{{< step num="5" title="Collect the proof from the Cert Binder" >}}
Nothing to file by hand: each completed attempt saves automatically to the **[Cert Binder](/knowledge/cert-binder/)** — who took it, when, the score, and a proof PDF of the attempt suitable for a competency file or a survey binder.

**You should see:** the attempt listed in the Cert Binder with its proof PDF ready to download — your audit trail builds itself as staff complete the quiz.
{{< /step >}}

</div>

{{< callout type="info" >}}
**The educator still owns the bar.** The quiz scores answers against the guideline you attached — but which score counts as competent, and what happens after a failed attempt, is your program's call. Lumen keeps the records; you keep the standard.
{{< /callout >}}

## Troubleshooting

- **The quiz feels too easy.** Ask for harder construction, not just harder facts: *"rewrite questions 2, 5, and 9 as bedside scenarios where the wrong answers are things people actually do."* Recall questions test reading; scenario questions test practice.
- **The study guide skipped a section you care about.** Point at it directly — *"the guide missed the section on dressing-change frequency, around pages 18–20; work it in"* — Lumen re-reads that part of the PDF and folds it in with citations.
- **An answer's explanation doesn't match your local policy.** The quiz is grounded in the guideline you attached, and national guidance can differ from local policy. Attach your unit's policy too and say *"where the two differ, test our policy and note the difference in the explanation."*

## Next steps

- **Make the guideline itself searchable for the whole team:** [Turn Your Protocols into a Knowledge Pack](/guides/build-a-knowledge-pack/) — so every chat can cite it, not just this one.
- **Why the citations behind each answer are trustworthy:** [RAG: how AI cites real sources instead of guessing](/learn/rag-and-citations/).
- **Where the attempts and proof PDFs live:** [Cert Binder](/knowledge/cert-binder/) — the competency record that builds itself.
