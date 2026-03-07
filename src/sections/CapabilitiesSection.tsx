import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Landmark, Globe, FolderKanban, Banknote, FileSignature, Ruler, Leaf, TrendingUp, Plane } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { 
    icon: Landmark, 
    titleKey: 'cap.gov', 
    descKey: 'cap.gov.desc',
    size: 'large'
  },
  { 
    icon: Globe, 
    titleKey: 'cap.partnerships', 
    descKey: 'cap.partnerships.desc',
    size: 'small'
  },
  { 
    icon: FolderKanban, 
    titleKey: 'cap.project', 
    descKey: 'cap.project.desc',
    size: 'small'
  },
  { 
    icon: Banknote, 
    titleKey: 'cap.finance', 
    descKey: 'cap.finance.desc',
    size: 'large'
  },
  { 
    icon: FileSignature, 
    titleKey: 'cap.negotiation', 
    descKey: 'cap.negotiation.desc',
    size: 'small'
  },
  { 
    icon: Ruler, 
    titleKey: 'cap.engineering', 
    descKey: 'cap.engineering.desc',
    size: 'small'
  },
  { 
    icon: Leaf, 
    titleKey: 'cap.green', 
    descKey: 'cap.green.desc',
    size: 'large'
  },
  { 
    icon: TrendingUp, 
    titleKey: 'cap.lobbying', 
    descKey: 'cap.lobbying.desc',
    size: 'small'
  },
  { 
    icon: Plane, 
    titleKey: 'cap.aviation', 
    descKey: 'cap.aviation.desc',
    size: 'small'
  },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.fromTo('.cap-header > *',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.cap-header',
            start: 'top 85%',
          }
        }
      );

      // Bento grid cards animation
      gsap.fromTo('.bento-card',
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: {
            amount: 0.8,
            from: 'random'
          },
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.bento-grid',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-emerald-50/50 to-transparent" />
      <div className="absolute top-40 left-10 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="cap-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('capabilities.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('capabilities.title').split(' ')[0]}<br />
              <span className="gradient-text">{t('capabilities.title').split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('capabilities.description')}
            </p>
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold group"
            >
              {t('capabilities.cta')}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {capabilities.map((cap, index) => (
            <Link
              key={index}
              to="/services"
              className={`bento-card group relative bg-gray-50 rounded-3xl p-8 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-emerald-500/10 border border-transparent hover:border-emerald-100 cursor-pointer flex flex-col ${
                cap.size === 'large' ? 'md:col-span-2 md:row-span-2 min-h-[420px]' : 'min-h-[280px]'
              }`}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg shadow-emerald-500/25 flex-shrink-0 ${
                cap.size === 'large' ? 'lg:w-16 lg:h-16' : ''
              }`}>
                <cap.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <div className="flex-grow">
                <h3 className={`font-heading font-bold text-gray-900 mb-3 transition-colors group-hover:text-emerald-600 ${
                  cap.size === 'large' ? 'text-2xl lg:text-3xl' : 'text-xl'
                }`}>
                  {t(cap.titleKey)}
                </h3>
                <p className={`text-gray-500 leading-relaxed ${
                  cap.size === 'large' ? 'text-base lg:text-lg max-w-md' : 'text-sm'
                }`}>
                  {t(cap.descKey)}
                </p>
              </div>

              {/* Hover Arrow */}
              <div className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                <ArrowUpRight className="w-5 h-5 text-emerald-600" />
              </div>

              {/* Gradient Border on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
