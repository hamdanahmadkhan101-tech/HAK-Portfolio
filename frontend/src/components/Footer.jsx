import React from 'react';
import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';
import { profileData } from '../utils/mockData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-[#0a0a0a] border-t border-gray-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00D9FF] via-[#00FF88] to-[#FF6B6B]"></div>

      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-12 h-12 rounded-full border-2 border-[#00D9FF]"
              />
              <div>
                <h3 className="text-xl font-bold text-white">{profileData.name}</h3>
                <p className="text-sm text-gray-400">{profileData.title}</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Building modern web experiences with passion and precision. Let's create something
              amazing together.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#00D9FF] text-gray-400 hover:text-[#00D9FF] transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#00FF88] text-gray-400 hover:text-[#00FF88] transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#FF6B6B] text-gray-400 hover:text-[#FF6B6B] transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-[#1a1a1a] rounded-lg border border-gray-800 hover:border-[#00D9FF] text-gray-400 hover:text-[#00D9FF] transition-all duration-300 hover:scale-110"
              >
                <Code2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-gray-400 hover:text-[#00D9FF] transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${profileData.email}`}
                  className="text-gray-400 hover:text-[#00D9FF] transition-colors break-all"
                >
                  {profileData.email}
                </a>
              </li>
              <li className="text-gray-400">{profileData.location}</li>
              <li className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#00FF88] rounded-full animate-pulse"></div>
                <span className="text-gray-400 text-sm">Available for work</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} {profileData.name}. All rights reserved.
            </p>
            <p className="flex items-center gap-2 text-gray-400 text-sm">
              Built with <Heart size={16} className="text-[#FF6B6B] animate-pulse" /> using React &
              FastAPI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;