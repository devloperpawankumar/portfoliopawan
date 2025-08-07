import React from 'react';
import { ArrowRight, Download, Github, Instagram, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-teal-400 bg-clip-text text-transparent">
             Pawan Kumar
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-2xl mx-auto">
            Full-Stack Developer crafting exceptional digital experiences with modern technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button
            onClick={() => scrollToSection('#projects')}
            className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            View Projects
            <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            Hire Me
            <Mail className="w-5 h-5" />
          </button>
        </div>

        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Pawan-web-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition-colors duration-200 transform hover:scale-110"
          >
            <Github className="w-8 h-8" />
          </a>
          <a
            href="https://www.instagram.com/pawandeveloper/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-purple-300 transition-colors duration-200 transform hover:scale-110"
          >
            <Instagram className="w-8 h-8" />
          </a>
        </div>

        {/* Floating animation elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full animate-bounce"></div>
        {/* <div className="absolute bottom-20 right-10 w-16 h-16 bg-teal-500/20 rounded-full animate-pulse"></div> */}
      </div>
    </section>
  );
};

export default Hero;