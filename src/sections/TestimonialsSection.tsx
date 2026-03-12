import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    nameEn: 'Dr. Amara Diallo',
    nameFr: 'Dr. Amara Diallo',
    titleEn: 'Minister of Infrastructure',
    titleFr: 'Ministre des Infrastructures',
    organizationEn: 'Government of Senegal',
    organizationFr: 'Gouvernement du Senegal',
    quoteEn: 'GPD Consulting has been instrumental in helping us develop sustainable infrastructure projects. Their expertise in public-private partnerships has transformed how we approach large-scale developments.',
    quoteFr: 'GPD Consulting a joue un role essentiel dans le developpement de nos projets d\'infrastructure durables. Leur expertise en partenariats public-prive a transforme notre approche des grands projets.',
    rating: 5,
    initials: 'AD',
  },
  {
    nameEn: 'Sarah Mitchell',
    nameFr: 'Sarah Mitchell',
    titleEn: 'Director of African Operations',
    titleFr: 'Directrice des Operations Africaines',
    organizationEn: 'Global Infrastructure Fund',
    organizationFr: 'Fonds d\'Infrastructure Mondial',
    quoteEn: 'Working with GPD Consulting on our renewable energy investments in East Africa has been exceptional. Their local knowledge combined with international expertise delivers outstanding results.',
    quoteFr: 'Travailler avec GPD Consulting sur nos investissements en energie renouvelable en Afrique de l\'Est a ete exceptionnel. Leur connaissance locale combinee a une expertise internationale offre des resultats remarquables.',
    rating: 5,
    initials: 'SM',
  },
  {
    nameEn: 'Jean-Pierre Ouedraogo',
    nameFr: 'Jean-Pierre Ouedraogo',
    titleEn: 'CEO',
    titleFr: 'PDG',
    organizationEn: 'Burkina Mining Corporation',
    organizationFr: 'Societe Miniere du Burkina',
    quoteEn: 'The team at GPD Consulting provided invaluable support during our mine expansion project. Their understanding of regulatory frameworks and stakeholder management was crucial to our success.',
    quoteFr: 'L\'equipe de GPD Consulting a fourni un soutien inestimable lors de notre projet d\'expansion miniere. Leur comprehension des cadres reglementaires et de la gestion des parties prenantes a ete cruciale pour notre succes.',
    rating: 5,
    initials: 'JO',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
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
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
              {language === 'fr' ? 'Temoignages' : 'Testimonials'}
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 animate-item">
            {language === 'fr' ? 'Ce Que Disent ' : 'What Our '}
            <span className="gradient-text">{language === 'fr' ? 'Nos Clients' : 'Clients Say'}</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="animate-item bg-white rounded-3xl p-8 shadow-lg shadow-emerald-500/5 border border-gray-100 hover:border-emerald-100 transition-all duration-500 relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              {/* Quote */}
              <p className="text-gray-600 leading-relaxed mb-8">
                "{language === 'fr' ? testimonial.quoteFr : testimonial.quoteEn}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{language === 'fr' ? testimonial.nameFr : testimonial.nameEn}</div>
                  <div className="text-gray-500 text-sm">{language === 'fr' ? testimonial.titleFr : testimonial.titleEn}</div>
                  <div className="text-emerald-600 text-xs">{language === 'fr' ? testimonial.organizationFr : testimonial.organizationEn}</div>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}
