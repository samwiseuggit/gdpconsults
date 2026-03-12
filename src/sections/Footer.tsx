import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Linkedin, Twitter, Instagram, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

const footerLinks = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.services', href: '/services' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.contact', href: '/contact' },
];

const services = [
  { key: 'service.advisory', href: '/services' },
  { key: 'service.finance', href: '/services' },
  { key: 'service.infrastructure', href: '/services' },
  { key: 'service.ppp', href: '/services' },
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(footer.querySelectorAll('.footer-col'),
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: footer,
            start: 'top 90%',
          }
        }
      );
    }, footer);

    return () => ctx.revert();
  }, []);

  return (
    <footer 
      ref={footerRef}
      className="bg-gray-950 text-white relative overflow-hidden"
    >
      {/* Top Gradient Line */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl" />

      {/* CTA Section */}
      <div className="relative py-20 px-4 md:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t('footer.cta.title').split(' ').slice(0, 3).join(' ')}<br />
                <span className="gradient-text">{t('footer.cta.title').split(' ').slice(3).join(' ')}</span>
              </h2>
              <p className="text-gray-400 max-w-md">
                {t('footer.cta.description')}
              </p>
            </div>
            <Link 
              to="/contact#contact-form"
              className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-emerald-400 transition-all duration-300 group whitespace-nowrap"
            >
              <span>{t('footer.cta.button')}</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Logo & Description */}
            <div className="footer-col lg:col-span-4">
              <Link to="/" className="block mb-6 group">
                <img 
                  src="/logo-black-bg.svg" 
                  alt="GPD Consulting" 
                  className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                {t('footer.description')}
              </p>
              <div className="flex items-center gap-3">
                <a 
                  href="https://linkedin.com/company/gpd-consulting" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow GPD Consulting on LinkedIn"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com/gpdconsulting" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow GPD Consulting on Twitter"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com/gpdconsulting" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Follow GPD Consulting on Instagram"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-emerald-500 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col lg:col-span-2">
              <h4 className="text-white font-semibold mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.key}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {t(link.key)}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-col lg:col-span-2">
              <h4 className="text-white font-semibold mb-6">{t('footer.services')}</h4>
              <ul className="space-y-3">
                {services.map((link) => (
                  <li key={link.key}>
                    <Link 
                      to={link.href}
                      className="text-gray-400 text-sm hover:text-emerald-400 transition-colors inline-flex items-center gap-1 group"
                    >
                      {t(link.key)}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col lg:col-span-4">
              <h4 className="text-white font-semibold mb-6">{t('footer.contact')}</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-emerald-500" />
                  </div>
                  <a 
                    href="https://maps.google.com/?q=100+King+Street+West+Suite+5700+Toronto+Ontario+M5X+1C7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 text-sm hover:text-emerald-400 transition-colors"
                  >
                    <p>100 King Street West, Suite 5700</p>
                    <p className="text-gray-500">Toronto, Ontario M5X 1C7</p>
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-emerald-500" />
                  </div>
                  <a href="mailto:info@gdpconsults.ca" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                    info@gdpconsults.ca
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-emerald-500" />
                  </div>
                  <a href="tel:+14166175638" className="text-gray-300 text-sm hover:text-emerald-400 transition-colors">
                    +1 416 617 5638
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-6 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500 text-sm">
            © 2026 GPD Consulting. {t('footer.rights')}
          </div>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-emerald-400 transition-colors">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-emerald-400 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
