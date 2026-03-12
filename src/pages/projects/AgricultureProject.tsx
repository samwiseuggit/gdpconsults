import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Wheat, TrendingUp, Droplets, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { key: 'farmers', value: '10,000+' },
  { key: 'hectares', value: '50,000' },
  { key: 'yield', value: '40%' },
  { key: 'timeline', value: '2023-2028' },
];

const highlights = [
  'project.agri.highlight.1',
  'project.agri.highlight.2',
  'project.agri.highlight.3',
  'project.agri.highlight.4',
  'project.agri.highlight.5',
];

export default function AgricultureProject() {
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
      title: 'Agricultural Transformation - GPD Consulting | Modern Farming Africa',
      description: 'A large-scale agricultural transformation project empowering 10,000+ farmers across 50,000 hectares with modern techniques, irrigation, and market access.',
      keywords: 'agricultural transformation Africa, modern farming, agricultural development, farmer empowerment, irrigation project, GPD Consulting agriculture',
    },
    fr: {
      title: 'Transformation Agricole - GPD Consulting | Agriculture Moderne Afrique',
      description: 'Un projet de transformation agricole a grande echelle autonomisant plus de 10 000 agriculteurs sur 50 000 hectares avec des techniques modernes, l\'irrigation et l\'acces aux marches.',
      keywords: 'transformation agricole Afrique, agriculture moderne, developpement agricole, autonomisation agriculteurs, projet irrigation, GPD Consulting agriculture',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Projets' : 'Projects', url: 'https://gdpconsults.ca/projects' },
    { name: language === 'fr' ? 'Transformation Agricole' : 'Agricultural Transformation', url: 'https://gdpconsults.ca/projects/agriculture' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: language === 'fr' ? 'Transformation Agricole' : 'Agricultural Transformation',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/projects/agriculture',
    location: {
      '@type': 'Continent',
      name: 'Africa',
    },
    sponsor: {
      '@type': 'Organization',
      name: 'GPD Consulting',
      url: 'https://gdpconsults.ca',
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpconsults.ca/projects/agriculture"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
        {/* Page Header */}
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/cap_agriculture_water.webp" 
              alt="Agricultural Transformation"
              className="w-full h-full object-cover opacity-30"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-green-950/70" />
          </div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Wheat className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Projet Vedette' : 'Featured Project'}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
              {language === 'fr' ? 'Transformation ' : 'Agricultural '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">{language === 'fr' ? 'Agricole' : 'Transformation'}</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              {language === 'fr' 
                ? 'Autonomiser les agriculteurs avec des techniques modernes.'
                : 'Empowering farmers with modern techniques.'}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-green-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wide">
                    {t(`proj.agri.${stat.key}`)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 rounded-full mb-6 animate-item">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  <span className="text-green-600 text-xs font-semibold tracking-wide uppercase">
                    {language === 'fr' ? 'Apercu du Projet' : 'Project Overview'}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
                  {language === 'fr' ? 'Agriculture ' : 'Modern '}
                  <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">{language === 'fr' ? 'Moderne' : 'Farming'}</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
                  {language === 'fr'
                    ? 'Ce projet de transformation agricole vise a autonomiser 10 000 agriculteurs avec des techniques modernes, des systemes d\'irrigation et un acces aux marches. Le projet couvre 50 000 hectares et vise a augmenter les rendements de 40%.'
                    : 'This agricultural transformation project aims to empower 10,000 farmers with modern techniques, irrigation systems, and market access. The project covers 50,000 hectares and aims to increase yields by 40%.'}
                </p>
                <div className="animate-item flex items-center gap-4 p-4 bg-green-50 rounded-2xl">
                  <Droplets className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">{language === 'fr' ? 'Irrigation' : 'Irrigation'}</div>
                    <div className="text-gray-500 text-sm">{language === 'fr' ? 'Systemes d\'irrigation modernes' : 'Modern irrigation systems'}</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-item relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-green-500/10">
                  <img 
                    src="/cap_agriculture_water.webp"
                    alt="Agricultural Transformation"
                    className="w-full aspect-[4/3] object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-green-400/30 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                {language === 'fr' ? 'Points ' : 'Project '}
                <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">{language === 'fr' ? 'Forts' : 'Highlights'}</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((key, index) => (
                <div 
                  key={index}
                  className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-green-500/5 border border-gray-100 hover:border-green-100 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Impact */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-green-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-green-600" />
              <span className="text-green-600 text-xs font-semibold tracking-wide uppercase">
                {language === 'fr' ? 'Impact' : 'Impact'}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
              {language === 'fr' ? 'Impact ' : 'Economic '}
              <span className="bg-gradient-to-r from-green-500 to-green-600 bg-clip-text text-transparent">{language === 'fr' ? 'Economique' : 'Impact'}</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-item">
              {language === 'fr'
                ? 'Ce projet transformera la vie de 10 000 agriculteurs et de leurs familles, ameliorant la securite alimentaire et creant des opportunites economiques dans les communautes rurales. L\'augmentation des rendements de 40% contribuera significativement a l\'economie locale.'
                : 'This project will transform the lives of 10,000 farmers and their families, improving food security and creating economic opportunities in rural communities. The 40% yield increase will significantly contribute to the local economy.'}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-section py-24 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-item">
              {language === 'fr' ? 'Interesse par ' : 'Interested in '}
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">{language === 'fr' ? 'ce Projet ?' : 'This Project?'}</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-item">
              {language === 'fr'
                ? 'Contactez-nous pour en savoir plus sur les opportunites de partenariat et d\'investissement.'
                : 'Contact us to learn more about partnership and investment opportunities.'}
            </p>
            <Link 
              to="/contact#contact-form" 
              className="inline-flex items-center gap-3 bg-green-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-green-400 transition-all duration-300 group animate-item"
            >
              <span>{language === 'fr' ? 'Nous Contacter' : 'Contact Us'}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
