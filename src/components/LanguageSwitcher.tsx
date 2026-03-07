import { useLanguage } from '../contexts/LanguageContext';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4 text-gray-400" />
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
          language === 'en'
            ? 'bg-emerald-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('fr')}
        className={`px-3 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
          language === 'fr'
            ? 'bg-emerald-500 text-white'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        FR
      </button>
    </div>
  );
}
