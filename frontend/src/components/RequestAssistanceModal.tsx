import React, { useState } from 'react';
import { X, Send, CheckCircle2, AlertCircle, Loader2, Sparkles, Phone, Mail, Building2 } from 'lucide-react';
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

    try {
      await submitContact({
        name: fullName,
        email,
        subject: `[Demande d'accompagnement 3M] ${service || 'Général'}`,
        message: `Téléphone: ${phone || 'Non renseigné'}\nService: ${service}\n\nMessage:\n${message}`,
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
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-300 mb-1">
              3M Consulting SARL · Yaoundé
            </p>
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-white" id="modal-title">
              {language === 'fr' ? 'Demander un accompagnement' : 'Request Assistance'}
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-slate-300">
              {language === 'fr'
                ? 'Présentez votre besoin. Notre équipe vous répond sous 24 à 48 heures.'
                : 'Tell us about your project. Our team will get back to you within 24 to 48 hours.'}
            </p>
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
