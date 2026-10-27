# Microsoft Power Automate Workflow A: New Registration Flow

This guide describes how to build and configure the **New Registration** Power Automate cloud flow for Association Cap Entrepreneurs.

---

## 1. Flow Overview

- **Trigger**: When an HTTP request is received (`POST`).
- **Trigger Source**: Flask API backend (`app.integrations.power_automate.PowerAutomateClient`).
- **Primary Actions**:
  1. Validate shared secret token (`X-PowerAutomate-Token`).
  2. Parse the newcomer registration payload.
  3. Send an automated HTML confirmation email to the newcomer via Microsoft 365 Outlook connector.
  4. Post an adaptive card / internal notification email to the onboarding team (`contact@capentrepreneurs.org`).
  5. Post an optional Teams channel notification into the onboarding channel.
  6. Return `HTTP 200` to Flask and invoke `/api/v1/webhooks/power-automate` callback.

---

## 2. Trigger Configuration

### Trigger Name
`When an HTTP request is received`

- **HTTP Method**: `POST`
- **Who can trigger the flow**: Any user in tenant or Anyone with the webhook URL (protected via custom secret header `X-PowerAutomate-Token`).

### Request Body JSON Schema
```json
{
  "type": "object",
  "properties": {
    "event": { "type": "string" },
    "timestamp": { "type": "string" },
    "registration": {
      "type": "object",
      "properties": {
        "id": { "type": "integer" },
        "reference": { "type": "string" },
        "first_name": { "type": "string" },
        "last_name": { "type": "string" },
        "email": { "type": "string" },
        "country": { "type": "string" },
        "city": { "type": "string" },
        "professional_role": { "type": "string" },
        "organization": { "type": "string" },
        "interests": {
          "type": "array",
          "items": { "type": "string" }
        },
        "reason_for_joining": { "type": "string" },
        "preferred_way_to_participate": { "type": "string" },
        "preferred_language": { "type": "string" },
        "privacy_consent": { "type": "boolean" },
        "privacy_notice_version": { "type": "string" },
        "consent_timestamp": { "type": "string" }
      },
      "required": ["reference", "first_name", "last_name", "email", "country", "preferred_language"]
    },
    "notification": {
      "type": "object",
      "properties": {
        "internal_recipient": { "type": "string" },
        "admin_dashboard_url": { "type": "string" }
      }
    },
    "next_session": {
      "type": "object",
      "properties": {
        "is_scheduled": { "type": "boolean" },
        "title": { "type": "string" },
        "start_time": { "type": "string" },
        "display_timezone": { "type": "string" },
        "duration_minutes": { "type": "integer" },
        "has_teams_link": { "type": "boolean" },
        "teams_join_url": { "type": "string" }
      }
    }
  }
}
```

---

## 3. Step-by-Step Flow Actions

### Step 1: Condition - Verify Secret Header
- Condition: `triggerOutputs()['headers']['X-PowerAutomate-Token']` **is equal to** `[Your_Configured_Secret_Token]`
- If **False**:
  - Action: **Response** (`HTTP 401 Unauthorized`, `{"error": "Unauthorized webhook token"}`).
  - Terminate with status **Cancelled/Failed**.

