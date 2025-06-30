
import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-SA-2023-001",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2023",
      credentialId: "GCP-PD-2023-002",
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Meta React Advanced Developer",
      issuer: "Meta (Facebook)",
      date: "2022",
      credentialId: "META-RAD-2022-003",
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      verifyUrl: "#"
    },
    {
      title: "Microsoft Azure DevOps Engineer",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MS-AZ400-2022-004",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      verifyUrl: "#"
    }
  ];

  return (
    <section id="certifications" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={cert.title}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-500 hover:transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="relative overflow-hidden h-32">
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
                <p className="text-purple-300 font-medium mb-1">{cert.issuer}</p>
                <p className="text-gray-400 text-sm mb-2">{cert.date}</p>
                <p className="text-gray-500 text-xs mb-3">ID: {cert.credentialId}</p>
                
                <a 
                  href={cert.verifyUrl}
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors duration-200"
                >
                  <ExternalLink size={14} />
                  Verify
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
