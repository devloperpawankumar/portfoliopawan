import React from 'react';
import { Github, Linkedin, Mail, Heart, Code2,Laptop2 , Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Pawan-web-dev',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/pawandeveloper/'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:pdeveloper133@gmail.com',
    },
  ];

  return (
    <footer className="bg-black/40 backdrop-blur-sm border-t border-white/10 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
              <Laptop2 className="w-8 h-8 text-purple-400" />
              <span className="text-white font-bold text-xl">MyPortfolio</span>
            </div>
            <p className="text-purple-200 max-w-xs mx-auto md:mx-0">
              Full-Stack Developer crafting exceptional digital experiences with passion and precision.
            </p>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-purple-200 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex justify-center md:justify-end space-x-4">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white/5 hover:bg-white/10 text-purple-200 hover:text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 border border-white/10"
                    aria-label={link.name}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          {/* <p className="text-purple-200 flex items-center justify-center gap-2">
            Made with <Heart className="w-4 h-4 text-red-400 animate-pulse" /> by Alex Johnson
          </p> */}
          <p className="text-purple-300 text-sm mt-2">
            © 2025 Developer PAWAN. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;