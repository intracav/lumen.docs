---
title: "Draft a clinical note"
navTitle: "Draft a note"
description: "Tell Lumen what happened in the visit and get a structured draft, such as a SOAP note, H&P, discharge summary or referral letter, for you to review and edit."
lead: "Tell Lumen the key facts of the visit. It returns a structured draft you can review, edit and download, instead of a blank template."
weight: 7
icon: file-text
glance:
  what: "Lumen turns your summary of a visit into a structured draft note, such as a SOAP note, H&P, progress note, discharge summary or referral letter."
  who: "Physicians, advanced practice providers, nurses and other clinicians who write notes, on any plan."
  why: "To spend less time formatting and more time checking content, especially at the end of a long shift."
  needs: "A Lumen account (any plan). Your notes from the visit, without identifiers. About 3 minutes."
  result: "A draft note in a standard structure that you review, correct and copy into your record."
---

It's the end of the shift and you have notes to finish. Tell Lumen what happened in the visit, the way you'd tell a colleague. Lumen arranges it into the structure you ask for, marks anything you didn't give it as not documented instead of inventing it, and gives you a draft to review.

## Before you start

- **Plan:** any plan, including Free.
- **Have ready:** the facts for the note: reason for visit, history, vital signs, exam, results, assessment and plan.
- **Remove identifiers.** Leave out names, dates of birth, record numbers and exact dates. Add them in your record system after you paste the note.
- **Know your local rules.** Check whether your organization allows AI-drafted notes and how they must be reviewed.

## How to draft a note

{{< steps >}}
{{< step title="Open a new chat" >}}
Go to [lumen.intracav.ai](https://lumen.intracav.ai), sign in, and click **New Chat**.
{{< /step >}}
{{< step title="Choose the note type" >}}
Type `/` in the message box to open **Suggested skills**, and pick the note you want, such as **SOAP Note**, **Discharge Summary** or **Referral Letter**. Or just name it in your message, for example "Write a SOAP note…". Lumen applies the matching skill.
{{< /step >}}
{{< step title="Give the facts" >}}
Type or paste what happened. For example:

*"SOAP note. 55-year-old man, follow-up for hypertension. Home readings 150s–160s/90s. Today BP 168/96, HR 74. No chest pain, headache or vision change. Takes lisinopril 20 mg daily, good adherence. Exam unremarkable. Plan: add amlodipine 5 mg daily, low-sodium diet, recheck BP in 2 weeks."*
{{< /step >}}
{{< step title="Send it and read the draft" >}}
Press {{< kbd "Enter" >}}. The draft appears in the reply, or as a document you can **Open** in the panel beside the chat.
{{< /step >}}
{{< step title="Correct it" >}}
Ask for changes in plain words, such as *"Add that he declined a statin today,"* or *"Shorten the assessment."* In the panel, you can also ask Lumen to change one section at a time.
{{< /step >}}
{{< step title="Copy or download it" >}}
In the panel, use **Copy**, or **Download** as a Word document or PDF. Paste it into your record system and sign it there under your organization's policy.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="chat-artifact" alt="A SOAP note draft opened in the panel beside a Lumen chat" caption="A draft note opens in the panel beside the chat, where you can edit, copy or download it." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Hypertension follow-up" caption="Illustration with a fictional patient. Review every line before it goes in the record." >}}
{{< user >}}SOAP note. 55-year-old man, follow-up for hypertension. Today BP 168/96, HR 74. No chest pain, headache or vision change. Lisinopril 20 mg daily, good adherence. Plan: add amlodipine 5 mg daily, recheck BP in 2 weeks.{{< /user >}}
{{< lumen thought="4" tools="Clinical note generated" >}}
Here's the draft. I've marked the exam as not documented because you didn't describe it.

{{< artifact type="docx" title="SOAP note — hypertension follow-up" sub="Word Doc · 1 page" >}}

**A:** Essential hypertension, not at goal on single-agent therapy.
**P:** Add amlodipine 5 mg daily. Continue lisinopril 20 mg daily. Low-sodium diet. Recheck BP in 2 weeks. Watch for ankle swelling.

{{< follow-ups "Add a patient instruction sheet|Add the ICD-10 code|Make it shorter" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Notes Lumen can draft

| Ask for | You get |
|---|---|
| **SOAP Note** | Subjective, Objective, Assessment and Plan |
| **History & Physical** | A full admission history and physical |
| **Progress Note** | A daily inpatient progress note |
| **Discharge Summary** | Admission reason, hospital course, medicines, follow-up |
| **Procedure Note** | Indication, technique, findings and complications |
| **Consultation Note** | The question asked, a focused assessment, recommendations |
| **Referral Letter** | A letter to a specialist with the relevant history |

Type `/` to see every skill, or browse them in **Explore** under **Skills**. See [Skills](/skills-and-specialists/skills/).

## Tips

- **More facts, better draft.** Include vital signs, medicines with doses, and your plan.
- **Talk it through.** You can start a voice conversation and describe the visit out loud instead of typing. See [Talk to Lumen by voice](/chat/dictation/).
- **Attach the source material.** You can attach a de-identified document, such as nursing notes, and ask for a discharge summary from it.
- **Ask for codes.** *"Add ICD-10 codes for each diagnosis"*, then check them. See [Find a code](/getting-started/find-a-code/).

## Limits and safety

- Lumen writes from what you give it. If you didn't mention it, it shouldn't be in the note. Delete anything that wasn't said or done.
- Lumen doesn't connect to your electronic health record from a chat. Paste the note in yourself.
- A draft isn't a signed note. You are the author once you sign it.

{{< callout type="safety" title="Review every line before you sign" >}}
Check every fact, dose and plan against what happened. Remove anything that wasn't said or done, and follow your organization's policy on AI-assisted documentation.
{{< /callout >}}

## FAQ

{{< faq question="Will Lumen invent findings I didn't mention?" >}}
It's instructed not to. Missing sections are marked as not documented. Still, read the draft for anything you didn't say, and remove it.
{{< /faq >}}
{{< faq question="Can I use my own template?" >}}
Yes. Paste or attach your template and ask Lumen to follow it. A team can also turn its template into a custom skill.
{{< /faq >}}
{{< faq question="Can I download the note?" >}}
Yes. Open the document in the panel and use **Download** for a Word document or PDF, or **Copy** to paste it.
{{< /faq >}}

## Next steps

{{< related "/chat/artifacts/" "/skills-and-specialists/skills/" "/getting-started/find-a-code/" "/chat/dictation/" >}}
