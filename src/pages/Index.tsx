
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Education from '../components/Education';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import ParticleBackground from '../components/ParticleBackground';

const Index = () => {
  useEffect(() => {
    // Initialize AOS with error handling
    const initAOS = async () => {
      try {
        const AOS = await import('aos');
        AOS.init({
          duration: 1000,
          easing: 'ease-out-cubic',
          once: true,
          offset: 100,
        });
      } catch (error) {
        console.warn('AOS library failed to load:', error);
      }
    };

    initAOS();
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-x-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
};

export default Index;
