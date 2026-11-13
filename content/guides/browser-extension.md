---
title: "Use Lumen beside any web page with the browser extension"
navTitle: "Browser extension"
description: "The Lumen browser extension opens Lumen beside the page you're on. It reads the page when you allow it and acts only with your approval."
lead: "Lumen in a panel beside your web-based EHR, formulary or supplier portal: it reads the page you're on when you allow it, and every click or keystroke it proposes waits for your approval."
weight: 26
icon: panels
tier: pro
status: beta
who: "clinicians"
glance:
  what: "The Lumen browser extension puts Lumen in a side panel next to the web page you're on. You can ask about the page, and Lumen can propose actions on it, such as typing in a search box, which run only after you approve them."
  who: "Clinicians and staff who spend their day in web-based systems, such as a browser-based EHR, a formulary or a supplier portal."
  why: "You ask about what's on screen without copying and pasting between windows, and you stay in control of anything that changes the page."
  needs: "A Lumen Pro plan or above, Chrome or Microsoft Edge, and early access to the extension (it isn't in the browser extension stores yet). About 10 minutes."
  result: "Lumen open beside your work, reading the page on request, with every action shown to you first."
---

A charge nurse at Harbor Valley Medical Center is looking at a supply catalog in one tab and a dressing protocol in another. She wants to know which catalog item matches the protocol, without copying text between windows. With the extension, Lumen sits in a panel beside the page. She asks about what's on screen, and when Lumen offers to search the catalog for her, she approves each step before it happens.

{{< callout type="info" title="Early access" >}}
The extension is in beta and isn't in the Chrome Web Store or Edge Add-ons yet. To try it, ask your Lumen contact for early access. You'll get the extension and install steps directly. A Safari version, which opens in its own window, is in development.
{{< /callout >}}

## Before you start

- **Plan.** Browser actions need **Pro** or above {{< tier-badge "pro" >}}. On a lower plan, the panel works as a normal chat and shows "Browser tools are not enabled for your plan yet." See [Plans](/plans/).
- **Browser.** Chrome or Microsoft Edge on a computer.
- **Early access**, as described above.
- **Your organization's rules.** If you'll use it beside a system that shows patient information, check your organization's policy first. Whatever Lumen reads from a page is sent with your message, just as if you had pasted it.

## How to use the extension

{{< steps >}}
{{< step title="Install it and sign in" >}}
Follow the install steps that came with your early access. Then click the Lumen icon in your browser toolbar, or press {{< kbd "Alt" "L" >}}, to open the panel. Under **Sign in with your Lumen account**, enter your **Email** and **Password** and click **Sign in**.

The panel uses the same account, chats and specialists as the Lumen app.
{{< /step >}}

{{< step title="Allow access to the site you're on" >}}
The bar at the top of the panel shows the site you're on. Lumen can't read a site until you allow it. Click **Allow access**, or, when Lumen asks, choose:

- **Always allow reads**: Lumen may read this site whenever you ask.
- **Allow once**: for this session only.
- **Deny**: nothing is read.
{{< /step >}}

{{< step title="Check what will be sent" >}}
Beside the message box, the page context chip shows **Included** or **Not included**. Click it to switch. To see exactly what will go with your message, open **Review page context** and click **Show everything that will be sent**.
{{< /step >}}

{{< step title="Ask about the page" >}}
Ask about what's in front of you:

```text
Summarize this page and pull out anything about dressing change intervals.
```

Lumen answers from the page text, with citations, in the panel. You can also highlight text on any page, right-click, and choose **Ask Lumen about "…"** to start a question about that selection.

If the tab is a PDF or Office file, the chip shows **Read as document**. Lumen reads the file itself, page by page.
{{< /step >}}

{{< step title="Let Lumen act, and approve each step" >}}
Ask for something that needs the page to change:

```text
Search this catalog for 5 Fr dual-lumen PICC kits and open the first result.
```

Before anything happens, the panel shows **Lumen wants to act in your browser**, with each proposed action described in plain words, such as typing a search term or clicking a result. Approve or deny each one with the tick and cross, or use **Approve all** or **Deny all**. When every action has a decision, click **Continue**.
{{< /step >}}

{{< step title="Deny something, and tell Lumen why" >}}
Try denying an action. A box appears: **Tell Lumen why (optional — helps it adjust)**. Lumen doesn't run the denied action and adjusts its plan.

To stop a reply at any time, click **Stop** or press {{< kbd "Esc" >}}.
{{< /step >}}
{{< /steps >}}

## What you'll see

{{< chat-demo title="Lumen side panel · catalog.supplier.example" caption="Illustration of the side panel with a fictional supplier site. Nothing on the page changes until you approve." >}}
{{< user >}}Search this catalog for 5 Fr dual-lumen PICC kits and open the first result.{{< /user >}}
{{< lumen >}}
I'll search the catalog, then open the first result.

{{< approval action="Lumen wants to act in your browser" >}}**Type** "5 Fr dual-lumen PICC kit" into the catalog search box · **Click** the first search result{{< /approval >}}
{{< /lumen >}}
{{< /chat-demo >}}

## Check it worked

- The site bar shows the site you're on, with access allowed.
- The page context chip says **Included** when you ask about the page, and the answer reflects what's on screen.
- Proposed actions appear under **Lumen wants to act in your browser** and nothing on the page changes until you approve.

## Tips

- **Open the chat in the full app.** Click **Open in Lumen** in the panel header to continue the same conversation in the Lumen app.
- **Use specialists in the panel.** Type `@` to bring in a specialist, just as in the app.
- **Keep auto-approval off.** Each site has **Auto-allow reads** and **Auto-approve actions** switches. Leave **Auto-approve actions** off unless you're sure. When it's on, actions on that site run without asking you first. **Always allow on** a site, shown under an approval, turns it on too.

## Limits and safety

- **Some actions are always blocked.** Lumen can't sign orders or notes, attest, or document medication administration, even if you approve, and even with auto-approval on. Those steps stay with you.
- **Page text is information, not instructions.** Lumen follows your messages, not text written on a web page.
- **Lumen reads the main page only.** Content inside embedded frames from another site, which some EHRs use, isn't read.
- **Lumen doesn't look at screenshots yet.** It reads the page's text and structure. Charts and images on the page aren't interpreted.
- **What you send is sent.** When page context is **Included**, the page's text goes with your message. Exclude it, or don't allow the site, when the page shows information you shouldn't share.
- **Beta software.** Expect changes, and report problems to your Lumen contact.

{{< callout type="safety" title="You stay responsible for the chart" >}}
Check every proposed action before you approve it, and check answers against the source on the page. Lumen supports your work. It doesn't replace your review.
{{< /callout >}}

## FAQ

{{< faq question="Can I get it from the Chrome Web Store?" >}}
Not yet. The extension is in early access. Ask your Lumen contact.
{{< /faq >}}
{{< faq question="Does the extension read every page I visit?" >}}
No. It reads a site only after you allow access, and only sends page content with a message when the page context chip says **Included**.
{{< /faq >}}
{{< faq question="Can it work inside our EHR?" >}}
It works with web-based EHRs that run in Chrome or Edge, within the limits above. It reads the main page, not embedded frames from other sites, and it can never sign, attest or document medication administration. For a governed connection to the chart, see [Connect Lumen to your EHR](/guides/connect-your-ehr/).
{{< /faq >}}

## Next steps

{{< related "/guides/connect-your-ehr/" "/skills-and-specialists/approvals/" "/trust/privacy/" "/guides/dictate-a-note/" >}}
