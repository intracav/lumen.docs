---
title: "How Lumen Thinks"
description: "Lumen shows its reasoning so you can verify the logic behind every answer."
weight: 3
---

You wouldn't trust a colleague who just said *"trust me"* without explaining their reasoning. Neither should you trust an AI that way. That's why Lumen shows you **how** it arrived at its answer &mdash; you can expand the thinking block and see the logic step by step.

## What Is the Thinking Block?

When Lumen processes a complex question, it first "thinks" through the problem before responding. This appears as a collapsible block at the top of the response.

<div class="app-frame" style="margin: 2rem 0;">
  <div class="app-frame-bar">
    <div class="app-frame-dot red"></div>
    <div class="app-frame-dot yellow"></div>
    <div class="app-frame-dot green"></div>
  </div>
  <div class="app-frame-content" style="background: var(--bg-dark);">
    <div class="mock-thinking" style="cursor: pointer; margin: 0;">
      <span class="pulse-dot"></span>
      <span style="flex: 1;">Thought for 4s</span>
      <span style="font-size: 0.7rem;">&#9660;</span>
    </div>
    <div style="padding: 0.75rem; background: rgba(255,255,255,0.03); border-radius: 0 0 var(--radius-sm) var(--radius-sm); margin-top: 2px; font-size: 0.8rem; color: var(--text-muted-dark); line-height: 1.6;">
      The user is asking about anticoagulation for a patient with atrial fibrillation and a history of GI bleeding. I need to weigh the stroke risk (CHA₂DS₂-VASc) against the bleeding risk (HAS-BLED). Let me calculate both scores and then look up current guidelines for this specific scenario...
    </div>
  </div>
</div>

## How It Works

<div class="steps-container">

{{< step num="1" title="Lumen starts thinking" >}}
As soon as you send a message, the thinking block appears with an animated indicator and a running timer: **"Thinking... 1s"**, **"Thinking... 2s"**, etc.
{{< /step >}}

{{< step num="2" title="The block auto-expands while active" >}}
During streaming, the thinking block stays open so you can watch Lumen's reasoning in real time. You'll see it work through the problem step by step.
{{< /step >}}

{{< step num="3" title="It collapses when done" >}}
Once the response is complete, the thinking block automatically collapses to save space. The header changes to **"Thought for Xs"** showing the total time.
{{< /step >}}

{{< step num="4" title="Click to expand anytime" >}}
You can always click the thinking block header to expand it and review the reasoning. Click again to collapse.
{{< /step >}}

</div>

## Why This Matters for Clinicians

{{< callout type="info" >}}
**The thinking block is your audit trail.** It shows exactly what the AI considered, what trade-offs it weighed, and why it reached its conclusion. This is critical for clinical decision support — you should always be able to verify the reasoning.
{{< /callout >}}

The thinking process typically includes:

- **Problem decomposition** — how Lumen breaks down your question
- **Evidence consideration** — what guidelines or data it's drawing from
- **Risk-benefit analysis** — trade-offs it's weighing
- **Tool selection** — which specialized tools it decides to invoke
- **Synthesis** — how it combines information into a coherent answer

## Not Every Response Has Thinking

Simple, factual questions (like "What is the generic name for Lipitor?") may be answered directly without a visible thinking block. The thinking process is most apparent for:

- Complex clinical scenarios with multiple variables
- Questions requiring risk-benefit analysis
- Multi-step diagnostic or treatment planning
- Cases where multiple tools need to be coordinated
