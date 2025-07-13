
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      issuer: "Amazon Web Services",
      date: "2025",
      image: "/uploads/fee3d1f6-77ce-42c8-bc48-b3df8ddfe36f.png",
      verifyUrl: "https://www.credly.com/go/pZKtnfDw"
    },
    {
      title: "Android Developer Virtual Internship",
      issuer: "Google for Developers",
      date: "2024",
      image: "/uploads/446df17d-588f-43c4-b508-3d21231e70b9.png",
      verifyUrl: "https://aictecert.eduskillsfoundation.org/pages/home/verify.php?cert=6b5d43a6c012f91ae0c602bcd4a38171"
    },
    {
      title: "Data Science & Analytics",
      issuer: "HP Foundation",
      date: "2024",
      image: "/uploads/9c8c78af-b2fb-44e1-90c8-6f3d1b841c63.png",
      verifyUrl: "https://www.life-global.org/certificate/579a244f-54e7-4727-9856-0f691f23b8c8"
    }
  ];

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            <span className="bg-gradient-to-r from-purple-500 to-blue-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-300 to-blue-300 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="group glass-card rounded-3xl overflow-hidden hover:glass-strong transition-all duration-500 hover:transform hover:scale-105 cursor-pointer hover-glow"
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute top-2 right-2">
                  <Award className="text-pink-400 drop-shadow-lg" size={20} />
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold card-text-primary mb-2 line-clamp-2">{cert.title}</h3>
                <p className="text-purple-500 font-medium mb-1">{cert.issuer}</p>
                <p className="card-text-secondary text-sm mb-3">{cert.date}</p>
                
                <div className="inline-flex items-center gap-2 text-blue-500 hover:text-purple-500 text-sm font-medium transition-colors duration-200">
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
