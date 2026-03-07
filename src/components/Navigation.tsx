import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, MapPin, Clock, Mail, Linkedin, Twitter, Instagram } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const navLinks = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/about' },
  { key: 'nav.services', href: '/services' },
  { key: 'nav.projects', href: '/projects' },
  { key: 'nav.contact', href: '/contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const isActive = (href: string) => {
    const path = href.split('#')[0];
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname === path) return true;
    return false;
  };

  return (
    <>
      {/* Top Bar - Premium */}
      <div className="bg-gray-950 text-white/70 text-xs py-3 px-4 md:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/20 via-transparent to-emerald-900/20" />
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 relative z-10">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors">
              <MapPin className="w-3.5 h-3.5" />
              <span>Toronto, Canada</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-white/60">
              <Clock className="w-3.5 h-3.5" />
              <span>Mon - Fri: 9:00 - 18:00</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-white/60 hover:text-emerald-400 transition-colors">
              <Mail className="w-3.5 h-3.5" />
              <a href="mailto:info@gdpcconsulting.ca" className="hover:text-emerald-400 transition-colors">
                info@gdpcconsulting.ca
              </a>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://linkedin.com/company/gpd-consulting" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-emerald-500 hover:text-white transition-all duration-300">
              <Linkedin className="w-3 h-3" />
            </a>
            <a href="https://twitter.com/gpdconsulting" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-emerald-500 hover:text-white transition-all duration-300">
              <Twitter className="w-3 h-3" />
            </a>
            <a href="https://instagram.com/gpdconsulting" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center text-white/50 hover:bg-emerald-500 hover:text-white transition-all duration-300">
              <Instagram className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation - Premium */}
      <nav 
        className={`sticky top-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-black/5 py-3' 
            : 'bg-white py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo - Premium */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/logo-white-bg.svg" 
              alt="GPD Consulting" 
              className="h-14 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav - Premium */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                to={link.href}
                className={`relative px-5 py-2.5 text-sm font-medium transition-all duration-300 rounded-full ${
                  isActive(link.href) 
                    ? 'text-emerald-600 bg-emerald-50' 
                    : 'text-gray-600 hover:text-emerald-600 hover:bg-gray-50'
                }`}
              >
                {t(link.key)}
                {isActive(link.href) && (
                  <span className="absolute inset-0 rounded-full bg-emerald-50 -z-10" />
                )}
              </Link>
            ))}
          </div>

          {/* Right Side - Premium */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:flex items-center mr-2">
              <LanguageSwitcher />
            </div>
            <button className="hidden md:flex w-11 h-11 items-center justify-center text-gray-500 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>
            <button 
              className="lg:hidden w-11 h-11 flex items-center justify-center text-gray-600 hover:bg-gray-100 rounded-full transition-all"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
            <Link 
              to="/contact#contact-form"
              className="hidden md:inline-flex btn-primary"
            >
              <span>{t('nav.cta')}</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Premium */}
      <div 
        className={`fixed inset-0 z-[99] transition-all duration-500 lg:hidden ${
          isMobileMenuOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div 
          className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl transition-transform duration-500 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <Link to="/">
                <img 
                  src="/logo-white-bg.svg" 
                  alt="GPD Consulting" 
                  className="h-12 w-auto object-contain"
                />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <div className="flex flex-col p-6 gap-2">
              <div className="mb-4 px-4">
                <LanguageSwitcher />
              </div>
              {navLinks.map((link, index) => (
                <Link
                  key={link.key}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${
                    isActive(link.href) 
                      ? 'text-emerald-600 bg-emerald-50' 
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {t(link.key)}
                </Link>
              ))}
            </div>
            <div className="mt-auto p-6 border-t border-gray-100">
              <Link 
                to="/contact#contact-form"
                className="btn-primary w-full text-center flex items-center justify-center"
              >
                <span>{t('nav.cta')}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
