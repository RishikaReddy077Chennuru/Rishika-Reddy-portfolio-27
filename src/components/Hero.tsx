
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

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center px-4 sm:px-6 lg:px-8">
      {/* Evening sky background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-300/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto flex-1 flex flex-col justify-center">
        <div className="hero-text mb-4">
          <h2 className="text-xl md:text-2xl text-purple-300 font-light mb-4">
            Hello, I'm
          </h2>
        </div>
        
        <div className="hero-text mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent">
              Rishika Reddy Chennuru
            </span>
          </h1>
        </div>
        
        <div className="hero-text mb-8">
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Student & UI/UX Designer crafting beautiful digital experiences
          </p>
        </div>
        
        <div className="hero-cta mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              View My Work
            </button>
            <button className="border-2 border-purple-300 text-purple-300 hover:bg-purple-300 hover:text-gray-900 px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/RishikaReddy077Chennuru" target="_blank" rel="noopener noreferrer" className="social-link text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="https://www.linkedin.com/in/rishika-reddy-chennuru" target="_blank" rel="noopener noreferrer" className="social-link text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="mailto:rishikareddychennuri@gmail.com" className="social-link text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
      </div>
      
      <div className="relative z-10 flex justify-center pb-8">
        <div className="animate-bounce">
          <ChevronDown className="text-purple-300" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
