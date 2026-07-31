import React from 'react';
import Navbar from './components/Navbar';
import './components/Navbar.css';
import HeroSlider from './components/HeroSlider';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import ProductsSection from './components/ProductsSection';
import CertificationsSection from './components/CertificationsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackToTop from "./components/BackToTop";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <div className="app-container">
  <Navbar />

  <main>
    <HeroSlider />
    <AboutSection />
    <ServicesSection />
    <ProductsSection />
    <CertificationsSection />
    <ContactSection />
  </main>

  <Footer />

  <BackToTop />
  <FloatingWhatsApp />
</div>
  );
}
