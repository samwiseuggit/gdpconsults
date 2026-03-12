import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Clock, Globe, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  { icon: Mail, key: 'email', value: 'info@gdpconsults.ca', href: 'mailto:info@gdpconsults.ca', external: false },
  { icon: Phone, key: 'phone', value: '+1 416 617 5638', href: 'tel:+14166175638', external: false },
  { icon: MapPin, key: 'address', value: '100 King Street West, Suite 5700, Toronto, Ontario M5X 1C7', href: 'https://maps.google.com/?q=100+King+Street+West+Suite+5700+Toronto+Ontario+M5X+1C7', external: true },
];

export default function Contact() {
  const pageRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const { t, language } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.animate-section').forEach((section) => {
        gsap.fromTo(section.querySelectorAll('.animate-item'),
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.7,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 80%',
            }
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const [submitError, setSubmitError] = useState('');
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    // Mark all fields as touched on submit attempt
    setTouched({ name: true, email: true, subject: true, message: true });
    
    try {
      // Get API URL from environment or use default
      const API_URL = import.meta.env.VITE_API_URL || '/api';
      
      const response = await fetch(`${API_URL}/contact`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          formName: 'contact-page'
        })
      });
      
      const data = await response.json();
      
      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        console.error('Form submission failed:', data.error);
        setSubmitError(data.error || 'Submission failed. Please try again or contact us directly at info@gdpconsults.ca');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Network error. Please try again or contact us directly at info@gdpconsults.ca');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    setTouched(prev => ({ ...prev, [e.target.name]: true }));
  };

  const seoData = {
    en: {
      title: 'Contact Us - GPD Consulting | Start a Partnership Today',
      description: 'Contact GPD Consulting to discuss your project, partnership opportunities, or learn more about our services. Reach us by phone, email, or through our online form.',
      keywords: 'contact GPD Consulting, partnership inquiry, project discussion, consulting contact, Africa development contact',
    },
    fr: {
      title: 'Contactez-Nous - GPD Consulting | Démarrez un Partenariat Aujourd\'hui',
      description: 'Contactez GPD Consulting pour discuter de votre projet, des opportunités de partenariat ou pour en savoir plus sur nos services. Joignez-nous par téléphone, email ou via notre formulaire en ligne.',
      keywords: 'contact GPD Consulting, demande partenariat, discussion projet, contact conseil, contact développement Afrique',
    },
  };

  const currentSeo = seoData[language];

  const breadcrumbs = [
    { name: language === 'fr' ? 'Accueil' : 'Home', url: 'https://gdpconsults.ca/' },
    { name: language === 'fr' ? 'Contact' : 'Contact', url: 'https://gdpconsults.ca/contact' },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: language === 'fr' ? 'Contact - GPD Consulting' : 'Contact Us - GPD Consulting',
    description: currentSeo.description,
    url: 'https://gdpconsults.ca/contact',
    mainEntity: {
      '@type': 'Organization',
      name: 'GPD Consulting',
      url: 'https://gdpconsults.ca',
      logo: 'https://gdpconsults.ca/logo-white-bg.svg',
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+1-416-617-5638',
        contactType: 'customer service',
        email: 'info@gdpconsults.ca',
        availableLanguage: ['English', 'French'],
      },
      address: {
        '@type': 'PostalAddress',
        streetAddress: '100 King Street West, Suite 5700',
        addressLocality: 'Toronto',
        addressRegion: 'Ontario',
        postalCode: 'M5X 1C7',
        addressCountry: 'CA',
      },
    },
  };

  return (
    <>
      <SEO
        title={currentSeo.title}
        description={currentSeo.description}
        keywords={currentSeo.keywords}
        canonicalUrl="https://gdpconsults.ca/contact"
        structuredData={structuredData}
        breadcrumbs={breadcrumbs}
      />
      <div ref={pageRef} className="bg-white">
      {/* Page Header */}
      <section className="relative py-32 lg:py-40 px-4 md:px-8 bg-gray-950 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/cap_strategic_advisory.webp" 
            alt="Contact"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-950/95 to-emerald-950/70" />
        </div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full mb-8">
            <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
            <span className="text-emerald-400 text-sm font-medium tracking-wide">{t('contact.page.tagline')}</span>
          </div>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white max-w-4xl leading-tight">
            {t('contact.page.title')} <span className="gradient-text">{t('contact.page.title2')}</span>
          </h1>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="animate-section py-20 px-4 md:px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="animate-item group bg-gray-50 rounded-3xl p-10 text-center hover:bg-white hover:shadow-xl hover:shadow-emerald-500/5 border border-transparent hover:border-emerald-100 transition-all duration-500"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
                  <item.icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">{t(`contact.info.${item.key}`)}</h3>
                <p className="text-gray-500 group-hover:text-emerald-600 transition-colors">{item.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Left Column - Info */}
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6 animate-item">
                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('contact.us.tagline')}</span>
              </div>
              
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-item">
                {t('contact.us.title')} <span className="gradient-text">{t('contact.us.title2')}</span>
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-10 animate-item">
                {t('contact.us.p1')}
              </p>
              
              <div className="space-y-6">
                <div className="animate-item flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/5">
                    <Clock className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">{t('contact.response.title')}</h4>
                    <p className="text-gray-500 text-sm">{t('contact.response.time')}</p>
                  </div>
                </div>
                
                <div className="animate-item flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/5">
                    <Globe className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-semibold mb-1">{t('contact.reach.title')}</h4>
                    <p className="text-gray-500 text-sm">{t('contact.reach.desc')}</p>
                  </div>
                </div>
              </div>

              <div className="animate-item p-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-3xl mt-10 text-white">
                <h4 className="font-heading text-lg font-bold mb-2">{t('contact.hours.title')}</h4>
                <p className="text-emerald-100 text-sm leading-relaxed">
                  {t('contact.hours.weekdays')}<br />
                  {t('contact.hours.weekends')}
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <form 
                name="contact-page"
                action="/contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                ref={formRef}
                onSubmit={handleSubmit}
                id="contact-form"
                className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/5 border border-gray-100"
              >
                <input type="hidden" name="form-name" value="contact-page" />
                <p className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </p>
                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-gray-900 mb-4">
                      {t('contact.form.success.title')}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {t('contact.form.success.msg')}
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="animate-item">
                        <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.name')}</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contact.form.name.placeholder')}
                          className="form-input"
                          required
                        />
                      </div>
                      <div className="animate-item">
                        <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.email')}</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contact.form.email.placeholder')}
                          className="form-input"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="animate-item">
                        <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.org')}</label>
                        <input
                          type="text"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          placeholder={t('contact.form.org.placeholder')}
                          className="form-input"
                        />
                      </div>
                      <div className="animate-item">
                        <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.phone')}</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('contact.form.phone.placeholder')}
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="mb-6 animate-item">
                      <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.subject')}</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                        aria-invalid={touched.subject && formData.subject === ''}
                        aria-describedby={touched.subject && formData.subject === '' ? 'subject-error' : undefined}
                      >
                        <option value="">{t('contact.form.subject.select')}</option>
                        <option value="partnership">{t('contact.form.subject.partnership')}</option>
                        <option value="project">{t('contact.form.subject.project')}</option>
                        <option value="services">{t('contact.form.subject.services')}</option>
                        <option value="career">{t('contact.form.subject.career')}</option>
                        <option value="other">{t('contact.form.subject.other')}</option>
                      </select>
                      {touched.subject && formData.subject === '' && (
                        <span id="subject-error" className="sr-only">{t('contact.form.subject.error')}</span>
                      )}
                    </div>

                    <div className="mb-8 animate-item">
                      <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.message')}</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contact.form.message.placeholder')}
                        rows={5}
                        className="form-input resize-none"
                        required
                      />
                    </div>

                    {submitError && (
                      <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm animate-item">
                        {submitError}
                      </div>
                    )}

                    <button 
                      type="submit"
                      disabled={isSubmitting}
                      className="animate-item btn-primary w-full flex items-center justify-center gap-3 group disabled:opacity-70"
                    >
                      <span>{isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}</span>
                      <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="animate-section py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
              <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('contact.location.tagline')}</span>
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 animate-item">
              {t('contact.location.title')} <span className="gradient-text">{t('contact.location.title2')}</span>
            </h2>
          </div>
          
          <div className="animate-item relative overflow-hidden rounded-3xl shadow-xl shadow-emerald-500/5 border border-emerald-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.9785264960194!2d-79.3831844845023!3d43.6486946791216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d68a2d7f6b%3A0x3c1235c6f9f8c8e0!2s100%20King%20St%20W%2C%20Toronto%2C%20ON%20M5X%201C7%2C%20Canada!5e0!3m2!1sen!2sca!4v1700000000000!5m2!1sen!2sca"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={language === 'fr' ? 'Emplacement de GPD Consulting' : 'GPD Consulting Location'}
              className="w-full"
            />
            <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl max-w-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-gray-900 font-semibold mb-1">{t('contact.location.address1')}</p>
                  <p className="text-gray-500 text-sm">{t('contact.location.address2')}</p>
                  <a 
                    href="https://maps.google.com/?q=100+King+Street+West+Suite+5700+Toronto+Ontario+M5X+1C7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 text-sm font-medium mt-2 inline-flex items-center gap-1 hover:underline"
                  >
                    {t('contact.location.directions')} →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}
