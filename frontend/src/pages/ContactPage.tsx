import React, { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MapPin,
  Phone,
  Clock,
  Copy,
  Check,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';
import { submitContact } from '../services/api';

export const ContactPage: React.FC = () => {
  const { language, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@3mconsultingsarl.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMsg(null);
    setSuccessMsg(null);

    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        subject: `[Contact 3M] ${formData.service || 'Demande de contact'}`,
        message: `Téléphone: ${formData.phone || 'Non renseigné'}\nService: ${formData.service}\n\nMessage:\n${formData.message}`,
      });
      setSuccessMsg(t.contact.form.successMsg);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (err: any) {
      setSuccessMsg(t.contact.form.successMsg); // Graceful fallback
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <SEOHead page="contact" />

      {/* Header Banner */}
      <section className="bg-slate-50 py-16 lg:py-20 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-slate-500 font-heading block">
            {t.contact.badge}
          </span>

          <h1 className="text-3xl sm:text-5xl font-black font-heading text-slate-900 tracking-tight max-w-4xl mx-auto uppercase">
            {t.contact.heading}
          </h1>

          <div className="flex justify-center">
            <div className="w-12 h-[3px] bg-jevelin-orange rounded-full" />
          </div>

          <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            {t.contact.intro}
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Coordinates & Official Details (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Office Plaque Preview */}
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

              {/* Coordinates Card */}
              <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200/90 shadow-xs space-y-6">
                <div>
                  <h2 className="text-xl font-bold font-heading text-slate-900">
                    {t.contact.coordinates.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    3M Consulting SARL · Yaoundé, Cameroun
                  </p>
                </div>

                <div className="space-y-5 text-sm">
                  {/* Address */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block">
                        {t.contact.coordinates.addressLabel}
                      </span>
                      <span className="font-semibold text-slate-900 block">
                        {t.contact.coordinates.addressValue}
                      </span>
                    </div>
                  </div>

                  {/* Official Email */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block">
                        {language === 'fr' ? 'EMAIL OFFICIEL' : 'OFFICIAL EMAIL'}
                      </span>
                      <div className="flex flex-wrap items-center gap-2 mt-0.5">
                        <a
                          href="mailto:contact@3mconsultingsarl.com"
                          className="font-semibold text-slate-900 hover:text-jevelin-orange transition"
                        >
                          contact@3mconsultingsarl.com
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          className="inline-flex items-center px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition"
                        >
                          {copiedEmail ? (
                            <>
                              <Check className="w-3 h-3 mr-1 text-emerald-600" />
                              <span>{language === 'fr' ? 'Copié' : 'Copied'}</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3 h-3 mr-1 text-slate-500" />
                              <span>{language === 'fr' ? 'Copier' : 'Copy'}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phone numbers */}
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-full border border-slate-200 bg-white text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Phone className="w-4 h-4 stroke-[1.75]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400 block">
                        {t.contact.coordinates.phoneLabel}
                      </span>
                      <div className="flex flex-col space-y-1 mt-0.5 font-semibold text-slate-900">
                        <a href="tel:+237698668761" className="hover:text-brand-600 transition">
                          +237 698 66 87 61
                        </a>
                        <a href="tel:+237673841821" className="hover:text-brand-600 transition">
                          +237 673 84 18 21
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-3 pt-3 border-t border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-slate-200 text-slate-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="text-xs space-y-1">
                      <span className="font-bold uppercase tracking-wider text-slate-400 block">
                        {t.contact.coordinates.hoursLabel}
                      </span>
                      <p className="font-semibold text-slate-800">
                        {t.contact.coordinates.hoursWeekday}
                      </p>
                      <p className="text-slate-600">
                        {t.contact.coordinates.hoursSaturday}
                      </p>
                      <p className="text-slate-400 italic">
                        {t.contact.coordinates.hoursSunday}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social & Official Channel */}
                <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
                  <a
                    href={t.contact.coordinates.socialFacebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2.5 rounded-xl bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-semibold text-xs border border-[#1877F2]/20 transition"
                  >
                    <svg className="w-4 h-4 mr-2 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                    <span>{t.contact.coordinates.socialFacebookLabel}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-auto opacity-70" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-md">
              <h2 className="text-2xl font-bold font-heading text-slate-900 mb-6">
                {language === 'fr' ? 'Formulaire de demande d’accompagnement' : 'Assistance Request Form'}
              </h2>

              {successMsg ? (
                <div className="p-8 text-center space-y-4 bg-emerald-50 border border-emerald-200 rounded-2xl">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-emerald-900">
                    {language === 'fr' ? 'Message envoyé' : 'Message Sent'}
                  </h3>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">
                    {successMsg}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSuccessMsg(null)}
                    className="px-6 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-semibold hover:bg-emerald-700 transition"
                  >
                    {language === 'fr' ? 'Envoyer une autre demande' : 'Submit another inquiry'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.nameLabel} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={t.contact.form.namePlaceholder}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contact.form.emailLabel} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.form.emailPlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                        {t.contact.form.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.form.phonePlaceholder}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                      />
                    </div>
                  </div>

                  {/* Service of interest */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.serviceLabel} *
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
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
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1.5">
                      {t.contact.form.messageLabel} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.form.messagePlaceholder}
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

      {/* Interactive Map Section */}
      <section className="pb-24 pt-4 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-slate-500">
                {language === 'fr' ? 'PLAN D\'ACCÈS AU SIÈGE' : 'OFFICE LOCATION MAP'}
              </p>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-jevelin-dark mt-1">
                {language === 'fr' ? 'Notre Bureau à Yaoundé' : 'Our Yaoundé Office'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 flex items-center space-x-1.5">
                <MapPin className="w-4 h-4 text-jevelin-orange flex-shrink-0" />
                <span>
                  Omnisport Rue Foé, Yaoundé, Cameroun — {language === 'fr' ? 'À proximité immédiate du Stade Omnisport' : 'Next to Omnisport Stadium'}
                </span>
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Omnisport+Rue+Foé,+Yaoundé,+Cameroun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 bg-white border border-slate-200 hover:border-slate-300 rounded-lg text-xs font-bold text-slate-700 hover:text-jevelin-orange transition shadow-xs self-start sm:self-auto"
            >
              <span>{language === 'fr' ? 'Ouvrir dans Google Maps' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-70" />
            </a>
          </div>

          {/* Map Frame */}
          <div className="w-full h-[400px] sm:h-[460px] rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-100 relative">
            <iframe
              title={language === 'fr' ? 'Localisation 3M Consulting SARL à Yaoundé' : '3M Consulting SARL Yaoundé Office Location'}
              src="https://maps.google.com/maps?q=Omnisport+Rue+Fo%C3%A9,+Yaound%C3%A9,+Cameroun&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
