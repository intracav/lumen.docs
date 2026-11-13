---
title: "Check a drug interaction"
navTitle: "Drug interactions"
description: "Ask Lumen whether two or more medications interact. It checks FDA prescribing information and explains the severity, the mechanism and what to do."
lead: "Before you add a medication, ask Lumen if it's safe with what the patient already takes. You get the severity, the reason and the label text it came from."
weight: 4
icon: pill
glance:
  what: "Lumen checks two or more medications against FDA prescribing information and tells you whether they interact, how seriously, and why."
  who: "Nurses, pharmacists, physicians and prescribers on any plan."
  why: "To catch an interaction before an order goes in, with the label text to back it up."
  needs: "A Lumen account (any plan). The drug names, and doses if they matter. About 2 minutes."
  result: "An answer that rates each interaction, explains it, suggests what to do, and cites the drug label."
---

A patient on warfarin is about to start amiodarone. You want to know whether that matters, and what to do about it, before the order goes in. Ask Lumen in plain words. It checks the drugs against FDA prescribing information, rates the interaction, explains the mechanism, and cites the label so you can confirm it.

## Before you start

- **Plan:** any plan, including Free.
- **Have ready:** the names of every drug you want to check. Include the dose and route if they matter, such as "aspirin 325 mg."
- **Leave out identifiers.** The drugs are all Lumen needs.

## How to check an interaction

{{< steps >}}
{{< step title="Open a new chat" >}}
Go to [lumen.intracav.ai](https://lumen.intracav.ai), sign in, and click **New Chat**.
{{< /step >}}
{{< step title="Name the drugs and ask your question" >}}
Type it the way you'd ask a pharmacist. For example:

*"Patient on warfarin 5 mg daily is starting amiodarone for atrial fibrillation. Is there an interaction, and what should we do?"*

You can check more than two drugs at once: *"Check interactions between metoprolol, amiodarone, warfarin and simvastatin."*
{{< /step >}}
{{< step title="Send it" >}}
Press {{< kbd "Enter" >}}. You'll see the tool chip **Checking drug interactions**, then **Interaction check complete**.
{{< /step >}}
{{< step title="Read the rating and the advice" >}}
Lumen rates each interaction as contraindicated, high, moderate or low. It explains why it happens and what to do, such as a dose change or extra monitoring.
{{< /step >}}
{{< step title="Open the label" >}}
Open the sources under the answer to read the label sections Lumen used. Confirm the advice before you act.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="chat-cited-answer" alt="A Lumen answer about warfarin and amiodarone with numbered citations to FDA drug labels" caption="An interaction answer. The numbered chips link each statement to the label text." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Warfarin and amiodarone" caption="Illustration with a fictional patient. Always open the cited label before you act." >}}
{{< user >}}Patient on warfarin 5 mg daily is starting amiodarone for atrial fibrillation. Is there an interaction, and what should we do?{{< /user >}}
{{< lumen tools="Interaction check complete" sources="2" evidence="true" >}}
{{< lui-severity major "High severity" >}}

**Yes. Amiodarone raises the effect of warfarin and increases bleeding risk** {{< cite 1 >}}. Amiodarone slows the liver enzymes that clear warfarin, mainly CYP2C9, so the INR rises {{< cite 1 >}}.

- **Dose:** the amiodarone label advises reducing the warfarin dose by one-third to one-half when amiodarone starts {{< cite 1 >}}.
- **Monitoring:** check the INR closely while amiodarone is started, often weekly at first {{< cite 2 >}}.
- **Duration:** amiodarone leaves the body slowly, so the effect can last for weeks to months after it stops {{< cite 1 >}}.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Tips

- **Name every drug.** Lumen checks the ones you list. It doesn't know the patient's full medication list unless you give it.
- **Ask for alternatives in the same message.** *"Is there a safer pain option for a patient on apixaban?"*
- **Ask about timing.** *"How long after stopping clarithromycin is it safe to restart simvastatin?"*
- **Use a specialist for a full review.** For a long medication list, the **Medication Review** specialist checks interactions, renal dosing and duplicates in one pass. See [Specialists](/skills-and-specialists/specialists/).

## Limits and safety

- Lumen checks the drugs against **FDA prescribing information**. A label may not list every interaction, and it doesn't cover supplements or foods well.
- The rating is a guide. It doesn't know the patient's kidney or liver function, age or other conditions unless you tell it.
- Lumen doesn't check your organization's formulary unless your team has added it as a document or a Knowledge Pack.

{{< callout type="safety" title="Lumen supports your judgment. It doesn't replace a pharmacist." >}}
Open the cited label sections, check the full medication list, and follow your organization's policy. When in doubt, talk to your pharmacist.
{{< /callout >}}

## FAQ

{{< faq question="Where does the interaction data come from?" >}}
From FDA prescribing information: the drug interactions, contraindications and warnings sections of each drug's label. Drug names are matched with RxNorm, the US standard drug vocabulary, so brand and generic names both work.
{{< /faq >}}
{{< faq question="How many drugs can I check at once?" >}}
You can list several drugs in one message. Lumen checks the pairs and reports each interaction it finds.
{{< /faq >}}
{{< faq question="Does Lumen know what my patient is already taking?" >}}
No. Lumen only knows what you tell it in the chat or attach to it.
{{< /faq >}}

## Next steps

{{< related "/tools/medications/" "/chat/sources/" "/getting-started/run-a-calculator/" "/skills-and-specialists/specialists/medication-review/" >}}
