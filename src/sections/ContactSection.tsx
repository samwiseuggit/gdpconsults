import { useRef, useLayoutEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-content > *',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-content',
            start: 'top 80%',
          }
        }
      );

      gsap.fromTo('.contact-card',
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.contact-cards',
            start: 'top 85%',
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    
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
          formName: 'contact-home'
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
  };

  return (
    <section ref={sectionRef} className="py-24 lg:py-32 px-4 md:px-8 bg-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 rounded-full mb-6">
            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
            <span className="text-emerald-600 text-xs font-semibold tracking-wide uppercase">{t('contact.tagline')}</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
            {t('contact.title').split(' ').slice(0, 2).join(' ')}<br />
            <span className="gradient-text">{t('contact.title').split(' ').slice(2).join(' ')}</span>
          </h2>
          <p className="text-gray-600 text-lg">
            {t('contact.description')}
          </p>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards grid md:grid-cols-3 gap-6 mb-16">
          <a
            href="mailto:info@gdpconsults.ca"
            className="contact-card group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
              <Mail className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">{t('contact.info.email')}</h3>
            <p className="text-gray-900 font-semibold group-hover:text-emerald-600 transition-colors">info@gdpconsults.ca</p>
          </a>
          <a
            href="tel:+14166175638"
            className="contact-card group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
              <Phone className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">{t('contact.info.phone')}</h3>
            <p className="text-gray-900 font-semibold group-hover:text-emerald-600 transition-colors">+1 416 617 5638</p>
          </a>
          <a
            href="https://maps.google.com/?q=100+King+Street+West+Suite+5700+Toronto+Ontario+M5X+1C7"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card group bg-white rounded-2xl p-8 border border-gray-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:from-emerald-400 group-hover:to-emerald-600">
              <MapPin className="w-7 h-7 text-emerald-600 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">{t('contact.info.address')}</h3>
            <p className="text-gray-900 font-semibold group-hover:text-emerald-600 transition-colors">100 King Street West, Suite 5700, Toronto</p>
          </a>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left - Info */}
          <div className="contact-content lg:col-span-2">
            <h3 className="font-heading text-2xl font-bold text-gray-900 mb-6">
              {t('contact.conversation')}
            </h3>
            <p className="text-gray-600 leading-relaxed mb-8">
              {t('contact.conversation.desc')}
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.response')}</h4>
                  <p className="text-gray-500 text-sm">{t('contact.response.time')}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{t('contact.reach')}</h4>
                  <p className="text-gray-500 text-sm">{t('contact.reach.desc')}</p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-6 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl text-white">
              <h4 className="font-heading text-lg font-bold mb-2">{t('contact.hours.title')}</h4>
              <p className="text-emerald-100 text-sm leading-relaxed">
                {t('contact.hours.weekdays')}<br />
                {t('contact.hours.weekends')}
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <form 
              name="contact-home"
              action="/"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-black/5 border border-gray-100"
            >
              <input type="hidden" name="form-name" value="contact-home" />
              <p className="hidden">
                <label>Don't fill this out if you're human: <input name="bot-field" /></label>
              </p>
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <Send className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4">
                    {t('contact.form.success')}
                  </h3>
                  <p className="text-gray-600">
                    {t('contact.form.successMessage')}
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.name')} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('contact.form.name')}
                        className="form-input"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.email')} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="form-input"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.organization')}</label>
                      <input
                        type="text"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                        placeholder={t('contact.form.organization')}
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.subject')} *</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="form-input"
                        required
                      >
                        <option value="">{t('contact.form.subject')}</option>
                        <option value="partnership">{t('subject.partnership')}</option>
                        <option value="project">{t('subject.project')}</option>
                        <option value="services">{t('subject.services')}</option>
                        <option value="other">{t('subject.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div className="mb-8">
                    <label className="text-gray-500 text-sm font-medium block mb-3">{t('contact.form.message')} *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('contact.form.message')}
                      rows={5}
                      className="form-input resize-none"
                      required
                    />
                  </div>

                  {submitError && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-600 text-sm">
                      {submitError}
                    </div>
                  )}

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center gap-3 group disabled:opacity-70"
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
  );
}
