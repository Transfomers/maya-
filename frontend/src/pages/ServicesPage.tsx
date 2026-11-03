import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { SERVICE_ID_TO_CANONICAL } from '../content/servicesSeoData';
import {
  Building2,
  FileCheck,
  Receipt,
  ShieldCheck,
  FileSpreadsheet,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowUpRight,
  FileText,
  Clock,
  PhoneCall,
  ChevronDown,
  ChevronUp,
  MapPin,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { RequestAssistanceModal } from '../components/RequestAssistanceModal';
import { CompanyCreationCatalogue } from '../components/CompanyCreationCatalogue';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Building2,
  MapPin,
  FileCheck,
  Receipt,
  ShieldCheck,
  FileSpreadsheet,
  TrendingUp,
  Briefcase,
};

const SERVICE_IMAGES: Record<string, string> = {
  'creation-entreprise': '/asset/consultant-holding-dossiers.webp',
  'recherche-locaux': '/asset/partner-office-sign-landscape.webp',
  'agrements-licences': '/asset/consultation-dossiers-meeting.webp',
  'fiscalite-cnps': '/asset/team-working-office.webp',
  'montage-dsf': '/asset/ceo-monroi-maya-michael.webp',
  'montage-dao': '/asset/executive-portrait-sign.webp',
  'marches-publics': '/asset/team-full-office.webp',
};

