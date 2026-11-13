---
title: "Research a question across the web"
navTitle: "Web research"
description: "Have Lumen search the web and read the top pages in full, then write a brief where every claim carries a [Source N] citation you can open and judge."
lead: "On Pro, Lumen can read several full web pages in one pass rather than only search results. You get an answer built from what those pages say, with a citation on every claim."
weight: 24
icon: globe
tier: pro
who: "clinicians, educators and committee members"
keywords: ["AI deep research clinical", "cited web research AI", "medical web search AI", "value analysis committee research"]
glance:
  what: "A step-by-step way to have Lumen research a question across many web sources and write a cited brief."
  who: "Clinicians, educators, value-analysis and product committee members who need a picture of what many sources say."
  why: "Some questions aren't answered in one place: society statements, safety notices, reviews and trials all matter. Lumen reads the full pages, keeps each one as a numbered source and tells you which claims rest on which source."
  needs: "Pro plan or higher for full-page web research. Web search must be allowed in Chat settings (it is by default). About 15 minutes."
  result: "A cited brief where each claim carries a [Source N] label, with the sources listed so you can open and judge each one."
---

Your value-analysis committee meets on Thursday to compare catheter securement methods: adhesive devices, subcutaneous anchors and sutures. The answer is spread across trials, reviews, society statements and safety notices. On Pro, Lumen can run **web research**. It searches the web and then reads the top pages in full, up to eight in one pass. Each page becomes a numbered source, and every claim in the answer carries a `[Source N]` label. You still judge the sources. Lumen makes it quick to see what each claim rests on.

## Before you start

- **Plan:** Pro or higher. On Free, Lumen can run a basic web search, but it can't read several full pages in one pass. See [Plans](/plans/).
- **Web search allowed.** It's on by default. To check, open {{< ui-path "Chat settings" "Web search" "Allow web search" >}} in the chat.
- **A question that needs many sources**, such as a comparison or "what's the current state of…". For a single fact, a normal question is faster.
- **No patient information.** Research questions don't need it.
- **Time:** about 15 minutes.

## How to research the question

{{< steps >}}
{{< step title="Ask for research, and say what it's for" >}}
Open a new chat. Type the question, say that you want sources read in full, and say who the brief is for. Then press **Send**:

{{< composer text="Research this across the web and read the main sources in full: how do dislodgement, catheter-related bloodstream infection and skin injury compare between adhesive securement devices, subcutaneous anchor securement and sutures for central venous catheters and PICCs? Include trials, systematic reviews, society standards and FDA safety communications. This is for a hospital value-analysis committee." >}}
{{< /step >}}
{{< step title="Watch the research run" >}}
You'll see **Researching the web**, then **Research complete**. Lumen may also run **Searching PubMed** for the published studies. The answer appears when the reading is done.
{{< /step >}}
{{< step title="Open the sources" >}}
Each claim ends with a label such as `[Source 3]`. The sources are listed below the answer. Open the ones that support the claims your committee will care most about.
{{< /step >}}
{{< step title="Ask Lumen to sort the sources" >}}
Ask what kind of source each one is:

{{< composer text="For each source you cited, say what kind it is: randomized trial, systematic review, observational study, society standard, regulator notice or manufacturer material. Then list which claims rest only on manufacturer material." >}}
{{< /step >}}
{{< step title="Make the brief" >}}
Type `Turn this into a one-page Word brief for the committee. Keep every citation with its claim and list the sources at the end.` Open the document card and click **Download**.
{{< /step >}}
{{< /steps >}}

## What you'll get

{{< screenshot src="chat-thinking-tools" alt="A Lumen answer showing a completed web research step and source citations" caption="A researched answer. Each claim carries a source label, and the sources are listed below it." url="lumen.intracav.ai" >}}
{{< chat-demo title="Sorting the sources" caption="Illustration. Source numbers and types are examples." >}}
{{< user >}}Which claims rest only on manufacturer material?{{< /user >}}
{{< lumen thought="5" tools="Research complete, Searched PubMed" sources="8" >}}
**By source type**

- Randomized trial: [Source 2]
- Systematic review: [Source 5]
- Society standard: [Source 1]
- FDA safety communication: [Source 6]
- Manufacturer material: [Source 7], [Source 8]

**Claims that rest only on manufacturer material**

- The claim that one adhesive device lowers skin injury rests only on [Source 7]. No trial or review I read reports it.

The dislodgement comparison is supported by a randomized trial and a review [Source 2], [Source 5]. I'd present that as evidence and the skin-injury claim as an open question.
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## Check the result

{{< lui-block title="Before the committee sees it" >}}
{{< lui-rows >}}
{{< lui-row type="check" title="Each key claim has a source label" body="A claim without a label is Lumen's own wording. Ask where it came from." >}}
{{< lui-row type="check" title="You've opened the sources behind the key claims" body="Check that the passage really says what the claim says." >}}
{{< lui-row type="check" title="Source types are labeled correctly" body="A vendor white paper isn't a review, even if it looks like one." >}}
{{< lui-row type="check" title="Paywalled papers are flagged" body="Lumen may have read only the abstract. Get the full text through your library." >}}
{{< lui-row type="check" title="Dates are current enough for your decision" >}}
{{< /lui-rows >}}
{{< /lui-block >}}

## Tips

- **Steer the sources.** Say `Prioritize peer-reviewed studies and society standards. Treat manufacturer material as background only.`
- **Ask for a quote.** If a claim looks too strong, ask `Quote the passage from Source 3 that supports this.`
- **Use a Specialist for the literature.** For a reproducible review of PubMed studies with quoted effects, see [Run a literature review](/guides/literature-review/).
- **Close the tab if you like.** The research runs on Lumen's servers and is there when you come back.

## Limits and safety

{{< callout type="safety" title="Web sources vary in quality" >}}
Lumen reads what it can reach on the public web. That can include trials, opinion pieces and marketing in the same pass. Citations show you where a claim came from. They don't make the source reliable. Check the key sources before you rely on the brief, and use your own judgment and your organization's policies.
{{< /callout >}}

- **Up to eight full pages per research pass.** Lumen may run more than one pass for a broad question.
- **Paywalled and login-only pages** can't be read in full. Pages that couldn't be read are reported.
- **Web search can be turned off** in **Chat settings**. If it's off, Lumen won't reach the web at all.

## FAQ

{{< faq question="What's the difference between web search and web research?" >}}
Web search returns a list of results and short snippets, and it's available on every plan. Web research, on Pro and higher, also reads the top pages in full and labels each one as a numbered source, so answers can draw on whole pages rather than snippets.
{{< /faq >}}
{{< faq question="Is there a button to start deep research?" >}}
No. Ask for research in plain words, as in the example prompt. Lumen uses web research when the question calls for it and your plan includes it.
{{< /faq >}}
{{< faq question="Can I trust the citations?" >}}
Each `[Source N]` label points to a page Lumen read. Open the source and check that it supports the claim. That check is what citations are for.
{{< /faq >}}

## Next steps

{{< related "/guides/literature-review/" "/chat/sources/" "/tools/search-sources/" "/plans/" >}}
