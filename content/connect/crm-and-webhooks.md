---
title: "Send leads to your CRM or a webhook"
navTitle: "CRM and webhooks"
description: "Connect a website assistant to Zoho CRM or HubSpot with field mapping, or send signed webhooks to any system. Leads arrive with their conversation attached."
lead: "Leads from your website assistant can go straight to Zoho CRM or HubSpot, mapped to your own fields, or to any system that accepts a signed webhook. Each lead carries what the visitor asked."
weight: 5
icon: webhook
who: "device makers"
glance:
  what: "The integrations that move website assistant leads and conversation events out of Lumen: Zoho CRM and HubSpot (connected with OAuth, with field mapping), and signed webhooks to any system."
  who: "Sales operations, marketing operations and the developers who maintain your CRM."
  why: "So a lead reaches the system your team already works in, with the conversation context attached, instead of sitting in another inbox."
  needs: "A website assistant, the owner or admin role, and an admin login for Zoho CRM or HubSpot, or an HTTPS endpoint for webhooks. About 15 minutes."
  result: "Leads flowing into your CRM or endpoint, each with the questions asked and products discussed."
---

A lead is most useful when the person following up knows why the visitor was there. When your [website assistant](/connect/website-assistant/) captures a lead, Lumen can create it in **Zoho CRM** or **HubSpot**, mapped to the fields you choose, or send it to any system through a **signed webhook**, a message to a web address you control that carries a signature proving it came from Lumen. Each lead carries the conversation context.

## Before you start

- A website assistant with **Lead capture** turned on.
- The **owner or admin** role on your team (called a *team* in Lumen).
- **For a CRM:** an account in Zoho CRM or HubSpot that can approve a connection.
- **For webhooks:** an HTTPS endpoint, and a developer who can verify the signature.

## How to connect Zoho CRM or HubSpot

{{< steps >}}
{{< step title="Open the integrations" >}}Open {{< ui-path "Admin console" "Website assistants" >}}, choose the assistant, and open **Install & CRM**. Find **Connect your CRM**.{{< /step >}}
{{< step title="Connect" >}}Click **Connect** for Zoho CRM or HubSpot, sign in to the CRM, and approve the connection.{{< /step >}}
{{< step title="Choose what to create" >}}Under **Create records as**, choose the record type. HubSpot always creates a Contact.{{< /step >}}
{{< step title="Map your fields" >}}Under **Field mapping**, match each Lumen field to a field in your CRM, then click **Save mapping**.{{< /step >}}
{{< step title="Send a test" >}}Click **Send test record** and check that it arrives in your CRM with the fields where you expect them.{{< /step >}}
{{< /steps >}}

If a lead fails to sync, the lead shows the error. Click **Push again** on the failure, or **Push to CRM** on the lead, to retry. To change accounts, use **Reconnect** or **Disconnect**.

## How to set up webhooks

{{< steps >}}
{{< step title="Open webhook settings" >}}On **Install & CRM**, open the **Webhooks** tile.{{< /step >}}
{{< step title="Subscribe to events" >}}Click **Subscribe to webhook events**, enter your endpoint's HTTPS address, choose the events you want, and click **Subscribe**. Each subscription gets its own signing secret. Copy it when it's shown, because that's the only time you'll see it in full.{{< /step >}}
{{< step title="Send a test" >}}Click **Test webhook**, then check **Recent attempts** to see the delivery and your endpoint's response.{{< /step >}}
{{< /steps >}}

### The events

| Event | When it's sent |
|---|---|
| `lead.captured` | A visitor leaves contact details and a lead is created |
| `lead.updated` | A lead changes, for example when its stage moves |
| `conversation.completed` | A conversation ends |
| `embed.session.summary` | A summary of a website assistant session is ready |

### Verifying the signature

Every delivery carries these headers:

```text
X-Lumen-Timestamp: 1762992000
X-Lumen-Signature: t=1762992000,v1=<hex HMAC-SHA256>
X-Lumen-Event: lead.captured
X-Lumen-Delivery-Id: <unique id>
```

The signature is an HMAC-SHA256 of the timestamp, a period and the raw request body (`<timestamp>.<body>`), using your signing secret. To verify a delivery:

1. Reject it if the timestamp is more than 5 minutes from your server's clock.
2. Compute the HMAC over `<timestamp>.<body>` with your secret.
3. Compare it with the `v1` value using a constant-time comparison. Reject it if they differ.

```python
import hmac, hashlib, time

def verify(secret: bytes, body: bytes, timestamp: str, signature_header: str) -> bool:
    if abs(time.time() - int(timestamp)) > 300:
        return False
    sent = dict(part.split("=", 1) for part in signature_header.split(","))
    expected = hmac.new(secret, f"{timestamp}.".encode() + body, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, sent.get("v1", ""))
```

### Retries

If your endpoint doesn't accept a delivery, Lumen tries again, up to five attempts, and then sets the event aside. After five failures in a row, Lumen pauses the subscription until an admin turns it back on. Use the delivery ID to ignore duplicates.

## Zoho SalesIQ

If your website already uses **Zoho SalesIQ** for chat, Lumen can answer inside it instead of using its own chat window. Your SalesIQ bot forwards each visitor message to Lumen, and Lumen replies with a cited answer. Set it up under **Install & CRM** with **Zoho SalesIQ Zobot (webhook)**, **Get webhook setup** and **Save SalesIQ public key**. See [Zoho SalesIQ](/developers/salesiq-webhook/) for the technical details.

## What you'll see

{{< lui-block title="Connect your CRM" sub="Field mapping · Lumen field → HubSpot field" >}}
{{< lui-kv "Name=firstname / lastname;Email=email;Organization=company;Role=jobtitle;Products of interest=sl4_interest" >}}
{{< lui-actions "Save mapping" "Send test record" >}}
{{< /lui-block >}}

## Limits

- **Zoho CRM and HubSpot only.** Salesforce isn't a supported destination for website assistant leads. To reach another system, use webhooks.
- **Webhook replay isn't in the app.** Lumen retries failed deliveries automatically. To retry a CRM sync, use **Push again**.
- **Field mapping is per assistant.** Each assistant has its own CRM connection and mapping.

{{< callout type="warning" title="Protect your signing secret" >}}
Anyone with your signing secret can forge a delivery. Keep it on your server, never in a web page, and always check the signature and timestamp before you trust a delivery.
{{< /callout >}}

## FAQ

{{< faq question="Does Lumen support Salesforce?" >}}
Not as a destination for website assistant leads. Use a signed webhook to send leads to Salesforce or any other system through your own integration.
{{< /faq >}}
{{< faq question="What arrives in the CRM with a lead?" >}}
The contact details the visitor gave, mapped to your fields, along with the conversation context, such as what they asked and which products came up.
{{< /faq >}}
{{< faq question="What happens if our CRM is down?" >}}
The lead stays in Lumen and shows the sync error. Retry with **Push again** when the CRM is back.
{{< /faq >}}

## Next steps

{{< related "/connect/leads-and-analytics/" "/connect/website-assistant/" "/developers/salesiq-webhook/" "/developers/api/" >}}
