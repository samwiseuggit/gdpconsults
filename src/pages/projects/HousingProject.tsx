import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, MapPin, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { key: 'units', value: '5,000+' },
  { key: 'families', value: '20,000' },
  { key: 'area', value: '150 ha' },
  { key: 'timeline', value: '2023-2027' },
];

const highlights = [
  'project.housing.highlight.1',
  'project.housing.highlight.2',
  'project.housing.highlight.3',
  'project.housing.highlight.4',
  'project.housing.highlight.5',
];

export default function HousingProject() {
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
      title: 'Urban Housing Development - GPD Consulting | Affordable Housing Africa',
      description: 'A transformative urban housing project providing 5,000+ affordable housing units for 20,000 families across Africa. Sustainable, community-focused development.',
      keywords: 'urban housing Africa, affordable housing, housing development, residential project, community development, GPD Consulting housing',
    },
    fr: {
      title: 'Developpement de Logements Urbains - GPD Consulting | Logements Abordables Afrique',
      description: 'Un projet de logements urbains transformateur fournissant plus de 5 000 logements abordables pour 20 000 familles en Afrique. Developpement durable et axe sur la communaute.',
      keywords: 'logements urbains Afrique, logements abordables, developpement immobilier, projet residentiel, developpement communautaire, GPD Consulting logements',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Projets' : 'Projects', url: 'https://gdpconsults.ca/projects' },
    { name: language === 'fr' ? 'Logements Urbains' : 'Urban Housing', url: 'https://gdpconsults.ca/projects/housing' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: language === 'fr' ? 'Developpement de Logements Urbains' : 'Urban Housing Development',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/projects/housing',
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
        canonicalUrl="https://gdpconsults.ca/projects/housing"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
        {/* Page Header */}
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/cap_housing_urban.webp" 
              alt="Urban Housing Development"
              className="w-full h-full object-cover opacity-30"
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
              <Building2 className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Projet Vedette' : 'Featured Project'}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
              {language === 'fr' ? 'Logements ' : 'Urban '}
              <span className="gradient-text">{language === 'fr' ? 'Urbains' : 'Housing'}</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              {language === 'fr' 
                ? 'Des logements abordables pour des milliers de familles.'
                : 'Affordable housing for thousands of families.'}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-emerald-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wide">
                    {t(`proj.housing.${stat.key}`)}
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
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6 animate-item">
                  <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                  <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
                    {language === 'fr' ? 'Apercu du Projet' : 'Project Overview'}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
                  {language === 'fr' ? 'Logements ' : 'Housing '}
                  <span className="gradient-text">{language === 'fr' ? 'Abordables' : 'for All'}</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
                  {language === 'fr'
                    ? 'Ce projet de developpement de logements urbains vise a fournir des logements abordables et durables pour 20 000 familles. Le projet comprend des unites residentielles, des espaces communautaires, des ecoles et des infrastructures essentielles.'
                    : 'This urban housing development project aims to provide affordable and sustainable housing for 20,000 families. The project includes residential units, community spaces, schools, and essential infrastructure.'}
                </p>
                <div className="animate-item flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                  <div>
                    <div className="font-semibold text-gray-900">{language === 'fr' ? 'Emplacement' : 'Location'}</div>
                    <div className="text-gray-500 text-sm">{language === 'fr' ? 'Plusieurs villes en Afrique' : 'Multiple cities across Africa'}</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-item relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                  <img 
                    src="/cap_housing_urban.webp"
                    alt="Urban Housing Development"
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

        {/* Highlights */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                {language === 'fr' ? 'Points ' : 'Project '}
                <span className="gradient-text">{language === 'fr' ? 'Forts' : 'Highlights'}</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((key, index) => (
                <div 
                  key={index}
                  className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-emerald-500/5 border border-gray-100 hover:border-emerald-100 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-emerald-600" />
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
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-emerald-600" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
                {language === 'fr' ? 'Impact' : 'Impact'}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
              {language === 'fr' ? 'Impact ' : 'Social '}
              <span className="gradient-text">{language === 'fr' ? 'Social' : 'Impact'}</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-item">
              {language === 'fr'
                ? 'Ce projet fournira des logements decents a 20 000 familles, ameliorant leur qualite de vie et creant des milliers d\'emplois pendant la construction. Les infrastructures communautaires incluses soutiendront le developpement social et economique des communautes locales.'
                : 'This project will provide decent housing for 20,000 families, improving their quality of life and creating thousands of jobs during construction. The included community infrastructure will support the social and economic development of local communities.'}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-section py-24 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-item">
              {language === 'fr' ? 'Interesse par ' : 'Interested in '}
              <span className="gradient-text">{language === 'fr' ? 'ce Projet ?' : 'This Project?'}</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto animate-item">
              {language === 'fr'
                ? 'Contactez-nous pour en savoir plus sur les opportunites de partenariat et d\'investissement.'
                : 'Contact us to learn more about partnership and investment opportunities.'}
            </p>
            <Link 
              to="/contact#contact-form" 
              className="inline-flex items-center gap-3 bg-emerald-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-emerald-400 transition-all duration-300 group animate-item"
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
