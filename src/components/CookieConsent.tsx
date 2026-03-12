import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { X } from 'lucide-react';

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage();

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem('cookie-consent');
    if (!hasConsented) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const content = {
    en: {
      title: 'Cookie Consent',
      message: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. By continuing to use our site, you consent to our use of cookies.',
      accept: 'Accept All',
      decline: 'Decline',
      privacy: 'Privacy Policy'
    },
    fr: {
      title: 'Consentement aux cookies',
      message: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, analyser le trafic du site et personnaliser le contenu. En continuant à utiliser notre site, vous consentez à notre utilisation des cookies.',
      accept: 'Accepter tout',
      decline: 'Refuser',
      privacy: 'Politique de confidentialité'
    }
  };

  const currentContent = content[language];

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-consent-title"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <h3 id="cookie-consent-title" className="text-lg font-semibold text-gray-900 mb-2">
              {currentContent.title}
            </h3>
            <p className="text-sm text-gray-600">
              {currentContent.message}
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <a 
              href="/privacy-policy" 
              className="text-sm text-emerald-600 hover:text-emerald-700 underline"
            >
              {currentContent.privacy}
            </a>
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors"
            >
              {currentContent.decline}
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 text-sm font-medium bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              {currentContent.accept}
            </button>
            <button
              onClick={handleAccept}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
