import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-emerald-500" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
          language === 'en'
            ? 'bg-emerald-500 text-white border-emerald-500'
            : 'text-gray-700 bg-white border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 border ${
          language === 'fr'
            ? 'bg-emerald-500 text-white border-emerald-500'
            : 'text-gray-700 bg-white border-gray-200 hover:border-emerald-300 hover:text-emerald-600'
        }`}      >
        FR
      </button>
    </div>
  );
}
