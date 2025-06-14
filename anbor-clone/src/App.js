import { useRef } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import WhyChoose from './components/WhyChoose/WhyChoose';
import TabsSection from './components/TabsSection/TabsSection';
import ContactSection from './components/ContactSection/ContactSection';
import FAQSection from './components/FAQSection/FAQSection';
import Footer from './components/Footer/Footer';

function App() {
  const homeRef = useRef(null);
  const featuresRef = useRef(null);
  const instructionsRef = useRef(null);
  const tariffsRef = useRef(null);
  const aboutRef = useRef(null);
  const faqRef = useRef(null);

  return (
    <div>
      <Header />
      <Hero ref={homeRef} />
      <Features ref={featuresRef} />
      <WhyChoose ref={instructionsRef} />
      <TabsSection ref={tariffsRef} />
      <ContactSection ref={aboutRef} />
      <FAQSection ref={faqRef} />
      <Footer />
    </div>
  );
}

export default App;