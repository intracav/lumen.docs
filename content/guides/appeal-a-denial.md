---
title: "Appeal an insurance denial"
navTitle: "Appeal a denial"
description: "Draft an appeal that answers a payer's denial reason point by point, using the denial letter, the payer's policy and the facts in your chart."
lead: "Attach the denial letter and the payer's policy. The Prior Authorization Specialist quotes the denial reason, maps each point to the payer's criteria and drafts a rebuttal for you to review."
weight: 2
icon: scale
who: "clinicians and office staff"
keywords: ["AI insurance appeal letter", "appeal insurance denial", "not medically necessary appeal", "MRI denial appeal"]
glance:
  what: "A step-by-step way to draft an insurance appeal in Lumen that answers the payer's stated denial reason."
  who: "Clinicians, nurses and office staff who write appeals after a prior authorization or claim is denied."
  why: "Appeals succeed when they answer the actual denial reason with the payer's own criteria and documented facts. Lumen lines those up for you and shows where each point came from."
  needs: "Any Lumen plan. The denial letter and the payer's coverage policy as files, and the case facts without identifiers. About 15 minutes."
  result: "An appeal packet with the denial reason quoted, a rebuttal for each point and a draft appeal letter as a Word document."
---

The payer has denied a lumbar spine MRI as "not medically necessary". The denial letter gives a reason, and the appeal has to answer that reason, using the payer's own criteria and what's documented in the chart. Lumen's **Prior Authorization Specialist** also handles appeals. It quotes the denial reason from the letter, quotes the payer's criteria from the policy and links each rebuttal point to the facts you give it. Then it drafts the letter. You check it, sign it and send it before the deadline.

## Before you start

- **Plan:** any Lumen plan.
- **The denial letter**, as a PDF or a clear photo. Black out or crop the member ID, claim number, name and date of birth first. Lumen needs the denial reason, not the identifiers.
- **The payer's coverage policy** for the service. Denial letters usually name it. Download it from the payer's website.
- **The clinical timeline:** symptoms and how long they've lasted, the treatment tried and for how long, and exam findings.
- **The appeal deadline**, from the denial letter. Put it in your own calendar. Lumen doesn't track deadlines.
- **Time:** about 15 minutes, plus your review.

A *Specialist* is a Lumen assistant set up for one kind of work. It follows a fixed checklist and saves a result that Lumen checks before you see it.

## How to draft the appeal

{{< steps >}}
{{< step title="Attach the denial letter and the policy" >}}
Open a new chat. Click **+** (**Attach document**) and add both files. Wait until both file chips have finished **Reading…**.
{{< /step >}}
{{< step title="Choose the Prior Authorization Specialist" >}}
Type `@` in the message box and choose **Prior Authorization** from the **Specialists** list.
{{< /step >}}
{{< step title="Ask for an appeal and give the facts" >}}
Type the request and the clinical facts, then press **Send**:

{{< composer text="@Prior Authorization draft an appeal of the attached denial for an MRI of the lumbar spine without contrast. 49-year-old man with left S1 radiculopathy. 8 weeks of pain radiating down the back of the left leg. Completed 6 weeks of physical therapy and scheduled naproxen with no improvement. New weakness of left ankle plantar flexion, 4 out of 5, and a reduced left ankle reflex at the last visit. Use the attached Stonebridge Mutual policy." >}}
{{< /step >}}
{{< step title="Let the Specialist work" >}}
You'll see **Reading document** for each file, then **Looking up ICD-10 codes**, **Looking up CPT procedure codes** and **Checking and saving**. You can close the tab while it works.
{{< /step >}}
{{< step title="Open the appeal packet" >}}
Click the **Prior-authorization packet** card to open it in the side panel. Check that the denial reason is quoted correctly from the letter, then read each rebuttal point.
{{< /step >}}
{{< step title="Add what only you know" >}}
Reply in the same chat with any missing facts. For example:

