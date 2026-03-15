import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Start Partnership',

    // Hero
    'hero.tagline': 'Global Enterprise • Africa Focus',
    'hero.title1': 'Global Partnerships',
    'hero.title2': 'That Transform',
    'hero.title3': 'African Economies',
    'hero.description': 'A distinguished global enterprise operating worldwide with deep expertise and specialized focus on driving sustainable economic development across Africa.',
    'hero.cta1': 'Start a Partnership',
    'hero.cta2': 'Explore Services',
    'hero.stats.years': 'Years Experience',
    'hero.stats.partners': 'Global Partners',
    'hero.stats.continents': 'Continents',
    'hero.stats.value': 'Project Value',
    'hero.video.title': 'Watch Our Story',
    'hero.video.duration': '1:17 min video',

    // About Section
    'about.tagline': 'About Us',
    'about.title': 'A Global Enterprise with African Expertise',
    'about.description': 'GPD Consulting is a distinguished global enterprise operating worldwide with deep expertise and specialized focus on Africa. With operations spanning America, Europe, and Africa, we bring world-class capabilities to drive sustainable economic development across the continent through strategic partnerships, resource development, and international trade.',
    'about.cta': 'Learn More About Us',
    'about.partners': 'Global Partners',
    'about.image.alt': 'Our team',

    // Values
    'value.respect': 'Respect',
    'value.respect.desc': 'We value diverse perspectives and foster an inclusive environment.',
    'value.trust': 'Trust',
    'value.trust.desc': 'We build robust relationships founded on reliability and accountability.',
    'value.integrity': 'Integrity',
    'value.integrity.desc': 'We conduct ourselves with unwavering integrity and ethical standards.',
    'value.transparency': 'Transparency',
    'value.transparency.desc': 'We cultivate open communication in all our endeavors.',

    // Highlights
    'highlight.1': 'Global enterprise with Africa expertise',
    'highlight.2': 'Worldwide operations across 3 continents',
    'highlight.3': 'Mining & resource development',
    'highlight.4': 'International trade & commerce',
    'highlight.5': 'Public-Private Partnership expertise',
    'highlight.6': 'Sustainable development focus',
    'highlight.7': 'Technology transfer capabilities',
    'highlight.8': 'Strategic infrastructure investments',

    // Capabilities
    'capabilities.tagline': 'Our Expertise',
    'capabilities.title': 'Comprehensive Capabilities',
    'capabilities.description': 'We boast a diverse range of expertise to cater to our partners\' specific needs, spanning from governmental affairs to project financing, mining operations, and international trade.',
    'capabilities.cta': 'View All Services',

    // Footer
    'footer.description': 'A distinguished global enterprise with specialized focus on Africa\'s economic development.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter.desc': 'Subscribe to receive updates on our latest projects and insights.',
    'footer.email.placeholder': 'Enter your email',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s discuss how we can help transform your vision into reality.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.organization': 'Organization',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.blog': 'Blog',
    'nav.contact': 'Contact',
    'nav.cta': 'Démarrer un Partenariat',

    // Hero
    'hero.tagline': 'Entreprise Mondiale • Focus Afrique',
    'hero.title1': 'Partenariats Mondiaux',
    'hero.title2': 'Qui Transforment',
    'hero.title3': 'les Économies Africaines',
    'hero.description': 'Une entreprise mondiale distinguée opérant dans le monde entier avec une expertise approfondie et un focus spécialisé sur le développement économique durable en Afrique.',
    'hero.cta1': 'Démarrer un Partenariat',
    'hero.cta2': 'Explorer les Services',
    'hero.stats.years': 'Années d\'Expérience',
    'hero.stats.partners': 'Partenaires Mondiaux',
    'hero.stats.continents': 'Continents',
    'hero.stats.value': 'Valeur des Projets',
    'hero.video.title': 'Regarder Notre Histoire',
    'hero.video.duration': 'Vidéo de 1:17 min',

    // About Section
    'about.tagline': 'À Propos de Nous',
    'about.title': 'Une Entreprise Mondiale avec Expertise Africaine',
    'about.description': 'GPD Consulting est une entreprise mondiale distinguée opérant dans le monde entier avec une expertise approfondie et un focus spécialisé sur l\'Afrique. Avec des opérations couvrant l\'Amérique, l\'Europe et l\'Afrique, nous apportons des capacités de classe mondiale pour stimuler le développement économique durable à travers le continent grâce à des partenariats stratégiques, le développement des ressources et le commerce international.',
    'about.cta': 'En Savoir Plus',
    'about.partners': 'Partenaires Mondiaux',
    'about.image.alt': 'Notre équipe',

    // Values
    'value.respect': 'Respect',
    'value.respect.desc': 'Nous valorisons les perspectives diverses et favorisons un environnement inclusif.',
    'value.trust': 'Confiance',
    'value.trust.desc': 'Nous construisons des relations solides fondées sur la fiabilité et la responsabilité.',
    'value.integrity': 'Intégrité',
    'value.integrity.desc': 'Nous nous comportons avec une intégrité et des normes éthiques inébranlables.',
    'value.transparency': 'Transparence',
    'value.transparency.desc': 'Nous cultivons une communication ouverte dans toutes nos entreprises.',

    // Highlights
    'highlight.1': 'Entreprise mondiale avec expertise africaine',
    'highlight.2': 'Opérations mondiales sur 3 continents',
    'highlight.3': 'Exploitation minière et développement des ressources',
    'highlight.4': 'Commerce international',
    'highlight.5': 'Expertise en partenariats public-privé',
    'highlight.6': 'Focus sur le développement durable',
    'highlight.7': 'Capacités de transfert de technologie',
    'highlight.8': 'Investissements stratégiques en infrastructure',

    // Capabilities
    'capabilities.tagline': 'Notre Expertise',
    'capabilities.title': 'Capacités Complètes',
    'capabilities.description': 'Nous disposons d\'une gamme diversifiée d\'expertises pour répondre aux besoins spécifiques de nos partenaires, allant des affaires gouvernementales au financement de projets, en passant par les opérations minières et le commerce international.',
    'capabilities.cta': 'Voir Tous les Services',

    // Footer
    'footer.description': 'Une entreprise mondiale distinguée avec un focus spécialisé sur le développement économique de l\'Afrique.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.newsletter': 'Infolettre',
    'footer.newsletter.desc': 'Abonnez-vous pour recevoir des mises à jour sur nos derniers projets et perspectives.',
    'footer.email.placeholder': 'Entrez votre email',
    'footer.subscribe': 'S\'abonner',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': 'Conditions d\'Utilisation',

    // Contact
    'contact.title': 'Contactez-Nous',
    'contact.subtitle': 'Discutons de la façon dont nous pouvons aider à transformer votre vision en réalité.',
    'contact.form.name': 'Nom Complet',
    'contact.form.email': 'Adresse Email',
    'contact.form.phone': 'Numéro de Téléphone',
    'contact.form.organization': 'Organisation',
    'contact.form.subject': 'Sujet',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Envoyer le Message',
    'contact.info.title': 'Informations de Contact',
    'contact.info.address': 'Adresse',
    'contact.info.phone': 'Téléphone',
    'contact.info.email': 'Email',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  useEffect(() => {
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'fr')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
