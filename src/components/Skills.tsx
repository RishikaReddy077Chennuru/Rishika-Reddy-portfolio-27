import React from 'react';
const Skills = () => {
  const skillCategories = [{
    title: "Frontend & Design",
    icon: "🎨",
    skills: [{
      name: "HTML",
      level: 90
    }, {
      name: "CSS",
      level: 88
    }, {
      name: "UI/UX Design",
      level: 95
    }, {
      name: "Figma",
      level: 92
    }]
  }, {
    title: "Programming",
    icon: "💻",
    skills: [{
      name: "Java",
      level: 85
    }, {
      name: "Python",
      level: 80
    }, {
      name: "SQL",
      level: 82
    }]
  }, {
    title: "Tools & Version Control",
    icon: "🛠️",
    skills: [{
      name: "Git",
      level: 85
    }, {
      name: "Project Management",
      level: 88
    }, {
      name: "Creative Problem Solving",
      level: 90
    }]
  }];
  return <section id="skills" className="relative py-16 sm:py-20 lg:py-24 responsive-container">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16" data-aos="fade-up">
          <h2 className="responsive-heading font-bold mb-4 glow-text">
            My <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-indigo-400 to-violet-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((category, index) => <div key={category.title} className="glass-card rounded-3xl p-6 sm:p-8 hover:glass-strong transition-all duration-300 hover-glow" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="text-center mb-6 sm:mb-8">
                <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{category.icon}</div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold card-text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="card-text-secondary font-medium text-sm sm:text-base">{skill.name}</span>
                      <span className="text-lavender-600 font-semibold text-sm sm:text-base">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200/50 rounded-full h-2">
                      <div style={{
                  width: `${skill.level}%`,
                  animationDelay: `${index * 200 + skillIndex * 100}ms`
                }} className="bg-gradient-to-r from-violet-500 to-indigo-500 h-2 rounded-full transition-all duration-1000 ease-out"></div>
                    </div>
                  </div>)}
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Skills;