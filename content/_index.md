---
title: "Lumen Docs"
description: "Plain-language guides to Lumen, the clinical AI workspace by Intracav: cited answers, specialists, knowledge, qPolicy and Lumen Connect, step by step."
---

{{< screenshot src="chat-cited-answer" alt="Lumen answering a clinical question with numbered citations and the sources panel open" url="lumen.intracav.ai" >}}
{{< chat-demo title="Warfarin and amiodarone" caption="What a Lumen answer looks like. The example is fictional; real answers cite real, checkable sources." >}}
{{< user >}}72-year-old on warfarin, INR stable at 2.4. Cardiology is starting amiodarone. What should I watch for?{{< /user >}}
{{< lumen thought="5" tools="Drug interactions, Clinical guidelines" sources="4" evidence="true" >}}
**This is a major interaction.** Amiodarone slows how the body clears warfarin, so the INR usually rises over the following weeks {{< cite 1 >}} {{< cite 2 >}}.

- **Expect** the INR to climb, often peaking several weeks after amiodarone starts {{< cite 2 >}}.
- **Common practice** is to lower the warfarin dose when amiodarone begins and check the INR more often until it is stable {{< cite 3 >}}.
- **Watch for** bleeding signs, and share the plan with the anticoagulation clinic {{< cite 4 >}}.

{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}
