---
title: "Launch a Grounded AI Chat Bot on Your Website"
description: "Put a Lumen Website Bot on your site: ground it in your Knowledge Packs, brand it, lock it to your domain, test it, and read what visitors actually ask."
lead: "A chat widget that answers only from your content, cites its sources — and admits what it doesn't know."
weight: 13
audience: org
tier: max
time: "~20 minutes"
keywords: ["add AI chatbot to medical website", "grounded website chatbot tutorial", "healthcare chat widget setup"]
---

Harborview Home Infusion (fictional, like every name in this guide) fields the same questions all day: which therapies do you deliver at home, how do I store my medication, do you cover my county. A generic chatbot would improvise answers — and on a medical site, an improvised answer is a liability in a lab coat. A Lumen **Website Bot** answers **only from the Knowledge Packs you assign it**, cites the source with a link to the actual page, and when your content doesn't cover something, it says so and offers a way to reach you.

## What you'll make

A branded chat widget live on `www.harborview-infusion.example`, grounded in Harborview's service and patient-education pack, origin-locked to that domain, tested from the admin side before any visitor sees it, and feeding a lead inbox plus a conversation-intelligence view.

## Before you start

- You're an org admin on [Max](/plans/) {{< tier-badge "max" >}}.
- **A Knowledge Pack with the content the bot should answer from.** This is the whole game — the bot is exactly as good as its corpus. If you haven't built one, do [Turn your protocols into a Knowledge Pack](/guides/build-a-knowledge-pack/) first, with your service descriptions, patient-education sheets, and FAQ content.
- Someone who can paste a snippet into your website (or ten minutes of your own time — it's one self-contained snippet, no framework requirements).

{{< callout type="important" >}}
**Everything you assign to a public bot becomes publicly answerable.** Lumen asks for explicit confirmation before a document is published to a public-facing bot, so nothing internal leaks by accident — but the review discipline is yours. Public-education content in; internal pricing sheets, staff procedures, and anything touching patient data out. Never include PHI in bot-facing packs.
{{< /callout >}}

<div class="steps-container">

{{< step num="1" title="Create the bot and assign its packs" >}}
From your org admin area, create a new Website Bot — "Harborview Visitor Assistant" — and assign the Knowledge Packs it may answer from. You control the corpus per bot, down to individual documents. An organization can run multiple bots (one per product line, one per audience), each with its own pack assignment, embed, and intelligence view — but start with one.

**You should see:** the bot created with your chosen packs assigned, and nothing else in its corpus.
{{< /step >}}

{{< step num="2" title="Brand it" >}}
Give the widget Harborview's name, look, and an opening greeting that sounds like the company rather than a robot — something like "Hi — ask me about our home-infusion services. I answer from Harborview's own materials and I'll show you my sources."

That last clause is worth keeping: telling visitors the bot cites its sources sets the right expectation *and* explains the honest deflections they'll occasionally see.

**You should see:** a preview of the widget that looks like it belongs on your site.
{{< /step >}}

{{< step num="3" title="Allowlist your website's origin" >}}
Register the domains the widget is allowed to run on — `www.harborview-infusion.example` (and any staging domain your web team uses). The bot's key only works from origins you register: copied embed code on someone else's site gets nothing. The widget itself runs on short-lived sessions with a publisher key — never on a member's credentials — and per-bot daily message budgets cap worst-case usage.

**You should see:** your production and staging origins listed on the bot's allowlist.
{{< /step >}}

{{< step num="4" title="Test it before anyone else does" >}}
Fire test questions at the bot's corpus from the admin side and read exactly what it would say, before a visitor does. Test three categories:

```
What infusion therapies can Harborview deliver at home?
```
```
How should I store my medication between nursing visits?
```
```
Do you offer weekend emergency coverage in rural counties?
```

**You should see:** the first two answered from your pack, with citations linking to the source document at the right page. If the third isn't in your content, you should see the bot deflect honestly — "I don't have documentation on that — here's how to reach us." On a medical site, that deflection is a *feature*: the rep who says "let me check," not the one who makes something up at the booth. If a question you expected to work deflects instead, that's a content gap — fix the pack, not the bot.
{{< /step >}}

{{< step num="5" title="Hand the embed snippet to your web team" >}}
Grab the bot's embed snippet — a small, self-contained addition to your site with no framework requirements — and hand it off. The integration details your developer will want (snippet placement, origins, testing) live at [/developers/embed/](/developers/embed/).

**You should see:** the widget live on your site, answering exactly as it did in your admin-side tests.
{{< /step >}}

{{< step num="6" title="Work the lead inbox" >}}
When a conversation turns commercial — a discharge planner asking about referrals, a patient's family asking about coverage — the bot can capture the visitor's details as a lead. Leads land in an inbox your team works from (stages, assignees, notes) and sync to your CRM: Zoho and HubSpot are supported, with re-push if a sync hiccups. Lead alerts and digests keep the right person informed without anyone refreshing a dashboard.

**You should see:** within the first days, real leads with the conversation context attached — what they asked before they raised their hand.
{{< /step >}}

{{< step num="7" title="Read the conversation intelligence" >}}
After a week or two, open the bot's intelligence dashboard. Three questions it answers:

- **What are visitors asking?** Real questions aggregated by topic, with drill-down to verbatim transcripts.
- **Who's showing buying signals?** An intent-to-lead funnel, surfaced buying signals, and objections.
- **Where are the knowledge gaps?** Questions the bot couldn't ground are your content roadmap — if thirty visitors asked something your site doesn't answer, you know exactly what to write next.

**You should see:** the questions you guessed visitors had — and several you didn't. Feed the gaps back into the pack; the bot gets better the way your website never did.
{{< /step >}}

</div>

## Troubleshooting

**The widget loads nothing on your site.** Almost always the origin: the domain serving the page isn't on the bot's allowlist. Check for exact-host mismatches — a bot allowlisted for `www.harborview-infusion.example` won't run on the bare apex domain unless that's registered too.

**The bot deflects on questions your content covers.** Confirm the covering document is in a pack *assigned to this bot*, indexed, and confirmed for public use — documents headed for a public bot require explicit confirmation, and one awaiting confirmation isn't in the corpus yet.

**The bot stopped answering mid-day.** Check the per-bot daily message budget — it exists so a scripted abuse loop degrades gracefully instead of running your account hot. Raise it if legitimate traffic outgrew it.

**Leads aren't reaching your CRM.** Check the sync status on the affected leads and re-push — transient CRM-side hiccups are the common cause. The lead itself is never lost; the inbox is the source of truth.

## Next steps

- [Publish your first policy in Lumen](/guides/publish-first-policy/) — governance for the internal side of your content
- [Website Bots](/organizations/website-bots/) — grounding, safety rails, lead capture, and intelligence in full
- [Embed reference for developers](/developers/embed/) — the snippet, origins, and integration details for your web team
