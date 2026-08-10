---
title: "Deep Web Research with Cited Sources"
description: "Run a multi-source web research pass in Lumen: quick search vs deep research, reading inline [Source N] citations, and exporting a cited brief."
weight: 24
audience: clinician
tier: pro
time: "~15 minutes"
keywords: ["AI deep research clinical", "cited web research AI", "medical literature web search AI"]
---

Your value-analysis committee meets Thursday, and the question on the agenda is one the textbooks won't settle: how do complication rates actually compare across catheter securement approaches — adhesive devices, subcutaneous anchors, sutures — in the recent literature *and* the grey sources committees actually argue about? In this guide you'll run that question through Lumen's web research twice — once shallow, once deep — learn to read the citations that come back, and leave with a brief the committee can check line by line.

## What you'll make

A cited evidence brief comparing securement-device complication rates, built from a deep multi-source research pass — every claim tagged with an inline `[Source N]` citation you can click, judge, and defend in the meeting.

## Before you start

- **Deep Web Research is a Pro capability** {{< tier-badge "pro" >}} — quick web search works on any plan; see [Plans](/plans/).
- **A question worth the deeper pass.** Deep research shines when the answer lives across many sources — comparative questions, evidence landscapes, "what's the current state of…". For a single fact, the ordinary web toggle is faster.

{{< callout type="warning" >}}
**A note on patient data.** A device-evidence question needs no PHI — keep it that way. If you fold in your own unit's experience ("we had two dislodgements last quarter…"), describe events, not patients: no names, dates of birth, or record numbers. De-identification starts with you.
{{< /callout >}}

## The steps

<div class="steps-container">

{{< step num="1" title="Start shallow: the web toggle" >}}
Turn on **Web Search** at the bottom of the chat and ask the question plainly:

```text
How do complication rates compare between adhesive securement devices,
subcutaneous anchor securement, and sutures for central venous catheters?
Recent evidence preferred.
```

**You should see:** an answer built from a quick search — titles, snippets, and a read of what Lumen needed — with inline `[Source N]` markers on the claims and the sources listed so you can open each one. This is the fast pass: good for orientation, not yet committee-grade. The mechanics of the toggles live in [Finding Information](/tools/search-sources/).
{{< /step >}}

{{< step num="2" title="Run the deep pass" >}}
Now ask for research, not a search:

```text
Do deep research on this: complication rates (dislodgement, CRBSI,
site injury) across securement approaches for central venous catheters —
adhesive devices, subcutaneous anchors, sutures. Include recent trials
and reviews, plus grey sources like society statements and safety
communications. I'm preparing a value-analysis committee brief.
```

**You should see:** a longer working pass. Deep Web Research searches multiple engines and automatically reads the top results in full — up to nine complete pages in one pass, each kept separate so attribution stays per-source. The answer that comes back is synthesized across everything it read, with `[Source N]` citations pointing into specific pages rather than snippets.
{{< /step >}}

{{< step num="3" title="Judge the sources — that's what citations are for" >}}
Here's the honest part: **web sources vary in quality**, and no research pass changes that. A randomized trial, a society statement, and a vendor white paper can all surface in the same sweep. The citations exist so *you* can tell them apart. Interrogate the evidence:

```text
For each source you cited, tell me what kind of source it is —
peer-reviewed study, review, society statement, vendor material —
and which claims rest on the weakest sources.
```

**You should see:** a source-by-source appraisal. If a load-bearing claim rests on a thin source, you've found that out now, in your office — not Thursday, in front of the committee.
{{< /step >}}

{{< step num="4" title="Export a cited brief" >}}
When the picture holds up:

```text
Turn this into a one-page evidence brief for the value-analysis
committee: comparative complication rates by securement approach,
strength of evidence for each, and open questions. Keep every
citation attached to its claim.
```

**You should see:** a document card in the chat. Open it in the side panel and download it to circulate. The citations travel with it, so the skeptic on the committee — every committee has one — can go straight to the source.
{{< /step >}}

</div>

{{< chat-demo title="Reading a cited answer" >}}
{{< user >}}Which claims rest on the weakest sources?{{< /user >}}
{{< lumen >}}The dislodgement comparison is the best-supported claim — it draws on a randomized trial and a systematic review *[Source 2, Source 5]*. The site-injury comparison is weaker: one observational study plus a manufacturer-sponsored summary *[Source 7]*. I'd present the first as evidence and the second as a signal worth flagging.{{< /lumen >}}
{{< /chat-demo >}}

## Quick search or deep research?

Think triage. The **web toggle** is the focused exam: fast, cheap, right for a known question with a findable answer. **Deep Web Research** is the full workup: multiple engines, full pages read end to end, per-source attribution — for questions where the answer is a *landscape*, not a fact. Running the deep pass on "what's the max dose of X" wastes your time; running the quick pass on a committee question wastes the committee's.

## Troubleshooting

- **A source is paywalled.** Lumen reads what's publicly reachable — for a paywalled paper that may be the abstract, not the full text. The citation still tells you which paper to pull through your library.
- **A citation doesn't seem to support the claim.** Ask directly: *"quote the passage from Source 3 that supports this."* If the support isn't there, Lumen corrects itself — and you've verified the claim that mattered.
- **Results skew commercial.** Device topics attract vendor content. Steer the pass: *"prioritize peer-reviewed studies and society statements; treat manufacturer material as context only."*

## Next steps

- [Run a Literature Review](/guides/literature-review/) — the same rigor pointed at the indexed literature.
- [Finding Information](/tools/search-sources/) — all the knowledge sources and the tools behind them.
- [AI Hallucinations in Medicine — and How Grounding Prevents Them](/learn/hallucinations-and-grounding/) — why a cited answer beats a fluent one.
