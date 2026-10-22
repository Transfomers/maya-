export interface AdminUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const getStoredAdminToken = (): string | null => {
  return localStorage.getItem('cap_admin_token');
};

export const getStoredAdminUser = (): AdminUser | null => {
  const raw = localStorage.getItem('cap_admin_user');
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
};

export const setAdminSession = (token: string, user: AdminUser) => {
  localStorage.setItem('cap_admin_token', token);
  localStorage.setItem('cap_admin_user', JSON.stringify(user));
};

export const clearAdminSession = () => {
  localStorage.removeItem('cap_admin_token');
  localStorage.removeItem('cap_admin_user');
};

export const isAuthenticatedAdmin = (): boolean => {
  return Boolean(getStoredAdminToken());
};
