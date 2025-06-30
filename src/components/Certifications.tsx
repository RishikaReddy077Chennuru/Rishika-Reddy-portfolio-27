
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2025",
      image: "/lovable-uploads/09ad1fb2-2b13-43d1a86f-490c0865574b.png",
      verifyUrl: "https://www.credly.com/go/pZKtnfDw"
    },
    {
      title: "Android Developer Virtual Internship",
      issuer: "Google for Developers",
      date: "2024",
      image: "/lovable-uploads/f4b31e92-8bda-4ab2-8379-3e031865971c.png",
      verifyUrl: "/lovable-uploads/f4b31e92-8bda-4ab2-8379-3e031865971c.png"
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP Foundation",
      date: "2024",
      image: "/lovable-uploads/e366028b-f716-4880-8476-5ed1acec023d.png",
      verifyUrl: "/lovable-uploads/e366028b-f716-4880-8476-5ed1acec023d.png"
    }
  ];

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              onClick={() => window.open(cert.verifyUrl, '_blank')}
            >
              <div className="relative overflow-hidden h-48">
                <img 
                  src={cert.image} 
                  alt={cert.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <Award className="text-yellow-400" size={20} />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-yellow-300 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-3">{cert.date}</p>
                
                <div className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 text-sm font-medium transition-colors duration-200">
                  <ExternalLink size={14} />
                  View Certificate
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
