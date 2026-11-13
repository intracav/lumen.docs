---
title: "Lumen Pilot"
navTitle: "Pilot"
description: "Have Lumen show you around the app, or do the clicks for you once you confirm."
lead: "Lumen Pilot is the assistant for Lumen itself. Ask how to do something and it shows you, or let it carry out the steps in the app after you approve its plan."
weight: 15
group: use
icon: navigation
cascade:
  audience: clinician
hideAutoGrid: true
---

**Lumen Pilot** helps you use the Lumen app. It reads the screen you're on, answers questions about it, points at the right button and opens the right page. If you allow it, Pilot can also do the work in the app for you, such as setting up a Live knowledge check, but only after you've reviewed and approved its plan.

Pilot works inside the app you have open, with your own permissions. It isn't a background worker: you watch every step, and you can stop it at any time.

{{< screenshot src="guide-panel" alt="The Lumen Pilot panel open beside a Lumen screen, on the Ask tab" caption="The Lumen Pilot panel, with its Ask, Map and Help tabs." url="lumen.intracav.ai" >}}
{{< chat-demo title="Lumen Pilot" caption="Illustration of the Pilot panel with a fictional request." >}}
{{< user >}}How do I start a knowledge check for my ICU staff?{{< /user >}}
{{< lumen >}}
Open **Live** from the sidebar, under **More**. Start a new session and add a knowledge check. I can point at each control as you go, or set it up for you if you switch to **Do it**.
{{< follow-ups "Show me around|What can I do here?|Point at something on screen" >}}
{{< /lumen >}}
{{< /chat-demo >}}
{{< /screenshot >}}

## What you can do with Pilot

{{< card-grid cols="2" >}}
{{< card title="Show me and Do it" href="/pilot/show-me-and-do-it/" icon="navigation" tint="accent" >}}Ask Pilot to show you the way, or let it do the clicks once you approve its plan.{{< /card >}}
{{< card title="The feature map" href="/pilot/feature-map/" icon="map" tint="blue" >}}See every part of Lumen, what it's for, and what's open to you, in one place.{{< /card >}}
{{< card title="Your phone as a remote" href="/pilot/satellite/" icon="smartphone" tint="green" >}}Pair your phone to point, tap and approve Pilot plans on your computer screen.{{< /card >}}
{{< card title="Talk to Pilot" href="/pilot/voice/" icon="mic" tint="plum" badge="experimental" >}}Speak to Pilot, and the experimental always-listening mode, Young Lumen.{{< /card >}}
{{< /card-grid >}}

## How Pilot keeps you in control

- **Show me never changes anything.** At the **Show me** level, Pilot answers, points and opens screens. That's all.
- **Nothing runs until you press Run.** At the **Do it** level, Pilot shows its plan first. You choose **Run** or **Cancel**.
- **Some controls are off limits.** Pilot won't press controls that delete, publish, pay, sign, approve or change account ownership, even with your approval. The app and the server both check this.
- **It's your session.** Pilot can only do what you can do in the app, and it works where you can see it. Close the app and it stops.

## FAQ

{{< faq question="Is Pilot the same as asking a question in chat?" >}}
No. Chat answers clinical and work questions. Pilot helps you use the Lumen app itself: where things are, how they work, and doing steps in the app for you. To find a specialist, skill or tool for a task, start from [Explore](/skills-and-specialists/explore/).
{{< /faq >}}
{{< faq question="Does Pilot keep working if I close Lumen?" >}}
No. Pilot runs in the app you have open. If you close it, Pilot stops. Long specialist work runs on Lumen's servers instead; see [Working with a specialist](/skills-and-specialists/working-with-a-specialist/).
{{< /faq >}}

## Next steps

{{< related "/pilot/show-me-and-do-it/" "/pilot/feature-map/" "/pilot/satellite/" "/getting-started/first-chat/" >}}
