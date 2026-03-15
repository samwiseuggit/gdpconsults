import { useLanguage } from '../contexts/LanguageContext';

export default function Terms() {
  const { language } = useLanguage();

  return (
    <div className="pt-20">
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {language === 'fr' ? 'Conditions d\'' : 'Terms of '}
              <span className="gradient-text">{language === 'fr' ? 'Utilisation' : 'Service'}</span>
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
                {language === 'fr' ? '1. Acceptation des Conditions' : '1. Acceptance of Terms'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'En accédant et en utilisant ce site web, vous acceptez d\'être lié par ces conditions d\'utilisation. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser notre site.'
                  : 'By accessing and using this website, you agree to be bound by these terms of service. If you do not agree to these terms, please do not use our website.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '2. Utilisation du Site' : '2. Use of the Website'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Vous acceptez d\'utiliser ce site uniquement à des fins légales et d\'une manière qui ne porte pas atteinte aux droits d\'autrui ou ne restreint pas l\'utilisation du site par d\'autres personnes.'
                  : 'You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others or restrict their use of the website.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '3. Propriété Intellectuelle' : '3. Intellectual Property'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Tout le contenu de ce site, y compris les textes, graphiques, logos et images, est la propriété de GPD Consulting ou de ses concédants de licence et est protégé par les lois sur la propriété intellectuelle.'
                  : 'All content on this website, including text, graphics, logos, and images, is the property of GPD Consulting or its licensors and is protected by intellectual property laws.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '4. Limitation de Responsabilité' : '4. Limitation of Liability'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'GPD Consulting ne sera pas responsable des dommages directs, indirects, accessoires ou consécutifs résultant de l\'utilisation ou de l\'impossibilité d\'utiliser ce site.'
                  : 'GPD Consulting shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '5. Liens Externes' : '5. External Links'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Ce site peut contenir des liens vers des sites externes. GPD Consulting n\'est pas responsable du contenu ou des pratiques de confidentialité de ces sites.'
                  : 'This website may contain links to external websites. GPD Consulting is not responsible for the content or privacy practices of these websites.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '6. Modifications' : '6. Modifications'}
              </h2>
              <p className="mb-6">
                {language === 'fr'
                  ? 'Nous nous réservons le droit de modifier ces conditions à tout moment. Les modifications prendront effet immédiatement après leur publication sur le site.'
                  : 'We reserve the right to modify these terms at any time. Changes will take effect immediately upon posting to the website.'}
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {language === 'fr' ? '7. Contact' : '7. Contact'}
              </h2>
              <p>
                {language === 'fr'
                  ? 'Si vous avez des questions concernant ces conditions, veuillez nous contacter à info@gdpconsults.ca.'
                  : 'If you have any questions about these terms, please contact us at info@gdpconsults.ca.'}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
