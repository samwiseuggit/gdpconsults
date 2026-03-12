import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import Footer from './sections/Footer';
import CookieConsent from './components/CookieConsent';
import GoogleAnalytics from './components/GoogleAnalytics';

// Service Pages
import ProjectFinance from './pages/services/ProjectFinance';
import MiningOperations from './pages/services/MiningOperations';
import InfrastructureDevelopment from './pages/services/InfrastructureDevelopment';
import PublicPrivatePartnerships from './pages/services/PublicPrivatePartnerships';
import GovernmentalAffairs from './pages/services/GovernmentalAffairs';
import InternationalPartnerships from './pages/services/InternationalPartnerships';
import ProjectDevelopment from './pages/services/ProjectDevelopment';
import Negotiation from './pages/services/Negotiation';
import ArchitectureEngineering from './pages/services/ArchitectureEngineering';
import GreenTechnology from './pages/services/GreenTechnology';
import EconomicLobbying from './pages/services/EconomicLobbying';
import AviationIndustry from './pages/services/AviationIndustry';

// Project Pages
import AviationProject from './pages/projects/AviationProject';
import EnergyProject from './pages/projects/EnergyProject';
import HousingProject from './pages/projects/HousingProject';
import AgricultureProject from './pages/projects/AgricultureProject';

// Blog
import Blog from './pages/Blog';

import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <div className="relative bg-white min-h-screen">
          {/* Noise Overlay for premium texture */}
          <div className="noise-overlay" />
          
          {/* Navigation */}
          <Navigation />
          
          {/* Main Content */}
          <main className="relative">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/project-finance" element={<ProjectFinance />} />
              <Route path="/services/mining-operations" element={<MiningOperations />} />
              <Route path="/services/infrastructure-development" element={<InfrastructureDevelopment />} />
              <Route path="/services/public-private-partnerships" element={<PublicPrivatePartnerships />} />
              <Route path="/services/governmental-affairs" element={<GovernmentalAffairs />} />
              <Route path="/services/international-partnerships" element={<InternationalPartnerships />} />
              <Route path="/services/project-development" element={<ProjectDevelopment />} />
              <Route path="/services/negotiation" element={<Negotiation />} />
              <Route path="/services/architecture-engineering" element={<ArchitectureEngineering />} />
              <Route path="/services/green-technology" element={<GreenTechnology />} />
              <Route path="/services/economic-lobbying" element={<EconomicLobbying />} />
              <Route path="/services/aviation-industry" element={<AviationIndustry />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/projects/aviation" element={<AviationProject />} />
              <Route path="/projects/energy" element={<EnergyProject />} />
              <Route path="/projects/housing" element={<HousingProject />} />
              <Route path="/projects/agriculture" element={<AgricultureProject />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/terms-of-service" element={<TermsOfService />} />
            </Routes>
          </main>

          <Footer />
          <CookieConsent />
          <GoogleAnalytics />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
