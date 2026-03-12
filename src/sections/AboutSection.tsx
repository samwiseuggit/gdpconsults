import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, Users, Target, Heart, Shield } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const values = [
  { icon: Users, titleKey: 'value.respect', descriptionKey: 'value.respect.desc' },
  { icon: Heart, titleKey: 'value.trust', descriptionKey: 'value.trust.desc' },
  { icon: Shield, titleKey: 'value.integrity', descriptionKey: 'value.integrity.desc' },
  { icon: Target, titleKey: 'value.transparency', descriptionKey: 'value.transparency.desc' },
];

const highlights = [
  'highlight.1',
  'highlight.2',
  'highlight.3',
  'highlight.4',
  'highlight.5',
  'highlight.6',
  'highlight.7',
  'highlight.8',
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo('.about-image-container',
        { clipPath: 'inset(100% 0 0 0)', opacity: 0 },
        {
          clipPath: 'inset(0% 0 0 0)',
          opacity: 1,
          duration: 1.2,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: '.about-image-container',
            start: 'top 80%',
          }
        }
      );

      // Content animation
      gsap.fromTo('.about-content > *',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.about-content',
            start: 'top 80%',
          }
        }
      );

      // Values cards animation
      gsap.fromTo('.value-card',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.values-grid',
            start: 'top 85%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Image Side */}
          <div className="relative pb-12 pr-12">
            <div className="about-image-container relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/10">
                <img 
                  src="/cap_public_private_partnerships.webp"
                  alt={t('about.image.alt')}
                  className="w-full aspect-[4/5] object-cover"
                  width="600"
                  height="750"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl shadow-black/10 w-48">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="min-w-0">
                    <div className="font-heading text-xl font-bold text-gray-900">50+</div>
                    <div className="text-gray-500 text-xs truncate">{t('about.partners')}</div>
                  </div>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-emerald-400 to-emerald-600 rounded-full" />
                </div>
              </div>

              {/* Decorative Frame */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-emerald-400/30 rounded-3xl -z-10" />
            </div>
          </div>

          {/* Content Side */}
          <div className="about-content">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('about.tagline')}</span>
            </div>

            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              {t('about.title').split(' ').slice(0, 4).join(' ')}<br />
              <span className="gradient-text">{t('about.title').split(' ').slice(4).join(' ')}</span>
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {t('about.description')}
            </p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600 text-sm">{t(item)}</span>
                </div>
              ))}
            </div>

            <Link 
              to="/about" 
              className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 group"
            >
              {t('about.cta')}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Values Section */}
        <div className="values-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div 
              key={index}
              className="value-card group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                <value.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                {t(value.titleKey)}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                {t(value.descriptionKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
