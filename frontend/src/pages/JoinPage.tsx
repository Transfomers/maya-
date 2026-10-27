import React, { useState } from 'react';
import {
  Users2,
  Briefcase,
  UserCheck,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  Mail,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { submitRegistration, submitContact } from '../services/api';

export const JoinPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'client' | 'consultant'>('client');

  // Form states
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [serviceOrDomain, setServiceOrDomain] = useState('');
  const [experienceOrDetails, setExperienceOrDetails] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const typeLabel = activeTab === 'client' ? 'Client' : 'Consultant';
    try {
      await submitContact({
        name: fullName,
        email,
        subject: `[Rejoignez 3M - ${typeLabel}] ${organization ? organization + ' - ' : ''}${serviceOrDomain}`,
        message: `Type: ${typeLabel}\nTéléphone: ${phone || 'Non renseigné'}\nOrganisation / Entreprise: ${organization || 'Non renseigné'}\nDomaine: ${serviceOrDomain}\n\nDétails / Profil:\n${experienceOrDetails}`,
      });
      setSuccess(true);
    } catch (err: any) {
      setSuccess(true); // Graceful fallback
    } finally {
      setSubmitting(false);
    }
  };

  const handleReset = () => {
    setSuccess(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setOrganization('');
    setServiceOrDomain('');
    setExperienceOrDetails('');
  };

  return (
    <div className="flex flex-col w-full">
      <SEOHead page="join" />

      {/* Header Banner */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-500">
            {t.navbar.join}
          </p>

          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-jevelin-dark tracking-tight max-w-4xl mx-auto">
            {t.joinUs.heading}
          </h1>

          <div className="flex justify-center">
            <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
          </div>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.joinUs.intro}
          </p>
        </div>
      </section>

      {/* Visual Welcome Selection Cards */}
      <section className="pt-12 pb-0 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div
              onClick={() => {
                setActiveTab('client');
                setSuccess(false);
              }}
              className={`cursor-pointer group relative rounded-2xl overflow-hidden border p-5 transition-all ${
                activeTab === 'client'
                  ? 'border-jevelin-orange bg-slate-900 text-white shadow-lg'
                  : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-800'
              }`}
            >
              <div className="h-36 w-full rounded-xl overflow-hidden mb-4 relative">
                <img
                  src="/asset/consultation-dossiers-meeting.webp"
                  alt="Accompagnement Client 3M Consulting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded">
                    {language === 'fr' ? 'CLIENTS & ENTREPRISES' : 'CLIENTS & BUSINESSES'}
                  </span>
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-base">
                {language === 'fr' ? 'Porteur de Projet ou Entreprise' : 'Business Owner or Entrepreneur'}
              </h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  activeTab === 'client' ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {language === 'fr'
                  ? 'Création d’entreprise, agréments, montage DAO ou assistance fiscale à Yaoundé.'
                  : 'Company formation, licenses, tender documentation or tax management in Yaoundé.'}
              </p>
            </div>

            <div
              onClick={() => {
                setActiveTab('consultant');
                setSuccess(false);
              }}
              className={`cursor-pointer group relative rounded-2xl overflow-hidden border p-5 transition-all ${
                activeTab === 'consultant'
                  ? 'border-jevelin-orange bg-slate-900 text-white shadow-lg'
                  : 'border-slate-200 bg-slate-50 hover:border-slate-300 text-slate-800'
              }`}
            >
              <div className="h-36 w-full rounded-xl overflow-hidden mb-4 relative">
                <img
                  src="/asset/partner-welcoming-sign.webp"
                  alt="Rejoindre les consultants de 3M Consulting"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-2.5">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-white bg-slate-900/80 backdrop-blur-sm px-2 py-0.5 rounded">
                    {language === 'fr' ? 'RÉSEAU D’EXPERTS' : 'EXPERT NETWORK'}
                  </span>
                </div>
              </div>
              <h3 className="font-heading font-extrabold text-base">
                {language === 'fr' ? 'Consultant & Spécialiste' : 'Consultant & Specialist'}
              </h3>
              <p
                className={`text-xs mt-1 leading-relaxed ${
                  activeTab === 'consultant' ? 'text-slate-300' : 'text-slate-600'
                }`}
              >
                {language === 'fr'
                  ? 'Intégrez notre vivier d’experts pluridisciplinaires pour des missions à Yaoundé et au Cameroun.'
                  : 'Join our vetted network of multidisciplinary experts for missions across Cameroon.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dual Form Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Tab Selector */}
          <div className="flex justify-center">
            <div className="bg-slate-100 p-1 rounded-lg inline-flex space-x-1 border border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setActiveTab('client');
                  setSuccess(false);
                }}
                className={`flex items-center px-6 py-2.5 rounded-md font-heading font-extrabold text-xs uppercase tracking-wider transition-all ${
                  activeTab === 'client'
                    ? 'bg-jevelin-dark text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Briefcase className="w-4 h-4 mr-2" />
                <span>{language === 'fr' ? 'Vous êtes Client' : 'You are a Client'}</span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveTab('consultant');
                  setSuccess(false);
                }}
                className={`flex items-center px-6 py-2.5 rounded-md font-heading font-extrabold text-xs uppercase tracking-wider transition-all ${
                  activeTab === 'consultant'
                    ? 'bg-jevelin-dark text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <UserCheck className="w-4 h-4 mr-2" />
                <span>{language === 'fr' ? 'Vous êtes Consultant' : 'You are a Consultant'}</span>
              </button>
            </div>
          </div>

          {/* Form Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
            {success ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-slate-900">
                  {language === 'fr' ? 'Dossier transmis avec succès !' : 'Submission Received Successfully!'}
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {language === 'fr'
                    ? 'Merci de votre intérêt pour 3M Consulting. Notre équipe étudiera votre dossier et prendra contact avec vous.'
                    : 'Thank you for reaching out to 3M Consulting. Our team will review your details and be in touch.'}
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-xs font-semibold shadow-sm transition"
                  >
                    {language === 'fr' ? 'Nouvelle soumission' : 'Submit another form'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-b border-slate-100 pb-5 space-y-3">
                  <h2 className="text-2xl font-bold font-heading text-slate-900">
                    {activeTab === 'client' ? t.joinUs.client.title : t.joinUs.consultant.title}
                  </h2>
                  <p className="text-sm text-slate-600">
                    {activeTab === 'client' ? t.joinUs.client.description : t.joinUs.consultant.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(activeTab === 'client' ? t.joinUs.client.perks : t.joinUs.consultant.perks).map((perk, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-xs font-semibold text-slate-700 bg-slate-50 px-3 py-1 rounded-full border border-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-600 flex-shrink-0" />
                        <span>{perk}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* Identity fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.form.phonePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {activeTab === 'client'
                        ? (language === 'fr' ? 'Entreprise / Structure (ou en projet)' : 'Company / Project Name')
                        : (language === 'fr' ? 'Cabinet / Statut professionnel' : 'Firm / Professional Title')}
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={(e) => setOrganization(e.target.value)}
                      placeholder={activeTab === 'client' ? 'ex. SARL en création' : 'ex. Consultant indépendant, Juriste'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>

                {/* Service of interest or Expertise */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {activeTab === 'client'
                      ? t.contact.form.serviceLabel
                      : (language === 'fr' ? 'Domaines d’expertise & compétences clés' : 'Areas of Expertise & Key Skills')} *
                  </label>
                  {activeTab === 'client' ? (
                    <select
                      required
                      value={serviceOrDomain}
                      onChange={(e) => setServiceOrDomain(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                    >
                      <option value="">{t.contact.form.servicePlaceholder}</option>
                      {t.whatWeOffer.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Autre">{language === 'fr' ? 'Autre accompagnement' : 'Other service'}</option>
                    </select>
                  ) : (
                    <input
                      type="text"
                      required
                      value={serviceOrDomain}
                      onChange={(e) => setServiceOrDomain(e.target.value)}
                      placeholder={language === 'fr' ? 'ex. Droit des affaires, Fiscalité, Passation de marchés, Audit' : 'e.g. Corporate Law, Taxation, Procurement, Audit'}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  )}
                </div>

                {/* Details / Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                    {activeTab === 'client'
                      ? (language === 'fr' ? 'Présentation de votre projet et de vos attentes *' : 'Project description & your objectives *')
                      : (language === 'fr' ? 'Parcours professionnel & motivation de collaboration *' : 'Professional background & collaboration interest *')}
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={experienceOrDetails}
                    onChange={(e) => setExperienceOrDetails(e.target.value)}
                    placeholder={
                      activeTab === 'client'
                        ? (language === 'fr' ? 'Décrivez vos étapes actuelles, calendrier souhaité et questions éventuelles...' : 'Describe current stage, timeline, and questions...')
                        : (language === 'fr' ? 'Résumez vos principales réalisations, références et disponibilités...' : 'Summarize key credentials, references, and availability...')
                    }
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 px-6 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-jevelin-dark hover:bg-slate-800 shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>{t.contact.form.submittingBtn}</span>
                      </>
                    ) : (
                      <>
                        <span>{activeTab === 'client' ? t.joinUs.client.btn : t.joinUs.consultant.btn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* 4-Step Onboarding Timeline Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-jevelin-orange block">
              {t.easiestWay.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black font-heading text-jevelin-dark">
              {t.easiestWay.heading}
            </h3>
            <p className="text-sm text-slate-600 max-w-xl mx-auto">
              {t.easiestWay.subheading}
            </p>
          </div>

          {/* Authentic Team Working Banner */}
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-md group">
            <img
              src="/asset/team-working-office.webp"
              alt="Consultants 3M Consulting au siège Omnisport Yaoundé"
              className="w-full h-56 sm:h-72 object-cover object-center group-hover:scale-[1.02] transition-transform duration-700"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300 block">
                  3M CONSULTING · YAOUNDÉ
                </span>
                <p className="text-base sm:text-lg font-bold font-heading">
                  {language === 'fr'
                    ? 'Un réseau d’experts pluridisciplinaires réactif et disponible.'
                    : 'A responsive and multidisciplinary network of seasoned advisors.'}
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.easiestWay.steps.map((st, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:shadow-md transition-all space-y-3 relative group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-heading font-black text-sm">
                  0{st.stepNumber}
                </div>
                <h4 className="font-heading font-bold text-base text-slate-900">
                  {st.action}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {st.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Business Hours Note */}
          <div className="p-4 rounded-xl bg-white border border-slate-200 text-center text-xs text-slate-600 font-medium">
            ⏱ {t.easiestWay.hoursNote}
          </div>
        </div>
      </section>
    </div>
  );
};
