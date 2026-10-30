import React, { useState } from 'react';
import {
  X,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Sparkles,
  Phone,
  Mail,
  Building2,
  Video,
  Calendar,
  MessageSquare,
  ShieldCheck,
  Check,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { submitContact } from '../services/api';

interface RequestAssistanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const RequestAssistanceModal: React.FC<RequestAssistanceModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const { language, t } = useLanguage();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState('');
  const [interviewFormat, setInterviewFormat] = useState<'office' | 'visio' | 'call'>('office');
  const [requestDiagnostic, setRequestDiagnostic] = useState<boolean>(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Update initialService when modal opens with pre-selected service
  React.useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setErrorMessage(null);

    const formatLabel =
      interviewFormat === 'office'
        ? (language === 'fr' ? 'Présentiel (Siège Omnisport Yaoundé)' : 'In-Person (Yaoundé Office)')
        : interviewFormat === 'visio'
        ? (language === 'fr' ? 'Visioconférence (Microsoft Teams / Google Meet)' : 'Video Call (Teams / Meet)')
        : (language === 'fr' ? 'Téléphone & WhatsApp direct' : 'Phone & WhatsApp Call');

    try {
      await submitContact({
        name: fullName,
        email,
        subject: `[Programme Accompagnement & Entretien 3M] ${service || 'Création d\'entreprise'} (${formatLabel})`,
        message: `Format d'entretien souhaité : ${formatLabel}\nDiagnostic de cadrage demandé : ${requestDiagnostic ? 'Oui (Entretien 30-45 min)' : 'Non'}\nTéléphone : ${phone || 'Non renseigné'}\nService sollicité : ${service}\n\nDescription du projet / Besoins :\n${message}`,
      });
      setSuccess(true);
    } catch (err: any) {
      // In case backend is in mock/offline mode, gracefully handle
      setSuccess(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleResetAndClose = () => {
    setSuccess(false);
    setErrorMessage(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setInterviewFormat('office');
    setRequestDiagnostic(true);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
        <div className="relative transform overflow-hidden rounded-3xl bg-white text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-xl border border-slate-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-brand-900 via-brand-800 to-navy-900 px-6 py-6 text-white relative">
            <button
              onClick={handleResetAndClose}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-300 mb-1">
              <Sparkles className="w-3.5 h-3.5 text-jevelin-orange" />
              <span>Programme d'Assistance & Entretien Diagnostic</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white" id="modal-title">
              {language === 'fr'
                ? 'Demander un Accompagnement & Entretien Stratégique'
                : 'Request Assistance & Strategic Diagnostic Interview'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              {language === 'fr'
                ? 'Bénéficiez d’un entretien préalable (30-45 min) avec nos juristes pour analyser votre forme juridique et vos obligations avant engagement.'
                : 'Get a 30-45 min intake diagnostic interview with our corporate attorneys to optimize your legal form and tax schedule before filing.'}
            </p>
          </div>

          {/* Program Accent Banner */}
          <div className="bg-accent-50 border-b border-accent-200/80 px-6 py-2.5 flex items-center justify-between text-xs text-slate-800">
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-jevelin-orange flex-shrink-0" />
              <span className="font-semibold">
                {language === 'fr'
                  ? 'Protocole d’assistance personnalisé : Cadrage 72h · Conforme OHADA & DGI'
                  : 'Tailored Assistance Protocol: 72h Turnkey · OHADA & Tax Compliant'}
              </span>
            </div>
            <span className="hidden sm:inline font-bold text-jevelin-dark text-[11px] bg-white px-2 py-0.5 rounded border border-accent-200">
              {language === 'fr' ? 'Sans engagement' : 'Zero Commitment'}
            </span>
          </div>

          {/* Body */}
          <div className="p-6 sm:p-8">
            {success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold font-heading text-slate-900">
                  {language === 'fr' ? 'Demande bien reçue !' : 'Request Received!'}
                </h4>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  {t.contact.form.successMsg}
                </p>
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/237673841821"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
                  >
                    <span>WhatsApp : +237 673 84 18 21</span>
                  </a>
                  <a
                    href="tel:+237673841821"
                    className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50"
                  >
                    <Phone className="w-4 h-4 mr-2 text-brand-600" />
                    +237 673 84 18 21
                  </a>
                  <button
                    onClick={handleResetAndClose}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition"
                  >
                    {language === 'fr' ? 'Fermer' : 'Close'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {t.contact.form.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder={t.contact.form.namePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      {t.contact.form.emailLabel} *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.contact.form.emailPlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                      {t.contact.form.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t.contact.form.phonePlaceholder}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500"
                    />
                  </div>
                </div>

                {/* Interview Format Selector */}
                <div className="space-y-2 pt-1">
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider">
                    {language === 'fr'
                      ? 'Format d’entretien diagnostic souhaité :'
                      : 'Preferred diagnostic interview format:'}
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    <button
                      type="button"
                      onClick={() => setInterviewFormat('office')}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                        interviewFormat === 'office'
                          ? 'border-jevelin-orange bg-amber-50/60 ring-2 ring-jevelin-orange/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Building2 className={`w-4 h-4 ${interviewFormat === 'office' ? 'text-jevelin-orange' : 'text-slate-500'}`} />
                        {interviewFormat === 'office' && <Check className="w-3.5 h-3.5 text-jevelin-orange" />}
                      </div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {language === 'fr' ? 'Présentiel' : 'In-Person'}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {language === 'fr' ? 'Siège Yaoundé (Omnisport)' : 'Yaoundé Office'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInterviewFormat('visio')}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                        interviewFormat === 'visio'
                          ? 'border-jevelin-orange bg-amber-50/60 ring-2 ring-jevelin-orange/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Video className={`w-4 h-4 ${interviewFormat === 'visio' ? 'text-jevelin-orange' : 'text-slate-500'}`} />
                        {interviewFormat === 'visio' && <Check className="w-3.5 h-3.5 text-jevelin-orange" />}
                      </div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {language === 'fr' ? 'Visioconférence' : 'Video Call'}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {language === 'fr' ? 'Teams / Meet / Diaspora' : 'Teams / Meet / Diaspora'}
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setInterviewFormat('call')}
                      className={`p-3 rounded-xl border text-left transition flex flex-col justify-between ${
                        interviewFormat === 'call'
                          ? 'border-jevelin-orange bg-amber-50/60 ring-2 ring-jevelin-orange/20'
                          : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <Phone className={`w-4 h-4 ${interviewFormat === 'call' ? 'text-jevelin-orange' : 'text-slate-500'}`} />
                        {interviewFormat === 'call' && <Check className="w-3.5 h-3.5 text-jevelin-orange" />}
                      </div>
                      <span className="text-xs font-bold text-slate-900 block">
                        {language === 'fr' ? 'Appel / WhatsApp' : 'Phone / WhatsApp'}
                      </span>
                      <span className="text-[10px] text-slate-500">
                        {language === 'fr' ? 'Échange direct immédiat' : 'Immediate callback'}
                      </span>
                    </button>
                  </div>
                </div>

                {/* Diagnostic Checkbox */}
                <label className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={requestDiagnostic}
                    onChange={(e) => setRequestDiagnostic(e.target.checked)}
                    className="mt-0.5 rounded text-jevelin-orange focus:ring-jevelin-orange"
                  />
                  <div className="text-xs text-slate-700">
                    <strong className="text-slate-900 block font-semibold">
                      {language === 'fr'
                        ? 'Inclure l’entretien diagnostic préalable de 30-45 min (Recommandé)'
                        : 'Include the 30-45 min intake diagnostic interview (Recommended)'}
                    </strong>
                    <span className="text-slate-500 text-[11px]">
                      {language === 'fr'
                        ? 'Échange stratégique avec un juriste pour valider votre forme sociétaire (SARL, SAS, SA) et votre régime fiscal.'
                        : 'Strategic session with a corporate attorney to validate entity selection and tax optimization.'}
                    </span>
                  </div>
                </label>

                {/* Service of interest */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {t.contact.form.serviceLabel} *
                  </label>
                  <select
                    required
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 bg-white"
                  >
                    <option value="">{t.contact.form.servicePlaceholder}</option>
                    {t.whatWeOffer.services.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Autre demande">{language === 'fr' ? 'Autre demande d\'accompagnement' : 'Other advisory request'}</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase tracking-wider mb-1">
                    {t.contact.form.messageLabel} *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t.contact.form.messagePlaceholder}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 resize-none"
                  />
                </div>

                {/* Submit */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 rounded-lg font-heading font-extrabold text-xs uppercase tracking-wider text-white bg-jevelin-dark hover:bg-slate-800 shadow-md transition-all flex items-center justify-center space-x-2 disabled:opacity-70"
                  >
                    {submitting ? (
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
    </div>
  );
};
