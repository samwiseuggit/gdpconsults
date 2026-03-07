import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, Plane, Building2, Zap, Wheat, HardHat, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: Plane,
    key: 'aviation',
    image: '/project_aviation_panorama.jpg',
    stats: [
      { key: 'investment', value: '$500M+' },
      { key: 'capacity', value: '10M+' },
      { key: 'timeline', value: '2024-2028' }
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building2,
    key: 'housing',
    image: '/cap_housing_urban.jpg',
    stats: [
      { key: 'units', value: '5,000+' },
      { key: 'families', value: '20,000' },
      { key: 'area', value: '150 ha' }
    ],
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Zap,
    key: 'energy',
    image: '/cap_energy_sustainability.jpg',
    stats: [
      { key: 'capacity', value: '200MW' },
      { key: 'homes', value: '500K' },
      { key: 'co2', value: '1M tons' }
    ],
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Wheat,
    key: 'agri',
    image: '/cap_agriculture_water.jpg',
    stats: [
      { key: 'farmers', value: '10,000+' },
      { key: 'hectares', value: '50,000' },
      { key: 'yield', value: '40%' }
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: HardHat,
    key: 'infra',
    image: '/cap_infrastructure_transport.jpg',
    stats: [
      { key: 'projects', value: '25+' },
      { key: 'investment', value: '$1B+' },
      { key: 'jobs', value: '50,000' }
    ],
    color: 'from-purple-500 to-purple-600'
  }
];

const objectiveKeys = [
  'projects.obj.1',
  'projects.obj.2',
  'projects.obj.3',
  'projects.obj.4',
  'projects.obj.5',
  'projects.obj.6',
];

export default function Projects() {
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
      title: 'Our Projects - GPD Consulting | Transformative Initiatives Across Africa',
      description: 'Discover GPD Consulting\'s transformative projects: aviation infrastructure, urban housing, renewable energy, agricultural transformation, and large-scale infrastructure development across Africa.',
      keywords: 'GPD Consulting projects, Africa infrastructure, aviation development, renewable energy Africa, housing projects, agricultural transformation, economic development',
    },
    fr: {
      title: 'Nos Projets - GPD Consulting | Initiatives Transformatrices en Afrique',
      description: 'Découvrez les projets transformateurs de GPD Consulting : infrastructure aéronautique, logements urbains, énergie renouvelable, transformation agricole et développement des infrastructures à grande échelle en Afrique.',
      keywords: 'projets GPD Consulting, infrastructure Afrique, développement aviation, énergie renouvelable Afrique, projets logement, transformation agricole, développement économique',
    },
  };

  const currentSeo = seoData[language];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: language === 'fr' ? 'Projets - GPD Consulting' : 'Projects - GPD Consulting',
    description: currentSeo.description,
    url: 'https://gdpcconsulting.ca/projects',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: projects.map((project, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Project',
          name: t(`proj.${project.key}.title`),
          description: t(`proj.${project.key}.desc`),
          image: `https://gdpcconsulting.ca${project.image}`,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpcconsulting.ca/projects"
        structuredData={structuredData}
      />
      <div ref={pageRef} className="bg-white">
        {/* Page Header */}
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/project_aviation_panorama.jpg" 
              alt="Projects"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-emerald-950/70" />
          </div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium tracking-wide">{t('projects.page.tagline')}</span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight">
            {t('projects.page.title')} <span className="gradient-text">{t('projects.page.title2')}</span>
          </h1>
        </div>
      </section>

      {/* Objective Section */}
      <section className="animate-section py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('projects.objective.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 animate-item">
              {t('projects.objective.title')} <span className="gradient-text">{t('projects.objective.title2')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            {objectiveKeys.map((key, index) => (
              <div 
                key={index}
                className="animate-item p-6 bg-gray-50 rounded-2xl flex items-start gap-4 hover:bg-white hover:shadow-lg hover:shadow-emerald-500/5 border border-transparent hover:border-emerald-100 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                <p className="text-gray-600 leading-relaxed">{t(key)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('projects.portfolio.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {t('projects.portfolio.title')} <span className="gradient-text">{t('projects.portfolio.title2')}</span>
            </h2>
          </div>

          <div className="space-y-24">
            {projects.map((project, index) => (
              <div 
                key={index}
                className={`animate-section grid lg:grid-cols-2 gap-12 lg:gap-16 items-center`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="animate-item inline-flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-full mb-6">
                    <project.icon className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-600 text-sm font-medium">{t(`proj.${project.key}.category`)}</span>
                  </div>
                  
                  <h3 className="animate-item font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6 group-hover:text-emerald-600 transition-colors">
                    {t(`proj.${project.key}.title`)}
                  </h3>
                  
                  <p className="animate-item text-gray-600 leading-relaxed mb-8 text-lg">
                    {t(`proj.${project.key}.desc`)}
                  </p>
                  
                  <div className="animate-item grid grid-cols-3 gap-4 mb-8">
                    {project.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-5 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-emerald-500/5 border border-transparent hover:border-emerald-100 transition-all duration-300">
                        <div className="font-heading text-2xl font-bold text-emerald-600">
                          {stat.value}
                        </div>
                        <div className="text-gray-500 text-xs uppercase tracking-wide mt-1">
                          {t(`proj.${project.key}.${stat.key}`)}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <button className="animate-item inline-flex items-center gap-2 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-full font-semibold hover:border-emerald-500 hover:text-emerald-600 transition-all duration-300 group text-sm">
                    {t('projects.view.cta')}
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
                
                <div className={`animate-item ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10 group">
                    <img 
                      src={project.image}
                      alt={t(`proj.${project.key}.title`)}
                      className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    
                    {/* Category Badge */}
                    <div className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold`}>
                      {t(`proj.${project.key}.category`)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="animate-section py-24 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8 animate-item">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">{t('projects.cta.tagline')}</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-item">
            {t('projects.cta.title')} <span className="gradient-text">{t('projects.cta.title2')}</span>
          </h2>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-item">
            {t('projects.cta.p1')}
          </p>
          
          <Link 
            to="/contact#contact-form" 
            className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-emerald-400 transition-all duration-300 group animate-item"
          >
            <span>{t('projects.cta.button')}</span>
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </section>
    </div>
    </>
  );
}
