import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

type Language = 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isAutoDetected: boolean;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.cta': 'Start Partnership',
    
    // Hero
    'hero.tagline': 'Global Enterprise • Africa Focus',
    'hero.title1': 'Global Partnerships',
    'hero.title2': 'That Transform',
    'hero.title3': 'African Economies',
    'hero.description': 'A distinguished global enterprise operating worldwide with deep expertise and specialized focus on driving sustainable economic development across Africa.',
    'hero.cta1': 'Start a Partnership',
    'hero.cta2': 'Explore Services',
    'hero.stats.years': 'Years Experience',
    'hero.stats.partners': 'Global Partners',
    'hero.stats.continents': 'Continents',
    'hero.stats.value': 'Project Value',
    'hero.video.title': 'Watch Our Story',
    'hero.video.duration': '2:30 min video',
    
    // About Section
    'about.tagline': 'About Us',
    'about.title': 'A Global Enterprise with African Expertise',
    'about.description': 'GPD Consulting is a distinguished global enterprise operating worldwide with deep expertise and specialized focus on Africa. With operations spanning America, Europe, and Africa, we bring world-class capabilities to drive sustainable economic development across the continent through strategic partnerships, resource development, and international trade.',
    'about.cta': 'Learn More About Us',
    'about.partners': 'Global Partners',
    'about.image.alt': 'Our team',
    
    // Values
    'value.respect': 'Respect',
    'value.respect.desc': 'We value diverse perspectives and foster an inclusive environment.',
    'value.trust': 'Trust',
    'value.trust.desc': 'We build robust relationships founded on reliability and accountability.',
    'value.integrity': 'Integrity',
    'value.integrity.desc': 'We conduct ourselves with unwavering integrity and ethical standards.',
    'value.transparency': 'Transparency',
    'value.transparency.desc': 'We cultivate open communication in all our endeavors.',
    
    // Highlights
    'highlight.1': 'Global enterprise with Africa expertise',
    'highlight.2': 'Worldwide operations across 3 continents',
    'highlight.3': 'Mining & resource development',
    'highlight.4': 'International trade & commerce',
    'highlight.5': 'Public-Private Partnership expertise',
    'highlight.6': 'Sustainable development focus',
    'highlight.7': 'Technology transfer capabilities',
    'highlight.8': 'Strategic infrastructure investments',
    
    // Capabilities
    'capabilities.tagline': 'Our Expertise',
    'capabilities.title': 'Comprehensive Capabilities',
    'capabilities.description': 'We boast a diverse range of expertise to cater to our partners\' specific needs, spanning from governmental affairs to project financing, mining operations, and international trade.',
    'capabilities.cta': 'View All Services',
    
    // Capability Items
    'cap.gov': 'Governmental Affairs',
    'cap.gov.desc': 'Navigating complex regulatory environments and fostering positive relationships with government entities.',
    'cap.partnerships': 'International Partnerships',
    'cap.partnerships.desc': 'Forging mutually beneficial partnerships on an international scale.',
    'cap.project': 'Project Development',
    'cap.project.desc': 'Strategizing and overseeing the full lifecycle of projects.',
    'cap.finance': 'Project Finance',
    'cap.finance.desc': 'Providing comprehensive financial solutions and arranging funding for capital-intensive initiatives.',
    'cap.negotiation': 'Negotiation',
    'cap.negotiation.desc': 'Skillfully negotiating contracts, agreements, and deals.',
    'cap.engineering': 'Architecture & Engineering',
    'cap.engineering.desc': 'Delivering innovative architectural and engineering solutions.',
    'cap.green': 'Green Technology',
    'cap.green.desc': 'Implementing sustainable and eco-friendly technologies for a better tomorrow.',
    'cap.lobbying': 'Economic Lobbying',
    'cap.lobbying.desc': 'Advocating for economic interests and building strategic alliances.',
    'cap.aviation': 'Aviation Industry',
    'cap.aviation.desc': 'Leveraging expertise to drive aviation-related projects forward.',
    
    // Projects
    'projects.tagline': 'Featured Projects',
    'projects.title': 'Transformative Initiatives',
    'projects.description': 'We collaborate with governments, private sector partners, and international organizations to deliver transformative projects across Africa.',
    'projects.cta': 'View All Projects',
    
    // Project Items
    'project.aviation.title': 'Modernizing Aviation Infrastructure',
    'project.aviation.category': 'Aviation',
    'project.aviation.desc': 'A comprehensive upgrade program spanning terminals, airside systems, and passenger experience—designed for safety, capacity, and long-term resilience.',
    'project.housing.title': 'Urban Housing Development',
    'project.housing.category': 'Housing',
    'project.housing.desc': 'Affordable housing programs and city frameworks designed to create sustainable, inclusive communities with modern amenities.',
    'project.energy.title': 'Renewable Energy Initiative',
    'project.energy.category': 'Energy',
    'project.energy.desc': 'Pioneering green technologies to revolutionize the energy landscape through wind, solar, and hydroelectric power.',
    'project.agriculture.title': 'Agricultural Transformation',
    'project.agriculture.category': 'Agriculture',
    'project.agriculture.desc': 'Empowering farming communities through modern irrigation and supply chain systems.',
    
    // Contact
    'contact.tagline': 'Get In Touch',
    'contact.title': "Let's Build Together",
    'contact.description': "Tell us what you're building. We'll respond within two business days with next steps and a short discovery questionnaire.",
    'contact.conversation': 'Start a Conversation',
    'contact.conversation.desc': "Whether you're looking to partner on a project, explore our services, or simply learn more about what we do, we'd love to hear from you.",
    'contact.response': 'Response Time',
    'contact.response.time': 'Within 2 business days',
    'contact.reach': 'Global Reach',
    'contact.reach.desc': 'Operating across America, Europe, and Africa',
    'contact.form.name': 'Name *',
    'contact.form.name.placeholder': 'Your full name',
    'contact.form.email': 'Email *',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.organization': 'Organization',
    'contact.form.org': 'Organization',
    'contact.form.org.placeholder': 'Company or institution',
    'contact.form.phone': 'Phone',
    'contact.form.phone.placeholder': '+1 (xxx) xxx-xxxx',
    'contact.form.subject': 'Subject *',
    'contact.form.subject.select': 'Select a subject',
    'contact.form.subject.partnership': 'Partnership Inquiry',
    'contact.form.subject.project': 'Project Discussion',
    'contact.form.subject.services': 'Services Information',
    'contact.form.subject.career': 'Career Opportunities',
    'contact.form.subject.other': 'Other',
    'contact.form.message': 'Message *',
    'contact.form.message.placeholder': 'Tell us about your project or inquiry...',
    'contact.form.submit': 'Send Inquiry',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Message Sent!',
    'contact.form.success.title': 'Message Sent!',
    'contact.form.success.msg': "Thank you for reaching out. We'll get back to you within two business days.",
    'contact.form.successMessage': "Thank you for reaching out. We'll get back to you within two business days.",
    'contact.info.email': 'Email',
    'contact.info.phone': 'Phone',
    'contact.info.address': 'Address',
    'contact.us.tagline': 'Contact Us',
    'contact.us.title': "Let's Build",
    'contact.us.title2': 'Together',
    'contact.us.p1': "Tell us what you're building. We'll respond within two business days with next steps and a short discovery questionnaire.",
    'contact.response.title': 'Response Time',
    'contact.page.tagline': 'Get In Touch',
    'contact.page.title': 'Start A',
    'contact.page.title2': 'Partnership',
    'contact.location.tagline': 'Location',
    'contact.location.title': 'Our',
    'contact.location.title2': 'Headquarters',
    'contact.location.address1': '100 King Street West, Suite 5700',
    'contact.location.address2': 'Toronto, Ontario M5X 1C7, Canada',
    'contact.hours.title': 'Office Hours',
    'contact.hours.weekdays': 'Monday - Friday: 9:00 AM - 6:00 PM EST',
    'contact.hours.weekends': 'Saturday - Sunday: Closed',
    
    // Form Subjects (old keys for compatibility)
    'subject.partnership': 'Partnership Inquiry',
    'subject.project': 'Project Discussion',
    'subject.services': 'Services Information',
    'subject.other': 'Other',
    
    // Footer
    'footer.description': 'Green Diamond Partnership Consulting Inc. — A distinguished global enterprise dedicated to Africa\'s sustainable economic development.',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.cta.title': 'Ready to Transform The Future?',
    'footer.cta.description': "Let's discuss how we can partner to drive sustainable economic development across Africa.",
    'footer.cta.button': 'Start a Partnership',
    'footer.rights': 'All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    
    // Service Items
    'service.advisory': 'Strategic Advisory',
    'service.finance': 'Project Finance',
    'service.infrastructure': 'Infrastructure',
    'service.ppp': 'PPP Development',
    
    // About Page
    'about.page.tagline': 'About Us',
    'about.page.title1': 'Green Diamond',
    'about.page.title2': 'Partnership',
    'about.page.title3': 'Consulting',
    'about.who.tagline': 'Who We Are',
    'about.who.title1': 'A Global Enterprise with',
    'about.who.title2': 'African Expertise',
    'about.who.p1': "GPD Consulting is a distinguished global enterprise operating worldwide with deep expertise and specialized focus on Africa. With offices and partnerships spanning America, Europe, and Africa, we bring world-class capabilities to drive sustainable economic development across the continent.",
    'about.who.p2': "Our comprehensive services include strategic advisory, project financing, mining operations, international trade, and infrastructure development—delivering transformative solutions that unlock Africa's vast potential while maintaining global standards of excellence.",
    'about.who.years': 'Years',
    'about.who.partners': 'Partners',
    'about.vision.tagline': 'Our Vision',
    'about.vision.title': 'Global Reach.',
    'about.vision.title2': 'African Focus.',
    'about.vision.p1': "At GPD Consulting, our vision is to be the premier global partner for Africa's economic transformation. We leverage our worldwide network and expertise to bring cutting-edge solutions, capital, and technology to the continent.",
    'about.vision.p2': "From mining and resource development to international trade and infrastructure, we are committed to unlocking Africa's vast potential while promoting sustainable growth and preserving local cultures and communities.",
    'about.mission.tagline': 'Our Mission',
    'about.mission.title': 'Guided By',
    'about.mission.title2': 'Principle',
    'about.mission.partner.title': 'Partner Satisfaction',
    'about.mission.partner.desc': 'Delivering superior quality and exceptional service to exceed expectations at every turn.',
    'about.mission.social.title': 'Social Responsibility',
    'about.mission.social.desc': 'Respecting the social, cultural, and physical environment in which we operate across Africa.',
    'about.mission.business.title': 'Business Excellence',
    'about.mission.business.desc': 'Embracing professionalism, diligence, and innovation in everything we do.',
    'about.mission.shareholder.title': 'Shareholder Returns',
    'about.mission.shareholder.desc': 'Providing superior returns through sustained quality growth and strategic investments.',
    'about.values.tagline': 'Our Values',
    'about.values.title': 'The Bedrock of Our',
    'about.values.title2': 'Operations',
    'about.values.respect.desc': "We value diverse perspectives and foster an inclusive environment where everyone's voice is heard and respected.",
    'about.values.trust.desc': 'We build robust relationships founded on reliability, transparency, and mutual accountability.',
    'about.values.integrity.desc': 'We conduct ourselves with unwavering integrity, adhering to the highest ethical standards in all endeavors.',
    'about.values.transparency.desc': 'We cultivate open communication and transparency, ensuring clarity in all our partnerships.',
    'about.business.tagline': 'Business Model',
    'about.business.title1': 'Collaboration &',
    'about.business.title2': 'Partnership',
    'about.business.p1': 'GPD Consulting operates on a diversified global business model that integrates Public/Private Partnerships (PPP), mining operations, international trade, and strategic investments. We engage with sovereign partners, global investors, and local stakeholders to deliver comprehensive solutions.',
    'about.business.p2': 'Our operations span mining project financing and resource exploitation, international trade in food products, mining goods, and equipment, as well as large-scale infrastructure development—creating value across multiple sectors and geographies.',
    'about.business.objectives': 'Our Objectives',
    'about.objective.1': "Execute transformative projects for Africa's economic development",
    'about.objective.2': 'Facilitate infrastructure development through strategic PPPs',
    'about.objective.3': 'Leverage global financial networks for capital-intensive projects',
    'about.objective.4': 'Drive growth in agriculture, agribusiness, mining, and infrastructure',
    'about.objective.5': 'Provide mining project financing, exploitation, and resource development',
    'about.objective.6': 'Facilitate international trade in food products, mining goods, and equipment',
    'about.objective.7': 'Align efforts with client objectives for lasting positive impact',
    'about.objective.8': "Unlock Africa's true potential and pave the way for a brighter future",
    
    // Services Page
    'services.page.tagline': 'What We Do',
    'services.page.title': 'Our',
    'services.page.title2': 'Expertise',
    'services.intro.p1': "At GPD Consulting, we boast a diverse range of expertise to cater to our partners' specific needs. Our comprehensive service offering spans from governmental affairs to project financing.",
    'services.capabilities.tagline': 'Capabilities',
    'services.capabilities.title': 'Areas of',
    'services.capabilities.title2': 'Expertise',
    'services.sectors.tagline': 'Sectors',
    'services.sectors.title': 'Industries We',
    'services.sectors.title2': 'Serve',
    'services.additional.tagline': 'Additional Services',
    'services.additional.title': 'Specialized',
    'services.additional.title2': 'Offerings',
    'services.trade.tagline': 'Global Trade',
    'services.trade.title': 'Trade &',
    'services.trade.title2': 'Commerce',
    'services.trade.p1': 'Facilitating international trade across multiple sectors, connecting African markets with global opportunities.',
    'services.tech.tagline': 'Knowledge Exchange',
    'services.tech.title1': 'Technology &',
    'services.tech.title2': 'Know-How Transfer',
    'services.tech.p1': 'Appropriation of technology and know-how: fostering knowledge exchange from North to South and from South to South. We facilitate the transfer of cutting-edge solutions, enabling African nations to embrace innovation.',
    'services.tech.p2': 'By harnessing the power of collaboration and leveraging our extensive global network, we bridge the technology gap and empower local capabilities.',
    'services.tech.cta': 'Discuss Your Project',
    'services.sustain.tagline': 'Sustainability',
    'services.sustain.title': 'Sustainable',
    'services.sustain.title2': 'Design',
    'services.sustain.p1': 'Incorporating sustainable design principles and practices, such as energy efficiency, waste reduction, and the use of renewable materials, to minimize environmental impact and promote sustainable development.',
    'services.sustain.p2': 'Our commitment to sustainability ensures that every project we undertake contributes positively to the environment and the communities we serve.',
    
    // Expertise items
    'exp.gov.title': 'Governmental Affairs',
    'exp.gov.desc': 'Navigating complex regulatory environments and fostering positive relationships with government entities.',
    'exp.partnerships.title': 'International Partnership Development',
    'exp.partnerships.desc': 'Forging mutually beneficial partnerships on an international scale.',
    'exp.project.title': 'Project Development',
    'exp.project.desc': 'Strategizing and overseeing the full lifecycle of projects from conception to completion.',
    'exp.finance.title': 'Project Finance',
    'exp.finance.desc': 'Providing comprehensive financial solutions and arranging funding for capital-intensive initiatives.',
    'exp.negotiation.title': 'Negotiation',
    'exp.negotiation.desc': 'Skillfully negotiating contracts, agreements, and deals to secure optimal outcomes.',
    'exp.engineering.title': 'Architecture & Engineering',
    'exp.engineering.desc': 'Delivering innovative architectural and engineering solutions for modern infrastructure.',
    'exp.green.title': 'Environmental Green Technology',
    'exp.green.desc': 'Implementing sustainable and eco-friendly technologies for a better tomorrow.',
    'exp.lobbying.title': 'Economic and Political Lobbying',
    'exp.lobbying.desc': 'Advocating for economic interests and building strategic alliances with stakeholders.',
    'exp.aviation.title': 'Airline Industry',
    'exp.aviation.desc': 'Leveraging expertise to drive aviation-related projects and infrastructure development.',
    
    // Sector items
    'sec.pm.title': 'Project Management',
    'sec.pm.desc': 'Overseeing projects with precision from inception to completion.',
    'sec.energy.title': 'Energy: Green Technologies',
    'sec.energy.desc': "Pioneering green technologies for Africa's energy landscape.",
    'sec.aviation.title': 'Airline Industry',
    'sec.aviation.desc': 'Driving growth and innovation in aviation-related projects.',
    'sec.education.title': 'Education',
    'sec.education.desc': 'Advancing education initiatives to empower future generations.',
    'sec.mining.title': 'Mining & Resources',
    'sec.mining.desc': 'Project financing, exploitation, and sustainable resource development across Africa.',
    'sec.infra.title': 'Infrastructure Construction',
    'sec.infra.desc': 'Developing essential infrastructure across all sectors.',
    'sec.equipment.title': 'Equipment Provision',
    'sec.equipment.desc': 'Facilitating supply of vital equipment and pharmaceuticals.',
    'sec.agri.title': 'Agriculture and Agribusiness',
    'sec.agri.desc': 'Empowering farming communities and agricultural production.',
    'sec.pf.title': 'Project Financing',
    'sec.pf.desc': 'Arranging financing for major projects and sustainability initiatives.',
    
    // Additional services
    'add.housing.title': 'Housing & Urban Development',
    'add.housing.desc': 'Affordable housing programs and city frameworks for sustainable communities.',
    'add.agri.title': 'Agriculture & Water',
    'add.agri.desc': 'Rural productivity, irrigation systems, and supply chain optimization.',
    'add.food.title': 'Food Manufacturing',
    'add.food.desc': 'Revolutionizing the food industry in Africa with modern processing facilities.',
    
    // Trade activities
    'trade.food.title': 'Food Products',
    'trade.food.desc': 'International trade in agricultural commodities, processed foods, and food security solutions.',
    'trade.mining.title': 'Mining Products',
    'trade.mining.desc': 'Trading in mineral resources, precious metals, and raw materials from African mines.',
    'trade.equip.title': 'Equipment & Machinery',
    'trade.equip.desc': 'Supply of industrial equipment, heavy machinery, and specialized tools for development projects.',
    
    // Projects Page
    'projects.page.tagline': 'Our Work',
    'projects.page.title': 'Transformative',
    'projects.page.title2': 'Projects',
    'projects.objective.tagline': 'Our Objective',
    'projects.objective.title': 'Driving Economic',
    'projects.objective.title2': 'Development',
    'projects.obj.1': "Execute transformative projects centered around the economic development of Africa",
    'projects.obj.2': 'Facilitate infrastructure development and project financing through strategic public-private partnerships',
    'projects.obj.3': 'Leverage extensive global financial networks for capital-intensive projects',
    'projects.obj.4': 'Drive growth in agriculture, agro-industrial businesses, and infrastructure',
    'projects.obj.5': 'Align efforts with client objectives for lasting positive impact',
    'projects.obj.6': "Unlock Africa's true potential and pave the way for a brighter future",
    'projects.portfolio.tagline': 'Portfolio',
    'projects.portfolio.title': 'Featured',
    'projects.portfolio.title2': 'Projects',
    'projects.view.cta': 'View Project Details',
    'projects.cta.tagline': 'Collaborate',
    'projects.cta.title': 'Have a Project In',
    'projects.cta.title2': 'Mind?',
    'projects.cta.p1': 'We collaborate with governments, private sector partners, and international organizations to deliver transformative projects across Africa.',
    'projects.cta.button': 'Discuss Your Project',
    
    // Project items
    'proj.aviation.title': 'Modernizing Aviation Infrastructure',
    'proj.aviation.category': 'Aviation',
    'proj.aviation.desc': 'A comprehensive upgrade program spanning terminals, airside systems, and passenger experience—designed for safety, capacity, and long-term resilience.',
    'proj.aviation.investment': 'Investment',
    'proj.aviation.capacity': 'Capacity',
    'proj.aviation.timeline': 'Timeline',
    'proj.housing.title': 'Urban Housing Development',
    'proj.housing.category': 'Housing',
    'proj.housing.desc': 'Affordable housing programs and city frameworks designed to create sustainable, inclusive communities with modern amenities and infrastructure.',
    'proj.housing.units': 'Units',
    'proj.housing.families': 'Families',
    'proj.housing.area': 'Area',
    'proj.energy.title': 'Renewable Energy Initiative',
    'proj.energy.category': 'Energy',
    'proj.energy.desc': 'Pioneering green technologies to revolutionize the energy landscape, championing sustainable solutions through wind, solar, and hydroelectric power.',
    'proj.energy.capacity': 'Capacity',
    'proj.energy.homes': 'Homes',
    'proj.energy.co2': 'CO₂ Reduction',
    'proj.agri.title': 'Agricultural Transformation',
    'proj.agri.category': 'Agriculture',
    'proj.agri.desc': 'Empowering farming communities and driving the production and transformation of agricultural products through modern irrigation and supply chain systems.',
    'proj.agri.farmers': 'Farmers',
    'proj.agri.hectares': 'Hectares',
    'proj.agri.yield': 'Yield Increase',
    'proj.infra.title': 'Infrastructure Construction',
    'proj.infra.category': 'Infrastructure',
    'proj.infra.desc': 'Spearheading the development of essential infrastructure, including schools, offices, hospitals, malls, hotels, roads, bridges, and stadiums.',
    'proj.infra.projects': 'Projects',
    'proj.infra.investment': 'Investment',
    'proj.infra.jobs': 'Jobs',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À Propos',
    'nav.services': 'Services',
    'nav.projects': 'Projets',
    'nav.contact': 'Contact',
    'nav.cta': 'Démarrer un Partenariat',
    
    // Hero
    'hero.tagline': 'Entreprise Mondiale • Focus Afrique',
    'hero.title1': 'Partenariats Mondiaux',
    'hero.title2': 'Qui Transforment',
    'hero.title3': 'Les Économies Africaines',
    'hero.description': 'Une entreprise mondiale distinguée opérant dans le monde entier avec une expertise approfondie et un focus spécialisé sur le développement économique durable en Afrique.',
    'hero.cta1': 'Démarrer un Partenariat',
    'hero.cta2': 'Explorer les Services',
    'hero.stats.years': "Années d'Expérience",
    'hero.stats.partners': 'Partenaires Mondiaux',
    'hero.stats.continents': 'Continents',
    'hero.stats.value': 'Valeur des Projets',
    'hero.video.title': 'Voir Notre Histoire',
    'hero.video.duration': 'Vidéo de 2:30 min',
    
    // About Section
    'about.tagline': 'À Propos',
    'about.title': 'Une Entreprise Mondiale avec Expertise Africaine',
    'about.description': "GPD Consulting est une entreprise mondiale distinguée opérant dans le monde entier avec une expertise approfondie et un focus spécialisé sur l'Afrique. Avec des opérations couvrant l'Amérique, l'Europe et l'Afrique, nous apportons des capacités de classe mondiale pour stimuler le développement économique durable à travers le continent.",
    'about.cta': 'En Savoir Plus',
    'about.partners': 'Partenaires Mondiaux',
    'about.image.alt': 'Notre équipe',
    
    // Values
    'value.respect': 'Respect',
    'value.respect.desc': 'Nous valorisons les perspectives diverses et favorisons un environnement inclusif.',
    'value.trust': 'Confiance',
    'value.trust.desc': 'Nous construisons des relations solides fondées sur la fiabilité et la responsabilité.',
    'value.integrity': 'Intégrité',
    'value.integrity.desc': 'Nous agissons avec une intégrité et des normes éthiques inébranlables.',
    'value.transparency': 'Transparence',
    'value.transparency.desc': 'Nous cultivons une communication ouverte dans toutes nos entreprises.',
    
    // Highlights
    'highlight.1': 'Entreprise mondiale avec expertise africaine',
    'highlight.2': 'Opérations mondiales sur 3 continents',
    'highlight.3': 'Exploitation minière et développement des ressources',
    'highlight.4': 'Commerce international',
    'highlight.5': 'Expertise en partenariats public-privé',
    'highlight.6': 'Focus sur le développement durable',
    'highlight.7': 'Capacités de transfert de technologie',
    'highlight.8': 'Investissements stratégiques en infrastructure',
    
    // Capabilities
    'capabilities.tagline': 'Notre Expertise',
    'capabilities.title': 'Capacités Complètes',
    'capabilities.description': "Nous disposons d'une gamme diversifiée d'expertises pour répondre aux besoins spécifiques de nos partenaires, allant des affaires gouvernementales au financement de projets, en passant par les opérations minières et le commerce international.",
    'capabilities.cta': 'Voir Tous les Services',
    
    // Capability Items
    'cap.gov': 'Affaires Gouvernementales',
    'cap.gov.desc': "Navigation dans des environnements réglementaires complexes et établissement de relations positives avec les entités gouvernementales.",
    'cap.partnerships': 'Partenariats Internationaux',
    'cap.partnerships.desc': 'Établissement de partenariats mutuellement bénéfiques à échelle internationale.',
    'cap.project': 'Développement de Projets',
    'cap.project.desc': 'Stratégie et supervision du cycle de vie complet des projets.',
    'cap.finance': 'Finance de Projets',
    'cap.finance.desc': "Fourniture de solutions financières complètes et organisation de financement pour des initiatives à capital intensif.",
    'cap.negotiation': 'Négociation',
    'cap.negotiation.desc': 'Négociation habile de contrats, accords et transactions.',
    'cap.engineering': 'Architecture & Ingénierie',
    'cap.engineering.desc': 'Fourniture de solutions architecturales et d\'ingénierie innovantes.',
    'cap.green': 'Technologie Verte',
    'cap.green.desc': 'Mise en œuvre de technologies durables et respectueuses de l\'environnement pour un avenir meilleur.',
    'cap.lobbying': 'Lobbying Économique',
    'cap.lobbying.desc': "Défense des intérêts économiques et établissement d'alliances stratégiques.",
    'cap.aviation': 'Industrie Aéronautique',
    'cap.aviation.desc': "Mise à profit de l'expertise pour faire avancer les projets liés à l'aviation.",
    
    // Projects
    'projects.tagline': 'Projets en Vedette',
    'projects.title': 'Initiatives Transformatrices',
    'projects.description': 'Nous collaborons avec les gouvernements, les partenaires du secteur privé et les organisations internationales pour réaliser des projets transformatifs en Afrique.',
    'projects.cta': 'Voir Tous les Projets',
    
    // Project Items
    'project.aviation.title': 'Modernisation de l\'Infrastructure Aéronautique',
    'project.aviation.category': 'Aviation',
    'project.aviation.desc': 'Un programme complet de mise à niveau couvrant les terminaux, les systèmes aéroportuaires et l\'expérience des passagers—conçu pour la sécurité, la capacité et la résilience à long terme.',
    'project.housing.title': 'Développement de Logements Urbains',
    'project.housing.category': 'Logement',
    'project.housing.desc': 'Des programmes de logements abordables et des cadres urbains conçus pour créer des communautés durables et inclusives avec des équipements modernes.',
    'project.energy.title': 'Initiative Énergie Renouvelable',
    'project.energy.category': 'Énergie',
    'project.energy.desc': 'Pionnier des technologies vertes pour révolutionner le paysage énergétique grâce à l\'éolien, le solaire et l\'hydroélectricité.',
    'project.agriculture.title': 'Transformation Agricole',
    'project.agriculture.category': 'Agriculture',
    'project.agriculture.desc': 'Autonomisation des communautés agricoles grâce à des systèmes modernes d\'irrigation et de chaîne d\'approvisionnement.',
    
    // Contact
    'contact.tagline': 'Contactez-Nous',
    'contact.title': 'Construisons Ensemble',
    'contact.description': "Dites-nous ce que vous construisez. Nous répondrons dans les deux jours ouvrables avec les prochaines étapes et un court questionnaire de découverte.",
    'contact.conversation': 'Démarrer une Conversation',
    'contact.conversation.desc': "Que vous cherchiez à vous associer à un projet, à explorer nos services ou simplement à en savoir plus sur ce que nous faisons, nous serions ravis de vous entendre.",
    'contact.response': 'Temps de Réponse',
    'contact.response.time': 'Dans les 2 jours ouvrables',
    'contact.reach': 'Portée Mondiale',
    'contact.reach.desc': "Opérant en Amérique, en Europe et en Afrique",
    'contact.form.name': 'Nom *',
    'contact.form.name.placeholder': 'Votre nom complet',
    'contact.form.email': 'Email *',
    'contact.form.email.placeholder': 'votre@email.com',
    'contact.form.organization': 'Organisation',
    'contact.form.org': 'Organisation',
    'contact.form.org.placeholder': 'Entreprise ou institution',
    'contact.form.phone': 'Téléphone',
    'contact.form.phone.placeholder': '+1 (xxx) xxx-xxxx',
    'contact.form.subject': 'Sujet *',
    'contact.form.subject.select': 'Sélectionnez un sujet',
    'contact.form.subject.partnership': 'Demande de Partenariat',
    'contact.form.subject.project': 'Discussion de Projet',
    'contact.form.subject.services': 'Informations sur les Services',
    'contact.form.subject.career': "Opportunités de Carrière",
    'contact.form.subject.other': 'Autre',
    'contact.form.message': 'Message *',
    'contact.form.message.placeholder': 'Parlez-nous de votre projet ou de votre demande...',
    'contact.form.submit': 'Envoyer la Demande',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Message Envoyé!',
    'contact.form.success.title': 'Message Envoyé!',
    'contact.form.success.msg': "Merci de nous avoir contacté. Nous vous répondrons dans les deux jours ouvrables.",
    'contact.form.successMessage': "Merci de nous avoir contacté. Nous vous répondrons dans les deux jours ouvrables.",
    'contact.info.email': 'Email',
    'contact.info.phone': 'Téléphone',
    'contact.info.address': 'Adresse',
    'contact.us.tagline': 'Contactez-Nous',
    'contact.us.title': 'Construisons',
    'contact.us.title2': 'Ensemble',
    'contact.us.p1': "Dites-nous ce que vous construisez. Nous répondrons dans les deux jours ouvrables avec les prochaines étapes et un court questionnaire de découverte.",
    'contact.response.title': 'Temps de Réponse',
    'contact.page.tagline': 'Contactez-Nous',
    'contact.page.title': 'Démarrer Un',
    'contact.page.title2': 'Partenariat',
    'contact.location.tagline': 'Emplacement',
    'contact.location.title': 'Notre',
    'contact.location.title2': 'Siège Social',
    'contact.location.address1': '100 King Street West, Suite 5700',
    'contact.location.address2': 'Toronto, Ontario M5X 1C7, Canada',
    'contact.hours.title': "Heures d'Ouverture",
    'contact.hours.weekdays': 'Lundi - Vendredi : 9h00 - 18h00 EST',
    'contact.hours.weekends': 'Samedi - Dimanche : Fermé',
    
    // Form Subjects (old keys for compatibility)
    'subject.partnership': 'Demande de Partenariat',
    'subject.project': 'Discussion de Projet',
    'subject.services': 'Informations sur les Services',
    'subject.other': 'Autre',
    
    // Footer
    'footer.description': "Green Diamond Partnership Consulting Inc. — Une entreprise mondiale distinguée dédiée au développement économique durable de l'Afrique.",
    'footer.quickLinks': 'Liens Rapides',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.cta.title': 'Prêt à Transformer le Futur?',
    'footer.cta.description': "Discutons de la façon dont nous pouvons nous associer pour stimuler le développement économique durable en Afrique.",
    'footer.cta.button': 'Démarrer un Partenariat',
    'footer.rights': 'Tous droits réservés.',
    'footer.privacy': 'Politique de Confidentialité',
    'footer.terms': "Conditions d'Utilisation",
    
    // Service Items
    'service.advisory': 'Conseil Stratégique',
    'service.finance': 'Finance de Projets',
    'service.infrastructure': 'Infrastructure',
    'service.ppp': 'Développement PPP',
    
    // About Page
    'about.page.tagline': 'À Propos',
    'about.page.title1': 'Diamant Vert',
    'about.page.title2': 'Partenariat',
    'about.page.title3': 'Conseil',
    'about.who.tagline': 'Qui Nous Sommes',
    'about.who.title1': 'Une Entreprise Mondiale avec',
    'about.who.title2': 'Expertise Africaine',
    'about.who.p1': "GPD Consulting est une entreprise mondiale distinguée opérant dans le monde entier avec une expertise approfondie et un focus spécialisé sur l'Afrique. Avec des bureaux et des partenariats couvrant l'Amérique, l'Europe et l'Afrique, nous apportons des capacités de classe mondiale pour stimuler le développement économique durable à travers le continent.",
    'about.who.p2': "Nos services complets incluent le conseil stratégique, le financement de projets, les opérations minières, le commerce international et le développement des infrastructures—offrant des solutions transformatrices qui libèrent le potentiel immense de l'Afrique tout en maintenant des normes d'excellence mondiales.",
    'about.who.years': 'Années',
    'about.who.partners': 'Partenaires',
    'about.vision.tagline': 'Notre Vision',
    'about.vision.title': 'Portée Mondiale.',
    'about.vision.title2': 'Focus Africain.',
    'about.vision.p1': "Chez GPD Consulting, notre vision est d'être le partenaire mondial de premier plan pour la transformation économique de l'Afrique. Nous exploitons notre réseau mondial et notre expertise pour apporter des solutions de pointe, du capital et de la technologie au continent.",
    'about.vision.p2': "De l'exploitation minière et du développement des ressources au commerce international et aux infrastructures, nous nous engageons à libérer le potentiel immense de l'Afrique tout en promouvant une croissance durable et en préservant les cultures et communautés locales.",
    'about.mission.tagline': 'Notre Mission',
    'about.mission.title': 'Guidés Par le',
    'about.mission.title2': 'Principe',
    'about.mission.partner.title': 'Satisfaction des Partenaires',
    'about.mission.partner.desc': "Offrir une qualité supérieure et un service exceptionnel pour dépasser les attentes à chaque étape.",
    'about.mission.social.title': 'Responsabilité Sociale',
    'about.mission.social.desc': "Respecter l'environnement social, culturel et physique dans lequel nous opérons en Afrique.",
    'about.mission.business.title': "Excellence d'Entreprise",
    'about.mission.business.desc': "Adopter le professionnalisme, la diligence et l'innovation dans tout ce que nous faisons.",
    'about.mission.shareholder.title': 'Rendement des Actionnaires',
    'about.mission.shareholder.desc': "Fournir des rendements supérieurs grâce à une croissance de qualité soutenue et des investissements stratégiques.",
    'about.values.tagline': 'Nos Valeurs',
    'about.values.title': 'Le Fondement de Nos',
    'about.values.title2': 'Opérations',
    'about.values.respect.desc': "Nous valorisons les perspectives diverses et favorisons un environnement inclusif où la voix de chacun est entendue et respectée.",
    'about.values.trust.desc': 'Nous construisons des relations solides fondées sur la fiabilité, la transparence et la responsabilité mutuelle.',
    'about.values.integrity.desc': "Nous agissons avec une intégrité inébranlable, en adhérant aux normes éthiques les plus élevées dans toutes nos entreprises.",
    'about.values.transparency.desc': 'Nous cultivons une communication ouverte et une transparence, assurant la clarté dans tous nos partenariats.',
    'about.business.tagline': 'Modèle Commercial',
    'about.business.title1': 'Collaboration &',
    'about.business.title2': 'Partenariat',
    'about.business.p1': "GPD Consulting opère sur un modèle commercial mondial diversifié qui intègre les partenariats public-privé (PPP), les opérations minières, le commerce international et les investissements stratégiques. Nous collaborons avec des partenaires souverains, des investisseurs mondiaux et des parties prenantes locales pour offrir des solutions complètes.",
    'about.business.p2': "Nos opérations couvrent le financement de projets miniers et l'exploitation des ressources, le commerce international de produits alimentaires, de biens miniers et d'équipements, ainsi que le développement des infrastructures à grande échelle—créant de la valeur à travers plusieurs secteurs et géographies.",
    'about.business.objectives': 'Nos Objectifs',
    'about.objective.1': "Exécuter des projets transformateurs pour le développement économique de l'Afrique",
    'about.objective.2': 'Faciliter le développement des infrastructures à travers des PPP stratégiques',
    'about.objective.3': 'Exploiter les réseaux financiers mondiaux pour les projets à capital intensif',
    'about.objective.4': "Stimuler la croissance dans l'agriculture, l'agro-industrie, les mines et les infrastructures",
    'about.objective.5': "Fournir le financement de projets miniers, l'exploitation et le développement des ressources",
    'about.objective.6': "Faciliter le commerce international de produits alimentaires, de biens miniers et d'équipements",
    'about.objective.7': "Aligner nos efforts sur les objectifs des clients pour un impact positif durable",
    'about.objective.8': "Libérer le véritable potentiel de l'Afrique et ouvrir la voie à un avenir meilleur",
    
    // Services Page
    'services.page.tagline': 'Ce Que Nous Faisons',
    'services.page.title': 'Notre',
    'services.page.title2': 'Expertise',
    'services.intro.p1': "Chez GPD Consulting, nous disposons d'une gamme diversifiée d'expertises pour répondre aux besoins spécifiques de nos partenaires. Notre offre de services complète s'étend des affaires gouvernementales au financement de projets.",
    'services.capabilities.tagline': 'Capacités',
    'services.capabilities.title': "Domaines d'",
    'services.capabilities.title2': 'Expertise',
    'services.sectors.tagline': 'Secteurs',
    'services.sectors.title': 'Industries Que Nous',
    'services.sectors.title2': 'Servons',
    'services.additional.tagline': 'Services Additionnels',
    'services.additional.title': 'Offres',
    'services.additional.title2': 'Spécialisées',
    'services.trade.tagline': 'Commerce Mondial',
    'services.trade.title': 'Commerce &',
    'services.trade.title2': 'Commerce',
    'services.trade.p1': "Faciliter le commerce international à travers plusieurs secteurs, connectant les marchés africains avec les opportunités mondiales.",
    'services.tech.tagline': 'Échange de Connaissances',
    'services.tech.title1': 'Transfert de Technologie &',
    'services.tech.title2': 'de Savoir-Faire',
    'services.tech.p1': "Appropriation de la technologie et du savoir-faire : favoriser l'échange de connaissances du Nord vers le Sud et du Sud vers le Sud. Nous facilitons le transfert de solutions de pointe, permettant aux nations africaines d'embrasser l'innovation.",
    'services.tech.p2': "En exploitant la puissance de la collaboration et en tirant parti de notre vaste réseau mondial, nous comblons le fossé technologique et renforçons les capacités locales.",
    'services.tech.cta': 'Discuter de Votre Projet',
    'services.sustain.tagline': 'Durabilité',
    'services.sustain.title': 'Conception',
    'services.sustain.title2': 'Durable',
    'services.sustain.p1': "Intégration des principes et pratiques de conception durable, tels que l'efficacité énergétique, la réduction des déchets et l'utilisation de matériaux renouvelables, pour minimiser l'impact environnemental et promouvoir le développement durable.",
    'services.sustain.p2': "Notre engagement envers la durabilité garantit que chaque projet que nous entreprenons contribue positivement à l'environnement et aux communautés que nous servons.",
    
    // Expertise items
    'exp.gov.title': 'Affaires Gouvernementales',
    'exp.gov.desc': "Navigation dans des environnements réglementaires complexes et établissement de relations positives avec les entités gouvernementales.",
    'exp.partnerships.title': 'Développement de Partenariats Internationaux',
    'exp.partnerships.desc': 'Établissement de partenariats mutuellement bénéfiques à échelle internationale.',
    'exp.project.title': 'Développement de Projets',
    'exp.project.desc': "Stratégie et supervision du cycle de vie complet des projets de la conception à l'achèvement.",
    'exp.finance.title': 'Finance de Projets',
    'exp.finance.desc': "Fourniture de solutions financières complètes et organisation de financement pour des initiatives à capital intensif.",
    'exp.negotiation.title': 'Négociation',
    'exp.negotiation.desc': 'Négociation habile de contrats, accords et transactions pour sécuriser des résultats optimaux.',
    'exp.engineering.title': 'Architecture & Ingénierie',
    'exp.engineering.desc': "Fourniture de solutions architecturales et d'ingénierie innovantes pour les infrastructures modernes.",
    'exp.green.title': 'Technologie Verte Environnementale',
    'exp.green.desc': "Mise en œuvre de technologies durables et respectueuses de l'environnement pour un avenir meilleur.",
    'exp.lobbying.title': 'Lobbying Économique et Politique',
    'exp.lobbying.desc': "Défense des intérêts économiques et établissement d'alliances stratégiques avec les parties prenantes.",
    'exp.aviation.title': 'Industrie Aéronautique',
    'exp.aviation.desc': "Mise à profit de l'expertise pour faire avancer les projets liés à l'aviation et le développement des infrastructures.",
    
    // Sector items
    'sec.pm.title': 'Gestion de Projets',
    'sec.pm.desc': "Supervision des projets avec précision de l'inception à l'achèvement.",
    'sec.energy.title': 'Énergie : Technologies Vertes',
    'sec.energy.desc': "Pionnier des technologies vertes pour le paysage énergétique de l'Afrique.",
    'sec.aviation.title': 'Industrie Aéronautique',
    'sec.aviation.desc': "Stimuler la croissance et l'innovation dans les projets liés à l'aviation.",
    'sec.education.title': 'Éducation',
    'sec.education.desc': "Faire progresser les initiatives éducatives pour autonomiser les générations futures.",
    'sec.mining.title': 'Mines & Ressources',
    'sec.mining.desc': "Financement de projets miniers, exploitation et développement durable des ressources à travers l'Afrique.",
    'sec.infra.title': "Construction d'Infrastructures",
    'sec.infra.desc': "Développement des infrastructures essentielles à travers tous les secteurs.",
    'sec.equipment.title': "Fourniture d'Équipements",
    'sec.equipment.desc': "Facilitation de l'approvisionnement en équipements vitaux et en produits pharmaceutiques.",
    'sec.agri.title': 'Agriculture et Agro-industrie',
    'sec.agri.desc': "Autonomisation des communautés agricoles et de la production agricole.",
    'sec.pf.title': 'Finance de Projets',
    'sec.pf.desc': "Organisation du financement pour les grands projets et les initiatives de durabilité.",
    
    // Additional services
    'add.housing.title': 'Logement & Développement Urbain',
    'add.housing.desc': "Programmes de logements abordables et cadres urbains pour des communautés durables.",
    'add.agri.title': 'Agriculture & Eau',
    'add.agri.desc': "Productivité rurale, systèmes d'irrigation et optimisation de la chaîne d'approvisionnement.",
    'add.food.title': 'Transformation Alimentaire',
    'add.food.desc': "Révolutionner l'industrie alimentaire en Afrique avec des installations de transformation modernes.",
    
    // Trade activities
    'trade.food.title': 'Produits Alimentaires',
    'trade.food.desc': "Commerce international de produits agricoles, denrées transformées et solutions de sécurité alimentaire.",
    'trade.mining.title': 'Produits Miniers',
    'trade.mining.desc': "Commerce de ressources minérales, métaux précieux et matières premières des mines africaines.",
    'trade.equip.title': "Équipements & Machinerie",
    'trade.equip.desc': "Fourniture d'équipements industriels, machinerie lourde et outils spécialisés pour les projets de développement.",
    
    // Projects Page
    'projects.page.tagline': 'Notre Travail',
    'projects.page.title': 'Projets',
    'projects.page.title2': 'Transformateurs',
    'projects.objective.tagline': 'Notre Objectif',
    'projects.objective.title': "Stimuler le Développement",
    'projects.objective.title2': 'Économique',
    'projects.obj.1': "Exécuter des projets transformateurs centrés sur le développement économique de l'Afrique",
    'projects.obj.2': 'Faciliter le développement des infrastructures et le financement de projets à travers des partenariats public-privé stratégiques',
    'projects.obj.3': 'Exploiter les réseaux financiers mondiaux étendus pour les projets à capital intensif',
    'projects.obj.4': "Stimuler la croissance dans l'agriculture, les agro-industries et les infrastructures",
    'projects.obj.5': "Aligner nos efforts sur les objectifs des clients pour un impact positif durable",
    'projects.obj.6': "Libérer le véritable potentiel de l'Afrique et ouvrir la voie à un avenir meilleur",
    'projects.portfolio.tagline': 'Portefeuille',
    'projects.portfolio.title': 'Projets en',
    'projects.portfolio.title2': 'Vedette',
    'projects.view.cta': 'Voir les Détails du Projet',
    'projects.cta.tagline': 'Collaborer',
    'projects.cta.title': 'Vous Avez un Projet en',
    'projects.cta.title2': 'Tête?',
    'projects.cta.p1': "Nous collaborons avec les gouvernements, les partenaires du secteur privé et les organisations internationales pour réaliser des projets transformatifs à travers l'Afrique.",
    'projects.cta.button': 'Discuter de Votre Projet',
    
    // Project items
    'proj.aviation.title': "Modernisation de l'Infrastructure Aéronautique",
    'proj.aviation.category': 'Aviation',
    'proj.aviation.desc': "Un programme complet de mise à niveau couvrant les terminaux, les systèmes aéroportuaires et l'expérience des passagers—conçu pour la sécurité, la capacité et la résilience à long terme.",
    'proj.aviation.investment': 'Investissement',
    'proj.aviation.capacity': 'Capacité',
    'proj.aviation.timeline': 'Calendrier',
    'proj.housing.title': 'Développement de Logements Urbains',
    'proj.housing.category': 'Logement',
    'proj.housing.desc': 'Des programmes de logements abordables et des cadres urbains conçus pour créer des communautés durables et inclusives avec des équipements modernes et des infrastructures.',
    'proj.housing.units': 'Unités',
    'proj.housing.families': 'Familles',
    'proj.housing.area': 'Superficie',
    'proj.energy.title': 'Initiative Énergie Renouvelable',
    'proj.energy.category': 'Énergie',
    'proj.energy.desc': "Pionnier des technologies vertes pour révolutionner le paysage énergétique, champion des solutions durables grâce à l'éolien, le solaire et l'hydroélectricité.",
    'proj.energy.capacity': 'Capacité',
    'proj.energy.homes': 'Foyers',
    'proj.energy.co2': 'Réduction CO₂',
    'proj.agri.title': 'Transformation Agricole',
    'proj.agri.category': 'Agriculture',
    'proj.agri.desc': "Autonomisation des communautés agricoles et stimulation de la production et de la transformation des produits agricoles grâce à des systèmes modernes d'irrigation et de chaîne d'approvisionnement.",
    'proj.agri.farmers': 'Agriculteurs',
    'proj.agri.hectares': 'Hectares',
    'proj.agri.yield': "Augmentation du Rendement",
    'proj.infra.title': "Construction d'Infrastructures",
    'proj.infra.category': 'Infrastructure',
    'proj.infra.desc': "Direction du développement des infrastructures essentielles, y compris les écoles, bureaux, hôpitaux, centres commerciaux, hôtels, routes, ponts et stades.",
    'proj.infra.projects': 'Projets',
    'proj.infra.investment': 'Investissement',
    'proj.infra.jobs': 'Emplois',
  },
};

