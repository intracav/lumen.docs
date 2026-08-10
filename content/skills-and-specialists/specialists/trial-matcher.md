---
title: "AI Clinical Trial Matching"
description: "Lumen's AI clinical trial matching assistant searches ClinicalTrials.gov against your patient's profile and returns a ranked, pre-screened shortlist."
lead: "Type @Trial Matcher and turn a patient profile into a ranked shortlist of recruiting trials — eligibility gaps spelled out, site contacts attached."
weight: 4
keywords: ["AI clinical trial matching", "clinical trial finder AI", "ClinicalTrials.gov search AI", "patient trial eligibility screening", "oncology trial matching"]
---

Somewhere on ClinicalTrials.gov is the trial your patient qualifies for. Between you and it stand four hundred search results, each with an eligibility section written in a different dialect of protocol-speak, half of them no longer recruiting. That search is exactly the kind of systematic, criteria-by-criteria slog that a person does slowly and an AI with the right tool does in minutes.

The Trial Matcher Specialist treats your patient's profile as what it really is — a set of inclusion and exclusion criteria — and works the registry against it.

## How it searches

Trial Matcher queries the ClinicalTrials.gov registry directly through Lumen's trial search tool {{< tier-badge "pro" >}}, filtering by:

- **Condition** — the diagnosis, including molecular subtype where it matters ("ER+ HER2− metastatic breast cancer", not just "breast cancer")
- **Intervention** — a drug class, a specific agent, a device, or a modality you want (or want to avoid)
- **Recruitment status** — recruiting and not-yet-recruiting by default, so the shortlist isn't padded with closed studies
- **Phase, sponsor, and study type** — when you care about them

Each result comes back with its NCT ID, title, phase, sponsor, eligibility criteria, and enrollment information — the raw material for the real work, which is matching.

## From search results to a ranked shortlist

A registry search finds trials *about* the condition. Trial Matcher's job is finding trials *for this patient*. It scores each candidate against the profile you gave it and returns a ranked shortlist where every entry shows:

1. **Why it matched** — the inclusion criteria the profile satisfies
2. **The eligibility gaps** — the criteria you haven't documented yet ("requires measurable disease per RECIST 1.1 — not stated in the profile") and the ones that likely exclude ("prior exposure to a CDK4/6 inhibitor is exclusionary in this arm")
3. **Site and contact information** — where the trial runs and who to call

The gaps are the point. A shortlist that says *"strong match, pending an ECOG status and a creatinine"* tells your coordinator exactly what to pull from the chart before making a single phone call.

## A worked example

{{< chat-demo title="Chat" >}}
{{< user >}}@Trial Matcher — find active trials for a 58-year-old woman with metastatic ER+ HER2− breast cancer, progressed on two lines of endocrine therapy including a CDK4/6 inhibitor. ECOG 1.{{< /user >}}
{{< lumen >}}Searched ClinicalTrials.gov for recruiting studies. **23 candidates → 6 plausible → top 3 ranked:**

**1. Oral SERD + targeted combination, phase 3** — Strong match: post-CDK4/6 progression is an *inclusion* criterion here, ECOG 0–1 required (met). **Gap:** requires an ESR1 mutation result — not in the profile. 40+ US sites recruiting.

**2. ADC monotherapy, phase 2** — Matches line of therapy and receptor status. **Gap:** requires measurable disease per RECIST 1.1 and a biopsy within 12 months. 12 sites, coordinator contacts attached.

**3. Next-generation endocrine combination, phase 1b/2** — Eligible on paper; note prior fulvestrant is exclusionary in arm B only. Single-site — may matter for travel.

Each entry includes the NCT ID, full eligibility text, and site contacts. Want this as a one-page PDF for the tumor board, or should I pre-screen the profile against the next three?{{< /lumen >}}
{{< /chat-demo >}}

Fictional patient, real workflow: the ranked list, the named gaps, and the specific data to gather next.

{{< callout type="warning" >}}
**Share the profile, not the person.** Trial matching needs the diagnosis, prior therapies, performance status, and key labs — never a name, MRN, or date of birth. Lumen is built with HIPAA safeguards — encryption at rest and audit logging — and Pro plans include [de-identification tools](/tools/privacy/) that pseudonymize chart text before the AI sees it.
{{< /callout >}}

## Pre-screening, not enrollment

Be precise about what this Specialist is: a **pre-screening instrument**. It surfaces candidates and organizes the eligibility picture so a human can act quickly. It does not determine eligibility — registry listings lag protocol amendments, and half the real criteria (labs, imaging, biopsy timing) live in the chart, not the prompt. **Enrollment decisions belong to the trial's investigator and coordinator**, made against the current protocol with source documents in hand. Trial Matcher's job is to make sure the right phone call happens a week earlier than it otherwise would.

## When it saves the most time

- **After standard options run out** — the moment "is there a trial?" becomes the plan, you need a shortlist today, not after the weekend.
- **Research coordinators screening a clinic list** — run each profile in minutes and spend your day on the strong matches.
- **Tumor board prep** — a ranked shortlist with gaps named is a better slide than "trials exist."
- **Rechecking a changing registry** — new trials open monthly; a rerun costs one message.

## What's under the hood

Picking `@Trial Matcher` pre-loads the [Clinical Trial Matcher skill](/skills-and-specialists/skills/#clinical-trial-matcher) and points Lumen at [ClinicalTrials.gov search and PubMed](/tools/literature-research/), the NPI provider directory for site and investigator details, and [ICD-10 lookup](/tools/coding-labs/) to anchor the condition precisely. The trial search tool is available on paid plans — see [Plans](/plans/) for what's included.

## Next steps

- See the research tools behind it: [Literature & research](/tools/literature-research/)
- Need the evidence, not the trial? Try the [Clinical Research Specialist](/skills-and-specialists/specialists/)
- Compare plans for trial search access: [Plans](/plans/)

{{< cta heading="Find the trial your patient hasn't heard about yet" href="/plans/" label="See plans" variant="subtle" >}}
Type @ in any chat, pick Trial Matcher, and describe the profile — the ranked shortlist comes back in minutes.
{{< /cta >}}
