---
title: "Plans"
navTitle: "Plans"
description: "Compare Lumen's Free, Pro, Plus and Max plans by feature, see which features need a team, and learn how seats and the qPolicy add-on work."
lead: "Lumen has four plans. Free and Pro are for individuals. Plus and Max are team plans for departments, hospitals and device makers. This page compares them by feature. Prices are on intracav.ai."
weight: 52
schema: software
group: more
icon: credit-card
cascade:
  audience: all
glance:
  what: "A side-by-side comparison of Lumen's four plans (Free, Pro, Plus and Max), the qPolicy add-on, and which features need a team account."
  who: "Anyone choosing a plan: individual clinicians, department leads, hospital administrators, device makers and procurement teams."
  why: "To pick the lowest plan that has what you need, and to know before you buy which features need a team or a conversation with Intracav."
  needs: "Nothing. To change plans, a Lumen account. To buy a team plan, you need to be the team's owner. About 5 minutes."
  result: "The right plan for you or your organization, and how to switch to it."
hideAutoGrid: true
---

Every Lumen plan gives you the same thing at its core: answers with sources you can open and check. Higher plans add tools, a more capable model, and the features a team needs to share knowledge and govern how Lumen is used. For current prices, see [intracav.ai](https://intracav.ai).

## Which plan fits

{{< card-grid cols="2" >}}
{{< card title="Free" icon="user" tint="blue" kicker="To try Lumen" >}}Cited clinical answers, specialists, skills and the core clinical tools. No payment details needed.{{< /card >}}
{{< card title="Pro" icon="stethoscope" tint="plum" kicker="For one clinician, every day" >}}Everything in Free, plus deep web research, trial search, de-identification, email with approval, Research and higher usage.{{< /card >}}
{{< card title="Plus" icon="users" tint="green" kicker="For a department" >}}A team plan. Seats, shared folders and departments, admin controls, an EHR connection and a more capable model, with usage pooled across the team.{{< /card >}}
{{< card title="Max" icon="building" tint="accent" kicker="For a hospital, health system or device maker" >}}Everything in Plus, plus Knowledge Pack administration, quick-share links, Super User, Smart IFU pages, and the qPolicy add-on.{{< /card >}}
{{< /card-grid >}}

## Compare plans

A dash (—) means the plan doesn't include the feature. "Team" means the feature belongs to a team account (Plus or Max) rather than to one person.

| Feature | Free | Pro | Plus | Max |
|---|---|---|---|---|
| [Cited answers in chat](/chat/) | Yes | Yes | Yes | Yes |
| [Specialists and skills](/skills-and-specialists/) | Yes | Yes | Yes | Yes |
| Core clinical tools: drug interactions, renal dosing, calculators, codes, PubMed | Yes | Yes | Yes | Yes |
| [Document exports](/tools/document-generation/) (Word, PDF, slides, spreadsheets) | Yes | Yes | Yes | Yes |
| [Pilot](/pilot/) | Yes | Yes | Yes | Yes |
| Deep web research, clinical trial search, FHIR lookups | — | Yes | Yes | Yes |
| [De-identification tool](/tools/privacy/) | — | Yes | Yes | Yes |
| Send email (after your approval), run a workflow from chat | — | Yes | Yes | Yes |
| Browser extension tools | — | Yes | Yes | Yes |
| [Research](/research/) workspace | — | Yes | Yes | Yes |
| Model | Standard | Standard | More capable | More capable |
| Seats for your team, with usage pooled across them | — | — | Team | Team |
| Shared [folders](/knowledge/folders/) and departments | — | — | Team | Team |
| Admin controls and usage dashboard | — | — | Team | Team |
| Clinical Educator specialist | — | — | Team | Team |
| [EHR connection](/organizations/ehr/) (SMART on FHIR) | — | — | Team | Team |
| [Knowledge Pack](/knowledge/knowledge-packs/) administration | — | — | — | Team |
| Quick-share links for guests | — | — | — | Team |
| [Super User](/organizations/super-user/) (admin assistant) | — | — | — | Team |
| [Smart IFU pages](/connect/smart-ifu/), self-serve | — | — | — | Team |
| [qPolicy](/qpolicy/) | — | — | — | Add-on |

**Lumen picks the model by plan.** Free and Pro use one model, and Plus and Max use a more capable one. You don't choose between AI providers. See [Models](/chat/models/).

### Features that Intracav turns on for a team

Some features aren't tied to a plan. Intracav turns them on for the team that needs them:

- **[Website assistants](/connect/website-assistant/)** are on by default for teams set up as device makers. For other teams, Intracav turns them on.
- **Smart IFU pages** are also on by default for device-maker teams, and self-serve setup needs **Max**.
- **qPolicy** is never on by default. A team owner adds it on the Max plan, or Intracav enables it under a contract.

## Add-ons

| Add-on | Works with | What it adds |
|---|---|---|
| **qPolicy** | Max only | Policy management and compliance: your policy manual as a cited source, review and approval, attestation, and compliance coverage. Includes qPolicy seats. See [qPolicy](/qpolicy/). |

## How seats work on Plus and Max

- **Five seats are included** to start.
- **Seats grow when your team does.** When you admit a member beyond your purchased seats, the seat count increases so nobody is locked out.
- **Seats never shrink on their own.** When someone leaves, you keep the seat until an admin lowers the count. An admin can't go below the number of current members or the five-seat minimum.
- **Usage is pooled.** Each seat adds to one shared allowance for the whole team, so a busy colleague can draw on a quiet colleague's share.
- **Self-serve goes up to 25 seats.** Above 25 seats, or if your organization needs single sign-on (SSO) or a written agreement covering protected health information (PHI), talk to Intracav instead of checking out online.

## Usage limits

Every plan has a usage limit, counted as messages plus tool calls over a time window. Limits rise with each plan, and team plans pool them across seats. When you reach your limit, Lumen tells you. Your chats and documents stay where they are, and capacity comes back when the window resets. To see where you stand, open {{< ui-path "Settings" "Plan & billing" "View detailed usage" >}}.

## How to change your plan

{{< tabs >}}
{{< tab name="Your own plan" >}}
{{< steps >}}
{{< step title="Open your subscription" >}}In Lumen, open {{< ui-path "Settings" "Plan & billing" "Manage subscription" >}}. The **Subscription** screen shows **Your plan** and **Billing history**.{{< /step >}}
{{< step title="Compare plans" >}}Scroll to **Compare plans**.{{< /step >}}
{{< step title="Choose a plan" >}}Click **Get Pro**, **Get Plus** or **Get Max**, and complete checkout. Your new plan applies as soon as payment is confirmed.{{< /step >}}
{{< /steps >}}
{{< /tab >}}
{{< tab name="Your team's plan" >}}
{{< steps >}}
{{< step title="Open team billing" >}}As the team owner, open {{< ui-path "Settings" "Plan & billing" "Team billing" >}}.{{< /step >}}
{{< step title="Manage the subscription" >}}Click **Manage billing** to change the plan, seats or payment method.{{< /step >}}
{{< step title="Add qPolicy (Max only)" >}}On the Max plan, choose **Add qPolicy**. On the Subscription screen, **Max + qPolicy** buys both together.{{< /step >}}
{{< /steps >}}
{{< /tab >}}
{{< /tabs >}}

For more than 25 seats, SSO, or an agreement covering PHI, click **Talk to Sales** or contact Intracav at [intracav.ai](https://intracav.ai).

## What you'll see

{{< screenshot src="plans-subscription" alt="The Lumen Subscription screen with Your plan, Billing history and Compare plans" caption="The Subscription screen. Compare plans lists Pro, Plus and Max." url="lumen.intracav.ai/profile/subscription" >}}
{{< lui-block title="Compare plans" >}}
{{< lui-rows >}}
{{< lui-row title="Lumen Pro" body="For the individual practitioner" value="Get Pro" >}}
{{< lui-row title="Lumen Plus" body="For your department · Shared folders for your department · Admin controls & usage dashboard" value="Get Plus" >}}
{{< lui-row title="Lumen Max" body="For Health Systems" value="Get Max" >}}
{{< /lui-rows >}}
{{< lui-actions "Max + qPolicy" "Talk to Sales" >}}
{{< /lui-block >}}
{{< /screenshot >}}

## Good to know

- **Joining a team never downgrades you.** If you have your own subscription and join a team, Lumen uses whichever plan gives you more.
- **Team features follow the team.** Inside a team workspace you get the team's plan. In your personal workspace you get your own.
- **Some pages show a plan badge**, such as {{< tier-badge "max" >}}, wherever a feature needs a particular plan.

## Limits

- **Prices aren't on this page.** They're on [intracav.ai](https://intracav.ai), which is always current.
- **Exact usage limits can change.** Lumen shows your current usage and limit in **View detailed usage**.
- **SSO isn't self-serve.** It is set up through an Enterprise agreement with Intracav.
- **PHI needs a written agreement.** Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements.
- **Studio isn't listed.** It's being rolled out and isn't on for every account yet. See [Studio](/studio/).

## FAQ

{{< faq question="Can I use Lumen for free?" >}}
Yes. The Free plan needs no payment details. It includes cited answers, specialists, skills, the core clinical tools and document exports.
{{< /faq >}}
{{< faq question="What's the difference between Pro and Plus?" >}}
Pro is for one person. Plus is a team plan: it adds seats, shared folders and departments, admin controls, an EHR connection and a more capable model, with usage pooled across the team.
{{< /faq >}}
{{< faq question="Do team members need their own subscription?" >}}
No. A seat on a Plus or Max team covers what a member needs inside the team workspace.
{{< /faq >}}
{{< faq question="Can we buy qPolicy without Max?" >}}
No. qPolicy is an add-on to the Max plan only.
{{< /faq >}}
{{< faq question="Which plan does a device maker need for Lumen Connect?" >}}
Lumen Connect runs in a team account. Website assistants are turned on for device-maker teams. Setting up Smart IFU pages yourself needs Max. See [Lumen Connect](/connect/).
{{< /faq >}}

## Next steps

{{< related "/getting-started/what-is-lumen/" "/connect/" "/qpolicy/" "/trust/" >}}

{{< cta heading="See current prices" href="https://intracav.ai" label="Go to intracav.ai" secondary-href="https://lumen.intracav.ai" secondary-label="Start free" >}}Start on Free and move up when you need more.{{< /cta >}}
