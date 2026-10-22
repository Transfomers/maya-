export interface RegistrationSubmission {
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city?: string;
  professional_role?: string;
  organization?: string;
  interests?: string[];
  reason_for_joining?: string;
  preferred_way_to_participate?: string;
  preferred_language: 'fr' | 'en';
  privacy_consent: boolean;
  honeypot?: string;
}

export interface RegistrationSafeSummary {
  reference: string;
  first_name: string;
  email_masked: string;
  status: string;
  created_at: string;
  preferred_language?: string;
  message?: string;
  notification_dispatched?: boolean;
}

export interface RegistrationAdminDetail {
  id: number;
  reference: string;
  first_name: string;
  last_name: string;
  email: string;
  country: string;
  city?: string;
  professional_role?: string;
  organization?: string;
  interests: string[];
  reason_for_joining?: string;
  preferred_way_to_participate?: string;
  preferred_language: string;
  privacy_consent: boolean;
  privacy_notice_version: string;
  consent_timestamp?: string;
  status: string;
  internal_notes?: string;
  created_at: string;
  updated_at: string;
}

export interface WelcomeSessionPublic {
  id: number;
  title: string;
  description: string;
  start_time: string;
  display_timezone: string;
  duration_minutes: number;
  has_teams_link: boolean;
  teams_join_url?: string | null;
  is_published: boolean;
}

export interface SessionInstructions {
  status: string;
  message: string;
  join_url?: string | null;
  can_join: boolean;
  browser_supported: boolean;
  instructions: string[];
}

export interface UpcomingSessionResponse {
  has_upcoming_session: boolean;
  session: WelcomeSessionPublic | null;
  instructions: SessionInstructions;
}

export interface PublicConfigResponse {
  organization: {
    name: string;
    main_website: string;
    onboarding_website: string;
    contact_email: string;
    privacy_notice_version: string;
  };
  features: {
    enable_ms_forms_mode: boolean;
    ms_forms_embed_url: string | null;
  };
}

export interface AdminStats {
  total_registrations: number;
  status_breakdown: Record<string, number>;
  upcoming_published_sessions: number;
  failed_integrations: number;
  new_contact_messages: number;
  microsoft_graph: {
    configured: boolean;
    status_message: string;
  };
}

export interface IntegrationLogEntry {
  id: number;
  event_type: string;
  registration_id: number | null;
  status: 'pending' | 'success' | 'failed' | 'retried';
  response_status: number | null;
  error_message: string | null;
  retry_count: number;
  created_at: string;
  updated_at: string;
}

export interface ContactMessageEntry {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  created_at: string;
}
