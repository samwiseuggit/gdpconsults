import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Linkedin, Twitter, Instagram, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useState } from 'react';

export default function Footer() {
  const { t, language } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert(language === 'fr' ? 'Merci de vous être abonné!' : 'Thank you for subscribing!');
    setEmail('');
  };

  const quickLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/about', label: t('nav.about') },
    { to: '/services', label: t('nav.services') },
    { to: '/projects', label: t('nav.projects') },
    { to: '/blog', label: t('nav.blog') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const services = [
    { to: '/services/governmental-affairs', label: language === 'fr' ? 'Affaires Gouvernementales' : 'Governmental Affairs' },
    { to: '/services/project-finance', label: language === 'fr' ? 'Finance de Projet' : 'Project Finance' },
    { to: '/services/international-partnerships', label: language === 'fr' ? 'Partenariats Internationaux' : 'International Partnerships' },
    { to: '/services/mining-operations', label: language === 'fr' ? 'Opérations Minières' : 'Mining Operations' },
    { to: '/services/infrastructure-development', label: language === 'fr' ? 'Développement d\'Infrastructure' : 'Infrastructure Development' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo-light-bg.png"
                alt="GPD Consulting"
                className="h-14 w-auto object-contain"
                width="140"
                height="56"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com/company/gpd-consulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                aria-label="Follow GPD Consulting on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/gpdconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                aria-label="Follow GPD Consulting on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/gpdconsulting"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-emerald-500 transition-colors"
                aria-label="Follow GPD Consulting on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">{t('footer.services')}</h3>
            <ul className="space-y-3">
              {services.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-emerald-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-6">{t('footer.contact')}</h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-sm">
                  100 King Street West, Suite 5700<br />
                  Toronto, ON M5X 1C7, Canada
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a href="tel:+14166175638" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  +1 (416) 617-5638
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                <a href="mailto:info@gdpconsults.ca" className="text-gray-400 hover:text-emerald-400 transition-colors text-sm">
                  info@gdpconsults.ca
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">{t('footer.newsletter')}</h4>
              <p className="text-gray-400 text-sm mb-4">{t('footer.newsletter.desc')}</p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('footer.email.placeholder')}
                  className="flex-1 px-4 py-2 bg-white/10 rounded-lg text-sm text-white placeholder-gray-500 border border-white/10 focus:border-emerald-500 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-emerald-500 rounded-lg hover:bg-emerald-600 transition-colors"
                  aria-label={t('footer.subscribe')}
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} GPD Consulting. {t('footer.rights')}
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="text-gray-500 hover:text-emerald-400 transition-colors text-sm">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
