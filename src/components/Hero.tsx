
import React, { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      const { gsap } = await import('gsap');
      
      const tl = gsap.timeline();
      
      tl.from('.hero-text', {
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
      .from('.hero-cta', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.3')
      .from('.social-link', {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out'
      }, '-=0.4');
    };

    loadGSAP();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center responsive-container">
      {/* Modern background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-lavender-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-slate-200/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-80 lg:w-96 h-64 sm:h-80 lg:h-96 bg-lavender-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-5xl mx-auto flex-1 flex flex-col justify-center py-16 sm:py-20">
        <div className="hero-text mb-2 sm:mb-4">
          <h2 className="text-lg sm:text-xl lg:text-2xl text-lavender-600 font-light mb-2 sm:mb-4">
            Hello, I'm
          </h2>
        </div>
        
        <div className="hero-text mb-4 sm:mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 leading-tight" style={{ color: '#1e293b' }}>
            <span className="bg-gradient-to-r from-lavender-600 via-lavender-500 to-slate-600 bg-clip-text text-transparent">
              Rishika Reddy Chennuru
            </span>
          </h1>
        </div>
        
        <div className="hero-text mb-6 sm:mb-8">
          <p className="text-lg sm:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4" style={{ color: '#475569' }}>
            Student & UI/UX Designer crafting beautiful digital experiences
          </p>
        </div>
        
        <div className="hero-cta mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto glass-strong bg-gradient-to-r from-lavender-500 to-lavender-400 hover:from-lavender-600 hover:to-lavender-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ opacity: 1 }}
            >
              View My Work
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto glass-card border-2 border-lavender-300 hover:glass-strong px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105"
              style={{ color: '#475569', opacity: 1 }}
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="flex justify-center space-x-4 sm:space-x-6">
          <a href="https://github.com/RishikaReddy077Chennuru" target="_blank" rel="noopener noreferrer" className="social-link text-slate-600 hover:text-violet-600 transition-colors duration-300 transform hover:scale-110 p-2">
            <Github size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a href="https://www.linkedin.com/in/rishika-reddy-chennuru" target="_blank" rel="noopener noreferrer" className="social-link text-slate-600 hover:text-indigo-600 transition-colors duration-300 transform hover:scale-110 p-2">
            <Linkedin size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a href="mailto:rishikareddychennuri@gmail.com" className="social-link text-slate-600 hover:text-violet-600 transition-colors duration-300 transform hover:scale-110 p-2">
            <Mail size={24} className="sm:w-7 sm:h-7" />
          </a>
        </div>
      </div>
      
      <div className="relative z-10 flex justify-center pb-6 sm:pb-8">
        <div className="animate-bounce">
          <ChevronDown className="text-violet-400 w-6 h-6 sm:w-8 sm:h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
