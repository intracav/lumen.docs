---
title: "Screen a patient for clinical trials"
navTitle: "Trial Matcher"
description: "The Trial Matcher specialist searches ClinicalTrials.gov and screens each recruiting trial criterion by criterion against quoted patient facts."
lead: "Describe the patient's diagnosis, stage, prior therapy and location. Trial Matcher finds recruiting trials and checks each eligibility criterion against what you told it, quoting both sides."
weight: 4
icon: clipboard-check
tier: pro
who: "oncologists, research coordinators, clinicians"
keywords: ["AI clinical trial matching", "clinical trial finder AI", "ClinicalTrials.gov search AI", "patient trial eligibility screening", "oncology trial matching"]
glance:
  what: "Trial Matcher is a Lumen specialist that searches ClinicalTrials.gov for recruiting trials and screens each one against your patient, criterion by criterion, with every criterion and patient fact quoted."
  who: "Oncologists, research nurses and coordinators, and any clinician looking for trial options for a patient."
  why: "To turn hours of reading eligibility criteria into a shortlist that shows exactly what blocks each trial and what information is still needed."
  needs: "Lumen Pro or above (ClinicalTrials.gov search is a Pro tool). The patient's diagnosis, stage, prior therapy and location. About 5 minutes."
  result: "A trial screen: each trial's status, sites and contacts from the registry, and each criterion marked met, not met or unknown."
---

Eligibility criteria are long and precise, and one missed exclusion wastes a referral. **Trial Matcher** searches ClinicalTrials.gov for recruiting trials and reads each trial's own eligibility text. It quotes every criterion and marks it met, not met or unknown against facts quoted from your description. Each trial then gets a summary computed by rule: **blocked**, **needs information**, or **no blocker found**. It never says a patient "qualifies"; the trial site decides that.

## Before you start

- **Plan:** Pro or above. On Free, Lumen can't search ClinicalTrials.gov.
- **Have ready:** diagnosis and stage, biomarkers, prior lines of therapy, performance status if known, key lab values, and the patient's city or region.
- **Optional:** attach a recent note or pathology report.
- Use fictional or de-identified details unless your organization permits patient information in Lumen.

## How to screen for trials

{{< steps >}}
{{< step title="Open Trial Matcher" >}}Click **Explore**, choose **Specialists**, click **Trial Matcher**, then **Open Trial Matcher**. Or type `@Trial Matcher` in any chat.{{< /step >}}
{{< step title="Pick the task" >}}Under **Start with**, click **Screen trials for a patient**.{{< /step >}}
{{< step title="Describe the patient" >}}Under **Diagnosis, stage, prior therapy, location**, enter for example "58F, metastatic ER-positive HER2-negative breast cancer, progressed after CDK4/6 inhibitor plus letrozole and then fulvestrant, ECOG 1, Columbus, Ohio".{{< /step >}}
{{< step title="Send and review" >}}Click **Continue to attach files** if you have records, then send. Open the trial screen when the task strip says **Done**.{{< /step >}}
{{< step title="Follow up on unknowns" >}}For trials marked needs information, gather the missing facts, add them in the chat, and ask Lumen to rescreen.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Breast cancer trial screen" specialist="Trial Matcher" caption="Illustration with a fictional patient. Trial details come from ClinicalTrials.gov at the time of the search; the site confirms eligibility." >}}
{{< user >}}58F, metastatic ER+/HER2− breast cancer, progressed on CDK4/6 inhibitor plus letrozole, then fulvestrant. ECOG 1. Columbus, OH.{{< /user >}}
{{< lumen tools="Searched ClinicalTrials.gov, Saved and checked" sources="6" >}}
{{< task-strip >}}
{{< task state="done" label="Searched ClinicalTrials.gov for recruiting trials" >}}
{{< task state="done" label="Quoted each trial's eligibility criteria" >}}
{{< task state="done" label="Checked each criterion against the patient facts" >}}
{{< task state="done" label="Saved the screen and checked its quotes" >}}
{{< /task-strip >}}

| Trial | Summary | Why |
|---|---|---|
| Trial A {{< cite 1 >}} | No blocker found | All decided criteria met; 2 unknown (LVEF, prior chemotherapy count) |
| Trial B {{< cite 2 >}} | Needs information | "ESR1 mutation detected" {{< cite 2 >}}: not stated |
| Trial C {{< cite 3 >}} | Blocked | "No more than one prior endocrine therapy in the metastatic setting" {{< cite 3 >}}: patient had two |

{{< verdict >}}Passed its checks: every criterion is quoted from that trial's own eligibility text.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}

## Tips

- The more specific the facts, the fewer unknowns. Biomarkers and prior lines of therapy matter most.
- Each trial's sites and contacts are copied from the registry. Ask "Which of these have a site within 100 miles of Columbus?"
- For a broader question, such as "What phase 3 trials are open for EGFR-mutated lung cancer?", an ordinary chat can search ClinicalTrials.gov too.

## Limits and safety

- Trial Matcher screens against what you tell it. A trial with **no blocker found** may still exclude the patient on a fact you didn't give.
- Registry entries can be out of date. Confirm status and criteria with the trial site.
- It never says "eligible", "qualifies" or "good match". Enrollment decisions belong to the trial team.

{{< callout type="safety" title="The site decides eligibility" >}}
Use the screen to choose which trials to ask about. Contact the site, confirm the current protocol, and discuss options with the patient's care team.
{{< /callout >}}

## FAQ

{{< faq question="Where does it search?" >}}
ClinicalTrials.gov, the U.S. National Library of Medicine's registry. It can also search PubMed for published results from a trial.
{{< /faq >}}
{{< faq question="Why does it say \"no blocker found\" instead of \"eligible\"?" >}}
Because it can only check the facts it has. "No blocker found" is honest about that. The trial team makes the eligibility decision.
{{< /faq >}}
{{< faq question="Can I use it on the Free plan?" >}}
The specialist opens on any plan, but ClinicalTrials.gov search needs Pro or above. See [Plans](/plans/).
{{< /faq >}}

## Next steps

{{< related "/guides/find-a-trial/" "/tools/literature-research/" "/skills-and-specialists/specialists/clinical-research/" "/skills-and-specialists/verified-results/" >}}
