---
title: "qPolicy: policies and compliance"
navTitle: "qPolicy"
description: "qPolicy is the Lumen Max add-on that keeps a hospital's policies current, approved and attested, and shows which regulations each policy covers."
lead: "Bring your policy manual into Lumen, run reviews and sign-offs, collect attestations, watch for regulatory change, and answer staff questions from the policies you actually have in force."
weight: 31
group: org
icon: scale
tier: max
status: add-on
who: "policy, compliance and nursing leaders"
cascade:
  audience: org
glance:
  what: "qPolicy is policy management and compliance inside Lumen. It holds your policy manual, runs approvals and attestation, links policies to the regulations they answer, and lets staff ask questions answered from your policies."
  who: "Policy and compliance managers, CNOs and nursing leadership, quality and accreditation teams, and department heads who own policies."
  why: "One current manual that staff can find and question, a record of who approved and attested to each version, and a clear view of which requirements you have policy evidence for."
  needs: "A Lumen team on the Max plan with the qPolicy add-on, and an owner or admin to set it up. Plan a few hours to migrate an existing manual."
  result: "A clear picture of what qPolicy does end to end, and where to start."
hideAutoGrid: true
---

Most hospitals manage policy in one system, track attestation in another, map regulations in a spreadsheet, and hope staff find the current version. **qPolicy** puts that work in one place inside Lumen. Your manual becomes the source staff ask questions of, every version has an approval trail, and you can see which Medicare Conditions of Participation your policies cover. Lumen drafts and suggests; a person decides. qPolicy is an add-on to the **Lumen Max** plan. Lumen calls your organization a *team*.

## How qPolicy works, end to end

{{< flow >}}
{{< flow-node kicker="1. Bring it in" title="Import your manual" icon="upload" tint="blue" >}}From PolicyStat, PolicyTech, Lucidoc, SharePoint or files, with your dates kept.{{< /flow-node >}}
{{< flow-node kicker="2. Govern" title="Review and sign-off" icon="users" tint="plum" >}}Department review, then sign-off. Approving the last step publishes.{{< /flow-node >}}
{{< flow-node kicker="3. Reach staff" title="Read, attest, ask" icon="message" tint="green" >}}Staff read, attest, and get chat answers that cite the policy.{{< /flow-node >}}
{{< flow-node kicker="4. Stay current" title="Coverage and change" icon="rss" tint="accent" >}}Map policies to regulations and decide on rule changes.{{< /flow-node >}}
{{< /flow >}}

{{< card-grid cols="3" >}}
{{< card title="Import policies" href="/qpolicy/import-policies/" icon="upload" tint="blue" >}}Migrate your manual with a review step before anything goes live.{{< /card >}}
{{< card title="Policy lifecycle" href="/qpolicy/policy-lifecycle/" icon="history" tint="blue" >}}Draft, In review, In force, Searchable, Verified, Retired: what each state means.{{< /card >}}
{{< card title="Review and approval" href="/qpolicy/review-and-approval/" icon="check-circle" tint="plum" >}}Configurable approval routes and word-level redlines.{{< /card >}}
{{< card title="Attestation" href="/qpolicy/attestation/" icon="clipboard-check" tint="plum" >}}Version-bound attestation and a department-by-policy heatmap.{{< /card >}}
{{< card title="Policy answers in chat" href="/qpolicy/policy-answers/" icon="message" tint="green" >}}Staff ask in plain language; answers cite the policy version in force.{{< /card >}}
{{< card title="Compliance coverage" href="/qpolicy/compliance-coverage/" icon="scale" tint="green" >}}Which CMS requirements have confirmed policy evidence.{{< /card >}}
{{< card title="Regulatory monitoring" href="/qpolicy/regulatory-monitoring/" icon="rss" tint="accent" >}}Federal Register changes matched to your policies, for a person to decide.{{< /card >}}
{{< card title="Evidence binder" href="/qpolicy/evidence-binder/" icon="package" tint="accent" >}}A ZIP and PDF for surveyors: policies, approvals, attestations.{{< /card >}}
{{< card title="Health systems" href="/qpolicy/health-systems/" icon="network" tint="neutral" >}}Write once at system level; facilities adopt or vary with a reason.{{< /card >}}
{{< /card-grid >}}

## Before you start

