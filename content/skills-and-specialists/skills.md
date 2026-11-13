---
title: "Use and create skills"
navTitle: "Skills"
description: "A skill is a set of instructions Lumen follows for one kind of output, such as a SOAP note or a patient handout. Use one with /, or make your own."
lead: "Type / and pick a format, such as a SOAP Note, a Prior Authorization or a Patient Handout. Lumen follows that skill's structure for your next message. You can also write skills of your own."
weight: 5
icon: zap
keywords: ["AI SOAP note generator", "AI prior authorization letter", "AI discharge summary", "AI patient handout", "medical AI documentation"]
glance:
  what: "A skill is a saved set of instructions that tells Lumen how to produce one kind of output, such as a SOAP note, a referral letter or a journal-club appraisal."
  who: "Clinicians, nurses, educators, coders and administrators who produce the same kinds of documents again and again."
  why: "To get the format you need the first time, with the sections and standards you expect, instead of describing them in every message."
  needs: "A Lumen account on any plan. About 1 minute to use a skill; about 10 minutes to write your own."
  result: "An answer shaped the way that skill describes, or a custom skill you can reuse with /."
---

You write the same kinds of things every week: progress notes, handoffs, appeal letters, study guides. A **skill** tells Lumen exactly how one of those should look, so you don't have to explain it each time. Pick one with `/` and Lumen applies it to your next message. Lumen also applies a matching skill on its own when your request clearly calls for it, for example "write a SOAP note for this visit".

## Before you start

- Any plan can use the built-in skills and create custom ones.
- A few skills rely on tools that need Pro or above, such as the animation and video skills. On a lower plan, Lumen answers without those tools.
- Team skills, shared by your organization, appear only when you're in that team's workspace.

## How to use a skill

{{< steps >}}
{{< step title="Open the skills list" >}}In the message box, type `/` or click **Skills**. You'll see **Suggested skills**.{{< /step >}}
{{< step title="Find the one you want" >}}Keep typing to filter, for example `/discharge`. Click a skill to select it.{{< /step >}}
{{< step title="Write your request" >}}A chip above the message box shows the skill is set for your next message. Add your details, for example "72M, CHF exacerbation, diuresed 4 L, discharge on furosemide 40 mg daily."{{< /step >}}
{{< step title="Send" >}}Lumen answers in the skill's format. The skill applies to that message only. To clear it before sending, click the **×** on the chip.{{< /step >}}
{{< /steps >}}

{{< composer menu="skills" items="Discharge Summary|Comprehensive hospital discharge documentation with medication reconciliation;Progress Note|Daily inpatient progress notes following APSO or DAP format;Clinical Handoff|Structured patient handoff using I-PASS or SBAR format" text="/discharge" >}}

## How to create your own skill

{{< steps >}}
{{< step title="Open your skills" >}}Click **Explore** in the sidebar, then **Manage your skills**. The **Skills** page lists **All**, **System** and **My Skills**.{{< /step >}}
{{< step title="Start a new skill" >}}Click **New Skill**. The **Create Skill** page opens.{{< /step >}}
{{< step title="Describe it" >}}Under **Identity**, fill in **Name**, **Icon**, **Description** and **Category**.{{< /step >}}
{{< step title="Write the instructions" >}}Under **Behavior**, write the **Instructions**: the steps and format Lumen should follow. Be specific, for example "Use SBAR. Put allergies and code status first. Keep it under 200 words."{{< /step >}}
{{< step title="Decide when it runs" >}}Turn on **Auto-trigger** if Lumen should apply it when a message matches. Under **Triggers & examples**, add **Trigger Patterns** and **Example Prompts**, one per line.{{< /step >}}
{{< step title="Save" >}}Click **Create**. Your skill appears in the `/` list and in Explore, marked **Yours**.{{< /step >}}
{{< /steps >}}

{{< callout type="tip" title="Let Lumen draft it" >}}
The built-in **Skill Creator** skill turns a description of your workflow into a new skill. Type `/` and choose **Skill Creator**, then describe the task you repeat.
{{< /callout >}}

## What you'll see