### Step 2: Action - Send Newcomer Confirmation Email (V2)
- **Connector**: Office 365 Outlook -> `Send an email (V2)`
- **To**: `triggerBody()?['registration']?['email']`
- **Subject**: `Bienvenue chez Association Cap Entrepreneurs - Référence @{triggerBody()?['registration']?['reference']}`
- **Body (HTML)**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
  <h2 style="color: #1e40af;">Bienvenue chez Association Cap Entrepreneurs !</h2>
  <p>Bonjour <strong>@{triggerBody()?['registration']?['first_name']}</strong>,</p>
  
  <p>Nous avons bien reçu votre déclaration d'intérêt pour rejoindre notre communauté.</p>
  
  <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2563eb;">
    <p style="margin: 0; font-size: 13px; color: #64748b;">Votre référence d'accueil :</p>
    <p style="margin: 5px 0 0 0; font-size: 20px; font-weight: bold; color: #0f172a; font-family: monospace;">
      @{triggerBody()?['registration']?['reference']}
    </p>
  </div>

  <h3 style="color: #0f172a;">Prochaine Session d'Accueil en Visioconférence (Microsoft Teams)</h3>
  <p>Notre prochaine session d'accueil en ligne vous permettra de rencontrer notre équipe et de découvrir nos activités :</p>
  
  <p><strong>Date & Heure :</strong> @{triggerBody()?['next_session']?['start_time']} (@{triggerBody()?['next_session']?['display_timezone']})</p>
  
  <p style="margin: 25px 0;">
    <a href="https://capentrepreneurs.com/welcome-session" style="background-color: #2563eb; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
      Consulter les détails de la session & le lien Teams
    </a>
  </p>

  <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
  <p style="font-size: 12px; color: #94a3b8;">
    Association Cap Entrepreneurs - <a href="https://capentrepreneurs.org" style="color: #64748b;">capentrepreneurs.org</a><br/>
    Pour toute question, écrivez-nous à <a href="mailto:contact@capentrepreneurs.org" style="color: #64748b;">contact@capentrepreneurs.org</a>.<br/>
    Conformément à notre politique de confidentialité, vous disposez d'un droit d'accès et de modification de vos données.
  </p>
</div>
```

### Step 3: Action - Send Internal Notification to Onboarding Team
- **Connector**: Office 365 Outlook -> `Send an email (V2)`
- **To**: `triggerBody()?['notification']?['internal_recipient']`
- **Subject**: `[Nouveau Nouvel Arrivant] @{triggerBody()?['registration']?['first_name']} @{triggerBody()?['registration']?['last_name']} (@{triggerBody()?['registration']?['country']})`
- **Body**:
```html
<p>Un nouvel arrivant a complété le formulaire d'accueil :</p>
<ul>
  <li><strong>Référence :</strong> @{triggerBody()?['registration']?['reference']}</li>
  <li><strong>Nom :</strong> @{triggerBody()?['registration']?['first_name']} @{triggerBody()?['registration']?['last_name']}</li>
  <li><strong>Email :</strong> @{triggerBody()?['registration']?['email']}</li>
  <li><strong>Pays & Ville :</strong> @{triggerBody()?['registration']?['country']}, @{triggerBody()?['registration']?['city']}</li>
  <li><strong>Rôle :</strong> @{triggerBody()?['registration']?['professional_role']}</li>
  <li><strong>Organisation :</strong> @{triggerBody()?['registration']?['organization']}</li>
  <li><strong>Langue préférée :</strong> @{triggerBody()?['registration']?['preferred_language']}</li>
</ul>
<p><a href="@{triggerBody()?['notification']?['admin_dashboard_url']}">Accéder au tableau de bord administrateur</a></p>
```

### Step 4: Action - Callback to Flask API (Optional)
- **HTTP POST** to `https://capentrepreneurs.com/api/v1/webhooks/power-automate`
- Header: `X-PowerAutomate-Token: [Secret_Token]`
- Body:
```json
{
  "event": "email_delivered",
  "reference": "@{triggerBody()?['registration']?['reference']}",
  "email_sent": true,
  "status": "Contacted"
}
```

### Step 5: Final Response Action
- **Response**: `HTTP 200 OK`
- Body: `{"status": "success", "reference": "@{triggerBody()?['registration']?['reference']}"}`

---

## 4. Connection & Licensing Requirements

- **Microsoft 365 Business Basic / Standard / E3 / E5 / Non-Profit Grant**:
  - The Office 365 Outlook connector is a standard (non-premium) connector included in virtually all Microsoft 365 business and nonprofit licenses.
  - The HTTP Request trigger is supported under standard Power Automate cloud flows or Power Automate per user plans.
- If HTTP trigger is restricted to premium in your tenant, use the **Microsoft Forms Alternative** or trigger via Microsoft SharePoint / Outlook incoming email.
