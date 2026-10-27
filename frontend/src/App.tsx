import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { CustomCursor } from './components/CustomCursor';

// Lazy-loaded routes for ultra-fast initial page load
const ServicesPage = lazy(() =>
  import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage }))
);
const ServiceDetailPage = lazy(() =>
  import('./pages/ServiceDetailPage').then((m) => ({ default: m.ServiceDetailPage }))
);
const AboutPage = lazy(() =>
  import('./pages/AboutPage').then((m) => ({ default: m.AboutPage }))
);
const JoinPage = lazy(() =>
  import('./pages/JoinPage').then((m) => ({ default: m.JoinPage }))
);
const ContactPage = lazy(() =>
  import('./pages/ContactPage').then((m) => ({ default: m.ContactPage }))
);
const PrivacyPage = lazy(() =>
  import('./pages/PrivacyPage').then((m) => ({ default: m.PrivacyPage }))
);

// Lightweight fallback spinner matching brand colors
const PageFallback: React.FC = () => (
  <div className="min-h-[50vh] flex items-center justify-center">
    <div className="w-8 h-8 rounded-full border-3 border-slate-200 border-t-[#FFAD02] animate-spin" />
  </div>
);

export const App: React.FC = () => {
  return (
    <LanguageProvider>
      <CustomCursor />
      <Suspense fallback={<PageFallback />}>
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

          {/* Redirect any /admin access to home page */}
          <Route path="/admin/*" element={<Navigate to="/" replace />} />
          <Route path="/admin" element={<Navigate to="/" replace />} />

          {/* 404 Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </LanguageProvider>
  );
};

export default App;
