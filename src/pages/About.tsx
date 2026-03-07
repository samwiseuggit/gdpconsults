import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Eye, Target, Heart, Shield, Users, Globe, Award, Lightbulb, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Users, key: 'respect' },
  { icon: Heart, key: 'trust' },
  { icon: Shield, key: 'integrity' },
  { icon: Lightbulb, key: 'transparency' },
];

const missionPoints = [
  { icon: Award, key: 'partner' },
  { icon: Globe, key: 'social' },
  { icon: Target, key: 'business' },
  { icon: Eye, key: 'shareholder' },
];

const objectiveKeys = [
  'about.objective.1',
  'about.objective.2',
  'about.objective.3',
  'about.objective.4',
  'about.objective.5',
  'about.objective.6',
  'about.objective.7',
  'about.objective.8',
];

// Animated Counter Component
function AnimatedCounter({ end, suffix = '', prefix = '' }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to({ value: 0 }, {
        value: end,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function() {
          setCount(Math.floor(this.targets()[0].value));
        },
        scrollTrigger: {
          trigger: counterRef.current,
          start: 'top 90%',
          once: true
        }
      });
    });
    return () => ctx.revert();
  }, [end]);

  return <span ref={counterRef}>{prefix}{count}{suffix}</span>;
}

export default function About() {
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
      title: 'About Us - GPD Consulting | Global Enterprise with African Expertise',
      description: 'Learn about GPD Consulting, a distinguished global enterprise with deep expertise in Africa. Discover our mission, vision, values, and commitment to sustainable economic development across the continent.',
      keywords: 'about GPD Consulting, Green Diamond Partnership, Africa expertise, consulting company, sustainable development, mission vision values',
    },
    fr: {
      title: 'À Propos - GPD Consulting | Entreprise Mondiale avec Expertise Africaine',
      description: 'Découvrez GPD Consulting, une entreprise mondiale distinguée avec une expertise approfondie en Afrique. Explorez notre mission, notre vision, nos valeurs et notre engagement envers le développement économique durable à travers le continent.',
      keywords: 'à propos GPD Consulting, Green Diamond Partnership, expertise Afrique, entreprise conseil, développement durable, mission vision valeurs',
    },
  };

  const currentSeo = seoData[language];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: language === 'fr' ? 'À Propos - GPD Consulting' : 'About Us - GPD Consulting',
    description: currentSeo.description,
    url: 'https://gdpcconsulting.ca/about',
    mainEntity: {
      '@type': 'Organization',
      name: 'GPD Consulting',
      description: 'A distinguished global enterprise with deep expertise and specialized focus on Africa',
      url: 'https://gdpcconsulting.ca',
      logo: 'https://gdpcconsulting.ca/logo-white-bg.svg',
      foundingDate: '2010',
      areaServed: {
        '@type': 'Continent',
        name: 'Africa',
      },
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpcconsulting.ca/about"
        structuredData={structuredData}
      />
      <div ref={pageRef} className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="/cap_strategic_advisory.jpg" 
            alt="About us"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-emerald-950/70" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">{t('about.page.tagline')}</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight">
            {t('about.page.title1')}<br />
            <span className="gradient-text">{t('about.page.title2')}</span> {t('about.page.title3')}
          </h1>
        </div>
      </section>

      {/* Who We Are */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Image */}
            <div className="animate-item relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                <img 
                  src="/cap_project_finance.jpg"
                  alt="Our business"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-400/30 rounded-3xl -z-10" />
              
              {/* Stats Card */}
              <div className="absolute -bottom-8 -left-8 bg-white rounded-2xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold text-emerald-600">
                      <AnimatedCounter end={15} suffix="+" />
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wide mt-1">{t('about.who.years')}</div>
                  </div>
                  <div className="text-center">
                    <div className="font-heading text-3xl font-bold text-emerald-600">
                      <AnimatedCounter end={50} suffix="+" />
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wide mt-1">{t('about.who.partners')}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6 animate-item">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('about.who.tagline')}</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-item leading-tight">
                {t('about.who.title1')}<br />
                <span className="gradient-text">{t('about.who.title2')}</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
                {t('about.who.p1')}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8 animate-item">
                {t('about.who.p2')}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4 animate-item">
                {objectiveKeys.slice(0, 4).map((key, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{t(key)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
        
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-8 animate-item">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('about.vision.tagline')}</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 animate-item">
            {t('about.vision.title')} <span className="gradient-text">{t('about.vision.title2')}</span>
          </h2>
          
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-6 animate-item">
            {t('about.vision.p1')}
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed animate-item">
            {t('about.vision.p2')}
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('about.mission.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {t('about.mission.title')} <span className="gradient-text">{t('about.mission.title2')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPoints.map((point, index) => (
              <div 
                key={index}
                className="animate-item p-8 bg-gray-50 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 border border-transparent hover:border-emerald-100 transition-all duration-500 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <point.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {t(`about.mission.${point.key}.title`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`about.mission.${point.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('about.values.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {t('about.values.title')} <span className="gradient-text">{t('about.values.title2')}</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="animate-item p-8 bg-white rounded-3xl text-center hover:shadow-xl hover:shadow-emerald-500/5 border border-gray-100 hover:border-emerald-100 transition-all duration-500 group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <value.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {t(`value.${value.key}`)}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {t(`about.values.${value.key}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6 animate-item">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('about.business.tagline')}</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-item leading-tight">
                {t('about.business.title1')}<br />
                <span className="gradient-text">{t('about.business.title2')}</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-6 animate-item">
                {t('about.business.p1')}
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8 animate-item">
                {t('about.business.p2')}
              </p>
              
              <div className="animate-item">
                <h4 className="font-heading text-lg font-bold text-gray-900 mb-4">{t('about.business.objectives')}</h4>
                <ul className="space-y-3">
                  {objectiveKeys.map((key, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-600 text-sm">{t(key)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="animate-item relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                <img 
                  src="/cap_education_health.jpg"
                  alt="Business model"
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-emerald-400/30 rounded-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
