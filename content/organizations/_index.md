---
title: "Lumen for hospitals and health systems"
navTitle: "Organizations"
description: "What a hospital gets with a Lumen team: shared knowledge, departments, an Admin console, an audit trail and optional qPolicy, plus how to roll it out."
lead: "Give your staff one place to ask clinical and policy questions, answered from sources you control, with an Admin console your leaders can run without an IT project."
weight: 30
hideAutoGrid: true
group: org
icon: building
who: "hospital leaders and admins"
cascade:
  audience: org
glance:
  what: "A Lumen team is a shared Lumen workspace for your organization. Your staff get cited answers that draw on your own documents, and your admins get one console to manage people, departments, knowledge and policy."
  who: "CNOs, CMIOs, compliance and policy managers, department leads and IT at hospitals and health systems."
  why: "Staff stop hunting through shared drives and binders. Leaders decide what Lumen answers from, see who has access, and keep a tamper-evident record of what changed."
  needs: "Creating a team is free. The Plus or Max plan starts when you invite people. qPolicy and Lumen Super User need Max."
  result: "A clear picture of what your organization gets, who does what, and the order to roll it out in."
---

A hospital's knowledge lives in too many places: the policy manual, unit binders, the intranet and the heads of experienced staff. Lumen brings it together. Your staff ask questions in plain language and get answers that cite your own documents and policies, and your admins control what Lumen answers from, who can see it and how it changes. Lumen calls an organization a **team**, so that's the word you'll see on screen.

## What your organization gets

{{< card-grid cols="2" >}}
{{< card title="Admin console" href="/organizations/admin-console/" icon="layers" tint="blue" kicker="Run the team" >}}One place to see what needs attention, manage people and departments, and open every part of your setup.{{< /card >}}
{{< card title="Departments and seats" href="/organizations/departments-and-seats/" icon="users" tint="green" kicker="Match your org chart" >}}Group staff into departments such as ICU or Emergency, give each one a head, and manage seats and billing.{{< /card >}}
{{< card title="Shared knowledge" href="/organizations/knowledge-packs-admin/" icon="library" tint="plum" kicker="Answers from your documents" >}}Put your protocols and references into Knowledge Packs and choose which departments answer from each one.{{< /card >}}
{{< card title="Always-on guidance" href="/organizations/always-on-guidance/" icon="sliders" tint="accent" kicker="Standing facts" >}}Short facts Lumen always keeps in mind for your team or a department, such as your bed count or an on-call number.{{< /card >}}
{{< card title="Audit and access" href="/organizations/audit-and-access/" icon="shield-check" tint="blue" kicker="Who did what" >}}Simple roles, department-scoped activity, and a tamper-evident audit log for policy actions.{{< /card >}}
{{< card title="Lumen Super User" href="/organizations/super-user/" icon="sparkle" tint="plum" kicker="Max" >}}Ask an admin assistant about your team, or describe a change. You see every change in full before it applies.{{< /card >}}
{{< card title="qPolicy" href="/qpolicy/" icon="scale" tint="green" kicker="Max add-on" >}}Import, approve, attest and monitor your policy manual, and show which regulations each policy covers.{{< /card >}}
{{< card title="EHR connection" href="/organizations/ehr/" icon="plug" tint="neutral" kicker="Beta" >}}Read-only patient context over SMART on FHIR, and advisory CDS Hooks cards. Set up with Intracav.{{< /card >}}
{{< /card-grid >}}

## Who does what

| Role in Lumen | Typical person | What they can do |
|---|---|---|
| **Owner** | The executive sponsor or the person who set up the team | Everything an admin can, plus billing decisions such as making the team a health system |
| **Admin** | Nursing informatics, education, compliance or IT lead | Manage members, departments, knowledge, billing, policies and compliance in the **Admin console** |
| **Department head** | Unit manager, department lead | Manage their own department's members, folders and scheduling. They see **My department** instead of **Admin console** |
| **Member** | Nurses, physicians, pharmacists, educators | Use Lumen, read shared knowledge and the **Policies** library, and attest to policies |

## How to roll Lumen out

{{< steps >}}
{{< step title="Create your team" >}}Sign in at [lumen.intracav.ai](https://lumen.intracav.ai), open the team switcher in the sidebar and choose **Create team**. Enter a **Team name**, optionally an **Email domain**, and choose **Hospital or health system** so the Admin console is set up for clinical governance. Creating a team is free.{{< /step >}}
{{< step title="Choose a plan and invite people" >}}The Plus or Max plan starts with your first invitation. Seats start at five, grow as people join, and stay self-serve up to 25. See [Departments and seats](/organizations/departments-and-seats/).{{< /step >}}
{{< step title="Create departments and name their heads" >}}Mirror the units that will use Lumen first, for example Vascular Access, ICU, Emergency and Med-Surg. Department heads can then add their own people.{{< /step >}}
{{< step title="Add your knowledge" >}}Upload the protocols and references your staff actually use into a Knowledge Pack, and give each department access to the packs that apply to it. See [Manage Knowledge Packs](/organizations/knowledge-packs-admin/).{{< /step >}}
{{< step title="Bring in your policy manual (optional)" >}}With the qPolicy add-on on Max, migrate your manual from PolicyStat, PolicyTech, Lucidoc or SharePoint, then set up approvals and attestation. See [qPolicy](/qpolicy/).{{< /step >}}
{{< step title="Check the Overview each week" >}}Open {{< ui-path "Admin console" "Overview" >}} and work through **Needs attention**. See [The Admin console](/organizations/admin-console/).{{< /step >}}
{{< /steps >}}

{{< callout type="info" title="Security and agreements" >}}
Lumen is built with security safeguards: encryption, access controls and a tamper-evident audit log. Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. More than 25 seats or single sign-on requirements move you to an Enterprise agreement with Intracav sales. See [Privacy and data](/trust/privacy/).
{{< /callout >}}

## FAQ

{{< faq question="Is a Lumen team the same as an organization?" >}}
Yes. Lumen labels an organization a **team** on screen. One hospital is usually one team. A health system can link several hospital teams together with qPolicy. See [Health systems](/qpolicy/health-systems/).
{{< /faq >}}
{{< faq question="Do we need IT to install anything?" >}}
No. Lumen runs in a web browser at lumen.intracav.ai. IT is usually involved only for an EHR connection or an Enterprise agreement.
{{< /faq >}}
{{< faq question="Can staff see each other's chats?" >}}
No. Chats belong to the person who started them. Admins see membership, settings and usage counts, not what anyone asked.
{{< /faq >}}

## Next steps

{{< related "/organizations/admin-console/" "/organizations/departments-and-seats/" "/qpolicy/" "/plans/" >}}

{{< cta heading="Bring Lumen to your hospital" href="https://lumen.intracav.ai" label="Create your team" secondary-href="https://intracav.ai" secondary-label="Talk to Intracav" >}}Free to create. The plan starts when you invite your team.{{< /cta >}}
