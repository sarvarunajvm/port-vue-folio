import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/about';
import { Github, Linkedin, Code2, Mail, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative section">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 soft-surface rounded-full opacity-30 animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 soft-surface rounded-full opacity-20 animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 soft-surface rounded-full opacity-10 animate-pulse-soft" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Name */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {personalInfo.firstname} {personalInfo.lastname}
          </motion.h1>

          {/* Dynamic Title */}
          <motion.div
            className="h-8 md:h-10 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-xl md:text-2xl text-muted"
            >
              {personalInfo.titles[titleIndex]}
            </motion.p>
          </motion.div>

          {/* Summary */}
          <motion.p
            className="max-w-2xl mx-auto text-lg mb-12 text-muted leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {personalInfo.summary}
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-surface p-4 soft-hover soft-press focus-ring"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-surface p-4 soft-hover soft-press focus-ring"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={personalInfo.social.stackoverflow}
              target="_blank"
              rel="noopener noreferrer"
              className="soft-surface p-4 soft-hover soft-press focus-ring"
              aria-label="Stack Overflow"
            >
              <Code2 size={24} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="soft-surface p-4 soft-hover soft-press focus-ring"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a
              href="#projects"
              className="soft-surface px-8 py-4 font-medium soft-hover soft-press focus-ring inline-flex items-center gap-2"
            >
              View Projects
              <ChevronDown size={20} />
            </a>
            <a
              href="#contact"
              className="soft-surface px-8 py-4 font-medium soft-hover soft-press focus-ring"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div className="soft-surface-sm p-2 animate-bounce">
          <ChevronDown size={20} />
        </div>
      </motion.div>
    </section>
  );
};