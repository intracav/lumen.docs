---
title: "Reading Answers"
description: "What each part of Lumen's answer means and how to interact with it."
weight: 2
---

Lumen's answers look like regular text, but they often include extra pieces &mdash; like a list of sources, a progress indicator showing what it searched, or a tappable card with a detailed report. Here's what each part means.

## Anatomy of a Response

Every assistant response follows a consistent structure. Here's what you'll see, from top to bottom:

<div class="chat-mockup chat-demo-animated" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">What is the CHA₂DS₂-VASc score for a 72-year-old woman with hypertension and diabetes?</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-thinking">
          <span class="pulse-dot"></span>
          Thought for 3s
        </div>
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Ran medical calculator
          </div>
          <div class="mock-tool-detail">CHA₂DS₂-VASc &middot; age=72, sex=female</div>
        </div>
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6;">
          The <strong>CHA₂DS₂-VASc score is 5</strong> for this patient, which indicates a <strong>high stroke risk</strong>. Anticoagulation is recommended.
        </p>
        <div style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--text-muted-dark); line-height: 1.5;">
          <strong>Score breakdown:</strong><br>
          &bull; Age 65&ndash;74: +1<br>
          &bull; Age &ge;75: +1 (additional)<br>
          &bull; Female sex: +1<br>
          &bull; Hypertension: +1<br>
          &bull; Diabetes: +1
        </div>
        <div class="mock-sources chat-extra">&#128218; Sources (2)</div>
      </div>
    </div>
  </div>
</div>

## Response Sections Explained

### 1. The Avatar

<div style="display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: var(--bg-card); border-radius: var(--radius-md); box-shadow: var(--shadow-card); margin: 1rem 0;">
  <div style="width: 28px; height: 28px; border-radius: 50%; background: var(--primary); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.75rem; flex-shrink: 0;">&#10022;</div>
  <div style="font-size: 0.9rem; color: var(--text-secondary);">
    The blue circle with the <strong>&#10022;</strong> symbol identifies messages from Lumen. Your messages appear on the right in blue bubbles.
  </div>
</div>

### 2. Thinking Block

Shows that Lumen is reasoning through your question. The timer shows how long it took. You can expand this to see the AI's thought process.

### 3. Tool Calls

When Lumen uses a specialized tool (like a drug lookup or calculator), you'll see a progress block. These show the tool name and what data was processed.

### 4. Main Response Text

The answer itself — formatted with **bold text**, bullet points, headings, and other markdown styling for easy reading.

### 5. Sources Chip

If Lumen cited evidence, you'll see a **Sources** chip at the bottom. Click it to expand the list and see each reference with its relevance score.

### 6. Artifact Cards

When Lumen generates a file, checklist, or interactive tool result, it appears as a clickable card. Tapping opens it in a side panel.

## Streaming — Real-Time Responses

Lumen streams its response as it's generated. You'll see:

- **Three animated dots** before the first word appears
- **Text typing out** word by word with a blinking cursor
- **Tool calls appearing** as they execute

This gives you immediate feedback that Lumen is working, and you can start reading while the response is still being generated.

{{< tip title="You can stop a response" >}}
While Lumen is streaming, the Send button turns into a **Stop** button (a square icon). Tap it to cancel the current response at any time.
{{< /tip >}}

## Copying Responses

Hover over any assistant message and a **Copy** button appears. Click it to copy the response text to your clipboard. A brief "Copied" confirmation appears.

{{< callout type="success" >}}
**Responses are saved automatically** as part of your chat history. You can return to any conversation later from the sidebar.
{{< /callout >}}
