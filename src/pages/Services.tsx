import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Landmark, Globe, FolderKanban, Banknote, 
  FileSignature, Ruler, Leaf, TrendingUp, Plane,
  Zap, GraduationCap, Pickaxe, HardHat, Stethoscope,
  Wheat, Tractor, Building, ShoppingBag, ArrowUpRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const expertises = [
  { icon: Landmark, key: 'gov' },
  { icon: Globe, key: 'partnerships' },
  { icon: FolderKanban, key: 'project' },
  { icon: Banknote, key: 'finance' },
  { icon: FileSignature, key: 'negotiation' },
  { icon: Ruler, key: 'engineering' },
  { icon: Leaf, key: 'green' },
  { icon: TrendingUp, key: 'lobbying' },
  { icon: Plane, key: 'aviation' },
];

const sectors = [
  { icon: FolderKanban, key: 'pm' },
  { icon: Zap, key: 'energy' },
  { icon: Plane, key: 'aviation' },
  { icon: GraduationCap, key: 'education' },
  { icon: Pickaxe, key: 'mining' },
  { icon: HardHat, key: 'infra' },
  { icon: Stethoscope, key: 'equipment' },
  { icon: Wheat, key: 'agri' },
  { icon: Banknote, key: 'pf' },
];

const additionalServices = [
  { icon: Building, key: 'housing' },
  { icon: Tractor, key: 'agri' },
  { icon: ShoppingBag, key: 'food' },
];

const tradeActivities = [
  { icon: Wheat, key: 'food' },
  { icon: Pickaxe, key: 'mining' },
  { icon: HardHat, key: 'equip' },
];

export default function Services() {
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
            stagger: 0.08,
            duration: 0.6,
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
      title: 'Our Services - GPD Consulting | Project Finance, Mining & Infrastructure',
      description: 'Explore GPD Consulting\'s comprehensive services: strategic advisory, project financing, mining operations, infrastructure development, international trade, and Public-Private Partnerships across Africa.',
      keywords: 'GPD Consulting services, project financing Africa, mining consulting, infrastructure development, PPP, international trade, strategic advisory, Africa consulting',
    },
    fr: {
      title: 'Nos Services - GPD Consulting | Finance de Projets, Mines & Infrastructure',
      description: 'Découvrez les services complets de GPD Consulting : conseil stratégique, financement de projets, opérations minières, développement des infrastructures, commerce international et partenariats public-privé en Afrique.',
      keywords: 'services GPD Consulting, financement projets Afrique, conseil mines, développement infrastructure, PPP, commerce international, conseil stratégique, conseil Afrique',
    },
  };

  const currentSeo = seoData[language];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: language === 'fr' ? 'Services de GPD Consulting' : 'GPD Consulting Services',
    description: currentSeo.description,
    url: 'https://gdpcconsulting.ca/services',
    provider: {
      '@type': 'Organization',
      name: 'GPD Consulting',
      url: 'https://gdpcconsulting.ca',
    },
    areaServed: {
      '@type': 'Continent',
      name: 'Africa',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: language === 'fr' ? 'Nos Services' : 'Our Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Finance de Projets' : 'Project Finance',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Développement de Projets' : 'Project Development',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: language === 'fr' ? 'Partenariats Public-Privé' : 'Public-Private Partnerships',
          },
        },
      ],
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpcconsulting.ca/services"
        structuredData={structuredData}
      />
      <div ref={pageRef} className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cap_infrastructure_transport.jpg" 
            alt="Services"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-emerald-950/70" />
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">{t('services.page.tagline')}</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight">
            {t('services.page.title')} <span className="gradient-text">{t('services.page.title2')}</span>
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="animate-section py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed animate-item">
            {t('services.intro.p1')}
          </p>
        </div>
      </section>

      {/* Expertises Grid */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('services.capabilities.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {t('services.capabilities.title')} <span className="gradient-text">{t('services.capabilities.title2')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertises.map((item, index) => (
              <div 
                key={index}
                className="animate-item p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 border border-transparent hover:border-emerald-100 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <item.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {t(`exp.${item.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`exp.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Grid */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('services.sectors.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {t('services.sectors.title')} <span className="gradient-text">{t('services.sectors.title2')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((item, index) => (
              <div 
                key={index}
                className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-emerald-500/5 border border-gray-100 hover:border-emerald-100 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <item.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {t(`sec.${item.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`sec.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('services.additional.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {t('services.additional.title')} <span className="gradient-text">{t('services.additional.title2')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {additionalServices.map((item, index) => (
              <div 
                key={index}
                className="animate-item p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 border border-transparent hover:border-emerald-100 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <item.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {t(`add.${item.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`add.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trade & Commerce */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('services.trade.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {t('services.trade.title')} <span className="gradient-text">{t('services.trade.title2')}</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto mt-6">
              {t('services.trade.p1')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {tradeActivities.map((item, index) => (
              <div 
                key={index}
                className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-emerald-500/5 border border-gray-100 hover:border-emerald-100 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <item.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {t(`trade.${item.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`trade.${item.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Transfer */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="animate-item relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                <img 
                  src="/cap_energy_sustainability.jpg"
                  alt="Technology transfer"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-emerald-400/30 rounded-3xl -z-10" />
            </div>
            
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6 animate-item">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('services.tech.tagline')}</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-item leading-tight">
                {t('services.tech.title1')}<br />
                <span className="gradient-text">{t('services.tech.title2')}</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
                {t('services.tech.p1')}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8 animate-item">
                {t('services.tech.p2')}
              </p>
              
              <Link 
                to="/contact#contact-form" 
                className="inline-flex items-center gap-2 text-emerald-600 font-semibold group animate-item"
              >
                {t('services.tech.cta')}
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainable Design */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('services.sustain.tagline')}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
            {t('services.sustain.title')} <span className="gradient-text">{t('services.sustain.title2')}</span>
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
            {t('services.sustain.p1')}
          </p>
          <p className="text-gray-600 text-lg leading-relaxed animate-item">
            {t('services.sustain.p2')}
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
