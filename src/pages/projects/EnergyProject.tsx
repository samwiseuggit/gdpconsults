import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Leaf, Sun, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { key: 'capacity', value: '200MW' },
  { key: 'homes', value: '500K' },
  { key: 'co2', value: '1M tons' },
  { key: 'timeline', value: '2024-2027' },
];

const highlights = [
  'project.energy.highlight.1',
  'project.energy.highlight.2',
  'project.energy.highlight.3',
  'project.energy.highlight.4',
  'project.energy.highlight.5',
];

export default function EnergyProject() {
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
      title: 'Renewable Energy Project - GPD Consulting | Clean Energy for Africa',
      description: 'A 200MW renewable energy project bringing clean, sustainable power to 500,000 homes across Africa. Reducing CO2 emissions by 1 million tons annually.',
      keywords: 'renewable energy Africa, solar power Africa, clean energy project, sustainable energy, green energy Africa, GPD Consulting energy',
    },
    fr: {
      title: 'Projet d\'Énergie Renouvelable - GPD Consulting | Énergie Propre pour l\'Afrique',
      description: 'Un projet d\'énergie renouvelable de 200MW apportant une énergie propre et durable à 500 000 foyers en Afrique. Réduction des émissions de CO2 de 1 million de tonnes par an.',
      keywords: 'énergie renouvelable Afrique, énergie solaire Afrique, projet énergie propre, énergie durable, énergie verte Afrique, GPD Consulting énergie',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Projets' : 'Projects', url: 'https://gdpconsults.ca/projects' },
    { name: language === 'fr' ? 'Énergie Renouvelable' : 'Renewable Energy', url: 'https://gdpconsults.ca/projects/energy' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: language === 'fr' ? 'Énergie Renouvelable' : 'Renewable Energy',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/projects/energy',
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
        canonicalUrl="https://gdpconsults.ca/projects/energy"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
        {/* Page Header */}
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/cap_energy_sustainability.webp" 
              alt="Renewable Energy"
              className="w-full h-full object-cover opacity-30"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-amber-950/70" />
          </div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <Sun className="w-4 h-4 text-amber-400" />
              <span className="text-amber-400 text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Projet Vedette' : 'Featured Project'}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
              {language === 'fr' ? 'Énergie ' : 'Renewable '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                {language === 'fr' ? 'Renouvelable' : 'Energy'}
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              {language === 'fr' 
                ? 'Apporter une énergie propre et durable à des centaines de milliers de foyers.'
                : 'Bringing clean, sustainable power to hundreds of thousands of homes.'}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-amber-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wide">
                    {t(`proj.energy.${stat.key}`)}
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
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-amber-50 rounded-full mb-6 animate-item">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  <span className="text-amber-600 text-xs font-semibold tracking-wide uppercase">
                    {language === 'fr' ? 'Aperçu du Projet' : 'Project Overview'}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
                  {language === 'fr' ? 'Énergie ' : 'Clean '}
                  <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                    {language === 'fr' ? 'Propre pour Tous' : 'Energy for All'}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
                  {language === 'fr'
                    ? 'Ce projet d\'énergie renouvelable de 200MW utilisera une combinaison de technologies solaires et éoliennes pour fournir une électricité propre et abordable à 500 000 foyers. Le projet réduira les émissions de CO2 d\'environ 1 million de tonnes par an, contribuant aux objectifs de développement durable de la région.'
                    : 'This 200MW renewable energy project will use a combination of solar and wind technologies to provide clean, affordable electricity to 500,000 homes. The project will reduce CO2 emissions by approximately 1 million tons annually, contributing to the region\'s sustainable development goals.'}
                </p>
                <div className="animate-item flex items-center gap-4 p-4 bg-amber-50 rounded-2xl">
                  <Leaf className="w-6 h-6 text-amber-600" />
                  <div>
                    <div className="font-semibold text-gray-900">{language === 'fr' ? 'Impact Environnemental' : 'Environmental Impact'}</div>
                    <div className="text-gray-500 text-sm">{language === 'fr' ? '1M tonnes de CO2 évitées par an' : '1M tons of CO2 avoided annually'}</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-item relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-500/10">
                  <img 
                    src="/cap_energy_sustainability.webp"
                    alt="Renewable Energy"
                    className="w-full aspect-[4/3] object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-amber-400/30 rounded-3xl -z-10" />
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
                <span className="bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent">
                  {language === 'fr' ? 'Forts' : 'Highlights'}
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((key, index) => (
                <div 
                  key={index}
                  className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-amber-500/5 border border-gray-100 hover:border-amber-100 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-amber-600" />
                  </div>
                  <p className="text-gray-600 leading-relaxed">{t(key)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-section py-24 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-item">
              {language === 'fr' ? 'Intéressé par ' : 'Interested in '}
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                {language === 'fr' ? 'ce Projet ?' : 'This Project?'}
              </span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-item">
              {language === 'fr'
                ? 'Contactez-nous pour en savoir plus sur les opportunités de partenariat et d\'investissement.'
                : 'Contact us to learn more about partnership and investment opportunities.'}
            </p>
            <Link 
              to="/contact#contact-form" 
              className="inline-flex items-center gap-3 bg-amber-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 group animate-item"
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
