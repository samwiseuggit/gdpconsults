import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { Landmark, Handshake, FolderKanban, Banknote, MessageSquare, Building2, Leaf, TrendingUp, Plane, Pickaxe, Construction, Users, ArrowUpRight } from 'lucide-react';

const services = [
  { icon: Landmark, titleEn: 'Governmental Affairs', titleFr: 'Affaires Gouvernementales', descEn: 'Navigating complex regulatory environments and fostering positive relationships with government entities.', descFr: 'Navigation dans les environnements réglementaires complexes et établissement de relations positives avec les entités gouvernementales.', link: '/services/governmental-affairs' },
  { icon: Handshake, titleEn: 'International Partnerships', titleFr: 'Partenariats Internationaux', descEn: 'Forging mutually beneficial partnerships on an international scale.', descFr: 'Création de partenariats mutuellement bénéfiques à l\'échelle internationale.', link: '/services/international-partnerships' },
  { icon: FolderKanban, titleEn: 'Project Development', titleFr: 'Développement de Projets', descEn: 'Strategizing and overseeing the full lifecycle of projects.', descFr: 'Stratégie et supervision du cycle de vie complet des projets.', link: '/services/project-development' },
  { icon: Banknote, titleEn: 'Project Finance', titleFr: 'Finance de Projet', descEn: 'Providing comprehensive financial solutions and arranging funding for capital-intensive initiatives.', descFr: 'Fourniture de solutions financières complètes et organisation de financements pour des initiatives à capital intensif.', link: '/services/project-finance' },
  { icon: MessageSquare, titleEn: 'Negotiation', titleFr: 'Négociation', descEn: 'Skillfully negotiating contracts, agreements, and deals.', descFr: 'Négociation habile de contrats, accords et transactions.', link: '/services/negotiation' },
  { icon: Building2, titleEn: 'Architecture & Engineering', titleFr: 'Architecture et Ingénierie', descEn: 'Delivering innovative architectural and engineering solutions.', descFr: 'Fourniture de solutions architecturales et d\'ingénierie innovantes.', link: '/services/architecture-engineering' },
  { icon: Leaf, titleEn: 'Green Technology', titleFr: 'Technologie Verte', descEn: 'Implementing sustainable and eco-friendly technologies for a better tomorrow.', descFr: 'Mise en œuvre de technologies durables et respectueuses de l\'environnement pour un avenir meilleur.', link: '/services/green-technology' },
  { icon: TrendingUp, titleEn: 'Economic Lobbying', titleFr: 'Lobbying Économique', descEn: 'Advocating for economic interests and building strategic alliances.', descFr: 'Défense des intérêts économiques et construction d\'alliances stratégiques.', link: '/services/economic-lobbying' },
  { icon: Plane, titleEn: 'Aviation Industry', titleFr: 'Industrie Aérienne', descEn: 'Leveraging expertise to drive aviation-related projects forward.', descFr: 'Mise à profit de l\'expertise pour faire avancer les projets liés à l\'aviation.', link: '/services/aviation-industry' },
  { icon: Pickaxe, titleEn: 'Mining Operations', titleFr: 'Opérations Minières', descEn: 'Expert guidance in mining project development and operations.', descFr: 'Conseil expert dans le développement et les opérations de projets miniers.', link: '/services/mining-operations' },
  { icon: Construction, titleEn: 'Infrastructure Development', titleFr: 'Développement d\'Infrastructure', descEn: 'Building the foundations for economic growth through infrastructure.', descFr: 'Construire les fondations de la croissance économique grâce à l\'infrastructure.', link: '/services/infrastructure-development' },
  { icon: Users, titleEn: 'Public-Private Partnerships', titleFr: 'Partenariats Public-Privé', descEn: 'Facilitating collaborative partnerships between public and private sectors.', descFr: 'Facilitation des partenariats collaboratifs entre les secteurs public et privé.', link: '/services/public-private-partnerships' },
];

export default function Services() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
              {language === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Nos ' : 'Our '}
            <span className="gradient-text">{language === 'fr' ? 'Services' : 'Services'}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Nous proposons une gamme complète de services pour répondre aux besoins de développement de nos partenaires à travers l\'Afrique.'
              : 'We offer a comprehensive range of services to meet the development needs of our partners across Africa.'}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="group bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <service.icon className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors flex items-center gap-2">
                  {language === 'fr' ? service.titleFr : service.titleEn}
                  <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {language === 'fr' ? service.descFr : service.descEn}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
