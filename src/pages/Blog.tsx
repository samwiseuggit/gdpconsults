import { useLanguage } from '../contexts/LanguageContext';
import { Calendar, User, ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    titleEn: 'The Future of Infrastructure Development in Africa',
    titleFr: 'L\'Avenir du Développement des Infrastructures en Afrique',
    excerptEn: 'Exploring the key trends and opportunities shaping Africa\'s infrastructure landscape in the coming decade.',
    excerptFr: 'Explorer les tendances clés et les opportunités qui façonnent le paysage des infrastructures en Afrique pour la décennie à venir.',
    author: 'GPD Consulting Team',
    date: '2024-03-01',
    categoryEn: 'Infrastructure',
    categoryFr: 'Infrastructure',
    image: '/cap_infrastructure_transport.webp',
  },
  {
    id: 2,
    titleEn: 'Public-Private Partnerships: A Key Driver for Growth',
    titleFr: 'Les Partenariats Public-Privé : Un Moteur Clé de Croissance',
    excerptEn: 'How PPPs are transforming the way major projects are funded and delivered across the continent.',
    excerptFr: 'Comment les PPP transforment la façon dont les grands projets sont financés et réalisés à travers le continent.',
    author: 'GPD Consulting Team',
    date: '2024-02-15',
    categoryEn: 'Partnerships',
    categoryFr: 'Partenariats',
    image: '/cap_public_private_partnerships.webp',
  },
  {
    id: 3,
    titleEn: 'Sustainable Mining Practices for the Modern Era',
    titleFr: 'Pratiques Minières Durables pour l\'Ère Moderne',
    excerptEn: 'Balancing economic growth with environmental responsibility in Africa\'s mining sector.',
    excerptFr: 'Équilibrer la croissance économique avec la responsabilité environnementale dans le secteur minier africain.',
    author: 'GPD Consulting Team',
    date: '2024-01-28',
    categoryEn: 'Mining',
    categoryFr: 'Mines',
    image: '/cap_project_finance.webp',
  },
];

export default function Blog() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
              {language === 'fr' ? 'Notre Blog' : 'Our Blog'}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Dernières ' : 'Latest '}
            <span className="gradient-text">{language === 'fr' ? 'Actualités' : 'Insights'}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {language === 'fr' 
              ? 'Restez informé des dernières tendances, actualités et perspectives sur le développement en Afrique.'
              : 'Stay informed on the latest trends, news, and insights on development in Africa.'}
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-emerald-500/5 border border-gray-100 hover:border-emerald-200 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={language === 'fr' ? post.titleFr : post.titleEn}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-semibold rounded-full">
                      {language === 'fr' ? post.categoryFr : post.categoryEn}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-gray-500 text-sm mb-4">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {language === 'fr' ? post.titleFr : post.titleEn}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {language === 'fr' ? post.excerptFr : post.excerptEn}
                  </p>
                  <button className="inline-flex items-center gap-2 text-emerald-600 font-semibold text-sm hover:text-emerald-700 transition-colors">
                    {language === 'fr' ? 'Lire la Suite' : 'Read More'}
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
