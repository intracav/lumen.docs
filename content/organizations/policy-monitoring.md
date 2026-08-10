---
title: "Authority-Source Monitoring & Findings Review"
description: "Register CDC, FDA, CMS, and specialty-society pages; Lumen detects changes and raises findings your team reviews — drafting policy amendments, never auto-publishing."
lead: "Know when the ground shifts under your policies."
weight: 4
tier: max
keywords: ["policy compliance monitoring", "regulatory change monitoring hospital", "CDC guideline change alerts"]
---

Every institutional policy stands on external ground: a CDC recommendation, an FDA communication, a CMS condition of participation, a specialty-society guideline. That ground moves — and when it does, the gap between what the authority now says and what your policy still says is invisible until someone goes looking. Usually that someone is a surveyor.

Authority-source monitoring, part of the [Policies](/organizations/policies/) add-on {{< tier-badge "max" >}}, does the looking continuously.

## Register the sources that matter to you

You tell Lumen which pages your policies depend on — CDC infection-control pages, FDA safety communications, CMS requirement pages, specialty-society standards, your state health department. Each source is checked on a schedule you control, and you can trigger a check on demand when you know something just changed.

## How change detection works

On each check, Lumen fetches the page, extracts its content, and compares a fingerprint against the previous crawl. Same fingerprint, nothing happens. A change produces a record of **what's new** — the added or altered text, not just "this page changed sometime."

Two honest details worth knowing:

- **The first crawl is a silent baseline.** When you register a source, Lumen records its current state without raising anything — there was nothing to drift *from*, and a day-one flood of false alerts would teach your team to ignore the real ones.
- **One broken source never blocks the rest.** If a page errors or moves, that source shows an error status you can see and fix; every other source keeps its schedule.

## Findings: the review queue

When a monitored change may affect one of your policies, a **finding** appears in the review queue: which source changed, what the new text says, which policy it appears to touch, and — where Lumen can propose one — a suggested amendment.

From there, a human decides:

- **Accept** — the suggested amendment is materialized as a **new draft version** of the policy, clearly marked as amendment-sourced. It then goes through your normal review: someone reads it, edits it if needed, and publishing remains a separate, explicit step. Accepting a finding never changes what members see.
- **Dismiss** — the finding is cleared with a note. The change was noise, or already handled, and the queue stays trustworthy.

Findings that are overtaken by newer changes are superseded rather than left to rot in the queue.

{{< callout type="important" >}}
**Nothing auto-publishes. Ever.** Monitoring shortens the time between "the CDC changed this" and "our committee is looking at it" from months to days — but the committee stays in the loop. Lumen drafts; your people decide.
{{< /callout >}}

## Why this design

The alternative approaches both fail in practice. Fully manual monitoring means an infection preventionist re-reading agency pages on a calendar reminder — thorough in January, abandoned by June. Fully automatic updating means software rewriting institutional policy without review, which no accreditor and no sensible medical director would accept. The finding-and-review loop is the middle that works: machines do the vigilance, humans keep the authority.

## Next steps

- [The Policies publishing loop this feeds into](/organizations/policies/)
- [Departments and roles — who reviews findings](/organizations/departments-and-seats/)
- [Talk to us about the Policies add-on](https://intracav.ai/)
