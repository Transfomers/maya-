import React from 'react';
import { Shield, Lock, FileText, Mail, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SEOHead } from '../components/SEOHead';

export const PrivacyPage: React.FC = () => {
  const { language, t } = useLanguage();

  return (
    <div className="py-12 lg:py-20 bg-slate-50 min-h-screen">
      <SEOHead page="privacy" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-brand-100 text-brand-800 text-xs font-semibold uppercase tracking-wider mb-4">
            <Shield className="w-3.5 h-3.5" />
            <span>{language === 'fr' ? 'Mentions Légales & Confidentialité' : 'Legal Notice & Privacy'}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 tracking-tight">
            {language === 'fr' ? 'Politique de Confidentialité & Mentions Légales' : 'Privacy Policy & Legal Terms'}
          </h1>
          <p className="mt-3 text-slate-600 text-sm">
            {language === 'fr' ? 'Dernière mise à jour : 2026 · 3M Consulting SARL' : 'Last updated: 2026 · 3M Consulting SARL'}
          </p>
        </div>

        {/* Notice alert */}
        <div className="p-4 rounded-2xl bg-brand-50 border border-brand-200 text-brand-900 text-xs sm:text-sm flex items-start space-x-3">
          <AlertCircle className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
          <p>
            {language === 'fr'
              ? 'Cette politique définit la manière dont 3M Consulting SARL, société immatriculée au Cameroun, collecte, protège et traite les données confiées lors des demandes d’accompagnement, démarches d’immatriculation et consultations d’affaires.'
              : 'This policy describes how 3M Consulting SARL, a registered business entity in Cameroon, collects, protects, and processes information shared during business consulting, company formation, and administrative advisory requests.'}
          </p>
        </div>

        {/* Content body */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-8 text-slate-700 text-sm leading-relaxed">
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b border-slate-100 pb-2 flex items-center">
              1. {language === 'fr' ? 'Identification du cabinet' : 'Firm Identification'}
            </h2>
            <p>
              {language === 'fr' ? (
                <>
                  Le présent site internet accessible à l’adresse <strong>https://3mconsultingsarl.com</strong> est édité par :<br />
                  <strong>3M Consulting SARL</strong><br />
                  Siège social : Omnisport, Rue Foé, Yaoundé, Cameroun.<br />
                  Contact courriel : <a href="mailto:contact@3mconsultingsarl.com" className="text-brand-600 underline">contact@3mconsultingsarl.com</a><br />
                  Téléphones : +237 673 84 18 21 / +237 698 66 87 61.
                </>
              ) : (
                <>
                  This website accessible at <strong>https://3mconsultingsarl.com</strong> is published by:<br />
                  <strong>3M Consulting SARL</strong><br />
                  Head office: Omnisport, Rue Foé, Yaoundé, Cameroon.<br />
                  Email contact: <a href="mailto:contact@3mconsultingsarl.com" className="text-brand-600 underline">contact@3mconsultingsarl.com</a><br />
                  Phone lines: +237 673 84 18 21 / +237 698 66 87 61.
                </>
              )}
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b border-slate-100 pb-2 flex items-center">
              2. {language === 'fr' ? 'Données collectées' : 'Information Collected'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Les informations transmises via nos formulaires de contact, de demande d’accompagnement ou d’inscription consultant sont strictement destinées au traitement de votre dossier :'
                : 'Information submitted through our contact, assistance request, or consultant forms is used strictly to process your engagement:'}
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
              <li>{language === 'fr' ? 'Nom et prénom' : 'Full name'}</li>
              <li>{language === 'fr' ? 'Adresse email et numéro de téléphone professionnel' : 'Email address and phone number'}</li>
              <li>{language === 'fr' ? 'Nature du service recherché et détails du projet d’entreprise' : 'Service of interest and business project details'}</li>
              <li>{language === 'fr' ? 'Pièces administratives et justificatives fournies dans le cadre des mandats convenus' : 'Administrative documents and records submitted under agreed advisory mandates'}</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b border-slate-100 pb-2 flex items-center">
              3. {language === 'fr' ? 'Secret professionnel & Confidentialité' : 'Professional Confidentiality'}
            </h2>
            <p>
              {language === 'fr'
                ? '3M Consulting applique une stricte obligation de confidentialité à l’égard de toutes les informations techniques, juridiques, fiscales et commerciales qui lui sont communiquées. Aucune donnée n’est cédée, vendue ou transmise à des tiers à des fins de prospection.'
                : '3M Consulting observes strict professional confidentiality with regard to all technical, legal, fiscal, and commercial data shared with us. No information is sold, rented, or distributed to third parties for commercial prospecting.'}
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3">
            <h2 className="text-lg font-bold font-heading text-slate-900 border-b border-slate-100 pb-2 flex items-center">
              4. {language === 'fr' ? 'Vos droits' : 'Your Rights'}
            </h2>
            <p>
              {language === 'fr'
                ? 'Conformément à la réglementation en vigueur, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, écrivez à contact@3mconsultingsarl.com.'
                : 'In accordance with applicable privacy regulations, you have the right to access, rectify, or request deletion of your personal data. To exercise this right, write to contact@3mconsultingsarl.com.'}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