- **Plan:** Lumen Max with the qPolicy add-on. qPolicy isn't sold on its own or with Plus. qPolicy seats follow your Max seats.
- **Role:** an owner or admin activates and sets it up. Department heads can manage their own department's policies.
- **Have ready:** an export of your current manual, the list of departments that own policies, and who signs off.

## How to turn on qPolicy

{{< steps >}}
{{< step title="Find qPolicy" >}}In the Admin console, open {{< ui-path "Settings" "Billing & seats" >}} and click **Add qPolicy**, or open {{< ui-path "Products" >}} and choose Policies. If your team isn't on Max, Lumen explains that qPolicy is a Lumen Max add-on and offers **View plans**.{{< /step >}}
{{< step title="Activate" >}}Click **Activate qPolicy** (on the Policies page the button reads **Activate Policies**). When it's ready, click **Go to qPolicy setup**.{{< /step >}}
{{< step title="Follow the setup checklist" >}}**Get your policy library live** walks you through **Create departments**, **Import your policies**, **Publish your first policy**, **Subscribe to authority sources**, **Record your BAA** and **Invite your team**. Click **Open** on each step.{{< /step >}}
{{< step title="Tell staff where to look" >}}Every member now sees **Policies** in the sidebar, with a badge for attestations they owe. Answers in chat cite your policies.{{< /step >}}
{{< /steps >}}

## What you'll see

{{< screenshot src="qpolicy-library" alt="The qPolicy Library with policies, their status, owners and review dates" caption="Policies › Library: every policy with its status, area, owner and review date." url="lumen.intracav.ai/org/harbor-valley/admin/policies/library" >}}
{{< lui-block title="Policies" sub="Library · House style · Review · Attestation · Approvals & attestation · Browse · Intracav Policies · Get started" >}}
{{< lui-actions "New policy" "Import" "Filters" >}}
{{< lui-rows >}}
{{< lui-row title="**Central line dressing change** · NUR-114" body="Vascular Access · Owner: Priya Nair · Next review Mar 2027" value="In force" >}}
{{< lui-row title="**Restraint use and monitoring** · NUR-207" body="Team-wide · Owner: Dana Whitfield" value="In review" >}}
{{< lui-row title="**Sepsis screening in the ED** · ED-031" body="Emergency · Owner: Marcus Lee · Review overdue" value="In force" >}}
{{< lui-row title="**Fall prevention** · MS-012" body="Med-Surg · Owner: Jordan Blake" value="Draft" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /screenshot >}}

## What a person always decides

- **AI suggestions never publish on their own.** Lumen drafts amendments, suggests requirement links and proposes fixes. Each waits for a person.
- **New and changed policies go through your approval route.** Approving the last step is what publishes.
- **Imported policies keep their status.** Policies you import as already in force stay in force with their original dates, and clinical ones are flagged **Verification required** until a person checks the text.

## Limits and safety

- qPolicy answers from **your own policy manual**. It isn't a separate or dedicated copy of Lumen; your policies are kept private to your team.
- Compliance views show **evidence coverage**: which requirements have a confirmed policy. They're not a compliance determination or an accreditation opinion.
- The Joint Commission framework is a chapter-and-standard skeleton only. Lumen doesn't reproduce its text.
- qPolicy finds possible duplicates and overlapping policies for a person to merge. It doesn't detect contradictions between policies.
- There's no EHR, Active Directory or SAML single sign-on integration for qPolicy.

## FAQ

{{< faq question="Do we have to move off PolicyStat on day one?" >}}
No. You can import your manual, review it in Lumen, and decide when to switch. Nothing in your Lumen manual changes until you confirm the import.
{{< /faq >}}
{{< faq question="Can staff without admin rights use it?" >}}
Yes. Every member reads the **Policies** library, attests when asked, and gets chat answers that cite your policies. Only admins and department heads manage policies.
{{< /faq >}}
{{< faq question="Does qPolicy tell us we're survey-ready?" >}}
No. It shows which requirements have confirmed policy evidence and what to fix next. Readiness for a survey is a judgment your team makes.
{{< /faq >}}

## Next steps

{{< related "/qpolicy/import-policies/" "/qpolicy/review-and-approval/" "/qpolicy/compliance-coverage/" "/plans/" >}}

{{< cta heading="See qPolicy with your own policies" href="https://intracav.ai" label="Talk to Intracav" secondary-href="/plans/" secondary-label="Compare plans" >}}qPolicy is an add-on to Lumen Max.{{< /cta >}}
