---
title: "Connect Lumen to your EHR"
navTitle: "Connect your EHR"
description: "Connect your organization's EHR to Lumen with SMART on FHIR, read-only by default, then link each clinician's own EHR login so chat can read patient context."
lead: "Your IT team registers one read-only connection for the organization. Each clinician then links their own EHR login, and Lumen can read the chart instead of you retyping it."
weight: 27
icon: plug
tier: plus
who: "IT, informatics and clinicians"
glance:
  what: "An EHR connection lets Lumen read patient information, such as medications, problems and results, from your electronic health record through the FHIR standard, using each clinician's own EHR sign-in."
  who: "Hospital IT and clinical informatics teams who set the connection up, and the clinicians who then link their own login."
  why: "Clinicians stop retyping medication lists and results into chat, and every read is tied to a named person and logged."
  needs: "A Lumen Plus or Max team plan. For setup: a team admin plus your EHR team, who register Lumen as a SMART on FHIR app and provide its details. For each clinician: their normal EHR sign-in. About 30 minutes for setup, 2 minutes per clinician."
  result: "A read-only organization connection, clinicians who show EHR connected, and patient-context answers in chat."
---

A hospitalist at Harbor Valley Medical Center asks Lumen about starting azithromycin. To check interactions, she has to copy fourteen medications from the EHR into chat, and the answer is only as good as her copying. With an EHR connection, Lumen reads the current medication list itself, using her own EHR sign-in, and every read is logged.

There are two parts. Your IT team sets up one connection for the organization, once. Then each clinician links their own EHR login. Your organization is called a *team* in Lumen.

## Before you start

- **Plan.** EHR connections need a **Plus** or **Max** team plan {{< tier-badge "plus" >}}. See [Plans](/plans/).
- **For the organization setup:**
  - a Lumen team admin
  - your EHR team, to register Lumen as a SMART on FHIR app in your EHR and give you its **Client ID**, **Client Secret** and **Token URL**
  - your EHR's **FHIR R4 Base URL**
- **For each clinician:** a Lumen account in your team and their usual EHR sign-in. Lumen never sees the EHR password.

{{< callout type="info" title="SMART on FHIR, in one sentence" >}}
SMART on FHIR is the standard way for an approved app to read from an EHR: you sign in on the EHR's own page, approve what the app may read, and the EHR gives the app a limited, revocable pass. See [SMART on FHIR](/learn/smart-on-fhir/).
{{< /callout >}}

## How to set up the organization connection

These steps are for a team admin, working with your EHR team.

