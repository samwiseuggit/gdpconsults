import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Banknote, TrendingUp, Shield, Globe, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Banknote, key: 'capital' },
  { icon: TrendingUp, key: 'structuring' },
  { icon: Shield, key: 'risk' },
  { icon: Globe, key: 'international' },
];

const benefits = [
  'service.pf.benefit.1',
  'service.pf.benefit.2',
  'service.pf.benefit.3',
  'service.pf.benefit.4',
  'service.pf.benefit.5',
];

export default function ProjectFinance() {
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
      title: 'Project Finance Services - GPD Consulting | Infrastructure Funding Solutions',
      description: 'Expert project finance services for infrastructure, energy, and development projects across Africa. We structure funding solutions that turn visionary projects into reality.',
      keywords: 'project finance Africa, infrastructure funding, development financing, PPP finance, energy project funding, Africa investment',
    },
    fr: {
      title: 'Services de Financement de Projets - GPD Consulting | Solutions de Financement d\'Infrastructure',
      description: 'Services experts de financement de projets pour les infrastructures, l\'énergie et les projets de développement en Afrique. Nous structurons des solutions de financement qui transforment les projets visionnaires en réalité.',
      keywords: 'financement projets Afrique, financement infrastructure, financement développement, financement PPP, financement énergie, investissement Afrique',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Services' : 'Services', url: 'https://gdpconsults.ca/services' },
    { name: language === 'fr' ? 'Finance de Projets' : 'Project Finance', url: 'https://gdpconsults.ca/services/project-finance' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? 'Finance de Projets' : 'Project Finance',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/services/project-finance',
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
        canonicalUrl="https://gdpconsults.ca/services/project-finance"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
        {/* Page Header */}
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/cap_project_finance.webp" 
              alt="Project Finance"
              className="w-full h-full object-cover opacity-20"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-emerald-950/70" />
          </div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Nos Services' : 'Our Services'}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
              {language === 'fr' ? 'Finance de ' : 'Project '}
              <span className="gradient-text">{language === 'fr' ? 'Projets' : 'Finance'}</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              {language === 'fr' 
                ? 'Des solutions de financement structurées qui transforment les projets visionnaires en réalité.'
                : 'Structured funding solutions that turn visionary projects into reality.'}
            </p>
          </div>
        </section>

        {/* Overview */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
                {language === 'fr' ? 'Aperçu' : 'Overview'}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
              {language === 'fr' ? 'Financement ' : 'Funding '}
              <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-item">
              {language === 'fr'
                ? 'Notre équipe d\'experts en financement de projets possède une vaste expérience dans la structuration de solutions de financement complexes pour les projets d\'infrastructure, d\'énergie et de développement à travers l\'Afrique. Nous travaillons avec des institutions financières internationales, des banques de développement et des investisseurs privés pour sécuriser le capital nécessaire à la réalisation de vos projets.'
                : 'Our project finance team has extensive experience structuring complex funding solutions for infrastructure, energy, and development projects across Africa. We work with international financial institutions, development banks, and private investors to secure the capital needed to bring your projects to life.'}
            </p>
          </div>
        </section>

        {/* Features Grid */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                {language === 'fr' ? 'Nos ' : 'Our '}
                <span className="gradient-text">{language === 'fr' ? 'Expertises' : 'Expertise'}</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-emerald-500/5 border border-gray-100 hover:border-emerald-100 transition-all duration-500 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                    <feature.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3">
                    {t(`service.pf.${feature.key}.title`)}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t(`service.pf.${feature.key}.desc`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6 animate-item">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
                    {language === 'fr' ? 'Avantages' : 'Benefits'}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
                  {language === 'fr' ? 'Pourquoi Choisir ' : 'Why Choose '}
                  <span className="gradient-text">GPD Consulting</span>
                </h2>
                <div className="space-y-4">
                  {benefits.map((key, index) => (
                    <div key={index} className="animate-item flex items-start gap-4 p-4 bg-gray-50 rounded-2xl">
                      <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600">{t(key)}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="animate-item relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                  <img 
                    src="/cap_project_finance.webp"
                    alt="Project Finance"
                    className="w-full aspect-[4/3] object-cover"
                    width="800"
                    height="600"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-emerald-400/30 rounded-3xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-section py-24 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-item">
              {language === 'fr' ? 'Prêt à ' : 'Ready to '}
              <span className="gradient-text">{language === 'fr' ? 'Financer Votre Projet ?' : 'Finance Your Project?'}</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-item">
              {language === 'fr'
                ? 'Contactez-nous pour discuter de vos besoins en financement et découvrir comment nous pouvons vous aider.'
                : 'Contact us to discuss your financing needs and discover how we can help.'}
            </p>
            <Link 
              to="/contact#contact-form" 
              className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-emerald-400 transition-all duration-300 group animate-item"
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
