---
title: "Publish a partner Knowledge Pack"
navTitle: "Partner Knowledge Packs"
description: "The contract for device and pharma partners publishing IFUs, manuals and evidence as a Lumen Knowledge Pack: signed catalog, diffs and retractions."
lead: "Serve a signed catalog of your documents, and Lumen keeps a Knowledge Pack in step with it: new documents are added, changed ones replaced, and withdrawn ones retracted."
weight: 6
icon: package
who: "partner engineering teams"
aliases: ["/extensions/partner-integration-guide/"]
glance:
  what: "The technical contract for delivering a partner's documents into Lumen as a Knowledge Pack, a curated collection of documents Lumen can search and cite, kept current from a signed catalog you host."
  who: "Engineering teams at device and pharma partners who have agreed with Intracav to publish their documentation in Lumen."
  why: "So clinicians whose organizations use your pack get answers cited to your current documents, and a recall or withdrawal takes effect quickly."
  needs: "A partner agreement with Intracav, an HTTPS endpoint you control, and an ed25519 key pair. A few days of engineering, including a staging test with Intracav."
  result: "Your catalog polled hourly, verified, and kept in sync as a cited Knowledge Pack, with an urgent retraction path."
---

A **partner Knowledge Pack** puts your instructions for use (IFUs), service manuals, quick references and other approved documents into Lumen, where clinicians in organizations that have your pack can get answers cited to them. You host a signed catalog. Lumen polls it, verifies it, and keeps the pack in step: it adds new documents, replaces changed ones, and retracts ones you remove.

## Before you start

- **A partner agreement with Intracav.** Intracav sets up your pack, its display name and the license terms that organization admins accept.
- **An ed25519 key pair.** You keep the private key and send Intracav the 32-byte public key, hex or base64 encoded.
- **A catalog endpoint** over HTTPS, protected by a token you give Intracav.
- **A staging endpoint** for the end-to-end test before production.

## How to integrate

{{< steps >}}
{{< step title="Exchange keys" >}}Send Intracav your ed25519 public key and the token for your catalog endpoint. Agree the secret for signing retraction requests.{{< /step >}}
{{< step title="Build the catalog endpoint" >}}Serve a signed envelope listing your documents, as described below.{{< /step >}}
{{< step title="Test in staging" >}}Intracav points Lumen at your staging catalog and runs the full round trip: fetch, verify, compare, ingest, a citation in a test chat, and a retraction.{{< /step >}}
{{< step title="Go live" >}}Intracav switches to your production catalog and activates the pack. Organizations can then be granted access.{{< /step >}}
{{< /steps >}}

## The catalog

Lumen polls your catalog **hourly**:

```text
GET https://api.partner.example/lumen/catalog
Authorization: <the header value you gave Intracav>
User-Agent: lumen-server/1.0 (extension-pull)
```

You return a signed envelope:

```json
{
  "version": "2026.11.01-r1",
  "issued_at": "2026-11-01T12:00:00Z",
  "signature": "<ed25519 signature over the canonical body, hex or base64>",
  "body": {
    "documents": [
      {
        "external_id": "NWV-SL4-IFU",
        "title": "SL-4 Securement Device, Instructions for Use",
        "document_type": "ifu",
        "product_code": "SL-4",
        "region": "US",
        "language": "en",
        "effective_date": "2026-10-01",
        "source_url": "https://partner.example/docs/SL-4-IFU.pdf",
        "content": "<full extracted text>",
        "content_hash": "<sha256 hex of content>"
      }
    ]
  }
}
```

| Field | Required | Notes |
|---|---|---|
| `version` | Yes | Your catalog version. Stored with every ingested passage. |
| `issued_at` | Yes | ISO 8601. Must be within 60 minutes of Lumen's clock. |
| `signature` | When a key is configured | ed25519 over the canonical body (below). |
| `external_id` | Yes | Your stable ID for the document. Used for comparison and retraction. |
| `title` | Yes | Shown in citations. |
| `document_type` | No | `ifu` (default), `service_manual`, `quick_ref`, `training`, `recall_notice` or `other`. |
| `product_code` | No | SKU or REF. Lets tools filter by product. |
| `region` | No | Such as `US` or `EU`. |
| `language` | No | BCP 47 tag. Default `en`. |
| `effective_date` | No | `YYYY-MM-DD`. Shown in citations. |
| `source_url` | No | The canonical file, so readers can open the original. |
| `content` | Yes | The full extracted text. |
| `content_hash` | No | SHA-256 of `content`. Lumen computes it if missing. |

