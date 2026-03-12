import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plane, Building2, Globe, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Building2, key: 'infrastructure' },
  { icon: Globe, key: 'operations' },
  { icon: TrendingUp, key: 'consulting' },
  { icon: Plane, key: 'partnerships' },
];

const benefits = [
  'service.aviation.benefit.1',
  'service.aviation.benefit.2',
  'service.aviation.benefit.3',
  'service.aviation.benefit.4',
  'service.aviation.benefit.5',
];

export default function AviationIndustry() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
        gsap.fromTo(section.querySelectorAll('.animate-item'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            }
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const seoData = {
    en: {
      title: 'Aviation Industry - GPD Consulting | Airport Development Africa',
      description: 'Comprehensive aviation industry services including airport development, operations consulting, and strategic partnerships for African aviation growth.',
      keywords: 'aviation industry Africa, airport development, aviation consulting, airport operations, aviation partnerships, GPD Consulting',
    },
    fr: {
      title: 'Industrie Aeronautique - GPD Consulting | Developpement Aeroportuaire Afrique',
      description: 'Services complets pour l\'industrie aeronautique incluant le developpement aeroportuaire, le conseil en operations et les partenariats strategiques pour la croissance de l\'aviation africaine.',
      keywords: 'industrie aeronautique Afrique, developpement aeroportuaire, conseil aviation, operations aeroportuaires, partenariats aviation, GPD Consulting',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Services' : 'Services', url: 'https://gdpconsults.ca/services' },
    { name: language === 'fr' ? 'Industrie Aeronautique' : 'Aviation Industry', url: 'https://gdpconsults.ca/services/aviation-industry' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? 'Industrie Aeronautique' : 'Aviation Industry',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/services/aviation-industry',
    provider: {
      '@type': 'Organization',
      name: 'GPD Consulting',
      url: 'https://gdpconsults.ca',
    },
    areaServed: {
      '@type': 'Continent',
      name: 'Africa',
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpconsults.ca/services/aviation-industry"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/project_aviation_panorama.webp" 
              alt="Aviation Industry"
              className="w-full h-full object-cover opacity-20"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-blue-950/70" />
          </div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
              <span className="text-blue-400 text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Nos Services' : 'Our Services'}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
              {language === 'fr' ? 'Industrie ' : 'Aviation '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{language === 'fr' ? 'Aeronautique' : 'Industry'}</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              {language === 'fr' 
                ? 'Propulser la croissance de l\'aviation en Afrique.'
                : 'Propelling aviation growth in Africa.'}
            </p>
          </div>
        </section>

        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
              <span className="text-blue-600 text-xs font-semibold tracking-wide uppercase">
                {language === 'fr' ? 'Apercu' : 'Overview'}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
              {language === 'fr' ? 'Excellence ' : 'Aviation '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">{language === 'fr' ? 'Aeronautique' : 'Excellence'}</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-item">
              {language === 'fr'
                ? 'Notre equipe d\'experts en aviation possede une experience approfondie dans le developpement aeroportuaire, les operations et les partenariats strategiques. Nous contribuons a la croissance de l\'aviation africaine en fournissant des solutions innovantes et durables.'
                : 'Our aviation team has extensive experience in airport development, operations, and strategic partnerships. We contribute to African aviation growth by providing innovative and sustainable solutions.'}
            </p>
          </div>
        </section>

        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                {language === 'fr' ? 'Nos ' : 'Our '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">{language === 'fr' ? 'Services' : 'Services'}</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 border border-gray-100 hover:border-blue-100 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-blue-400 group-hover:to-blue-600">
                    <feature.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    {t(`service.aviation.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t(`service.aviation.${feature.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-6 animate-item">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-blue-600 text-xs font-semibold tracking-wide uppercase">
                    {language === 'fr' ? 'Avantages' : 'Benefits'}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
                  {language === 'fr' ? 'Pourquoi ' : 'Why '}
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">{language === 'fr' ? 'Nous Choisir' : 'Choose Us'}</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((key, index) => (
                    <div key={index} className="animate-item flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                      <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{t(key)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="animate-item relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
                  <img 
                    src="/project_aviation_panorama.webp"
                    alt="Aviation Industry"
                    className="w-full aspect-[4/3] object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-blue-400/30 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        <section className="animate-section py-24 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-item">
              {language === 'fr' ? 'Pret a ' : 'Ready to '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">{language === 'fr' ? 'Decoller ?' : 'Take Off?'}</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-item">
              {language === 'fr'
                ? 'Contactez-nous pour discuter de vos projets dans l\'industrie aeronautique.'
                : 'Contact us to discuss your aviation industry projects.'}
            </p>
            <Link 
              to="/contact#contact-form" 
              className="inline-flex items-center gap-3 bg-blue-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 group animate-item"
            >
              <span>{language === 'fr' ? 'Discuter de Votre Projet' : 'Discuss Your Project'}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
