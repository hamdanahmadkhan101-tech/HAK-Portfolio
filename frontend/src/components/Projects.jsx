import React, { useState } from 'react';
import { Github, ExternalLink, Code2, Calendar, Zap } from 'lucide-react';
import { projects } from '../utils/mockData';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Full Stack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#00D9FF] to-transparent opacity-50"></div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/5">
              <Code2 size={20} className="text-[#00D9FF]" />
              <span className="text-[#00D9FF] font-semibold tracking-wide">FEATURED WORK</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Projects <span className="text-[#00D9FF]">Showcase</span>
          </h2>
          <p className="text-xl text-gray-400">
            A collection of my recent work and experiments
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-[#00D9FF] text-black shadow-lg shadow-[#00D9FF]/50 scale-105'
                  : 'bg-[#1a1a1a] text-gray-400 hover:text-white border border-gray-700 hover:border-[#00D9FF]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#00D9FF]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#00D9FF]/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Accent Bar */}
              <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: project.accentColor }}
              ></div>

              {/* Status Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className="flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm"
                  style={{
                    backgroundColor: `${project.accentColor}20`,
                    color: project.accentColor,
                    border: `1px solid ${project.accentColor}40`
                  }}
                >
                  <Zap size={12} />
                  {project.status}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Year */}
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{project.year}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00D9FF] transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#0a0a0a] text-gray-300 text-xs rounded-full border border-gray-700 hover:border-[#00D9FF] transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-[#0a0a0a] text-white rounded-lg border border-gray-700 hover:border-[#00D9FF] hover:text-[#00D9FF] transition-all duration-300 group/btn"
                  >
                    <Github size={18} className="group-hover/btn:rotate-12 transition-transform" />
                    <span className="font-semibold">Code</span>
                  </a>
                  <button
                    className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-gray-700 hover:border-[#00FF88] text-gray-400 hover:text-[#00FF88] transition-all duration-300 group/btn"
                    style={{
                      borderColor: `${project.accentColor}40`,
                      color: project.accentColor
                    }}
                  >
                    <ExternalLink size={18} className="group-hover/btn:scale-110 transition-transform" />
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${project.accentColor}10 0%, transparent 70%)`
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;