{{< composer text="PT notes from both months are attached to the appeal as supporting records. Offer a peer-to-peer review. Name the ordering clinician as the treating physiatrist." >}}
{{< /step >}}
{{< step title="Get the letter as a Word document" >}}
Type `Make the appeal letter a Word document.` and press **Send**. Open the document card and click **Download**. Add the identifiers in your own system, sign it and send it through the payer's appeal channel.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="agents-deliverable" alt="An appeal packet in Lumen's side panel with the denial reason quoted and rebuttal points linked to the payer's criteria" caption="An appeal packet. The denial reason is quoted from the letter, and each rebuttal links to a payer criterion." url="lumen.intracav.ai" >}}
{{< chat-demo title="Appeal of an MRI denial" specialist="Prior Authorization" caption="Illustration with a fictional patient, payer and policy." >}}
{{< user attach="stonebridge-denial.pdf, stonebridge-spine-imaging-policy.pdf" >}}Draft an appeal of the attached denial for a lumbar spine MRI. Left S1 radiculopathy, 8 weeks, 6 weeks of PT and naproxen with no improvement, new plantar flexion weakness 4/5 and reduced ankle reflex.{{< /user >}}
{{< lumen thought="11" tools="Document read, ICD-10 codes retrieved, CPT codes retrieved, Saved and checked" sources="2" >}}
**Denial reason (quoted from the letter):** "Documentation does not show a trial of conservative therapy."

**Codes:** **M54.17** Radiculopathy, lumbosacral region · **72148** MRI lumbar spine without contrast

**Rebuttal**

1. **Conservative care.** The policy requires "at least 6 weeks of physician-directed conservative care". **Met**: 6 weeks of physical therapy and scheduled naproxen, with no improvement.
2. **Neurologic deficit.** The policy also allows imaging for "a new or progressive neurologic deficit". **Met**: new plantar flexion weakness, 4/5, and a reduced ankle reflex.
3. **PT records.** **Unknown**: the case doesn't say the therapy notes will be attached. Attach them so the reviewer can confirm point 1.

{{< artifact type="docx" title="Appeal letter, lumbar MRI (draft)" sub="Word document · 2 pages" >}}
{{< verdict >}}Passed its checks. 5 of 5 quotes were found word for word in their sources.{{< /verdict >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check the result

{{< lui-block title="Before you send the appeal" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="The denial reason matches the letter word for word" body="If the letter gives more than one reason, each one has its own rebuttal." >}}
{{< lui-row type="check" title="Each rebuttal names a payer criterion and a chart fact" body="Met items quote what you gave. Unknown items are resolved or removed." >}}
{{< lui-row type="check" title="The codes match the original request" body="Confirm any CPT code with your coder. Lumen checks CPT codes only against a list of common codes." >}}
{{< lui-row type="check" title="Supporting records are attached" body="Therapy notes, imaging orders or visit notes that prove each point." >}}
{{< lui-row type="check" title="It goes out before the deadline on the denial letter" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Answer the reason they gave.** If the denial says conservative care wasn't documented, lead with the dates and type of care. A general argument for the test is weaker.
- **A scanned fax won't read?** Paste the denial paragraph into the chat and say `Use this as the denial reason.`
- **Prepare for a peer-to-peer call.** In the same chat, type `Prepare me for a peer-to-peer call on this denial.` You get talking points from the same criteria.
- **Supporting evidence.** If you want published evidence as well, ask: `Find PubMed evidence for MRI in lumbar radiculopathy with a new motor deficit.` Open each citation before you include it.

## Limits and safety

{{< callout type="safety" title="Review every word before it goes to the payer" >}}
Lumen drafts and checks the packet. It doesn't decide whether care is necessary, and it doesn't promise an outcome. The treating clinician reviews and signs the appeal. Don't enter patient identifiers or anything you're not permitted to share. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Lumen doesn't send appeals or track deadlines.** You submit the appeal yourself.
- **Lumen can't read proprietary criteria** such as InterQual or MCG. If the payer used those, ask the payer for the criteria, or expect those points to stay **Unknown**.
- **A matched quote shows the source says it.** It doesn't prove the source applies to this patient. That judgment is yours.

## FAQ

{{< faq question="Can I appeal without the payer's policy?" >}}
Yes, but the rebuttal will be weaker. Lumen won't write payer criteria from memory, so without a policy each criterion stays **Unknown**. Most payers publish their medical policies online.
{{< /faq >}}
{{< faq question="Is this different from the prior authorization guide?" >}}
It uses the same Specialist. A first request maps the chart to the criteria. An appeal starts from the denial reason and answers it point by point. See [Write a prior authorization request](/guides/prior-auth-in-minutes/).
{{< /faq >}}
{{< faq question="Which plan do I need?" >}}
Any plan, including Free. See [Plans](/plans/).
{{< /faq >}}

## Next steps

{{< related "/guides/prior-auth-in-minutes/" "/skills-and-specialists/specialists/prior-authorization/" "/tools/coding-labs/" "/chat/attachments/" >}}
