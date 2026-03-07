import { useRef, useLayoutEffect, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Play } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

// Animated counter component
function AnimatedCounter({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to({ value: 0 }, {
        value: end,
        duration,
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
  }, [end, duration]);

  return <span ref={counterRef}>{count}{suffix}</span>;
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Hero entrance animations
      tl.fromTo('.hero-tagline',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.3 }
      )
      .fromTo('.hero-title-line',
        { y: 80, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15 },
        '-=0.4'
      )
      .fromTo('.hero-desc',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.6'
      )
      .fromTo('.hero-buttons',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.5'
      )
      .fromTo('.hero-stats',
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      )
      .fromTo('.hero-image',
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power2.out' },
        0
      );

      // Parallax effect on scroll
      gsap.to('.hero-image', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Mouse parallax for floating elements
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gray-950"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="hero-image absolute inset-0">
          <img 
            src="/hero_airport_terminal.jpg" 
            alt="Modern infrastructure"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 via-gray-950/80 to-emerald-950/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-transparent" />
      </div>

      {/* Floating Elements */}
      <div 
        className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
        style={{ transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)` }}
      />
      <div 
        className="absolute bottom-40 left-10 w-96 h-96 bg-emerald-400/5 rounded-full blur-3xl"
        style={{ transform: `translate(${mousePosition.x * -0.3}px, ${mousePosition.y * -0.3}px)` }}
      />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
        backgroundSize: '60px 60px'
      }} />

      {/* Content */}
      <div className="relative z-10 w-full px-4 md:px-8 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="max-w-2xl">
              {/* Tagline */}
              <div className="hero-tagline inline-flex items-center gap-3 px-5 py-2.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-emerald-400 text-sm font-medium tracking-wide">{t('hero.tagline')}</span>
              </div>

              {/* Title */}
              <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8 perspective-1000">
                <span className="hero-title-line block">{t('hero.title1')}</span>
                <span className="hero-title-line block">{t('hero.title2')} <span className="gradient-text">{t('hero.title3').split(' ')[0]}</span></span>
                <span className="hero-title-line block text-emerald-400">{t('hero.title3').split(' ').slice(1).join(' ')}</span>
              </h1>

              {/* Description */}
              <p className="hero-desc text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
                {t('hero.description')}
              </p>

              {/* Buttons */}
              <div className="hero-buttons flex flex-col sm:flex-row gap-4">
                <Link to="/contact#contact-form" className="btn-primary inline-flex items-center justify-center gap-3 group">
                  <span>{t('hero.cta1')}</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/services" className="btn-outline inline-flex items-center justify-center gap-3 group">
                  <span>{t('hero.cta2')}</span>
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </div>

            {/* Right Content - Stats Cards */}
            <div className="hero-stats hidden lg:block">
              <div className="relative">
                {/* Main Stats Card */}
                <div className="glass-dark rounded-3xl p-8 border border-white/10">
                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="font-heading text-4xl font-bold text-emerald-400 mb-2">
                        <AnimatedCounter end={15} suffix="+" />
                      </div>
                      <div className="text-gray-400 text-sm">{t('hero.stats.years')}</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="font-heading text-4xl font-bold text-emerald-400 mb-2">
                        <AnimatedCounter end={50} suffix="+" />
                      </div>
                      <div className="text-gray-400 text-sm">{t('hero.stats.partners')}</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="font-heading text-4xl font-bold text-emerald-400 mb-2">
                        <AnimatedCounter end={3} />
                      </div>
                      <div className="text-gray-400 text-sm">{t('hero.stats.continents')}</div>
                    </div>
                    <div className="text-center p-6 bg-white/5 rounded-2xl">
                      <div className="font-heading text-4xl font-bold text-emerald-400 mb-2">
                        $<AnimatedCounter end={100} suffix="M+" />
                      </div>
                      <div className="text-gray-400 text-sm">{t('hero.stats.value')}</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badge */}
                <div 
                  className="absolute -bottom-6 -left-6 glass-dark rounded-2xl px-6 py-4 border border-white/10 flex items-center gap-4"
                  style={{ transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)` }}
                >
                  <div className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center">
                    <Play className="w-5 h-5 text-white ml-1" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t('hero.video.title')}</div>
                    <div className="text-gray-400 text-sm">{t('hero.video.duration')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
