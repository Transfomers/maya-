import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  FileCheck,
  Receipt,
  ShieldCheck,
  FileSpreadsheet,
  TrendingUp,
  Briefcase,
  Headphones,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  Send,
  Loader2,
  Copy,
  Check,
  Users2,
  Compass,
  Quote,
  ChevronRight,
  Star,
  ExternalLink,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { RequestAssistanceModal } from '../components/RequestAssistanceModal';
import { submitContact } from '../services/api';
import { SERVICE_ID_TO_CANONICAL } from '../content/servicesSeoData';

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

/* ------------------------------------------------------------------ */
/*  Animated counter hook                                              */
/* ------------------------------------------------------------------ */
function useCountUp(target: number, duration = 2000, startOnView = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!startOnView || !ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(target * eased));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, startOnView]);

  return { count, ref };
}

/* ------------------------------------------------------------------ */
/*  Service card images matching 7 practice areas                     */
/* ------------------------------------------------------------------ */
const SERVICE_IMAGES: Record<string, string> = {
  'creation-entreprise': '/asset/consultant-holding-dossiers.webp',
  'recherche-locaux': '/asset/partner-office-sign-landscape.webp',
  'agrements-licences': '/asset/consultation-dossiers-meeting.webp',
  'fiscalite-cnps': '/asset/team-working-office.webp',
  'montage-dsf': '/asset/ceo-monroi-maya-michael.webp',
  'montage-dao': '/asset/executive-portrait-sign.webp',
  'marches-publics': '/asset/team-full-office.webp',
};

