import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export interface SEOHeadProps {
  page?: 'home' | 'services' | 'about' | 'join' | 'contact' | 'privacy' | 'service-detail';
  customTitle?: string;
  customDescription?: string;
  customKeywords?: string;
  customCanonical?: string;
  extraSchema?: object[];
  breadcrumbName?: string;
}

const PAGE_KEYWORDS: Record<string, { fr: string; en: string }> = {
  home: {
    fr: "cabinet conseil Yaoundé, création entreprise Cameroun, conseil fiscal Yaoundé, déclaration CNPS, montage DAO marchés publics, DSF OHADA, 3M Consulting",
    en: "business consulting Yaoundé, company formation Cameroon, tax advisory Yaoundé, CNPS social security, tender DAO bids, OHADA DSF, 3M Consulting",
  },
  services: {
    fr: "création entreprise Cameroun, formalités RCCM Yaoundé, recherche locaux commerciaux Yaoundé, agrément ministériel Cameroun, déclaration fiscale mensuelle DGI, montage DSF Cameroun, appel d'offres DAO Yaoundé",
    en: "business incorporation Cameroon, RCCM registry Yaoundé, commercial lease Yaoundé, ministerial license Cameroon, monthly tax filing DGI, DSF report Cameroon, tender DAO bids Yaoundé",
  },
  about: {
    fr: "cabinet 3M Consulting SARL, Monroi Maya Michael, histoire 3M Consulting Yaoundé, experts conseil Cameroun, fiduciaire Yaoundé Omnisport",
    en: "3M Consulting SARL firm, Monroi Maya Michael CEO, 3M Consulting history Yaoundé, corporate advisors Cameroon, advisory firm Yaoundé Omnisport",
  },
  join: {
    fr: "devenir client 3M Consulting, recrutement consultant Yaoundé, opportunités conseil Cameroun, inscription 3M Consulting, réseau experts d'affaires",
    en: "become a client 3M Consulting, consultant recruitment Yaoundé, advisory opportunities Cameroon, 3M Consulting signup, business experts network",
  },
  contact: {
    fr: "contact 3M Consulting, adresse Omnisport Rue Foé Yaoundé, téléphone conseil entreprise Yaoundé, email contact@3mconsultingsarl.com",
    en: "contact 3M Consulting, Omnisport Rue Foé Yaoundé address, business advisory phone Yaoundé, email contact@3mconsultingsarl.com",
  },
  privacy: {
    fr: "politique confidentialité 3M Consulting, mentions légales SARL Cameroun",
    en: "privacy policy 3M Consulting, legal notices Cameroon SARL",
  },
};

export const SEOHead: React.FC<SEOHeadProps> = ({
  page = 'home',
  customTitle,
  customDescription,
  customKeywords,
  customCanonical,
  extraSchema = [],
  breadcrumbName,
}) => {
  const { language, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const meta = (t.seo as any)?.[page] || t.seo.home;
    const finalTitle = customTitle || meta?.title || '3M Consulting SARL';
    const finalDesc = customDescription || meta?.desc || '';

    // Set page title
    document.title = finalTitle;

    // Helper to set meta name
    const setMetaTag = (name: string, content: string) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Helper to set meta property
    const setOgTag = (property: string, content: string) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    // Meta description & keywords
    setMetaTag('description', finalDesc);
    const keywords =
      customKeywords || PAGE_KEYWORDS[page]?.[language] || PAGE_KEYWORDS.home[language];
    setMetaTag('keywords', keywords);
    setMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('author', '3M Consulting SARL');

    // Canonical link
    const canonicalBase = 'https://3mconsultingsarl.com';
    const canonicalHref = customCanonical || `${canonicalBase}${location.pathname === '/' ? '' : location.pathname}`;

    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', canonicalHref);

    // OpenGraph tags
    const ogImage = 'https://3mconsultingsarl.com/asset/partner-office-sign-landscape.webp';
    setOgTag('og:title', finalTitle);
    setOgTag('og:description', finalDesc);
    setOgTag('og:url', canonicalHref);
    setOgTag('og:type', 'website');
    setOgTag('og:site_name', '3M Consulting SARL');
    setOgTag('og:locale', language === 'fr' ? 'fr_CM' : 'en_US');
    setOgTag('og:image', ogImage);
    setOgTag('og:image:width', '1200');
    setOgTag('og:image:height', '630');
    setOgTag('og:image:alt', '3M Consulting SARL - Cabinet de Conseil aux Entreprises à Yaoundé');

    // Twitter card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', finalTitle);
    setMetaTag('twitter:description', finalDesc);
    setMetaTag('twitter:image', ogImage);

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

    // Schema.org Structured Data (JSON-LD)
    const jsonLdId = 'schema-3mconsulting';
    let scriptTag = document.getElementById(jsonLdId) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = jsonLdId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const breadcrumbItems: any[] = [
      {
        '@type': 'ListItem',
        position: 1,
        name: language === 'fr' ? 'Accueil' : 'Home',
        item: canonicalBase,
      },
    ];

    if (page === 'service-detail') {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name: language === 'fr' ? 'Domaines & Services' : 'Services',
        item: `${canonicalBase}/services`,
      });
      if (breadcrumbName) {
        breadcrumbItems.push({
          '@type': 'ListItem',
          position: 3,
          name: breadcrumbName,
          item: canonicalHref,
        });
      }
    } else if (page !== 'home') {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: 2,
        name:
          page === 'services'
            ? language === 'fr'
              ? 'Domaines'
              : 'Services'
            : page === 'about'
            ? language === 'fr'
              ? 'À Propos'
              : 'About'
            : page === 'join'
            ? language === 'fr'
              ? 'Rejoignez-Nous'
              : 'Join Us'
            : page === 'contact'
            ? 'Contact'
            : 'Politique de Confidentialité',
        item: canonicalHref,
      });
    }

    const graphElements = [
      {
        '@type': 'ProfessionalService',
        '@id': 'https://3mconsultingsarl.com/#organization',
        name: '3M Consulting SARL',
        url: 'https://3mconsultingsarl.com',
        logo: 'https://3mconsultingsarl.com/asset/logo-3m-official.webp',
        image: 'https://3mconsultingsarl.com/asset/partner-office-sign-landscape.webp',
        description: finalDesc,
        telephone: '+237673841821',
        email: 'contact@3mconsultingsarl.com',
        priceRange: '$$',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Omnisport Rue Foé',
          addressLocality: 'Yaoundé',
          addressRegion: 'Centre',
          addressCountry: 'CM',
        },
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 3.8865,
          longitude: 11.5342,
        },
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '07:30',
            closes: '17:30',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Saturday'],
            opens: '08:00',
            closes: '14:30',
          },
        ],
        sameAs: [
          'https://www.facebook.com/share/1FftJwk51R/?mibextid=wwXIfr',
          'https://vt.tiktok.com/ZSgXqLqXu/',
          'https://3mconsultingsarl.com',
        ],
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbItems,
      },
      ...extraSchema,
    ];

    const structuredData = {
      '@context': 'https://schema.org',
      '@graph': graphElements,
    };

    scriptTag.text = JSON.stringify(structuredData);
  }, [
    language,
    page,
    customTitle,
    customDescription,
    customKeywords,
    customCanonical,
    location.pathname,
    extraSchema,
    breadcrumbName,
    t,
  ]);

  return null;
};
