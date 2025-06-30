
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
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      {/* Liquid background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div className="hero-text mb-4">
          <h2 className="text-xl md:text-2xl text-purple-300 font-light mb-4">
            Hello, I'm
          </h2>
        </div>
        
        <div className="hero-text mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              John Doe
            </span>
          </h1>
        </div>
        
        <div className="hero-text mb-8">
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Full Stack Developer & UI/UX Designer crafting beautiful digital experiences
          </p>
        </div>
        
        <div className="hero-cta mb-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
              View My Work
            </button>
            <button className="border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>
        
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="social-link text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Github size={28} />
          </a>
          <a href="#" className="social-link text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Linkedin size={28} />
          </a>
          <a href="#" className="social-link text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
            <Mail size={28} />
          </a>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-purple-400" size={32} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
