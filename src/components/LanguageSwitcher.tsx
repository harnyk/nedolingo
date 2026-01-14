import { Languages } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { AVAILABLE_LANGUAGES } from '../locales';

export default function LanguageSwitcher() {
  const { language, changeLanguage, t } = useI18n();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative group">
        <button
          type="button"
          aria-label="Language"
          className="flex items-center gap-2 bg-white rounded-lg shadow-lg px-3 py-2 text-gray-700 hover:text-gray-900 transition-colors"
        >
          <Languages className="w-5 h-5 text-gray-600" />
          <span className="text-xs font-semibold tracking-widest">
            {language.slice(0, 2).toUpperCase()}
          </span>
        </button>
        <div className="absolute right-0 mt-2 w-max rounded-lg bg-white shadow-lg p-2 flex items-center gap-2 opacity-0 scale-95 pointer-events-none transition-all duration-150 group-focus-within:opacity-100 group-focus-within:scale-100 group-focus-within:pointer-events-auto">
          {AVAILABLE_LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => changeLanguage(lang)}
              className={`px-3 py-1 rounded text-sm font-medium transition-all duration-200 ${
                language === lang
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
              data-testid={`language-button-${lang}`}
            >
              {t(`language.${lang}`)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
