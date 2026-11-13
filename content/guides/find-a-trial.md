---
title: "Screen a patient for clinical trials"
navTitle: "Find a trial"
description: "Screen a de-identified patient profile against recruiting trials. Lumen quotes each criterion and marks it met, blocked or unknown."
lead: "Give the Trial Matcher Specialist a de-identified profile. It searches ClinicalTrials.gov, quotes every eligibility criterion and shows which facts decide each one."
weight: 21
icon: flask
tier: pro
who: "oncologists, research nurses and trial coordinators"
keywords: ["AI clinical trial matching", "find clinical trials for patient", "ClinicalTrials.gov search AI", "trial eligibility screening"]
glance:
  what: "A step-by-step way to screen a patient's profile against recruiting clinical trials with Lumen's Trial Matcher Specialist."
  who: "Physicians, research nurses and trial coordinators looking for trial options for a patient."
  why: "Reading every eligibility line of every candidate trial takes hours. Lumen does the first pass, quotes each criterion from the registry and shows which facts are still missing."
  needs: "Pro plan or higher (searching ClinicalTrials.gov needs Pro). A de-identified patient profile. About 10 minutes."
  result: "A trial screen: for each trial, every criterion quoted and marked met, not met or unknown, plus registry status, sites and contacts copied from ClinicalTrials.gov."
---

A 61-year-old with metastatic pancreatic cancer has progressed after first-line FOLFIRINOX, and you want to know whether a trial is a realistic next step. Lumen's **Trial Matcher Specialist** searches ClinicalTrials.gov, the public US registry of clinical studies. It reads each candidate trial's eligibility criteria line by line and checks each line against the facts you gave. For every trial you get a plain summary: no blocker found, needs information, or a blocker found. The study site decides eligibility. Lumen gives you the first-pass screen and the list of what to confirm.

## Before you start

- **Plan:** Pro or higher. Searching ClinicalTrials.gov is a Pro feature. See [Plans](/plans/).
- **A de-identified profile:** an age or age range, sex, diagnosis and stage, relevant biomarkers, every prior line of therapy, performance status (ECOG) and key labs. Leave out names, record numbers, dates of birth and exact dates of care.
- **Geography.** A rough idea of how far the patient can travel.
- **Time:** about 10 minutes.

A *Specialist* is a Lumen assistant set up for one kind of work. It follows a fixed checklist and saves a result that Lumen checks before you see it.

## How to screen for trials

{{< steps >}}
{{< step title="Choose the Trial Matcher Specialist" >}}
Open a new chat. Type `@` in the message box and choose **Trial Matcher** from the **Specialists** list.
{{< /step >}}
{{< step title="Give the profile and what you're looking for" >}}
Type the profile as a list of facts, then press **Send**:

{{< composer text="@Trial Matcher screen recruiting phase 2 and 3 trials for this profile. Age 61, male. Metastatic pancreatic adenocarcinoma, liver metastases. Progressed after 6 months of first-line FOLFIRINOX. ECOG 1. No prior immunotherapy. Germline BRCA testing negative. Bilirubin and creatinine within normal limits. Can travel within the Pacific Northwest." >}}
{{< /step >}}
{{< step title="Let the Specialist search and screen" >}}
You'll see **Searching ClinicalTrials.gov** several times as Lumen searches by condition, setting and treatment, then **Checking and saving**. The screen can take several minutes. You can close the tab and come back.
{{< /step >}}
{{< step title="Open the trial screen" >}}
Click the **Trial screen** card to open it in the side panel. Each trial shows its summary, registry status, phase, age limits, contacts and sites. Below that is every eligibility line with its status.
{{< /step >}}
{{< step title="Fill in the unknowns" >}}
Reply with facts that settle the **Unknown** lines. For example:

