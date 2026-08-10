---
title: "All Medical Calculators in Lumen"
description: "Every clinical calculator in Lumen — MELD, CHA₂DS₂-VASc, Wells score, eGFR, SOFA, and 23 more. Ask in plain English; Lumen runs the real formula."
weight: 5
keywords: ["MELD calculator", "CHA2DS2-VASc calculator", "Wells score calculator", "eGFR calculator", "HAS-BLED calculator", "CURB-65 calculator", "SOFA score calculator", "Child-Pugh calculator", "anion gap calculator", "medical calculator AI"]
---

You don't need to hunt for the right calculator or remember what goes into it. Describe the situation in plain English &mdash; *"what's the stroke risk for my AFib patient?"* &mdash; and Lumen picks the calculator, asks for any values it's missing, and shows you the inputs it used alongside the score and its interpretation.

One thing worth knowing: **these calculators are deterministic**. The score is computed by the same validated formula you'd find in the original paper &mdash; not estimated by the AI. What you see is real arithmetic, with the AI handling only the conversation around it.

{{< chat-demo title="Chat" >}}
{{< user >}}Calculate MELD-Na: bilirubin 3.2, INR 1.8, creatinine 1.5, sodium 131{{< /user >}}
{{< lumen >}}**MELD-Na score: 24** — high severity. Estimated 90-day mortality risk is significant at this level; scores ≥21 generally warrant hepatology referral and transplant evaluation discussion. Inputs used: bilirubin 3.2 mg/dL, INR 1.8, creatinine 1.5 mg/dL, sodium 131 mEq/L.{{< /lumen >}}
{{< /chat-demo >}}

Here is every calculator in the library, grouped by domain. The italic line under each is an example of how you might ask.

## Cardiology

### CHA₂DS₂-VASc
Annual stroke risk in atrial fibrillation &mdash; the standard score for deciding whether anticoagulation is warranted.
*"CHA₂DS₂-VASc for a 72-year-old woman with hypertension and diabetes, no prior stroke"*

### HAS-BLED
Major bleeding risk on anticoagulation &mdash; the counterweight to CHA₂DS₂-VASc when weighing the decision to anticoagulate.
*"HAS-BLED score: hypertensive, age 70, on aspirin, normal renal and liver function"*

### HEART Score
Risk of a major adverse cardiac event in chest-pain patients &mdash; helps sort who can go home from who needs admission.
*"HEART score for a 62-year-old with atypical chest pain, normal ECG, two risk factors, negative troponin"*

### QTc (Corrected QT Interval)
Rate-corrected QT interval &mdash; flags QT prolongation before you add another QT-prolonging drug.
*"Calculate QTc: QT 440 ms, heart rate 72, female"*

### Mean Arterial Pressure (MAP)
Average perfusion pressure over the cardiac cycle &mdash; the number that matters for organ perfusion and vasopressor titration.
*"What's the MAP for a blood pressure of 88/54?"*

### RCRI (Revised Cardiac Risk Index)
Risk of major cardiac complications after non-cardiac surgery &mdash; the classic pre-op risk conversation starter.
*"RCRI for a patient having high-risk surgery with a history of ischemic heart disease"*

## Thrombosis & VTE Risk

### Wells Score (DVT)
Pre-test probability of deep vein thrombosis &mdash; tells you whether a D-dimer is enough or you need the ultrasound.
*"Wells DVT score: calf swelling 4 cm, tender deep veins, recent surgery, no alternative diagnosis"*

### Wells Score (PE)
Pre-test probability of pulmonary embolism &mdash; guides the D-dimer vs. CT angiography decision.
*"Wells PE score: heart rate 110, PE is the most likely diagnosis, no hemoptysis or prior VTE"*

### Padua Prediction Score
VTE risk in hospitalized medical patients &mdash; identifies who needs pharmacologic prophylaxis.
*"Padua score for an 80-year-old admitted with pneumonia and reduced mobility"*

## Pulmonary & Critical Care

### CURB-65
Pneumonia severity &mdash; helps decide between outpatient treatment, admission, and ICU-level care.
*"CURB-65: 78-year-old, urea elevated, no confusion, BP 105/70, respiratory rate 22"*

### SOFA Score
Sequential organ failure across six systems &mdash; the sepsis-era standard for tracking organ dysfunction in the ICU.
*"SOFA score: PaO₂ 85 on 40% FiO₂, platelets 90, bilirubin 2.4, MAP 63, GCS 14, creatinine 1.9"*

