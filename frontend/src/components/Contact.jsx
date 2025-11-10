import React, { useState } from 'react';
import { Mail, Send, MapPin, Phone, MessageSquare } from 'lucide-react';
import { profileData } from '../utils/mockData';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D9FF] opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00FF88] opacity-5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-block mb-4">
            <div className="flex items-center gap-3 px-6 py-2 rounded-full border border-[#00D9FF]/30 bg-[#00D9FF]/5">
              <MessageSquare size={20} className="text-[#00D9FF]" />
              <span className="text-[#00D9FF] font-semibold tracking-wide">LET'S CONNECT</span>
            </div>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Get In <span className="text-[#00D9FF]">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800 hover:border-[#00D9FF]/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#00D9FF]/10 rounded-lg">
                  <Mail size={24} className="text-[#00D9FF]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Email</h3>
                  <p className="text-gray-400 text-sm">Send me a message</p>
                </div>
              </div>
              <a
                href={`mailto:${profileData.email}`}
                className="text-[#00D9FF] hover:underline text-sm break-all"
              >
                {profileData.email}
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-[#0a0a0a] rounded-2xl p-6 border border-gray-800 hover:border-[#00FF88]/50 transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-[#00FF88]/10 rounded-lg">
                  <MapPin size={24} className="text-[#00FF88]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Location</h3>
                  <p className="text-gray-400 text-sm">Where I'm based</p>
                </div>
              </div>
              <p className="text-[#00FF88]">{profileData.location}</p>
            </div>

            {/* Availability Card */}
            <div className="bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] rounded-2xl p-6 border border-gray-800">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-[#00FF88] rounded-full animate-pulse"></div>
                <h3 className="text-white font-semibold">Available for Work</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Open to freelance projects and collaboration opportunities
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-[#0a0a0a] rounded-2xl p-8 border border-gray-800">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Name Input */}
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Subject Input */}
              <div className="mb-6">
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Project Inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto px-8 py-4 bg-[#00D9FF] text-black font-semibold rounded-lg hover:bg-[#00b8d4] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 hover:shadow-lg hover:shadow-[#00D9FF]/50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;