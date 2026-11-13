# Writing Lumen Docs

The contract for every page on docs.intracav.ai. Read it in full before writing.
The live component reference is `content/kitchen-sink.md` (run `hugo server -D`
and open `/kitchen-sink/`).

## 1. The standard: every page stands alone

Any page must work when it's **sent on its own**, to someone who has never
heard of Lumen. That could be a nurse manager, a hospital's CMIO or compliance
lead, a medical device company's marketing or regulatory team, or an
individual clinician. After reading **that page only**, they must know:

1. **What** this is, in one plain sentence.
2. **Who** it is for, and whether it applies to them.
3. **Why** they would use it: the outcome, in their terms.
4. **What they need** first: plan, role, setup and time.
5. **How** to do it: complete, numbered steps with the exact labels they'll see on screen.
6. **What they'll see** when it worked: a screenshot or a faithful mockup.
7. **The limits**: what it doesn't do, what to check, and the safety notes.
8. **Where to go next.**

So every page (except pure index pages) has a `glance:` block in its frontmatter, and the
body follows this order:

```
(glance renders automatically at the top)
Intro paragraph       — 2–4 sentences: the situation, then the payoff. No "In this guide we will".
## Before you start   — plan / role / what to have ready (skip only if truly nothing)
## How to …           — steps shortcode; one action per step; exact UI labels via ui-path
## What you'll see    — screenshot (with mockup fallback) or chat-demo / Lumen UI example
## Tips / Good to know
## Limits and safety  — honest boundaries (required for clinical and compliance features)
## FAQ                — 2–5 real questions (faq shortcode; emits FAQ schema)
## Next steps         — related shortcode with 2–4 pages
```

Concept pages (in `learn/`, plus overviews) swap "How to" for "How it works" and keep the rest.

### Frontmatter

```yaml
title: "Check a drug interaction"          # ≤ 55 chars, sentence case, task-shaped for how-tos
navTitle: "Drug interactions"              # optional short sidebar label
description: "…"                           # ≤ 160 chars, a complete sentence; used in search, SEO and the section index
lead: "…"                                  # 1–2 sentences under the H1, the promise of the page
weight: 3
icon: pill                                 # a name from layouts/partials/icon.html
tier: pro                                  # lowest plan that has it: free | pro | plus | max (omit if all plans)
status: beta                               # optional: beta | preview | new | coming-soon | gated | experimental | admin | add-on
who: "clinicians"                          # optional meta line: "team admins", "device makers", …
glance:
  what: "…"     # one sentence, no jargon
  who: "…"
  why: "…"
  needs: "…"    # plan, role, time ("About 5 minutes")
  result: "…"   # optional
aliases: ["/old/path/"]                    # REQUIRED whenever a page moves or is renamed
```

## 2. Voice

- Write for a smart reader who isn't technical. Imagine a charge nurse reading on a phone between patients, or a device company's marketing VP.
- Use second person and active voice in the present tense: "Click **Share**. Lumen copies a link."
- Keep sentences short. One idea per paragraph. Prefer a 6th–8th grade reading level for clinician pages; admin and developer pages can be denser but still plain.
- **Define every term the first time it appears on the page**, even if another page defines it ("a *Knowledge Pack*, a curated collection of documents Lumen can search"). Link it once with the `term` shortcode if it's in the glossary.
- Don't use filler: "simply", "just", "easily", "powerful", "seamless", "leverage", "unlock", "revolutionary", "cutting-edge". No exclamation marks. No emoji anywhere.
- Professional, calm and specific. Say exactly what happens rather than selling it.
- Headings are sentence case and task- or question-shaped ("How to share a chat", "What happens to my data").
- Give real numbers only when verified from code or config. Never invent counts, percentages, times or customer names.

## 3. Truth sources (accuracy beats completeness)

The docs must match the shipped product. In order of authority:

