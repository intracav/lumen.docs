---
title: "Troubleshooting"
description: "Fixes for common Lumen problems: rate limits, queued messages, interrupted replies, missing citations, uploads, shared folders, approvals and sign-in."
lead: "Find what you're seeing, then follow the fix. Each entry gives the symptom, the likely cause and what to do."
weight: 3
icon: settings
glance:
  what: "A symptom-by-symptom guide to the messages and states you may see in Lumen, with the cause and the fix for each."
  who: "Anyone using Lumen: clinicians, team admins and device-maker staff."
  why: "To get unstuck quickly without losing work, and to know when to contact support."
  needs: "Nothing. If a fix doesn't work, email support@intracav.ai."
  result: "The problem fixed, or a clear description to send to support."
---

Most problems in Lumen show a short message that says what happened. Find that message or symptom below. Each entry tells you what it means and what to do. If nothing here matches, check the [status page](/developers/status/) and then email [support@intracav.ai](mailto:support@intracav.ai).

## Sending messages and limits

### A "Rate limited" banner with a countdown

- **What you see:** **Rate limited**, a short explanation, and **You can retry in 0:47** (or similar). The **Retry** button is greyed out.
- **Cause:** You've reached your plan's message allowance for the current usage window. On team plans (Plus and Max), members share one allowance for the team. Your message wasn't sent and nothing was lost.
- **Fix:** Wait for the countdown to reach zero, then press **Retry**. Lumen never retries for you. If this happens often, compare allowances in [Plans](/plans/).

### "Rate limited" on one tool

- **What you see:** A banner inside an answer: **Rate limited** with "Too many requests in a short window. Wait a moment and retry."
- **Cause:** One tool was called many times in a minute. This limit applies per tool, not to your whole account.
- **Fix:** Wait a moment and press **Retry**, or ask your question again.

### "You're offline — 2 messages will send when you reconnect"

- **What you see:** A banner above the message box, or **2 messages queued**.
- **Cause:** Your device lost its connection, so Lumen saved your messages on this device in an *outbox*.
- **Fix:** Reconnect. Queued messages send on their own. To send them sooner, press **Retry now**. To review or remove them, press **Manage**.

### "Queued message — review"

- **What you see:** A dialog saying "The conversation continued without this message after it was queued", or "The message you replied to has been removed."
- **Cause:** While your message waited in the outbox, the chat moved on, for example on another device.
- **Fix:** Choose **Send as continuation** to add it at the end of the conversation, or **Discard**.

### "This message didn't reach Lumen"

- **What you see:** Under your message: "This message didn't reach Lumen, so there is no reply yet. It's saved on this device until it's sent."
- **Cause:** The message couldn't be delivered.
- **Fix:** Check your connection and press **Send now**. The message stays on this device until it's sent.

### "Message too long"

- **Cause:** The message, plus any attached text, is over the size limit.
- **Fix:** Shorten the message, attach fewer or smaller documents, or split the request into parts.

## Answers that stop or fail

### "This reply was interrupted before it finished"

- **What you see:** Part of an answer, then: "This reply was interrupted before it finished — what is shown is incomplete, and nothing more is being written."
- **Cause:** The reply stopped before it was complete, for example because of a server problem. Lumen doesn't checkpoint replies: after a server failure the turn is marked interrupted and the partial text is kept, but it isn't resumed.
- **Fix:** Press **Retry**, or ask again. Don't rely on the partial text; it may be missing important parts.

{{< callout type="info" title="Closing the tab is fine" >}}
Closing the tab or your laptop doesn't interrupt a reply. Chats and Specialist work run on Lumen's servers and keep going, up to about an hour per task. Open the chat again on any device to see the result. Only a failure on Lumen's side interrupts a reply.
{{< /callout >}}

### "Lumen saved this message but never started a reply"

- **Cause:** Lumen received your message but the reply didn't start.
- **Fix:** Press **Retry** or send the message again.

### "Request timed out", "Network error" or "Service unavailable" on a tool

- **What you see:** A banner inside the answer naming the problem, sometimes with the tool, such as "PubMed search timed out".
- **Cause:** A database or service Lumen uses was slow or returned an error. Lumen tells you rather than inventing a result.
- **Fix:** Press **Retry**. For **Service unavailable**, you can also press **Try alternative**. For a timeout, try a simpler question or split it up.

### "Upgrade required"

- **Cause:** The answer needed a tool that isn't included in your plan.
- **Fix:** Press **View plans** to compare, or ask your question in a way that doesn't need that tool.

### "Something went wrong"

- **Cause:** An unexpected error on Lumen's side.
- **Fix:** Try again. If it keeps happening, press **Contact support** or email [support@intracav.ai](mailto:support@intracav.ai) with the time and what you asked (no patient details).

