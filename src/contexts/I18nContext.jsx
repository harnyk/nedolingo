import { createContext, useContext, useState, useEffect } from 'react';
import locales, { AVAILABLE_LANGUAGES, DEFAULT_LANGUAGE } from '../locales';

const I18nContext = createContext();

// Detect browser language
const getBrowserLanguage = () => {
  const browserLang = navigator.language.split('-')[0]; // e.g., 'en-US' -> 'en'
  return AVAILABLE_LANGUAGES.includes(browserLang) ? browserLang : DEFAULT_LANGUAGE;
};

// Get stored language or browser language
const getInitialLanguage = () => {
  const stored = localStorage.getItem('language');
  if (stored && AVAILABLE_LANGUAGES.includes(stored)) {
    return stored;
  }
  return getBrowserLanguage();
};

export function I18nProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const t = (key, params = {}) => {
    const keys = key.split('.');
    let value = locales[language];

    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // Fallback to English
        value = locales[DEFAULT_LANGUAGE];
        for (const k of keys) {
          if (value && typeof value === 'object') {
            value = value[k];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    if (typeof value === 'string') {
      // Replace parameters like {current} with actual values
      return value.replace(/\{(\w+)\}/g, (match, param) => {
        return params[param] !== undefined ? params[param] : match;
      });
    }

    return key; // Return key if not found
  };

  const changeLanguage = (lang) => {
    if (AVAILABLE_LANGUAGES.includes(lang)) {
      setLanguage(lang);
    }
  };

  return (
    <I18nContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within I18nProvider');
  }
  return context;
}
