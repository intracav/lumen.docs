---
title: "Draft a discharge summary"
navTitle: "Discharge summary"
description: "Turn rough hospital-course notes into a structured discharge summary: medication changes computed, pending results listed, gaps flagged."
lead: "Paste or attach your notes. The Care Transitions Specialist drafts the summary from what they say, flags anything they don't say, and leaves the signing to you."
weight: 3
icon: file-text
who: "hospitalists, residents and nurse practitioners"
keywords: ["AI discharge summary generator", "discharge summary AI", "hospital discharge documentation AI"]
glance:
  what: "A step-by-step way to turn your hospital-course notes into a discharge summary draft with Lumen's Care Transitions Specialist."
  who: "Clinicians who write discharge summaries, transfer notes or handoffs."
  why: "The next clinician needs to know what happened, what changed and what's still pending. Lumen structures your notes, works out every medication change and lists what's missing, so nothing is quietly left out."
  needs: "Any Lumen plan. Your progress notes or a rough course summary, the admission and discharge medication lists, and pending results, without identifiers. About 5 to 10 minutes."
  result: "A transition document with completeness measured, each medication marked new, changed, stopped or continued, and pending results listed, ready for you to edit and sign."
---

It's late in the day, and a patient admitted three days ago with decompensated heart failure is ready to go home. You have rough notes, two medication lists and an echo still waiting for its final read. Lumen's **Care Transitions Specialist** turns that material into a structured discharge summary. It works out each medication change by comparing the admission and discharge lists, and it lists the results still pending. Anything your notes don't say is marked **Not in source**, so you fill it in rather than finding it invented.

## Before you start

- **Plan:** any Lumen plan.
- **Your notes.** Progress notes, a dictated course or bullet fragments all work. Paste them, or attach them as files.
- **Both medication lists:** what the patient took at admission and what they'll take at discharge. Give the reason for each change if you know it.
- **Pending results and follow-up plans**, with who owns each one.
- **No identifiers.** Leave out the name, record number, date of birth and room number.
- **Time:** about 5 to 10 minutes, plus your review.

A *Specialist* is a Lumen assistant set up for one kind of work. It follows a fixed checklist and saves a result that Lumen checks before you see it.

## How to draft the summary

{{< steps >}}
{{< step title="Choose the Care Transitions Specialist" >}}
Open a new chat. Type `@` in the message box and choose **Care Transitions** from the **Specialists** list. If your notes are in files, click **+** (**Attach document**) and add them now.
{{< /step >}}
{{< step title="Paste your notes and ask for a discharge summary" >}}
Paste the material as it is, then press **Send**:

{{< composer text="@Care Transitions write a discharge summary from these notes. 71-year-old man, admitted with acute decompensated heart failure with reduced ejection fraction, EF 30%. 3-day stay. Presented with 5 kg weight gain, orthopnea and leg edema. IV furosemide 40 mg twice daily for 2 days, net negative 4.2 L, then oral. Creatinine peaked at 1.6, back to baseline 1.2. Potassium 4.1 at discharge. Discharge weight 82 kg. ADMISSION MEDS: furosemide 40 mg daily, metoprolol succinate 50 mg daily, lisinopril 10 mg daily. DISCHARGE MEDS: torsemide 20 mg daily, metoprolol succinate 50 mg daily, lisinopril 10 mg daily, dapagliflozin 10 mg daily. Lisinopril held on day 1 for systolic BP in the 90s, resumed at discharge. Torsemide replaces furosemide. Dapagliflozin started for HFrEF. Pending: final echo read, owner is the inpatient team. Follow-up: heart failure clinic in 7 days, basic metabolic panel in 1 week, daily weights, 2 g sodium diet. Discharged home with daughter." >}}
{{< /step >}}
{{< step title="Let the Specialist work" >}}
You'll see chips such as **Looking up medication in RxNorm** and **Checking and saving**. You can close the tab while it works.
{{< /step >}}
{{< step title="Open the transition document" >}}
Click the **Transition document** card to open it in the side panel. Read the completeness measure first, then the medication table, then the pending results.
{{< /step >}}
{{< step title="Fill the gaps and edit" >}}
Reply with anything marked **Not in source**, and any edits:

{{< composer text="Discharge BP 112/68. Alert and oriented, at baseline cognition. Goals of care: full treatment, discussed with patient and daughter. Daughter taught daily weights and has the clinic number. Make the patient instructions a bulleted list." >}}

