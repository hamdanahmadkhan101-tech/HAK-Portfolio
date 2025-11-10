import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail } from 'lucide-react';
import { profileData } from '../utils/mockData';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
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
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-lg border-b border-gray-800 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#');
            }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#00D9FF] blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img
                src={profileData.avatar}
                alt={profileData.name}
                className="w-10 h-10 rounded-full border-2 border-[#00D9FF] relative z-10 group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-xl font-bold text-white group-hover:text-[#00D9FF] transition-colors">
              {profileData.name.split(' ')[0]}
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-400 hover:text-white transition-colors relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00D9FF] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-400 hover:text-[#00D9FF] transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="px-6 py-2 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00b8d4] transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={18} />
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white hover:text-[#00D9FF] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800 animate-in slide-in-from-top">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-gray-400 hover:text-white transition-colors py-2 cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-[#00D9FF] transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex-1 px-6 py-2 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00b8d4] transition-all duration-300 text-center"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;