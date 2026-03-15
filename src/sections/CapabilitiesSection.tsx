import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Landmark, Handshake, FolderKanban, Banknote, MessageSquare, Building2, Leaf, TrendingUp, Plane } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const capabilities = [
  { icon: Landmark, titleKey: 'cap.gov', descKey: 'cap.gov.desc', link: '/services/governmental-affairs' },
  { icon: Handshake, titleKey: 'cap.partnerships', descKey: 'cap.partnerships.desc', link: '/services/international-partnerships' },
  { icon: FolderKanban, titleKey: 'cap.project', descKey: 'cap.project.desc', link: '/services/project-development' },
  { icon: Banknote, titleKey: 'cap.finance', descKey: 'cap.finance.desc', link: '/services/project-finance' },
  { icon: MessageSquare, titleKey: 'cap.negotiation', descKey: 'cap.negotiation.desc', link: '/services/negotiation' },
  { icon: Building2, titleKey: 'cap.engineering', descKey: 'cap.engineering.desc', link: '/services/architecture-engineering' },
  { icon: Leaf, titleKey: 'cap.green', descKey: 'cap.green.desc', link: '/services/green-technology' },
  { icon: TrendingUp, titleKey: 'cap.lobbying', descKey: 'cap.lobbying.desc', link: '/services/economic-lobbying' },
  { icon: Plane, titleKey: 'cap.aviation', descKey: 'cap.aviation.desc', link: '/services/aviation-industry' },
];

export default function CapabilitiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.capability-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.capabilities-grid',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('capabilities.tagline')}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('capabilities.title')}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('capabilities.description')}
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="capabilities-grid grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, index) => (
            <Link
              key={index}
              to={cap.link}
              className="capability-card group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                <cap.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                {t(cap.titleKey)}
                <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(cap.descKey)}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            {t('capabilities.cta')}
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
