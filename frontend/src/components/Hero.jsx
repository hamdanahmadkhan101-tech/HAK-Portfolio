import React from 'react';
import { Download, Mail, MapPin, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = ({ profile }) => {
  if (!profile) return null;

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar and Basic Info */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <img
                src={profile.avatar || 'https://via.placeholder.com/300'}
                alt={profile.name}
                className="w-64 h-64 rounded-full object-cover border-4 border-white shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full border-4 border-white"></div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {profile.name}
            </h1>
            <p className="text-2xl md:text-3xl text-blue-600 mb-6 font-semibold">
              {profile.title}
            </p>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              {profile.bio}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 justify-center md:justify-start">
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin size={20} className="text-blue-600" />
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar size={20} className="text-blue-600" />
                <span>Age {profile.age}</span>
              </div>
              {profile.email && (
                <div className="flex items-center gap-2 text-gray-700">
                  <Mail size={20} className="text-blue-600" />
                  <span>{profile.email}</span>
                </div>
              )}
            </div>

            {/* Education */}
            {profile.education && (
              <div className="mb-8 p-4 bg-white rounded-lg shadow-md">
                <p className="text-gray-700">
                  <span className="font-semibold">{profile.education.degree}</span> at{' '}
                  <span className="font-semibold">{profile.education.institution}</span>
                  {' '}({profile.education.start_year} - {profile.education.status})
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <Mail size={20} />
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl border-2 border-blue-600"
              >
                View Projects
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

