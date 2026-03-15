import { useLanguage } from '../../contexts/LanguageContext';
import { Landmark, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GovernmentalAffairs() {
  const { language } = useLanguage();

  const features = language === 'fr' ? [
    'Relations avec les entités gouvernementales',
    'Navigation dans les cadres réglementaires',
    'Conformité aux politiques gouvernementales',
    'Facilitation des processus d\'approbation',
    'Conseil sur les politiques publiques',
    'Gestion des parties prenantes',
  ] : [
    'Government entity relations',
    'Regulatory framework navigation',
    'Government policy compliance',
    'Approval process facilitation',
    'Public policy advisory',
    'Stakeholder management',
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gradient-to-br from-emerald-900 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-emerald-500 rounded-2xl flex items-center justify-center">
              <Landmark className="w-7 h-7 text-white" />
            </div>
            <span className="text-emerald-400 font-medium">
              {language === 'fr' ? 'Nos Services' : 'Our Services'}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {language === 'fr' ? 'Affaires ' : 'Governmental '}
            <span className="text-emerald-400">{language === 'fr' ? 'Gouvernementales' : 'Affairs'}</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            {language === 'fr'
              ? 'Navigation dans les environnements réglementaires complexes et établissement de relations positives avec les entités gouvernementales.'
              : 'Navigating complex regulatory environments and fostering positive relationships with government entities.'}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl font-bold text-gray-900 mb-6">
                {language === 'fr' ? 'Notre Expertise' : 'Our Expertise'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                {language === 'fr'
                  ? 'Notre équipe d\'experts en affaires gouvernementales possède une compréhension approfondie des processus décisionnels gouvernementaux et des cadres réglementaires à travers l\'Afrique. Nous aidons nos clients à naviguer dans les complexités bureaucratiques et à établir des relations productives avec les entités gouvernementales.'
                  : 'Our team of government affairs experts possesses a deep understanding of government decision-making processes and regulatory frameworks across Africa. We help our clients navigate bureaucratic complexities and establish productive relationships with government entities.'}
              </p>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <img
                src="/cap_strategic_advisory.webp"
                alt="Governmental Affairs"
                className="rounded-3xl shadow-2xl"
                width="600"
                height="400"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Prêt à Démarrer?' : 'Ready to Get Started?'}
          </h2>
          <p className="text-gray-600 mb-8">
            {language === 'fr'
              ? 'Contactez-nous pour discuter de vos besoins en matière d\'affaires gouvernementales.'
              : 'Contact us to discuss your governmental affairs needs.'}
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors"
          >
            {language === 'fr' ? 'Nous Contacter' : 'Contact Us'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
