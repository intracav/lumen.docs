---
title: "Write a prior authorization request"
navTitle: "Prior authorization"
description: "Draft a prior authorization request with Lumen: codes looked up, the payer's criteria quoted and mapped to the chart, and a letter you review and send."
lead: "Hand the case and the payer's policy to the Prior Authorization Specialist. You get a checked packet and a draft letter to review, sign and send yourself."
weight: 1
icon: file-check
who: "clinicians and office staff"
keywords: ["AI prior authorization letter", "prior auth AI", "medical necessity letter AI", "CGM prior authorization"]
glance:
  what: "A step-by-step way to draft a prior authorization request in Lumen, using the payer's own coverage criteria."
  who: "Clinicians, nurses and office staff who prepare prior authorization requests."
  why: "The slow part of a prior auth is finding the codes and matching the chart to the payer's criteria. Lumen does that groundwork and shows its sources, so you spend your time reviewing."
  needs: "Any Lumen plan. The payer's coverage policy as a PDF, and the case details without patient identifiers. About 10 minutes."
  result: "A prior-authorization packet that lists each payer criterion as met, not met or unknown, plus a draft letter as a Word document."
---

A patient needs a continuous glucose monitor, and the payer wants a prior authorization first. The medicine is settled. What takes the time is finding the right codes, reading the payer's policy and showing, criterion by criterion, where the chart meets it. Lumen's **Prior Authorization Specialist** does that groundwork. It looks up each code, quotes the payer's criteria, matches them to the facts you give it, and drafts the letter. You review it, sign it and send it.

## Before you start

