import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CoconutExperience from './components/CoconutExperience';
import ProductsSection from './components/ProductsSection';
import OurStory from './components/OurStory';
import OurProcess from './components/OurProcess';
import DeliveryAndFAQ from './components/DeliveryAndFAQ';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* 3D Scroll-Driven Coconut Extraction Experience */}
      <CoconutExperience />

      {/* Products Section */}
      <ProductsSection />

      {/* Our Story Editorial Section */}
      <OurStory />

      {/* Our Process 4-Step Visual Section */}
      <OurProcess />

      {/* Delivery Zones & FAQ Accordion */}
      <DeliveryAndFAQ />

      {/* Contact & Enquiry Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
