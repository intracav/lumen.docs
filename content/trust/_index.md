---
title: "Trust and security"
navTitle: "Trust & security"
description: "How Lumen protects data and keeps AI accountable: encryption, access controls, a tamper-evident audit log, approvals and honest limits."
lead: "A plain summary for security, privacy and procurement reviewers: the safeguards Lumen is built with, what each one does, and where the boundaries are."
weight: 51
group: more
icon: shield-check
cascade:
  audience: all
glance:
  what: "An overview of the safeguards in Lumen: encryption, access controls, a tamper-evident audit log, approvals for actions, and limits on how AI is used."
  who: "Security, privacy, compliance and procurement reviewers at hospitals, health systems and device makers, and anyone deciding whether to trust Lumen with their work."
  why: "To answer the questions a security review asks, in plain terms, with each claim limited to what the product does."
  needs: "Nothing. For contract terms or a security questionnaire, contact Intracav at intracav.ai."
  result: "A clear view of Lumen's safeguards and their limits, and where to go for the details."
hideAutoGrid: true
---

Lumen is a clinical AI workspace made by **Intracav**. It is built with security safeguards: encryption, access controls and a tamper-evident audit log. This page summarizes those safeguards for a security or procurement review. Each statement is limited to what the product does today.

## The safeguards at a glance

{{< card-grid cols="2" >}}
{{< card title="Encryption" icon="lock" tint="blue" >}}Traffic is encrypted in transit over HTTPS. Stored files are encrypted with a separate key for each file. Selected sensitive fields are encrypted individually.{{< /card >}}
{{< card title="Access controls" icon="users" tint="plum" >}}Personal and team workspaces are separate. Teams have owner, admin and member roles, plus department roles.{{< /card >}}
{{< card title="Tamper-evident audit log" icon="history" tint="green" >}}Activity is written to a hash-chained log. Changing or removing an entry breaks the chain in a way a verifier detects.{{< /card >}}
{{< card title="Approvals" icon="hand" tint="accent" >}}Actions that leave Lumen, such as sending an email, wait for a person to approve them, and run exactly as approved.{{< /card >}}
{{< /card-grid >}}

## How Lumen protects data

### Encryption

- **In transit:** connections to Lumen use HTTPS, with HTTP Strict Transport Security (HSTS) so browsers refuse unencrypted connections.
- **Stored files:** documents and other files are encrypted with a key for each file, and that key is bound to the file it belongs to.
- **Sensitive fields:** selected fields, such as contact details captured by a website assistant, account credentials and personal notes, are encrypted one field at a time with AES-256-GCM. Each value is bound to the table and column it came from, so a value copied somewhere else won't decrypt.

### Access controls

- **Separate workspaces.** Your personal workspace and each team workspace are separate. Content moves between them only when someone uploads or shares it.
- **Roles.** Teams have owners, admins and members, and departments have their own admins and members. Admin pages check the role on the server, not only in the interface.
- **Re-authentication for the most sensitive steps.** Deleting your account requires a recent sign-in. Intracav staff must sign in again before sensitive platform administration.
- **Revocable sharing.** Share links can be revoked, and team quick-share links expire.

### A tamper-evident audit log

Lumen writes activity to an audit log in which each entry includes a hash of the entry before it. Changing or removing an entry breaks that chain, and a verification tool detects the break. The database blocks edits and deletions to the log. Team admins can review their team's activity. See [Audit and access](/organizations/audit-and-access/).

The log is tamper-evident. It isn't a certification, and Lumen doesn't claim one.

## How Lumen keeps AI accountable

- **Sources you can check.** Answers cite the passages they came from. If Lumen can't find support, it says so. See [Accuracy and clinical judgment](/trust/responsible-ai/).
- **Approvals for actions.** When Lumen proposes an action that leaves Lumen, it stores the exact details and waits. When a person approves, Lumen checks the details haven't changed and that the person is still allowed to act, and then runs it once. Typing "I approve" in the chat does nothing.
- **One model provider, selected by plan.** Lumen uses one external AI model provider. Your plan determines which model answers. You don't choose a provider, and Lumen doesn't route between providers.
- **De-identification where it applies.** In [Research](/research/) and in the embedded [website assistant](/connect/website-assistant/), Lumen removes identifiers such as names, dates and record numbers before text goes to the external model, and restores them in the reply.

## Before you share clinical information

{{< callout type="important" title="Protected health information" >}}
Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. For patient text you're allowed to use, de-identify it first with the [de-identification tool](/tools/privacy/).
{{< /callout >}}

## Limits

- **No certifications are claimed here.** This page doesn't claim SOC 2, HITRUST, ISO 27001 or any other certification, and it doesn't claim compliance with any regulation. It describes safeguards.
- **De-identification isn't platform-wide.** Lumen applies it in Research and in the website assistant. Elsewhere, treat what you type as going to the model as written.
- **Not every field is encrypted individually.** All traffic is encrypted in transit, and stored files are encrypted. Field-level encryption covers selected sensitive fields, not every value.
- **PHI needs a written agreement.** Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements.

## FAQ

{{< faq question="Can we enter patient information in Lumen?" >}}
Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements.
{{< /faq >}}
{{< faq question="Does Lumen have SOC 2 or another certification?" >}}
This documentation doesn't claim any certification. For a security questionnaire or current attestations, contact Intracav at [intracav.ai](https://intracav.ai).
{{< /faq >}}
{{< faq question="Which AI model does Lumen use?" >}}
Lumen uses one external model provider and selects the model by plan. Plus and Max use a more capable model than Free and Pro. Contact Intracav for vendor details during a security review.
{{< /faq >}}
{{< faq question="Is our data used to train AI models?" >}}
Ask Intracav for the current data processing terms in writing as part of your review. This page doesn't make a training claim either way.
{{< /faq >}}
{{< faq question="Is there a status page?" >}}
Yes. Service health and 90 days of history are at [status.intracav.ai](https://status.intracav.ai). Developers can read the same data from the [status API](/developers/status/).
{{< /faq >}}

## Next steps

{{< related "/trust/privacy/" "/trust/responsible-ai/" "/organizations/audit-and-access/" "/plans/" >}}

{{< cta heading="Starting a security review?" href="https://intracav.ai" label="Contact Intracav" secondary-href="/trust/privacy/" secondary-label="Privacy and data" >}}Ask for the security questionnaire and data processing terms, and discuss your organization's requirements.{{< /cta >}}
