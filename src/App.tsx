import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
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

function App() {
  const { i18n } = useTranslation();

  useEffect(() => {
    // Set document direction based on language
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Header />
      <main className="pt-20 relative z-10">
        <Hero />
        <LivePolicyMarquee />
        <About />
        <Solutions />
        <WhyAynigma />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
