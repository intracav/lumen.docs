---
title: "Make a study guide and quiz"
navTitle: "Study guide and quiz"
description: "Build a study guide from a guideline PDF, turn it into a scored quiz, take it in Lumen, and keep each attempt in your Cert Binder with a proof PDF."
lead: "Attach the guideline, ask for a study guide, then turn it into a quiz. Lumen grades each attempt and files it in your Cert Binder."
weight: 23
icon: graduation
who: "nurses, educators and trainees"
keywords: ["AI study guide generator", "clinical quiz builder", "nursing knowledge check quiz", "CLABSI prevention training"]
glance:
  what: "A step-by-step way to turn a guideline into a study guide and a scored quiz in Lumen, with each attempt recorded in your Cert Binder."
  who: "Nurses, educators, residents and students preparing for a knowledge check or teaching from a guideline."
  why: "Building study material and a fair quiz from a long guideline usually takes an evening. Lumen drafts both from the document you trust, grades attempts and keeps a record with a downloadable proof PDF."
  needs: "Any Lumen plan. The guideline or policy as a PDF. About 15 minutes to build, plus time to take the quiz."
  result: "A study guide, a scored quiz with explanations, and each attempt saved in your Cert Binder with a proof PDF."
---

Your unit has a central line infection prevention knowledge check next month, and the source is a 40-page guideline. Lumen can turn that guideline into a focused study guide, then into a scored quiz with an explanation for every answer. You take the quiz in Lumen. It grades your answers on its servers, so the answer key isn't visible beforehand, and it saves each attempt to your **Cert Binder**, your record of quiz attempts, with a proof PDF you can download.

## Before you start

- **Plan:** any Lumen plan.
- **The source document.** Use the version your knowledge check is based on. Lumen builds the guide from what you attach.
- **Your audience and level**, such as "med-surg nurses, annual knowledge check" or "PGY-1 residents".
- **A passing score**, if your program has one. 80% is common.
- **Time:** about 15 minutes to build, plus time to take the quiz.

A *skill* is a set of instructions Lumen follows for a kind of output. You choose one by typing `/` in the message box.

## How to build the guide and quiz

{{< steps >}}
{{< step title="Attach the guideline" >}}
Open a new chat. Click **+** (**Attach document**) and add the PDF. Wait until the file chip has finished **Reading…**.
{{< /step >}}
{{< step title="Ask for a study guide" >}}
Type `/` and choose **Study Guide** from the **Skills** list. The skill appears as a chip in the message box. Type the request and press **Send**:

{{< composer chips="Study Guide" text="Build a study guide from the attached central line infection prevention guideline for med-surg nurses. Focus on the insertion bundle, skin antisepsis, dressing changes, hub disinfection and when to draw blood cultures. Include the must-know numbers with the section they come from. Adults only." >}}
{{< /step >}}
{{< step title="Sharpen the guide" >}}
Read it as the educator. Ask for changes in the same chat:

{{< composer text="Cut anything about pediatrics. Put a one-page quick reference at the top. Turn the dressing section into a table: dressing type and change interval." >}}
{{< /step >}}
{{< step title="Turn it into a quiz" >}}
Type `/` and choose **Clinical Quiz Builder**. Then type the request and press **Send**:

{{< composer chips="Clinical Quiz Builder" text="Make a 10-question quiz from this study guide. Mostly bedside scenarios, one best answer each, plausible wrong answers. Pass threshold 80%. Give the rationale and the guideline section for every answer." >}}

