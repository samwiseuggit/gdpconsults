import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, Clock, ArrowUpRight, User } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const blogPosts = [
  {
    slug: 'public-private-partnerships-africa',
    key: 'post1',
    titleEn: 'Public-Private Partnerships: Driving Africa\'s Infrastructure Growth',
    titleFr: 'Partenariats Public-Prive: Moteur de la Croissance Infrastructurelle en Afrique',
    excerptEn: 'Explore how PPPs are transforming infrastructure development across Africa, creating win-win scenarios for governments and private investors alike.',
    excerptFr: 'Decouvrez comment les PPP transforment le developpement des infrastructures en Afrique, creant des scenarios gagnant-gagnant pour les gouvernements et les investisseurs prives.',
    category: 'Partnerships',
    categoryColor: 'blue',
    image: '/cap_public_private_partnerships.webp',
    date: '2024-03-15',
    readTime: '6 min',
  },
  {
    slug: 'green-technology-africa',
    key: 'post2',
    titleEn: 'Green Technology Investment Opportunities in Sub-Saharan Africa',
    titleFr: 'Opportunites d\'Investissement dans les Technologies Vertes en Afrique Subsaharienne',
    excerptEn: 'Discover the emerging opportunities in renewable energy, sustainable agriculture, and clean technology across African markets.',
    excerptFr: 'Decouvrez les opportunites emergantes dans les energies renouvelables, l\'agriculture durable et les technologies propres sur les marches africains.',
    category: 'Green Tech',
    categoryColor: 'emerald',
    image: '/cap_energy_sustainability.webp',
    date: '2024-03-08',
    readTime: '7 min',
  },
  {
    slug: 'aviation-infrastructure-africa',
    key: 'post3',
    titleEn: 'Aviation Infrastructure: Key to Africa\'s Economic Connectivity',
    titleFr: 'Infrastructure Aeronautique: Cle de la Connectivite Economique Africaine',
    excerptEn: 'Learn how modern airport infrastructure is unlocking new economic opportunities and connecting African markets to the world.',
    excerptFr: 'Decouvrez comment les infrastructures aeroportuaires modernes debloquent de nouvelles opportunites economiques et connectent les marches africains au monde.',
    category: 'Aviation',
    categoryColor: 'cyan',
    image: '/project_aviation_panorama.webp',
    date: '2024-02-28',
    readTime: '5 min',
  },
];

export default function Blog() {
  const pageRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

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
      title: 'Blog - GPD Consulting | Insights on Africa Development',
      description: 'Expert insights and analysis on infrastructure, energy, mining, and economic development across Africa. Stay informed with GPD Consulting\'s latest articles.',
      keywords: 'Africa development blog, infrastructure insights, energy Africa, mining Africa, economic development, GPD Consulting blog',
    },
    fr: {
      title: 'Blog - GPD Consulting | Perspectives sur le Developpement en Afrique',
      description: 'Perspectives et analyses d\'experts sur les infrastructures, l\'energie, les mines et le developpement economique en Afrique. Restez informe avec les derniers articles de GPD Consulting.',
      keywords: 'blog developpement Afrique, perspectives infrastructure, energie Afrique, mines Afrique, developpement economique, blog GPD Consulting',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Blog' : 'Blog', url: 'https://gdpconsults.ca/blog' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: language === 'fr' ? 'Blog GPD Consulting' : 'GPD Consulting Blog',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/blog',
    publisher: {
      '@type': 'Organization',
      name: 'GPD Consulting',
      url: 'https://gdpconsults.ca',
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpconsults.ca/blog"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
        {/* Page Header */}
        <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/cap_strategic_advisory.webp" 
              alt="Blog"
              className="w-full h-full object-cover opacity-20"
              width="1920"
              height="1080"
              loading="eager"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-emerald-950/70" />
          </div>
          <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
              <span className="text-emerald-400 text-sm font-medium tracking-wide">
                {language === 'fr' ? 'Nos Perspectives' : 'Our Insights'}
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight mb-6">
              {language === 'fr' ? 'Notre ' : 'Our '}
              <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl">
              {language === 'fr' 
                ? 'Perspectives et analyses d\'experts sur le developpement en Afrique.'
                : 'Expert insights and analysis on development in Africa.'}
            </p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  className="animate-item group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={post.image}
                      alt={language === 'fr' ? post.titleFr : post.titleEn}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      width="600"
                      height="375"
                      loading="lazy"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full bg-${post.categoryColor}-500 text-white text-xs font-semibold`}>
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-gray-400 text-sm mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="font-heading text-xl font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
                      {language === 'fr' ? post.titleFr : post.titleEn}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4">
                      {language === 'fr' ? post.excerptFr : post.excerptEn}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center">
                          <User className="w-4 h-4 text-emerald-600" />
                        </div>
                        <span className="text-sm text-gray-600">GPD Consulting</span>
                      </div>
                      <span className="text-emerald-600 text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                        {language === 'fr' ? 'Lire' : 'Read'}
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="animate-section py-24 px-4 md:px-8 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl p-8 md:p-12 text-center">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4 animate-item">
                {language === 'fr' ? 'Restez Informe' : 'Stay Informed'}
              </h2>
              <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto animate-item">
                {language === 'fr' 
                  ? 'Abonnez-vous a notre newsletter pour recevoir les dernieres perspectives sur le developpement en Afrique.'
                  : 'Subscribe to our newsletter to receive the latest insights on development in Africa.'}
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-item" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder={language === 'fr' ? 'Votre email' : 'Your email'}
                  className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button 
                  type="submit"
                  className="px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
                >
                  {language === 'fr' ? 'S\'abonner' : 'Subscribe'}
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
