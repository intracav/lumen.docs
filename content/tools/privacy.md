---
title: "Privacy & Safety"
description: "Remove patient identifiers from text before sharing, and send emails with built-in safety guardrails."
weight: 8
---

Need to share a clinical note with a colleague but want to strip the patient's name and MRN first? Lumen can de-identify text automatically. It also has a safe email tool for sending prior auth letters and other correspondence.

## Available Tools

<div class="tool-grid">

{{< tool-card name="De-identify PHI" icon="&#128274;" color="#5865F2" desc="Automatically removes protected health information from text — names, dates, MRNs, addresses, and other identifiers. Replaces them with consistent pseudonyms so the text remains readable." example="\"De-identify this clinical note before I share it with the research team\"" badge="Privacy" >}}

{{< tool-card name="Re-identify PHI" icon="&#128275;" color="#8C66D9" desc="Restores original PHI from de-identified text using the session mapping. Only works within the same session where de-identification occurred." example="\"Re-identify the note from earlier\"" badge="Privacy" >}}

{{< tool-card name="Send Email" icon="&#128231;" color="#FF9500" desc="Sends emails on your behalf — useful for prior authorization letters, appeal correspondence, and patient communications. Only fires when you explicitly include a recipient email." example="\"Send this prior authorization letter to auth@insurance.com\"" badge="Communication" >}}

</div>

## De-identification Example

<div class="chat-mockup" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">De-identify this note: "John Smith, DOB 03/15/1958, MRN 12345678, presented to the ED on 01/20/2026 with chest pain."</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--text-on-dark);">
          Here's the de-identified version:<br><br>
          <span style="background: rgba(88,101,242,0.15); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--primary-light);">[Patient A]</span>, DOB <span style="background: rgba(88,101,242,0.15); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--primary-light);">[Date-1]</span>, MRN <span style="background: rgba(88,101,242,0.15); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--primary-light);">[ID-1]</span>, presented to the ED on <span style="background: rgba(88,101,242,0.15); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--primary-light);">[Date-2]</span> with chest pain.
        </p>
      </div>
    </div>
  </div>
</div>

## Email Safety

The email tool has an important safety feature:

{{< callout type="important" >}}
**Emails are only sent when you explicitly include a recipient address.** Lumen will never send an email unless you provide the email address in your message. This prevents accidental sends.
{{< /callout >}}

## Best Practices

- **Always review de-identified text** before sharing — verify all PHI has been properly removed
- **Use consistent sessions** for de-identify/re-identify — the mapping is session-specific
- **Review email content** before confirming — preview the draft before it sends
- **Check your institution's policies** on AI-assisted PHI handling

{{< callout type="info" >}}
**Lumen stores no PHI.** Chat conversations are encrypted at rest and in transit. De-identification mappings exist only for the duration of your session.
{{< /callout >}}
