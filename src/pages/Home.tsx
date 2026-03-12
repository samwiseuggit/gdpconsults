import HeroSection from '../sections/HeroSection';
import CapabilitiesSection from '../sections/CapabilitiesSection';
import AboutSection from '../sections/AboutSection';
import ProjectSection from '../sections/ProjectSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import ContactSection from '../sections/ContactSection';
import SEO from '../components/SEO';
import { useLanguage } from '../contexts/LanguageContext';

export default function Home() {
  const { language } = useLanguage();

  const seoData = {
    en: {
      title: 'GPD Consulting - Global Partnerships for Africa\'s Economic Development',
      description: 'GPD Consulting is a distinguished global enterprise specializing in strategic partnerships, project financing, mining operations, and infrastructure development across Africa. Transforming economies through sustainable development.',
      keywords: 'GPD Consulting, Green Diamond Partnership, Africa development, project financing, mining, infrastructure, PPP, consulting Africa, economic development',
    },
    fr: {
      title: 'GPD Consulting - Partenariats Mondiaux pour le Développement Économique de l\'Afrique',
      description: 'GPD Consulting est une entreprise mondiale distinguée spécialisée dans les partenariats stratégiques, le financement de projets, les opérations minières et le développement des infrastructures en Afrique. Transformer les économies grâce au développement durable.',
      keywords: 'GPD Consulting, Green Diamond Partnership, développement Afrique, financement projets, mines, infrastructure, PPP, conseil Afrique, développement économique',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: language === 'fr' ? 'GPD Consulting - Accueil' : 'GPD Consulting - Home',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/',
    mainEntity: {
      '@type': 'Organization',
      name: 'GPD Consulting',
      description: currentSeo.description,
      url: 'https://gdpconsults.ca',
      logo: 'https://gdpconsults.ca/logo-white-bg.svg',
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpconsults.ca/"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div className="bg-white">
        <HeroSection />
        <CapabilitiesSection />
        <AboutSection />
        <ProjectSection />
        <TestimonialsSection />
        <ContactSection />
      </div>
    </>
  );
}
