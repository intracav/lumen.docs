---
title: "Create a patient handout"
navTitle: "Patient handout"
description: "Write a plain-language patient handout with Lumen: reading grade measured, when-to-call sections built in, sourced numbers, ready to print."
lead: "Tell the Patient Education Specialist who the handout is for and what it must cover. Lumen measures the reading grade and checks every number before you print it."
weight: 4
icon: book-open
who: "nurses, physicians and educators"
keywords: ["AI patient education handout", "plain language patient handout", "6th grade reading level handout", "warfarin patient education"]
glance:
  what: "A step-by-step way for clinicians to write a plain-language patient handout with Lumen's Patient Education Specialist."
  who: "Nurses, physicians, pharmacists and educators who give patients written instructions."
  why: "Patients act on what they can read. Lumen writes at the reading level you set, measures it rather than guessing, and makes sure every number a patient will act on comes from a source."
  needs: "Any Lumen plan. The topic, the reader and your clinic's specifics. About 5 minutes."
  result: "A one-page handout with a measured reading grade, when-to-call and when-to-call-911 sections and teach-back questions, as a PDF or Word file."
---

A patient is going home on warfarin for the first time. You've explained it at the bedside, but they'll need it on paper: what the medicine does, why the blood tests matter, what to keep steady in their diet and when to call. Lumen's **Patient Education Specialist** writes that handout in plain language for you to give your patient. It measures the reading grade with a standard formula and adds sections for when to call the clinic and when to call 911. Every number a patient will act on has to come from a source, such as the drug label or what you wrote.

## Before you start

- **Plan:** any Lumen plan.
- **The topic and the reader.** Why the patient is on the treatment, who will read the handout and in what language.
- **The reading level.** Lumen aims for 6th grade by default, the level the AMA Foundation recommends for patient materials. Ask for lower (grades 3 to 5) for readers with limited literacy.
- **Your clinic's specifics**, such as how often blood tests happen and where. Lumen leaves a blank for the clinic phone number rather than inventing one.
- **No identifiers.** The handout needs the clinical facts, not a name or record number.
- **Time:** about 5 minutes.

This guide is for clinicians. Lumen isn't a tool for patients. You review the handout and give it to your patient.

## How to create the handout

{{< steps >}}
{{< step title="Choose the Patient Education Specialist" >}}
Open a new chat. Type `@` in the message box and choose **Patient Education** from the **Specialists** list.
{{< /step >}}
{{< step title="Describe the handout" >}}
Say who it's for, what it must cover and the reading level, then press **Send**:

{{< composer text="@Patient Education write a one-page handout for an adult newly started on warfarin for a blood clot in the leg. 6th-grade reading level, English. Cover: what warfarin does, why INR blood tests matter, keeping vitamin K foods steady, checking before any new medicine or supplement, bleeding signs, when to call the clinic and when to call 911. INR checks are weekly at our anticoagulation clinic for the first month. Leave a blank for the clinic phone number." >}}
{{< /step >}}
{{< step title="Let the Specialist work" >}}
You'll see **Querying FDA drug database** while Lumen reads the warfarin label, then **Checking and saving** while it measures the reading grade and checks the numbers.
{{< /step >}}
{{< step title="Open the handout and read it aloud" >}}
Click the **Patient handout** card to open it in the side panel. Check the measured grade at the top. Then read the handout aloud. If you stumble over a sentence, your patient will too.
{{< /step >}}
{{< step title="Adjust it" >}}
Reply in the same chat. For example:

{{< composer text="Bring it down to a 5th-grade level. Add a line: bring this sheet to every clinic visit. Make the food section three short rules with examples." >}}

