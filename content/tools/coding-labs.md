---
title: "Find codes, coverage and lab ranges"
navTitle: "Coding and labs"
description: "Find ICD-10-CM, CPT and HCPCS codes, check NCCI edits, look up Medicare fees and coverage, and check lab reference ranges by asking in chat."
lead: "Describe the diagnosis, procedure or supply in your own words. Lumen finds the code, checks coverage and edits, and cites where each answer came from."
weight: 4
icon: hash
keywords: ["ICD-10 lookup", "CPT code lookup", "HCPCS lookup", "NCCI edits", "Medicare fee schedule", "LCD NCD lookup", "lab reference ranges"]
glance:
  what: "Built-in tools for diagnosis and procedure codes, Medicare coverage and fees, coding edits and lab reference ranges."
  who: "Coders, billing and prior authorization staff, physicians and nurses."
  why: "To find the most specific code and the coverage rules behind it without leaving the conversation."
  needs: "A Lumen account on any plan. About 2 minutes per question."
  result: "Codes with descriptions, coverage criteria or reference ranges, each with its source."
---

Coding questions are rarely one lookup. You need the most specific diagnosis code, the procedure code, whether Medicare covers it, and whether two codes can be billed together. Lumen runs these lookups against public CMS and NLM data while it answers, and shows which ones it ran.

## Before you start

- All the tools on this page work on every plan.
- Have the clinical details that drive specificity: laterality, acuity, cause, and the setting of care.
- For a full prior authorization packet, use the [Prior Authorization](/skills-and-specialists/specialists/prior-authorization/) specialist.

## The tools

| Tool (as shown in Explore) | What it does | When finished, the chip reads |
|---|---|---|
| **Find Diagnosis Code (ICD-10)** | Searches ICD-10-CM for the most specific diagnosis code. | **ICD-10 codes retrieved** |
| **Find Procedure Code (CPT)** | Looks up CPT procedure and service codes. | **CPT codes retrieved** |
| **HCPCS Code Lookup** | Finds HCPCS Level II codes for equipment, supplies and non-physician services. | **HCPCS codes retrieved** |
| NCCI edit check | Checks Medicare National Correct Coding Initiative edits for a pair of codes. | **NCCI edits checked** |
| Medicare fee lookup | Looks up Medicare Physician Fee Schedule pricing for a CPT or HCPCS code. | **Medicare fee retrieved** |
| **CMS Coverage Lookup** | Checks Medicare National and Local Coverage Determinations (NCDs and LCDs). | **CMS coverage checked** |
| **Lab Reference Ranges** | Returns reference intervals for common lab tests. | **Lab ranges retrieved** |

## How to look up a code

{{< steps >}}
{{< step title="Describe it in chat" >}}For example: "ICD-10 and CPT codes for a lumbar MRI without contrast for L5-S1 radiculopathy."{{< /step >}}
{{< step title="Add what drives specificity" >}}If Lumen asks about laterality, episode of care or cause, answer in the chat.{{< /step >}}
{{< step title="Ask the follow-up questions" >}}"Does Medicare cover it, and what documentation does the LCD require?" or "Can these two codes be billed together?"{{< /step >}}
{{< step title="Check the codes" >}}Confirm the code and description in your coding software or code book before you submit.{{< /step >}}
{{< /steps >}}

To browse with examples, open {{< ui-path "Explore" "Built-in tools" >}} and choose **Code & bill**.

## What you'll see

{{< chat-demo title="Lumbar MRI codes" caption="Illustration with a fictional patient. Confirm codes before you bill." >}}
{{< user >}}Codes for a lumbar spine MRI without contrast for L5-S1 radiculopathy after 6 weeks of failed physical therapy?{{< /user >}}
{{< lumen tools="ICD-10 codes retrieved, CPT codes retrieved, CMS coverage checked" sources="3" >}}
- **Diagnosis:** M54.17, radiculopathy, lumbosacral region {{< cite 1 >}}
- **Procedure:** CPT 72148, MRI of the lumbar spinal canal and contents, without contrast {{< cite 2 >}}

Coverage depends on your Medicare contractor's Local Coverage Determination. I found the documentation it asks for, such as the duration and type of conservative treatment {{< cite 3 >}}. Check the LCD for your region before submitting.
{{< /lumen >}}
{{< /chat-demo >}}

## Tips

- **Ask for alternatives.** "What other codes might fit, and what would change the choice?" helps when documentation is borderline.
- **Name the payer.** CMS coverage tools cover Medicare. Commercial payers have their own policies, which Lumen can search for on the web but cannot confirm.
- **Lab ranges vary by lab.** Use the range printed on your own lab's report when it differs.

## Limits and safety

{{< callout type="warning" title="Lumen suggests codes. A person assigns them." >}}
Code sets change every year, and the right code depends on the full documentation. Check every code against your current code book and your organization's coding policies. Lumen isn't a certified coder and doesn't submit claims.
{{< /callout >}}

- Medicare fees and coverage vary by locality and contractor. Confirm with the CMS source cited.
- Reference ranges are general. Interpret results against your laboratory's ranges and the patient's context.

## FAQ

{{< faq question="Which code sets does Lumen cover?" >}}
ICD-10-CM diagnosis codes, CPT procedure codes, HCPCS Level II codes, NCCI edits, the Medicare Physician Fee Schedule, and Medicare NCDs and LCDs.
{{< /faq >}}
{{< faq question="Does Lumen check commercial insurance policies?" >}}
Its coverage tool covers Medicare. For a commercial payer, Lumen can search the payer's public policy on the web, and it says where the information came from.
{{< /faq >}}
{{< faq question="Can I get a whole prior authorization letter?" >}}
Yes. The Prior Authorization specialist looks up the codes and payer criteria, maps them to the chart evidence you give it, and drafts the packet for you to review.
{{< /faq >}}

## Next steps

{{< related "/getting-started/find-a-code/" "/skills-and-specialists/specialists/prior-authorization/" "/tools/calculators/" "/guides/appeal-a-denial/" >}}