### NEWS2
Early-warning score from routine vitals &mdash; flags the ward patient who is quietly deteriorating.
*"NEWS2: RR 24, SpO₂ 93%, BP 98/60, HR 112, temp 38.4, alert"*

### PaO₂/FiO₂ Ratio
Oxygenation index &mdash; grades ARDS severity and tracks response to ventilator changes.
*"P/F ratio for PaO₂ 85 on 60% FiO₂"*

## Hepatology, GI & Surgical

### MELD / MELD-Na
Liver disease severity and 90-day mortality &mdash; the score that drives transplant listing. Include sodium and you get MELD-Na.
*"MELD-Na: bilirubin 3.2, INR 1.8, creatinine 1.5, sodium 131"*

### Child-Pugh
Cirrhosis severity class (A/B/C) &mdash; older than MELD but still how surgical risk and drug dosing in cirrhosis are framed.
*"Child-Pugh: bilirubin 2.5, albumin 3.0, INR 1.6, mild ascites, no encephalopathy"*

### FIB-4
Likelihood of advanced liver fibrosis from routine labs &mdash; the first-line non-invasive fibrosis screen.
*"FIB-4 for a 55-year-old: AST 62, ALT 48, platelets 145"*

### Alvarado Score
Likelihood of acute appendicitis from history, exam, and labs &mdash; structures the "is this appendicitis?" workup.
*"Alvarado score: RLQ tenderness, rebound, nausea, WBC 13.5 with left shift, low-grade fever"*

## Renal & Electrolytes

### eGFR
Estimated glomerular filtration rate &mdash; kidney function staging from creatinine, age, and sex.
*"eGFR for a 68-year-old man with creatinine 1.4"*

### Cockcroft-Gault (Creatinine Clearance)
Estimated creatinine clearance &mdash; still the basis for most renal drug-dosing recommendations.
*"Cockcroft-Gault for a 72-year-old man, 85 kg, creatinine 2.1"*

### Corrected Calcium
True calcium status when albumin is low &mdash; stops you from chasing a pseudo-hypocalcemia.
*"Corrected calcium: calcium 7.8, albumin 2.1"*

### Anion Gap
The gap that classifies a metabolic acidosis &mdash; with optional albumin correction.
*"Anion gap: sodium 138, chloride 100, bicarb 16, albumin 2.8"*

### Osmolal Gap
Difference between measured and calculated osmolality &mdash; the screen for toxic alcohol ingestion.
*"Osmolal gap: measured osms 320, sodium 140, glucose 110, BUN 18"*

### Winters' Formula
Expected PCO₂ compensation in metabolic acidosis &mdash; tells you whether a second respiratory disorder is hiding underneath.
*"Winters' formula for a bicarb of 14 — is a PCO₂ of 38 appropriate?"*

## Dosing & Body Measurements

### BMI
Body mass index from height and weight, with WHO category.
*"BMI for 92 kg and 170 cm"*

### Ideal Body Weight (IBW)
Devine-style ideal body weight &mdash; the basis for weight-based dosing of many drugs and ventilator tidal volumes.
*"Ideal body weight for a 5'10\" male"*

### Body Surface Area (BSA)
Body surface area &mdash; the denominator for chemotherapy dosing and cardiac index.
*"BSA for 80 kg, 175 cm"*

### Pediatric Maintenance Fluids
Weight-based maintenance fluid rate for children &mdash; the answer to "what rate do I run this at?"
*"Maintenance fluid rate for a 14 kg toddler"*

### Corrected Phenytoin
Adjusts a measured phenytoin level for low albumin &mdash; the "free" level you actually care about.
*"Corrected phenytoin: level 12, albumin 2.2"*

## IV Drips Are Their Own Tool

Infusion math lives in a dedicated [IV drip calculator](/tools/medications/) &mdash; it converts weight-based orders (mcg/kg/min, units/hr, mg/hr) to mL/hr using standard critical-care concentration tables, runs a dose-range safety check, and suggests titration steps.

*"Calculate norepinephrine at 0.1 mcg/kg/min for an 80 kg patient"*

{{< callout type="warning" >}}
**Use PHI-free sample values.** Calculators only need numbers — age, weight, labs — never a name, MRN, or date of birth. If you're pasting from a chart, strip identifiers first or use [de-identification](/tools/privacy/).
{{< /callout >}}

{{< cta heading="Try a calculator in your next chat" href="/getting-started/" label="Get started" variant="subtle" >}}
Ask Lumen a scoring question in plain English — it will pick the right calculator and show its work.
{{< /cta >}}
