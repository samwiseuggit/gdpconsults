import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Download } from 'lucide-react';

export default function About() {
  const { t, language } = useLanguage();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('about.tagline')}</span>
            </div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              {t('about.title').split(' ').slice(0, 4).join(' ')}{' '}
              <span className="gradient-text">{t('about.title').split(' ').slice(4).join(' ')}</span>
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {language === 'fr' ? 'Notre Histoire' : 'Our Story'}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'fr' 
                  ? 'Fondée en 2009, GPD Consulting est née d\'une vision de créer des ponts entre les marchés mondiaux et les opportunités africaines. Au fil des années, nous sommes devenus un partenaire de confiance pour les gouvernements, les entreprises et les organisations internationales à travers le continent.'
                  : 'Founded in 2009, GPD Consulting was born from a vision to create bridges between global markets and African opportunities. Over the years, we have become a trusted partner for governments, businesses, and international organizations across the continent.'}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                {language === 'fr'
                  ? 'Notre équipe combine une expertise locale approfondie avec une perspective internationale, nous permettant de naviguer dans les environnements complexes et de livrer des résultats exceptionnels.'
                  : 'Our team combines deep local expertise with an international perspective, enabling us to navigate complex environments and deliver exceptional results.'}
              </p>
              <a
                href="mailto:info@gdpconsults.ca?subject=Capability%20Statement%20Request"
                className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-600 transition-colors"
              >
                <Download className="w-5 h-5" />
                {language === 'fr' ? 'Télécharger la Fiche de Compétences' : 'Download Capability Statement'}
              </a>
            </div>
            <div className="relative">
              <img
                src="/cap_strategic_advisory.webp"
                alt="GPD Consulting Team"
                className="rounded-3xl shadow-2xl"
                width="600"
                height="400"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-500 text-white p-6 rounded-2xl">
                <div className="font-heading text-4xl font-bold">15+</div>
                <div className="text-sm opacity-90">{language === 'fr' ? 'Années d\'Expérience' : 'Years of Experience'}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900">
              {t('contact.info.title')}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{t('contact.info.address')}</h3>
              <p className="text-gray-600">
                100 King Street West, Suite 5700<br />
                Toronto, ON M5X 1C7, Canada
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Phone className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{t('contact.info.phone')}</h3>
              <a href="tel:+14166175638" className="text-gray-600 hover:text-emerald-600 transition-colors">
                +1 (416) 617-5638
              </a>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="w-7 h-7 text-emerald-600" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">{t('contact.info.email')}</h3>
              <a href="mailto:info@gdpconsults.ca" className="text-gray-600 hover:text-emerald-600 transition-colors">
                info@gdpconsults.ca
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
