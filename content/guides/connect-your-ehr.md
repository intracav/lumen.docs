---
title: "Connect Lumen to Your EHR"
description: "Link your own EHR login to Lumen via SMART on FHIR: scoped, read-only patient context in chat, a test button to verify — and never a write to the chart."
weight: 27
audience: clinician
tier: plus
time: "~10 minutes"
keywords: ["connect AI to EHR", "SMART on FHIR setup clinician", "EHR patient context AI chat"]
---

Every question you ask Lumen about a real patient currently starts with transcription: you read the med list off one screen and retype it into another, and the answer is only as good as your retyping. Connecting your EHR removes that step. Once linked, Lumen can pull the patient context itself — current medications, problems, recent results — and answer with the chart in view, the way a good consultant reads the chart before opining.

## What you'll make

Your own EHR login linked to Lumen through the **SMART on FHIR** standard: you authenticate on your EHR's own login page, consent to an explicit, read-only scope, verify the connection with a test button, and then ask patient-context questions without retyping a single med.

## Before you start

- **A Plus plan or above** {{< tier-badge "plus" >}} — see [Plans](/plans/).
- **Your organization's EHR connection, already provisioned.** The org-level connection — endpoint registration, key exchange, environment validation — is set up with Lumen's team; org self-service setup is on the way {{< status-badge "coming-soon" >}}. The full picture is at [EHR integration for organizations](/organizations/ehr/). If your org hasn't done this yet, that's the first conversation — this guide covers your personal step, which comes after.
- **Your normal EHR credentials.** You'll sign in on your EHR's page, not Lumen's — Lumen never sees your EHR password.

## The steps

<div class="steps-container">

{{< step num="1" title="Open your EHR connection settings" >}}
In your Lumen account settings, find the EHR connection section and start the linking flow.

**You should see:** a standalone launch begin — Lumen handing you off to your EHR rather than asking for credentials itself. That handoff is the point: this is the [SMART on FHIR](/learn/smart-on-fhir/) pattern, the same standard your IT department has already vetted for other connected apps.
{{< /step >}}

{{< step num="2" title="Sign in on your EHR's login page" >}}
The flow lands you on your EHR's own login page. Sign in as you always do.

**You should see:** your EHR's familiar login screen — its branding, its URL. If a page asked for your EHR password anywhere else, you'd be right to stop; the whole design is that authentication happens with your EHR directly.
{{< /step >}}

{{< step num="3" title="Review the scoped consent" >}}
After you authenticate, your EHR presents a consent screen listing exactly what Lumen is asking to read.

**You should see:** an enumerated, read-only list — the categories of data Lumen may access, and nothing implied beyond it. This is the "badge, not master key" model: access is limited to what's named here, logged on both sides, and revocable by your organization at any time. Approve it, and you're returned to Lumen connected.
{{< /step >}}

{{< step num="4" title="Test the connection" >}}
Back in Lumen's EHR settings, use the **test** button.

**You should see:** a success confirmation identifying the FHIR server Lumen reached. The test verifies the plumbing end to end before you rely on it in front of a patient chart. If it fails instead, the error shown is the detail your IT contact will want — see troubleshooting below.
{{< /step >}}

{{< step num="5" title="Ask a patient-context question" >}}
Now ask the kind of question that used to require retyping — in patient context:

```text
Any interaction concerns with starting azithromycin for this
patient, given the current med list?
```

**You should see:** an answer informed by the med list the EHR just provided — not your recollection of it. The interaction check runs against the actual chart data. What this looks like in daily use is covered in [Patient Records & Notes](/tools/patient-records/).
{{< /step >}}

</div>

## What never happens

Worth stating as plainly as the feature itself: **Lumen reads; it does not write.** The connection is read-only, and the write path is disabled by default at the platform level. Nothing Lumen drafts is filed to the record by Lumen — notes reach the chart the way they always have, through you, reviewed and signed. And every access is audit-logged, so your organization can see exactly what was read and when.

{{< callout type="warning" >}}
**The connection is the governed path for PHI.** With your EHR linked, patient context flows in through scoped, audited access. Outside of it, don't paste identified patient data into chat — de-identify first. See [privacy and de-identification](/tools/privacy/).
{{< /callout >}}

## Troubleshooting

- **The test fails with a server error.** The FHIR endpoint configured for your connection isn't answering as expected. Note the exact error shown and bring it to whoever manages your org's connection — it's usually an endpoint or environment detail, not something on your side.
- **Your EHR login succeeds but the consent screen never appears.** The app registration on the EHR side may not be finished for your environment. Your org's EHR connection is provisioned with Lumen's team — flag it there.
- **You connected, but answers don't seem to use chart data.** Make sure the question is asked in patient context — Lumen uses the connection when there's a patient in scope, not for general questions.

## Next steps

- [SMART on FHIR, explained for clinicians](/learn/smart-on-fhir/) — the badge system behind what you just did.
- [EHR integration for organizations](/organizations/ehr/) — the org-level setup, CDS Hooks, and the security posture.
- [Patient Records & Notes](/tools/patient-records/) — what patient-context questions look like day to day.
