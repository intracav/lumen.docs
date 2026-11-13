---
title: "Component reference (internal)"
description: "Every docs component, rendered. Not published."
draft: true
lead: "A living reference for writers. Each block below is a shortcode you can use on any page."
tier: pro
status: beta
who: "clinicians"
glance:
  what: "A one-sentence description of the feature in plain words."
  who: "Clinicians and nurses on any plan."
  why: "The outcome it gives you, in the reader's terms."
  needs: "A Lumen account (Free or above). About 5 minutes."
  result: "A cited answer you can check and share."
---

## Callouts

{{< callout type="info" title="Good to know" >}}Info callout with a [link](/chat/).{{< /callout >}}
{{< callout type="tip" >}}A tip, no title.{{< /callout >}}
{{< callout type="warning" title="Check before you act" >}}Warning.{{< /callout >}}
{{< callout type="important" >}}Important.{{< /callout >}}
{{< callout type="safety" title="Clinical safety" >}}Lumen supports clinical judgment; it does not replace it.{{< /callout >}}

## Steps

{{< steps >}}
{{< step title="Open Lumen" >}}Go to [lumen.intracav.ai](https://lumen.intracav.ai) and sign in. Press {{< kbd "⌘" "K" >}}.{{< /step >}}
{{< step title="Open settings" >}}Click {{< ui-path "Settings" "Appearance" "Theme" >}}.{{< /step >}}
{{< step title="Done" >}}That's it.{{< /step >}}
{{< /steps >}}

## Cards and related

{{< card-grid >}}
{{< card title="Chat" href="/chat/" icon="message" tint="blue" >}}Ask anything clinical.{{< /card >}}
{{< card title="Specialists" href="/skills-and-specialists/" icon="user-round-check" tint="plum" prompt="Review this med list" >}}Delegate.{{< /card >}}
{{< card title="Studio" icon="film" badge="coming-soon" >}}No link.{{< /card >}}
{{< /card-grid >}}

{{< related "/chat/sources/" "/tools/" >}}

{{< magicaf path="/docs/lumen-ui/components/clinical/" title="Clinical components on MagicAF" />}}

## Flow

{{< flow >}}
{{< flow-node kicker="Draft" title="Write" icon="pencil" >}}Author drafts.{{< /flow-node >}}
{{< flow-node kicker="Review" title="Department review" icon="users" tint="blue" >}}Reviewers comment.{{< /flow-node >}}
{{< flow-node kicker="Sign-off" title="Published" icon="check-circle" tint="green" >}}In force.{{< /flow-node >}}
{{< /flow >}}

## Chat demo

{{< chat-demo title="Discharge summary" specialist="Clinical Educator" composer="@Medication Review check this list" >}}
{{< user attach="discharge-notes.pdf" >}}Turn this into a discharge summary.{{< /user >}}
{{< lumen thought="8" tools="Read document, Create document" sources="2" memory="true" >}}
Here's the draft {{< cite 1 >}}.

{{< artifact type="docx" title="Discharge summary — fictional patient" sub="Word document · 2 pages" >}}

{{< approval action="Email the summary to the unit list" >}}**To:** 4C nursing (12 people) · **Subject:** Discharge summary{{< /approval >}}

{{< task-strip >}}
{{< task state="done" label="Read the discharge notes" meta="4s" >}}
{{< task state="run" label="Checking quotes against sources" >}}
{{< task state="wait" label="Waiting for approval to send" >}}
{{< task state="todo" label="Send" >}}
{{< /task-strip >}}

{{< verdict >}}Checked: every quoted source was found in the material Lumen read.{{< /verdict >}}
{{< follow-ups "Make it shorter|Translate to Spanish|Add follow-up appointments" >}}
{{< /lumen >}}
{{< /chat-demo >}}

{{< composer menu="specialists" items="Medication Review|Checks a med list for problems;Prior Authorization|Drafts payer letters;Clinical Educator|Builds teaching material" text="@" >}}

{{< sources >}}
{{< source n="1" title="2023 ACC/AHA/ACCP/HRS Guideline for Atrial Fibrillation" meta="ahajournals.org · Guideline · 2023" quote="Dose reduction of warfarin is reasonable when amiodarone is initiated." >}}Recommendations for anticoagulation.{{< /source >}}
{{< /sources >}}

## Lumen UI

{{< lumen-ui-example title="Calculator result" component="Calculator" category="clinical" >}}
{{< lui-code >}}
Calculator(name="CHA₂DS₂-VASc", score=4, severity="moderate",
  interpretation="Anticoagulation is recommended for most patients.",
  inputs=[{label:"Age 65–74", points:1}, {label:"Hypertension", points:1}])
{{< /lui-code >}}
{{< lui-block title="CHA₂DS₂-VASc" >}}
{{< lui-score score="4" severity="Moderate–high risk" >}}Anticoagulation is generally recommended. Discuss bleeding risk.{{< /lui-score >}}
{{< lui-rows >}}
{{< lui-row title="Age 65–74" value="+1" >}}
{{< lui-row title="Hypertension" value="+1" >}}
{{< lui-row title="Female sex" value="+1" >}}
{{< lui-row title="Diabetes" value="+1" >}}
{{< /lui-rows >}}
{{< /lui-block >}}
{{< /lumen-ui-example >}}

{{< lui-block title="Pre-procedure checklist" count="2 of 4" progress="50" >}}
{{< lui-rows >}}
{{< lui-row type="check" checked=true title="Consent signed" >}}
{{< lui-row type="check" checked=true title="Allergies reviewed" body="Penicillin (rash)" >}}
{{< lui-row type="check" title="Site marked" >}}
{{< lui-row type="check" title="Time-out completed" >}}
{{< /lui-rows >}}
{{< lui-actions "Save checklist" "Edit" >}}
{{< /lui-block >}}

{{< lui-stats >}}
{{< lui-stat label="Heart rate" value="72" unit="bpm" change="▼ 6 since yesterday" trend="up" >}}
{{< lui-stat label="eGFR" value="48" unit="mL/min" change="▲ 3" trend="down" >}}
{{< /lui-stats >}}

{{< lui-bars data="Pending:12,Approved:18,Denied:3" label="Prior auth status" color="green" >}}
{{< lui-kv "Drug=Amiodarone;Interaction=Warfarin;Severity=Major" >}}
{{< lui-callout variant="warning" title="Renal dosing" >}}Reduce dose when CrCl < 30.{{< /lui-callout >}}
{{< lui-severity major "Major interaction" >}}

## Tabs, FAQ, table, code, CTA

{{< tabs >}}
{{< tab name="Web" >}}Use the web app.{{< /tab >}}
{{< tab name="Desktop app" >}}Download for macOS.{{< /tab >}}
{{< tab name="Phone" >}}Use Satellite.{{< /tab >}}
{{< /tabs >}}

{{< faq question="Is my data used to train models?" >}}No.{{< /faq >}}

| Plan | Specialists | qPolicy |
|---|---|---|
| Free | Limited | — |
| Max | All | Add-on |

```bash
curl https://api.example.com/v1/chat -d '{"q":"hello"}'
```

Inline `code`, a {{< term "RAG" >}} term, {{< tier-badge "max" >}} {{< status-badge "beta" >}} {{< status-badge "experimental" >}}.

{{< screenshot src="does-not-exist" />}}

{{< cta heading="Try it now" href="https://lumen.intracav.ai" label="Open Lumen" secondary-href="/plans/" secondary-label="Compare plans" >}}Free to start.{{< /cta >}}
