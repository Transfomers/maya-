import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUpRight,
  ChevronRight,
  Copy,
  Check,
} from 'lucide-react';
import { Logo3M } from './Logo3M';
import { useLanguage } from '../context/LanguageContext';
import { RequestAssistanceModal } from './RequestAssistanceModal';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('contact@3mconsultingsarl.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  // Track scroll for sticky navbar shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.navbar.home, path: '/' },
    { name: t.navbar.services, path: '/services' },
    { name: t.navbar.about, path: '/about' },
    { name: t.navbar.join, path: '/join' },
  ];

  const isActive = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* 
        =========================================================================
        JEVELIN-STYLE TOP HEADER BAR — Logo + Contact Widgets
        =========================================================================
      */}
      <div className="bg-white py-4 px-4 sm:px-6 lg:px-8 hidden md:block border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo on the left */}
          <Link to="/" className="group flex items-center">
            <Logo3M variant="dark" size="md" withTagline={true} />
          </Link>

          {/* Contact Widgets on the right — Exact Jevelin style matching screenshot */}
          <div className="flex items-center space-x-7">
            {/* Call Us */}
            <div className="flex items-center space-x-2.5">
              <Phone className="w-5 h-5 text-[#eb583d] stroke-[1.8] flex-shrink-0" />
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#eb583d] block leading-none mb-1">
                  {language === 'fr' ? 'APPEL DIRECT' : 'CALL US'}
                </span>
                <a
                  href="tel:+237698668761"
                  className="text-xs font-bold text-slate-800 hover:text-[#eb583d] transition-colors leading-none"
                >
                  +237 698 66 87 61
                </a>
              </div>
            </div>

            {/* Official Email */}
            <div className="flex items-center space-x-2.5">
              <Mail className="w-5 h-5 text-[#eb583d] stroke-[1.8] flex-shrink-0" />
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#eb583d] block leading-none mb-1">
                  {language === 'fr' ? 'EMAIL OFFICIEL' : 'E-MAIL'}
                </span>
                <div className="flex items-center space-x-1.5 leading-none">
                  <a
                    href="mailto:contact@3mconsultingsarl.com"
                    className="text-xs font-bold text-slate-800 hover:text-[#eb583d] transition-colors"
                  >
                    contact@3mconsultingsarl.com
                  </a>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center p-0.5 text-[9px] font-semibold text-slate-400 hover:text-slate-800 transition"
                    title={language === 'fr' ? "Copier l'adresse" : "Copy email"}
                  >
                    {copiedEmail ? (
                      <Check className="w-3 h-3 text-emerald-600" />
                    ) : (
                      <Copy className="w-3 h-3 text-slate-400 hover:text-slate-700" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center space-x-2.5">
              <MapPin className="w-5 h-5 text-[#eb583d] stroke-[1.8] flex-shrink-0" />
              <div className="text-left">
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#eb583d] block leading-none mb-1">
                  {language === 'fr' ? 'LOCALISATION' : 'LOCATION'}
                </span>
                <span className="text-xs font-bold text-slate-800 block leading-none">
                  Omnisport Rue Foé, Yaoundé
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 
        =========================================================================
        JEVELIN-STYLE STICKY NAVBAR — Clean white with shadow on scroll
        =========================================================================
      */}
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md border-b border-slate-100' : 'shadow-xs border-b border-slate-200/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 md:h-[56px]">
            {/* Mobile Logo (visible only on small screens) */}
            <div className="md:hidden flex items-center">
              <Link to="/">
                <Logo3M variant="dark" size="sm" withTagline={false} />
              </Link>
            </div>

            {/* Desktop Navigation Links — Jevelin style */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`px-5 py-2 text-xs uppercase font-bold tracking-[0.1em] transition-all relative ${
                      active
                        ? 'text-jevelin-orange'
                        : 'text-slate-600 hover:text-jevelin-orange'
                    }`}
                  >
                    <span>{link.name}</span>
                    {active && (
                      <span className="absolute bottom-0 left-5 right-5 h-[2px] bg-jevelin-orange" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side: Language + Social icons style + CTA */}
            <div className="hidden md:flex items-center space-x-4">
              {/* Language Switcher — Minimal pills */}
              <div
                className="flex items-center bg-slate-50 rounded-sm p-0.5 border border-slate-200 text-xs font-bold"
                role="group"
                aria-label="Language selector"
              >
                <button
                  type="button"
                  onClick={() => setLanguage('fr')}
                  className={`px-3 py-1.5 transition-all text-[11px] tracking-wide ${
                    language === 'fr'
                      ? 'bg-jevelin-orange text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-pressed={language === 'fr'}
                >
                  FR
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1.5 transition-all text-[11px] tracking-wide ${
                    language === 'en'
                      ? 'bg-jevelin-orange text-white shadow-sm'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                  aria-pressed={language === 'en'}
                >
                  EN
                </button>
              </div>

              {/* Social icon buttons — Jevelin style bordered circles */}
              <div className="flex items-center space-x-1.5">
                <a
                  href="https://www.facebook.com/profile.php?id=100083099745810"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-slate-200 hover:border-jevelin-orange flex items-center justify-center text-slate-400 hover:text-jevelin-orange transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>

              {/* Primary CTA Button — Jevelin orange */}
              <button
                type="button"
                onClick={() => setAssistanceModalOpen(true)}
                className="inline-flex items-center px-5 py-2.5 font-heading font-extrabold text-[10px] uppercase tracking-[0.15em] text-white bg-jevelin-orange hover:bg-jevelin-orangeHover shadow-sm hover:shadow-md transition-all"
              >
                <span>{t.navbar.ctaAssistance}</span>
              </button>
            </div>

            {/* Mobile Controls */}
            <div className="flex md:hidden items-center space-x-2">
              <button
                type="button"
                onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
                className="px-2.5 py-1 text-xs font-bold bg-slate-100 text-slate-700 border border-slate-200"
              >
                {language === 'fr' ? 'EN' : 'FR'}
              </button>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-xl">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-sm uppercase font-bold tracking-wider ${
                      active
                        ? 'text-jevelin-orange bg-accent-50'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 opacity-50" />
                  </Link>
                );
              })}
            </nav>

            <div className="pt-3 border-t border-slate-100 space-y-3">
              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  setAssistanceModalOpen(true);
                }}
                className="w-full py-3.5 px-4 font-heading font-extrabold text-xs uppercase tracking-[0.15em] text-white bg-jevelin-orange hover:bg-jevelin-orangeHover text-center shadow-md flex items-center justify-center space-x-2"
              >
                <span>{t.navbar.ctaAssistance}</span>
              </button>

              <div className="p-3 bg-slate-50 space-y-2 text-xs text-slate-600">
                <div className="flex items-center">
                  <MapPin className="w-3.5 h-3.5 mr-2 text-jevelin-orange flex-shrink-0" />
                  <span>Omnisport, Rue Foé, Yaoundé</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-2 text-jevelin-orange flex-shrink-0" />
                  <a href="tel:+237698668761" className="hover:underline font-bold">
                    +237 698 66 87 61
                  </a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-3.5 h-3.5 mr-2 text-jevelin-orange flex-shrink-0" />
                  <a href="mailto:contact@3mconsultingsarl.com" className="hover:underline">
                    contact@3mconsultingsarl.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Global Request Assistance Modal */}
      <RequestAssistanceModal
        isOpen={assistanceModalOpen}
        onClose={() => setAssistanceModalOpen(false)}
      />
    </>
  );
};
