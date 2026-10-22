import React from 'react';
import { Link } from 'react-router-dom';
import {
  Compass,
  Target,
  ShieldCheck,
  CheckCircle2,
  Users2,
  Building2,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  Headphones,
  TrendingUp,
  Award,
  Briefcase,
  Mail,
  Phone,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';

export const AboutPage: React.FC = () => {
  const { language, t } = useLanguage();
  const about = t.aboutPage;

  return (
    <div className="flex flex-col w-full bg-white">
      <SEOHead page="about" />

      {/* Header Banner */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500 font-heading block">
            {about.badge}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight max-w-4xl mx-auto uppercase">
            {about.heading}
          </h1>

          <div className="flex justify-center">
            <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
          </div>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {about.lead}
          </p>

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 font-heading pt-2">
            {language === 'fr' ? 'NOTRE DEVISE :' : 'OUR MOTTO :'} <span className="text-slate-800 font-extrabold">WE TAKE THE NEXT STEP TOGETHER</span>
          </p>
        </div>
      </section>

      {/* Corporate Overview with Real Plaque Photo */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Real Office Plaque Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/asset/partner-office-sign-landscape.webp"
                  alt="3M Consulting Office Plaque Yaoundé"
                  className="w-full h-[380px] sm:h-[440px] object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-jevelin-dark/70 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-accent-300">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Omnisport Rue Foé, Yaoundé</span>
                  </div>
                  <p className="text-xs text-slate-200 mt-1">Siège social de 3M Consulting SARL</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-accent-100 rounded-2xl -z-10" />
            </div>

            {/* Mission & Vision Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-jevelin-orange">
                <Target className="w-4 h-4" />
                <span>{language === 'fr' ? 'NOTRE VOCATION' : 'OUR PURPOSE'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black font-heading text-jevelin-dark">
                {about.missionTitle}
              </h2>

              <p className="text-base text-slate-700 leading-relaxed font-medium">
                {about.missionDesc}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {about.missionDetails}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-jevelin-dark block">
                    {language === 'fr' ? 'Intermédiation agile' : 'Agile Intermediation'}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'fr'
                      ? 'Des solutions adaptées pour franchir chaque barrière administrative.'
                      : 'Tailored solutions to turn every administrative roadblock into progress.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="text-xs font-bold text-jevelin-dark block">
                    {language === 'fr' ? 'Plateforme 3mconsulting.digital' : '3mconsulting.digital Platform'}
                  </span>
                  <p className="text-xs text-slate-500 mt-1">
                    {language === 'fr'
                      ? 'Accès digitalisé à des experts en un seul clic pour clients et consultants.'
                      : 'Digital access to specialized consultants in one click.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================================
              PDG / LEADERSHIP SECTION — M. MONROI MAYA MICHAEL
              ========================================================================= */}
          <div className="bg-gradient-to-br from-jevelin-dark via-navy-900 to-navy-950 text-white rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-jevelin-orange/10 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Photo & Badge */}
              <div className="lg:col-span-5 flex flex-col items-center text-center">
                <div className="relative group">
                  <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-accent-400/50 shadow-2xl p-1 bg-white/10">
                    <img
                      src="/asset/ceo-monroi-maya-michael.webp"
                      alt="M. MONROI MAYA MICHAEL - PDG 3M Consulting"
                      className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute -bottom-2 bg-slate-900 text-white border border-slate-700 font-heading font-bold text-xs uppercase tracking-wider px-4 py-1.5 rounded-md shadow-lg">
                    {about.ceoTitle}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-black font-heading text-white mt-6">
                  {about.ceoName}
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-accent-300 font-bold mt-1">
                  Fondateur & Dirigeant Associé
                </p>
              </div>

              {/* Bio & Vision */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center space-x-2 text-accent-400 text-xs font-bold uppercase tracking-widest">
                  <Award className="w-4 h-4" />
                  <span>{language === 'fr' ? 'LE MOT DU DIRIGEANT' : 'LEADERSHIP BIOGRAPHY'}</span>
                </div>

                <h4 className="text-2xl sm:text-3xl font-extrabold font-heading text-white leading-tight">
                  {language === 'fr'
                    ? 'Bâtir une nouvelle expérience entrepreneuriale au Cameroun'
                    : 'Building an elevated entrepreneurial experience in Cameroon'}
                </h4>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {about.ceoBio}
                </p>

                <div className="pt-3 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent-400" />
                    <span>Banque, Finance & Comptabilité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent-400" />
                    <span>Finances Publiques & Fiscalité</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent-400" />
                    <span>Initiateur de 3mconsulting.digital</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Pillars of Our Approach */}
          <div className="space-y-8">
            <div className="text-center space-y-3">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-jevelin-orange">
                {language === 'fr' ? 'NOTRE MÉTHODE' : 'OUR METHOD'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-jevelin-dark">
                {t.whyChooseUs.heading}
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {t.whyChooseUs.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-3 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 flex items-center justify-center font-bold group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    {idx === 0 && <ShieldCheck className="w-5 h-5" />}
                    {idx === 1 && <Headphones className="w-5 h-5" />}
                    {idx === 2 && <TrendingUp className="w-5 h-5" />}
                    {idx === 3 && <CheckCircle2 className="w-5 h-5" />}
                  </div>
                  <h4 className="text-base font-bold font-heading text-jevelin-dark">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* =========================================================================
              JEVELIN-STYLE TEAM SHOWCASE — Nos Consultants & Experts
              ========================================================================= */}
          <div className="space-y-10">
            <div className="text-center space-y-3">
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-jevelin-orange">
                {language === 'fr' ? 'CAPITAL HUMAIN & EXPERTISE' : 'HUMAN CAPITAL & EXPERTISE'}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black font-heading text-jevelin-dark">
                {language === 'fr' ? 'Notre Équipe de Consultants' : 'Our Team of Consultants'}
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto">
                {language === 'fr'
                  ? 'Des professionnels chevronnés, juristes, fiscalistes et spécialistes en développement d\'affaires à votre service au Cameroun.'
                  : 'Seasoned professionals, legal advisors, tax consultants, and business development experts at your service in Cameroon.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Member 1: CEO */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src="/asset/ceo-monroi-maya-michael.webp"
                    alt="M. Monroi Maya Michael"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 space-y-1 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-jevelin-orange block">
                    PDG & Fondateur
                  </span>
                  <h4 className="text-base font-bold font-heading text-jevelin-dark">
                    M. Monroi Maya Michael
                  </h4>
                  <p className="text-xs text-slate-500">
                    Finance, Fiscalité & Stratégie
                  </p>
                </div>
              </div>

              {/* Member 2: Senior Consultant */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src="/asset/senior-consultant-portrait.webp"
                    alt="Consultant Senior & Relations Institutionnelles"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 space-y-1 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-jevelin-orange block">
                    Conseil Stratégique
                  </span>
                  <h4 className="text-base font-bold font-heading text-jevelin-dark">
                    Consultant Senior
                  </h4>
                  <p className="text-xs text-slate-500">
                    Négociation & Relations Affaires
                  </p>
                </div>
              </div>

              {/* Member 3: Formalities & Legal */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src="/asset/consultant-holding-dossiers.webp"
                    alt="Responsable Formalités et Dossiers"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 space-y-1 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-jevelin-orange block">
                    Pôle Juridique
                  </span>
                  <h4 className="text-base font-bold font-heading text-jevelin-dark">
                    Formalités & Greffes
                  </h4>
                  <p className="text-xs text-slate-500">
                    Création & Dossiers Administratifs
                  </p>
                </div>
              </div>

              {/* Member 4: Partnerships */}
              <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 group flex flex-col justify-between">
                <div className="h-64 overflow-hidden bg-slate-100 relative">
                  <img
                    src="/asset/partner-welcoming-sign.webp"
                    alt="Direction Partenariats et Accueil"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5 space-y-1 text-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-jevelin-orange block">
                    Pôle Partenariats
                  </span>
                  <h4 className="text-base font-bold font-heading text-jevelin-dark">
                    Accueil & Relations Extérieures
                  </h4>
                  <p className="text-xs text-slate-500">
                    Intermédiation & Investisseurs
                  </p>
                </div>
              </div>
            </div>

            {/* Complete Team Banner */}
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md relative group">
              <img
                src="/asset/team-full-office.webp"
                alt="Cabinet 3M Consulting SARL au complet"
                className="w-full h-72 sm:h-96 object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex items-end p-6 sm:p-8">
                <div className="text-white space-y-1">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300 block">
                    {language === 'fr' ? 'SIÈGE SOCIAL · YAOUNDÉ' : 'HEAD OFFICE · YAOUNDÉ'}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-bold font-heading">
                    {language === 'fr'
                      ? 'L\'équipe 3M Consulting au complet au siège d\'Omnisport Rue Foé'
                      : 'The full 3M Consulting team at our Omnisport Rue Foé headquarters'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                    {language === 'fr'
                      ? 'Unis autour d\'une vision : faire de vos barrières des escaliers vers une réussite entrepreneuriale.'
                      : 'United around one vision: turning your barriers into stepping stones toward success.'}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Presence in Yaoundé & Cameroon */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-6">
            <div className="flex items-center space-x-3">
              <Building2 className="w-6 h-6 text-jevelin-orange" />
              <h3 className="text-2xl font-black font-heading text-jevelin-dark">
                {about.presenceTitle}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-slate-700">
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-jevelin-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-jevelin-dark block font-bold">
                      Omnisport Rue Foé, Yaoundé, Cameroun
                    </strong>
                    <span className="text-xs text-slate-500">
                      À proximité immédiate des institutions, ministères et tribunaux.
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-jevelin-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-jevelin-dark block font-bold">
                      {language === 'fr' ? 'Horaires d’accueil' : 'Opening Hours'}
                    </strong>
                    <span className="text-xs text-slate-500">
                      Lundi – Vendredi : 7h30 à 17h30 | Samedi : 8h00 à 14h30
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {about.presenceDesc}
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-bold text-jevelin-dark">
                  <a
                    href="mailto:contact@3mconsultingsarl.com"
                    className="inline-flex items-center space-x-1.5 text-jevelin-orange hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>contact@3mconsultingsarl.com</span>
                  </a>
                  <a
                    href="tel:+237698668761"
                    className="inline-flex items-center space-x-1.5 text-slate-700 hover:text-jevelin-orange"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>+237 698 66 87 61</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap gap-4 items-center justify-between">
              <span className="text-xs text-slate-500">
                Site officiel : <strong className="text-jevelin-dark">3mconsultingsarl.com</strong> · Portail : <strong className="text-jevelin-dark">3mconsulting.digital</strong>
              </span>
              <Link
                to="/services"
                className="inline-flex items-center text-xs font-bold text-jevelin-orange hover:text-jevelin-orangeHover"
              >
                <span>{language === 'fr' ? 'Découvrir nos 7 domaines d’expertise' : 'Explore our 7 practice areas'}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
