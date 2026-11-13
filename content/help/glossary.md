---
title: "Glossary"
description: "Plain-language definitions of every Lumen term and AI term used in these docs, from Admin console to Workflow, each with a link to learn more."
lead: "Every Lumen word and AI term in these docs, defined in a sentence or two, with a link to the page that explains it."
weight: 2
icon: book-open
glance:
  what: "An A to Z list of the words used in Lumen and in these docs, defined in plain language."
  who: "Anyone who meets an unfamiliar word in Lumen or in these docs."
  why: "So every page makes sense on its own, even if you've never used Lumen."
  needs: "Nothing. Use your browser's find (Ctrl+F or Cmd+F) to jump to a term."
  result: "A clear definition and the page to read next."
---

Terms in **bold** in the app match the words used here. Names of AI concepts are explained for clinicians, not computer scientists. If a word you need is missing, email [support@intracav.ai](mailto:support@intracav.ai).

## A

### Admin console {#admin-console}

The area where team admins manage members, departments, seats, knowledge and settings for their organization. See [Admin console](/organizations/admin-console/).

### Agentic loop {#agentic-loop}

The cycle an AI agent repeats to finish a task: plan the next step, act with a tool, read the result, adjust. See [The agentic loop](/learn/agentic-loops/).

### AI agent {#ai-agent}

