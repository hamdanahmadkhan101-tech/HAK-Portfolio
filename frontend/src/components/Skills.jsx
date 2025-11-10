import React from 'react';
import { Code, Server, Wrench, TrendingUp } from 'lucide-react';
import { skills } from '../utils/mockData';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: skills.frontend,
      color: '#00D9FF'
    },
    {
      title: 'Backend',
      icon: Server,
      skills: skills.backend,
      color: '#00FF88'
    },
    {
      title: 'Tools & Others',
      icon: Wrench,
      skills: skills.tools,
      color: '#FF6B6B'
    }
  ];

  return (
    <section className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#00D9FF] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00FF88] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[#00FF88]/30 bg-[#00FF88]/5">
              <TrendingUp size={20} className="text-[#00FF88]" />
              <span className="text-[#00FF88] font-semibold tracking-wide">TECHNICAL EXPERTISE</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Skills & <span className="text-[#00FF88]">Technologies</span>
          </h2>
          <p className="text-xl text-gray-400">
            Tools and technologies I work with on a daily basis
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {skillCategories.map((category, catIndex) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="bg-[#0a0a0a] rounded-2xl p-8 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105"
                style={{ animationDelay: `${catIndex * 100}ms` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div
                    className="p-3 rounded-xl"
                    style={{
                      backgroundColor: `${category.color}20`,
                      color: category.color
                    }}
                  >
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                </div>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="group">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-300 font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                        <span
                          className="text-sm font-semibold"
                          style={{ color: category.color }}
                        >
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress Bar */}
                      <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            backgroundColor: category.color,
                            boxShadow: `0 0 10px ${category.color}40`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;