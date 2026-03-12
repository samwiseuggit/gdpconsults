import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Replace with your GA4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: Replace with your actual GA4 ID

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function GoogleAnalytics() {
  const location = useLocation();

  useEffect(() => {
    // Check if user has consented to cookies
    const consent = localStorage.getItem('cookie-consent');
    if (consent !== 'accepted') return;

    // Load GA4 script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    // Initialize GA4
    window.dataLayer = window.dataLayer || [];
    window.gtag = function(...args: any[]) {
      window.dataLayer.push(args);
    };
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      send_page_view: false, // We'll handle page views manually
    });

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Track page views
  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (consent !== 'accepted' || !window.gtag) return;

    window.gtag('event', 'page_view', {
      page_path: location.pathname,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [location]);

  return null;
}
