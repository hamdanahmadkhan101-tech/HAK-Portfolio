import React from 'react';
import { motion } from 'framer-motion';
import { User, Code, Target, Award } from 'lucide-react';

const About = ({ profile, stats }) => {
  if (!profile) return null;

  const statIcons = {
    code: Code,
    'git-commit': Code,
    calendar: User,
    layers: Award,
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {profile.bio}
          </p>
        </motion.div>

        {/* Stats Grid */}
        {stats && stats.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => {
              const IconComponent = statIcons[stat.icon] || Target;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg text-center shadow-md hover:shadow-lg transition-shadow"
                >
                  <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            {profile.education && (
              <div>
                <p className="text-lg font-semibold text-gray-800">
                  {profile.education.degree}
                </p>
                <p className="text-gray-600">{profile.education.institution}</p>
                <p className="text-gray-500 text-sm mt-2">
                  {profile.education.start_year} - {profile.education.status}
                </p>
              </div>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Contact Info</h3>
            <div className="space-y-2">
              <p className="text-gray-700">
                <span className="font-semibold">Email:</span> {profile.email}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Phone:</span> {profile.phone}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Location:</span> {profile.location}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

