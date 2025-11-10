import React from 'react';
import { User, BookOpen, Coffee, Sparkles } from 'lucide-react';
import { profileData, stats, experience } from '../utils/mockData';

const About = () => {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#FF6B6B] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-[#00D9FF] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[#FF6B6B]/30 bg-[#FF6B6B]/5">
              <User size={20} className="text-[#FF6B6B]" />
              <span className="text-[#FF6B6B] font-semibold tracking-wide">GET TO KNOW ME</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-[#FF6B6B]">Me</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column - Bio */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-[#FF6B6B]/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={24} className="text-[#FF6B6B]" />
                <h3 className="text-2xl font-bold text-white">My Journey</h3>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a Computer Science student with a passion for creating innovative web solutions.
                My journey in software development started with curiosity and has evolved into a
                deep commitment to building impactful applications.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I specialize in full-stack development, with expertise in modern JavaScript
                frameworks and backend technologies. I love turning complex problems into simple,
                beautiful, and intuitive solutions.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => {
                const colors = ['#00D9FF', '#00FF88', '#FF6B6B', '#FFB800'];
                const color = colors[idx % colors.length];
                return (
                  <div
                    key={idx}
                    className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:scale-105 transition-transform duration-300"
                  >
                    <div
                      className="text-4xl font-bold mb-2"
                      style={{ color }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Experience */}
          <div className="space-y-6">
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={24} className="text-[#00D9FF]" />
                <h3 className="text-2xl font-bold text-white">Experience</h3>
              </div>

              <div className="space-y-6">
                {experience.map((exp, idx) => (
                  <div
                    key={exp.id}
                    className="relative pl-8 pb-6 border-l-2 border-gray-700 last:pb-0 hover:border-[#00D9FF] transition-colors duration-300"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 -ml-[9px] rounded-full bg-[#00D9FF] border-4 border-[#1a1a1a]"></div>

                    <div className="mb-2">
                      <h4 className="text-xl font-bold text-white mb-1">{exp.title}</h4>
                      <span className="text-sm text-[#00D9FF]">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 mb-3">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx} className="text-sm text-gray-500 flex items-start gap-2">
                          <span className="text-[#00D9FF] mt-1">▸</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Fact */}
            <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center gap-3">
                <Coffee size={24} className="text-[#FFB800]" />
                <div>
                  <p className="text-gray-400">
                    <span className="text-white font-semibold">Fun fact:</span> I believe the best
                    code is written with a good cup of coffee and great music in the background.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;