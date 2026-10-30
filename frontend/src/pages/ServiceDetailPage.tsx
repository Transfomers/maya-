import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  Building2,
  MapPin,
  ShieldCheck,
  Receipt,
  FileSpreadsheet,
  FileCheck,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  FileText,
  Clock,
  Briefcase,
  Search,
  Check,
  Shield,
  Award,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { RequestAssistanceModal } from '../components/RequestAssistanceModal';
import { CompanyCreationCatalogue } from '../components/CompanyCreationCatalogue';
import { SERVICES_SEO_DATA, getServiceBySlug, ServiceDetailItem } from '../content/servicesSeoData';

const SERVICE_ICONS: Record<string, React.ElementType> = {
  Building2,
  MapPin,
  ShieldCheck,
  Receipt,
  FileSpreadsheet,
  FileCheck,
  TrendingUp,
};

interface ServiceDetailPageProps {
  forcedSlug?: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ forcedSlug }) => {
  const { slug } = useParams<{ slug?: string }>();
  const activeSlug = forcedSlug || slug || '';
  const { language } = useLanguage();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [assistanceService, setAssistanceService] = useState<string>('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const service = getServiceBySlug(activeSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSlug]);

  if (!service) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">
          {language === 'fr' ? 'Service non trouvé' : 'Service Not Found'}
        </h1>
        <p className="text-slate-600 mb-8 max-w-md">
          {language === 'fr'
            ? "La page de service demandée n'existe pas ou a été déplacée."
            : 'The requested service page does not exist or has been moved.'}
        </p>
        <Link
          to="/services"
          className="inline-flex items-center px-6 py-3 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-jevelin-dark hover:bg-slate-800 transition"
        >
          {language === 'fr' ? 'Voir tous nos services' : 'View All Services'}
        </Link>
      </div>
    );
  }

  const content = language === 'fr' ? service.fr : service.en;
  const IconComp = SERVICE_ICONS[service.iconName] || Briefcase;

  // Build JSON-LD FAQPage & Service schema
  const faqSchema = {
    '@type': 'FAQPage',
    mainEntity: content.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const serviceSchema = {
    '@type': 'Service',
    '@id': `https://3mconsultingsarl.com${service.canonicalPath}#service`,
    name: content.h1,
    serviceType: content.primaryKeyword,
    category: service.category,
    description: content.metaDescription,
    provider: {
      '@type': 'ProfessionalService',
      name: '3M Consulting SARL',
      telephone: '+237673841821',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Omnisport Rue Foé',
        addressLocality: 'Yaoundé',
        addressCountry: 'CM',
      },
    },
    areaServed: [
      { '@type': 'City', name: 'Yaoundé' },
      { '@type': 'City', name: 'Douala' },
      { '@type': 'Country', name: 'Cameroon' },
    ],
  };

  const relatedServices = SERVICES_SEO_DATA.filter((s) => s.id !== service.id).slice(0, 3);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Dynamic SEO Head with canonical, keywords, and rich FAQ/Service schema */}
      <SEOHead
        page="service-detail"
        customTitle={content.seoTitle}
        customDescription={content.metaDescription}
        customKeywords={content.keywords.join(', ')}
        customCanonical={`https://3mconsultingsarl.com${service.canonicalPath}`}
        breadcrumbName={content.primaryKeyword}
        extraSchema={[serviceSchema, faqSchema]}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-12 pb-20 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumb"
            className="flex items-center space-x-2 text-xs font-semibold text-slate-400"
          >
            <Link to="/" className="hover:text-white transition">
              {language === 'fr' ? 'Accueil' : 'Home'}
            </Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white transition">
              {language === 'fr' ? 'Domaines & Services' : 'Services'}
            </Link>
            <span>/</span>
            <span className="text-accent-400 truncate max-w-xs sm:max-w-md">
              {content.primaryKeyword}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center pt-4">
            <div className="lg:col-span-8 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-jevelin-orange animate-pulse" />
                <span className="text-xs font-extrabold tracking-wider uppercase text-accent-300">
                  {content.badge}
                </span>
                <span className="text-slate-400">·</span>
                <span className="text-[11px] font-semibold text-slate-300">
                  {language === 'fr' ? 'Yaoundé & Douala, Cameroun' : 'Yaoundé & Douala, Cameroon'}
                </span>
              </div>

              {/* H1 Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-white tracking-tight leading-tight">
                {content.h1}
              </h1>

              {/* Subheading / Lead */}
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl">
                {content.leadParagraph}
              </p>

              {/* Trust Pills */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-xs font-bold text-slate-200">
                <div className="flex items-center px-3 py-1.5 rounded-md bg-accent-500/20 border border-accent-400/40 text-accent-300">
                  <Sparkles className="w-3.5 h-3.5 mr-2 text-jevelin-orange" />
                  <span>{language === 'fr' ? 'Entretien Diagnostic & Cadrage Inclus' : 'Intake Diagnostic Interview Included'}</span>
                </div>
                <div className="flex items-center px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                  <Shield className="w-3.5 h-3.5 mr-2 text-accent-400" />
                  <span>{language === 'fr' ? 'Conforme OHADA & DGI' : 'OHADA & Tax Compliant'}</span>
                </div>
                <div className="flex items-center px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                  <Clock className="w-3.5 h-3.5 mr-2 text-accent-400" />
                  <span>{language === 'fr' ? 'Traitement Rapide 72h' : 'Rapid Processing 72h'}</span>
                </div>
                <div className="flex items-center px-3 py-1.5 rounded-md bg-white/5 border border-white/10">
                  <MapPin className="w-3.5 h-3.5 mr-2 text-accent-400" />
                  <span>Omnisport Rue Foé, Yaoundé</span>
                </div>
              </div>

              {/* Conversion Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setAssistanceService(
                      language === 'fr'
                        ? `Entretien Diagnostic & Accompagnement : ${content.h1}`
                        : `Diagnostic Interview & Assistance: ${content.h1}`
                    );
                    setModalOpen(true);
                  }}
                  className="inline-flex items-center px-7 py-3.5 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-jevelin-orange hover:bg-jevelin-orangeHover shadow-lg hover:shadow-xl transition transform active:scale-95"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  <span>{language === 'fr' ? 'Réserver un Entretien Diagnostic' : 'Book a Diagnostic Interview'}</span>
                </button>

                {service.id === 'creation-entreprise' && (
                  <a
                    href="#catalogue-officiel"
                    className="inline-flex items-center px-6 py-3.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider text-accent-300 bg-white/10 hover:bg-white/20 border border-white/20 transition group"
                  >
                    <FileText className="w-4 h-4 mr-2 text-jevelin-orange group-hover:scale-110 transition-transform" />
                    <span>{language === 'fr' ? 'Catalogue Officiel · @MAYA MICHAEL' : 'Official Catalogue · @MAYA MICHAEL'}</span>
                  </a>
                )}

                <a
                  href="https://wa.me/237673841821?text=Bonjour%203M%20Consulting,%20je%20souhaite%20un%20devis%20pour%20votre%20service."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3.5 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition"
                >
                  <PhoneCall className="w-4 h-4 mr-2" />
                  <span>{content.ctaSecondary}</span>
                </a>

                <a
                  href="tel:+237673841821"
                  className="inline-flex items-center px-5 py-3.5 rounded-lg font-heading font-bold text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition"
                >
                  <span>+237 673 84 18 21</span>
                </a>
              </div>
            </div>

            {/* Media Card */}
            <div className="lg:col-span-4 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/10 shadow-2xl bg-slate-800 group">
                <img
                  src={service.image}
                  alt={content.h1}
                  className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent-300">
                    3M CONSULTING · YAOUNDÉ
                  </span>
                  <p className="text-sm font-extrabold text-white mt-1">
                    {content.h2Overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Search Phrases Cloud (Natural SEO Intent Display) */}
      <section className="bg-slate-50 border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center">
              <Search className="w-3.5 h-3.5 mr-1.5 text-jevelin-orange" />
              <span>
                {language === 'fr'
                  ? 'Termes et requêtes fréquents traités par notre cabinet :'
                  : 'Common client search phrases addressed by our firm:'}
              </span>
            </span>
            <span className="text-[11px] font-semibold text-slate-500">
              {language === 'fr' ? 'Indexation Cameroun & CEMAC' : 'Cameroon & CEMAC Search Coverage'}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {content.keywords.map((kw, idx) => (
              <span
                key={idx}
                className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs hover:border-accent-300 hover:text-jevelin-orange transition cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-jevelin-orange mr-2" />
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Real Search Scenarios Section (High SEO Ranking Impact) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-jevelin-orange block font-heading">
              {language === 'fr' ? 'CAS PRATIQUES & REQUÊTES CLIENTS' : 'REAL USE CASES & QUERIES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              {content.h2Scenarios}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
            <p className="text-sm sm:text-base text-slate-600">
              {language === 'fr'
                ? 'Découvrez comment 3M Consulting résout concrètement les situations les plus fréquentes rencontrées par les porteurs de projets et entreprises au Cameroun.'
                : 'See how 3M Consulting delivers actionable solutions for common real-world challenges faced by corporate founders and businesses in Cameroon.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {content.searchScenarios.map((scenario, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-accent-100 text-jevelin-dark">
                      {scenario.intent}
                    </span>
                    <span className="text-[11px] font-medium text-slate-500 flex items-center">
                      <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                      {scenario.location}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 italic">
                    "{scenario.query}"
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {scenario.solution}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="inline-flex items-center text-xs font-bold text-jevelin-orange hover:text-jevelin-orangeHover transition"
                  >
                    <span>{content.ctaPrimary}</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Details: Deliverables & Prerequisites Section */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Detailed Overview & Deliverables */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-extrabold tracking-wider uppercase text-slate-500 font-heading block">
                  {language === 'fr' ? 'NOTRE EXPERTISE STRATÉGIQUE' : 'OUR STRATEGIC EXPERTISE'}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">
                  {content.h2Deliverables}
                </h2>
                {content.fullDescription.map((p, i) => (
                  <p key={i} className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>

              {/* Deliverables Checklist */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 flex items-center">
                  <CheckCircle2 className="w-4 h-4 mr-2 text-emerald-600" />
                  <span>
                    {language === 'fr' ? 'Livrables concrets remis à votre entreprise :' : 'Guaranteed deliverables included in our scope:'}
                  </span>
                </h3>
                <ul className="space-y-3">
                  {content.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-700">
                      <span className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xs mt-0.5 mr-3 flex-shrink-0">
                        ✓
                      </span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Required Documents / Prerequisites Box */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-2xs space-y-6">
                <div className="space-y-2">
                  <div className="w-10 h-10 rounded-xl bg-accent-50 text-jevelin-orange flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">
                    {language === 'fr' ? 'Pièces & Documents à Fournir' : 'Required Documents & Inputs'}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {language === 'fr'
                      ? 'Pour lancer votre démarche sans délai, voici les pièces essentielles requises :'
                      : 'To initiate your procedure without delay, prepare the following documents:'}
                  </p>
                </div>

                <ul className="space-y-3">
                  {content.documentsRequired.map((doc, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                      <span className="w-2 h-2 rounded-full bg-accent-500 mt-2 mr-3 flex-shrink-0" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                  <p className="text-xs font-semibold text-slate-700">
                    {language === 'fr'
                      ? "Vous n'avez pas encore réuni toutes ces pièces ?"
                      : 'Missing some of these documents?'}
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {language === 'fr'
                      ? "Pas d'inquiétude. Nos juristes vous aident à réunir et régulariser vos justificatifs manquants à Yaoundé."
                      : 'No worries. Our team assists you in assembling and authenticating missing paperwork in Yaoundé.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => setModalOpen(true)}
                    className="w-full py-2.5 px-4 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 transition text-center"
                  >
                    {content.ctaEstimate}
                  </button>
                </div>
              </div>

              {/* Direct Assistance Card */}
              <div className="bg-gradient-to-br from-jevelin-dark to-slate-900 rounded-2xl p-6 text-white space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-jevelin-orange flex items-center justify-center">
                    <PhoneCall className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold font-heading">
                      {language === 'fr' ? 'Besoin d’une réponse urgente ?' : 'Urgent Requirement?'}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {language === 'fr' ? 'Nos consultants vous répondent directement' : 'Our consultants are available right now'}
                    </p>
                  </div>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-400">Téléphone :</span>
                    <a href="tel:+237673841821" className="font-bold text-accent-300 hover:underline">
                      +237 673 84 18 21
                    </a>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/10">
                    <span className="text-slate-400">WhatsApp :</span>
                    <a
                      href="https://wa.me/237673841821"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-emerald-400 hover:underline"
                    >
                      +237 673 84 18 21
                    </a>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="text-slate-400">Siège :</span>
                    <span className="font-semibold text-slate-200">Omnisport Rue Foé, Yaoundé</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Official Prestations Catalogue for Business Formation (@MAYA MICHAEL) */}
      {service.id === 'creation-entreprise' && (
        <section id="catalogue-officiel" className="scroll-mt-20 py-16 lg:py-20 bg-slate-950 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <span className="text-xs font-extrabold tracking-[0.25em] uppercase text-jevelin-orange block font-heading">
                {language === 'fr' ? 'RÉFÉRENTIEL EXHAUSTIF DES PRESTATIONS' : 'COMPREHENSIVE SERVICE DIRECTORY'}
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold font-heading text-white tracking-tight">
                {language === 'fr'
                  ? 'Catalogue des Prestations – Création d’Entreprise'
                  : 'Service Catalogue – Business Incorporation & Setup'}
              </h2>
              <div className="flex justify-center">
                <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
              </div>
              <p className="text-xs sm:text-sm text-slate-300">
                {language === 'fr'
                  ? 'L’ensemble des 6 prestations clés clés en main et des prestations additionnelles de conseil, démarrage, implantation, vie sociale et restructuration.'
                  : 'All 6 turnkey core services plus strategic additional services for startup, expansion, governance, and restructuring.'}
              </p>
            </div>

            <CompanyCreationCatalogue
              onSelectService={(serviceTitle) => {
                setAssistanceService(serviceTitle);
                setModalOpen(true);
              }}
            />
          </div>
        </section>
      )}

      {/* Practical FAQ Accordion (Matches Google Rich Snippets) */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold tracking-[0.2em] uppercase text-jevelin-orange block font-heading">
              FAQ & CONFORMITÉ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900 tracking-tight">
              {content.h2Faq}
            </h2>
            <div className="flex justify-center">
              <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
            </div>
          </div>

          <div className="space-y-3">
            {content.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-xl border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition"
                  >
                    <span className="text-sm sm:text-base font-bold text-slate-900 pr-4">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-jevelin-orange' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cross-linking to Other Services (Internal SEO Link Building) */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 font-heading">
                {language === 'fr' ? 'POURSUIVRE VOTRE NAVIGATION' : 'EXPLORE MORE SERVICES'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black font-heading text-slate-900">
                {language === 'fr' ? 'Autres solutions d’affaires complémentaires' : 'Complementary Business Solutions'}
              </h3>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center text-xs font-bold text-jevelin-orange hover:text-jevelin-orangeHover transition uppercase tracking-wider"
            >
              <span>{language === 'fr' ? 'Tous les 7 domaines d’intervention' : 'All 7 Practice Areas'}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((rel) => {
              const relContent = language === 'fr' ? rel.fr : rel.en;
              const RelIcon = SERVICE_ICONS[rel.iconName] || Briefcase;
              return (
                <Link
                  key={rel.id}
                  to={rel.canonicalPath}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-lg transition flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-accent-50 text-jevelin-orange flex items-center justify-center font-bold group-hover:scale-110 transition-transform">
                      <RelIcon className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-jevelin-orange transition font-heading">
                      {relContent.h1}
                    </h4>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {relContent.leadParagraph}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-jevelin-orange">
                    <span>{language === 'fr' ? 'En savoir plus' : 'Learn More'}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom Conversion Banner */}
      <section className="bg-gradient-to-r from-jevelin-dark via-slate-900 to-navy-950 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4 text-left">
              <span className="text-xs font-bold tracking-[0.25em] uppercase text-accent-300 block">
                {language === 'fr' ? 'ACCOMPAGNEMENT DÉDIÉ À YAOUNDÉ' : 'DEDICATED ADVISORY IN YAOUNDÉ'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {language === 'fr'
                  ? `Prêt à concrétiser votre projet : ${content.primaryKeyword} ?`
                  : `Ready to initiate: ${content.primaryKeyword}?`}
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed max-w-2xl">
                {language === 'fr'
                  ? 'Contactez notre cabinet à Yaoundé. Nous analysons immédiatement votre situation, estimons vos coûts et prenons en main votre dossier sans délai.'
                  : 'Get in touch with our team in Yaoundé. We assess your requirements immediately, estimate your costs, and manage your procedure without delay.'}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="px-8 py-3.5 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-jevelin-orange hover:bg-jevelin-orangeHover shadow-md transition"
                >
                  {content.ctaPrimary}
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

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-24 h-24 rounded-2xl bg-white/5 border border-white/15 flex items-center justify-center">
                <IconComp className="w-12 h-12 text-accent-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Request Assistance Modal */}
      <RequestAssistanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={assistanceService || content.h1}
      />
    </div>
  );
};
