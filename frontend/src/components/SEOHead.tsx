import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

interface SEOHeadProps {
  page: 'home' | 'services' | 'about' | 'join' | 'contact' | 'privacy';
  customTitle?: string;
  customDescription?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ page, customTitle, customDescription }) => {
  const { language, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const meta = t.seo[page] || t.seo.home;
    const finalTitle = customTitle || meta.title;
    const finalDesc = customDescription || meta.desc;

    // Set page title
    document.title = finalTitle;

    // Set or create meta description
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
      metaDescTag = document.createElement('meta');
      metaDescTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescTag);
    }
    metaDescTag.setAttribute('content', finalDesc);

    // Canonical link
    const canonicalBase = 'https://3mconsultingsarl.com';
    const path = location.pathname === '/' ? '' : location.pathname;
    const canonicalHref = `${canonicalBase}${path}`;

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalHref);

    // Ensure OpenGraph and Twitter tags exist
    const setOgTag = (property: string, content: string) => {
      let og = document.querySelector(`meta[property="${property}"]`);
      if (!og) {
        og = document.createElement('meta');
        og.setAttribute('property', property);
        document.head.appendChild(og);
      }
      og.setAttribute('content', content);
    };

    setOgTag('og:title', finalTitle);
    setOgTag('og:description', finalDesc);
    setOgTag('og:url', canonicalHref);
    setOgTag('og:type', 'website');
    setOgTag('og:site_name', '3M Consulting');
    setOgTag('og:locale', language === 'fr' ? 'fr_CM' : 'en_US');

    // Hreflang alternates
    const ensureHreflang = (hreflang: string, href: string) => {
      let link = document.querySelector(`link[rel="alternate"][hreflang="${hreflang}"]`);
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', hreflang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    ensureHreflang('fr', `${canonicalHref}${canonicalHref.includes('?') ? '&' : '?'}lang=fr`);
    ensureHreflang('en', `${canonicalHref}${canonicalHref.includes('?') ? '&' : '?'}lang=en`);
    ensureHreflang('x-default', canonicalHref);
  }, [language, page, customTitle, customDescription, location.pathname, t]);

  return null;
};