{{< composer text="Measurable disease on the last CT per RECIST. ANC 2.1, platelets 180. No brain metastases. Re-screen the top three." >}}
{{< /step >}}
{{< step title="Contact the sites" >}}
Use the **Central contact** and **Site** details in the screen to call or email the study teams. Contacting a site is your decision. Lumen doesn't reach out on its own.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="agents-deliverable" alt="A trial screen in Lumen's side panel listing trials with registry status and criteria marked met, not met or unknown" caption="A trial screen. Status, sites and contacts come from the registry. Criteria are quoted from each trial." url="lumen.intracav.ai" >}}
{{< chat-demo title="Second-line pancreatic cancer" specialist="Trial Matcher" caption="Illustration with a fictional patient and a fictional trial." >}}
{{< user >}}Screen recruiting phase 2 and 3 trials for this profile. Age 61, metastatic pancreatic adenocarcinoma, progressed after FOLFIRINOX, ECOG 1…{{< /user >}}
{{< lumen thought="14" tools="Searched ClinicalTrials.gov, Saved and checked" sources="6" >}}
I screened 6 recruiting trials. Here's the first one.

**Phase 2 study in previously treated metastatic pancreatic adenocarcinoma.** Registry status: Recruiting.

**Summary:** No blocker found in the registry criteria. 3 items to confirm.

- "Histologically or cytologically confirmed pancreatic adenocarcinoma." **Met**: metastatic pancreatic adenocarcinoma.
- "Disease progression after one prior line of fluoropyrimidine-based therapy." **Met**: progressed after FOLFIRINOX.
- "ECOG performance status 0 or 1." **Met**: ECOG 1.
- "Measurable disease per RECIST 1.1." **Unknown**: not in the profile.
- "Adequate bone marrow function." **Unknown**: no blood counts given.
- "Known untreated brain metastases." Exclusion, **Unknown**.

Registry details, sites and contacts are in the trial screen.

{{< verdict >}}Passed its checks. 41 of 41 criteria quotes were found in the trials' own eligibility text.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

The summary uses three phrases only: **No blocker found in the registry criteria**, **Needs information** or **A blocker found**. Lumen never says a patient "qualifies" or is "eligible". Only the study team can decide that.

## Check the result

{{< lui-block title="Before you raise a trial with the patient" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Every criterion quote matches the trial's own text" body="Each quote links to the trial on ClinicalTrials.gov. Open it." >}}
{{< lui-row type="check" title="Each Met line rests on a fact you actually gave" >}}
{{< lui-row type="check" title="The Unknown lines are on your list to check" body="Labs, imaging and records you'll need before formal screening." >}}
{{< lui-row type="check" title="The registry status is current" body="Registry listings can lag. Confirm with the site that the trial is still enrolling." >}}
{{< lui-row type="check" title="The sites are within reach for this patient" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Give ranges, not birthdays.** An age range such as "60 to 64" works, and Lumen keeps it as a range.
- **Name prior therapies exactly.** Many trials set rules about prior lines and specific drugs.
- **Too few results?** Ask Lumen to include phase 1/2 studies or trials that enroll by biomarker across tumor types.
- **Too many?** Add exclusions you already know, such as brain metastases or prior immunotherapy, and ask it to re-screen.

## Limits and safety

{{< callout type="safety" title="A screen is not enrollment" >}}
Lumen's screen is a first pass against registry text. Only the trial's investigators decide eligibility, after formal screening and consent. Registry listings can be out of date. Don't promise a patient a place in a trial based on this screen. Don't enter patient identifiers. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Lumen only sees what's on ClinicalTrials.gov.** Trials registered elsewhere, or sites not listed, won't appear.
- **Sites, contacts and status are copied from the registry.** Lumen doesn't type them, and it can't confirm them.
- **Lumen doesn't contact sites.** You do.

## FAQ

{{< faq question="Why do I need Pro?" >}}
Searching ClinicalTrials.gov is one of the tools included with Pro and higher plans. On Free, Lumen can still discuss trials in general, but it can't run the registry search.
{{< /faq >}}
{{< faq question="Does Lumen tell me whether the patient is eligible?" >}}
No. It tells you which registry criteria the profile meets, which it fails and which it can't decide. The study team makes the eligibility decision.
{{< /faq >}}
{{< faq question="Can I use this outside oncology?" >}}
Yes. The Specialist works for any condition listed on ClinicalTrials.gov. Give it the facts that trials in that field usually screen on.
{{< /faq >}}

## Next steps

{{< related "/skills-and-specialists/specialists/trial-matcher/" "/guides/literature-review/" "/tools/literature-research/" "/plans/" >}}