### How Lumen compares versions

On each poll, Lumen compares each document's content hash with what it holds:

- A new `external_id` is ingested.
- A changed hash replaces the old version.
- An unchanged hash is skipped.
- A document missing from the catalog is retracted, with the reason `removed_by_publisher`.

### Signing the body

Lumen verifies the signature over a canonical form of `body`: compact JSON (no spaces), raw UTF-8 (non-ASCII characters not escaped), and each document's fields **in this order, all present**, with `null` for anything you leave out and the defaults filled in:

`external_id`, `title`, `document_type`, `product_code`, `region`, `language`, `effective_date`, `source_url`, `content`, `content_hash`

Fields not in that list are dropped before verification. Don't sort keys.

```python
import json, nacl.signing

ORDER = ["external_id", "title", "document_type", "product_code", "region",
         "language", "effective_date", "source_url", "content", "content_hash"]
DEFAULTS = {"document_type": "ifu", "language": "en"}

def canonical_body(docs):
    ordered = [{k: d.get(k, DEFAULTS.get(k)) for k in ORDER} for d in docs]
    return json.dumps({"documents": ordered}, separators=(",", ":"),
                      ensure_ascii=False).encode("utf-8")

signing_key = nacl.signing.SigningKey(bytes.fromhex(PRIVATE_KEY_HEX))
signature = signing_key.sign(canonical_body(documents)).signature.hex()
```

Test your signature against Intracav's staging environment before production. A mismatch rejects the whole catalog.

## Urgent retractions

For recalls, regulatory actions and urgent label changes, don't wait for the next poll. Send a signed retraction:

```text
POST https://api.intracav.ai/api/ext/webhook/<your-pack-slug>/retract
X-Ext-Signature: sha256=<hex HMAC-SHA256 of the raw body>
Content-Type: application/json

{
  "external_ids": ["NWV-SL4-IFU"],
  "reason": "Field safety notice 2026-11-10",
  "issued_at": "2026-11-10T14:00:00Z"
}
```

Lumen checks the HMAC, then rejects requests whose `issued_at` is more than 5 minutes off. It then removes the documents from search, records the full request in the audit log, and notifies signed-in users in organizations that have your pack. Retractions are idempotent, so sending the same ID twice is safe.

## Tools and skills (optional)

Your pack's manifest can declare extra tools and skills:

- **Tools** appear to Lumen as `<pack-slug>.<tool-name>`. Each one searches your pack, optionally filtered by `product_code`, with a `query_field` and `limit` you set.
- **Skills** are instructions Lumen applies when a question matches their `trigger_patterns`, limited to your pack's content.

A pack with neither, only cited documents, is a complete integration.

## What you'll see

In a Lumen chat, a clinician in an organization that has your pack sees answers that cite your document by title, with its effective date and a link to the source.

## Limits

- **Polling is hourly.** Use the retraction request for anything urgent.
- **Text only.** The catalog carries extracted text. Send the full text of each document in `content`.
- **Usage data is aggregate.** Intracav can share retrieval counts for your pack, such as top documents, top product codes and daily totals. Query text isn't stored, only a hash of it.
- **Access is granted per organization.** Your pack reaches clinicians only in organizations that have been granted it.

## FAQ

{{< faq question="What happens if our catalog is down?" >}}
Lumen keeps the pack as it was and tries again on the next hourly poll.
{{< /faq >}}
{{< faq question="How fast does a retraction take effect?" >}}
As soon as Lumen accepts the request, the documents leave search and users in organizations with your pack are notified.
{{< /faq >}}
{{< faq question="Can we see what clinicians ask about our products?" >}}
Intracav can share aggregate retrieval data for your pack. Raw query text isn't stored.
{{< /faq >}}

## Next steps

{{< related "/knowledge/knowledge-packs/" "/developers/mcp/" "/developers/api/" "/developers/" >}}
