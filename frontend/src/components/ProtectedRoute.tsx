import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticatedAdmin } from '../services/auth';

export const ProtectedRoute: React.FC = () => {
  const isAuth = isAuthenticatedAdmin();

  if (!isAuth) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};
