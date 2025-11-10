import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, CheckCircle } from 'lucide-react';

const Experience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey and educational background.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-200 transform md:-translate-x-1/2"></div>

            {/* Experience Items */}
            <div className="space-y-12">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg transform -translate-x-1/2 -translate-y-1"></div>

                  {/* Content Card */}
                  <div
                    className={`ml-16 md:ml-0 ${
                      index % 2 === 0 ? 'md:mr-auto md:w-5/12' : 'md:ml-auto md:w-5/12'
                    }`}
                  >
                    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          {exp.title.toLowerCase().includes('student') ? (
                            <GraduationCap className="w-6 h-6 text-blue-600" />
                          ) : (
                            <Briefcase className="w-6 h-6 text-blue-600" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-gray-600 mb-3">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4">{exp.description}</p>

                      {/* Highlights */}
                      {exp.highlights && exp.highlights.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-semibold text-gray-700 mb-2">
                            Key Highlights:
                          </h4>
                          <ul className="space-y-2">
                            {exp.highlights.map((highlight, hIndex) => (
                              <li
                                key={hIndex}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <CheckCircle
                                  size={16}
                                  className="text-blue-600 mt-0.5 flex-shrink-0"
                                />
                                <span>{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

