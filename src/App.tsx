import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';

// Service Pages
import GovernmentalAffairs from './pages/services/GovernmentalAffairs';
import InternationalPartnerships from './pages/services/InternationalPartnerships';
import ProjectDevelopment from './pages/services/ProjectDevelopment';
import ProjectFinance from './pages/services/ProjectFinance';
import Negotiation from './pages/services/Negotiation';
import ArchitectureEngineering from './pages/services/ArchitectureEngineering';
import GreenTechnology from './pages/services/GreenTechnology';
import EconomicLobbying from './pages/services/EconomicLobbying';
import AviationIndustry from './pages/services/AviationIndustry';
import MiningOperations from './pages/services/MiningOperations';
import InfrastructureDevelopment from './pages/services/InfrastructureDevelopment';
import PublicPrivatePartnerships from './pages/services/PublicPrivatePartnerships';

// Project Pages
import AviationProject from './pages/projects/AviationProject';
import EnergyProject from './pages/projects/EnergyProject';
import HousingProject from './pages/projects/HousingProject';
import AgricultureProject from './pages/projects/AgricultureProject';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />

              {/* Service Routes */}
              <Route path="/services/governmental-affairs" element={<GovernmentalAffairs />} />
              <Route path="/services/international-partnerships" element={<InternationalPartnerships />} />
              <Route path="/services/project-development" element={<ProjectDevelopment />} />
              <Route path="/services/project-finance" element={<ProjectFinance />} />
              <Route path="/services/negotiation" element={<Negotiation />} />
              <Route path="/services/architecture-engineering" element={<ArchitectureEngineering />} />
              <Route path="/services/green-technology" element={<GreenTechnology />} />
              <Route path="/services/economic-lobbying" element={<EconomicLobbying />} />
              <Route path="/services/aviation-industry" element={<AviationIndustry />} />
              <Route path="/services/mining-operations" element={<MiningOperations />} />
              <Route path="/services/infrastructure-development" element={<InfrastructureDevelopment />} />
              <Route path="/services/public-private-partnerships" element={<PublicPrivatePartnerships />} />

              {/* Project Routes */}
              <Route path="/projects/aviation" element={<AviationProject />} />
              <Route path="/projects/energy" element={<EnergyProject />} />
              <Route path="/projects/housing" element={<HousingProject />} />
              <Route path="/projects/agriculture" element={<AgricultureProject />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