Lumen saves a new version and checks it again.
{{< /step >}}
{{< step title="Copy it into your record" >}}
Type `Give me the final summary as plain text I can paste.` Copy it into your EHR, then review and sign it there. If it has to travel as a file, ask for `a PDF` instead, open the card and click **Download**.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="agents-deliverable" alt="A transition document in Lumen's side panel, showing completeness, a medication table and pending results" caption="A transition document. Each medication is compared across the admission and discharge lists." url="lumen.intracav.ai" >}}
{{< chat-demo title="Heart failure discharge" specialist="Care Transitions" caption="Illustration with a fictional patient." >}}
{{< user >}}Write a discharge summary from these notes. 71-year-old man, acute decompensated HFrEF, EF 30%, 3-day stay…{{< /user >}}
{{< lumen thought="10" tools="Medication data retrieved, Saved and checked" >}}
**Completeness:** 10 of 13 required elements found in your notes. **Not in source:** discharge condition, cognitive status, goals of care and preferences.

**Medications**

| Medicine | Status | Reason |
|---|---|---|
| Torsemide 20 mg daily | New | Replaces furosemide (as written in your notes) |
| Furosemide 40 mg daily | Stopped | Replaced by torsemide |
| Dapagliflozin 10 mg daily | New | Started for HFrEF |
| Lisinopril 10 mg daily | Continued | Held day 1 for systolic BP in the 90s, resumed |
| Metoprolol succinate 50 mg daily | Continued | |

**Pending at discharge:** final echo read. Owner: inpatient team.

**Follow-up:** heart failure clinic in 7 days. Basic metabolic panel in 1 week.

{{< verdict >}}Passed its checks. 18 of 18 quotes were found word for word in your notes.{{< /verdict >}}
{{< follow-ups "Make the patient instructions a bulleted list|Shorten the hospital course to one paragraph|Write a patient handout for daily weights" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

The draft covers the reason for admission, significant findings, treatment, condition at discharge, instructions for the patient and family, disposition, follow-up, goals of care, the problem list, test results, cognitive status and the discharging clinician's contact. Anything your notes don't give stays **Not in source** until you supply it.

## Check the result

{{< lui-block title="Before you sign" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Every Not in source item is filled or deliberately left out" >}}
{{< lui-row type="check" title="Each medication change has the right status and reason" body="New, Changed, Stopped or Continued, with the reason from your notes. Where the reason isn't stated, add it." >}}
{{< lui-row type="check" title="Doses match the discharge orders" >}}
{{< lui-row type="check" title="Every pending result has an owner" body="The most dangerous summary is the one that forgets a pending result." >}}
{{< lui-row type="check" title="Follow-up times match what was arranged" >}}
{{< lui-row type="check" title="You've read it in full and signed it in your record system" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Give the reason for each change.** "Torsemide replaces furosemide" tells the next clinician what changed. The reason tells them why. Lumen writes "reason not stated in notes" rather than inventing one.
- **Messy input is fine.** Bullet fragments and dictated text work. Lumen structures what's there.
- **Other formats.** Ask the same Specialist for a transfer note, an I-PASS handoff or an SBAR.
- **Prefer a quicker draft?** Type `/` and choose the **Discharge Summary** skill. You get a draft in chat without the checked document.

## Limits and safety

{{< callout type="safety" title="Your summary, your signature" >}}
Lumen drafts from your notes and checks that its quotes match them. It doesn't know anything you didn't give it, and it doesn't sign or attest. Check every medication, dose and pending result before it enters the record. Don't enter patient identifiers. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Lumen never fills in values your notes don't give**, such as vital signs, labs, ejection fraction or room numbers.
- **Lumen doesn't write to your EHR.** You paste and sign the summary in your own system.
- **Passed its checks** means the quotes and computed fields match your notes. It doesn't mean the clinical content is right.

## FAQ

{{< faq question="Can I attach notes instead of pasting them?" >}}
Yes. Click **+** (**Attach document**) and add the files. The Specialist reads every attached note in full before it drafts.
{{< /faq >}}
{{< faq question="What does completeness measure?" >}}
How many of the standard discharge summary elements your notes support, such as the reason for admission, condition at discharge, instructions and follow-up. Lumen computes it. The Specialist doesn't estimate it.
{{< /faq >}}
{{< faq question="Can it write the patient's version too?" >}}
Yes, with a different Specialist. See [Create a patient handout](/guides/patient-handout/).
{{< /faq >}}

## Next steps

{{< related "/guides/med-reconciliation/" "/guides/patient-handout/" "/skills-and-specialists/specialists/" "/tools/document-generation/" >}}
