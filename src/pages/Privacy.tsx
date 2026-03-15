import { useLanguage } from '../contexts/LanguageContext';

export default function Privacy() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Politique de ' : 'Privacy '}
              <span className="gradient-text">{language === 'fr' ? 'Confidentialité' : 'Policy'}</span>
            </h1>
            <p className="text-gray-600">
              {language === 'fr' 
                ? 'Dernière mise à jour : Mars 2024'
                : 'Last updated: March 2024'}
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
            <div className="prose prose-lg max-w-none text-gray-600">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '1. Introduction' : '1. Introduction'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'GPD Consulting ("nous", "notre" ou "nos") respecte votre vie privée et s\'engage à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web.'
                  : 'GPD Consulting ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, and protect your information when you use our website.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '2. Informations que Nous Collectons' : '2. Information We Collect'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Nous pouvons collecter les types d\'informations suivants : informations de contact (nom, email, téléphone), informations professionnelles (organisation, poste), et données d\'utilisation du site web.'
                  : 'We may collect the following types of information: contact information (name, email, phone), professional information (organization, position), and website usage data.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '3. Comment Nous Utilisons Vos Informations' : '3. How We Use Your Information'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Nous utilisons vos informations pour : répondre à vos demandes, fournir nos services, améliorer notre site web, et vous envoyer des communications marketing (avec votre consentement).'
                  : 'We use your information to: respond to your inquiries, provide our services, improve our website, and send you marketing communications (with your consent).'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '4. Protection des Données' : '4. Data Protection'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données personnelles contre l\'accès non autorisé, la modification, la divulgation ou la destruction.'
                  : 'We implement appropriate security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '5. Vos Droits' : '5. Your Rights'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Vous avez le droit d\'accéder, de corriger ou de supprimer vos données personnelles. Pour exercer ces droits, veuillez nous contacter à info@gdpconsults.ca.'
                  : 'You have the right to access, correct, or delete your personal data. To exercise these rights, please contact us at info@gdpconsults.ca.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '6. Contact' : '6. Contact'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à info@gdpconsults.ca.'
                  : 'If you have any questions about this privacy policy, please contact us at info@gdpconsults.ca.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
