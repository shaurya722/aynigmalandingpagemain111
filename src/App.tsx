import Header from './components/Header';
import Hero from './components/Hero';
import LivePolicyMarquee from './components/LivePolicyMarquee';
import Solutions from './components/Solutions';
import Product from './components/Product';
import WhyAynigma from './components/WhyAynigma';
import Industries from './components/Industries';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

function App() {
  return (
    <div className="min-h-screen relative">
      <Background3D />
      <Header />
      <main className="pt-20 relative z-10">
        <Hero />
        <LivePolicyMarquee />
        <Solutions />
        <Product />
        <WhyAynigma />
        <Industries />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
