import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export default function CTASection() {
  const { language } = useLanguage();

  return (
    <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-400/5 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          {language === 'fr' ? 'Prêt à Transformer ' : 'Ready to Transform '}
          <span className="gradient-text">{language === 'fr' ? 'Votre Vision?' : 'Your Vision?'}</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
          {language === 'fr' 
            ? 'Discutons de la façon dont GPD Consulting peut vous aider à atteindre vos objectifs de développement.'
            : 'Let\'s discuss how GPD Consulting can help you achieve your development goals.'}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors group"
          >
            {language === 'fr' ? 'Démarrer un Projet' : 'Start Your Project'}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="tel:+14166175638"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/10 transition-colors"
          >
            <Phone className="w-5 h-5" />
            {language === 'fr' ? 'Nous Appeler' : 'Call Us'}
          </a>
        </div>
      </div>
    </section>
  );
}
