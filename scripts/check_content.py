#!/usr/bin/env python3
"""Lint content/ against WRITING.md. Exit 1 on any error.

Checks (outside fenced code blocks):
  * required frontmatter: title, description (<= 160 chars); `glance` on every
    non-index page (opt out with `noGlance: true`)
  * no raw HTML / inline styles / legacy CSS vars / emoji
  * retired vocabulary and forbidden claims
"""
import pathlib, re, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent / "content"
SKIP = {"kitchen-sink.md", "search.md"}

FORBIDDEN = [
    (r"HIPAA[- ](compliant|certified|compliance certified)|HIPAA safeguards", 'say "built with security safeguards"; see WRITING.md'),
    (r"business associate agreement (is|are) (available|offered)", "no BAA claim (open compliance item)"),
    (r"\bPublisher Portal\b", 'renamed "Admin console"'),
    (r"\bBAA\b[^.]{0,40}\b(available|included|offered|provided)|(available|offer|sign|provide)[^.]{0,30}\bBAA\b", "no BAA claim (open compliance item); see WRITING.md"),
    (r"\bwebsite bots?\b|\bchat ?bots?\b", 'say "website assistant"'),
    (r"\bSpaces?\b(?! ?bar)", 'say "Folder"'),
    (r"\bcontent packs?\b|\bknowledge extensions?\b", 'say "Knowledge Pack"'),
    (r"\bbaseline knowledge\b", 'say "Always-on guidance"'),
    (r"\b(SecurAcath|Interrad|Covalon|Wayne Health)\b", "real customer/company name; use the fictional cast (WRITING.md)"),
    (r"you earn 70%|lumen keeps 30%|export as agent", "retired product claim"),
    (r"\$\s?\d", "no prices in docs; link to intracav.ai"),
    (r"\b(simply|seamless(ly)?|leverage|cutting-edge|revolutionary)\b", "filler word"),
    (r"var\(--(primary|cyan|purple|green|orange|bg-dark|bg-card|text-secondary|radius-sm|shadow-card)\)", "legacy CSS variable"),
]
HTML = re.compile(r"<(div|span|a|img|table|section|p|br|svg|button)\b|style=", re.I)
EMOJI = re.compile("[\U0001F300-\U0001FAFF☀-⛿✀-➿️]")

def strip_code(text):
    out, fence = [], False
    for line in text.splitlines():
        if re.match(r"^\s*(```|~~~)", line):
            fence = not fence
            out.append("")
            continue
        out.append("" if fence else re.sub(r"`[^`]*`", "", line))
    return out

errors = 0
for path in sorted(ROOT.rglob("*.md")):
    if path.name in SKIP:
        continue
    rel = path.relative_to(ROOT.parent)
    text = path.read_text()
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", text, re.S)
    if not m:
        print(f"{rel}: missing frontmatter"); errors += 1; continue
    fm, body = m.group(1), m.group(2)
    if "draft: true" in fm:
        continue
    def err(msg, n=None):
        global errors
        errors += 1
        print(f"{rel}{':' + str(n) if n else ''}: {msg}")
    if not re.search(r"^title:", fm, re.M): err("missing title")
    d = re.search(r'^description:\s*"?(.*?)"?\s*$', fm, re.M)
    if not d: err("missing description")
    elif len(d.group(1)) > 160: err(f"description is {len(d.group(1))} chars (max 160)")
    if path.name != "_index.md" and "glance:" not in fm and "noGlance: true" not in fm:
        err("missing `glance:` (every page must stand alone; see WRITING.md)")
    offset = text[: text.index(body)].count("\n")
    lines = strip_code(body)
    allow_bots = "salesiq" in path.name or rel.parts[1] == "learn"  # Zoho's own UI; general AI concepts
    for i, line in enumerate(lines, 1):
        n = i + offset
        if re.search(r"\{\{[<%]", line):
            scan = re.sub(r"\{\{[<%].*?[>%]\}\}", "", line)
        else:
            scan = line
        if HTML.search(scan): err("raw HTML or inline style; use a shortcode", n)
        if EMOJI.search(line): err("emoji", n)
        for pat, why in FORBIDDEN:
            if allow_bots and "bot" in pat: continue
            if re.search(pat, line, re.I if "Spaces" not in pat else 0):
                err(f"{why}: {re.search(pat, line, re.I if 'Spaces' not in pat else 0).group(0)!r}", n)

print(f"\n{errors} problem(s)" if errors else "content check passed")
sys.exit(1 if errors else 0)
