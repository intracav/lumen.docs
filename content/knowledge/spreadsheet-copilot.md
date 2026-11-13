---
title: "Edit a spreadsheet by asking Lumen"
navTitle: "Spreadsheet copilot"
description: "Select cells in a spreadsheet Lumen made, describe the change in plain words, review the proposed edit, and accept or discard it. Undo is one click away."
lead: "Describe the change, review it, then accept. Nothing changes until you do."
weight: 7
icon: table
keywords: ["spreadsheet AI", "clinical data spreadsheet", "AI spreadsheet editing"]
glance:
  what: "A way to change a spreadsheet Lumen created by describing what you want. Lumen proposes the edit, and you accept or discard it."
  who: "Anyone working with a tracking sheet, audit table or roster that Lumen built in a chat."
  why: "To add columns, flag rows or explain formulas without exporting to Excel, while reviewing every change before it happens."
  needs: "A Lumen account and a spreadsheet Lumen created in a chat. About 2 minutes per change."
  result: "An updated spreadsheet, with a note in the chat and a way to undo."
---

Lumen built you a central-line audit sheet for the unit's QI review. Now you need one more column: dwell days, flagged when over 7. Instead of exporting to Excel, select the cells, tell Lumen what you want, and review the proposed change before it's applied.

## Before you start

- **A spreadsheet Lumen made** in a chat. It opens in the panel beside the chat. See [Artifacts](/chat/artifacts/).

## How to change a spreadsheet

{{< steps >}}
{{< step title="Open the spreadsheet" >}}Click the spreadsheet in your chat to open it in the panel.{{< /step >}}
{{< step title="Select the cells" >}}Select the range the change is about, such as the insertion and removal date columns. An **Ask Lumen** button appears at the corner of your selection, or press {{< kbd "⌘" "K" >}}.{{< /step >}}
{{< step title="Describe the change" >}}Type in **Tell Lumen what to do with this selection…**, for example "Add a column with dwell days, and flag any over 7". Or pick a suggestion: **Add a derived column for this range**, **Flag rows that need attention** or **Explain the formulas here**.{{< /step >}}
{{< step title="Review the proposal" >}}Lumen reads the current sheet and shows **Proposed changes**. Check each one.{{< /step >}}
{{< step title="Accept or discard" >}}Click **Accept** to apply the changes, or **Discard**. You can also choose which changes to accept.{{< /step >}}
{{< /steps >}}

After you accept, the chat shows a line starting **Edited —** with an **Undo** link. If you undo, it reads **Reverted —**.

## What you'll see

{{< lui-block title="Proposed changes" sub="Central-line audit · 4 West · fictional data" >}}
{{< lui-rows >}}
{{< lui-row type="check" checked=true title="Add column K: Dwell days" body="= Removal date − Insertion date" >}}
{{< lui-row type="check" checked=true title="Flag rows over 7 dwell days" body="6 rows highlighted" >}}
{{< /lui-rows >}}
{{< lui-actions "Accept 2" "Discard" >}}
{{< /lui-block >}}

## Tips

- **Select first.** A selection tells Lumen exactly which cells you mean.
- **Name the columns.** "Compute BMI from Height (cm) and Weight (kg)" is clearer than "add BMI".
- **One change at a time.** Small changes are easier to review.
- **Ask questions too.** "Which rows are missing a removal date?" gets an answer without changing anything.
- **Formula cells are managed by Lumen.** To change a formula, select the cell and ask Lumen.

## Limits and safety

- **Only Lumen's spreadsheets.** The copilot works on spreadsheets Lumen created in a chat. To work on your own file, attach it to a chat and ask Lumen to build a sheet from it.
- **Edits conflict safely.** If the sheet changed somewhere else, Lumen says **This sheet changed elsewhere** and offers **Reload** or **Keep editing**.
- **Check calculated results.** Spot-check a few rows of any new column before you rely on it.
- **Patient information.** A spreadsheet of real patients is protected health information. Keep identifiers out of sheets that don't need them. See [Privacy tools](/tools/privacy/).

## FAQ

{{< faq question="Can I undo a change?" >}}
Yes. Click **Undo** on the **Edited —** line in the chat.
{{< /faq >}}
{{< faq question="Can I download the spreadsheet?" >}}
Yes. Use **Download .xlsx** in the spreadsheet panel.
{{< /faq >}}
{{< faq question="Does Lumen change anything without asking?" >}}
No. Lumen only proposes changes. Nothing is applied until you click **Accept**.
{{< /faq >}}

## Next steps

{{< related "/chat/artifacts/" "/knowledge/documents/" "/tools/document-generation/" >}}
