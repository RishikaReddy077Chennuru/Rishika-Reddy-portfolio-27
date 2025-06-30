
import React from 'react';

const About = () => {
  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-yellow-400 to-amber-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-amber-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-yellow-500/20 to-amber-500/20 rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden">
                <img 
                  src="/lovable-uploads/fce3d925-0a08-46aa-a05a-68354862cd54.png"
                  alt="Rishika Reddy Chennuru" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-amber-400 to-yellow-400 rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Passionate Student & Designer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                Driven and innovative, I honed my technical and creative skills as an Intern at Android Developer by 
                Google for Developers, where I expanded my software proficiency and streamlined processes. A 
                quick learner with a knack for multitasking, my contributions enhanced website usability, showcasing 
                my ability to blend computer skills with creativity effectively.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                Experienced with project assistance and teamwork. Utilizes strong organizational skills to manage 
                tasks efficiently. I have good designing skills and created so many designs using Figma.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">5+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400 mb-2">Student</div>
                  <div className="text-gray-400">Data Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
