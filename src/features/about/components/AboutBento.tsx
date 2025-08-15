import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Award,
  Briefcase,
  Clock,
  Code,
  Code2,
  GraduationCap,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Sparkles,
  Target,
  User,
  Users,
} from 'lucide-react';

import { hoverVariants } from '../../../shared/constants/animations';
import { educationData } from '../../education/data/education';
import { personalInfo } from '../data/about';

const AboutBento: React.FC = () => {
  const [hoveredExpertise, setHoveredExpertise] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const areasOfExpertise = [
    {
      id: 'enterprise',
      label: 'Enterprise Applications',
      icon: Briefcase,
      color: 'text-[var(--icon-blue)]',
    },
    { id: 'cloud', label: 'Cloud Architecture', icon: Target, color: 'text-[var(--icon-purple)]' },
    {
      id: 'opensource',
      label: 'Open Source Contribution',
      icon: Code,
      color: 'text-[var(--icon-green)]',
    },
    { id: 'problem', label: 'Problem Solving', icon: Sparkles, color: 'text-[var(--icon-red)]' },
  ];

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
    <div className="w-full h-full flex items-center justify-center p-2 sm:p-3 md:p-4">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
          {/* Left Column - Profile and Education */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {/* Profile & Expertise Card - Row 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={hoverVariants.lift}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="neu-pressed p-3 sm:p-4 md:p-5 rounded-lg group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-accent"
            >
              <div className="h-full flex flex-col">
                {/* Profile Header */}
                <div className="flex items-start gap-3 mb-4">
                  <motion.div
                    className="p-3 rounded-xl neu-pressed-sm"
                    whileHover={hoverVariants.rotate}
                    transition={{ duration: 0.5 }}
                  >
                    <User className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-[var(--icon-blue)] transition-all group-hover:scale-110" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--icon-blue)] transition-colors">
                      {personalInfo.firstname} {personalInfo.lastname}
                    </h3>
                    <p
                      className="text-lg sm:text-xl md:text-2xl font-semibold"
                      style={{ color: 'var(--accent)' }}
                    >
                      &ldquo;{personalInfo.nickname}&rdquo; • Software Engineer
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-sm md:text-base opacity-70">Available</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Summary */}
                <div className="mb-3">
                  <p className="text-base sm:text-lg md:text-xl leading-relaxed opacity-85">
                    Software engineer with 8+ years in Java development and full-stack expertise.
                    Passionate about building scalable enterprise applications.
                  </p>
                </div>

                {/* Areas of Expertise */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <Target className="w-5 h-5 md:w-6 md:h-6 text-[var(--icon-green)]" />
                    <h4 className="text-xl md:text-2xl font-bold">Areas of Expertise</h4>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {areasOfExpertise.map((area) => (
                      <motion.div
                        key={area.id}
                        whileHover={{ scale: 1.02, x: 5 }}
                        onHoverStart={() => setHoveredExpertise(area.id)}
                        onHoverEnd={() => setHoveredExpertise(null)}
                        className="p-2 neu-pressed-sm rounded-lg cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <motion.div
                            animate={{
                              rotate: hoveredExpertise === area.id ? 360 : 0,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <area.icon className={`w-5 h-5 md:w-6 md:h-6 ${area.color}`} />
                          </motion.div>
                          <span className="text-base sm:text-lg md:text-xl font-medium opacity-80">
                            {area.label}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Education Card - Row 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={hoverVariants.lift}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="neu-pressed p-3 sm:p-4 rounded-lg group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-accent"
            >
              <div className="flex flex-col">
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 md:w-7 md:h-7 text-[var(--icon-green)]" />
                    <h4 className="text-xl md:text-2xl font-bold">Education</h4>
                  </div>
                </div>

                {/* Education Items */}
                <div className="space-y-2">
                  {educationData.map((edu) => (
                    <div key={edu.id} className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full neu-pressed-sm flex items-center justify-center">
                          <Award className="w-4 h-4 md:w-5 md:h-5 text-[var(--icon-green)]" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h5 className="font-bold text-lg md:text-xl">
                          {edu.degree} @ {edu.college}
                        </h5>
                        <p className="text-base md:text-lg opacity-70 mb-1">{edu.period}</p>
                        <ul className="space-y-1">
                          {edu.points.map((point) => (
                            <li key={point.id} className="text-base md:text-lg opacity-80">
                              • {point.value}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column - Connect & Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={hoverVariants.lift}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="neu-pressed p-3 sm:p-4 md:p-5 rounded-lg group cursor-pointer transition-all hover:scale-[1.02] hover:shadow-accent"
          >
            <div className="flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-6 h-6 md:w-7 md:h-7 text-[var(--icon-green)]" />
                  <h4 className="text-xl md:text-2xl font-bold">Let&apos;s Connect</h4>
                </div>
              </div>

              {/* Contact & Social Info */}
              <div className="neu-pressed-sm p-2 sm:p-3 rounded-lg mb-3">
                <h5 className="text-lg md:text-xl font-semibold mb-2 opacity-90">
                  Connect With Me
                </h5>

                {/* Direct Contact */}
                <div className="space-y-1 mb-3">
                  <a className="flex items-center gap-2 group/link">
                    <MapPin className="w-5 h-5 text-[var(--icon-red)]" />
                    <span className="text-base sm:text-lg md:text-xl truncate opacity-70 group-hover/link:opacity-100">
                      Chennai, India
                    </span>
                  </a>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-2 group/link"
                  >
                    <Mail className="w-5 h-5 text-[var(--icon-red)]" />
                    <span className="text-base sm:text-lg md:text-xl truncate opacity-70 group-hover/link:opacity-100">
                      {personalInfo.email}
                    </span>
                  </a>
                  <div className="flex items-center gap-2">
                    <Phone className="w-5 h-5 text-[var(--icon-green)]" />
                    <span className="text-sm sm:text-base opacity-70">{personalInfo.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[var(--icon-purple)]" />
                    <span className="text-sm sm:text-base opacity-70">
                      Response within 24 hours
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-[var(--border-color)] opacity-20 my-3"></div>

                {/* Social Profiles */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <a
                    href={personalInfo.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 p-1.5 neu-pressed-sm rounded-lg hover:scale-105 transition-all"
                  >
                    <Code className="w-5 h-5 text-[var(--icon-purple)]" />
                    <span className="text-base md:text-lg font-medium">GitHub</span>
                  </a>
                  <a
                    href={personalInfo.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 p-1.5 neu-pressed-sm rounded-lg hover:scale-105 transition-all"
                  >
                    <Users className="w-5 h-5 text-[var(--icon-blue)]" />
                    <span className="text-base md:text-lg font-medium">LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.social.stackoverflow}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 p-1.5 neu-pressed-sm rounded-lg hover:scale-105 transition-all"
                  >
                    <Code2 className="w-5 h-5 text-[var(--icon-red)]" />
                    <span className="text-base md:text-lg font-medium">Stack Overflow</span>
                  </a>
                  <a
                    href={personalInfo.social.devto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 p-1.5 neu-pressed-sm rounded-lg hover:scale-105 transition-all"
                  >
                    <Code2 className="w-5 h-5 text-[var(--icon-green)]" />
                    <span className="text-base md:text-lg font-medium">Dev.to</span>
                  </a>
                </div>
              </div>

              {/* Quick Message Form */}
              <div className="flex flex-col">
                <h5 className="text-lg md:text-xl font-semibold mb-2 opacity-90">
                  Send Quick Message
                </h5>
                <form onSubmit={handleSubmit} className="flex flex-col">
                  <div className="space-y-1">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full neu-pressed-sm px-3 py-2 rounded-lg text-base md:text-lg bg-transparent"
                      placeholder="Your Name"
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full neu-pressed-sm px-3 py-2 rounded-lg text-base md:text-lg bg-transparent"
                      placeholder="Your Email"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full neu-pressed-sm px-3 py-2 rounded-lg text-base md:text-lg bg-transparent resize-none min-h-[60px]"
                      placeholder="Your Message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="neu-pressed px-4 py-2.5 mt-3 font-medium rounded-lg hover:scale-105 transition-all inline-flex items-center justify-center gap-2 text-base md:text-lg w-full"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutBento;
