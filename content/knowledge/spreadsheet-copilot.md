---
title: "The Spreadsheet Copilot"
description: "Select cells in a Lumen spreadsheet, describe the change in plain language, review the proposed edit, and accept it — with Undo always one tap away."
lead: "Describe the change you want — 'add a BMI column from these two' — and review the edit before a single cell moves."
weight: 4
keywords: ["spreadsheet AI", "clinical data spreadsheet", "AI spreadsheet editing"]
---

When Lumen builds you a spreadsheet — a QI tracking sheet, an audit table, a staffing grid — the numbers rarely stay still. You need one more computed column, a flag on out-of-range values, a cleaned-up header row. The spreadsheet copilot is how you make those changes without exporting to Excel and back: open the sheet, describe the edit, and review what Lumen proposes before anything is committed.

## How it works

1. **Open a spreadsheet** — any spreadsheet [artifact](/chat/artifacts/) Lumen has created for you.
2. **Select the cells that matter** (optional). A selection tells the copilot exactly what you're talking about; without one, the whole sheet is fair game.
3. **Describe the change** in plain language, the way you'd hand it to a colleague: *"add a column computing BMI from these two"*, *"highlight values outside the reference range"*, *"sort by draw date, newest first"*.
4. **Watch the proposal stream in.** Lumen reads the live sheet — the actual current values, not a stale copy — and streams back a concrete proposed edit.
5. **Accept or discard.** Nothing touches your data until you accept. Accepting commits the change to the sheet and leaves a compact *"Edited …"* note in the chat transcript — with an **Undo** right on it.

{{< callout type="info" >}}
**The copilot stays in its lane.** During an edit it can do exactly one thing: edit this spreadsheet. It can't wander off into web searches, other documents, or other tools mid-edit — the request you make is the change you review. If you ask it a question about the data instead of requesting a change, it simply answers, in the sheet, without editing anything.
{{< /callout >}}

## An example flow

Say Lumen built you a line-listing of central line days for a unit QI review:

{{< chat-demo title="In the spreadsheet drawer" >}}
{{< user >}}Add a column that flags any dwell time over 7 days, and put the flagged rows in red.{{< /user >}}
{{< lumen >}}Proposed: a new "Dwell &gt; 7d" column (K) computed from Insertion Date and Removal Date, with the 6 rows exceeding 7 days highlighted. Review the changes below, then Accept to apply.{{< /lumen >}}
{{< /chat-demo >}}

You review the six highlighted rows, accept, and the sheet updates. The chat gains one line — *"Edited Central Line Log: added dwell-time flag column"* — so there's a record of what changed and a way back if you change your mind. The back-and-forth itself stays in the spreadsheet panel; it never clutters the conversation.

## Tips for better proposals

- **Select before you ask.** "Average these" with twelve cells selected is unambiguous; "average the values" on a forty-column sheet is a guess. The selection is part of what Lumen reads.
- **Name the anchor columns.** *"Compute BMI from Height (cm) and Weight (kg)"* beats *"add a BMI column"* — you're telling it which inputs are authoritative.
- **One change per ask.** Each proposal is reviewed and accepted as a unit. Three small, reviewable edits beat one sprawling request you can only accept or reject whole.
- **Ask questions freely.** *"Which rows are missing a removal date?"* costs nothing — questions get answers, not edits, so you can interrogate the data before deciding what to change.

{{< callout type="warning" >}}
**Careful with patient information.** A spreadsheet of real patients is PHI like any other document. Keep identifiers out of sheets that don't need them — see [privacy and de-identification tools](/tools/privacy/).
{{< /callout >}}

## Next steps

- [Reports & files](/chat/artifacts/) — how Lumen's generated documents and spreadsheets work
- [Guides](/guides/) — end-to-end workflows that put artifacts to work
- [Documents, sources & exports](/knowledge/documents/) — exporting the finished sheet to Excel