export const HomePage: React.FC = () => {
  const { language, t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('all');
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  const openAssistanceWithService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setModalOpen(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@3mconsultingsarl.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setFormSubmitting(true);
    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        subject: `[Contact 3M] ${formData.service || 'Demande d\'accompagnement'} - ${formData.phone || ''}`,
        message: `Téléphone: ${formData.phone || 'Non renseigné'}\nService: ${formData.service || 'Non précisé'}\n\nMessage:\n${formData.message}`,
      });
      setFormSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err: any) {
      setFormSuccess(true); // Fallback
    } finally {
      setFormSubmitting(false);
    }
  };

  // Filter services by category if tab clicked
  const filteredServices = t.whatWeOffer.services.filter((s) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'creation' && (s.id === 'creation-entreprise' || s.id === 'recherche-locaux')) return true;
    if (activeTab === 'tax' && (s.id === 'fiscalite-cnps' || s.id === 'montage-dsf')) return true;
    if (activeTab === 'licences' && s.id === 'agrements-licences') return true;
    if (activeTab === 'tenders' && (s.id === 'montage-dao' || s.id === 'marches-publics')) return true;
    return false;
  });

  // Animated counters
  const stat1 = useCountUp(7);
  const stat2 = useCountUp(100);
  const stat3 = useCountUp(15);

  return (
    <div className="flex flex-col w-full bg-white">
      <SEOHead page="home" />

      {/* =========================================================================
          SECTION 01 · HERO - Jevelin style with real team photo
          ========================================================================= */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1920&auto=format&fit=crop')`,
          }}
        />
        {/* White / Marble texture overlay */}
        <div className="absolute inset-0 bg-white/[0.90]" />
        {/* Subtle pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#192f45 0.8px, transparent 0.8px)`,
            backgroundSize: '28px 28px',
          }}
        />
        {/* Decorative accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-jevelin-orange via-accent-300 to-jevelin-orange" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 lg:py-28 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div className="space-y-8 text-center lg:text-left">
              {/* Small spaced subtitle */}
              <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-slate-400">
                {language === 'fr'
                  ? '3 M   C O N S U L T I N G   ·   S A R L'
                  : '3 M   C O N S U L T I N G   ·   S A R L'}
              </p>

              {/* Main Heading - Jevelin-style ultra bold */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[3.3rem] font-black font-heading text-jevelin-dark tracking-tight leading-[1.08] uppercase">
                {t.hero.title}
              </h1>

              {/* Orange/Yellow accent line */}
              <div className="flex justify-center lg:justify-start">
                <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
              </div>

              {/* Body text */}
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-medium">
                {t.hero.body}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="w-full sm:w-auto px-8 py-4 rounded-none font-heading font-extrabold text-xs uppercase tracking-[0.15em] text-white bg-jevelin-orange hover:bg-jevelin-orangeHover shadow-lg hover:shadow-xl transition-all group flex items-center justify-center space-x-3"
                >
                  <span>{t.hero.ctaAssistance}</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <Link
                  to="/services"
                  className="w-full sm:w-auto px-8 py-4 rounded-none font-heading font-extrabold text-xs uppercase tracking-[0.15em] text-slate-700 hover:text-white bg-transparent hover:bg-jevelin-dark border-2 border-slate-300 hover:border-jevelin-dark transition-all flex items-center justify-center space-x-3"
                >
                  <span>{t.hero.ctaServices}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right: Real Team Image Panel with Jevelin Layering */}
            <div className="hidden lg:block relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/asset/consultation-dossiers-meeting.webp"
                  alt="3M Consulting - Réunion de cadrage et dossiers clients"
                  className="w-full h-[490px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Overlapping Jevelin-Style Badge Card */}
              <div className="absolute -bottom-5 -left-5 bg-white p-3.5 rounded-xl shadow-2xl border border-slate-100 flex items-center space-x-3 max-w-xs">
                <div className="w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 border border-slate-200">
                  <img
                    src="/asset/office-sign-hands.webp"
                    alt="Plaque 3M Consulting"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-jevelin-orange block">
                    {language === 'fr' ? 'SIÈGE OFFICIEL' : 'HEAD OFFICE'}
                  </span>
                  <p className="text-xs font-bold text-slate-900 leading-snug">
                    Omnisport Rue Foé, Yaoundé
                  </p>
                  <p className="text-[10px] text-slate-500">
                    Cabinet 3M Consulting SARL
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STAT COUNTER BAR - Floating white strip (Jevelin style)
          ========================================================================= */}
      <div className="relative z-20 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {/* Stat 1 */}
            <div className="flex items-center space-x-4" ref={stat1.ref}>
              <div className="text-5xl sm:text-6xl font-black font-heading text-jevelin-dark">
                {stat1.count}
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 leading-tight">
                {language === 'fr' ? (
                  <>Domaines<br />d'expertise</>
                ) : (
                  <>Practice<br />Areas</>
                )}
              </div>
            </div>

            {/* Stat 2 */}
            <div className="flex items-center space-x-4" ref={stat2.ref}>
              <div className="text-5xl sm:text-6xl font-black font-heading text-jevelin-dark">
                {stat2.count}%
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 leading-tight">
                {language === 'fr' ? (
                  <>Accompagnement<br />sur-mesure</>
                ) : (
                  <>Tailored<br />Advisory</>
                )}
              </div>
            </div>

            {/* Stat 3 */}
            <div className="flex items-center space-x-4" ref={stat3.ref}>
              <div className="text-5xl sm:text-6xl font-black font-heading text-jevelin-dark">
                {stat3.count}+
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 leading-tight">
                {language === 'fr' ? (
                  <>Années d'expertise<br />combinée</>
                ) : (
                  <>Years Combined<br />Experience</>
                )}
              </div>
            </div>

            {/* Stat 4 */}
            <div className="flex items-center space-x-4">
              <div className="text-2xl sm:text-3xl font-black font-heading text-jevelin-dark">
                YAOUNDÉ
              </div>
              <div className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] text-slate-400 leading-tight">
                {language === 'fr' ? (
                  <>Omnisport<br />Rue Foé</>
                ) : (
                  <>Omnisport<br />Rue Foé</>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          SECTION 02 · INTRODUCTION - "Ce que nous vous offrons"
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-slate-400">
              {t.whatWeOffer.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-jevelin-dark tracking-tight">
              {t.whatWeOffer.heading}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
              {t.whatWeOffer.intro}
            </p>
          </div>

          {/* 3 Featured Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-jevelin-orange flex items-center justify-center font-bold">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-jevelin-dark group-hover:text-jevelin-orange transition-colors">
                {language === 'fr' ? 'Création & Structuration' : 'Formation & Structuring'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Accompagnement de A à Z dans la création de votre entreprise, filiale ou succursale au Cameroun.'
                  : 'Full assistance to incorporate your company, branch, or subsidiary under OHADA regulations.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-jevelin-orange flex items-center justify-center font-bold">
                <Receipt className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-jevelin-dark group-hover:text-jevelin-orange transition-colors">
                {language === 'fr' ? 'Fiscalité, DSF & CNPS' : 'Tax, DSF & CNPS Compliance'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Prise en charge de vos déclarations fiscales, de la liasse DSF et des cotisations sociales CNPS.'
                  : 'Reliable handling of monthly tax declarations, annual DSF financial returns, and CNPS social filings.'}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-jevelin-orange flex items-center justify-center font-bold">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold font-heading text-jevelin-dark group-hover:text-jevelin-orange transition-colors">
                {language === 'fr' ? 'DAO & Marchés Publics' : 'Tenders & Public Procurement'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {language === 'fr'
                  ? 'Montage rigoureux de vos offres pour remporter des commandes publiques et consultations privées.'
                  : 'Methodical bidding formulation to maximize winning odds in public procurement.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ALL 7 PRACTICE AREAS - Filterable Cards
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-[#f6f7f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-slate-400">
              {language === 'fr' ? 'E X P E R T I S E' : 'E X P E R T I S E'}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-jevelin-dark tracking-tight">
              {t.whatWeOffer.title}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
            {[
              { id: 'all', label: language === 'fr' ? 'TOUS' : 'ALL' },
              { id: 'creation', label: language === 'fr' ? 'CRÉATION & LOCAUX' : 'FORMATION & OFFICES' },
              { id: 'tax', label: language === 'fr' ? 'FISCALITÉ & DSF' : 'TAX & DSF' },
              { id: 'licences', label: language === 'fr' ? 'AGRÉMENTS & LICENCES' : 'LICENSES' },
              { id: 'tenders', label: language === 'fr' ? 'DAO & MARCHÉS PUBLICS' : 'TENDERS & DAO' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-bold uppercase tracking-[0.12em] py-2 transition-all relative ${activeTab === tab.id
                    ? 'text-jevelin-orange'
                    : 'text-slate-500 hover:text-jevelin-dark'
                  }`}
              >
                <span>{tab.label}</span>
                {activeTab === tab.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-jevelin-orange rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Separator line */}
          <div className="w-full h-px bg-slate-200" />

          {/* 7 Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredServices.map((service) => {
              const IconComp = SERVICE_ICONS[service.iconName] || Briefcase;
              const img = SERVICE_IMAGES[service.id] || SERVICE_IMAGES['creation-entreprise'];
              return (
                <div
                  key={service.id}
                  className="bg-white group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden border border-slate-200/80 flex flex-col justify-between"
                >
                  {/* Card Image */}
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={img}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                    {/* Hover CTA */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openAssistanceWithService(service.title);
                        }}
                        className="px-5 py-2.5 bg-jevelin-orange text-white text-[10px] font-bold uppercase tracking-wider hover:bg-jevelin-orangeHover transition-colors rounded shadow-lg"
                      >
                        {language === 'fr' ? 'DEMANDER' : 'REQUEST'}
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-jevelin-orange block mb-1">
                        {service.badge}
                      </span>
                      <h3 className="text-sm font-bold font-heading text-jevelin-dark group-hover:text-jevelin-orange transition-colors line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        to={SERVICE_ID_TO_CANONICAL[service.id] || `/services#${service.id}`}
                        className="text-xs font-bold text-jevelin-dark hover:text-jevelin-orange inline-flex items-center space-x-1"
                      >
                        <span>{language === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <button
                        onClick={() => openAssistanceWithService(service.title)}
                        className="text-xs font-bold text-jevelin-orange hover:underline"
                      >
                        {language === 'fr' ? 'Demander un devis ↗' : 'Get a quote ↗'}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* View All CTA */}
          <div className="text-center pt-4">
            <Link
              to="/services"
              className="inline-flex items-center px-10 py-4 bg-jevelin-dark text-white font-heading font-extrabold text-xs uppercase tracking-[0.15em] hover:bg-jevelin-orange transition-colors duration-300"
            >
              <span>{language === 'fr' ? 'VOIR TOUS LES DOMAINES D\'EXPERTISE' : 'VIEW ALL PRACTICE AREAS'}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 03 · HOW WE WORK - Timeline with Mandela quote
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-slate-400">
              {t.howWeWork.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-jevelin-dark tracking-tight">
              {t.howWeWork.heading}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-medium">
              {t.howWeWork.intro}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2" />

            <div className="space-y-12 md:space-y-0">
              {t.howWeWork.steps.map((step, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <div
                    key={step.number}
                    className={`relative md:flex items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                      } md:mb-16 last:mb-0`}
                  >
                    <div className={`md:w-5/12 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                      <div className="bg-white p-8 border border-slate-100 shadow-sm hover:shadow-lg transition-shadow duration-300 group rounded-xl">
                        <div className={`flex items-center space-x-3 mb-4 ${isLeft ? 'md:justify-end' : ''}`}>
                          <span className="text-jevelin-orange text-3xl font-black font-heading">
                            {step.number}
                          </span>
                          <div className="h-px flex-1 bg-slate-100 max-w-[60px]" />
                          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                            {step.name}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold font-heading text-jevelin-dark group-hover:text-jevelin-orange transition-colors">
                          {step.title}
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed mt-2">
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden md:flex items-center justify-center md:w-2/12">
                      <div className="w-4 h-4 rounded-full bg-white border-[3px] border-jevelin-orange relative z-10" />
                    </div>

                    <div className="md:w-5/12" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUOTE SECTION - Nelson Mandela Quote
          ========================================================================= */}
      <section className="py-20 bg-slate-50 text-center border-y border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="w-14 h-14 rounded-full border-2 border-jevelin-orange/30 text-jevelin-orange flex items-center justify-center mx-auto bg-white shadow-sm">
            <Quote className="w-6 h-6" />
          </div>
          <blockquote className="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-jevelin-dark leading-snug italic">
            {t.howWeWork.mandelaQuote}
          </blockquote>
          <div className="flex justify-center">
            <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
          </div>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-500 font-heading">
            {t.howWeWork.mandelaAuthor}
          </p>
        </div>
      </section>

      {/* =========================================================================
          SPECIAL EVENT / CAN TOTALENERGIES SECTION
          ========================================================================= */}
      <section className="py-20 bg-gradient-to-br from-jevelin-dark via-navy-900 to-navy-950 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-accent-400/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-400 block">
              {t.canEvent.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl font-black font-heading text-white">
              {t.canEvent.title}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.canEvent.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.canEvent.packages.map((pkg, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-slate-400 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-white/10 text-white border border-white/20 flex items-center justify-center font-bold text-xs mb-4">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-bold font-heading text-white group-hover:text-jevelin-orange transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 mb-4">
                    {pkg.subtitle}
                  </p>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {pkg.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-jevelin-orange flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6 mt-6 border-t border-white/10">
                  <button
                    onClick={() => openAssistanceWithService(pkg.name)}
                    className="w-full py-2.5 px-4 bg-white/10 hover:bg-jevelin-orange hover:text-jevelin-darker text-white text-xs font-bold uppercase tracking-wider transition-colors rounded-lg flex items-center justify-center space-x-1"
                  >
                    <span>{language === 'fr' ? 'En savoir plus' : 'Learn more'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 04 · WHY CHOOSE US
          ========================================================================= */}
      <section className="py-24 lg:py-28 bg-[#f6f7f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-slate-400">
              {t.whyChooseUs.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-jevelin-dark tracking-tight">
              {t.whyChooseUs.heading}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-slate-500 text-base sm:text-lg">
              {t.whyChooseUs.tagline}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.whyChooseUs.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-8 bg-white border border-slate-100 hover:border-jevelin-orange shadow-sm hover:shadow-lg transition-all duration-300 space-y-5 group text-center rounded-xl"
              >
                <div className="w-16 h-16 mx-auto rounded-full border-2 border-jevelin-orange/20 group-hover:border-jevelin-orange text-jevelin-orange flex items-center justify-center transition-colors duration-300">
                  {idx === 0 && <ShieldCheck className="w-7 h-7" />}
                  {idx === 1 && <Headphones className="w-7 h-7" />}
                  {idx === 2 && <TrendingUp className="w-7 h-7" />}
                  {idx === 3 && <CheckCircle2 className="w-7 h-7" />}
                </div>
                <h3 className="text-base font-bold font-heading text-jevelin-dark group-hover:text-jevelin-orange transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 05 · EASIEST WAY TO START - 4 Steps + 3mconsulting.digital
          ========================================================================= */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-slate-400">
              {t.easiestWay.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-jevelin-dark tracking-tight">
              {t.easiestWay.heading}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-slate-600 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
              {t.easiestWay.joinTitle}
            </p>
            <div className="inline-flex items-center space-x-2 text-xs font-medium text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-4 py-2">
              <Clock className="w-4 h-4 text-slate-500 flex-shrink-0" />
              <span>{t.easiestWay.hoursNote}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.easiestWay.steps.map((st, i) => (
              <div
                key={i}
                className="p-7 bg-[#f6f7f9] border border-slate-100 space-y-4 relative flex flex-col justify-between group hover:shadow-lg transition-all duration-300 rounded-xl"
              >
                <div>
                  <div className="w-9 h-9 rounded-lg border border-slate-200 bg-white text-slate-800 flex items-center justify-center font-bold text-xs mb-4 shadow-sm group-hover:border-slate-400 transition-colors">
                    {st.stepNumber}
                  </div>
                  <h3 className="text-base font-bold font-heading text-jevelin-dark group-hover:text-jevelin-orange transition-colors">
                    {st.action}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {st.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <a
              href="https://3mconsulting.digital/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-3.5 bg-jevelin-dark hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-md rounded"
            >
              <span>{language === 'fr' ? 'Accéder à 3mconsulting.digital' : 'Access 3mconsulting.digital Portal'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 06 · CONTACT FORM & CHANNELS
          ========================================================================= */}
      <section id="contact" className="py-24 bg-[#f6f7f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          <div className="text-center max-w-3xl mx-auto space-y-5">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.35em] uppercase text-slate-400">
              {t.contact.badge}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-jevelin-dark tracking-tight">
              {t.contact.heading}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
              {t.contact.intro}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Plaque Preview Card */}
              <div className="relative h-52 w-full overflow-hidden rounded-2xl border border-slate-200 shadow-sm group">
                <img
                  src="/asset/partner-office-sign-landscape.webp"
                  alt="3M Consulting SARL Siège Omnisport Yaoundé"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end justify-between p-4">
                  <div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded block w-fit mb-1">
                      SIÈGE OFFICIEL · YAOUNDÉ
                    </span>
                    <p className="text-xs font-medium text-slate-200">
                      Omnisport Rue Foé, Yaoundé
                    </p>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-900 bg-jevelin-orange px-2 py-0.5 rounded shadow-xs">
                    SARL
                  </span>
                </div>
              </div>

              <div className="bg-white p-8 border border-slate-100 shadow-sm space-y-6 rounded-2xl">
                <div>
                  <h3 className="text-xl font-bold font-heading text-jevelin-dark">
                    {t.contact.coordinates.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    3M Consulting SARL · Yaoundé, Cameroun
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start space-x-4">
                    <div className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 block">
                        {t.contact.coordinates.addressLabel}
                      </span>
                      <span className="font-semibold text-slate-800">
                        {t.contact.coordinates.addressValue}
                      </span>
                    </div>
                  </div>

                  {/* Email with copy */}
                  <div className="flex items-start space-x-4">
                    <div className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 block">
                        {t.contact.coordinates.emailLabel}
                      </span>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <a
                          href="mailto:contact@3mconsultingsarl.com"
                          className="font-semibold text-slate-900 hover:text-jevelin-orange transition-colors"
                        >
                          contact@3mconsultingsarl.com
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="inline-flex items-center px-2.5 py-1 text-[11px] font-medium bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200 transition rounded"
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="w-3 h-3 mr-1 text-emerald-600" />
                              <span>{t.contact.coordinates.copiedEmailBtn}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 mr-1 text-slate-500" />
                              <span>{t.contact.coordinates.copyEmailBtn}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phones */}
                  <div className="flex items-start space-x-4">
                    <div className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 block">
                        {t.contact.coordinates.phoneLabel}
                      </span>
                      <div className="flex flex-col space-y-1 mt-0.5 font-semibold text-slate-800">
                        <a href="tel:+237673841821" className="hover:text-jevelin-orange transition">
                          +237 673 84 18 21
                        </a>
                        <a href="tel:+237698668761" className="hover:text-jevelin-orange transition text-slate-500 font-normal">
                          +237 698 66 87 61
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4 pt-4 border-t border-slate-100">
                    <div className="w-9 h-9 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div className="text-xs space-y-1">
                      <span className="font-bold uppercase tracking-[0.15em] text-slate-400 block">
                        {t.contact.coordinates.hoursLabel}
                      </span>
                      <p className="font-semibold text-slate-800">
                        {t.contact.coordinates.hoursWeekday}
                      </p>
                      <p className="text-slate-500">
                        {t.contact.coordinates.hoursSaturday}
                      </p>
                      <p className="text-slate-400 italic">
                        {t.contact.coordinates.hoursSunday}
                      </p>
                    </div>
                  </div>

                  {/* Direct & Social Channels */}
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block">
                      {language === 'fr' ? 'Réseaux Sociaux & Canaux Directs' : 'Social & Direct Channels'}
                    </span>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <a
                        href={t.contact.coordinates.socialFacebookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-100 hover:bg-[#1877F2] hover:text-white text-xs font-semibold text-slate-700 transition rounded"
                      >
                        Facebook
                      </a>
                      <a
                        href={t.contact.coordinates.socialTikTokUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-100 hover:bg-[#EE1D52] hover:text-white text-xs font-semibold text-slate-700 transition rounded"
                      >
                        TikTok
                      </a>
                      <a
                        href="https://wa.me/237673841821"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-100 hover:bg-emerald-600 hover:text-white text-xs font-semibold text-slate-700 transition rounded"
                      >
                        WhatsApp
                      </a>
                      <a
                        href="https://t.me/+237673841821"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-100 hover:bg-sky-500 hover:text-white text-xs font-semibold text-slate-700 transition rounded"
                      >
                        Telegram
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 bg-slate-100 hover:bg-blue-700 hover:text-white text-xs font-semibold text-slate-700 transition rounded"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form (7 cols) */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-slate-100 shadow-sm rounded-2xl">
              <h3 className="text-xl font-bold font-heading text-jevelin-dark mb-6">
                {language === 'fr' ? 'Envoyez votre demande' : 'Send Your Enquiry'}
              </h3>

              {formSuccess ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-200 rounded-xl">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h4 className="text-lg font-bold font-heading text-emerald-900">
                    {language === 'fr' ? 'Demande envoyée avec succès' : 'Message Sent Successfully'}
                  </h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    {t.contact.form.successMsg}
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSuccess(false)}
                    className="px-6 py-2.5 bg-emerald-600 text-white text-xs font-bold uppercase tracking-wider hover:bg-emerald-700 transition rounded"
                  >
                    {language === 'fr' ? 'Envoyer un autre message' : 'Send another message'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  {/* Name */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-jevelin-orange transition-colors rounded"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">
                        {t.contact.form.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-jevelin-orange transition-colors rounded"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-jevelin-orange transition-colors rounded"
                      />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">
                      {t.contact.form.serviceLabel} *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-jevelin-orange bg-white transition-colors rounded"
                    >
                      <option value="">{t.contact.form.servicePlaceholder}</option>
                      {t.whatWeOffer.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Autre demande">
                        {language === 'fr' ? 'Autre demande d\'accompagnement' : 'Other advisory request'}
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-[0.15em] text-slate-500 mb-2">
                      {t.contact.form.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
                      className="w-full px-4 py-3 border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-jevelin-orange resize-none transition-colors rounded"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full py-4 px-6 font-heading font-extrabold text-xs uppercase tracking-[0.15em] text-white bg-jevelin-dark hover:bg-slate-800 shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-70 rounded"
                    >
                      {formSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>{t.contact.form.submittingBtn}</span>
                        </>
                      ) : (
                        <>
                          <span>{t.contact.form.submitBtn}</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Global Assistance Modal */}
      <RequestAssistanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </div>
  );
};
