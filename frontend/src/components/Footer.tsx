import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Mail,
  Phone,
  Clock,
  Copy,
  Check,
  ExternalLink,
  ShieldCheck,
  Globe2,
  ArrowUpRight,
  MessageSquare,
} from 'lucide-react';
import { Logo3M } from './Logo3M';
import { useLanguage } from '../context/LanguageContext';
import { RequestAssistanceModal } from './RequestAssistanceModal';

export const Footer: React.FC = () => {
  const { language, t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@3mconsultingsarl.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <>
      {/* 
        =========================================================================
        JEVELIN-STYLE PRE-FOOTER CONTACT STRIP
        Contact CTA button + 4 icon widgets in a row
        =========================================================================
      */}
      <div className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center justify-between gap-6">
          {/* Action CTA Button */}
          <div className="flex-shrink-0">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center px-8 py-3.5 font-heading font-extrabold text-xs uppercase tracking-[0.15em] text-white bg-jevelin-dark hover:bg-slate-800 shadow-sm transition-all"
            >
              <span>{language === 'fr' ? 'CONTACTEZ-NOUS' : 'CONTACT US'}</span>
            </button>
          </div>

          {/* Contact Points */}
          <div className="flex flex-wrap items-center justify-center xl:justify-end gap-8 sm:gap-10 text-xs">
            {/* Address */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-[0.15em] text-slate-400 block text-[10px]">
                  {language === 'fr' ? 'ADRESSE' : 'ADDRESS'}
                </span>
                <span className="font-semibold text-slate-900">Omnisport, Rue Foé, Yaoundé</span>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0">
                <Mail className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-[0.15em] text-slate-400 block text-[10px]">
                  {language === 'fr' ? 'EMAIL OFFICIEL' : 'OFFICIAL EMAIL'}
                </span>
                <a
                  href="mailto:contact@3mconsultingsarl.com"
                  className="font-semibold text-slate-900 hover:text-jevelin-orange transition-colors"
                >
                  contact@3mconsultingsarl.com
                </a>
              </div>
            </div>

            {/* Telephone */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-[0.15em] text-slate-400 block text-[10px]">
                  {language === 'fr' ? 'TÉLÉPHONE' : 'TELEPHONE'}
                </span>
                <a
                  href="tel:+237673841821"
                  className="font-semibold text-slate-900 hover:text-jevelin-orange transition-colors"
                >
                  +237 673 84 18 21
                </a>
              </div>
            </div>

            {/* Work Hours */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-slate-200 bg-slate-50 text-slate-700 flex items-center justify-center flex-shrink-0">
                <Clock className="w-4 h-4 stroke-[1.75]" />
              </div>
              <div>
                <span className="font-bold uppercase tracking-[0.15em] text-slate-400 block text-[10px]">
                  {language === 'fr' ? 'HORAIRES' : 'WORK HOURS'}
                </span>
                <span className="font-semibold text-slate-900">Lun–Ven: 7h30–17h30</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =========================================================================
        OFFICE LOCATION MAP STRIP — Omnisport Rue Foé, Yaoundé
        =========================================================================
      */}
      <div className="bg-slate-900 border-t border-slate-800 py-10 px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-jevelin-orange block font-heading">
                {language === 'fr' ? 'SIÈGE SOCIAL · YAOUNDÉ, CAMEROUN' : 'HEAD OFFICE · YAOUNDÉ, CAMEROON'}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white mt-1">
                {language === 'fr' ? 'Plan d’Accès au Siège — Omnisport Rue Foé' : 'Office Access Map — Omnisport Rue Foé'}
              </h3>
              <p className="text-xs text-slate-400 mt-1 flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-jevelin-orange flex-shrink-0" />
                <span>
                  {language === 'fr'
                    ? 'Omnisport Rue Foé, Yaoundé — À proximité du Stade Omnisport (B.P. 35216 Yaoundé)'
                    : 'Omnisport Rue Foé, Yaoundé — Near Omnisport Stadium (P.O. Box 35216 Yaoundé)'}
                </span>
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Omnisport+Rue+Foé,+Yaoundé,+Cameroun"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg text-xs font-bold transition self-start sm:self-auto"
            >
              <span>{language === 'fr' ? 'Ouvrir l’itinéraire Google Maps' : 'Open in Google Maps'}</span>
              <ExternalLink className="w-3.5 h-3.5 ml-2 opacity-80" />
            </a>
          </div>

          <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 relative">
            <iframe
              title="3M Consulting SARL Siège Yaoundé Google Maps"
              src="https://maps.google.com/maps?q=Omnisport+Rue+Fo%C3%A9,+Yaound%C3%A9,+Cameroun&t=&z=16&ie=UTF8&iwloc=&output=embed"
              className="w-full h-full border-0"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>

      {/* 
        =========================================================================
        DARK FOOTER — Jevelin-style 4-column layout
        =========================================================================
      */}
      <footer className="bg-jevelin-darker text-slate-400">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
            {/* Col 1: Brand & Bio (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <Link to="/">
                <Logo3M variant="light" size="md" withTagline={true} />
              </Link>
              <p className="text-sm text-slate-400 leading-relaxed max-w-md">
                {t.footer.aboutSummary}
              </p>
              <div className="pt-1 text-xs text-slate-400">
                <span>
                  {language === 'fr' ? 'Site officiel : ' : 'Official site: '}
                  <strong className="text-slate-200 font-semibold">3mconsultingsarl.com</strong>
                </span>
              </div>

              {/* Social Icons — Jevelin bordered circles */}
              <div className="flex items-center space-x-2 pt-2">
                <a
                  href="https://www.facebook.com/share/1FftJwk51R/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-jevelin-orange flex items-center justify-center text-slate-400 hover:text-jevelin-orange transition-all"
                  aria-label="Page Facebook 3M Consulting"
                  title="Page Facebook 3M Consulting"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>

                <a
                  href="https://vt.tiktok.com/ZSgXqLqXu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-jevelin-orange flex items-center justify-center text-slate-400 hover:text-jevelin-orange transition-all"
                  aria-label="TikTok 3M Consulting"
                  title="TikTok 3M Consulting"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.27 6.27 0 0 0 1.95-4.54V8.41a8.28 8.28 0 0 0 4.82 1.54V6.69z"/>
                  </svg>
                </a>

                <a
                  href="https://wa.me/237673841821"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/20 hover:border-emerald-500 flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-all"
                  aria-label="WhatsApp 3M Consulting"
                  title="WhatsApp 3M Consulting"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Col 2: Services (4 cols) */}
            <div className="lg:col-span-4 space-y-5">
              <h4 className="text-sm font-bold text-white font-heading">
                {t.footer.servicesHeader}
              </h4>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {t.whatWeOffer.services.map((svc) => (
                  <li key={svc.id}>
                    <Link to={`/services#${svc.id}`} className="hover:text-white transition-colors block">
                      {svc.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Navigation & Links (3 cols) */}
            <div className="lg:col-span-3 space-y-5">
              <h4 className="text-sm font-bold text-white font-heading">
                {t.footer.navigationHeader}
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/" className="hover:text-white transition-colors">
                    {t.navbar.home}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white transition-colors">
                    {t.navbar.services}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-white transition-colors">
                    {t.navbar.about}
                  </Link>
                </li>
                <li>
                  <Link to="/join" className="hover:text-white transition-colors">
                    {t.navbar.join}
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="hover:text-white transition-colors">
                    {t.footer.privacyPolicy}
                  </Link>
                </li>
              </ul>

              <div className="pt-3 flex flex-wrap gap-2">
                <a
                  href="https://www.facebook.com/share/1FftJwk51R/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3.5 py-2 bg-white/[0.04] hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition group rounded"
                  title="Page Facebook 3M Consulting"
                >
                  <svg className="w-3.5 h-3.5 mr-2 fill-current text-[#1877F2]" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-60" />
                </a>

                <a
                  href="https://vt.tiktok.com/ZSgXqLqXu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3.5 py-2 bg-white/[0.04] hover:bg-white/10 text-white text-xs font-bold border border-white/10 transition group rounded"
                  title="Page TikTok 3M Consulting"
                >
                  <svg className="w-3.5 h-3.5 mr-2 fill-current text-[#EE1D52]" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.5 6.27 6.27 0 0 0 1.95-4.54V8.41a8.28 8.28 0 0 0 4.82 1.54V6.69z"/>
                  </svg>
                  <span>TikTok</span>
                  <ExternalLink className="w-3 h-3 ml-1.5 opacity-60" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="border-t border-slate-800 py-6 px-4 sm:px-6 lg:px-8 text-xs text-slate-500">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>
              © {new Date().getFullYear()} 3M Consulting SARL · {t.footer.rightsReserved} · Yaoundé, Cameroun.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy" className="hover:text-slate-300 transition-colors">
                {t.footer.privacyPolicy}
              </Link>
              <Link to="/contact" className="hover:text-slate-300 transition-colors">
                {t.navbar.contact}
              </Link>
              <Link to="/admin" className="text-slate-600 hover:text-slate-400 transition-colors">
                {t.navbar.admin}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Global Modal */}
      <RequestAssistanceModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
};
