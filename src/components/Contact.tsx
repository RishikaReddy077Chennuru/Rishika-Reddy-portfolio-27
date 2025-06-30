
import React, { useState } from 'react';
import { Mail, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:rishikareddychennuri@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text">
            Get In <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="glass-card rounded-3xl p-8 hover-glow">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Let's Connect</h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="glass-strong rounded-full p-3">
                    <Mail className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Email</h4>
                    <a href="mailto:rishikareddychennuri@gmail.com" className="text-gray-600 hover:text-purple-600 transition-colors">
                      rishikareddychennuri@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="glass-strong rounded-full p-3">
                    <MapPin className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Location</h4>
                    <p className="text-gray-600">Hyderabad, India</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-300/50">
                <h4 className="font-semibold text-gray-800 mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  <a href="https://github.com/RishikaReddy077Chennuru" target="_blank" rel="noopener noreferrer" className="glass-strong rounded-full p-3 hover:glass transition-all duration-300 transform hover:scale-110">
                    <Github className="text-gray-700 hover:text-purple-600" size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/rishika-reddy-chennuru" target="_blank" rel="noopener noreferrer" className="glass-strong rounded-full p-3 hover:glass transition-all duration-300 transform hover:scale-110">
                    <Linkedin className="text-gray-700 hover:text-blue-600" size={20} />
                  </a>
                  <a href="mailto:rishikareddychennuri@gmail.com" className="glass-strong rounded-full p-3 hover:glass transition-all duration-300 transform hover:scale-110">
                    <Mail className="text-gray-700 hover:text-amber-600" size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div data-aos="fade-left">
            <form onSubmit={handleSubmit} className="glass-card rounded-3xl p-8 hover-glow">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send a Message</h3>
              
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full glass-card rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:glass-strong focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full glass-card rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:glass-strong focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full glass-card rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:glass-strong focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                    placeholder="Enter subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full glass-card rounded-lg px-4 py-3 text-gray-800 placeholder-gray-500 focus:glass-strong focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full glass-strong bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
