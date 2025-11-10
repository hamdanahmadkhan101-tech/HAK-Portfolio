import React from 'react';
import { Github, Linkedin, Mail, ArrowDown, Code2 } from 'lucide-react';
import { profileData } from '../utils/mockData';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#1a1a1a]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00D9FF] opacity-10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#00FF88] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#FF6B6B] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Avatar with glow */}
          <div className="mb-8 inline-block relative">
            <div className="absolute inset-0 bg-[#00D9FF] opacity-50 blur-2xl rounded-full"></div>
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="w-32 h-32 rounded-full border-4 border-[#00D9FF] relative z-10 hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Name with gradient text */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 tracking-tight">
            <span className="inline-block hover:scale-105 transition-transform duration-300">
              <span className="text-white">{profileData.name.split(' ')[0]}</span>
              {' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D9FF] to-[#00FF88]">
                {profileData.name.split(' ').slice(1).join(' ')}
              </span>
            </span>
          </h1>

          {/* Title */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00D9FF]"></div>
            <p className="text-2xl md:text-3xl text-[#00D9FF] font-light tracking-wide">
              {profileData.title}
            </p>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00D9FF]"></div>
          </div>

          {/* Bio */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            {profileData.bio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-4 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00b8d4] transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/50"
            >
              <Github size={20} className="group-hover:rotate-12 transition-transform" />
              View GitHub
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="group px-8 py-4 bg-transparent border-2 border-[#00FF88] text-[#00FF88] font-semibold rounded-lg hover:bg-[#00FF88] hover:text-black transition-all duration-300 flex items-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00FF88]/50"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-[#00D9FF] text-gray-400 hover:text-[#00D9FF] transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Github size={24} />
            </a>
            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-[#00FF88] text-gray-400 hover:text-[#00FF88] transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={`mailto:${profileData.email}`}
              className="p-3 rounded-full border border-gray-700 hover:border-[#FF6B6B] text-gray-400 hover:text-[#FF6B6B] transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Mail size={24} />
            </a>
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-gray-700 hover:border-[#00D9FF] text-gray-400 hover:text-[#00D9FF] transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Code2 size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer bg-transparent border-none"
      >
        <ArrowDown size={32} className="text-[#00D9FF]" />
      </button>
    </section>
  );
};

export default Hero;