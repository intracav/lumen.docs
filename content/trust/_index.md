---
title: "Trust & Security"
description: "How Lumen protects clinical data: PHI encryption at rest, tamper-evident audit logs, admin re-authentication, access scoping, and BAAs."
lead: "Lumen is built with HIPAA safeguards from the ground up — encryption, audit logging, and access controls designed for clinical environments."
weight: 11
cascade:
  audience: all
---

You wouldn't chart in a system you don't trust, and you shouldn't reason with one either. This section explains — in plain language — what Lumen does with your data, how it protects it, and where the boundaries of AI judgment sit. Lumen is **built with HIPAA safeguards**: the protections below are engineered into the product, not bolted on.

## PHI is encrypted at rest

Sensitive fields are protected with **AES-256-GCM field-level encryption** — the same class of cipher used across modern banking and healthcare infrastructure. Encryption is applied per field, and each encrypted value is cryptographically bound to the exact record and owner it belongs to. That binding means a ciphertext lifted from one row can't be replayed into another: moved data simply fails to decrypt.

## Every AI interaction is audit-logged

Each chat completion writes an audit event: who, what, and when. Audit records are chained together with cryptographic hashes, so the log is **tamper-evident** — altering or removing an entry breaks the chain in a detectable way. Think of it like a numbered, bound logbook rather than a loose stack of pages. Organization admins can review these logs for their workspace.

## Sensitive admin actions require step-up re-authentication

Being signed in isn't enough for the most sensitive administrative operations. Lumen asks admins to **re-authenticate** before performing them, and that fresh authentication only holds for a short window. It's the same principle as a second signature on a high-alert medication: routine access stays smooth, consequential actions get an extra check.

## Organizations control who sees what

Access in Lumen is scoped, not global. Organization admins manage membership and seats, and content is shared deliberately — through [Folders and Departments](/knowledge/), [Knowledge Packs](/knowledge/knowledge-packs/), and explicit share links — never by default. What you keep in your personal workspace stays in your personal workspace; see [Your Data & PHI](/trust/privacy/) for the full picture.

## BAA available for enterprise agreements

For organizations that need a signed Business Associate Agreement, one is available as part of an Enterprise agreement. A BAA is a legal commitment, so it's handled with a human rather than a checkout page — see [Plans](/plans/) for how Enterprise conversations start.

## Service transparency

A public status page shows current service health, so you can check Lumen's availability the same way you'd check any other system you depend on.