You'll see **Generating quiz**, then **Quiz ready**. A quiz card appears in the chat.
{{< /step >}}
{{< step title="Take the quiz" >}}
Click the quiz card to open it in the side panel. It shows **Question 1 of 10**. Choose an answer and click **Next**. Use **Back** to change an answer. When you've answered every question, click **Submit Quiz**.
{{< /step >}}
{{< step title="Read your results" >}}
Lumen grades the quiz on its servers and shows your score, **Passed** or **Failed** against the **Pass threshold**, and the rationale for each question. Click **Retake** to try again. Each attempt is saved separately.
{{< /step >}}
{{< step title="Download the proof PDF" >}}
Go to {{< ui-path "Home" "Cert Binder" >}} and open the attempt. On the **Proof Packet** screen, click **Download proof PDF**.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="cert-binder" alt="The Cert Binder in Lumen listing quiz attempts with scores and pass or fail results" caption="The Cert Binder. Each graded attempt is listed with its score and a downloadable proof PDF." url="lumen.intracav.ai" >}}
{{< chat-demo title="Central line infection prevention quiz" caption="Illustration with fictional content. Check every item against your own guideline." >}}
{{< user attach="cvc-infection-prevention-guideline.pdf" >}}Make a 10-question quiz from this study guide. Bedside scenarios, pass threshold 80%, rationale and guideline section for every answer.{{< /user >}}
{{< lumen thought="9" tools="Document read, Quiz ready" sources="1" >}}
Your quiz is ready: **Central line infection prevention, med-surg**. 10 questions, pass threshold 80%. Answers and rationales appear after you submit.

**Question 4 of 10:** A patient with a central line spikes a fever of 38.6 °C. Antibiotics haven't been started. Which blood culture plan best supports a diagnosis of catheter-related bloodstream infection?

- A. One set drawn through the catheter
- B. One set from a peripheral vein only
- C. Paired sets, one through the catheter and one from a peripheral vein, before antibiotics
- D. One set drawn through the catheter after the first antibiotic dose

{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

After you submit, the rationale for question 4 explains why paired cultures drawn before antibiotics let the lab compare the catheter and peripheral samples.

## Check the result

{{< lui-block title="Before anyone studies from it" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Every number in the guide matches the guideline" body="Intervals, concentrations and timings, each with its section." >}}
{{< lui-row type="check" title="Each quiz answer is supported by the guideline section it names" >}}
{{< lui-row type="check" title="Wrong answers are clearly wrong on careful reading" body="Rewrite any question where two answers could be defended." >}}
{{< lui-row type="check" title="Local policy differences are handled" body="If your policy differs from the national guideline, decide which one the quiz tests." >}}
{{< lui-row type="check" title="You've taken the quiz once yourself" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Make it harder by changing the format, not the facts.** Ask `Rewrite questions 2, 5 and 9 as bedside scenarios where the wrong answers are common mistakes.`
- **Missing section?** Point to it: `Work in the section on dressing-change frequency.`
- **Test your policy, not only the guideline.** Attach your unit's policy too and say `Where they differ, test our policy and note the difference in the rationale.`
- **For a whole unit**, use the **Clinical Educator** Specialist on a team plan (Plus or higher). It builds an education module from your policies. You then create a quiz with a protected answer key, a Live session or a learner page for your team, and see completion by learner.

## Limits and safety

{{< callout type="safety" title="A knowledge check, not a competency sign-off" >}}
A passed quiz shows what someone knew on a test. It doesn't certify bedside skill. A qualified assessor validates skills. Check every study guide fact and quiz answer against the source before anyone learns from it. Lumen can be wrong.
{{< /callout >}}

- **Your Cert Binder holds your own attempts.** It isn't a team training record. For team tracking, use the Clinical Educator route described above.
- **The quiz tests what you gave it.** If the source is out of date, so is the quiz.
- **Proof PDFs are simple attempt records.** They list your name, the quiz, score, pass threshold, result, attempt number, date and each question's result. Check what your program or accreditor needs.

## FAQ

{{< faq question="Can someone see the answers before they submit?" >}}
No. The answer key stays on Lumen's servers. Rationales and correct answers appear only after the quiz is submitted.
{{< /faq >}}
{{< faq question="Where do I find past attempts?" >}}
Go to {{< ui-path "Home" "Cert Binder" >}}. Each attempt is listed with its score and result. Retakes are saved as separate attempts.
{{< /faq >}}
{{< faq question="Can I run the quiz live in a staff meeting?" >}}
Yes, with **Lumen Live**, Lumen's real-time sessions where people answer on their phones and results show on a shared screen. See [Run a Live session](/live/run-a-session/).
{{< /faq >}}

## Next steps

{{< related "/learning/cert-binder/" "/live/run-a-session/" "/skills-and-specialists/skills/" "/guides/analyze-a-document/" >}}