Lumen saves a new version and measures it again.
{{< /step >}}
{{< step title="Get a printable file" >}}
Type `Make it a PDF for printing.` and press **Send**. Open the document card and click **Download**. Ask for `a Word document` instead if your clinic edits handouts before printing.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="agents-deliverable" alt="A patient handout in Lumen's side panel with its measured reading grade, sections and teach-back questions" caption="A patient handout. The reading grade is measured, and every number shows its source." url="lumen.intracav.ai" >}}
{{< chat-demo title="Warfarin handout" specialist="Patient Education" caption="Illustration. Handout content is fictional and must be reviewed by a clinician." >}}
{{< user >}}Write a one-page handout for an adult newly started on warfarin for a blood clot in the leg. 6th-grade reading level…{{< /user >}}
{{< lumen thought="8" tools="FDA drug data retrieved, Saved and checked" sources="2" >}}
**Reading grade (measured):** 5.8 · target 6

**Main message:** Warfarin helps stop new blood clots. Take it at the same time every day, and get your INR blood test when the clinic asks.

**When to call the clinic:** new bruises you can't explain · bleeding gums or nosebleeds · pink, red or dark brown urine · black or tarry stools · you missed a dose and aren't sure what to do.

**When to call 911:** bleeding that won't stop · coughing or throwing up blood · a bad fall or a hit to the head · sudden weakness, trouble speaking or a very bad headache.

**Clinic phone:** [[Your clinic: phone]]

**Teach-back questions for you to ask:**

1. "Tell me when you will get your next INR test."
2. "What would you do if your stool turned black?"

{{< artifact type="pdf" title="Warfarin: what you need to know" sub="PDF · 1 page" >}}
{{< verdict >}}Passed its checks. Reading grade 5.8, at or below the target of 6.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check the result

{{< lui-block title="Before you hand it out" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="The measured grade is at or below your target" >}}
{{< lui-row type="check" title="Every number matches your plan for this patient" body="Doses, test schedules and timings. Personal instructions come from what you wrote, not from Lumen." >}}
{{< lui-row type="check" title="The when-to-call and 911 sections match your clinic's policy" >}}
{{< lui-row type="check" title="The clinic phone blank is filled in" >}}
{{< lui-row type="check" title="Translations are reviewed by a qualified translator" body="A translated version is marked machine-translated until someone reviews it." >}}
{{< lui-row type="check" title="A clinician has read the whole handout" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Ask for another language.** Type `Make a Spanish version.` Lumen saves it as a new version marked as machine-translated, with human review pending.
- **Use the teach-back questions.** Ask them at discharge to check that the patient understood.
- **Keep it to one page.** If it runs long, say `Cut to the five things they must know this week.`
- **Make it your clinic's standard.** Use the **Skill Creator** skill to save your structure and wording, so the next handout starts from your template. See [Skills](/skills-and-specialists/skills/).

## Limits and safety

{{< callout type="safety" title="A clinician reviews every handout" >}}
Lumen drafts patient instructions. A clinician must check them against the patient's actual plan and your organization's policies before the patient gets them. Lumen doesn't give handouts to patients and isn't a patient-facing service. Don't enter patient identifiers. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Reading grade is a formula.** The Flesch-Kincaid grade counts sentence and word length. It can't tell whether a patient will understand the content.
- **Machine translation needs review.** Have a qualified translator or bilingual clinician check every translated handout.
- **Lumen won't invent local details** such as phone numbers, addresses or clinic hours. It leaves blanks.

## FAQ

{{< faq question="How does Lumen know the reading level?" >}}
It measures it. After drafting, Lumen computes the Flesch-Kincaid grade of the handout. If the grade is above your target, the Specialist shortens sentences and words and measures again.
{{< /faq >}}
{{< faq question="Where do the medical facts come from?" >}}
From sources Lumen can quote: the FDA drug label, guidelines, PubMed abstracts, or what you wrote for this patient. Each number in the handout is tied to one of those quotes.
{{< /faq >}}
{{< faq question="Can patients use Lumen to read their handout?" >}}
No. Lumen is for clinicians and staff. You print the handout or send it through your usual patient channels.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/specialists/patient-education/" "/guides/discharge-summary/" "/tools/document-generation/" "/chat/artifacts/" >}}
