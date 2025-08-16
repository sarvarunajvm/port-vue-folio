import React, { useState } from 'react';

import { motion } from 'framer-motion';

import { SPRING_CONFIG, hoverVariants } from '../../../shared/constants/animations';
import { educationData, personalInfo } from '../data/about';

const About: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      'Contact from Portfolio'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="w-full h-full flex flex-col md:flex-row md:items-center md:justify-center p-4 md:p-6 lg:p-8 overflow-y-auto md:overflow-hidden">
      <div className="w-full max-w-[1400px] h-auto md:h-[85vh] md:flex md:items-center">
        {/* Optimized Bento Grid Layout */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {/* Profile & Summary Card - Left column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverVariants.lift}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-8 neu-pressed p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-accent"
          >
            <div className="h-full flex flex-col">
              {/* Profile Header */}
              <div className="flex items-start gap-3 mb-4">
                <motion.div
                  className="p-3 rounded-xl neu-pressed-sm"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ duration: 0.3, type: 'spring', stiffness: 300 }}
                >
                  <span className="text-2xl md:text-3xl lg:text-4xl transition-all duration-300 group-hover:scale-110">
                    👨‍💻
                  </span>
                </motion.div>
                <div className="flex-1">
                  <h3
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    {personalInfo.firstname} {personalInfo.lastname}
                  </h3>
                  <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold opacity-85">
                    &ldquo;{personalInfo.nickname}&rdquo; • Software Engineer
                  </p>
                  <div className="flex items-center gap-3 mt-2">
                    <div className="flex items-center gap-1">
                      <div
                        className="w-2 h-2 rounded-full animate-pulse"
                        style={{ backgroundColor: 'var(--icon-green)' }}
                      />
                      <span className="text-sm md:text-base opacity-85">Available</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <div className="mb-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-85">
                  Software engineer with 8+ years in Java development and full-stack expertise.
                  Passionate about building scalable enterprise applications.
                </p>
              </div>

              {/* Bottom Section with Contact Info and Message Form */}
              <div className="flex-1">
                {/* Contact Info & Message Form Combined */}
                <motion.div
                  className="neu-pressed-sm p-4 rounded-lg"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  transition={{ delay: 0.4, ...SPRING_CONFIG.DEFAULT }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Contact Information */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl md:text-2xl">📞</span>
                        <h4
                          className="text-lg md:text-xl lg:text-2xl font-bold"
                          style={{ color: 'var(--accent)' }}
                        >
                          Contact Info
                        </h4>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-lg md:text-xl flex-shrink-0 mt-1">📧</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium opacity-75 mb-1">Email</p>
                            <p className="text-sm md:text-base font-medium opacity-90 break-all">
                              {personalInfo.email}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-lg md:text-xl flex-shrink-0 mt-1">📱</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium opacity-75 mb-1">Phone</p>
                            <p className="text-sm md:text-base font-medium opacity-90">
                              {personalInfo.phone}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-lg md:text-xl flex-shrink-0 mt-1">📍</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium opacity-75 mb-1">Location</p>
                            <p className="text-sm md:text-base font-medium opacity-90">
                              Chennai, India
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Send Message Form */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xl md:text-2xl">💬</span>
                        <h4
                          className="text-lg md:text-xl lg:text-2xl font-bold"
                          style={{ color: 'var(--accent)' }}
                        >
                          Send Message
                        </h4>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm md:text-base opacity-85 mb-3">
                          Have a project in mind? Let&apos;s connect!
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col space-y-3">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="neu-pressed-sm px-3 py-2 rounded-lg text-sm md:text-base bg-transparent"
                            placeholder="Your Name"
                          />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="neu-pressed-sm px-3 py-2 rounded-lg text-sm md:text-base bg-transparent"
                            placeholder="Your Email"
                          />
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="neu-pressed-sm px-3 py-2 rounded-lg text-xs md:text-sm bg-transparent resize-none min-h-[80px]"
                            placeholder="Your Message..."
                          />
                          <button
                            type="submit"
                            className="neu-pressed px-4 py-2 font-medium rounded-lg hover:scale-105 transition-all inline-flex items-center justify-center gap-2 text-sm md:text-base w-full"
                          >
                            <span className="text-base">🚀</span>
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Education Card - Right column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverVariants.lift}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-4 neu-pressed p-3 sm:p-4 md:p-5 rounded-lg group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-accent"
          >
            <div className="h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl md:text-3xl">🎓</span>
                <h4
                  className="text-xl md:text-2xl lg:text-3xl font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  Education
                </h4>
              </div>

              {/* Education Timeline */}
              <div className="flex-1 relative">
                {/* Timeline Line */}
                <div className="absolute left-4 md:left-5 top-8 bottom-0 w-0.5 bg-gradient-to-b from-[var(--accent)] to-transparent opacity-30"></div>

                <div className="space-y-6">
                  {educationData.map((edu, index) => (
                    <motion.div
                      key={edu.id}
                      className="relative flex gap-4"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ x: 2 }}
                      transition={{ delay: 0.1 * index, ...SPRING_CONFIG.DEFAULT }}
                    >
                      {/* Timeline Node */}
                      <div className="flex-shrink-0 relative z-10">
                        <div className="w-8 h-8 md:w-9 md:h-9 rounded-full neu-pressed-sm flex items-center justify-center border-2 border-[var(--accent)] bg-[var(--surface)]">
                          <span className="text-lg md:text-xl">🏆</span>
                        </div>
                        {/* Timeline dot indicator */}
                        <div
                          className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                          style={{ backgroundColor: 'var(--accent)' }}
                        ></div>
                      </div>

                      {/* Timeline Content */}
                      <div className="flex-1 pb-2">
                        {/* Period Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full neu-pressed-sm mb-2">
                          <span
                            className="text-sm md:text-base font-medium"
                            style={{ color: 'var(--accent)' }}
                          >
                            {edu.period}
                          </span>
                        </div>

                        {/* Degree & College */}
                        <h5 className="font-bold text-base md:text-lg mb-2">{edu.degree}</h5>
                        <p className="text-sm md:text-base opacity-85 mb-3 font-medium">
                          {edu.college}
                        </p>

                        {/* Achievement Points */}
                        <div className="space-y-2">
                          {edu.points.map((point) => (
                            <div key={point.id} className="flex items-start gap-2">
                              <div
                                className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: 'var(--icon-blue)' }}
                              ></div>
                              <span className="text-sm md:text-base opacity-85 leading-relaxed">
                                {point.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