### "This answer paused to work in the app, and the pause expired"

- **Cause:** **Pilot**, the feature that works in the Lumen app for you, paused to act on screen and the pause ran out before it could continue. Pilot runs in your open app, not in the background.
- **Fix:** Ask again to pick up where it left off, and keep the app open while Pilot works.

## Sources and citations

### The answer has no sources

- **Cause:** Nothing relevant was found, or the question didn't need a lookup. When nothing supports an answer, Lumen should say so rather than guess.
- **Fix:** If you expected a document to be cited, check it has finished indexing (below), or attach it to your message so Lumen reads it directly. Treat any confident claim with no citation with caution. See [RAG and citations](/learn/rag-and-citations/).

### "Knowledge base unavailable — composing from memory"

- **Cause:** Lumen's search was briefly unavailable, so the answer is being written without retrieved sources.
- **Fix:** Treat that answer as uncited. Ask again in a minute to get a cited answer.

### My uploaded document isn't being cited

- **Cause:** It may still be indexing, indexing may have failed, or another document matched your question better.
- **Fix:** Open your documents. If it shows **Indexing…**, wait. If indexing failed, open the document's menu and choose **Retry indexing**. To make one document the subject of a question, attach it to the message.

### A preview says it may be a scan without readable text

- **Cause:** The file has no text layer, or Lumen couldn't read its pages. Scans and pictures are read by text recognition (OCR) on Lumen's servers, and poor scans may not read well.
- **Fix:** Download the original to open it. If you need it searchable, upload a clearer copy or a version with selectable text.

## Teams, folders and sharing

### A teammate can't see a document in a shared folder

- **Cause:** Access follows the folder. A document in your personal folder is visible only to you, however often it's discussed.
- **Fix:** Use **Move to folder** to move the document into the shared folder. Then open the folder and check its sharing line, such as "Shared with everyone in the team", "Shared with the department" or "Shared with specific people", and the **Members** list.

### "Team Members Only" on a shared chat

- **What you see:** "This shared chat is limited to members of the owner's team."
- **Cause:** The person who shared the chat limited it to their team, Lumen's name for an organization account.
- **Fix:** If you're in that team, sign in with your team account. Otherwise, ask the owner to share it another way.

### Memory remembered something wrong

- **Fix:** Say "forget that…" in a chat, or open {{< ui-path "Settings" "Memory" >}} and delete or edit the fact. See [How AI memory works](/learn/ai-memory/).

## Approvals and Specialists

### An approval card says "Expired — nothing happened"

- **Cause:** An action waiting for your approval, such as sending an email, wasn't approved in time.
- **Fix:** Nothing was sent. Ask the Specialist to prepare the action again, then press **Approve**.

### An approval card says "Interrupted — check whether it happened before retrying"

- **Cause:** The action started, but Lumen couldn't confirm whether it finished.
- **Fix:** Check the destination first, such as your sent mail, before asking for it again, so it doesn't happen twice.

### I typed "I approve" and nothing happened

- **Cause:** Approval only happens on the approval card. Typed approval does nothing, by design.
- **Fix:** Press **Approve** on the card. It runs exactly as shown. See [Approvals](/skills-and-specialists/approvals/).

## Workflows, Pilot and Satellite

### My workflow stopped when I closed the editor

- **Cause:** A run started from the editor canvas stops if you close it. Scheduled and triggered runs are different: they run unattended.
- **Fix:** Keep the editor open for test runs, or set a schedule or trigger. See [Workflows](/workflows/).

### My phone won't pair with Satellite

- **Cause:** Pairing codes for **Satellite**, which pairs your phone with Lumen on your desktop, expire after 5 minutes, and each person can have up to 5 sessions.
- **Fix:** Start again from **Connect phone** on the desktop and scan the new code. End old sessions if you've reached the limit. See [Satellite](/pilot/satellite/).

## Signing in and appearance

### "Session expired"

- **Fix:** Press **Sign in** and sign back in. Your chats are saved on Lumen's servers.

### Lumen switches between light and dark on its own

- **Cause:** The theme is set to **System**, so it follows your device.
- **Fix:** Open {{< ui-path "Settings" "Appearance" "Theme" >}} and choose **Light** or **Dark**.

## Still stuck?

- Check the [status page](/developers/status/) for known issues.
- Search the [FAQ](/help/faq/) and [glossary](/help/glossary/).
- Email [support@intracav.ai](mailto:support@intracav.ai). Include what you were doing, the exact message you saw and the time. Don't include patient information.

## Next steps

{{< related "/help/" "/help/faq/" "/developers/status/" "/learn/rag-and-citations/" >}}
