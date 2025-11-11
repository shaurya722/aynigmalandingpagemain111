import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LivePolicyMarquee from './components/LivePolicyMarquee';
import About from './components/About';
import Solutions from './components/Solutions';
import WhyAynigma from './components/WhyAynigma';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

// Import industry pages
import HealthcarePage from './pages/industries/HealthcarePage';
import FinancePage from './pages/industries/FinancePage';
import TechnologyPage from './pages/industries/TechnologyPage';
import ManufacturingPage from './pages/industries/ManufacturingPage';
import LegalPage from './pages/industries/LegalPage';
import EducationPage from './pages/industries/EducationPage';
import GovernmentPage from './pages/industries/GovernmentPage';

// Import solution pages
import AIRedTeamingPage from './pages/solutions/AIRedTeamingPage';
import AIRuntimeSecurityPage from './pages/solutions/AIRuntimeSecurityPage';
import AIAgenticScanningPage from './pages/solutions/AIAgenticScanningPage';
import MCPSecurityPage from './pages/solutions/MCPSecurityPage';
import ComplianceMonitoringPage from './pages/solutions/ComplianceMonitoringPage';
import AISCAPage from './pages/solutions/AISCAPage';
import AISASTPage from './pages/solutions/AISASTPage';
import AIIncidentResponsePage from './pages/solutions/AIIncidentResponsePage';

// Import company pages
import AboutUsPage from './pages/company/AboutUsPage';
import CareersPage from './pages/company/CareersPage';
import PartnersPage from './pages/company/PartnersPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';

function HomePage() {
  return (
    <>
      <Hero />
      <LivePolicyMarquee />
      <About />
      <Solutions />
      <WhyAynigma />
      <Industries />
      <Contact />
    </>
  );
}

function App() {

  return (
    <Router>
      <div className="min-h-screen relative">
        <Background3D />
        <Header />
        <main className="pt-20 relative z-10">
          <Routes>
            <Route path="/" element={<HomePage />} />
            {/* Industry Routes */}
            <Route path="/healthcare" element={<HealthcarePage />} />
            <Route path="/finance" element={<FinancePage />} />
            <Route path="/technology" element={<TechnologyPage />} />
            <Route path="/manufacturing" element={<ManufacturingPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="/government" element={<GovernmentPage />} />
            {/* Solution Routes */}
            <Route path="/ai-red-teaming" element={<AIRedTeamingPage />} />
            <Route path="/ai-runtime-security" element={<AIRuntimeSecurityPage />} />
            <Route path="/ai-agentic-scanning" element={<AIAgenticScanningPage />} />
            <Route path="/mcp-security" element={<MCPSecurityPage />} />
            <Route path="/compliance-monitoring" element={<ComplianceMonitoringPage />} />
            <Route path="/ai-sca" element={<AISCAPage />} />
            <Route path="/ai-sast" element={<AISASTPage />} />
            <Route path="/ai-incident-response" element={<AIIncidentResponsePage />} />
            {/* Company Routes */}
            <Route path="/about-us" element={<AboutUsPage />} />
            <Route path="/careers" element={<CareersPage />} />
            <Route path="/partners" element={<PartnersPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
