---
title: "Typing & Sending"
description: "How to ask questions, choose where Lumen searches, and write prompts that get better answers."
weight: 1
---

The bottom of the screen is where you type. It looks and works like any messaging app &mdash; but it has a few extra buttons that let you control where Lumen looks for answers.

## The Input Bar

At the bottom of every chat is the input bar. Here's what each element does:

<div class="app-frame" style="margin: 2rem 0;">
  <div class="app-frame-bar">
    <div class="app-frame-dot red"></div>
    <div class="app-frame-dot yellow"></div>
    <div class="app-frame-dot green"></div>
  </div>
  <div class="app-frame-content" style="padding: 0;">
    <div class="chat-toggles" style="padding: 0.75rem 1.25rem; background: var(--bg-darker);">
      <div class="mock-toggle active" style="background: rgba(59,130,246,0.2); color: #3B82F6;">
        <span class="toggle-dot" style="background: #3B82F6;"></span> Clinical Database
      </div>
      <div class="mock-toggle">
        <span class="toggle-dot" style="background: #6633CC;"></span> My Docs
      </div>
      <div class="mock-toggle">
        <span class="toggle-dot" style="background: #299966;"></span> Web
      </div>
    </div>
    <div class="chat-mockup-input" style="border-top: 1px solid rgba(255,255,255,0.06);">
      <div class="input-field">Message Lumen&hellip;</div>
      <div class="send-btn">&#8593;</div>
    </div>
  </div>
</div>

## Knowledge Source Toggles

Below the text field are three toggles that control **where** Lumen searches for information:

### Clinical Database
<div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
  <div class="mock-toggle active" style="background: rgba(59,130,246,0.2); color: #3B82F6; display: inline-flex;">
    <span class="toggle-dot" style="background: #3B82F6;"></span> Clinical Database
  </div>
</div>

Searches Lumen's curated clinical knowledge base — peer-reviewed guidelines, drug databases, lab references, and clinical protocols. **This is on by default** and is the most commonly used source.

### My Docs
<div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
  <div class="mock-toggle active" style="background: rgba(102,51,204,0.2); color: #6633CC; display: inline-flex;">
    <span class="toggle-dot" style="background: #6633CC;"></span> My Docs
  </div>
</div>

Searches your **personally uploaded documents** — PDFs, notes, and reference materials that you've added to Lumen. Useful when you want to ask questions about your own files.

### Web
<div style="display: flex; align-items: center; gap: 0.5rem; margin: 0.5rem 0;">
  <div class="mock-toggle active" style="background: rgba(41,153,102,0.2); color: #299966; display: inline-flex;">
    <span class="toggle-dot" style="background: #299966;"></span> Web
  </div>
</div>

Searches the **live internet** for the most up-to-date information. Enable this when you need recent news, conference abstracts, or content not yet in the clinical database.

{{< tip title="You can enable multiple sources" >}}
All three toggles can be active at the same time. Lumen will search across all enabled sources and merge the results.
{{< /tip >}}

## Keyboard Shortcuts

| Action | Shortcut |
|--------|----------|
| Send message | <kbd>Enter</kbd> |
| New line | <kbd>Shift</kbd> + <kbd>Enter</kbd> |

## Writing Effective Prompts

Lumen understands natural language, but being specific helps get better results:

<div class="tool-grid" style="margin-top: 1rem;">
  <div class="tool-card" style="border-left: 3px solid var(--green);">
    <div class="tool-info">
      <div class="tool-name" style="color: var(--green);">Good prompt</div>
      <div class="tool-desc">"What are the drug interactions between metformin 1000mg and enalapril 10mg in a 65-year-old patient with CKD stage 3?"</div>
    </div>
  </div>
  <div class="tool-card" style="border-left: 3px solid var(--orange);">
    <div class="tool-info">
      <div class="tool-name" style="color: var(--orange);">Less helpful prompt</div>
      <div class="tool-desc">"drug interactions"</div>
    </div>
  </div>
</div>

The more context you provide — patient demographics, specific medications, relevant history — the more tailored and useful Lumen's response will be.

{{< callout type="info" >}}
**Drafts are saved automatically.** If you navigate away mid-message, your text will be waiting when you return.
{{< /callout >}}
