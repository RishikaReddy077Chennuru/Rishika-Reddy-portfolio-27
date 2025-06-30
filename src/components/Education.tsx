
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      location: "Stanford, CA",
      period: "2018 - 2020",
      description: "Specialized in Machine Learning and Artificial Intelligence. Graduated Magna Cum Laude with a focus on deep learning and neural networks.",
      gpa: "3.9/4.0"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2014 - 2018",
      description: "Comprehensive study of software development, algorithms, and data structures. Active member of the Computer Science Society.",
      gpa: "3.8/4.0"
    }
  ];

  return (
    <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>
          
          {educationData.map((edu, index) => (
            <div 
              key={edu.degree}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 200}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900 z-10"></div>
              
              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-300 mb-3">
                    <span className="font-semibold">{edu.institution}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <MapPin size={16} />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-3">
                    {edu.description}
                  </p>
                  
                  <div className="bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-400/20 text-purple-300 px-3 py-1 rounded-full text-sm inline-block">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
