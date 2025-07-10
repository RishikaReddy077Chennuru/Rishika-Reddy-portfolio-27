
import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = "/lovable-uploads/Resume.pdf";
    link.download = "Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            My <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Resume</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-300 to-purple-300 mx-auto rounded-full"></div>
        </div>
        
        <div className="text-center" data-aos="fade-up" data-aos-delay="200">
          <div className="glass-card rounded-3xl p-8 hover-glow max-w-2xl mx-auto">
            <div className="mb-8">
              <FileText className="w-16 h-16 mx-auto mb-6 text-blue-500" />
              <h3 className="text-2xl font-bold card-text-primary mb-4">
                Download My Resume
              </h3>
              <p className="card-text-secondary text-lg leading-relaxed mb-8">
                Get a detailed overview of my skills, experience, and education. 
                Click the button below to download my complete resume.
              </p>
            </div>
            
            <button
              onClick={handleDownload}
              className="glass-strong bg-gradient-to-r from-blue-400 to-purple-500 hover:from-blue-500 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3"
            >
              <Download size={24} />
              Download Resume
            </button>
            
            <div className="mt-8 p-6 glass rounded-2xl">
              <img 
                src="/lovable-uploads/Resume.pdf"
                alt="Rishika Reddy Chennuru Resume Preview" 
                className="w-full max-w-md mx-auto rounded-lg shadow-lg cursor-pointer hover:scale-105 transition-transform duration-300"
                onClick={handleDownload}
              />
              <p className="text-sm card-text-secondary mt-4">
                Click on the image or button above to download
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
