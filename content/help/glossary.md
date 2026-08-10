---
title: "Clinical AI Glossary"
description: "Every AI term you'll meet in Lumen — RAG, hallucination, token, FHIR, embeddings — defined in plain language for clinicians."
lead: "The vocabulary of clinical AI, translated. Two or three sentences per term, no computer science required."
weight: 2
---

Bookmark this page. Every term links back to the part of Lumen where you can watch the concept work.

### AI agent

An AI that doesn't just answer — it acts: it can plan a task, use tools, check its own results, and keep going until the job is done. In Lumen, agents are simply chats running in agent mode, so the whole process stays visible in the conversation. See [what Lumen can do](/tools/).

### Agentic loop

The cycle an [AI agent](#ai-agent) runs: decide the next step, use a tool, read the result, decide again. Like working through a differential — order a test, interpret it, refine, repeat — until the loop lands on an answer worth giving you.

### Artifact

A standalone piece of work Lumen produces beside the conversation — a document, a table, a formatted handout — that you can edit and export rather than copy-paste from chat. Details in [Artifacts](/chat/artifacts/).

### Citation (grounding)

The link between a claim in Lumen's answer and the source that supports it. Grounding is the practice of building answers from retrievable sources instead of the model's unaided recall — the difference between a referenced review and a hallway opinion. See [RAG and citations](/learn/rag-and-citations/).

### Context window

The amount of text a model can "hold in mind" at once — the conversation, your documents, its instructions. Like working memory on a busy service: finite, so what's included must be chosen well. Measured in [tokens](#token).

### De-identification

Stripping patient identifiers — names, dates, MRNs, addresses — from text and replacing them with consistent pseudonyms, so the clinical picture survives but the identity doesn't. Lumen has [dedicated tools for this](/tools/privacy/); use them before pasting any patient scenario.

### Embedding

A numeric fingerprint of a piece of text that captures its *meaning*, so that "MI" and "myocardial infarction" land near each other even though they share no letters. Embeddings are what make [vector search](#vector-search) possible.

### Extended thinking

A mode where the model reasons for longer before answering — working the problem stepwise rather than replying reflexively. Lumen uses it for questions that deserve deliberation; see [thinking in chat](/chat/thinking/).

### FHIR

Fast Healthcare Interoperability Resources — the modern standard for exchanging healthcare data, defining common shapes for patients, medications, labs, and more. It's the lingua franca that lets Lumen's EHR connection speak to clinical systems. See also [SMART on FHIR](#smart-on-fhir).

### Function calling (tool use)

The mechanism by which a model uses a tool: instead of guessing a drug interaction from memory, it *calls* the interaction checker and reads the result. This is why Lumen can be current and precise where a bare model would approximate. Browse the [tool library](/tools/).

### Hallucination

A fluent, confident, incorrect statement from an AI model — confabulation with good grammar. Grounding and citations reduce it sharply but nothing eliminates it, which is why Lumen shows its sources. Honest detail in [hallucinations and grounding](/learn/hallucinations-and-grounding/).

### Harness

The software around the model that turns it into a working assistant — managing the conversation, offering tools, enforcing limits, streaming results. The model is the engine; the harness is the rest of the vehicle.

### Knowledge Pack

A curated, version-pinned collection of clinical content — protocols, guidelines, product documentation — that Lumen treats as a first-class citable source. Organizations on Max administer their own. See [Knowledge Packs](/knowledge/knowledge-packs/).

### LLM (large language model)

The AI at Lumen's core: a model trained on vast amounts of text that predicts language well enough to reason with it. Powerful but not self-sufficient — Lumen surrounds it with retrieval, tools, and citations so its fluency stays tethered to evidence.

### MCP (Model Context Protocol)

An open standard that lets AI systems connect to external tools and data sources through a common plug — think of it as a universal adapter for AI capabilities. Lumen uses it to reach certain specialized external tools, and [exposes an MCP server for developers](/developers/).

### Memory

The small set of durable facts Lumen keeps about how you work — your specialty, your formatting preferences — so each chat doesn't start from zero. Per-workspace, and fully yours to inspect, add to, or erase. See [memory in chat](/chat/memory/).

### Prompt

What you send the model — your question plus any framing. Prompting well is like presenting a case well: the right context up front gets a sharper answer back. The [getting started scenarios](/getting-started/) show effective prompts for real tasks.

### RAG (retrieval-augmented generation)

The architecture behind grounded answers: first *retrieve* relevant passages from trusted sources, then have the model *generate* its answer from those passages — citing them. It's the difference between answering from the chart and answering from memory. Full explanation in [RAG and citations](/learn/rag-and-citations/).

### Skill

A Lumen capability you invoke with `/` that shapes output into a specific document or workflow — a discharge summary, a prior auth letter, a journal-club appraisal. Skills are the "order set" to chat's free text. See [Specialists & Skills](/skills-and-specialists/).

### SMART on FHIR

The healthcare standard for launching apps inside an EHR securely, built on [FHIR](#fhir). It's what allows Lumen's EHR connection to work within your existing clinical systems rather than beside them. Available on organization plans — see [Plans](/plans/).

### Specialist

A focused expert mode you summon with `@` — a clinical scribe, a research advisor, an insurance specialist. Same Lumen, narrowed and deepened for one domain, like paging the right consult service. See [Specialists](/skills-and-specialists/specialists/).

### SSE (streaming)

Server-Sent Events — the mechanism that lets Lumen's answer appear word by word as it's generated instead of arriving all at once. That live text you watch typing itself out is streaming at work.

### Token

The unit models actually read and write — roughly three-quarters of a word in English. Limits like the [context window](#context-window) are measured in tokens, which is why very long documents are chunked before the model sees them.

### Vector search

Finding text by meaning instead of keywords, using [embeddings](#embedding): a search for "clot prevention after hip replacement" finds passages about post-arthroplasty VTE prophylaxis. It's the retrieval half of [RAG](#rag-retrieval-augmented-generation).

### Website Bot

A Lumen-powered assistant embedded on your organization's own website, grounded in your content and answering with the same citation discipline. A Max-plan capability — see [For Organizations](/organizations/).

### Workflow

A reusable, multi-step automation you build once and run on demand — retrieve, analyze, format, deliver — with each step feeding the next. Build them in the [workflow editor](/workflows/).

## Next steps

- [Learn: AI concepts for clinicians](/learn/)
- [Lumen FAQ](/help/faq/)
- [Getting started scenarios](/getting-started/)
