import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 'aviation',
    titleEn: 'Modernizing Aviation Infrastructure',
    titleFr: 'Modernisation de l\'Infrastructure Aérienne',
    categoryEn: 'Aviation',
    categoryFr: 'Aviation',
    location: 'East Africa',
    statusEn: 'Ongoing',
    statusFr: 'En Cours',
    image: '/project_aviation_panorama.webp',
  },
  {
    id: 'energy',
    titleEn: 'Renewable Energy Initiative',
    titleFr: 'Initiative d\'Énergie Renouvelable',
    categoryEn: 'Energy',
    categoryFr: 'Énergie',
    location: 'West Africa',
    statusEn: 'Completed',
    statusFr: 'Terminé',
    image: '/cap_energy_sustainability.webp',
  },
  {
    id: 'housing',
    titleEn: 'Affordable Housing Development',
    titleFr: 'Développement de Logements Abordables',
    categoryEn: 'Housing',
    categoryFr: 'Logement',
    location: 'Central Africa',
    statusEn: 'Ongoing',
    statusFr: 'En Cours',
    image: '/cap_housing_urban.webp',
  },
];

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.project-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
                {language === 'fr' ? 'Projets en Vedette' : 'Featured Projects'}
              </span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900">
              {language === 'fr' ? 'Initiatives ' : 'Transformative '}
              <span className="gradient-text">{language === 'fr' ? 'Transformatrices' : 'Initiatives'}</span>
            </h2>
          </div>
          <Link
            to="/projects"
            className="mt-6 md:mt-0 inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
          >
            {language === 'fr' ? 'Voir Tous les Projets' : 'View All Projects'}
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="project-card group bg-white rounded-3xl overflow-hidden shadow-lg shadow-emerald-500/5 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={language === 'fr' ? project.titleFr : project.titleEn}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                    {language === 'fr' ? project.categoryFr : project.categoryEn}
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-4 text-white/80 text-sm">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {language === 'fr' ? project.statusFr : project.statusEn}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {language === 'fr' ? project.titleFr : project.titleEn}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
