
import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science: Data Science",
      institution: "Malla Reddy University",
      location: "Hyderabad, India",
      period: "Expected in 2027-06",
      description: "Currently pursuing Bachelor's degree in Data Science with focus on analytics and machine learning."
    },
    {
      degree: "Intermediate Education: Mathematical Sciences",
      institution: "Sri Chaithanya Junior College",
      location: "Hyderabad, India",
      period: "2022-05",
      description: "Completed intermediate education with specialization in Mathematical Sciences."
    },
    {
      degree: "High School Diploma",
      institution: "Rainbow Model High School",
      location: "Hyderabad, India",
      period: "2020-03",
      description: "Completed high school education with strong academic performance."
    }
  ];

  return (
    <section id="education" className="relative py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12" data-aos="fade-up">
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
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              data-aos-delay={index * 150}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-2 border-slate-900 z-10"></div>
              
              {/* Content */}
              <div className={`ml-10 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-6' : 'md:pl-6'
              }`}>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center gap-2 text-purple-400 mb-2">
                    <Calendar size={14} />
                    <span className="text-sm font-medium">{edu.period}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2">{edu.degree}</h3>
                  
                  <div className="flex items-center gap-2 text-gray-300 mb-2">
                    <span className="font-semibold text-sm">{edu.institution}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-gray-400 mb-3">
                    <MapPin size={14} />
                    <span className="text-sm">{edu.location}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {edu.description}
                  </p>
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
