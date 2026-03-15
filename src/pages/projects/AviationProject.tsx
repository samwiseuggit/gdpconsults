import { useLanguage } from '../../contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectPage() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Projet' : 'Project'}
          </h1>
          <p className="text-gray-600">
            {language === 'fr' ? 'Détails du projet à venir.' : 'Project details coming soon.'}
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors"
          >
            {language === 'fr' ? 'Retour aux Projets' : 'Back to Projects'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
