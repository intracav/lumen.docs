---
title: "RAG: how AI cites real sources"
navTitle: "RAG and citations"
description: "Retrieval-augmented generation explained for clinicians: how AI pulls real documents before answering, why citations matter, and what RAG can't do."
lead: "You'd never present on rounds from memory alone. RAG makes an AI pull the chart first, then answer from what it found, with a citation for each claim."
weight: 3
icon: quote
keywords: ["retrieval augmented generation healthcare", "RAG explained for clinicians", "how AI cites medical sources"]
glance:
  what: "Retrieval-augmented generation (RAG) means the AI first finds relevant passages in trusted sources, then writes its answer from them and cites each one."
  who: "Clinicians, educators, policy owners and anyone who needs to check where an AI answer came from."
  why: "So you can verify an answer in seconds by opening the passage it came from, and so answers can use your own documents."
  needs: "Nothing to read this page. Citations appear in every Lumen chat on every plan."
  result: "You'll know how Lumen finds its sources, how to read a citation and what an empty result means."
---

Before you present a patient on rounds, you pull the chart: overnight events, the latest labs, the consultant's note. When the attending asks "what was the creatinine?", you point to the value, not your impression of it. **Retrieval-augmented generation**, or {{< term "RAG" >}}, puts an AI under the same rule. Before it answers, it retrieves the relevant passages from trusted sources. Then it writes the answer from those passages and cites each one, so you can check it.

## The problem RAG solves

A language model with no retrieval answers every question from its training memory. That leaves three gaps:

- It has never seen **your** documents: your protocols, your formulary, your unit's policies.
- Its training stops at a **cutoff date**. Guidance published after that isn't in it.
- Its memory **reconstructs**. It can blend two similar guidelines into one confident, wrong answer.

RAG closes all three, because the answer is built from documents fetched when you ask, including documents only your organization holds.

## How it works

{{< flow >}}
{{< flow-node kicker="You ask" title="In your own words" icon="message" tint="blue" >}}No keywords needed.{{< /flow-node >}}
{{< flow-node kicker="Retrieve" title="Find matching passages" icon="search" tint="plum" >}}Search by meaning across trusted sources.{{< /flow-node >}}
{{< flow-node kicker="Answer" title="Written from the passages" icon="pencil" tint="accent" >}}The model answers from what was found.{{< /flow-node >}}
{{< flow-node kicker="Cite" title="Sources you can open" icon="quote" tint="green" >}}Each claim links to its passage.{{< /flow-node >}}
{{< /flow >}}

The search works by **meaning**, not exact words. Every document is read in advance and indexed by what it's about. So "blood thinner after a fall-risk assessment" finds the anticoagulation guideline even if the guideline never uses those words. Think of a good librarian who understands what you meant, not which words you used. The passages that match best are handed to the model with one instruction: answer from these, and cite them.

## How Lumen does it

Depending on your question and your account, Lumen retrieves from:

- **Clinical sources:** guidelines, drug labels, PubMed, ClinicalTrials.gov and other clinical databases, through its [tools](/learn/tool-use/).
- **Your documents:** files you've uploaded or attached to the message.
- **Your team's knowledge:** *Knowledge Packs*, curated collections of documents your organization (called a *team* in Lumen) has turned on, and, for teams with qPolicy, your own policy manual.
- **Your memory notes**, if you use them. See [How AI memory works](/learn/ai-memory/).
- **The web**, when the question needs it.

{{< chat-demo title="Unit protocol question" caption="Illustration with fictional Harbor Valley Medical Center documents. Real answers cite real, checkable passages." >}}
{{< user >}}How often do we change transparent dressings on PICC lines?{{< /user >}}
{{< lumen thought="3" sources="2" evidence="true" >}}
Harbor Valley's Vascular Access policy says to change transparent semipermeable dressings **every 7 days**, or sooner if the dressing is damp, loose or soiled {{< cite 1 >}}. That matches the national standard the policy references {{< cite 2 >}}.

Open the policy to confirm you're reading the current version.
{{< /lumen >}}
{{< /chat-demo >}}

Lumen also checks its own citations. If the answer cites a source number that wasn't among the passages Lumen actually retrieved, that citation is removed before you see it. The **Lumen Evidence** pill under an answer shows how well the cited sources support it, and says how many sources it checked against. Open any source to read the original passage.

The [website assistant](/connect/website-assistant/) that device makers put on their sites uses the same approach with a strict rule: if no passage in the maker's documents matches closely enough, it says the documentation doesn't cover the question instead of answering. Its citations show the document and the page number.

## What this means for you

- **Verification takes seconds.** Open the source and read the paragraph instead of redoing the search.
- **Fluency stops counting.** A citation turns "does this sound right?" into "does the source say this?", a question you're trained to answer.
- **Your own documents count.** "What's our dressing-change policy?" can be answered from *your* policy, which no model's training could contain.
- **"No source found" is honest.** When retrieval comes back empty, a good answer says so. Treat a confident claim with no citation as the thing to question, not the empty-handed reply.

## Limits and safety

- **RAG is only as good as what it can search.** If your protocol isn't uploaded or the pack isn't turned on, Lumen can't cite it.
- **A citation can still be misread.** The model can summarize a correct passage incorrectly. Read the passage, not only the summary.
- **Sources can be out of date or disagree.** Check the version and date of what's cited, and look at both sides when sources conflict.
- **Search can fail.** If Lumen's search is unavailable, you'll see **Knowledge base unavailable — composing from memory** while it answers. Treat that answer as uncited.

{{< callout type="safety" title="Read the source before you rely on it" >}}
A citation is a pointer, not a guarantee. Open it, confirm it says what the answer says, and check it against your organization's policies before acting.
{{< /callout >}}

## FAQ

{{< faq question="Does RAG stop AI from making things up?" >}}
No. It makes errors much less likely for questions the sources cover, and it makes the remaining errors easier to catch, because each claim points to a passage you can open. See [Hallucinations and grounding](/learn/hallucinations-and-grounding/).
{{< /faq >}}
{{< faq question="Can Lumen cite my hospital's own protocols?" >}}
Yes, if they're in something Lumen can search: documents you've uploaded or attached, a Knowledge Pack your team has turned on, or your policy manual in qPolicy.
{{< /faq >}}
{{< faq question="Why did I get an answer with no sources?" >}}
Either nothing relevant was found, or the question didn't need a lookup. If you expected a document to be cited, check that it finished indexing, or attach it to your message. See [Troubleshooting](/help/troubleshooting/).
{{< /faq >}}

## Next steps

{{< related "/chat/sources/" "/learn/hallucinations-and-grounding/" "/knowledge/knowledge-packs/" "/knowledge/documents/" >}}
