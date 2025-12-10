import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-[#F2F3F5] text-text font-sans selection:bg-black selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CaseStudies />
        <Services />
        <Testimonials />
        <Contact />
      </main>
    </div>
  );
}

export default App;