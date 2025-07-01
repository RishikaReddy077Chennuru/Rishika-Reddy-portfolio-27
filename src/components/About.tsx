import React from 'react';
const About = () => {
  return <section id="about" className="relative py-16 sm:py-20 lg:py-24 responsive-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="responsive-heading font-bold mb-4 glow-text">
            About <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-violet-400 to-indigo-400 mx-auto rounded-full "></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div data-aos="fade-right">
            <div className="relative">
              <div className="w-64 sm:w-72 lg:w-80 h-64 sm:h-72 lg:h-80 mx-auto glass-card rounded-3xl overflow-hidden hover-glow">
                <img src="/lovable-uploads/fce3d925-0a08-46aa-a05a-68354862cd54.png" alt="Rishika Reddy Chennuru" className="w-full h-full object-cover brightness-110 contrast-110" />
              </div>
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 bg-gradient-to-br from-lavender-200 to-lavender-300 rounded-full blur-xl opacity-60"></div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-20 sm:w-24 lg:w-32 h-20 sm:h-24 lg:h-32 bg-gradient-to-br from-slate-200 to-lavender-200 rounded-full blur-xl opacity-40"></div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <div className="glass-card rounded-3xl p-6 sm:p-8 hover-glow">
              <h3 className="text-xl sm:text-2xl font-bold card-text-primary mb-4 sm:mb-6">
                Passionate Student & Designer
              </h3>
              <p className="card-text-secondary responsive-text leading-relaxed mb-4 sm:mb-6">
                Driven and innovative, I honed my technical and creative skills as an Intern at Android Developer by 
                Google for Developers, where I expanded my software proficiency and streamlined processes. A 
                quick learner with a knack for multitasking, my contributions enhanced website usability, showcasing 
                my ability to blend computer skills with creativity effectively.
              </p>
              <p className="card-text-secondary responsive-text leading-relaxed mb-6 sm:mb-8">
                Experienced with project assistance and teamwork. Utilizes strong organizational skills to manage 
                tasks efficiently. I have good designing skills and created so many designs using Figma.
              </p>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-violet-600 mb-2">5+</div>
                  <div className="card-text-secondary text-sm sm:text-base">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-indigo-600 mb-2">Student</div>
                  <div className="card-text-secondary text-sm sm:text-base">Data Science</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;