An AI system that works toward a goal in several steps, using real tools along the way, instead of answering one question at a time. In Lumen, AI agents are called [Specialists](#specialist). See [What is a clinical AI agent?](/learn/what-is-a-clinical-ai-agent/).

### Always-on guidance {#always-on-guidance}

Text that is always given to Lumen for a team, a department or a website assistant, such as "answer in British English" or "our unit uses chlorhexidine dressings". It shapes every answer but is never searched or cited. See [Always-on guidance](/organizations/always-on-guidance/).

### Approval {#approval}

Your go-ahead for an action that leaves Lumen, such as sending an email or writing to another system. The action waits on an approval card and runs only after you press **Approve**, exactly as shown. Typing "I approve" does nothing. See [Approvals](/skills-and-specialists/approvals/).

### Artifact {#artifact}

A file Lumen creates in a chat, such as a Word document, slide deck, spreadsheet, PDF or web page, that opens beside the conversation for you to review, edit and download. See [Artifacts](/chat/artifacts/).

### Attestation {#attestation}

In qPolicy, a staff member's record that they have read a specific version of a policy. Attestations are tied to that version, so a new version needs a new attestation. See [Attestation](/qpolicy/attestation/).

### Audit log {#audit-log}

Lumen's record of team activity. It is tamper-evident (hash-chained), which means any later change to a record can be detected. See [Audit and access](/organizations/audit-and-access/).

## B

### BAA {#baa}

A Business Associate Agreement: the contract HIPAA requires between a healthcare organization and a vendor that handles its protected health information. Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. See [Privacy and data](/trust/privacy/).

## C

### CDS Hooks {#cds-hooks}

A healthcare standard that lets an EHR ask a connected service for advice at set moments, such as opening a chart or writing an order. Lumen can return advisory cards that cite their sources and never change the order. See [SMART on FHIR](/learn/smart-on-fhir/).

### Citation {#citation}

A numbered link from a statement in an answer to the passage it came from, so you can open the source and check it. See [Where answers come from](/chat/sources/).

### Compliance coverage {#compliance-coverage}

In qPolicy, a map of which of your policies cover which regulatory requirements, such as CMS Conditions of Participation. Lumen recommends matches and a person accepts them. See [Compliance coverage](/qpolicy/compliance-coverage/).

### Context window {#context-window}

How much text an AI model can take into account at once: the current conversation, attached files and instructions. It's the model's working memory for one chat. See [How AI memory works](/learn/ai-memory/).

## D

### De-identification {#de-identification}

Removing details that identify a person, such as names, record numbers and dates, while keeping the clinical content. Lumen does this automatically before model calls only in Lumen Research and the website assistant; elsewhere you can ask for it with the de-identify tool. See [De-identification](/learn/deidentification/).

### Department {#department}

A group inside a team, such as ICU or Emergency, with its own members, knowledge and always-on guidance. See [Departments and seats](/organizations/departments-and-seats/).

### Do it {#do-it}

The Pilot setting where Pilot can also do the work in the app for you. You approve its plan first. It's offered only where your account's Pilot can act in the app. See [Show me and Do it](/pilot/show-me-and-do-it/).

## E

### EHR {#ehr}

Electronic health record: the system where a hospital or practice keeps patient charts. Lumen can connect to an EHR using SMART on FHIR. See [EHR integration](/organizations/ehr/).

### Embedding {#embedding}

A numeric fingerprint of a passage's meaning. Embeddings let Lumen find "myocardial infarction" when you typed "heart attack". See [RAG and citations](/learn/rag-and-citations/).

### Evidence binder {#evidence-binder}

A qPolicy export (a ZIP file with a PDF) that gathers your policies, approvals and attestations for a survey or audit. It always states that it isn't a legal or accreditation determination. See [Evidence binder](/qpolicy/evidence-binder/).

### Explore {#explore}

The one list of everything you can use in Lumen: Specialists, Skills and tools. See [Explore](/skills-and-specialists/explore/).

### Extended thinking {#extended-thinking}

When an AI model reasons through a problem before it writes the answer. In Lumen, the reasoning folds into a **Thought for 12s** line you can open. See [Extended thinking](/learn/extended-thinking/).

## F

### Feature map {#feature-map}

A map of Lumen's features that you open from Pilot, to find where things are and jump to them. See [Feature map](/pilot/feature-map/).

### FHIR {#fhir}

Fast Healthcare Interoperability Resources (said "fire"): a shared format for health data, such as patients, medications and lab results, that most EHRs support. See [SMART on FHIR](/learn/smart-on-fhir/).

### Folder {#folder}

A place to keep documents, artifacts and chats together. A folder can be private or shared with a team or department; access follows the folder. See [Folders](/knowledge/folders/).

### Function calling {#function-calling}

The technical name for [tool use](#tool-use).

## G

### Grounding {#grounding}

Building an answer from retrieved sources and tool results instead of the model's memory, so each claim can be checked. See [Hallucinations and grounding](/learn/hallucinations-and-grounding/).

## H

### Hallucination {#hallucination}

A fluent, specific statement from an AI that is false, such as a made-up study or a slightly wrong dose. Grounding and citations make it rarer and easier to catch, but not impossible. See [Hallucinations and grounding](/learn/hallucinations-and-grounding/).

### Harness {#harness}

The software around an AI model that runs its steps, enforces limits, stops for human approval and records what happened. See [The agentic loop](/learn/agentic-loops/).

### HIPAA {#hipaa}

The US law that sets rules for protecting health information. Lumen is built with security safeguards (encryption, access controls and a tamper-evident audit log). Don't enter protected health information (PHI) unless your organization has a written agreement with Intracav that covers it. Contact Intracav to discuss your organization's requirements. See [Privacy and data](/trust/privacy/).

### Human verified {#human-verified}

A qPolicy status meaning a qualified person has checked this exact version of a policy's clinical text. See [Policy lifecycle](/qpolicy/policy-lifecycle/).

## I

### IFU {#ifu}

Instructions for use: the official document a device maker publishes for how to use a medical device. See [Smart IFU](/connect/smart-ifu/).

### In force {#in-force}

A qPolicy status meaning the policy is the organization's current, approved version. See [Policy lifecycle](/qpolicy/policy-lifecycle/).

### Interrupted {#interrupted}

A reply or task that stopped before it finished, usually because of a server problem. The partial text is kept but not resumed; ask again to finish it. See [Troubleshooting](/help/troubleshooting/).

## K

### Knowledge Map {#knowledge-map}

A view for team admins that shows which knowledge (documents, Knowledge Packs, always-on guidance) feeds which places, such as departments' chats and website assistants, so you can see what a change will affect. See [Knowledge Map](/knowledge/knowledge-map/).

### Knowledge Pack {#knowledge-pack}

A curated collection of documents that Lumen can search and cite, such as a team's protocols, an Intracav pack or a partner's product documentation. Teams choose which packs each department or assistant answers from. See [Knowledge Packs](/knowledge/knowledge-packs/).

## L

### Large language model {#large-language-model}

The type of AI behind Lumen (often shortened to LLM): a program trained on large amounts of text that understands questions and writes fluent answers. Lumen selects the model by plan. See [AI models](/learn/choosing-models/).

### Learning {#learning}

Lumen's area for courses, assignments, continuing-education tracking and a certificate binder. See [Learning](/learning/).

### Live {#live}

Lumen's real-time group sessions: participants join by code or QR, answer polls, rankings and knowledge checks, and results can be shown on a TV. Live isn't video or voice, and a score is a knowledge check, never a competency attestation. See [Live](/live/).

### Lumen {#lumen}

The clinical AI workspace made by Intracav, for clinicians, organizations and medical device makers. See [What is Lumen?](/getting-started/what-is-lumen/).

### Lumen Connect {#lumen-connect}

Lumen's products for medical device makers: Smart IFU pages and website assistants that answer from instructions for use and cite the page. See [Lumen Connect](/connect/).

### Lumen Evidence {#lumen-evidence}

The pill under an answer that shows how well the cited sources support it. Open it to see which sources were checked. See [Where answers come from](/chat/sources/).

### Lumen UI {#lumen-ui}

The component system Lumen uses to draw interactive answers in chat, such as checklists, calculators, tables and charts. See [Interactive answers](/chat/interactive-answers/).

## M

### MCP {#mcp}

Model Context Protocol: an open standard for connecting AI systems to outside tools and data. Developers can connect to Lumen over MCP. See [MCP](/developers/mcp/).

### Memory {#memory}

What Lumen carries from one chat to the next: a short list of facts about you, optional team memory and notes you add. You can review, edit, clear or turn it off in **Settings › Memory**. See [How AI memory works](/learn/ai-memory/).

## O

### OCR {#ocr}

Optical character recognition: reading text from scans and pictures. Lumen does this on its own servers when you upload a scan. See [Documents](/knowledge/documents/).

### Outbox {#outbox}

Where Lumen keeps messages on your device when they can't be sent, for example while you're offline. They send when you reconnect. See [Troubleshooting](/help/troubleshooting/).

## P

### PHI {#phi}

Protected health information: health information that can identify a person. Don't enter PHI in Lumen unless your organization permits it. See [Privacy and data](/trust/privacy/).

### Pilot {#pilot}

Lumen's in-app guide that works in the Lumen app with you. It has two settings, [Show me](#show-me) and [Do it](#do-it), and runs in your open app, not in the background. See [Pilot](/pilot/).

### Prompt {#prompt}

What you type to an AI. A good prompt reads like a good consult request: context, a specific question and the output you need. See [Prompting for clinicians](/learn/prompting-for-clinicians/).

### Pseudonymization {#pseudonymization}

A form of de-identification that replaces each identifier with a consistent placeholder, such as [Patient A], so the story stays readable. See [De-identification](/learn/deidentification/).

## Q

### qPolicy {#qpolicy}

Lumen's policy and compliance product, an add-on to Lumen Max. It answers staff questions from your own policy manual and manages reviews, approvals, attestation and compliance coverage. Nothing publishes automatically. See [qPolicy](/qpolicy/).

## R

### RAG {#rag}

Retrieval-augmented generation: the AI first finds relevant passages in trusted sources, then writes its answer from them and cites each one. See [RAG and citations](/learn/rag-and-citations/).

### Rate limit {#rate-limit}

The number of messages your plan allows in a usage window. When you reach it, a **Rate limited** banner counts down until you can retry. See [Troubleshooting](/help/troubleshooting/).

### Regulatory monitoring {#regulatory-monitoring}

A qPolicy feature that watches selected federal regulations and pages your team chooses, and flags changes that may affect your policies. See [Regulatory monitoring](/qpolicy/regulatory-monitoring/).

### Research {#research}

Lumen Research: a statistics workspace for clinical researchers that runs R analyses on your own device, with an AI assistant that proposes code for you to confirm. See [Research](/research/).

### Retired {#retired}

A qPolicy status for a policy that has been superseded or withdrawn. Retired policies are kept for the record. See [Policy lifecycle](/qpolicy/policy-lifecycle/).

## S

### Safe Harbor {#safe-harbor}

The HIPAA de-identification method that lists 18 kinds of identifiers to remove. See [De-identification](/learn/deidentification/).

### Satellite {#satellite}

Pairs your phone with Lumen on your desktop by scanning a code, so the phone can act as a remote and touchpad and approve Pilot plans. Lumen's server relays the connection but never runs actions itself. See [Satellite](/pilot/satellite/).

### Searchable {#searchable}

A qPolicy status meaning staff can find a policy in search and chat. A policy can be searchable before a person has verified it. See [Policy lifecycle](/qpolicy/policy-lifecycle/).

### Second brain {#second-brain}

Your personal notes in Lumen (shown as **Notes** under Memory), which Lumen can search and cite as sources. See [Second brain](/knowledge/second-brain/).

### Show me {#show-me}

The Pilot setting where Pilot answers, points to things and opens screens to walk you through a task. It never changes anything. See [Show me and Do it](/pilot/show-me-and-do-it/).

### Skill {#skill}

A ready-made procedure for one kind of output, such as a SOAP note or a patient handout. Type `/` in the message box to use one. See [Skills](/skills-and-specialists/skills/).

### Smart IFU page {#smart-ifu-page}

A public page built from a device maker's instructions for use. Visitors ask questions and get answers that cite the document and page, with no sign-in. Self-serve setup needs Lumen Max. See [Smart IFU](/connect/smart-ifu/).

### SMART on FHIR {#smart-on-fhir}

The standard that lets an app read approved parts of an EHR, with scoped permissions, logged access and a way to revoke it. See [SMART on FHIR](/learn/smart-on-fhir/).

### Specialist {#specialist}

Lumen's name for an AI agent: a named expert for one kind of job, such as **Medication Review** or **Prior Authorization**. Type `@` to call one. It shows each step and waits for your approval before any action that leaves Lumen. See [Specialists](/skills-and-specialists/specialists/).

### Studio {#studio}

Lumen's tool for turning a brief into an editable video. It is being rolled out gradually and may not be available on your account yet. See [Studio](/studio/).

### Super User {#super-user}

An in-app assistant for team admins on Lumen Max. It previews each admin change, asks you to confirm, logs the action and lets you undo it. See [Super User](/organizations/super-user/).

## T

### Team {#team}

What Lumen calls an organization account: a hospital, practice or company with shared members, departments, folders and knowledge. See [Lumen for organizations](/organizations/).

### Token {#token}

The small chunks of text an AI model reads and writes, roughly three-quarters of a word each. Limits such as the context window are counted in tokens.

### Tool use {#tool-use}

How an AI runs a real lookup, such as a drug-interaction check or a code search, and answers from the result instead of from memory. Lumen shows a chip for each tool that ran. See [Tool use](/learn/tool-use/).

## V

### Verdict {#verdict}

The result of Lumen's check on a Specialist's finished work: whether every quoted passage was found in the sources it loaded. A verdict means "checked against sources", never "clinically correct". See [Verified results](/skills-and-specialists/verified-results/).

### Verification required {#verification-required}

A qPolicy status meaning a policy's clinical text hasn't yet been checked by a qualified person. See [Policy lifecycle](/qpolicy/policy-lifecycle/).

## W

### Website assistant {#website-assistant}

An assistant a device maker or organization embeds on its own website. It answers from approved documents, cites the document and page, and says so when the documents don't cover a question. See [Website assistant](/connect/website-assistant/).

### Workflow {#workflow}

A set of steps you build once on a visual canvas, such as a weekly device-recall check, that Lumen runs on a schedule, on a trigger or when you start it. Scheduled and triggered runs are unattended. See [Workflows](/workflows/).

### Workspace {#workspace}

The context you're working in: your personal workspace or a team's. Memory, folders and knowledge are kept separately for each. See [Lumen for organizations](/organizations/).

## Next steps

{{< related "/help/faq/" "/learn/" "/getting-started/what-is-lumen/" >}}
