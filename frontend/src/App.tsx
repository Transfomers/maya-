import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { JoinPage } from './pages/JoinPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { AdminLoginPage } from './pages/AdminLoginPage';
import { AdminDashboardPage } from './pages/AdminDashboardPage';
import { ProtectedRoute } from './components/ProtectedRoute';
import { CustomCursor } from './components/CustomCursor';

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Routes>
        {/* Public 3M Consulting Routes wrapped in MainLayout */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />

          {/* 7 Dedicated SEO Service Routes for Cameroon & Yaoundé */}
          <Route
            path="/creation-entreprise-cameroun"
            element={<ServiceDetailPage forcedSlug="creation-entreprise-cameroun" />}
          />
          <Route
            path="/recherche-amenagement-locaux-yaounde"
            element={<ServiceDetailPage forcedSlug="recherche-amenagement-locaux-yaounde" />}
          />
          <Route
            path="/agrements-ministeriels-licences-cameroun"
            element={<ServiceDetailPage forcedSlug="agrements-ministeriels-licences-cameroun" />}
          />
          <Route
            path="/gestion-fiscale-declarations-cnps-cameroun"
            element={<ServiceDetailPage forcedSlug="gestion-fiscale-declarations-cnps-cameroun" />}
          />
          <Route
            path="/montage-dsf-dossiers-credit-cameroun"
            element={<ServiceDetailPage forcedSlug="montage-dsf-dossiers-credit-cameroun" />}
          />
          <Route
            path="/conception-dao-redaction-tdr-cameroun"
            element={<ServiceDetailPage forcedSlug="conception-dao-redaction-tdr-cameroun" />}
          />
          <Route
            path="/montage-offres-marches-publics-cameroun"
            element={<ServiceDetailPage forcedSlug="montage-offres-marches-publics-cameroun" />}
          />

          {/* Dynamic route matching slug aliases & /services/:slug */}
          <Route path="/services/:slug" element={<ServiceDetailPage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/join" element={<JoinPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Route>

        {/* Admin Login & Dashboard */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<ProtectedRoute />}>
          <Route index element={<AdminDashboardPage />} />
        </Route>

        {/* 404 Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </LanguageProvider>
  );
};

export default App;
