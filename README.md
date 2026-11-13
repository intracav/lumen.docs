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
- Each section's `_index.md` sets `group` (start | use | create | org | dev | more; groups are defined in `hugo.toml`), an `icon`, and an optional short `navTitle`.

## Writing and components

**Read [`WRITING.md`](WRITING.md) before writing or editing a page.** It is the binding contract:
every page must stand on its own for a reader who has never used Lumen (a clinician, a
hospital, or a device maker), with an `At a glance` block, complete steps, honest limits,
and next steps. It also covers truth sources (the capability inventory outranks everything),
the app vocabulary, every shortcode, and the canonical page map.

The live component reference is `content/kitchen-sink.md` (a draft): run `hugo server -D` and
open `/kitchen-sink/`.

`python3 scripts/check_content.py` lints content (frontmatter, glance, retired vocabulary,
compliance language, raw HTML, emoji). CI runs it before the build.

### Design system

The site mirrors the Lumen app: tokens from `intracav-agent/lib/core/theme/app_colors.dart`,
the radius scale and "fluid language" rules from `packages/lumen_ui/docs/design-language.md`,
and Inter + JetBrains Mono. All styling is in `assets/css/main.css` (tokens at the top, light
and dark), icons are in `layouts/partials/icon.html`, and app and Lumen UI mockups are
shortcodes. Real screenshots go in `static/img/screens/<slug>-light|dark|mobile.(webp|png)`
and are picked up automatically by the `screenshot` shortcode.

## Deploy

Push to `main` → GitHub Actions builds (Hugo → Pagefind → link check) and deploys to Pages. PRs run the same build without deploying; download the `github-pages` artifact to review. The custom domain is set via `static/CNAME`.
