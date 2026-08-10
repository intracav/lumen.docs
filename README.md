# Lumen Docs

Documentation site for **Lumen**, the clinical AI assistant by Intracav. Hugo (custom theme, no external theme), deployed to GitHub Pages at **https://docs.intracav.ai/**.

## Local development

```bash
hugo server              # live-reload dev server at :1313
hugo --minify            # production build into public/
npx pagefind --site public --serve   # build + preview the search index
```

Requires Hugo **extended** (CI pins the version in `.github/workflows/deploy.yml`).

## How the site is organized

- `content/<section>/` — one directory per top-level section. The sidebar and menus are generated from the section tree; **adding a page never requires touching a layout**.
- Section order and page order come from `weight` in frontmatter (ascending).
- Each section's `_index.md` sets `cascade: audience: clinician|org|partner|all`, which controls which sidebar group the section appears under.

## Frontmatter contract

Required on every page:

```yaml
title: "Page Title"            # ≤ ~55 chars, search-intent aware
description: "…"               # ≤160 chars; becomes the meta description + og:description
weight: 3                      # order within the section
```

Optional:

```yaml
lead: "…"            # on-page subtitle under the H1 (distinct from description)
keywords: […]        # extra SEO keywords
aliases: [/old/url/] # REQUIRED when a page moves — GH Pages has no server redirects;
                     # Hugo emits meta-refresh stubs at the old URLs
tier: pro            # renders a plan badge (free|pro|plus|max) linking to /plans/
status: beta         # renders a status badge (beta|coming-soon|new)
audience: clinician  # usually inherited from the section cascade
step: 2              # getting-started only: card shows "Step 2"
hideAutoGrid: true   # section _index only: suppress the automatic child-page card grid
schema: software     # emit SoftwareApplication JSON-LD instead of TechArticle
```

**Dates are automatic** — `enableGitInfo` derives lastmod from git history (sitemap, RSS, JSON-LD). Don't hand-maintain dates.

## Shortcodes

| Shortcode | Use |
|---|---|
| `step num="1" title="…"` (paired) | Numbered tutorial step |
| `callout type="info|success|warning|important"` (paired) | Callout box |
| `tip title="…"` (paired) | Tip card |
| `tool-card name="…" icon="…" desc="…" example="…" badge="…" color="var(--accent)"` | Tool reference card |
| `chat-demo title="…"` + nested `user` / `lumen` (paired) | Animated chat mockup — use this instead of hand-writing `chat-mockup` HTML |
| `tabs` + nested `tab name="…"` (paired) | Tabbed content (curl vs SDK, etc.) |
| `card title="…" href="…" icon="…" tint="accent|green|blue" prompt="…"` inside `card-grid` | Link/scenario cards |
| `tier-badge "pro"` | Plan pill linking to /plans/ |
| `status-badge "beta"` | beta / coming-soon / new pill |
| `cta heading="…" href="…" label="…" variant="contrast|subtle"` (paired) | Conversion banner |
| `faq question="…"` (paired) | FAQ item — also emits FAQPage JSON-LD automatically |
| `term "RAG"` | Glossary link with dotted underline |

All shortcodes are called with Hugo's `{{</* name … */>}}` syntax.

## Style rules (enforced by CI greps)

- v2 brand tokens only (`--accent`, `--palace-green`, `--smoky-blue`, tint classes). Legacy vars (`--primary`, `--cyan`, `--purple`, …) fail the build.
- Product naming: **Lumen** (product), **Intracav** (company), **Knowledge Pack** (never "extension" for content), **Policies**, **Website Bot**, **Folders/Departments** (never Spaces/Teams), `@` = **Specialists**, `/` = **Skills**.
- Plans are **Free / Pro / Plus / Max** — no other tier names. No dollar amounts in docs; link to intracav.ai for pricing.
- Security language: "built with HIPAA safeguards" (encryption, audit logs, BAA available) — never "HIPAA compliant/certified".
- Sample prompts use realistic but **fictional** clinical details, never real patient data.

## Deploy

Push to `main` → GitHub Actions builds (Hugo → Pagefind → link check) and deploys to Pages. PRs run the same build without deploying; download the `github-pages` artifact to review. The custom domain is set via `static/CNAME`.
