---
title: "Check where an answer came from"
navTitle: "Sources and citations"
description: "How Lumen cites its sources, how to open the passage behind a claim, what the match score and the evidence grade mean, and where sources come from."
lead: "Every clinical answer should be checkable. Here's how to open the passage behind any statement in a Lumen answer, and how to judge it."
weight: 3
icon: quote
glance:
  what: "Lumen numbers each claim in an answer and lists the sources it used, so you can open the original passage."
  who: "Everyone who uses Lumen chat, and anyone deciding whether to trust it."
  why: "Checking the source is how you catch a wrong or overstated answer before it reaches a patient."
  needs: "A Lumen account. About 4 minutes to read."
  result: "You'll be able to open any citation, read the passage, and judge how well it supports the answer."
---

Lumen doesn't ask you to take its word for anything. When it answers, it numbers the statements that came from a source and lists those sources under the answer. Open one and you see the passage Lumen used and a link to the original. When Lumen has checked its statements against those passages, it also shows how well they hold up.

## Before you start

Ask a clinical question in a chat. Answers that use lookups, documents or the web come with sources.

## How to check a source

{{< steps >}}
{{< step title="Find the citation" >}}
In the answer, look for the number after the statement you want to check.
{{< /step >}}
{{< step title="Open the sources list" >}}
Under the answer, click the sources pill, for example **4 sources**. The list opens below the answer.
{{< /step >}}
{{< step title="Open the sources panel" >}}
Click **View all** to open the **Sources** panel beside the chat. Each source shows its title, where it's from, a match score and a **Key excerpt**.
{{< /step >}}
{{< step title="Read the original" >}}
Click **View original** to open the source itself: the web page, the article, the document or the policy.
{{< /step >}}
{{< step title="Compare" >}}
Check that the passage says what the answer says, for the same population and situation. If it doesn't, don't rely on that statement.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="chat-cited-answer" alt="A Lumen answer with numbered citations and the sources panel open beside it" caption="The sources panel lists each source with a key excerpt and a link to the original." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Chlorhexidine bathing" caption="Illustration. Source titles and excerpts are examples." >}}
{{< user >}}Does daily chlorhexidine bathing in the ICU reduce central line infections?{{< /user >}}
{{< lumen tools="Searched PubMed, Guidelines retrieved" sources="2" evidence="true" >}}
Yes. Daily bathing with chlorhexidine gluconate (CHG) is recommended for ICU patients to reduce central line–associated bloodstream infections {{< cite 1 >}}. A large cluster-randomized trial found fewer bloodstream infections with universal decolonization, including daily CHG bathing, than with screening and isolation {{< cite 2 >}}.
{{< /lumen >}}
{{< /chat-demo >}}
{{< sources >}}
{{< source n="1" title="Strategies to prevent central line-associated bloodstream infections in acute-care hospitals: 2022 update" meta="SHEA/IDSA/APIC · Practice recommendation · 2022" quote="Bathe ICU patients over 2 months of age with a chlorhexidine preparation on a daily basis." >}}Essential practices for CLABSI prevention.{{< /source >}}
{{< source n="2" title="Targeted versus universal decolonization to prevent ICU infection" meta="N Engl J Med · Randomized trial · 2013" quote="Universal decolonization was more effective than targeted decolonization or screening and isolation in reducing rates of MRSA clinical isolates and bloodstream infection from any pathogen." >}}REDUCE MRSA trial.{{< /source >}}
{{< /sources >}}
{{< /screenshot >}}

## What the scores mean

**Match score.** Each source in the panel shows a match percentage. It's how closely the passage relates to your question, based on how Lumen searched. A high match means the passage is on topic. It doesn't mean the passage is high-quality evidence, or that it agrees with the answer.

**Evidence grade.** When Lumen has checked its statements against the cited passages, the footer shows a grade: **Strong support**, **Moderate support**, **Limited support** or **Ungraded**. Click it to open **Lumen Evidence**, which explains how well the cited sources support this answer. Each statement is marked, for example **Verified in the cited passage** or **Not found in the cited passage**.

## Where sources come from

Depending on your question and your settings, sources can include:

- **Clinical lookups:** drug labels, drug vocabularies, code sets, calculators, coverage policies and trial registries.
- **Literature:** PubMed, ClinicalTrials.gov and published guidelines.
- **The clinical knowledge base:** Intracav-curated clinical literature and policies.
- **The web**, when **Allow web search** is on. Web sources show their address.
- **Your own material:** files in **My Documents**, files attached to the chat, and notes in your memory.
- **Your team's material:** Knowledge Packs your team has turned on and, where your organization uses qPolicy, your own policy manual. (Lumen calls an organization a *team*.)

Choose which of these Lumen searches with the **Sources** chip under the message box. See [Write and send a message](/chat/sending-messages/).

## Tips

- **Read the excerpt first.** The **Key excerpt** usually tells you in seconds whether a source supports the claim.
- **Check the date and type.** A 2022 guideline outranks a 2009 review. A trial in adults may not apply to children.
- **Ask Lumen directly.** *"Which source supports the dosing statement, and what exactly does it say?"*
- **Missing a source you expected?** Check that it's turned on in the **Sources** menu, or attach it.

## Limits and safety

- A citation shows where a statement came from. It doesn't make the statement right for your patient.
- Lumen can still cite a source that's real but doesn't fully support what it wrote. The evidence grade helps catch this, but reading the passage is the real check.
- Statements without a citation came from Lumen's general training, not a source it read. Be most careful with these.
- Web sources vary in quality. Prefer guidelines, labels and peer-reviewed sources for clinical decisions.

{{< callout type="safety" title="Open the source before you rely on it" >}}
For any statement that affects patient care, open the cited passage and confirm it says what the answer says. Follow your organization's policies where they differ.
{{< /callout >}}

## FAQ

{{< faq question="Does a high match score mean the source is reliable?" >}}
No. The match score shows how relevant a passage is to your question. Judge reliability from the source itself: who published it, when, and what kind of evidence it is.
{{< /faq >}}
{{< faq question="What does Lumen Evidence check?" >}}
It checks whether each statement in the answer can be found in the passage it cites, and grades how well the sources support the answer overall. It doesn't judge whether the sources themselves are correct.
{{< /faq >}}
{{< faq question="Can Lumen cite my hospital's own documents?" >}}
Yes, if they're in **My Documents**, attached to the chat, or in a Knowledge Pack your team has turned on. Organizations using qPolicy also get answers from their own policy manual.
{{< /faq >}}

## Next steps

{{< related "/chat/responses/" "/chat/attachments/" "/knowledge/knowledge-packs/" "/learn/rag-and-citations/" >}}