// Detect if user is in a French-speaking region
function detectFrenchLanguage(): boolean {
  // Check PRIMARY browser language first (most reliable indicator)
  const primaryLang = navigator.language || (navigator.languages && navigator.languages[0]);
  
  if (primaryLang) {
    const lowerLang = primaryLang.toLowerCase();
    // Only return true if PRIMARY language starts with 'fr'
    if (lowerLang.startsWith('fr')) {
      return true;
    }
  }
  
  // Fallback: check timezone for French-speaking regions
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  
  // Comprehensive list of timezones for French-speaking countries
  const frenchTimezones = [
    // Europe - France, Belgium, Switzerland, Luxembourg, Monaco
    'Europe/Paris', 'Europe/Brussels', 'Europe/Geneva', 'Europe/Luxembourg', 'Europe/Monaco',
    'Europe/Zurich', // Switzerland
    // West Africa (French-speaking)
    'Africa/Abidjan', 'Africa/Dakar', 'Africa/Bamako', 'Africa/Ouagadougou', 'Africa/Niamey',
    'Africa/Porto-Novo', 'Africa/Lome', 'Africa/Bissau', 'Africa/Conakry', 'Africa/Freetown',
    'Africa/Banjul', 'Africa/Nouakchott',
    // Central Africa (French-speaking)
    'Africa/Douala', 'Africa/Yaounde', 'Africa/Bangui', 'Africa/Brazzaville', 'Africa/Kinshasa',
    'Africa/Libreville', 'Africa/Malabo', 'Africa/Ndjamena',
    // North Africa (French-speaking)
    'Africa/Algiers', 'Africa/Tunis', 'Africa/Casablanca', 'Africa/Tripoli',
    // East/Southern Africa (French-speaking)
    'Indian/Antananarivo', 'Indian/Mahe', 'Indian/Mauritius', 'Indian/Reunion', 'Indian/Mayotte',
    'Africa/Kigali', 'Africa/Bujumbura', 'Africa/Djibouti', 'Africa/Moroni',
    // Caribbean (French-speaking)
    'America/Guadeloupe', 'America/Martinique', 'America/Havana', 'America/Port-au-Prince',
    // Pacific (French-speaking)
    'Pacific/Noumea', 'Pacific/Tahiti', 'Pacific/Wallis', 'Pacific/Papeete'
  ];
  
  // Check for exact match
  if (frenchTimezones.includes(timezone)) {
    return true;
  }
  
  // Check if timezone contains French city names (for partial matches)
  const frenchCities = ['Paris', 'Brussels', 'Bruxelles', 'Geneva', 'Luxembourg', 'Monaco', 'Zurich'];
  if (frenchCities.some(city => timezone.toLowerCase().includes(city.toLowerCase()))) {
    return true;
  }
  
  // Additional check: if timezone starts with Africa/ and contains certain city names
  const frenchAfricaCities = [
    'Abidjan', 'Dakar', 'Bamako', 'Ouagadougou', 'Niamey', 'Porto-Novo', 'Lome',
    'Bissau', 'Conakry', 'Freetown', 'Banjul', 'Nouakchott', 'Douala', 'Yaounde',
    'Bangui', 'Brazzaville', 'Kinshasa', 'Libreville', 'Malabo', 'Ndjamena',
    'Algiers', 'Tunis', 'Casablanca', 'Rabat', 'Tripoli', 'Kigali', 'Bujumbura',
    'Djibouti', 'Moroni', 'Antananarivo'
  ];
  
  if (timezone.startsWith('Africa/')) {
    const city = timezone.replace('Africa/', '');
    if (frenchAfricaCities.some(fc => city.toLowerCase().includes(fc.toLowerCase()))) {
      return true;
    }
  }
  
  // Check UTC offset for European Central Time (CET = UTC+1, CEST = UTC+2)
  // Combined with timezone string to identify French-speaking European regions
  try {
    const now = new Date();
    const offset = -now.getTimezoneOffset(); // in minutes
    const offsetHours = offset / 60;
    
    // For European French detection: check if timezone is Europe/ and offset is +1/+2
    // This covers France, Belgium, Switzerland, Luxembourg
    if ((offsetHours === 1 || offsetHours === 2) && timezone.startsWith('Europe/')) {
      // Additional check: only return true if it's likely a French-speaking country
      // based on the timezone name
      const europeanFrenchZones = ['Paris', 'Brussels', 'Geneva', 'Luxembourg', 'Monaco', 'Zurich'];
      if (europeanFrenchZones.some(zone => timezone.toLowerCase().includes(zone.toLowerCase()))) {
        return true;
      }
    }
  } catch (e) {
    // Ignore timezone offset errors
  }
  
  return false;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isAutoDetected, setIsAutoDetected] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize language on mount
  useEffect(() => {
    // Check if user has manually selected a language before
    const savedLanguage = localStorage.getItem('gpd-language') as Language | null;
    const savedManual = localStorage.getItem('gpd-language-manual');
    
    if (savedLanguage && savedManual === 'true') {
      // User manually selected a language, respect their choice
      setLanguageState(savedLanguage);
      setIsAutoDetected(false);
    } else {
      // Auto-detect based on browser/location
      const isFrench = detectFrenchLanguage();
      const detectedLang: Language = isFrench ? 'fr' : 'en';
      setLanguageState(detectedLang);
      setIsAutoDetected(isFrench);
      
      // Save the auto-detected language
      localStorage.setItem('gpd-language', detectedLang);
      localStorage.setItem('gpd-language-manual', 'false');
    }
    
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    setIsAutoDetected(false);
    localStorage.setItem('gpd-language', lang);
    localStorage.setItem('gpd-language-manual', 'true');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  // Don't render children until language is initialized to prevent flash
  if (!isInitialized) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isAutoDetected }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
