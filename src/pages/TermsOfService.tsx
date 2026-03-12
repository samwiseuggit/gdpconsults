import { useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FileText, Scale, AlertTriangle, Copyright, Globe } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsOfService() {
  const { language } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Conditions d\'utilisation' : 'Terms of Service', url: 'https://gdpconsults.ca/terms-of-service' },
  ];

  const seoData = {
    en: {
      title: 'Terms of Service - GPD Consulting',
      description: 'Read the Terms of Service for using the GPD Consulting website. Understand your rights, responsibilities, and our legal agreements.',
    },
    fr: {
      title: 'Conditions d\'utilisation - GPD Consulting',
      description: 'Lisez les conditions d\'utilisation du site Web de GPD Consulting. Comprenez vos droits, responsabilités et nos accords légaux.',
    },
  };

  const currentSeo = seoData[language];

  const content = {
    en: {
      title: 'Terms of Service',
      lastUpdated: 'Last Updated: March 6, 2026',
      intro: 'Please read these Terms of Service carefully before using the GPD Consulting website. By accessing or using our website, you agree to be bound by these terms.',
      sections: [
        {
          icon: FileText,
          title: 'Acceptance of Terms',
          content: 'By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use this website.'
        },
        {
          icon: Scale,
          title: 'Use of Website',
          content: 'You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, restrict or inhibit anyone else\'s use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.'
        },
        {
          icon: Copyright,
          title: 'Intellectual Property',
          content: 'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of GPD Consulting or its content suppliers and is protected by Canadian and international copyright laws. Unauthorized use, reproduction, or distribution of any content is strictly prohibited.'
        },
        {
          icon: AlertTriangle,
          title: 'Limitation of Liability',
          content: 'GPD Consulting shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from your access to or use of, or inability to access or use, this website or any content on it. This includes damages for loss of profits, goodwill, use, data, or other intangible losses.'
        },
        {
          icon: Globe,
          title: 'Governing Law',
          content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Ontario.'
        }
      ],
      contact: {
        title: 'Contact Information',
        content: 'If you have any questions about these Terms of Service, please contact us at info@gdpconsults.ca or by mail at: GPD Consulting, 100 King Street West, Suite 5700, Toronto, Ontario M5X 1C7, Canada.'
      }
    },
    fr: {
      title: 'Conditions d\'utilisation',
      lastUpdated: 'Dernière mise à jour : 6 mars 2026',
      intro: 'Veuillez lire attentivement ces conditions d\'utilisation avant d\'utiliser le site Web de GPD Consulting. En accédant ou en utilisant notre site Web, vous acceptez d\'être lié par ces conditions.',
      sections: [
        {
          icon: FileText,
          title: 'Acceptation des conditions',
          content: 'En accédant et en utilisant ce site Web, vous acceptez et vous engagez à respecter les termes et dispositions de cet accord. Si vous n\'acceptez pas ces conditions, veuillez ne pas utiliser ce site Web.'
        },
        {
          icon: Scale,
          title: 'Utilisation du site Web',
          content: 'Vous acceptez d\'utiliser ce site Web uniquement à des fins légales et d\'une manière qui ne porte pas atteinte aux droits d\'autrui, ne restreint pas ou n\'inhibe pas l\'utilisation et la jouissance du site Web par quiconque. Les comportements interdits incluent le harcèlement ou la cause de détresse ou d\'inconvénient à tout autre utilisateur, la transmission de contenu obscène ou offensant, ou la perturbation du flux normal de dialogue au sein de notre site Web.'
        },
        {
          icon: Copyright,
          title: 'Propriété intellectuelle',
          content: 'Tout le contenu de ce site Web, y compris mais sans s\'y limiter le texte, les graphiques, les logos, les images et les logiciels, est la propriété de GPD Consulting ou de ses fournisseurs de contenu et est protégé par les lois canadiennes et internationales sur le droit d\'auteur. L\'utilisation, la reproduction ou la distribution non autorisées de tout contenu sont strictement interdites.'
        },
        {
          icon: AlertTriangle,
          title: 'Limitation de responsabilité',
          content: 'GPD Consulting ne sera pas responsable des dommages directs, indirects, accidentels, spéciaux, consécutifs ou punitifs résultant de votre accès à ou utilisation de, ou incapacité à accéder ou utiliser, ce site Web ou tout contenu sur celui-ci. Cela inclut les dommages pour perte de profits, de clientèle, d\'utilisation, de données ou d\'autres pertes intangibles.'
        },
        {
          icon: Globe,
          title: 'Droit applicable',
          content: 'Ces conditions d\'utilisation sont régies et interprétées conformément aux lois de la province de l\'Ontario et aux lois fédérales du Canada applicables. Tout litige découlant de ces conditions sera soumis à la juridiction exclusive des tribunaux de l\'Ontario.'
        }
      ],
      contact: {
        title: 'Informations de contact',
        content: 'Si vous avez des questions concernant ces conditions d\'utilisation, veuillez nous contacter à info@gdpconsults.ca ou par courrier à : GPD Consulting, 100 King Street West, Suite 5700, Toronto, Ontario M5X 1C7, Canada.'
      }
    }
  };

  const currentContent = content[language];

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        canonicalUrl="https://gdpconsults.ca/terms-of-service"
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

        <div className="mt-12 bg-emerald-50 rounded-2xl p-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">{currentContent.contact.title}</h2>
          <p className="text-gray-600 leading-relaxed">{currentContent.contact.content}</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 text-center">
            {language === 'en' 
              ? 'By continuing to use our website, you acknowledge that you have read and understood these Terms of Service.'
              : 'En continuant à utiliser notre site Web, vous reconnaissez avoir lu et compris ces conditions d\'utilisation.'}
          </p>
        </div>
      </div>
    </div>
    </>
  );
}