- **Plan:** any Lumen plan. Sign in at [lumen.intracav.ai](https://lumen.intracav.ai).
- **The payer's coverage policy.** Download the payer's medical policy for the service as a PDF. Lumen argues against the criteria it can read. Without the policy, every criterion stays **Unknown**.
- **The case facts.** You'll need the diagnosis, the requested device or service, the treatment history and the relevant results. Leave out names, record numbers, dates of birth and member IDs. The letter needs clinical facts, not identifiers.
- **Time:** about 10 minutes, plus your review.

A *Specialist* is a Lumen assistant set up for one kind of work. It follows a fixed checklist, uses specific tools and saves a result that Lumen checks before you see it.

## How to draft the request

{{< steps >}}
{{< step title="Start a chat and attach the payer's policy" >}}
Open a new chat. Click **+** (**Attach document**) next to the message box and choose the policy PDF. Wait until the file chip above the message box stops showing **Uploading…** or **Reading…**.
{{< /step >}}
{{< step title="Choose the Prior Authorization Specialist" >}}
Type `@` in the message box. The **Specialists** list opens. Choose **Prior Authorization**.

{{< composer menu="specialists" text="@Prior Authorization" items="Prior Authorization|Prior-auth requests, denial appeals, and peer-to-peer prep;Medication Review|Reconciliation, interaction screening, and deprescribing review;Care Transitions|Discharge summaries, handoffs, and post-acute follow-up plans" >}}
{{< /step >}}
{{< step title="Describe the request" >}}
Type the case the way you'd present it to a colleague, then press **Send**. For example:

{{< composer text="@Prior Authorization prepare a prior authorization for a continuous glucose monitor. 58-year-old woman with type 2 diabetes with hyperglycemia, on basal-bolus insulin: glargine nightly plus lispro with meals, 4 injections a day. A1c 8.9% despite reported adherence. Checks fingersticks 4 times a day. One severe hypoglycemic episode in the past 6 months that needed help from another person. Seen in clinic 3 weeks ago to review diabetes control. Payer is Larkspur Health Plan, commercial. Use the attached policy." >}}
{{< /step >}}
{{< step title="Watch the work" >}}
The Specialist shows each step as it runs. You'll see chips such as **Looking up ICD-10 codes**, **Looking up HCPCS codes**, **Reading document** and **Checking and saving**. When a chip turns to **ICD-10 codes retrieved** or **Saved and checked**, that step is done.

The work runs on Lumen's servers. You can close the tab, and the result is there when you come back.
{{< /step >}}
{{< step title="Open the packet and read it" >}}
Click the **Prior-authorization packet** card in the chat. It opens in the side panel. Read the status at the top, then the criteria table, then the letter. The next two sections show what to look for.
{{< /step >}}
{{< step title="Fill the gaps in the same chat" >}}
Reply with anything the packet marks **Unknown** or flags for you. For example:

{{< composer text="Add: completed diabetes self-management education in January. The hypoglycemic episode was documented in an ED visit note. Ordering clinician is her endocrinologist. Shorten the opening paragraph to two sentences." >}}

Lumen saves a new version and checks it again. The header shows **Version 2 of 2**.
{{< /step >}}
{{< step title="Get the letter as a Word document" >}}
Type `Make the letter a Word document.` and press **Send**. A document card appears. Click it to open it in the side panel, then click **Download**. Add the patient's identifiers and member details in your own system, sign it and submit it through the payer's portal or fax.
{{< /step >}}
{{< /steps >}}

## What you'll get

The packet has three parts: the codes, the payer's criteria with a status for each, and a draft letter that uses only facts from the packet.

{{< screenshot src="agents-deliverable" alt="A prior-authorization packet in Lumen's side panel, showing codes, criteria with statuses and a draft letter" caption="A prior-authorization packet. Each criterion is quoted from the payer's policy and marked met, not met or unknown." url="lumen.intracav.ai" >}}
{{< chat-demo title="Prior authorization for a CGM" specialist="Prior Authorization" caption="Illustration with a fictional patient, payer and policy." >}}
{{< user attach="larkspur-cgm-policy.pdf" >}}Prepare a prior authorization for a continuous glucose monitor. 58-year-old woman, type 2 diabetes with hyperglycemia, basal-bolus insulin 4 injections a day, A1c 8.9%, one severe hypoglycemic episode in 6 months.{{< /user >}}
{{< lumen thought="9" tools="Document read, ICD-10 codes retrieved, HCPCS codes retrieved, Saved and checked" sources="2" >}}
**Codes (looked up)**

- **E11.65** Type 2 diabetes mellitus with hyperglycemia
- **Z79.4** Long term (current) use of insulin
- **E2103** Non-adjunctive, non-implanted continuous glucose monitor or receiver
- **A4239** Supply allowance for non-adjunctive, non-implanted CGM, 1 month supply

**Payer criteria (quoted from the attached policy)**

1. Diagnosis of diabetes treated with insulin. **Met**: "basal-bolus insulin, 4 injections a day."
2. Visit with the treating practitioner within 6 months before the order. **Met**: "seen in clinic 3 weeks ago."
3. Completion of diabetes self-management education. **Unknown**: not in the case you gave me.

The draft letter is in the packet. Tell me about criterion 3 and I'll update it.

{{< artifact type="docx" title="Prior authorization letter, CGM (draft)" sub="Word document · 1 page" >}}
{{< verdict >}}Passed its checks. 6 of 6 quotes were found word for word in their sources.{{< /verdict >}}
{{< follow-ups "Make the letter a Word document|Draft peer-to-peer talking points|List what's still unknown" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

**Passed its checks** means Lumen re-found every quote in its source and confirmed the codes. It doesn't mean the payer will approve the request. Open **What was checked** in the packet to see exactly what was tested.

## Check the result

Go through this list before anything leaves your office.

{{< lui-block title="Before you send" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Each code matches the chart" body="ICD-10 and HCPCS codes are confirmed against the national code sets. CPT codes are checked only against a list of common codes, so confirm any CPT code with your coder." >}}
{{< lui-row type="check" title="Every criterion has a status" body="Each Met item quotes a fact you gave. Resolve or explain every Unknown." >}}
{{< lui-row type="check" title="The criteria come from this payer" body="The source is the policy you attached, or a CMS National Coverage Determination for Medicare." >}}
{{< lui-row type="check" title="Every number in the letter is in the chart" body="A1c, injection counts, dates and visit timing match your records." >}}
{{< lui-row type="check" title="The ordering clinician has reviewed and signed it" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Attach the policy every time.** Commercial payers write their own criteria. The packet is only as good as the policy it quotes.
- **Medicare requests.** If the service has a CMS National Coverage Determination, Lumen can find it and quote it. Many Medicare items are covered by local policies instead. Attach those as PDFs.
- **Say "draft it with placeholders"** if you don't have every fact yet. Lumen lists what's missing instead of guessing.
- **Peer-to-peer.** In the same chat, type `Prepare me for a peer-to-peer call on this request.` The Specialist uses the same criteria and evidence.

## Limits and safety

{{< callout type="safety" title="You own the submission" >}}
Lumen drafts and checks. It doesn't decide medical necessity, and it never says a request "will be approved". Review every code, criterion and sentence before you sign. Don't enter patient identifiers or anything you're not permitted to share. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

- **Lumen doesn't submit anything.** You send the request yourself. If you ask Lumen to email it, the email waits for your approval and is sent exactly as you approved it.
- **Lumen can't see proprietary criteria** such as InterQual or MCG, or a plan's unpublished rules. If the payer uses those, criteria Lumen can't read stay **Unknown**.
- **Checked isn't the same as correct.** A quote that matches its source shows the source says it. It doesn't prove the source applies to this patient.

## FAQ

{{< faq question="Does Lumen send the request to the payer?" >}}
No. Lumen prepares the packet and the letter. You review, sign and submit through your usual channel.
{{< /faq >}}
{{< faq question="What if I don't have the payer's policy?" >}}
Lumen will still look up the codes and draft a letter, but every payer criterion stays **Unknown**, because Lumen won't write criteria from memory. For Medicare, ask it to look for a CMS National Coverage Determination. For other payers, download the policy from the payer's website and attach it.
{{< /faq >}}
{{< faq question="Which plan do I need?" >}}
The Prior Authorization Specialist and document creation work on every plan, including Free. Higher plans give you more usage. See [Plans](/plans/).
{{< /faq >}}
{{< faq question="What if the request is denied?" >}}
Use the same Specialist to draft an appeal against the denial reason. See [Appeal an insurance denial](/guides/appeal-a-denial/).
{{< /faq >}}

## Next steps

{{< related "/guides/appeal-a-denial/" "/skills-and-specialists/specialists/prior-authorization/" "/tools/coding-labs/" "/tools/document-generation/" >}}
