import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/about';
import { BentoGrid, BentoCard } from '../BentoGrid';
import { Github, Linkedin, Code2, Mail, Terminal, Sparkles, Rocket, Coffee } from 'lucide-react';

export const HeroBento: React.FC = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="min-h-screen py-20 section">
      <div className="container">
        <BentoGrid className="mt-20">
          {/* Main Introduction - Large Card */}
          <BentoCard size="xl" className="flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {personalInfo.firstname} {personalInfo.lastname}
              </h1>
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-xl md:text-2xl mb-6"
                style={{ color: 'var(--muted)' }}
              >
                {personalInfo.titles[titleIndex]}
              </motion.p>
              <p className="text-lg leading-relaxed max-w-2xl" style={{ color: 'var(--muted)' }}>
                {personalInfo.summary}
              </p>
            </motion.div>
          </BentoCard>

          {/* Status Card */}
          <BentoCard size="small" delay={0.1} className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium">Available for hire</span>
              </div>
              <p className="text-2xl font-bold mb-1">8+ Years</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Experience</p>
            </div>
          </BentoCard>

          {/* Clock Card */}
          <BentoCard size="small" delay={0.2} className="flex flex-col justify-center items-center">
            <p className="text-3xl font-bold mb-2 font-mono">
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>Local Time</p>
          </BentoCard>

          {/* Quick Stats */}
          <BentoCard size="medium" delay={0.3}>
            <div className="grid grid-cols-3 gap-4 h-full">
              <div className="text-center">
                <Rocket className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">3+</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Projects</p>
              </div>
              <div className="text-center">
                <Coffee className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">∞</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Coffee Cups</p>
              </div>
              <div className="text-center">
                <Terminal className="w-8 h-8 mx-auto mb-2" />
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Lines of Code</p>
              </div>
            </div>
          </BentoCard>

          {/* Social Links */}
          <BentoCard size="medium" delay={0.4}>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-surface-sm p-3 flex items-center gap-2 soft-hover soft-press focus-ring rounded-lg"
              >
                <Github size={20} />
                <span className="text-sm">GitHub</span>
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-surface-sm p-3 flex items-center gap-2 soft-hover soft-press focus-ring rounded-lg"
              >
                <Linkedin size={20} />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a
                href={personalInfo.social.stackoverflow}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-surface-sm p-3 flex items-center gap-2 soft-hover soft-press focus-ring rounded-lg"
              >
                <Code2 size={20} />
                <span className="text-sm">Stack</span>
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="soft-surface-sm p-3 flex items-center gap-2 soft-hover soft-press focus-ring rounded-lg"
              >
                <Mail size={20} />
                <span className="text-sm">Email</span>
              </a>
            </div>
          </BentoCard>

          {/* Motto Card */}
          <BentoCard size="medium" delay={0.5} className="flex items-center justify-center">
            <div className="text-center">
              <Sparkles className="w-12 h-12 mx-auto mb-3" style={{ color: 'var(--muted)' }} />
              <p className="text-lg font-medium italic">
                "Building elegant solutions to complex problems"
              </p>
            </div>
          </BentoCard>
        </BentoGrid>
      </div>
    </section>
  );
};