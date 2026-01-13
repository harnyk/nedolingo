import { Languages } from 'lucide-react';
import { useI18n } from '../contexts/I18nContext';
import { AVAILABLE_LANGUAGES } from '../locales';

export default function LanguageSwitcher() {
  const { language, changeLanguage, t } = useI18n();

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-white rounded-lg shadow-lg p-2">
        <Languages className="w-5 h-5 text-gray-600" />
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
  );
}
