import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Plane, Building2, Zap, Wheat } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    icon: Plane,
    titleKey: 'project.aviation.title',
    categoryKey: 'project.aviation.category',
    descKey: 'project.aviation.desc',
    image: '/project_aviation_panorama.webp',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Building2,
    titleKey: 'project.housing.title',
    categoryKey: 'project.housing.category',
    descKey: 'project.housing.desc',
    image: '/cap_housing_urban.webp',
    color: 'from-emerald-500 to-emerald-600'
  },
  {
    icon: Zap,
    titleKey: 'project.energy.title',
    categoryKey: 'project.energy.category',
    descKey: 'project.energy.desc',
    image: '/cap_energy_sustainability.webp',
    color: 'from-amber-500 to-amber-600'
  },
  {
    icon: Wheat,
    titleKey: 'project.agriculture.title',
    categoryKey: 'project.agriculture.category',
    descKey: 'project.agriculture.desc',
    image: '/cap_agriculture_water.webp',
    color: 'from-green-500 to-green-600'
  },
];

export default function ProjectSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo('.proj-header > *',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.proj-header',
            start: 'top 85%',
          }
        }
      );

      // Project cards animation
      gsap.fromTo('.project-card',
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 80%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-gray-50 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="proj-header flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('projects.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              {t('projects.title').split(' ')[0]}<br />
              <span className="gradient-text">{t('projects.title').split(' ').slice(1).join(' ')}</span>
            </h2>
          </div>
          <div className="lg:max-w-md">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              {t('projects.description')}
            </p>
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold group"
            >
              {t('projects.cta')}
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link 
              key={index}
              to="/projects"
              className="project-card group relative bg-gray-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 block"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image}
                  alt={t(project.titleKey)}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  width="800"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                
                {/* Category Badge */}
                <div className={`absolute top-6 left-6 px-4 py-2 rounded-full bg-gradient-to-r ${project.color} text-white text-xs font-semibold`}>
                  {t(project.categoryKey)}
                </div>

                {/* Icon */}
                <div className="absolute bottom-6 right-6 w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <project.icon className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {t(project.titleKey)}
                </h3>
                <p className="text-gray-500 leading-relaxed mb-6">
                  {t(project.descKey)}
                </p>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link 
            to="/projects"
            className="inline-flex items-center gap-3 bg-gray-900 text-white px-10 py-5 rounded-full font-semibold hover:bg-emerald-600 transition-all duration-300 group"
          >
            {t('projects.cta')}
            <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
