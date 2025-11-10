import React from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Wrench } from 'lucide-react';

const Skills = ({ skills }) => {
  if (!skills || skills.length === 0) return null;

  const categoryIcons = {
    Frontend: Code,
    Backend: Server,
    'Tools & Others': Wrench,
  };

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillCategory, categoryIndex) => {
            const IconComponent = categoryIcons[skillCategory.category] || Code;
            return (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.2 }}
                className="bg-card rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/30"
              >
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-bold text-card-foreground">
                    {skillCategory.category}
                  </h3>
                </div>

                <div className="space-y-4">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-card-foreground font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, delay: skillIndex * 0.1, ease: "easeOut" }}
                          className="skill-progress h-3 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

