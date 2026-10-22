import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  CheckCircle2,
  Copy,
  Check,
  Mail,
  Calendar,
  Compass,
  HelpCircle,
  ShieldAlert,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { getRegistrationByReference } from '../services/api';
import { RegistrationSafeSummary } from '../types';

export const WelcomePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const refParam = searchParams.get('ref') || '';
  const [copied, setCopied] = useState(false);
  const [details, setDetails] = useState<RegistrationSafeSummary | null>(null);

  useEffect(() => {
    if (refParam) {
      getRegistrationByReference(refParam)
        .then((res) => setDetails(res))
        .catch(() => {
          // If reference lookup fails (e.g. freshly created or bot test), use fallback display
          setDetails({
            reference: refParam,
            first_name: 'Cher entrepreneur / Dear friend',
            email_masked: 'votre email',
            status: 'Received',
            created_at: new Date().toISOString(),
          });
        });
    }
  }, [refParam]);

  const copyRef = () => {
    if (refParam) {
      navigator.clipboard.writeText(refParam);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-16 lg:py-24 bg-gradient-to-b from-brand-50/50 to-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8 sm:p-12 text-center relative overflow-hidden">
          {/* Top success badge */}
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center mb-6 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Thank you for your interest in Association Cap Entrepreneurs!
          </h1>
          <p className="mt-2 text-base font-medium text-brand-600">
            Merci pour votre intérêt envers l'Association Cap Entrepreneurs !
          </p>

          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl mx-auto">
            Votre demande d'accueil a bien été enregistrée. Notre équipe onboarding a été notifiée et vous contactera très prochainement pour vous accompagner.
          </p>

          {/* Reference block */}
          {refParam && (
            <div className="mt-8 p-5 bg-slate-50 border border-slate-200 rounded-2xl inline-block max-w-md w-full text-left">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1">
                Numéro de référence du dossier / Registration Reference
              </div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xl sm:text-2xl font-bold text-slate-900 tracking-wider">
                  {refParam}
                </span>
                <button
                  type="button"
                  onClick={copyRef}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-white border border-slate-300 text-slate-700 hover:bg-slate-100 shadow-xs transition"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                      <span>Copié</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 mr-1 text-slate-500" />
                      <span>Copier</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}

          {/* Inbox reminder */}
          <div className="mt-6 p-4 rounded-xl bg-amber-50/80 border border-amber-200 text-left flex items-start space-x-3 text-xs sm:text-sm text-amber-900">
            <Mail className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-bold">Vérifiez vos courriels :</span> Un email de confirmation récapitulatif vous a été envoyé. Pensez à vérifier votre boîte de réception ainsi que votre dossier de courriers indésirables (spams).
            </div>
          </div>

          {/* Member Disclaimer alert */}
          <div className="mt-6 p-4 rounded-xl bg-slate-100/70 border border-slate-200 text-left flex items-start space-x-3 text-xs text-slate-600">
            <ShieldAlert className="w-4 h-4 text-slate-500 flex-shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-slate-700">Information importante :</span> Ce formulaire constitue une déclaration d'intérêt préalable. La participation aux activités et l'officialisation de l'adhésion interviennent après la session d'accueil et validation mutuelle.
            </div>
          </div>

          {/* Action Navigation Buttons */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to="/welcome-session"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 shadow-sm hover:shadow transition group"
            >
              <Calendar className="w-4 h-4 mr-2" />
              <span>Voir la session d'accueil</span>
              <ArrowRight className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/about"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 shadow-sm transition"
            >
              <Compass className="w-4 h-4 mr-2 text-slate-500" />
              <span>Découvrir l'Association</span>
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center space-x-6 text-xs text-slate-500">
            <Link to="/contact" className="hover:text-brand-600 underline">
              Une question technique ? Contactez-nous
            </Link>
            <span>•</span>
            <a
              href="https://capentrepreneurs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-600 inline-flex items-center"
            >
              Site principal (capentrepreneurs.org)
              <ExternalLink className="w-3 h-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
