import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Shield, Lock, Eye, Database, Mail } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Politique de Confidentialité' : 'Privacy Policy', url: 'https://gdpconsults.ca/privacy-policy' },
  ];

  const seoData = {
    en: {
      title: 'Privacy Policy - GPD Consulting',
      description: 'Learn how GPD Consulting collects, uses, and protects your personal information. Read our privacy policy to understand your rights and our data protection practices.',
    },
    fr: {
      title: 'Politique de Confidentialité - GPD Consulting',
      description: 'Découvrez comment GPD Consulting collecte, utilise et protège vos informations personnelles. Lisez notre politique de confidentialité pour comprendre vos droits et nos pratiques de protection des données.',
    },
  };

  const currentSeo = seoData[language];

  const content = {
    en: {
      title: 'Privacy Policy',
      lastUpdated: 'Last Updated: March 6, 2026',
      intro: 'GPD Consulting ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.',
      sections: [
        {
          icon: Eye,
          title: 'Information We Collect',
          content: 'We may collect personal information that you voluntarily provide to us when you use our contact form, including your name, email address, phone number, organization name, and any message you submit. We also collect non-personal information such as browser type, operating system, and IP address through standard server logs.'
        },
        {
          icon: Database,
          title: 'How We Use Your Information',
          content: 'We use the information we collect to respond to your inquiries, provide our consulting services, improve our website, and communicate with you about our services. We do not sell, trade, or rent your personal information to third parties.'
        },
        {
          icon: Lock,
          title: 'Data Security',
          content: 'We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.'
        },
        {
          icon: Shield,
          title: 'Your Rights',
          content: 'Under Canadian privacy laws (PIPEDA) and GDPR (for EU residents), you have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at info@gdpconsults.ca.'
        },
        {
          icon: Mail,
          title: 'Contact Us',
          content: 'If you have any questions about this Privacy Policy, please contact us at info@gdpconsults.ca or by mail at: GPD Consulting, 100 King Street West, Suite 5700, Toronto, Ontario M5X 1C7, Canada.'
        }
      ]
    },
    fr: {
      title: 'Politique de Confidentialité',
      lastUpdated: 'Dernière mise à jour : 6 mars 2026',
      intro: 'GPD Consulting ("nous", "notre") s\'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site Web.',
      sections: [
        {
          icon: Eye,
          title: 'Informations que nous collectons',
          content: 'Nous pouvons collecter des informations personnelles que vous nous fournissez volontairement lorsque vous utilisez notre formulaire de contact, y compris votre nom, adresse e-mail, numéro de téléphone, nom de l\'organisation et tout message que vous soumettez. Nous collectons également des informations non personnelles telles que le type de navigateur, le système d\'exploitation et l\'adresse IP via les journaux de serveur standard.'
        },
        {
          icon: Database,
          title: 'Comment nous utilisons vos informations',
          content: 'Nous utilisons les informations que nous collectons pour répondre à vos demandes, fournir nos services de conseil, améliorer notre site Web et communiquer avec vous concernant nos services. Nous ne vendons, n\'échangeons ni ne louons vos informations personnelles à des tiers.'
        },
        {
          icon: Lock,
          title: 'Sécurité des données',
          content: 'Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès, altération, divulgation ou destruction non autorisés. Cependant, aucune méthode de transmission sur Internet n\'est 100% sécurisée.'
        },
        {
          icon: Shield,
          title: 'Vos droits',
          content: 'En vertu des lois canadiennes sur la protection de la vie privée (PIPEDA) et du RGPD (pour les résidents de l\'UE), vous avez le droit d\'accéder, de corriger ou de supprimer vos informations personnelles. Pour exercer ces droits, veuillez nous contacter à info@gdpconsults.ca.'
        },
        {
          icon: Mail,
          title: 'Nous contacter',
          content: 'Si vous avez des questions concernant cette politique de confidentialité, veuillez nous contacter à info@gdpconsults.ca ou par courrier à : GPD Consulting, 100 King Street West, Suite 5700, Toronto, Ontario M5X 1C7, Canada.'
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        canonicalUrl="https://gdpconsults.ca/privacy-policy"
        breadcrumbs={breadcrumbs}
      />
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {currentContent.title}
          </h1>
          <p className="text-gray-500">{currentContent.lastUpdated}</p>
        </div>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-600 leading-relaxed">{currentContent.intro}</p>
        </div>

        <div className="space-y-8">
          {currentContent.sections.map((section, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            {language === 'en' 
              ? 'By using our website, you consent to our Privacy Policy.'
              : 'En utilisant notre site Web, vous consentez à notre politique de confidentialité.'}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
