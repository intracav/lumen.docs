---
title: "Check a Drug Interaction"
description: "Ask Lumen if two medications are safe to use together."
weight: 2
step: 2
---

You're rounding on a patient and want to add a new medication. Before you order, you want to make sure it's safe with what they're already taking. Here's how to do that in Lumen.

## What to Type

Just describe the situation naturally. Any of these will work:

- *"Are there interactions between warfarin and amiodarone?"*
- *"Can I give ketorolac if the patient is on apixaban?"*
- *"Check interactions for metformin, lisinopril, and atorvastatin"*

You don't need to use a specific format. Ask it the way you'd ask a pharmacist.

## What You'll See

<div class="chat-mockup chat-demo-animated" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">Can I give ketorolac if the patient is on apixaban?</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Checked drug interactions
          </div>
          <div class="mock-tool-detail">ketorolac &times; apixaban &middot; FDA database</div>
        </div>
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--text-on-dark);">
          <strong style="color: #FF3B30;">&#9888; Major interaction.</strong> Ketorolac + apixaban significantly increases bleeding risk. NSAIDs impair platelet function and can cause GI erosion, compounding anticoagulant effects. <strong>This combination is generally avoided.</strong>
        </p>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: rgba(255,149,0,0.15); color: #FF9500;">&#9888;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">Interaction Report</div>
            <div class="mock-artifact-type">Tap for full details</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Reading the Result

1. **The short answer** comes first in plain text — safe or not, and why
2. **The report card** below it has the full details — mechanism, severity, monitoring recommendations, and alternatives
3. **Tap the card** to open the full report in a side panel where you can read everything and copy or download it

## Tips for Better Results

- **Name all the drugs** you want to check — Lumen can handle 2, 3, or more at once
- **Include the dose** if relevant (e.g., *"high-dose aspirin 650mg with warfarin"*)
- **Ask about alternatives** in the same message: *"Is there a safer pain med for a patient on apixaban?"*

{{< callout type="info" >}}
For the full list of medication tools (renal dosing, IV calculators, adverse events), see [Medication Questions](/tools/medications/).
{{< /callout >}}
