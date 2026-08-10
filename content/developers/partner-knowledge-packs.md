---
title: "Partner Knowledge Packs: Content Integration Guide"
description: "The integration contract for medical-device and pharma partners publishing IFUs, manuals, and clinical evidence into Lumen as a cited, version-pinned Knowledge Pack."
weight: 7
aliases:
  - /extensions/partner-integration-guide/
---

> **Audience:** partner engineering teams. This is the contract for delivering content to Lumen and receiving usage analytics in return.

## Overview

Lumen is a clinical AI assistant used by clinicians at the point of care. A **partner Knowledge Pack** turns your IFUs, service manuals, prescribing information, or clinical evidence into a cited, version-pinned source clinicians can ground their answers in.

You integrate once. Lumen handles:

- Hourly catalog polling with signature verification
- SHA-256 content-hash diffing (unchanged docs are skipped)
- Chunking, embedding, and indexing with full provenance metadata
- Retraction propagation to in-session users
- Monthly aggregate usage analytics (hashed user IDs, no PHI)

You are responsible for:

- Serving a signed JSON catalog at an authenticated HTTPS URL
- Signing urgent retraction webhooks with an HMAC secret
- Keeping your catalog accurate (content, versioning, effective dates)

## Onboarding flow

1. **Key exchange (30-minute call):**
   - We generate an HMAC-SHA256 shared secret → you use it to sign urgent retraction webhooks.
   - You generate an ed25519 keypair → send us the **public** key (hex or base64 encoded, 32 bytes).

2. **You implement the catalog endpoint** (contract below).

3. **Lumen provisions your pack** — publisher name, display name, and the license terms (EULA) hospital admins accept — and points our puller at your catalog URL with the auth token you provide.

4. **Staging test:** we run the full round trip against your staging URL — catalog fetch → signature verify → diff → ingest → citation renders in a test chat → retraction webhook → banner. We provide a reference mock partner API during onboarding so you can see a working example of both the signed catalog and the webhook signing.

5. **Production flip:** we switch to your production catalog and activate the pack. Grants to hospital organizations begin.

## Catalog endpoint contract

Lumen polls your URL **hourly** with:

```
GET https://api.<you>.com/lumen/catalog
Authorization: Bearer <token you gave us>
Accept: application/json
User-Agent: lumen-server/1.0 (extension-pull)
```

You return a **signed envelope**:

```json
{
  "version": "2026.04.15-r1",
  "issued_at": "2026-04-15T12:00:00Z",
  "signature": "<hex or base64 ed25519 sig over canonical JSON of `body`>",
  "body": {
    "documents": [
      {
        "external_id": "ACME-IFU-001",
        "title": "ACME Film Dressing AC-100 — Instructions for Use",
        "document_type": "ifu",
        "product_code": "AC-100",
        "region": "US",
        "language": "en",
        "effective_date": "2026-02-01",
        "source_url": "https://partner.example/docs/AC-100.pdf",
        "content": "<full extracted text of the document>",
        "content_hash": "9e1a4b6c...sha256 of content..."
      }
    ]
  }
}
```

### Field reference

| Field | Type | Required | Notes |
|---|---|---|---|
| `version` | string | ✓ | Your internal catalog version (semver or date-based). Becomes the `version_tag` on every ingested chunk. |
| `issued_at` | ISO 8601 | ✓ | Must be within ±60 min of server time (anti-replay). |
| `signature` | string | ✓ if signing key configured | ed25519 signature over the canonical JSON of `body`, hex or base64. |
| `body.documents[].external_id` | string | ✓ | Your stable ID for this doc. Natural key for diff + retraction. |
| `body.documents[].title` | string | ✓ | Human-readable title (shown in citations). |
| `body.documents[].document_type` | enum | ✓ | `"ifu"`, `"service_manual"`, `"quick_ref"`, `"training"`, `"recall_notice"`, or `"other"`. |
| `body.documents[].product_code` | string | optional | Stable SKU/reference. Enables product-code-scoped search via tools. |
| `body.documents[].region` | string | optional | `"US"`, `"EU"`, null for global. |
| `body.documents[].language` | string | optional | BCP 47 tag, default `"en"`. |
| `body.documents[].effective_date` | `YYYY-MM-DD` | optional | Regulatory effective date. Shown in every citation. |
| `body.documents[].source_url` | URL | optional | Canonical PDF URL; clinicians can click through. |
| `body.documents[].content` | string | ✓ | Full extracted plain text. Lumen chunks at 512 chars with 64-char overlap. |
| `body.documents[].content_hash` | sha256 hex | optional | If provided, Lumen skips re-ingesting unchanged docs. If omitted we compute it. |

### Diff semantics

On each poll Lumen compares every doc's `content_hash` against its stored value:

- **New `external_id`** → ingest fresh.
- **Changed `content_hash`** → supersede old version, ingest new.
- **Unchanged** → skip entirely (no cost).
- **Disappeared from catalog** → auto-retracted with reason `removed_by_publisher`.

