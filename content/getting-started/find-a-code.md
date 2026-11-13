---
title: "Find a diagnosis or procedure code"
navTitle: "Find a code"
description: "Describe a diagnosis or procedure in plain words and Lumen finds the ICD-10-CM, CPT or HCPCS code, with notes on specificity and code pairs."
lead: "You know the diagnosis. You need the code. Describe it in your own words and Lumen looks it up, then points out what would make it more specific."
weight: 5
icon: hash
glance:
  what: "Lumen looks up ICD-10-CM diagnosis codes, CPT procedure codes and HCPCS codes from a plain-language description."
  who: "Coders, clinical documentation specialists, physicians, advanced practice providers and billing staff, on any plan."
  why: "To find the right code faster than searching a code book, and to see what detail would make it more specific."
  needs: "A Lumen account (any plan). About 2 minutes."
  result: "The best-matching code with its official description, related codes to consider, and any sequencing notes."
---

The note says "acute on chronic systolic heart failure" and you need the code. Instead of paging through a code book, describe the diagnosis to Lumen. It searches the official ICD-10-CM code set, returns billable codes, and tells you what documentation would change the choice.

## Before you start

- **Plan:** any plan, including Free.
- **Have ready:** the diagnosis or procedure as it's documented. Add the detail that affects coding, such as acuity, type, laterality, encounter and related conditions.
- **Leave out identifiers.** You don't need patient details to look up a code.

## How to find a code

{{< steps >}}
{{< step title="Open a new chat" >}}
Go to [lumen.intracav.ai](https://lumen.intracav.ai), sign in, and click **New Chat**.
{{< /step >}}
{{< step title="Describe the diagnosis or procedure" >}}
Type it as it's documented. For example:

- *"ICD-10 code for acute on chronic systolic heart failure."*
- *"Type 2 diabetes with diabetic chronic kidney disease, stage 3a."*
- *"CPT code for laparoscopic cholecystectomy."*
{{< /step >}}
{{< step title="Send it" >}}
Press {{< kbd "Enter" >}}. You'll see **Looking up ICD-10 codes** or **Looking up CPT procedure codes**, then **ICD-10 codes retrieved** or **CPT codes retrieved**.
{{< /step >}}
{{< step title="Read the code and the notes" >}}
Lumen gives the best match with its official description, plus related codes and any "code also" or sequencing notes that apply.
{{< /step >}}
{{< step title="Confirm against your source" >}}
Check the code in your encoder or the official code set before you submit it.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Heart failure code" caption="Illustration. Always confirm codes against the official code set and your organization's coding policy." >}}
{{< user >}}ICD-10 code for acute on chronic systolic heart failure. The patient also has hypertension.{{< /user >}}
{{< lumen tools="ICD-10 codes retrieved" sources="1" >}}
The code for the heart failure is **I50.23**, *Acute on chronic systolic (congestive) heart failure* {{< cite 1 >}}.

Because the patient also has hypertension, ICD-10-CM presumes a link between the two. Code **I11.0**, *Hypertensive heart disease with heart failure*, first, then I50.23 to show the type of heart failure, unless the provider documents that the heart failure has another cause {{< cite 1 >}}. If the patient also has chronic kidney disease, a combination code from category I13 applies instead.
{{< /lumen >}}
{{< /chat-demo >}}

## Code sets Lumen can look up

| Code set | Used for | Example question |
|---|---|---|
| **ICD-10-CM** | Diagnoses and conditions | "Code for community-acquired pneumonia, unspecified organism" |
| **CPT** | Physician procedures and services | "CPT for ultrasound-guided PICC placement, age 5 or older" |
| **HCPCS Level II** | Supplies, equipment and drugs | "HCPCS code for a walker" |

After you have a code, you can keep going in the same chat:

- **Code pairs:** "Can 36573 be billed with 76937 on the same day?" checks Medicare's NCCI edits, which say which codes can be billed together and which need a modifier.
- **Coverage:** "Does Medicare cover this?" searches CMS coverage policies.
- **Payment:** "What does Medicare pay for 47562?" looks up the Physician Fee Schedule.

See [Coding tools](/tools/coding-labs/) for more.

## Tips

- **Give the details coders ask for.** Acute or chronic, type, laterality, initial or later encounter, and any linked condition.
- **Ask why.** "Why I11.0 first?" gets the guideline reason.
- **Paste the documentation.** For a complex case, paste the de-identified assessment and ask "What codes does this support?"

## Limits and safety

- ICD-10-CM lookups return **billable codes** from the official code set. Category codes that can't be billed aren't returned.
- CPT is owned by the AMA and has no free public database, so Lumen's CPT lookup covers **commonly used codes**. If it can't find a code, check your licensed CPT source.
- Lumen applies published coding guidelines, but it doesn't know your payer's rules or your organization's coding policy.
- A code must be supported by the provider's documentation. Lumen can suggest a code. It can't make documentation say something it doesn't.

{{< callout type="important" title="You're responsible for the code you submit" >}}
Confirm every code against the official code set and your organization's coding policy before you submit a claim.
{{< /callout >}}

## FAQ

{{< faq question="Which version of ICD-10-CM does Lumen use?" >}}
Lumen searches the current ICD-10-CM code set through the National Library of Medicine's Clinical Tables service, and links to the official code detail.
{{< /faq >}}
{{< faq question="Can Lumen code a whole note?" >}}
Yes. Paste or attach the de-identified note and ask which diagnoses and procedures it supports. Review each suggestion against the documentation.
{{< /faq >}}
{{< faq question="Does it check whether two codes can be billed together?" >}}
Yes. Give Lumen both CPT or HCPCS codes and it checks Medicare's NCCI edits for that pair.
{{< /faq >}}

## Next steps

{{< related "/tools/coding-labs/" "/getting-started/draft-a-note/" "/chat/sources/" >}}