1. **`../intracav-landing/docs/capability-inventory.md`**: what's PROD, PARTIAL, EXP or ABSENT, and the exact claims a page may make. **It outranks everything else.** ABSENT features are not documented. EXP features are documented only with `status: experimental` and a plain warning. PARTIAL features document only the parts that exist.
2. The Flutter app, `../intracav-agent/lib/` (screens, labels, routes). Copy the **exact on-screen labels** from here. `lib/routing/` gives routes. `features/<x>/` holds each area.
3. The server, `../lumen_server/src/` (behaviour, limits, plans: `routes/stripe.rs`, `services/…`, `config/production.toml`).
4. `../intracav-agent/LUMEN_PLATFORM_UX_OVERHAUL.md` for the knowledge model, policy lifecycle and website-assistant placement, plus recent commit messages (`git log`) for features that just shipped.
5. The current docs page, which is a starting point only. It's ~3 months stale and often overclaims.

If something can't be verified, leave it out or describe it more generally. Never guess a menu label: find it in the code.

### Platform facts every writer must respect
- **Models:** Lumen picks the model by plan. Don't claim "multi-model routing", "best model for each task" or a choice of AI providers. Don't name the model vendor.
- **Long tasks:** Chats and specialist work run on Lumen's servers. You can close the tab, and the work keeps going and is there when you come back (up to about an hour per task). Don't claim recovery after a server failure.
- **Approvals:** when a specialist (in chat) wants to act outside Lumen (send email, post, write to another system), it waits for approval and runs exactly as approved. Typing "I approve" does nothing. **Workflow steps (Send Email, Slack, CRM) run as configured, without a per-run approval.** Never say "anything that leaves Lumen waits for approval".
- **Audit:** "tamper-evident (hash-chained) audit log", with no certification claims.
- **Privacy:** de-identification before external model calls applies **only** to Research and the embedded website assistant. Never claim it platform-wide.
- **Security language:** "built with security safeguards (encryption, access controls, a tamper-evident audit log)". Never "HIPAA compliant" or "certified". No SOC 2 or HITRUST claims.
- **No BAA claim.** `lumen_server/config/production.toml` records that no plan currently has a BAA-backed model path (open compliance item). Do **not** write "BAA available". Do write: "Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements." Use fictional or de-identified details in examples.
- **No patient product:** Lumen is for clinicians, staff, organizations and device makers. Don't describe patient-facing pathways. Patient *handouts* written by clinicians are fine.
- **Workflows:** scheduled and triggered runs are unattended. A run started from the editor canvas stops if you close it.
- **Pilot** runs in your open app; it isn't a background worker.
- **Studio** ships dark (off by default). Mark it `status: gated` and explain that it's being rolled out.
- **qPolicy** is a **Lumen Max add-on**. It answers from **your own policy manual**, not a "dedicated instance". TJC content is a chapter skeleton only. Policy conflict detection finds overlaps and duplicates for a person to merge; it is **not** a contradiction detector. There's no EHR, AD or SAML SSO integration for qPolicy. Nothing publishes automatically.
- **Lumen Connect:** website-assistant citations show the **document and page**. CRM destinations are **Zoho CRM and HubSpot** (not Salesforce). There are no per-team analytics views and no categorized declines. Smart IFU self-serve needs **Max**. Don't feature unclaimed pages.
- **Super User** (in-app admin assistant) is **Max only**: preview, then confirm, then action log, then undo.
- **Plans** are Free / Pro / Plus / Max only. No dollar amounts; link to https://intracav.ai for pricing.
- Sample prompts use **realistic but fictional** clinical details. Never real patient data, and never real companies, customers, hospitals or vendors as examples (name an integration only when stating what Lumen connects to). The fictional cast is Harbor Valley Medical Center (departments: Vascular Access, ICU, Emergency, Med-Surg), and the device maker is Northwind Vascular, "SL-4 securement device".

## 4. Vocabulary (matches the app; the app enforces it with tests)

