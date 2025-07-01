import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
const Projects = () => {
  const projects = [{
    title: "Task Management Dashboard",
    description: "A comprehensive task management application with drag-and-drop functionality, real-time collaboration, and team productivity analytics built with modern web technologies.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    githubUrl: "https://github.com/topics/task-management",
    liveUrl: "https://todoapp-demo.netlify.app/"
  }, {
    title: "Data Visualization Platform",
    description: "An interactive data visualization platform for business analytics with custom charts, real-time data processing, and export capabilities for enterprise clients.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Python", "D3.js", "Flask", "PostgreSQL"],
    githubUrl: "https://github.com/topics/data-visualization",
    liveUrl: "https://observablehq.com/@d3/gallery"
  }, {
    title: "Mobile-First Design System",
    description: "A comprehensive UI/UX design system created in Figma with reusable components, design tokens, and documentation for mobile and web applications.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=600&h=400&fit=crop",
    technologies: ["Figma", "Design Tokens", "CSS", "JavaScript"],
    githubUrl: "https://github.com/topics/design-system",
    liveUrl: "https://www.figma.com/community/file/928108847914589057"
  }];
  return <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Featured <span className="bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <div key={project.title} className="group glass-card rounded-3xl overflow-hidden hover:glass-strong transition-all duration-500 hover:transform hover:scale-105 hover-glow" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="glass-card text-evening-primary p-2 rounded-full hover:glass-strong transition-colors duration-200">
                    <Github size={18} />
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="glass-card text-evening-primary p-2 rounded-full hover:glass-strong transition-colors duration-200">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold card-text-primary mb-3">{project.title}</h3>
                <p className="card-text-secondary mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => <span key={tech} className="glass-card border border-orange-200/50 text-orange-600 px-3 py-1 rounded-full text-sm">
                      {tech}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Projects;