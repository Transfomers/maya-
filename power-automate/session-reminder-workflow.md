# Microsoft Power Automate Workflow B: Welcome Session Reminder

This workflow sends timely reminders to registered newcomers before their scheduled Microsoft Teams welcome session.

---

## 1. Flow Overview

- **Trigger Type**: Recurrence (Daily or scheduled 24 hours / 2 hours prior to a session).
- **Alternative Trigger**: HTTP Webhook triggered when an administrator publishes a session.
- **Audience**: Registered newcomers with status `Received` or `Welcome session scheduled`.

---

## 2. Trigger Configuration

- **Trigger**: `Recurrence`
- **Interval**: 1 Day (e.g., at 08:00 AM UTC).

---

## 3. Workflow Steps

1. **HTTP Action**: Retrieve upcoming session from the Cap Entrepreneurs API:
   - `GET https://capentrepreneurs.com/api/v1/sessions/upcoming`
2. **Condition**: Check if `has_upcoming_session` is `true` and the session date is within the reminder window (e.g. tomorrow).
3. **Data Retrieval**:
   - Query registered candidates or trigger individual reminder event.
4. **Action: Send Reminder Email via Office 365 Outlook**:
   - **Subject**: `[Rappel] Votre session d'accueil Cap Entrepreneurs aura lieu demain`
   - **Body Elements**:
     - Session title & description.
     - Confirmed date and local time.
     - Direct Microsoft Teams Join Button.
     - Instructions for joining via web browser without downloading software.
     - Contact link for technical support (`contact@capentrepreneurs.org`).
5. **Anti-Duplication Protection**:
   - Record notification timestamp so no newcomer receives duplicate reminders.