### Signing (ed25519)

The signature covers the **canonical JSON serialization of `body`**: compact (no whitespace), UTF-8. Use the reference implementations below; a formal JCS (RFC 8785) canonicalizer is planned for a future contract revision.

```python
# Reference Python (PyNaCl)
import json, nacl.signing
from datetime import datetime, timezone

signing_key = nacl.signing.SigningKey(bytes.fromhex(PRIVATE_KEY_HEX))
body = {"documents": [...]}
# Canonical JSON: compact, UTF-8, sorted keys
canonical = json.dumps(body, separators=(",", ":"), sort_keys=True).encode("utf-8")
sig = signing_key.sign(canonical).signature.hex()

envelope = {
    "version": "2026.04.15-r1",
    "issued_at": datetime.now(timezone.utc).isoformat(),
    "signature": sig,
    "body": body,
}
```

```javascript
// Reference Node.js (@noble/ed25519)
import * as ed from '@noble/ed25519';

const body = { documents: [...] };
const canonical = Buffer.from(JSON.stringify(body));
const sig = Buffer.from(await ed.sign(canonical, PRIVATE_KEY_BYTES)).toString('hex');

const envelope = {
  version: '2026.04.15-r1',
  issued_at: new Date().toISOString(),
  signature: sig,
  body,
};
```

## Retraction webhook (urgent pulls)

Use this for **safety-critical retractions** — recalls, FDA actions, urgent label updates. Fires in under 5 minutes end-to-end.

```
POST https://api.intracav.ai/api/ext/webhook/<your_slug>/retract
X-Ext-Signature: sha256=<hex hmac of body>
Content-Type: application/json

{
  "external_ids": ["ACME-IFU-001", "ACME-IFU-002"],
  "reason": "Recalled by FDA 2026-04-10 — sterile barrier defect",
  "issued_at": "2026-04-10T14:00:00Z"
}
```

### HMAC signing

```python
import hmac, hashlib, json, requests
body = json.dumps({...}).encode("utf-8")
sig = hmac.new(SHARED_SECRET.encode(), body, hashlib.sha256).hexdigest()
requests.post(url, data=body, headers={
    "X-Ext-Signature": f"sha256={sig}",
    "Content-Type": "application/json",
})
```

What happens when we receive it:

1. HMAC verified (reject on mismatch).
2. `issued_at` skew checked (reject if more than 5 minutes).
3. The documents are marked retracted and removed from search.
4. Every clinician whose organization has your pack sees a banner within minutes on any message that cited the affected documents.
5. An audit log entry is created with the full payload.

Retractions are **idempotent** — posting the same `external_id` twice is safe.

## Manifest: tools and skills

Your pack's `manifest` JSON declares optional AI-facing affordances beyond cited retrieval:

```json
{
  "tools": [
    {
      "name": "lookup_ifu",
      "description": "Look up an ACME IFU by device code.",
      "input_schema": {
        "type": "object",
        "properties": {
          "query":        { "type": "string" },
          "product_code": { "type": "string" }
        },
        "required": ["query"]
      },
      "query_field": "query",
      "limit": 6
    }
  ],
  "skills": [
    {
      "slug": "acme-dressing-setup",
      "name": "Dressing setup",
      "description": "Step-by-step for applying an ACME film dressing.",
      "instructions": "<markdown instructions injected into system prompt>",
      "trigger_patterns": ["how do I apply", "dressing setup", "wound coverage"],
      "category": "clinical_documentation",
      "preferred_tools": ["acme.lookup_ifu"]
    }
  ]
}
```

- **Tools** are exposed to the AI as `{slug}.{tool_name}` (e.g. `acme.lookup_ifu`). They only appear when your pack is active for that user, and each tool performs pack-scoped retrieval (with optional `product_code` filter) over your catalog.
- **Skills** register as auto-triggering procedures. When a clinician's question matches your `trigger_patterns`, Lumen applies the skill's instructions, scoped to your pack's content.

Both are optional — a content-only pack (cited retrieval alone) is a perfectly valid integration.

## Analytics

Every query that retrieves one of your documents logs an aggregate access record. We never store raw query text — only a SHA-256 hash for deduplication.

At the end of each month you receive a report covering:

- Total retrievals, unique users, unique organizations
- Top 25 documents by retrieval count
- Top 25 product codes by retrieval count
- Top 25 query patterns (signals of your clinicians' information-seeking behavior)
- Daily time series
- Unanswered query patterns — queries that reached your content but found no good match, a direct signal of documentation gaps

Live analytics access is available on request through your partner contact.

## SLAs + contact

| Event | Target |
|---|---|
| Catalog poll frequency | hourly |
| Retraction webhook → banner on clinician screen | <5 min |
| Mean document ingest latency (new doc) | <60 s |
| Partner analytics monthly delivery | 5th of each month |

For integration questions email `partners@intracav.ai`.
