---
title: "See what answers from what: the Knowledge Map"
navTitle: "Knowledge Map"
description: "The Knowledge Map shows team admins what answers from each Knowledge Pack and the policy library, and what a change would affect."
lead: "One picture of your organization's knowledge: what's always on, what's searchable, and who answers from it."
weight: 4
icon: network
who: "team admins"
glance:
  what: "A map in the Admin console that shows each Knowledge Pack and your policy library, the always-on guidance, and every assistant, department and chat that answers from them."
  who: "Admins of a Lumen team (your organization), such as a hospital's knowledge or education lead, or a device maker's content owner."
  why: "So you can see what your staff and website visitors are getting answers from, spot problems, and know what a change will affect before you make it."
  needs: "A team account and the team admin role. About 5 minutes."
  result: "A clear view of your knowledge and what depends on it."
---

As an organization adds Knowledge Packs, a policy library, website assistants and departments, it gets hard to answer a simple question: if I switch this pack off, who stops getting answers from it? The **Knowledge map** answers it. It draws your organization's knowledge as one picture, flags what needs attention, and tells you what a change affects before you make it.

In Lumen, an organization is called a *team*.

## Before you start

- **Team admin role.** Only team admins can see the map.
- **Some knowledge to map**, such as an active Knowledge Pack, a website assistant or a department.

## How to open the Knowledge Map

{{< steps >}}
{{< step title="Open the Admin console" >}}Open your team's Admin console.{{< /step >}}
{{< step title="Go to Knowledge" >}}Choose **Knowledge**. The **Map** tab opens first.{{< /step >}}
{{< step title="Read the columns" >}}The map reads left to right: **Always-on guidance**, then **Knowledge**, then **Answers from it**.{{< /step >}}
{{< step title="Check what needs attention" >}}Open **Needs attention** for a ranked list of problems, such as a pack that is empty or a source that couldn't be processed.{{< /step >}}
{{< step title="Open a node" >}}Click any item to see what it is in plain words, its status, and a link to where it's managed.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="knowledge-map" alt="The Knowledge map with always-on guidance on the left, Knowledge Packs and the policy library in the middle, and website assistants, departments, member chat and Smart IFU pages on the right" caption="The Knowledge map in Admin › Knowledge." url="lumen.intracav.ai/org/admin/knowledge/map" >}}
{{< flow >}}
{{< flow-node kicker="Always-on guidance" title="For the organization" icon="info" tint="plum" >}}Always given to Lumen. Never searched or cited.{{< /flow-node >}}
{{< flow-node kicker="Knowledge" title="Packs and policy library" icon="package" tint="blue" >}}Vascular Access protocols · Policy library · SL-4 IFU (Partner knowledge pack){{< /flow-node >}}
{{< flow-node kicker="Answers from it" title="Who uses it" icon="users" tint="green" >}}Member chat · Vascular Access department · Website assistant · Smart IFU{{< /flow-node >}}
{{< /flow >}}
{{< /screenshot >}}

### What each item is

| On the map | What it means |
|---|---|
| **Knowledge pack** / **Knowledge pack from Intracav** / **Partner knowledge pack** | A curated, searchable collection of documents, made by your team, Intracav or a partner. |
| **Policy library** | Your policies in qPolicy, searchable as one collection. |
| **Always-on guidance** | Short standing instructions always given to Lumen for a scope (the organization, a department, an assistant or a Smart IFU page). Never searched, never cited. |
| **Website assistant** | An assistant on a public website that answers from the knowledge linked to it. |
| **Department** | Members of a department, answering from the packs it's linked to. |
| **Member chat** | Everyone in your team, chatting in Lumen. |
| **Smart IFU** | A public device page that answers from a device's instructions for use. |

### Status labels

- **Searchable** or **Answering**: ready and in use.
- **Processing**: Lumen is still reading new material.
- **Couldn't process**: a source failed to load. Open it to fix or replace it.
- **Needs attention**, **Empty** or **Off**: something to look at.

Two more words appear in the glossary on the page. **Cited** sources can appear as citations in answers. **Background** sources inform answers without being cited.

{{< callout type="important" title="Available isn't approved" >}}
**Searchable** means Lumen can find a source. It doesn't mean anyone verified or approved it. Approval and verification are separate, and in qPolicy they have their own badges.
{{< /callout >}}

## Know what a change affects

Before you deactivate a pack or remove a document from one, Lumen shows **WHAT THIS AFFECTS**: the website assistants, departments, member chat and Smart IFU pages that answer from it, with a summary such as "Used by 2 live website assistants and 1 department." When you deactivate a pack, its documents are kept. Activate it again to undo.

## Where to change things

- **Packs and sources:** the **Sources** tab, next to **Map**. See [Manage Knowledge Packs](/organizations/knowledge-packs-admin/).
- **Always-on guidance:** the **Standing knowledge** tab. Edit the text and click **Save**.
- **Which assistants answer from which packs:** the website assistant's settings. See [Lumen Connect](/connect/).

## Limits and safety

- **Admins only.** Members can't see the map.
- **The map shows links, not quality.** It shows what answers from what, not whether the content is correct or current.
- **Always-on guidance is applied to every answer in its scope.** Keep it short and accurate. A mistake there affects every answer.
- **The map doesn't show policy-to-policy conflicts.** For overlapping policies, use qPolicy's review tools.

## FAQ

{{< faq question="Who can see the Knowledge Map?" >}}
Team admins only, in the Admin console under **Knowledge**.
{{< /faq >}}
{{< faq question="What's the difference between always-on guidance and a Knowledge Pack?" >}}
A Knowledge Pack is searched, and passages from it are cited. Always-on guidance is a short instruction Lumen always follows in its scope, such as preferred terms. It's never searched or cited.
{{< /faq >}}
{{< faq question="If I switch off a pack, is anything deleted?" >}}
No. Its documents are kept, and Lumen tells you first what stops answering from it. Activate it again to undo.
{{< /faq >}}

## Next steps

{{< related "/organizations/knowledge-packs-admin/" "/knowledge/knowledge-packs/" "/organizations/always-on-guidance/" "/connect/" >}}
