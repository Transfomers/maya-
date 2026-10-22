import React, { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Language, TranslationData, translations } from '../content/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [language, setLanguageState] = useState<Language>(() => {
    // 1. Check URL param
    const paramLang = searchParams.get('lang');
    if (paramLang === 'en' || paramLang === 'fr') {
      return paramLang;
    }
    // 2. Check localStorage
    const saved = localStorage.getItem('3m_language');
    if (saved === 'en' || saved === 'fr') {
      return saved;
    }
    // 3. Default to French
    return 'fr';
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem('3m_language', newLang);
    document.documentElement.lang = newLang;
  };

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  // Sync with URL query parameter changes if present
  useEffect(() => {
    const paramLang = searchParams.get('lang');
    if (paramLang === 'en' || paramLang === 'fr') {
      if (paramLang !== language) {
        setLanguageState(paramLang);
        localStorage.setItem('3m_language', paramLang);
      }
    }
  }, [searchParams]);

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
};
