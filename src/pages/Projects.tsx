import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';

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
    descriptionEn: 'A comprehensive modernization program for aviation infrastructure across East African nations.',
    descriptionFr: 'Un programme complet de modernisation de l\'infrastructure aérienne dans les nations d\'Afrique de l\'Est.',
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
    descriptionEn: 'Large-scale solar and wind energy projects delivering sustainable power to communities.',
    descriptionFr: 'Des projets d\'énergie solaire et éolienne à grande échelle fournissant une énergie durable aux communautés.',
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
    descriptionEn: 'Sustainable housing projects providing quality homes for thousands of families.',
    descriptionFr: 'Des projets de logement durable fournissant des maisons de qualité à des milliers de familles.',
    image: '/cap_housing_urban.webp',
  },
  {
    id: 'agriculture',
    titleEn: 'Agricultural Modernization',
    titleFr: 'Modernisation Agricole',
    categoryEn: 'Agriculture',
    categoryFr: 'Agriculture',
    location: 'West Africa',
    statusEn: 'Ongoing',
    statusFr: 'En Cours',
    descriptionEn: 'Transforming agricultural practices through technology and sustainable methods.',
    descriptionFr: 'Transformation des pratiques agricoles grâce à la technologie et aux méthodes durables.',
    image: '/cap_agriculture_water.webp',
  },
];

export default function Projects() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
              {language === 'fr' ? 'Nos Réalisations' : 'Our Work'}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Nos ' : 'Our '}
            <span className="gradient-text">{language === 'fr' ? 'Projets' : 'Projects'}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Découvrez nos initiatives transformatrices à travers l\'Afrique, créant un impact durable dans les communautés.'
              : 'Discover our transformative initiatives across Africa, creating lasting impact in communities.'}
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-emerald-500/5 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
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
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {project.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {language === 'fr' ? project.statusFr : project.statusEn}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                    {language === 'fr' ? project.titleFr : project.titleEn}
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr' ? project.descriptionFr : project.descriptionEn}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
