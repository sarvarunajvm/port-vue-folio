import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/about';
import { Modal } from './Modal';
import { ProjectsBento } from './sections/ProjectsBento';
import { ExperienceBento } from './sections/ExperienceBento';
import { SkillsBento } from './sections/SkillsBento';
import { AboutBento } from './sections/AboutBento';
import { ContactBento } from './sections/ContactBento';
import { 
  Rocket, Briefcase, Code2, User, Mail, 
  Github, Linkedin, Terminal, Sparkles, Coffee,
  Clock, Award, ChevronRight
} from 'lucide-react';

export const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [titleIndex, setTitleIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % personalInfo.titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const navigationCards = [
    {
      id: 'projects',
      title: 'Projects',
      subtitle: 'Open source work',
      icon: Rocket,
      color: 'from-blue-500/10 to-purple-500/10',
      size: 'col-span-2 row-span-2 md:col-span-1 md:row-span-2'
    },
    {
      id: 'experience',
      title: 'Experience',
      subtitle: '8+ years journey',
      icon: Briefcase,
      color: 'from-green-500/10 to-emerald-500/10',
      size: 'col-span-2 row-span-2 md:col-span-1 md:row-span-2'
    },
    {
      id: 'skills',
      title: 'Skills',
      subtitle: 'Tech stack',
      icon: Code2,
      color: 'from-orange-500/10 to-red-500/10',
      size: 'col-span-2 row-span-1'
    },
    {
      id: 'about',
      title: 'About',
      subtitle: 'Get to know me',
      icon: User,
      color: 'from-purple-500/10 to-pink-500/10',
      size: 'col-span-1 row-span-1'
    },
    {
      id: 'contact',
      title: 'Contact',
      subtitle: 'Let\'s connect',
      icon: Mail,
      color: 'from-cyan-500/10 to-blue-500/10',
      size: 'col-span-1 row-span-1'
    }
  ];

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl h-full max-h-[900px]">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-4 md:grid-cols-6 gap-4 h-full">
          
          {/* Hero Introduction - Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-4 md:col-span-3 row-span-2 soft-surface p-6 rounded-2xl flex flex-col justify-center"
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-3">
              {personalInfo.firstname} {personalInfo.lastname}
            </h1>
            <motion.p
              key={titleIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="text-lg md:text-xl mb-4"
              style={{ color: 'var(--muted)' }}
            >
              {personalInfo.titles[titleIndex]}
            </motion.p>
            <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--muted)' }}>
              Building elegant solutions to complex problems. Passionate about open-source 
              and creating impactful software.
            </p>
            
            {/* Quick Links */}
            <div className="flex gap-3 mt-6">
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-surface-sm p-3 rounded-lg soft-hover soft-press focus-ring"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-surface-sm p-3 rounded-lg soft-hover soft-press focus-ring"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="soft-surface-sm p-3 rounded-lg soft-hover soft-press focus-ring"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </motion.div>

          {/* Navigation Cards */}
          {navigationCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.button
                key={card.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                onClick={() => setOpenModal(card.id)}
                className={`${card.size} soft-surface p-4 rounded-2xl soft-hover group cursor-pointer 
                  flex flex-col justify-between text-left transition-all hover:scale-[1.02]`}
              >
                <div>
                  <div className={`inline-flex p-3 rounded-lg mb-3 bg-gradient-to-br ${card.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                  <p className="text-sm" style={{ color: 'var(--muted)' }}>{card.subtitle}</p>
                </div>
                <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight size={20} />
                </div>
              </motion.button>
            );
          })}

          {/* Status Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="col-span-2 md:col-span-1 row-span-1 soft-surface p-4 rounded-2xl flex flex-col justify-center items-center"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-xs font-medium">Available</span>
            </div>
            <p className="text-2xl font-bold">8+</p>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>Years Exp</p>
          </motion.div>

          {/* Clock Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="col-span-2 md:col-span-1 row-span-1 soft-surface p-4 rounded-2xl flex flex-col justify-center items-center"
          >
            <Clock size={20} className="mb-2" style={{ color: 'var(--muted)' }} />
            <p className="text-xl font-bold font-mono">
              {currentTime.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                hour12: false 
              })}
            </p>
            <p className="text-xs" style={{ color: 'var(--muted)' }}>Chennai, India</p>
          </motion.div>

          {/* Fun Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="col-span-2 row-span-1 soft-surface p-4 rounded-2xl"
          >
            <div className="grid grid-cols-3 gap-2 h-full">
              <div className="text-center flex flex-col justify-center">
                <Terminal size={20} className="mx-auto mb-1" style={{ color: 'var(--muted)' }} />
                <p className="text-lg font-bold">10K+</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Lines</p>
              </div>
              <div className="text-center flex flex-col justify-center">
                <Coffee size={20} className="mx-auto mb-1" style={{ color: 'var(--muted)' }} />
                <p className="text-lg font-bold">∞</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Coffee</p>
              </div>
              <div className="text-center flex flex-col justify-center">
                <Award size={20} className="mx-auto mb-1" style={{ color: 'var(--muted)' }} />
                <p className="text-lg font-bold">50+</p>
                <p className="text-xs" style={{ color: 'var(--muted)' }}>Skills</p>
              </div>
            </div>
          </motion.div>

          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="col-span-4 md:col-span-2 row-span-1 soft-surface p-4 rounded-2xl flex items-center justify-center"
          >
            <div className="text-center">
              <Sparkles size={20} className="mx-auto mb-2" style={{ color: 'var(--muted)' }} />
              <p className="text-sm italic">"Building the future, one commit at a time"</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals for each section */}
      <Modal isOpen={openModal === 'projects'} onClose={() => setOpenModal(null)} title="Projects">
        <ProjectsBento />
      </Modal>

      <Modal isOpen={openModal === 'experience'} onClose={() => setOpenModal(null)} title="Experience">
        <ExperienceBento />
      </Modal>

      <Modal isOpen={openModal === 'skills'} onClose={() => setOpenModal(null)} title="Skills">
        <SkillsBento />
      </Modal>

      <Modal isOpen={openModal === 'about'} onClose={() => setOpenModal(null)} title="About Me">
        <AboutBento />
      </Modal>

      <Modal isOpen={openModal === 'contact'} onClose={() => setOpenModal(null)} title="Get in Touch">
        <ContactBento />
      </Modal>
    </div>
  );
};