| Use | Never |
|---|---|
| **Lumen** (product), **Intracav** (company) | Lumen AI Inc., IntraCav |
| **Specialist** (the persona you call with `@`) | agent (except the Workflow builder's "Agent" step, and in `learn/` concept pages explaining AI agents generally) |
| **Skill** (`/` command) | prompt template |
| **Explore** (the one list of specialists, skills and tools) | catalog, marketplace |
| **Pilot**, with modes **Show me** and **Do it** | guide mode, autopilot |
| **Feature map** (opened from Pilot) | Discover |
| **Team** for an organization *as the app labels it*. In prose for hospital or device-maker readers you may say "organization", and add "(called a *team* in Lumen)" once per page | Space |
| **Folder** | Space |
| **Department** | sub-team |
| **Knowledge Pack** | extension, content pack |
| **Always-on guidance** (text always given to Lumen, never searched or cited) | baseline knowledge |
| **Website assistant** | bot, chatbot, Zobot (except when quoting Zoho SalesIQ's own UI) |
| **Admin console** (the button label; the app is inconsistent, so use this) | Publisher Portal |
| **Smart IFU page** | device bot |
| **Retired** (a policy) | archived |
| **In force / Searchable / Verification required / Human verified** | live, indexed |
| **Approve / Approval** | consent |
| Evidence grade pill: **Strong support / Moderate support / Limited support**; clicking it opens the **Lumen Evidence** panel. In `lumen`, use evidence="Moderate support" (true = Strong support) | fact-check, "Lumen Evidence pill" |

UI labels go in **bold** and must match the app character for character. Use `ui-path` for click paths.

## 5. Components (see `/kitchen-sink/`)

**Use shortcodes, never raw HTML.** Shortcodes that accept inner content must be closed
or self-closed (`{{</* screenshot src="x" /*/>}}`).

| Need | Shortcode |
|---|---|
| Steps | `steps` wrapping `step title="…"` (numbers are automatic) |
| Click path | `{{</* ui-path "Settings" "Appearance" */>}}` · keys: `{{</* kbd "⌘" "K" */>}}` |
| Callout | `callout type="info|tip|warning|important|safety" title="…"` |
| Real screenshot | `{{</* screenshot src="<slug>" alt="…" caption="…" url="lumen.intracav.ai/…" */>}}fallback mockup{{</* /screenshot */>}}`. It renders the capture from `static/img/screens/<slug>-light/-dark.(webp|png)` when it exists, otherwise the inner mockup. **Always wrap a faithful mockup inside**, so the page is complete today. |
| Chat mockup | `chat-demo title specialist caption composer` → `user attach=…`, `lumen thought tools sources evidence memory`; inline `cite N`, `tool-chip`, `thinking`, `artifact type title sub`, `approval action`, `task-strip`/`task state label meta`, `verdict`, `follow-ups "a|b"`, `spec-chip "Name"`, `sources`/`source n title meta quote` |
| Composer | `composer text="@Medication Review …" menu="specialists|skills|attach" items="Name|desc;Name|desc"` |
| Lumen UI (interactive answers) | `lumen-ui-example title component category` containing `lui-code` (the DSL) + preview built from `lui-block`, `lui-rows`/`lui-row type=check|radio checked title body value unit`, `lui-score`, `lui-stats`/`lui-stat`, `lui-bars data="A:1,B:2"`, `lui-kv "k=v;k=v"`, `lui-callout variant`, `lui-severity major|moderate|minor`, `lui-actions "Primary" "Secondary"` |
| Link to MagicAF examples | `{{</* magicaf path="/docs/lumen-ui/components/<category>/" title="…" /*/>}}`. Categories: layout, data-display, charts, forms, clinical, media, feedback, ai |
| Cards | `card-grid cols=2|3` + `card title href icon tint kicker prompt badge` |
| Next steps | `{{</* related "/path/one/" "/path/two/" */>}}` (fails the build if a path is wrong) |
| Process | `flow` + `flow-node kicker title icon tint` |
| Tabs | `tabs` + `tab name` |
| FAQ | `faq question="…"` |
| Badges | `tier-badge "max"`, `status-badge "beta"` |
| Glossary link | `term "RAG"` |
| CTA (index pages only) | `cta heading href label secondary-href secondary-label` |

**Lumen UI** is the component system Lumen uses to draw interactive answers (checklists,
calculators, tables, charts, drug cards…) inside chat. Its technical reference lives on
MagicAF: https://magicaf.intracav.ai/docs/lumen-ui/. Component names and props must match
`../intracav-agent/packages/lumen_ui/LUMEN_UI.md`. When a page shows an interactive answer,
use `lumen-ui-example` with the real component name, and link the MagicAF category page.

### Screenshot slugs being captured (real app, fictional data)
`home`, `chat-cited-answer`, `chat-thinking-tools`, `chat-artifact`, `composer-specialists`,
`composer-skills`, `lumen-ui-inline`, `agents-launch`, `agents-task-strip`, `agents-approval`,
`agents-deliverable`, `workflows-templates`, `workflows-canvas`, `workflows-runs`, `pilot-plan`,
`live-lobby`, `live-tv-results`, `learning-home`, `cert-binder`, `documents`, `folders`,
`knowledge-packs`, `knowledge-map`, `memory-second-brain`, `research-workspace`, `guide-panel`,
`satellite-pair`, `admin-overview`, `admin-departments-seats`, `admin-audit-log`,
`qpolicy-library`, `qpolicy-reader`, `qpolicy-lifecycle`, `qpolicy-redline`,
`qpolicy-approval-chain`, `qpolicy-attestation-heatmap`, `compliance-treemap`,
`compliance-findings`, `assistant-overview`, `assistant-knowledge`, `assistant-install`,
`assistant-analytics`, `smart-ifu-page`, `smart-ifu-setup`, `super-user-console`,
`settings-appearance`, `plans-subscription`.
Reference the right slug wherever that screen is the subject, with a mockup fallback inside.
Use only the most relevant one or two per page. Don't decorate.

## 6. Hard rules (CI enforces some of these)

- No raw HTML in content. No inline `style=`. No legacy CSS variables. No emoji.
- No "HIPAA compliant/certified", no pricing amounts, no retired names (table above).
- Every moved or renamed page gets `aliases:`. Internal links use root-relative paths (`/chat/sources/`).
- Every `related` path must exist (the build fails otherwise).
- Every clinical example ends with checking the sources. Clinical pages carry a `safety` callout where a wrong answer could cause harm.
- Never claim what the capability inventory marks ABSENT. If you can't verify something, don't write it.

## 7. Canonical page map (link to these paths; owners create them)

`*` = new page. `→` = moved (old path goes in `aliases:`).

- **getting-started/**: what-is-lumen (done, the model page), first-chat, tour\* (Home, Explore, sidebar, Pilot, Settings), on-your-devices\* (web, desktop, phone; only what exists), check-interaction, find-a-code, differential, draft-a-note, run-a-calculator
- **chat/**: sending-messages, responses, sources, thinking, artifacts, interactive-answers\* (Lumen UI for non-technical readers), attachments, dictation, editing-and-branching, memory, models (plans and the model; honest), sharing
- **skills-and-specialists/**: explore\*, specialists/ (+ one page per key specialist that exists), skills, working-with-a-specialist\* (← agent-mode), approvals\*, verified-results\*
- **tools/**: calculators, coding-labs, document-generation, literature-research, medications, patient-records, privacy, protocols-decisions, search-sources, tool-index
- **pilot/**\*: show-me-and-do-it, feature-map, satellite, voice (experimental)
- **knowledge/**: documents, folders, knowledge-packs, knowledge-map\*, second-brain\*, news-feed, spreadsheet-copilot (cert-binder → learning/)
- **workflows/**: building-blocks, editor, triggers, running, publish
- **live/**\*: run-a-session, activities, results-and-tv
- **learning/**\*: courses-and-assignments, ce-tracking, cert-binder (← knowledge/cert-binder), author-a-course
- **research/**\*: get-started, analyses-and-reports
- **studio/**\*: (index page only unless more is verified)
- **organizations/**: admin-console\*, departments-and-seats, audit-and-access, knowledge-packs-admin, always-on-guidance\*, ehr, super-user\* (policies, policy-monitoring → qpolicy/; website-bots → connect/)
- **qpolicy/**\*: import-policies, policy-lifecycle (← organizations/policies), review-and-approval, attestation, compliance-coverage, regulatory-monitoring (← organizations/policy-monitoring), policy-answers, evidence-binder, health-systems
- **connect/**\*: smart-ifu, website-assistant (← organizations/website-bots), ifu-revisions, leads-and-analytics, crm-and-webhooks
- **developers/**: api, embed, mcp, lumen-ui\*, partner-knowledge-packs, salesiq-webhook, status
- **guides/**: existing guides (launch-a-website-bot → launch-a-website-assistant), plus set-up-a-smart-ifu\*, run-a-live-knowledge-check\*
- **learn/**, **trust/** (privacy, responsible-ai), **plans/**, **help/** (faq, glossary, troubleshooting)
