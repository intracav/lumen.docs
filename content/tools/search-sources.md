---
title: "Choose where Lumen looks"
navTitle: "Where Lumen looks"
description: "Turn Lumen's sources on or off for a chat: the clinical knowledge base, your documents, a folder's library, Knowledge Packs and the web."
lead: "Lumen searches before it answers. You decide which places it may search, from the Sources button in the composer and the web search setting."
weight: 1
icon: search
glance:
  what: "The controls that decide where Lumen looks for information before it answers: its clinical knowledge base, your own documents, Knowledge Packs and the web."
  who: "Anyone who uses Lumen chat."
  why: "So answers draw on the material you trust for this question, and nothing else."
  needs: "A Lumen account on any plan. About 2 minutes."
  result: "A chat that searches exactly the sources you chose, with each one cited."
---

Before Lumen writes an answer, it searches for material to base it on. By default it searches its clinical knowledge base, may fetch web pages when a question needs them, and uses any documents you attach. You can narrow or widen that for each chat. Whatever it uses is listed under the answer, so you can open it and check.

## Before you start

- You need a Lumen account on any plan.
- To search your own files, upload them first. See [Documents](/knowledge/documents/).
- To search a *Knowledge Pack* (a curated collection of documents Lumen can search), it must be turned on for you. See [Knowledge Packs](/knowledge/knowledge-packs/).

## How to choose your sources

{{< steps >}}
{{< step title="Open the Sources menu" >}}In the composer at the bottom of the chat, click **Sources**.{{< /step >}}
{{< step title="Turn sources on or off" >}}Use the switch beside each source:

- **Clinical knowledge base**: Intracav-curated literature and policies.
- **My Documents**: files you have uploaded.
- **Folder library**: documents shared in the folder this chat belongs to.
- Any **Included packs** or **Partner packs** you have access to.

To add more packs, click **Browse Knowledge Packs**.{{< /step >}}
{{< step title="Decide whether Lumen may use the web" >}}Open **Chat settings** in the composer, then find **Web search**. **Allow web search** is on by default. Turn it off to block all web requests during your chats.{{< /step >}}
{{< step title="Ask your question" >}}Send your message as usual. Lumen searches only the sources you left on.{{< /step >}}
{{< step title="Check what it used" >}}Open the sources listed under the answer. Each numbered citation links to the passage it came from. Web sources include the page address.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Policy question" caption="Illustration with fictional Harbor Valley Medical Center documents. Real answers cite real, checkable sources." >}}
{{< user >}}According to our central line policy, how often do we change a transparent CHG dressing?{{< /user >}}
{{< lumen tools="Documents searched" sources="2" >}}
Your policy says transparent dressings are changed **every 7 days**, or sooner if damp, loose or soiled {{< cite 1 >}}. Gauze dressings are changed every 2 days {{< cite 1 >}}. This matches the CDC recommendation for central venous catheters {{< cite 2 >}}.
{{< /lumen >}}
{{< /chat-demo >}}

## Good to know

- **Lumen uses the web on its own when it helps.** Leave web search on for recent news, conference reports or topics not in the knowledge base. Turn it off if your organization asks you to keep chats from making outside requests.
- **Deeper web research is separate.** Reading many pages in depth, crawling a site or extracting structured data from pages needs **Pro** or above. Basic web search is free. See [Research and evidence](/tools/literature-research/).
- **Attachments are always read.** A file you attach to a message is used for that message, whatever your Sources settings are.

## Limits and safety

- Lumen can only cite what it found. If none of your chosen sources covers a question, it should say so. Treat any statement without a citation with extra care.
- Turning off the clinical knowledge base doesn't stop Lumen from using its general training. Check every clinical claim against the cited source.
- Don't upload documents you're not permitted to share. See [Privacy and data](/trust/privacy/).

## FAQ

{{< faq question="Does turning off web search make answers less accurate?" >}}
Not for questions your other sources cover. It mostly affects very recent information. If Lumen can't find support in the sources you allowed, it should tell you.
{{< /faq >}}
{{< faq question="Can I make Lumen use only my own documents?" >}}
Yes. Turn off **Clinical knowledge base** and any packs in **Sources**, turn off **Allow web search**, and leave **My Documents** or **Folder library** on.
{{< /faq >}}
{{< faq question="Where do I see which sources were used?" >}}
Below each answer. Numbered citations in the text match the listed sources. See [Where answers come from](/chat/sources/).
{{< /faq >}}

## Next steps

{{< related "/chat/sources/" "/knowledge/documents/" "/knowledge/knowledge-packs/" "/tools/literature-research/" >}}
