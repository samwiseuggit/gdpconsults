import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { MapPin, Phone, Mail, Send, Linkedin, Twitter, Instagram } from 'lucide-react';

export default function Contact() {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: 'partnership',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      organization: '',
      subject: 'partnership',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">
              {language === 'fr' ? 'Contactez-Nous' : 'Get in Touch'}
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            {language === 'fr' ? 'Contactez-' : 'Contact '}
            <span className="gradient-text">{language === 'fr' ? 'Nous' : 'Us'}</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 lg:py-32 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              {submitted ? (
                <div className="bg-emerald-50 rounded-2xl p-8 text-center">
                  <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    {language === 'fr' ? 'Message Envoyé!' : 'Message Sent!'}
                  </h3>
                  <p className="text-gray-600">
                    {language === 'fr' 
                      ? 'Merci de nous avoir contacté. Nous vous répondrons dans les plus brefs délais.'
                      : 'Thank you for reaching out. We will get back to you as soon as possible.'}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.organization')}</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.subject')}</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    >
                      <option value="partnership">{language === 'fr' ? 'Demande de Partenariat' : 'Partnership Inquiry'}</option>
                      <option value="project">{language === 'fr' ? 'Discussion de Projet' : 'Project Discussion'}</option>
                      <option value="services">{language === 'fr' ? 'Informations sur les Services' : 'Services Information'}</option>
                      <option value="career">{language === 'fr' ? 'Opportunités de Carrière' : 'Career Opportunities'}</option>
                      <option value="other">{language === 'fr' ? 'Autre' : 'Other'}</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">{t('contact.form.message')}</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-emerald-500 text-white font-semibold rounded-xl hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {language === 'fr' ? 'Envoi...' : 'Sending...'}
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">{t('contact.info.title')}</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('contact.info.address')}</h4>
                      <p className="text-gray-600">
                        100 King Street West, Suite 5700<br />
                        Toronto, ON M5X 1C7, Canada
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('contact.info.phone')}</h4>
                      <a href="tel:+14166175638" className="text-gray-600 hover:text-emerald-600 transition-colors">
                        +1 (416) 617-5638
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{t('contact.info.email')}</h4>
                      <a href="mailto:info@gdpconsults.ca" className="text-gray-600 hover:text-emerald-600 transition-colors">
                        info@gdpconsults.ca
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-gray-50 rounded-2xl p-8">
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
                  {language === 'fr' ? 'Suivez-Nous' : 'Follow Us'}
                </h3>
                <div className="flex gap-4">
                  <a
                    href="https://linkedin.com/company/gpd-consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://twitter.com/gpdconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-6 h-6 text-white" />
                  </a>
                  <a
                    href="https://instagram.com/gpdconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center hover:bg-emerald-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-6 h-6 text-white" />
                  </a>
                </div>
              </div>

              {/* Google Map */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.8487832740566!2d-79.3842936845021!3d43.6485986791217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d3d6a7e44b%3A0x6e4f0e6f3e8e5e5e!2s100%20King%20Street%20West%2C%20Toronto%2C%20ON%20M5X%201C7%2C%20Canada!5e0!3m2!1sen!2sus!4v1645561234567!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="GPD Consulting Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
