import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plane, MapPin, TrendingUp, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import SEO from '../../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { key: 'investment', value: '$500M+' },
  { key: 'capacity', value: '10M+' },
  { key: 'timeline', value: '2024-2028' },
  { key: 'jobs', value: '5,000+' },
];

const highlights = [
  'project.aviation.highlight.1',
  'project.aviation.highlight.2',
  'project.aviation.highlight.3',
  'project.aviation.highlight.4',
  'project.aviation.highlight.5',
];

export default function AviationProject() {
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
      title: 'Aviation Infrastructure Project - GPD Consulting | Modernizing African Airports',
      description: 'A transformative aviation infrastructure project modernizing airport facilities across Africa. $500M+ investment to enhance capacity, safety, and passenger experience.',
      keywords: 'aviation infrastructure Africa, airport modernization, African aviation, airport development, aviation project, GPD Consulting aviation',
    },
    fr: {
      title: 'Projet d\'Infrastructure Aéronautique - GPD Consulting | Modernisation des Aéroports Africains',
      description: 'Un projet transformateur d\'infrastructure aéronautique modernisant les installations aéroportuaires en Afrique. Investissement de plus de 500M$ pour améliorer la capacité, la sécurité et l\'expérience des passagers.',
      keywords: 'infrastructure aéronautique Afrique, modernisation aéroport, aviation africaine, développement aéroport, projet aviation, GPD Consulting aviation',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Projets' : 'Projects', url: 'https://gdpconsults.ca/projects' },
    { name: language === 'fr' ? 'Infrastructure Aéronautique' : 'Aviation Infrastructure', url: 'https://gdpconsults.ca/projects/aviation' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Project',
    name: language === 'fr' ? 'Infrastructure Aéronautique' : 'Aviation Infrastructure',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/projects/aviation',
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
        canonicalUrl="https://gdpconsults.ca/projects/aviation"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
        {/* Page Header */}
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/project_aviation_panorama.webp" 
              alt="Aviation Infrastructure"
              className="w-full h-full object-cover opacity-30"
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
              <Plane className="w-4 h-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Projet Vedette' : 'Featured Project'}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
              {language === 'fr' ? 'Infrastructure ' : 'Aviation '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                {language === 'fr' ? 'Aéronautique' : 'Infrastructure'}
              </span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              {language === 'fr' 
                ? 'Moderniser les installations aéroportuaires pour soutenir la croissance du transport aérien en Afrique.'
                : 'Modernizing airport facilities to support the growth of air transport in Africa.'}
            </p>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-4 md:px-8 bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-heading text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm uppercase tracking-wide">
                    {t(`proj.aviation.${stat.key}`)}
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
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-6 animate-item">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                  <span className="text-blue-600 text-xs font-semibold tracking-wide uppercase">
                    {language === 'fr' ? 'Aperçu du Projet' : 'Project Overview'}
                  </span>
                </div>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
                  {language === 'fr' ? 'Transformer ' : 'Transforming '}
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                    {language === 'fr' ? 'l\'Aviation Africaine' : 'African Aviation'}
                  </span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
                  {language === 'fr'
                    ? 'Ce projet transformateur vise à moderniser et étendre les infrastructures aéroportuaires clés à travers l\'Afrique. Avec un investissement de plus de 500 millions de dollars, nous améliorons la capacité des passagers, la sécurité et l\'efficacité opérationnelle pour soutenir la croissance rapide du transport aérien sur le continent.'
                    : 'This transformative project aims to modernize and expand key airport infrastructure across Africa. With an investment of over $500 million, we are enhancing passenger capacity, safety, and operational efficiency to support the rapid growth of air transport on the continent.'}
                </p>
                <div className="animate-item flex items-center gap-4 p-4 bg-blue-50 rounded-2xl">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">{language === 'fr' ? 'Emplacement' : 'Location'}</div>
                    <div className="text-gray-500 text-sm">{language === 'fr' ? 'Plusieurs pays en Afrique' : 'Multiple countries across Africa'}</div>
                  </div>
                </div>
              </div>
              
              <div className="animate-item relative">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/10">
                  <img 
                    src="/project_aviation_panorama.webp"
                    alt="Aviation Infrastructure"
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

        {/* Highlights */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
                {language === 'fr' ? 'Points ' : 'Project '}
                <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                  {language === 'fr' ? 'Forts' : 'Highlights'}
                </span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {highlights.map((key, index) => (
                <div 
                  key={index}
                  className="animate-item p-8 bg-white rounded-3xl hover:shadow-xl hover:shadow-blue-500/5 border border-gray-100 hover:border-blue-100 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-6 h-6 text-blue-600" />
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
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-blue-50 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-blue-600" />
              <span className="text-blue-600 text-xs font-semibold tracking-wide uppercase">
                {language === 'fr' ? 'Impact' : 'Impact'}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-8 animate-item">
              {language === 'fr' ? 'Impact ' : 'Economic '}
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent">
                {language === 'fr' ? 'Économique' : 'Impact'}
              </span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed animate-item">
              {language === 'fr'
                ? 'Ce projet générera plus de 5 000 emplois directs et indirects pendant la phase de construction, avec des milliers d\'emplois permanents une fois opérationnel. L\'amélioration des infrastructures aéroportuaires stimulera le commerce, le tourisme et les investissements étrangers dans la région.'
                : 'This project will generate over 5,000 direct and indirect jobs during the construction phase, with thousands of permanent jobs once operational. The improved airport infrastructure will boost trade, tourism, and foreign investment in the region.'}
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="animate-section py-24 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="max-w-4xl mx-auto text-center relative">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6 animate-item">
              {language === 'fr' ? 'Intéressé par ' : 'Interested in '}
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
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
              className="inline-flex items-center gap-3 bg-blue-500 text-white px-10 py-5 rounded-full font-semibold hover:bg-blue-400 transition-all duration-300 group animate-item"
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
