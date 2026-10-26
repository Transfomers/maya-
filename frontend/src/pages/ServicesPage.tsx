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
  Sparkles,
  FileText,
  Clock,
  PhoneCall,
  HelpCircle,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { RequestAssistanceModal } from '../components/RequestAssistanceModal';

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

export const ServicesPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [activeService, setActiveService] = useState<string>('');
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

  return (
    <div className="flex flex-col w-full">
      <SEOHead page="services" />

      {/* Header Banner */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500 font-heading block">
            {t.navbar.services}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight max-w-4xl mx-auto uppercase">
            {language === 'fr'
              ? 'Domaines d’Expertise & Solutions d’Affaires'
              : 'Practice Areas & Corporate Solutions'}
          </h1>

          <div className="flex justify-center">
            <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
          </div>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.whatWeOffer.intro}
          </p>

          {/* Commercial Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1 text-xs font-semibold text-slate-700">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200">
              ✓ {language === 'fr' ? 'Création d’entreprise en 72h' : '72h Fast Incorporation'}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200">
              ✓ {language === 'fr' ? '100% Conforme OHADA & DGI' : '100% OHADA & Tax Compliant'}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 border border-slate-200">
              ✓ {language === 'fr' ? 'Bureau Omnisport Rue Foé, Yaoundé' : 'Headquarters in Yaoundé'}
            </span>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => openAssistance('')}
              className="inline-flex items-center px-8 py-3.5 font-heading font-extrabold text-xs uppercase tracking-[0.15em] text-white bg-jevelin-dark hover:bg-slate-800 shadow-sm transition group"
            >
              <span>{t.navbar.ctaAssistance}</span>
            </button>
            <a
              href="tel:+237673841821"
              className="inline-flex items-center px-6 py-3.5 font-heading font-extrabold text-xs uppercase tracking-[0.15em] text-slate-800 bg-white hover:bg-slate-50 border border-slate-300 transition"
            >
              <PhoneCall className="w-4 h-4 mr-2 text-slate-600" />
              <span>+237 673 84 18 21</span>
            </a>
          </div>
        </div>
      </section>

      {/* 7 Practice Areas Full In-Depth List */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {t.whatWeOffer.services.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.iconName] || Briefcase;
            const isEven = index % 2 === 1;

            return (
              <div
                key={service.id}
                id={service.id}
                className="scroll-mt-28 bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-slate-200 shadow-xs hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  {/* Left Column: Title & Overview */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'lg:order-2' : ''}`}>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-2xl bg-accent-50 text-jevelin-orange flex items-center justify-center font-bold">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-jevelin-dark">
                      {service.title}
                    </h2>

                    <p className="text-base text-slate-700 font-medium leading-relaxed">
                      {service.summary}
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        type="button"
                        onClick={() => openAssistance(service.title)}
                        className="inline-flex items-center px-6 py-3.5 rounded-md font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-jevelin-dark hover:bg-slate-800 shadow-sm hover:shadow transition group"
                      >
                        <span>
                          {language === 'fr'
                            ? `Obtenir un accompagnement`
                            : `Request Support`}
                        </span>
                        <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </button>

                      <Link
                        to={SERVICE_ID_TO_CANONICAL[service.id] || `/services#${service.id}`}
                        className="inline-flex items-center px-5 py-3.5 rounded-md font-heading font-bold text-xs uppercase tracking-wider text-slate-700 hover:text-jevelin-orange bg-slate-100 hover:bg-slate-200 border border-slate-200 transition group"
                      >
                        <span>
                          {language === 'fr' ? 'Consulter la page détaillée & FAQ' : 'View Full Details & FAQs'}
                        </span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-jevelin-orange" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column: Deliverables & Prerequisites Card */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : ''}`}>
                    <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200/90 space-y-6">
                      {/* Media Card */}
                      <div className="relative h-44 sm:h-48 w-full overflow-hidden rounded-xl border border-slate-200/90 shadow-xs group">
                        <img
                          src={SERVICE_IMAGES[service.id] || '/asset/consultant-holding-dossiers.webp'}
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end justify-between p-3.5">
                          <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                            3M CONSULTING · YAOUNDÉ
                          </span>
                          <span className="text-[10px] font-bold tracking-wider uppercase text-white bg-jevelin-orange px-2 py-0.5 rounded shadow-xs">
                            {language === 'fr' ? 'EXPERTISE' : 'EXPERTISE'}
                          </span>
                        </div>
                      </div>

                      {/* Deliverables */}
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
                          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-brand-600" />
                          <span>
                            {language === 'fr' ? 'Ce que nous prenons en charge' : 'Key Deliverables'}
                          </span>
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                          {service.deliverables.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-600 mt-2 mr-2 flex-shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Required Documents / Prerequisites */}
                      <div className="space-y-3 pt-4 border-t border-slate-200">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
                          <FileText className="w-3.5 h-3.5 mr-1.5 text-accent-600" />
                          <span>
                            {language === 'fr' ? 'Éléments à prévoir' : 'Prerequisites & Documents'}
                          </span>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-slate-600">
                          {service.documentsRequired.map((doc, idx) => (
                            <li key={idx} className="flex items-center">
                              <span className="w-1 h-1 rounded-full bg-slate-400 mr-2" />
                              <span>{doc}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA Block with Authentic Photo */}
      <section className="bg-gradient-to-r from-jevelin-dark via-slate-900 to-navy-950 py-16 text-white border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5 text-left">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-accent-300 block">
                {language === 'fr' ? 'ACCOMPAGNEMENT SUR MESURE' : 'TAILORED SUPPORT'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white">
                {language === 'fr'
                  ? 'Un besoin spécifique ou une formalité complexe ?'
                  : 'A Specific Requirement or Custom Procedure?'}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {language === 'fr'
                  ? 'Prenez contact avec notre équipe à Yaoundé. Nous analysons la faisabilité de votre projet, définissons les pièces à réunir et prenons en main votre démarche sans délai.'
                  : 'Reach out to our team in Yaoundé. We review your requirements, determine the prerequisites, and manage your procedure immediately.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => openAssistance('')}
                  className="px-8 py-3.5 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-jevelin-orange hover:bg-jevelin-orangeHover shadow-md transition"
                >
                  {t.navbar.ctaAssistance}
                </button>
                <a
                  href="tel:+237673841821"
                  className="inline-flex items-center px-6 py-3.5 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition"
                >
                  <PhoneCall className="w-4 h-4 mr-2 text-jevelin-orange" />
                  <span>+237 673 84 18 21</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl group">
                <img
                  src="/asset/executive-portrait-sign.webp"
                  alt="Conseiller senior 3M Consulting au siège Yaoundé"
                  className="w-full h-64 sm:h-80 object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded">
                    CONSEIL DÉDIÉ · YAOUNDÉ
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Modal */}
      <RequestAssistanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={activeService}
      />
    </div>
  );
};
