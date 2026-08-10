---
title: "Privacy & Safety"
description: "Remove patient identifiers from text before sharing, and send emails with built-in safety guardrails."
weight: 9
---

Need to share a clinical note with a colleague but want to strip the patient's name and MRN first? Lumen can de-identify text automatically. It also has a safe email tool for sending prior auth letters and other correspondence.

## Available Tools

<div class="tool-grid">

{{< tool-card name="De-identify PHI" icon="&#128274;" color="var(--smoky-blue)" desc="Automatically removes protected health information from text — names, dates, MRNs, addresses, and other identifiers. Replaces them with consistent pseudonyms so the text remains readable." example="\"De-identify this clinical note before I share it with the research team\"" badge="Pro" >}}

{{< tool-card name="Re-identify PHI" icon="&#128275;" color="var(--smoky-blue-dk)" desc="Restores original PHI from de-identified text using the session mapping. Only works within the same session where de-identification occurred." example="\"Re-identify the note from earlier\"" badge="Pro" >}}

{{< tool-card name="Session Mapping Controls" icon="&#128273;" color="var(--palace-green)" desc="Review the full de-identification mapping for your session — each original value, its pseudonym, and its category — or destroy the session to erase all mappings on demand." example="\"Show me the de-identification mapping, then destroy the session\"" badge="Pro" >}}

{{< tool-card name="Send Email" icon="&#128231;" color="var(--accent)" desc="Sends emails on your behalf — useful for prior authorization letters, appeal correspondence, and patient communications. Only fires when you explicitly include a recipient email." example="\"Send this prior authorization letter to auth@insurance.com\"" badge="Pro" >}}

</div>

These tools are available on paid plans — see [Plans](/plans/).

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
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--dark-text);">
          Here's the de-identified version:<br><br>
          <span style="background: var(--smoky-blue-glow); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--smoky-blue-lt);">[Patient A]</span>, DOB <span style="background: var(--smoky-blue-glow); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--smoky-blue-lt);">[Date-1]</span>, MRN <span style="background: var(--smoky-blue-glow); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--smoky-blue-lt);">[ID-1]</span>, presented to the ED on <span style="background: var(--smoky-blue-glow); padding: 0.15rem 0.4rem; border-radius: 4px; color: var(--smoky-blue-lt);">[Date-2]</span> with chest pain.
        </p>
      </div>
    </div>
  </div>
</div>

## How Session Mappings Work

Think of a de-identification session as a locked key ring for one conversation:

- **Pseudonyms are consistent within a session.** If "John Smith" becomes [Patient A] in one paragraph, he stays [Patient A] everywhere — so a de-identified note still reads coherently.
- **The mapping is created lazily** the first time you de-identify text, and it's what makes re-identification possible later in the same session.
- **You can inspect it.** Ask to see the session mapping and Lumen lists every original value, its pseudonym, and its category (name, date, ID, and so on).
- **Mappings expire automatically** after a set time, and you can destroy a session on demand the moment you're done — erasing every mapping it held.

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
**Built with HIPAA safeguards.** Conversations are encrypted at rest and in transit, access is audit-logged, and de-identification mappings expire automatically or can be destroyed on demand. Read more in [Privacy &amp; data handling](/trust/privacy/).
{{< /callout >}}
