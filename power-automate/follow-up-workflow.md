# Microsoft Power Automate Workflow C: Registration Follow-up Workflow

This workflow enables the onboarding team to trigger automated or manual task assignments when a newcomer registration is flagged as `Follow-up required`.

---

## 1. Flow Overview

- **Trigger**: When an administrator marks a registration as `Follow-up required` in the Admin Dashboard, or when triggered via authenticated webhook.
- **Goal**:
  1. Assign a follow-up task or email to the assigned onboarding team member.
  2. Post an alert in a designated Microsoft Teams channel (`#onboarding-team`).
  3. Include registration reference, reason for joining, and internal notes.

---

## 2. Teams Channel Adaptive Card Notification

### Connector: Microsoft Teams -> `Post card in a chat or channel`
- **Post as**: Flow bot
- **Post in**: Channel
- **Team**: `Association Cap Entrepreneurs`
- **Channel**: `Accueil & Onboarding`

### Adaptive Card JSON Payload:
```json
{
  "type": "AdaptiveCard",
  "version": "1.4",
  "body": [
    {
      "type": "TextBlock",
      "size": "Medium",
      "weight": "Bolder",
      "text": "Suivi Requis - Nouvel Arrivant"
    },
    {
      "type": "FactSet",
      "facts": [
        { "title": "Référence :", "value": "@{triggerBody()?['reference']}" },
        { "title": "Candidat :", "value": "@{triggerBody()?['first_name']} @{triggerBody()?['last_name']}" },
        { "title": "Rôle :", "value": "@{triggerBody()?['professional_role']}" },
        { "title": "Pays :", "value": "@{triggerBody()?['country']}" },
        { "title": "Notes :", "value": "@{triggerBody()?['internal_notes']}" }
      ]
    }
  ],
  "actions": [
    {
      "type": "Action.OpenUrl",
      "title": "Ouvrir dans l'administration",
      "url": "https://capentrepreneurs.com/admin"
    }
  ]
}
```

---

## 3. Privacy Safeguard

Personal phone numbers and sensitive identification details are excluded from public Teams channels. Only the unique reference and operational summary are shared.