// Execution highlights for each service
const SERVICE_METRICS: Record<string, { fr: { delay: string; format: string }; en: { delay: string; format: string } }> = {
  'creation-entreprise': {
    fr: { delay: '72h chrono (RCCM & NIU)', format: 'Dossier clé en main + Valise' },
    en: { delay: '72h fast-track incorporation', format: 'Turnkey bundle + Briefcase' },
  },
  'recherche-locaux': {
    fr: { delay: '3 à 7 jours ouvrés', format: 'Bail commercial sécurisé' },
    en: { delay: '3 to 7 business days', format: 'Secured commercial lease' },
  },
  'agrements-licences': {
    fr: { delay: 'Délais ministériels optimisés', format: 'Liaison directe administrations' },
    en: { delay: 'Streamlined ministry processing', format: 'Direct institutional liaison' },
  },
  'fiscalite-cnps': {
    fr: { delay: 'Avant le 15 de chaque mois', format: 'Déclarations fiscales & sociales' },
    en: { delay: 'Monthly by the 15th', format: 'Tax & social filing compliance' },
  },
  'montage-dsf': {
    fr: { delay: 'Conforme calendrier DGI', format: 'États financiers SYSCOHADA' },
    en: { delay: 'Compliant with DGI calendar', format: 'SYSCOHADA balance sheets' },
  },
  'montage-dao': {
    fr: { delay: 'Selon date limite de dépôt', format: 'Dossier technique & financier' },
    en: { delay: 'Strict tender deadline delivery', format: 'Technical & financial bids' },
  },
  'marches-publics': {
    fr: { delay: 'Tout au long du contrat', format: 'Décomptes, cautions & PV' },
    en: { delay: 'Full project lifecycle', format: 'Invoicing, guarantees & sign-off' },
  },
};

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<string>('');
  const [showCreationCatalogue, setShowCreationCatalogue] = useState<boolean>(true);
  const location = useLocation();

  // Scroll to hash anchor on mount or location change
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const openAssistance = (serviceTitle: string) => {
    setActiveService(serviceTitle);
    setModalOpen(true);
  };

  const services = t.whatWeOffer.services;

  return (
    <div className="flex flex-col w-full bg-white">
      <SEOHead page="services" />

      {/* =========================================================================
          HERO BANNER · Pure White Background with Clean Corporate Framing
          ========================================================================= */}
      <section className="bg-white pt-10 pb-8 sm:pt-14 sm:pb-12 lg:pt-20 lg:pb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em]">
            <Building2 className="w-3.5 h-3.5 text-jevelin-orange flex-shrink-0" />
            <span>3M CONSULTING · YAOUNDÉ, CAMEROUN</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-heading text-slate-900 tracking-tight max-w-4xl mx-auto leading-tight">
            {language === 'fr'
              ? 'Domaines d’Expertise & Solutions d’Affaires'
              : 'Practice Areas & Business Solutions'}
          </h1>

          <div className="flex justify-center">
            <div className="w-16 h-1 bg-jevelin-orange rounded-full" />
          </div>

          <p className="text-sm sm:text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {language === 'fr'
              ? 'Fini les blocages administratifs et l’incertitude réglementaire. Nous prenons en charge l’ensemble de vos démarches juridiques, fiscales et opérationnelles avec une équipe de juristes et consultants dédiés.'
              : 'No more administrative delays or regulatory bottlenecks. We take full charge of your legal, tax, and operational procedures with dedicated attorneys and corporate advisors.'}
          </p>

          {/* 4 Pillars of Excellence on White Background (Fully Responsive on Mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 max-w-5xl mx-auto pt-2 sm:pt-4 text-left">
            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition flex items-center sm:block space-x-3 sm:space-x-0">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center sm:mb-2 font-bold flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs text-slate-900 block font-heading">
                  {language === 'fr' ? 'Conformité OHADA & DGI' : 'OHADA & Tax Compliant'}
                </span>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  {language === 'fr' ? 'Actes certifiés au greffe et administrations' : 'Certified acts with tribunals and authorities'}
                </span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition flex items-center sm:block space-x-3 sm:space-x-0">
              <div className="w-8 h-8 rounded-lg bg-orange-50 text-jevelin-orange flex items-center justify-center sm:mb-2 font-bold flex-shrink-0">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs text-slate-900 block font-heading">
                  {language === 'fr' ? 'Délai Express (72h)' : 'Fast-Track (72h)'}
                </span>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  {language === 'fr' ? 'Constitution légale et délivrance rapide' : 'Rapid incorporation and filing execution'}
                </span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition flex items-center sm:block space-x-3 sm:space-x-0">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center sm:mb-2 font-bold flex-shrink-0">
                <Shield className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs text-slate-900 block font-heading">
                  {language === 'fr' ? 'Entretien Diagnostic Inclus' : 'Intake Diagnostic Included'}
                </span>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  {language === 'fr' ? 'Cadrage préalable sans engagement' : 'Prior scoping and legal form advisory'}
                </span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-slate-200/80 shadow-xs hover:border-slate-300 transition flex items-center sm:block space-x-3 sm:space-x-0">
              <div className="w-8 h-8 rounded-lg bg-slate-100 text-slate-700 flex items-center justify-center sm:mb-2 font-bold flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-xs text-slate-900 block font-heading">
                  {language === 'fr' ? 'Omnisport Rue Foé, Yaoundé' : 'Omnisport Rue Foé, Yaoundé'}
                </span>
                <span className="text-[11px] text-slate-500 leading-snug block mt-0.5">
                  {language === 'fr' ? 'Présentiel au siège ou visioconférence' : 'In-person at HQ or secure video call'}
                </span>
              </div>
            </div>
          </div>

          {/* Action Row - Responsive Stacking on Mobile */}
          <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-3">
            <button
              onClick={() => openAssistance(language === 'fr' ? 'Entretien Diagnostic & Accompagnement' : 'Diagnostic Interview & Assistance')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-heading font-extrabold text-xs uppercase tracking-[0.12em] sm:tracking-[0.15em] text-white bg-slate-900 hover:bg-jevelin-orange shadow-md transition-all duration-200 group"
            >
              <span>{language === 'fr' ? 'Réserver un Entretien Diagnostic' : 'Book a Diagnostic Interview'}</span>
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>

            <div className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-xl font-heading font-extrabold text-xs uppercase tracking-[0.1em] sm:tracking-[0.12em] text-slate-800 bg-slate-50 border border-slate-200 shadow-xs">
              <PhoneCall className="w-4 h-4 mr-2 text-jevelin-orange flex-shrink-0" />
              <div className="flex items-center space-x-1.5">
                <a href="tel:+237673841821" className="hover:text-jevelin-orange transition">
                  +237 673 84 18 21
                </a>
                <span className="text-slate-300">/</span>
                <a href="tel:+237698668761" className="hover:text-jevelin-orange transition">
                  +237 698 66 87 61
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          THE 7 PRACTICE AREAS CARDS · High-Contrast Clarity on White Background
          ========================================================================= */}
      <section className="py-8 sm:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {services.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.iconName] || Briefcase;
            const metric = SERVICE_METRICS[service.id]?.[language] || {
              delay: language === 'fr' ? 'Traitement rapide' : 'Fast processing',
              format: language === 'fr' ? 'Accompagnement expert' : 'Expert support',
            };

            return (
                <article
                  key={service.id}
                  id={service.id}
                  className="group relative scroll-mt-36 bg-white rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-jevelin-orange/40 transition-all duration-300 p-4 sm:p-7 lg:p-10 overflow-hidden"
                >
                  {/* Subtle top indicator bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jevelin-orange/20 via-jevelin-orange to-jevelin-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Header Row: Icon + Title + Number */}
                  <div className="flex items-start justify-between gap-3 pb-4 sm:pb-6 border-b border-slate-100">
                    <div className="flex items-start space-x-3 sm:space-x-4 min-w-0">
                      {/* Icon Container */}
                      <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-orange-50 border border-orange-100 text-jevelin-orange flex items-center justify-center flex-shrink-0 shadow-xs">
                        <IconComp className="w-5 h-5 sm:w-7 sm:h-7 stroke-[1.8]" />
                      </div>

                      <div className="space-y-1 min-w-0">
                        <div className="flex items-center flex-wrap gap-1.5 sm:gap-2">
                          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 sm:px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                            {service.badge}
                          </span>
                          <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                            ✓ {metric.delay}
                          </span>
                        </div>

                        <h2 className="text-lg sm:text-2xl lg:text-3xl font-extrabold font-heading text-slate-900 tracking-tight leading-snug">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    {/* Numeric Index (Visible on all viewports, sized appropriately) */}
                    <span className="text-2xl sm:text-4xl lg:text-5xl font-black font-heading text-slate-200 group-hover:text-jevelin-orange/30 transition-colors flex-shrink-0">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Two-Column Grid: Left = Summary & Deliverables | Right = Media & Prerequisites */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 pt-4 sm:pt-6 items-start">
                    {/* Left Column: Summary & What We Deliver */}
                    <div className="lg:col-span-7 space-y-4 sm:space-y-6">
                      <p className="text-sm sm:text-base lg:text-lg text-slate-800 font-semibold leading-relaxed">
                        {service.summary}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {service.description}
                      </p>

                      {/* What We Deliver (Detailed List) */}
                      <div className="space-y-3 p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-200/80">
                        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                          <span>
                            {language === 'fr' ? 'Ce que nous prenons en charge (Délivrables Clés) :' : 'What We Deliver (Key Deliverables):'}
                          </span>
                        </h3>

                        <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-slate-700">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-jevelin-orange mt-2 mr-2.5 flex-shrink-0" />
                              <span className="leading-snug">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Buttons Row - Full width stacking on mobile */}
                      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                        <button
                          type="button"
                          onClick={() => openAssistance(service.title)}
                          className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-slate-900 hover:bg-jevelin-orange shadow-md transition-all duration-200 group text-center"
                        >
                          <span>
                            {language === 'fr' ? 'Obtenir cet accompagnement' : 'Request This Support'}
                          </span>
                          <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </button>

                        <Link
                          to={SERVICE_ID_TO_CANONICAL[service.id] || `/services#${service.id}`}
                          className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 rounded-xl font-heading font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-300 shadow-xs transition-all duration-200 group text-center"
                        >
                          <span>
                            {language === 'fr' ? 'Guide complet & FAQ' : 'Full Guide & FAQs'}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-jevelin-orange group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </div>
                    </div>

                    {/* Right Column: Visual Preview & Prerequisites Card */}
                    <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                      <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4 sm:space-y-5">
                        {/* Image Preview with Crisp Label */}
                        <div className="relative h-40 sm:h-48 w-full overflow-hidden rounded-lg sm:rounded-xl border border-slate-200 shadow-xs group">
                          <img
                            src={SERVICE_IMAGES[service.id] || '/asset/consultant-holding-dossiers.webp'}
                            alt={service.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end justify-between p-3 sm:p-3.5">
                            <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white bg-slate-900/90 backdrop-blur-sm px-2 sm:px-2.5 py-1 rounded">
                              3M CONSULTING · YAOUNDÉ
                            </span>
                            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-slate-950 bg-jevelin-orange px-2 py-0.5 rounded font-heading">
                              {metric.format}
                            </span>
                          </div>
                        </div>

                        {/* Prerequisites / Documents to Prepare */}
                        <div className="space-y-2.5 sm:space-y-3 pt-1">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800 flex items-center">
                            <FileText className="w-3.5 h-3.5 mr-2 text-jevelin-orange" />
                            <span>
                              {language === 'fr' ? 'Éléments à prévoir pour votre dossier :' : 'Prerequisites & Documents to Prepare:'}
                            </span>
                          </h4>

                          <ul className="space-y-1.5 sm:space-y-2 text-xs text-slate-600">
                            {service.documentsRequired.map((doc, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-1.5 mr-2 flex-shrink-0" />
                                <span>{doc}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Detailed Catalogue Embed for Creation d'Entreprise (Clean Executive White Card) */}
                    {service.id === 'creation-entreprise' && (
                      <div className="lg:col-span-12 pt-4 sm:pt-6 border-t border-slate-200 mt-2 space-y-4 sm:space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-slate-50 border border-slate-200/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                          <div className="space-y-1 text-left">
                            <div className="flex items-center space-x-2">
                              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-md bg-slate-900 text-white font-heading">
                                CATALOGUE OFFICIEL · OCT 30, 2026
                              </span>
                              <span className="text-xs text-jevelin-orange font-bold">@MAYA MICHAEL</span>
                            </div>
                            <h3 className="text-base sm:text-xl font-bold font-heading text-slate-900">
                              {language === 'fr'
                                ? 'Catalogue Détaillé : Création d’Entreprise (6 Volets + Prestations Additionnelles)'
                                : 'Comprehensive Catalogue: Business Incorporation (6 Pillars + Additional Services)'}
                            </h3>
                            <p className="text-xs text-slate-600">
                              {language === 'fr'
                                ? 'Consultez les détails exhaustifs : constitution légale, CNPS, compte bancaire, charte graphique, cachets, valise d’entreprise et prestations additionnelles.'
                                : 'Explore comprehensive details: incorporation, CNPS, bank account, brand identity, stamps, executive briefcase, and add-on services.'}
                            </p>
                          </div>

                          <button
                            type="button"
                            onClick={() => setShowCreationCatalogue(!showCreationCatalogue)}
                            className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider text-slate-900 bg-jevelin-orange hover:bg-jevelin-orangeHover shadow-sm transition flex-shrink-0 text-center"
                          >
                            <span>
                              {showCreationCatalogue
                                ? (language === 'fr' ? 'Masquer le Catalogue' : 'Hide Catalogue')
                                : (language === 'fr' ? 'Afficher le Catalogue Complet' : 'Show Full Catalogue')}
                            </span>
                            {showCreationCatalogue ? (
                              <ChevronUp className="w-4 h-4 ml-1.5" />
                            ) : (
                              <ChevronDown className="w-4 h-4 ml-1.5" />
                            )}
                          </button>
                        </div>

                        {showCreationCatalogue && (
                          <div className="pt-2">
                            <CompanyCreationCatalogue
                              onSelectService={(serviceName) => openAssistance(serviceName)}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
        </div>
      </section>

      {/* =========================================================================
          FAST-TRACK PROCESS · "Comment Nous Travaillons" on Pure White
          ========================================================================= */}
      <section className="py-10 sm:py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12 text-center">
          <div className="space-y-2 sm:space-y-3 max-w-3xl mx-auto">
            <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-slate-400 font-heading block">
              {language === 'fr' ? 'MÉTHODOLOGIE RAPIDE & ÉPROUVÉE' : 'PROVEN FAST METHODOLOGY'}
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
              {language === 'fr'
                ? 'Votre démarche en 3 étapes claires et sans stress'
                : 'Your procedure in 3 simple, stress-free steps'}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-slate-600 text-xs sm:text-base">
              {language === 'fr'
                ? 'Une organisation transparente et rigoureuse pour garantir la conformité et la rapidité de vos actes.'
                : 'A transparent and rigorous process to ensure speed, compliance, and guaranteed delivery.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 text-left">
            {/* Step 1 */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3 sm:space-y-4 relative group hover:border-slate-300 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-slate-900 text-white font-black font-heading flex items-center justify-center text-base sm:text-lg shadow-sm">
                01
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                {language === 'fr' ? 'Diagnostic & Cadrage Préalable' : 'Intake & Scoping Diagnostic'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Entretien stratégique (présentiel ou visio) pour auditer vos besoins, valider les formes juridiques optimales et définir la liste exacte des pièces à fournir.'
                  : 'Strategic consultation to audit your requirements, select optimal legal forms, and verify required documents before commitment.'}
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3 sm:space-y-4 relative group hover:border-slate-300 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-jevelin-orange text-slate-950 font-black font-heading flex items-center justify-center text-base sm:text-lg shadow-sm">
                02
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                {language === 'fr' ? 'Montage & Dépôt Administratif' : 'Filing & Administrative Execution'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Rédaction rigoureuse des statuts, déclarations fiscales, dossiers CNPS ou DAO, puis liaison directe avec le greffe du tribunal et les administrations.'
                  : 'Flawless drafting of bylaws, tax declarations, CNPS filings, or tender dossiers with direct authority liaison.'}
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/80 shadow-xs space-y-3 sm:space-y-4 relative group hover:border-slate-300 transition">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-emerald-600 text-white font-black font-heading flex items-center justify-center text-base sm:text-lg shadow-sm">
                03
              </div>
              <h3 className="text-base sm:text-lg font-bold font-heading text-slate-900">
                {language === 'fr' ? 'Délivrance & Suivi Continu' : 'Delivery & Ongoing Advisory'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Remise en main propre de vos actes officiels certifiés (RCCM, NIU, attestation CNPS, cachets, etc.) et accompagnement permanent dans la vie de votre structure.'
                  : 'Hand-delivery of certified official records (RCCM, NIU, CNPS, corporate briefcase) and ongoing advisory support.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BOTTOM CTA BLOCK · Clear, Executive, High-Conversion
          ========================================================================= */}
      <section className="bg-slate-900 py-10 sm:py-16 text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-left">
              <span className="text-[10px] sm:text-[11px] font-bold tracking-[0.2em] sm:tracking-[0.25em] uppercase text-accent-300 block">
                {language === 'fr' ? 'ACCOMPAGNEMENT SUR MESURE' : 'TAILORED SUPPORT'}
              </span>

              <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-white">
                {language === 'fr'
                  ? 'Un besoin spécifique ou une formalité complexe ?'
                  : 'A Specific Requirement or Custom Procedure?'}
              </h2>

              <p className="text-slate-300 text-xs sm:text-base leading-relaxed">
                {language === 'fr'
                  ? 'Prenez contact avec notre équipe à Yaoundé. Nous analysons la faisabilité de votre projet, définissons les pièces à réunir et prenons en main votre démarche sans délai.'
                  : 'Reach out to our team in Yaoundé. We review your requirements, determine the prerequisites, and manage your procedure immediately.'}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
                <button
                  onClick={() => openAssistance('')}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3.5 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider text-slate-900 bg-jevelin-orange hover:bg-jevelin-orangeHover shadow-md transition text-center"
                >
                  {t.navbar.ctaAssistance}
                </button>

                <div className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-3 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-white/10 border border-white/20">
                  <PhoneCall className="w-4 h-4 mr-2 text-jevelin-orange flex-shrink-0" />
                  <div className="flex items-center space-x-2">
                    <a href="tel:+237673841821" className="hover:text-jevelin-orange transition">
                      +237 673 84 18 21
                    </a>
                    <span className="text-white/40">/</span>
                    <a href="tel:+237698668761" className="hover:text-jevelin-orange transition">
                      +237 698 66 87 61
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative mt-4 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group">
                <img
                  src="/asset/executive-portrait-sign.webp"
                  alt="Conseiller senior 3M Consulting au siège Yaoundé"
                  className="w-full h-52 sm:h-72 lg:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3 sm:p-4">
                  <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.15em] sm:tracking-[0.2em] uppercase text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                    CONSEIL DÉDIÉ · YAOUNDÉ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Request Assistance Modal */}
      <RequestAssistanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={activeService}
      />
    </div>
  );
};