{{< screenshot src="composer-skills" alt="The skills menu open above the message box, filtered by the word discharge" caption="Type / to pick a skill. It applies to your next message." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Discharge summary" caption="Illustration with a fictional patient. Check every medication change against the chart." >}}
{{< user >}}Discharge summary: 72M admitted 3 days for CHF exacerbation, diuresed 4 L, now euvolemic. Discharge on furosemide 40 mg daily, follow-up with cardiology in 1 week.{{< /user >}}
{{< lumen tools="Medication data retrieved" >}}
**Discharge summary**

**Reason for admission:** acute decompensated heart failure.

**Hospital course:** diuresed with IV furosemide, net negative 4 L. Euvolemic on day 3.

**Discharge medications:** furosemide 40 mg by mouth daily (changed from IV).

**Follow-up:** cardiology in 1 week. Daily weights; call for a gain of more than 2 to 3 lb in a day or 5 lb in a week.

**Pending results:** none stated. Confirm before signing.
{{< follow-ups "Add a medication reconciliation table|Write the patient instructions in plain language|Make it an SBAR handoff" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Built-in skills

These ship with Lumen. They're grouped here by the category shown in the app. Skills that belong to a specialist, marked "(agent)" in the list, are used by that specialist and aren't meant to be picked on their own.

{{< tabs >}}
{{< tab name="Documentation" >}}
**SOAP Note**, **History & Physical**, **Discharge Summary**, **Progress Note**, **Procedure Note**, **Consultation Note**, and **Branded Clinical Document** (a styled PDF or Word report).
{{< /tab >}}
{{< tab name="Decision support" >}}
**Differential Diagnosis Builder**, **Lab Result Interpreter**, **ABG Analysis**, **ECG Interpreter**, **Imaging Review**, **Dose Calculator**, **IV Drip Titration**, **ED Triage**, **Medication Reconciliation**, **Drug Safety Review**, **Drug Label Research**, **Antimicrobial Stewardship**, **Vascular Access Planning**, **Patient Record Review** (needs an EHR connection), and **Interactive Dashboard**.
{{< /tab >}}
{{< tab name="Administrative" >}}
**Prior Authorization**, **Insurance Appeal**, **Peer-to-Peer Prep**, **Referral Letter**, **CDI Query**, **Shift Scheduler**, and **Clinical Spreadsheet**.
{{< /tab >}}
{{< tab name="Education" >}}
**Patient Handout**, **Study Guide**, **Case Presentation**, **Journal Club**, **Clinical Quiz Builder**, **Branded Clinical Presentation**, **Scientific Animation** and **Clinical Video Explainer**.
{{< /tab >}}
{{< tab name="Research" >}}
**Literature Review**, **PICO Builder**, **Evidence Grader** and **Clinical Trial Matcher**.
{{< /tab >}}
{{< tab name="Communication and quality" >}}
**Patient Letter**, **Clinical Handoff** (I-PASS or SBAR), **Root Cause Analysis**, **Quality Measure Report**, and **Skill Creator**.
{{< /tab >}}
{{< /tabs >}}

## Good to know

- **Skills stack with everything else.** A skill shapes the answer; Lumen still looks things up with its tools and cites its sources.
- **Specialists load their own skills.** When you work with a specialist, it already uses the skills it needs. See [Work with a specialist](/skills-and-specialists/working-with-a-specialist/).
- **System skills can't be edited.** To change one, create your own skill with the instructions you prefer.
- **Clinical Video Explainer and Scientific Animation** make Intracav-branded media and use rendering tools that need Pro or above.

## Limits and safety

- A skill controls format and approach. It doesn't make an answer correct. Check the content and the cited sources.
- Notes and letters are drafts for you to review, edit and sign in your own system.
- Write custom skills for your own work. Don't put patient information in a skill's instructions; skills are reused across chats.

{{< callout type="safety" title="Review every draft" >}}
Documentation skills write from what you give them. If a detail is missing, the draft may leave a gap or a placeholder. Confirm medications, doses, allergies and pending results against the chart before you sign.
{{< /callout >}}

## FAQ

{{< faq question="Do I have to pick a skill for Lumen to use one?" >}}
No. Built-in skills turn on automatically when your message clearly matches, for example "write a SOAP note". Picking one with `/` makes sure it's used.
{{< /faq >}}
{{< faq question="Can I use more than one skill at once?" >}}
Yes. Skills can be combined for a message. Specialists are different: one specialist works on a chat at a time.
{{< /faq >}}
{{< faq question="Can my whole team use a skill I made?" >}}
Skills you create are yours. Skills your organization shares appear marked **Your team** in its workspace.
{{< /faq >}}
{{< faq question="What's the difference between a skill and a specialist?" >}}
A skill shapes one answer. A specialist takes on a whole job with many steps, and Lumen checks its result before saving it. See [Specialists](/skills-and-specialists/specialists/).
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/explore/" "/skills-and-specialists/specialists/" "/getting-started/draft-a-note/" "/chat/artifacts/" >}}
