import axios from 'axios';
import {
  RegistrationSubmission,
  RegistrationSafeSummary,
  UpcomingSessionResponse,
  PublicConfigResponse,
  AdminStats,
  RegistrationAdminDetail,
  IntegrationLogEntry,
  ContactMessageEntry,
} from '../types';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api/v1';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

// Attach Authorization header if admin token is stored
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('cap_admin_token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Intercept 401s for admin token expiration
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401 && window.location.pathname.startsWith('/admin')) {
      if (!window.location.pathname.includes('/login')) {
        localStorage.removeItem('cap_admin_token');
        localStorage.removeItem('cap_admin_user');
        window.location.href = '/admin/login?expired=true';
      }
    }
    return Promise.reject(error);
  }
);

// --- Public Endpoints ---

export const getPublicConfig = async (): Promise<PublicConfigResponse> => {
  const res = await apiClient.get<PublicConfigResponse>('/public-config');
  return res.data;
};

export const getUpcomingSession = async (): Promise<UpcomingSessionResponse> => {
  const res = await apiClient.get<UpcomingSessionResponse>('/sessions/upcoming');
  return res.data;
};

export const submitRegistration = async (data: RegistrationSubmission): Promise<RegistrationSafeSummary> => {
  const res = await apiClient.post<RegistrationSafeSummary>('/registrations', data);
  return res.data;
};

export const getRegistrationByReference = async (reference: string): Promise<RegistrationSafeSummary> => {
  const res = await apiClient.get<RegistrationSafeSummary>(`/registrations/${encodeURIComponent(reference)}`);
  return res.data;
};

export const submitContact = async (data: { name: string; email: string; subject: string; message: string; honeypot?: string }) => {
  const res = await apiClient.post('/contact', data);
  return res.data;
};

// --- Admin Endpoints ---

export const adminLoginApi = async (email: string, password: string) => {
  const res = await apiClient.post('/admin/login', { email, password });
  return res.data;
};

export const adminLogoutApi = async () => {
  const res = await apiClient.post('/admin/logout');
  return res.data;
};

export const getAdminStats = async (): Promise<AdminStats> => {
  const res = await apiClient.get<AdminStats>('/admin/stats');
  return res.data;
};

export const getAdminRegistrations = async (params: { page?: number; per_page?: number; status?: string; search?: string }) => {
  const res = await apiClient.get<{
    items: RegistrationAdminDetail[];
    total: number;
    page: number;
    pages: number;
    per_page: number;
  }>('/admin/registrations', { params });
  return res.data;
};

export const updateAdminRegistration = async (id: number, data: { status?: string; internal_notes?: string }) => {
  const res = await apiClient.patch<RegistrationAdminDetail>(`/admin/registrations/${id}`, data);
  return res.data;
};

export const exportRegistrationsCsvUrl = () => {
  return `${API_BASE_URL}/admin/registrations/export`;
};

export const getAdminSessions = async () => {
  const res = await apiClient.get('/admin/sessions');
  return res.data;
};

export const createAdminSession = async (data: any) => {
  const res = await apiClient.post('/admin/sessions', data);
  return res.data;
};

export const updateAdminSession = async (id: number, data: any) => {
  const res = await apiClient.patch(`/admin/sessions/${id}`, data);
  return res.data;
};

export const deleteAdminSession = async (id: number) => {
  const res = await apiClient.delete(`/admin/sessions/${id}`);
  return res.data;
};

export const getAdminIntegrationLogs = async (): Promise<IntegrationLogEntry[]> => {
  const res = await apiClient.get<IntegrationLogEntry[]>('/admin/integrations/logs');
  return res.data;
};

export const retryAdminIntegrationLog = async (logId: number) => {
  const res = await apiClient.post(`/admin/integrations/retry/${logId}`);
  return res.data;
};

export const getAdminContactMessages = async (): Promise<ContactMessageEntry[]> => {
  const res = await apiClient.get<ContactMessageEntry[]>('/admin/contact-messages');
  return res.data;
};

export const updateAdminContactStatus = async (id: number, status: string) => {
  const res = await apiClient.patch(`/admin/contact-messages/${id}`, { status });
  return res.data;
};
