
import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/lovable-uploads/18db0b6a-9902-4ffd-b3ab-068aa21bd36c.png';
    link.download = 'Rishika_Reddy_Chennuru_Resume.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass backdrop-blur-lg border-b border-slate-200/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto responsive-container">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-18">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-violet-600 to-slate-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 lg:space-x-8">
              {navItems.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-violet-600 px-2 lg:px-3 py-2 text-sm lg:text-base font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-slate-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button
                onClick={handleResumeDownload}
                className="glass-strong bg-gradient-to-r from-violet-500 to-slate-500 hover:from-violet-600 hover:to-slate-600 text-white px-3 lg:px-4 py-2 rounded-full text-sm lg:text-base font-medium transition-all duration-200 flex items-center gap-2 hover:shadow-lg transform hover:scale-105"
              >
                <Download size={16} />
                <span className="hidden sm:inline">Resume</span>
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-violet-600 transition-colors duration-200 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-strong backdrop-blur-lg border-b border-slate-200/20">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map(item => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-violet-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                handleResumeDownload();
                setIsOpen(false);
              }}
              className="w-full glass-strong bg-gradient-to-r from-violet-500 to-slate-500 text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center justify-center gap-2 mt-4"
            >
              <Download size={16} />
              Download Resume
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
