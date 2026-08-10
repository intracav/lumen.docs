---
title: "Medication Questions"
description: "Check drug interactions, calculate IV rates, adjust for renal function, or look up adverse events — just by asking."
weight: 3
---

These are the questions that come up a dozen times a shift. *"Can I give these two together?"* *"What's the drip rate?"* *"Does this need a dose adjustment for their kidneys?"* Just type the question and Lumen handles the rest.

## Available Tools

<div class="tool-grid">

{{< tool-card name="Drug Name Lookup (RxNorm)" icon="&#128138;" color="var(--palace-green)" desc="Resolves drug names via NLM RxNorm. Works with brand names, generics, abbreviations, and even misspellings. Returns the normalized name, RxCUI, ingredients, and drug class." example="\"Look up the generic name for Jardiance\"" badge="Lookup" >}}

{{< tool-card name="Drug Interactions" icon="&#9888;" color="var(--accent)" desc="Checks drug-drug interactions using the FDA interaction database. Returns severity level, mechanism of interaction, and clinical management recommendations." example="\"Check interactions between warfarin, amiodarone, and metoprolol\"" badge="Safety" >}}

{{< tool-card name="IV Drip Calculator" icon="&#128167;" color="var(--smoky-blue)" desc="Calculates IV infusion rates from weight-based dosing. Computes mL/hr with titration guidance. Supports common drips like vasopressors, insulin, and heparin." example="\"Calculate norepinephrine drip at 0.1 mcg/kg/min for an 80kg patient\"" badge="Calculator" >}}

{{< tool-card name="Renal Dose Adjustment" icon="&#129656;" color="var(--smoky-blue-dk)" desc="Computes creatinine clearance (Cockcroft-Gault), determines CKD stage, and looks up FDA-recommended dose adjustments for renal impairment." example="\"Renal dose check for vancomycin in a 70-year-old male, 85kg, SCr 2.1\"" badge="Calculator" >}}

{{< tool-card name="FDA Adverse Events" icon="&#128200;" color="var(--accent)" desc="Searches the FDA FAERS (adverse event reporting) database. Aggregates reaction reports by drug, showing frequencies, outcomes, and severity distributions." example="\"What are the most reported adverse events for methotrexate?\"" badge="Safety" >}}

{{< tool-card name="FDA Drug Recalls" icon="&#128680;" color="var(--accent)" desc="Checks the FDA enforcement and recall database. Shows recall classifications, affected lots, and current status." example="\"Are there any recent recalls for metformin products?\"" badge="Safety" >}}

{{< tool-card name="FDA Drug Labels" icon="&#128220;" color="var(--palace-green)" desc="Searches the FDA structured product label database for official prescribing information — boxed warnings, indications, contraindications, dosing, and adverse reactions, with direct DailyMed links." example="\"What does the FDA label say about semaglutide contraindications?\"" badge="Regulatory" >}}

{{< tool-card name="Allergy Cross-Reactivity" icon="&#128165;" color="var(--accent)" desc="Given a known drug allergy, identifies cross-reactive agents to avoid and safe prescribing alternatives, with notes on the reaction mechanism." example="\"What can I use instead of cephalexin if the patient has a penicillin allergy?\"" badge="Safety" >}}

{{< tool-card name="Antimicrobial Selector" icon="&#129440;" color="var(--palace-green)" desc="Selects empiric and targeted antibiotic therapy from IDSA guidance — first-line, second-line, and allergy-alternative regimens with dosing and duration. Accounts for renal impairment, pregnancy, and care setting." example="\"Best antibiotic for community-acquired pneumonia, PCN allergy, outpatient\"" badge="Treatment" >}}

</div>

## Drug Interaction Example

Here's what a drug interaction check looks like in action:

<div class="chat-mockup chat-demo-animated" style="margin: 2rem 0;">
  <div class="chat-mockup-header">
    <div class="chat-mockup-avatar">&#10022;</div>
    <div class="chat-mockup-title">Chat</div>
  </div>
  <div class="chat-mockup-body">
    <div class="chat-msg user">Are there any interactions between simvastatin and clarithromycin?</div>
    <div class="chat-msg assistant">
      <div class="msg-avatar"><span>&#10022;</span></div>
      <div class="msg-content">
        <div class="mock-tool">
          <div class="mock-tool-header">
            <span class="mock-tool-status done"></span>
            Checked drug interactions
          </div>
          <div class="mock-tool-detail">simvastatin &times; clarithromycin</div>
        </div>
        <p style="margin:0; font-size: 0.875rem; line-height: 1.6; color: var(--dark-text);">
          <strong style="color: var(--accent);">&#9888; Major Interaction Detected</strong><br><br>
          Clarithromycin is a <strong>potent CYP3A4 inhibitor</strong> that significantly increases simvastatin levels, raising the risk of <strong>rhabdomyolysis</strong>.
        </p>
        <div class="mock-artifact chat-extra">
          <div class="mock-artifact-icon" style="background: var(--accent-glow); color: var(--accent);">&#9888;</div>
          <div class="mock-artifact-info">
            <div class="mock-artifact-title">Interaction Report: Simvastatin &times; Clarithromycin</div>
            <div class="mock-artifact-type">Drug Interaction Report</div>
          </div>
          <div class="mock-artifact-chevron">&rsaquo;</div>
        </div>
      </div>
    </div>
  </div>
</div>

## Renal Dosing Workflow

The renal dose tool needs specific patient parameters. Lumen will ask for anything you don't provide upfront:

| Parameter | What It Is | Example |
|-----------|------------|---------|
| **Drug** | The medication to adjust | Vancomycin |
| **Age** | Patient age in years | 70 |
| **Sex** | Biological sex (for CrCl) | Male |
| **Weight** | Body weight in kg | 85 |
| **SCr** | Serum creatinine in mg/dL | 2.1 |

{{< tip title="Provide all parameters upfront" >}}
The more information you include in your initial message, the faster you'll get results. For example: *"Renal dose check for gabapentin: 65yo female, 60kg, SCr 1.8"*
{{< /tip >}}

{{< callout type="important" >}}
**For clinical use, always verify** drug interaction and dosing information with your institution's pharmacy resources. Lumen is a decision support tool, not a replacement for clinical judgment.
{{< /callout >}}
