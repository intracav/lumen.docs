---
title: "Ask your first question"
navTitle: "Your first question"
description: "Sign in to Lumen, ask a clinical question in plain words, and learn to read the answer: the tool chips, the citations and the sources."
lead: "If you can send a text message, you can use Lumen. This page takes you from signing in to checking your first cited answer."
weight: 2
icon: message
glance:
  what: "Your first conversation with Lumen: you ask a question in plain words, and Lumen answers with sources you can open and check."
  who: "Anyone new to Lumen: clinicians, staff, and people evaluating it for a hospital or a device company."
  why: "Learning to read one answer, including where it came from, is the skill everything else in Lumen builds on."
  needs: "A web browser and a free account at lumen.intracav.ai. About 5 minutes."
  result: "A cited answer, and the habit of opening a source before you rely on it."
---

Think of a question you'd normally look up or ask a colleague. Type it into Lumen the way you'd say it. Lumen looks the answer up in clinical sources, writes a reply, and numbers each claim so you can open the passage it came from. Learn to read that one answer and you know how most of Lumen works.

## Before you start

- **An account.** Go to [lumen.intracav.ai](https://lumen.intracav.ai) and sign up. The Free plan is enough for this page.
- **A question.** Pick something you can judge, so you can see how Lumen handles it. A dosing, policy or practice question works well.
- **No patient identifiers.** Don't type names, dates of birth or record numbers. Lumen doesn't need them to answer.

## How to ask your first question

{{< steps >}}
{{< step title="Sign in and finish the welcome" >}}
The first time you sign in, Lumen shows **Welcome to Lumen** and asks how you'll use it. Choose **Healthcare professional**, **Student**, **Managing my health** or **Medical device or pharma company**. You can change this later. Lumen then shows a sample answer under **Lumen in action**. Click **Start using Lumen**, then **Start chatting**.
{{< /step >}}
{{< step title="Start a new chat" >}}
Click **New Chat** at the top of the sidebar. The message box at the bottom says **Ask Lumen**.
{{< /step >}}
{{< step title="Type your question" >}}
Write it as you'd ask a colleague. You don't need special wording. For example:

*"How often should a peripheral IV be replaced in an adult if the site looks fine?"*

Press {{< kbd "Shift" "Enter" >}} if you want a new line.
{{< /step >}}
{{< step title="Send it" >}}
Press {{< kbd "Enter" >}}, or click the send arrow. While Lumen works, the send button becomes a stop button (**Stop generating**). You can start reading as soon as the first words appear.
{{< /step >}}
{{< step title="Watch what Lumen does" >}}
Above the answer, Lumen shows its working. **Tool chips**, such as **Searched PubMed** or **Guidelines retrieved**, show which lookups it ran. When it's done, this folds into one line, such as **Thought for 6s · Used 2 tools**. Click the line to open it again.
{{< /step >}}
{{< step title="Open a source" >}}
Numbers in the answer are citations. Below the answer, click the **sources** pill (for example, **3 sources**) to see the list, or **View all** to open the sources panel. Click **View original** to read the passage Lumen used. Check that it says what the answer says.
{{< /step >}}
{{< step title="Ask a follow-up" >}}
Keep going in the same chat: *"What does our policy say?"* or *"Make that a one-page handout for new nurses."* Lumen remembers what you said earlier in the chat.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="chat-cited-answer" alt="A Lumen answer about peripheral IV replacement with numbered citations and a sources pill below" caption="A cited answer. Each number links to a passage in the sources listed below the answer." url="lumen.intracav.ai/chat" >}}
{{< chat-demo title="Peripheral IV replacement" caption="Illustration of a Lumen answer. Real answers cite real, checkable sources." >}}
{{< user >}}How often should a peripheral IV be replaced in an adult if the site looks fine?{{< /user >}}
{{< lumen thought="6" tools="Guidelines retrieved, Searched PubMed" sources="3" >}}
Current practice is to **replace a peripheral IV when there's a clinical reason**, not on a fixed schedule {{< cite 1 >}}.

- Infusion nursing standards recommend removing a peripheral catheter when it's no longer needed or shows signs of a complication, such as phlebitis, infiltration or occlusion {{< cite 1 >}}.
- The CDC guideline says adult peripheral catheters don't need to be replaced more often than every 72–96 hours, and treats routine versus clinically indicated replacement as an open question {{< cite 2 >}}.
- A Cochrane review found no clear difference in phlebitis or bloodstream infection between the two approaches {{< cite 3 >}}.

Assess the site at least once a shift, and follow your organization's policy.

{{< follow-ups "What signs mean the IV should come out?|What does our policy say?|Make a one-page handout for new nurses" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

Here's what each part of the answer is for:

| Part | What it tells you |
|---|---|
| **Thought for 6s · Used 2 tools** | Lumen reasoned and ran lookups. Click it to see each step. |
| **Numbered citations** | Which source supports each statement. |
| **3 sources** pill | The sources Lumen used. Click it to list them, or **View all** to open the panel. |
| Evidence grade, such as **Strong support** | When it appears, it shows how well the cited passages support the answer. Click it to see each statement Lumen checked. |
| **Copy**, **Regenerate**, **Helpful** / **Not helpful**, **Share** | Actions for the reply. They appear below it. |

## Tips

- **Give context.** "68-year-old on apixaban, dental extraction tomorrow" gets a better answer than "apixaban dental."
- **Ask for the format you want.** "As a table," "in three bullets" or "at a 6th-grade reading level."
- **Your chats are saved.** They're listed in the sidebar, and you can find older ones under **All history** in the **More** menu. Press {{< kbd "⌘" "K" >}} (or {{< kbd "Ctrl" "K" >}}) to open your history and search it.
- **Close the tab if you need to.** Lumen keeps working on its server. The answer is there when you come back, on any device.

## Limits and safety

- Lumen can be wrong, or cite a source that doesn't say quite what the answer says. That's why every answer shows its sources.
- If Lumen can't find support for something, it should say so. Treat any uncited clinical statement with extra care.
- Lumen answers from published sources and anything you give it. It doesn't know your patient or your organization's policies unless you or your team have added them.

{{< callout type="safety" title="Check the source before you act" >}}
Lumen supports clinical judgment. It doesn't replace it. Open the cited sources, check them against your organization's policies, and use your professional judgment.
{{< /callout >}}

## FAQ

{{< faq question="Do I need to word my question a special way?" >}}
No. Write it the way you'd ask a colleague. More detail usually gets a more useful answer.
{{< /faq >}}
{{< faq question="Can I stop an answer partway through?" >}}
Yes. Click the stop button (**Stop generating**) while Lumen is writing. What it has written so far stays in the chat.
{{< /faq >}}
{{< faq question="Where do my chats go?" >}}
They're saved to your account and listed in the sidebar. Open **More** > **All history** to see everything, or press {{< kbd "⌘" "K" >}} to search.
{{< /faq >}}
{{< faq question="Is it safe to type patient details?" >}}
Type only what you're permitted to share, and leave out identifiers. See [Privacy and data](/trust/privacy/).
{{< /faq >}}

## Next steps

{{< related "/getting-started/tour/" "/chat/sources/" "/getting-started/check-interaction/" "/chat/sending-messages/" >}}
