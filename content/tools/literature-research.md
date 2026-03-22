---
title: "Research & Evidence"
description: "Ask Lumen to search PubMed, check FDA drug labels, or find clinical trials — without leaving the conversation."
weight: 2
---

Need to look something up in PubMed mid-round? Want to check what the FDA label actually says? Just ask. Lumen searches the major medical databases and brings the results right into your conversation.

## Available Tools

<div class="tool-grid">

{{< tool-card name="PubMed Search" icon="&#128218;" color="#0EA5E9" desc="Searches the PubMed/MEDLINE database via NLM E-utilities. Finds relevant articles, fetches abstracts, and ranks results by relevance to your question." example="\"Find recent systematic reviews on SGLT2 inhibitors and heart failure outcomes\"" badge="Research" >}}

{{< tool-card name="FDA Drug Labels" icon="&#128138;" color="#34C759" desc="Queries the openFDA drug labeling API. Returns official FDA-approved label information including indications, dosing, warnings, and contraindications." example="\"What does the FDA label say about semaglutide contraindications?\"" badge="Regulatory" >}}

{{< tool-card name="Clinical Trials Search" icon="&#129514;" color="#8C66D9" desc="Searches ClinicalTrials.gov for active and completed studies. Filter by condition, recruitment status, and trial phase." example="\"Find active Phase 3 trials for NASH/MASH treatment\"" badge="Research" >}}

</div>

## How PubMed Search Works

When Lumen searches PubMed, you'll see a tool call block showing the progress:

<div class="chat-mockup" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">Find recent evidence on ketamine for treatment-resistant depression</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Searched PubMed
          </div>
          <div class="mock-tool-detail">
            query: "ketamine treatment-resistant depression" &middot; Queried E-utilities &middot; Fetched abstracts &middot; Ranked by relevance
          </div>
        </div>
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--text-on-dark);">
          I found <strong>12 relevant articles</strong> on ketamine for TRD. Here are the key findings...
        </p>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: rgba(14,165,233,0.15); color: #0EA5E9;">&#128218;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">PubMed Results: Ketamine &amp; TRD</div>
            <div class="mock-artifact-type">12 articles</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Tips for Better Literature Searches

{{< tip title="Be specific with your queries" >}}
Instead of *"diabetes treatment"*, try *"GLP-1 receptor agonists cardiovascular outcomes type 2 diabetes RCT"*. Specific queries return more targeted results.
{{< /tip >}}

- **Include study types** — "systematic review", "RCT", "meta-analysis"
- **Add time frames** — "published after 2023"
- **Specify populations** — "pediatric", "elderly", "pregnant patients"
- **Name specific drugs** — Use generic names for best results

{{< callout type="info" >}}
**PubMed results are interactive.** Click the artifact card to see the full list of articles with PMIDs, abstracts, and links to the original papers.
{{< /callout >}}