{{< steps >}}
{{< step title="Open the EHR connection page" >}}
Sign in at [lumen.intracav.ai](https://lumen.intracav.ai) and switch to your team. In the sidebar, click **Home**. Under **Connections**, open **EHR connection**. The **EHR Integration** setup opens.
{{< /step >}}

{{< step title="Choose your EHR" >}}
Under **Select your EHR system**, choose your EHR system from the list, or **Custom / Other** if it isn't listed. Click **Continue**.
{{< /step >}}

{{< step title="Enter the FHIR address and keep it read-only" >}}
Enter the **FHIR R4 Base URL** from your EHR team. Leave **Read-only mode** on. Organization connections are read-only by default, and writing to the chart needs an admin to change that deliberately. Click **Continue**.
{{< /step >}}

{{< step title="Choose SMART on FHIR" >}}
Under **Authentication method**, choose **SMART on FHIR (OAuth 2.0)** and enter the **Client ID**, **Client Secret** and **Token URL** your EHR team gave you. Click **Continue**.

The other methods, **Bearer Token** and **No Authentication**, are for test and sandbox servers only.
{{< /step >}}

{{< step title="Test and save" >}}
On **Review & Test Connection**, check the summary. **Access Mode** should say **Read-only**. Click **Test Connection**. When it succeeds, click **Save & Connect**.

You'll see "Org FHIR connection registered — clinicians can now connect via SMART."
{{< /step >}}
{{< /steps >}}

## How each clinician links their EHR login

{{< steps >}}
{{< step title="Open the EHR connection page" >}}
In Lumen, switch to your team. Click **Home**, then **EHR connection** under **Connections**. The page shows **Tenant available — not yet authorized**.
{{< /step >}}

{{< step title="Click Connect your EHR" >}}
Click **Connect your EHR**. Lumen sends you to your EHR's own sign-in page. Check that it is your EHR's usual page and address.
{{< /step >}}

{{< step title="Sign in and approve" >}}
Sign in as you normally do. Your EHR shows what Lumen is asking to read. Approve it, and you're returned to Lumen. The status changes to **EHR connected**.
{{< /step >}}

{{< step title="Ask a patient-context question" >}}
Open a chat in your team and ask a question that needs the chart, for example:

```text
For the patient with MRN 000123 in our EHR test environment, are there
interaction concerns with starting azithromycin, given the current med list?
```

Lumen reads the medication list from the EHR, shows the FHIR lookup as a tool step, and answers from what it read.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="chat-thinking-tools" alt="A Lumen answer showing an EHR lookup tool step before an interaction check" caption="The FHIR lookup appears as a tool step, so you can see that Lumen read the chart." url="lumen.intracav.ai" >}}
{{< chat-demo title="Interaction check with chart context" caption="Illustration with a fictional patient in a test environment." >}}
{{< user >}}For the test patient MRN 000123, any interaction concerns with starting azithromycin?{{< /user >}}
{{< lumen thought="3" tools="FHIR R4, Drug interactions" sources="2" >}}
The current medication list from the EHR includes **amiodarone** and **ondansetron** {{< cite 1 >}}. Both prolong the QT interval, and azithromycin adds to that risk {{< cite 2 >}}.

Check a recent ECG and electrolytes before starting, or consider an alternative.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check it worked

- **Organization:** the setup summary shows **Read-only** and **Test Connection** succeeds.
- **Clinician:** the EHR connection page shows **EHR connected**.
- **Chat:** a patient-context question shows an EHR lookup step, and the answer matches what the chart says.

## Tips

- **Start in your EHR's test environment.** Register Lumen against a sandbox first, check a few answers against the chart, then repeat with production.
- **Train on your EHR.** Once connected, **Start training** opens a guided training chat for your EHR vendor.
- **Revoke at either end.** Your EHR team can revoke Lumen's access in the EHR at any time. A clinician can reconnect with **Reconnect EHR**.

## Limits and safety

- **Read-only by default.** Lumen reads; it doesn't write to the chart unless an admin turns off **Read-only mode**, and even then a clinician must approve each write. Notes and letters Lumen drafts reach the chart through you.
- **Every read is logged** in Lumen's tamper-evident audit log, tied to the clinician who asked.
- **Each clinician uses their own login.** Lumen sees only what that person's EHR account is allowed to see.
- **What Lumen can read depends on your EHR.** Different vendors expose different FHIR data.
- **Personal settings don't connect chat.** A connection saved with **Bearer Token** or **No Authentication** on a personal account isn't used in chat. Use the team SMART setup above.
- **Patient information outside the connection.** Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. Lumen is built with security safeguards (encryption, access controls and a tamper-evident audit log).

{{< callout type="safety" title="Check the chart before you act" >}}
Lumen can misread or miss data, and the chart may be out of date. Confirm medications and results in the EHR before making a clinical decision.
{{< /callout >}}

## FAQ

{{< faq question="Can Lumen change anything in our EHR?" >}}
Not by default. Organization connections are read-only. Writing needs an admin to turn off read-only mode, and then each write still waits for a clinician's approval.
{{< /faq >}}
{{< faq question="Which EHRs work?" >}}
Any EHR with a FHIR R4 interface and SMART on FHIR support. The setup lists common EHR systems by name, plus **Custom / Other** for any other system with a FHIR R4 endpoint.
{{< /faq >}}
{{< faq question="Does every clinician need to connect?" >}}
Yes. Each clinician links their own EHR login, so Lumen reads only what that person is allowed to see, and every read is attributed to them.
{{< /faq >}}

## Next steps

{{< related "/organizations/ehr/" "/learn/smart-on-fhir/" "/tools/patient-records/" "/trust/privacy/" >}}
