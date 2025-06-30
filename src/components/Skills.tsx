
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend & Design",
      icon: "🎨",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 88 },
        { name: "UI/UX Design", level: 95 },
        { name: "Figma", level: 92 },
      ]
    },
    {
      title: "Programming",
      icon: "💻",
      skills: [
        { name: "Java", level: 85 },
        { name: "Python", level: 80 },
        { name: "SQL", level: 82 },
      ]
    },
    {
      title: "Tools & Version Control",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 85 },
        { name: "Project Management", level: 88 },
        { name: "Creative Problem Solving", level: 90 },
      ]
    }
  ];

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            My <span className="bg-gradient-to-r from-purple-600 to-orange-500 bg-clip-text text-transparent">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-orange-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card rounded-3xl p-8 hover:glass-strong transition-all duration-300 hover-glow"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold card-text-primary">{category.title}</h3>
              </div>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="card-text-secondary font-medium">{skill.name}</span>
                      <span className="text-purple-500 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-white/30 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-purple-400 to-orange-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
