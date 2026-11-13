---
title: "Set always-on guidance for your team"
navTitle: "Always-on guidance"
description: "Always-on guidance is a short block of standing facts Lumen keeps in mind for every answer in your team or a department. It's never searched or cited."
lead: "Tell Lumen the facts every answer should respect, such as who you are, your on-call numbers and how your units work, once, for everyone."
weight: 4
icon: sliders
status: admin
who: "team owners and admins"
glance:
  what: "Always-on guidance is a short text Lumen is given with every question in its scope: the whole team, one department, or one website assistant. Lumen follows it but never cites it."
  who: "Admins who want answers to fit how their hospital works, without staff having to explain it every time."
  why: "Answers account for your setting. For example, Lumen knows you're a 400-bed community hospital and that pharmacy questions go to extension 4120."
  needs: "A Lumen team on Plus or Max and the owner or admin role. About 10 minutes."
  result: "Team-wide and department guidance that shapes every answer in its scope."
---

Some facts should shape every answer but aren't documents anyone would cite: your hospital's size, which devices a unit uses, who to page. **Always-on guidance** is where those go. It's a short block of text that Lumen is given with every question in its scope, so answers fit your setting. Because it's standing context, not a source, Lumen never shows it as a citation. In the Admin console this page is called **Standing knowledge**, and on the Knowledge map the same thing appears as **Always-on guidance**. Lumen calls your organization a *team*.

## Before you start

- **Role:** owner or admin.
- **Plan:** Plus or Max.
- **Scopes that exist:** a **Team-wide** block, one per **department** (create departments first), and one per website assistant if your team has them.

## How to set always-on guidance

{{< steps >}}
{{< step title="Open Standing knowledge" >}}In the Admin console, click {{< ui-path "Knowledge" "Standing knowledge" >}}.{{< /step >}}
{{< step title="Pick the scope" >}}Find the block you want: **Team-wide** shapes every answer for every member of the team. A department block, for example **ICU**, shapes every answer for the members of that department.{{< /step >}}
{{< step title="Write the facts" >}}Type short, factual statements. For example: *We are a 400-bed community hospital. Route pharmacy questions to ext. 4120.* For the ICU: *We run Impella. Our on-call pager is 5567.*{{< /step >}}
{{< step title="Save" >}}Click **Save**. The block shows **Last changed** with the date. Click **Discard** to drop unsaved edits.{{< /step >}}
{{< /steps >}}

You can also open a guidance node on {{< ui-path "Knowledge" "Map" >}} and choose **Edit always-on guidance**, or ask [Lumen Super User](/organizations/super-user/) to change it. A block set through Super User says *Last set through Lumen Super User, on your approval.*

## What you'll see

{{< lui-block title="Standing knowledge" sub="Always-on facts that shape every answer in their scope. They are never shown as a citation." >}}
{{< lui-block title="Team-wide" sub="Shapes every answer for every member of this team." >}}
{{< lui-kv "Text=We are Harbor Valley Medical Center, a 400-bed community hospital. Route pharmacy questions to ext. 4120. Our formulary uses the hospital's own name for each product.;Last changed=Nov 4" >}}
{{< /lui-block >}}
{{< lui-block title="ICU" sub="Shapes every answer for the members of this department." >}}
{{< lui-kv "Text=Adult ICU, 24 beds. Our sedation protocol is in the ICU protocols pack. Rapid response pager 5567.;Last changed=Oct 28" >}}
{{< lui-actions "Save" "Discard" >}}
{{< /lui-block >}}
{{< /lui-block >}}

## How it's used

- **Team-wide first, then department.** When a member works in a department, Lumen gets the team-wide block and then that department's block. The department block is the more specific instruction.
- **Never cited.** Guidance isn't searched and has no source number, so it never appears as a citation. Lumen is told not to describe it as a document.
- **Conflicts are stated.** If your guidance disagrees with a source Lumen retrieved, Lumen is told to say so plainly rather than quietly pick one.

## Tips

- Keep it to standing facts and routing: size, setting, devices, contacts, local names for things.
- Put anything staff should be able to check, such as a protocol or a dosing table, in a [Knowledge Pack](/organizations/knowledge-packs-admin/) instead, so answers cite it.
- Review department blocks when unit leadership or pager numbers change.

## Limits and safety

- Each block holds up to 6,000 characters. Lumen refuses to save more rather than storing part of it. Together, the team-wide and department blocks are capped at 9,000 characters per question; anything past that is cut and Lumen is told it was cut.
- Guidance applies to every answer in its scope. A wrong number or outdated instruction here affects everyone, so treat edits like a policy change and check them.
- Don't put patient information in guidance.
- A website assistant's guidance reaches anyone on the internet who uses that assistant. Write it for a public audience.

## FAQ

{{< faq question="Will staff see the guidance?" >}}
Not as text or a citation. They see its effect: answers that fit your hospital. Admins see and edit it in {{< ui-path "Knowledge" "Standing knowledge" >}}.
{{< /faq >}}
{{< faq question="Can I paste our sepsis protocol into guidance?" >}}
No. It won't fit, and it shouldn't: guidance is never cited, so staff couldn't check the source. Upload the protocol to a Knowledge Pack.
{{< /faq >}}
{{< faq question="Why don't I see a block for my department?" >}}
Blocks appear for departments that exist. Create the department in {{< ui-path "Members & access" "Departments" >}} first.
{{< /faq >}}

## Next steps

{{< related "/organizations/knowledge-packs-admin/" "/organizations/super-user/" "/organizations/departments-and-seats/" >}}
