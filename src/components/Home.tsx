import React, { useState } from 'react';

import { motion } from 'framer-motion';
import {
  Briefcase,
  Camera,
  ChevronRight,
  Clock,
  Code2,
  Coffee,
  Download,
  Mail,
  Rocket,
  Sparkles,
  Terminal,
} from 'lucide-react';

import { personalInfo } from '../data/about';
import { Modal } from './Modal';
import { AboutBento } from './sections/AboutBento';
import { ContactBento } from './sections/ContactBento';
import { ExperienceBento } from './sections/ExperienceBento';
import { ProjectsBento } from './sections/ProjectsBento';
import { SkillsBento } from './sections/SkillsBento';

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

  const handleResumeDownload = () => {
    // Create a temporary link to download resume
    const link = document.createElement('a');
    link.href = '/Resume.pdf'; // Place your resume in public folder
    link.download = 'Saravanan_Kalimuthu_Resume.pdf';
    link.click();
  };

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center p-1 sm:p-1.5 md:p-2 lg:p-3">
      <div className="w-full h-full">
        {/* Main Bento Grid - 12 column grid for better flexibility */}
        <div
          className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-1 sm:gap-1.5 md:gap-2 h-full"
          style={{ gridTemplateRows: 'repeat(auto-fit, minmax(0, 1fr))' }}
        >
          {/* Hero Introduction with About Me - Combined Card (moved to first position) */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            onClick={() => setOpenModal('about')}
            className="col-span-2 md:col-span-6 lg:col-span-9 row-span-2 soft-surface p-3 sm:p-4 md:p-5 lg:p-6 rounded-lg md:rounded-xl lg:rounded-2xl flex flex-col justify-between soft-hover group cursor-pointer transition-all hover:scale-[1.01]"
          >
            <div>
              {/* Main Introduction */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 lg:mb-3">
                {personalInfo.firstname} {personalInfo.lastname}
              </h1>
              <motion.p
                key={titleIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="text-base sm:text-lg md:text-xl mb-2 md:mb-3 font-semibold"
                style={{ color: 'var(--muted)' }}
              >
                {personalInfo.titles[titleIndex]}
              </motion.p>
              <p
                className="text-sm sm:text-base leading-relaxed mb-2 md:mb-3 font-normal"
                style={{ color: 'var(--muted)' }}
              >
                Building elegant solutions to complex problems. Passionate about open-source and
                creating impactful software.
              </p>
            </div>

            {/* Bottom Stats Section */}
            <div>
              {/* Stats Grid with Clock */}
              <div
                className="grid grid-cols-4 gap-1.5 sm:gap-2 md:gap-3 py-2 md:py-3 border-t"
                style={{ borderColor: 'var(--muted)', opacity: 0.2 }}
              >
                <div className="text-center flex flex-col items-center">
                  <div className="p-2 rounded-lg mb-1 bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Clock size={16} />
                  </div>
                  <p className="text-sm font-bold font-mono">
                    {currentTime.toLocaleTimeString('en-US', {
                      hour: '2-digit',
                      minute: '2-digit',
                      hour12: false,
                    })}
                  </p>
                  <p className="text-xs sm:text-sm font-normal" style={{ color: 'var(--muted)' }}>
                    Chennai
                  </p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="p-2 rounded-lg mb-1 bg-gradient-to-br from-emerald-500/20 to-teal-500/20">
                    <Terminal size={16} />
                  </div>
                  <p className="text-sm font-bold">10K+</p>
                  <p className="text-xs sm:text-sm font-normal" style={{ color: 'var(--muted)' }}>
                    Lines
                  </p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="p-2 rounded-lg mb-1 bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                    <Coffee size={16} />
                  </div>
                  <p className="text-sm font-bold">∞</p>
                  <p className="text-xs sm:text-sm font-normal" style={{ color: 'var(--muted)' }}>
                    Coffee
                  </p>
                </div>
                <div className="text-center flex flex-col items-center">
                  <div className="p-2 rounded-lg mb-1 bg-gradient-to-br from-indigo-500/20 to-purple-500/20">
                    <Rocket size={16} />
                  </div>
                  <p className="text-sm font-bold">3+</p>
                  <p className="text-xs sm:text-sm font-normal" style={{ color: 'var(--muted)' }}>
                    Projects
                  </p>
                </div>
              </div>

              {/* Quote Section */}
              <div className="text-center pt-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-yellow-500/10 to-amber-500/10">
                    <Sparkles size={12} />
                  </div>
                  <p className="text-sm italic font-normal" style={{ color: 'var(--muted)' }}>
                    "Building the future, one commit at a time"
                  </p>
                </div>
                <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-normal" style={{ color: 'var(--muted)' }}>
                    View More
                  </span>
                  <ChevronRight size={14} />
                </div>
              </div>
            </div>
          </motion.button>

          {/* Profile Photo Card (moved to second position) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-2 md:col-span-2 lg:col-span-3 row-span-2 photo-card rounded-lg md:rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 flex items-center justify-center cursor-pointer overflow-hidden"
          >
            <div className="relative w-full h-full max-w-full max-h-full flex items-center justify-center">
              <div className="relative w-[90%] h-[90%] max-w-[250px] max-h-[250px] aspect-square">
                <div className="w-full h-full soft-surface rounded-full overflow-hidden">
                  {/* Profile photo placeholder */}
                  <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-600 dark:to-gray-700 flex items-center justify-center">
                    <Camera size={40} className="text-gray-500 dark:text-gray-400" />
                  </div>
                  {
                    <img
                      src="/photo.png"
                      alt={personalInfo.firstname}
                      className="w-full h-full object-cover"
                    />
                  }
                </div>
                <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-800 animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Experience Card - First in order */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            onClick={() => setOpenModal('experience')}
            className="col-span-2 md:col-span-4 lg:col-span-6 row-span-1 soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl soft-hover group cursor-pointer 
              flex flex-col justify-between text-left transition-all hover:scale-[1.01]"
          >
            <div>
              <div className="inline-flex p-2.5 rounded-lg mb-3 bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                <Briefcase size={20} />
              </div>
              <h3 className="text-base font-bold mb-1">Experience</h3>
              <p className="text-sm font-normal" style={{ color: 'var(--muted)' }}>
                8+ years journey
              </p>
            </div>
            <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={16} />
            </div>
          </motion.button>

          {/* Skills Card - Second in order */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={() => setOpenModal('skills')}
            className="col-span-2 md:col-span-4 lg:col-span-6 row-span-1 soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl soft-hover group cursor-pointer 
              flex flex-col justify-between text-left transition-all hover:scale-[1.01]"
          >
            <div>
              <div className="inline-flex p-2.5 rounded-lg mb-3 bg-gradient-to-br from-orange-500/10 to-red-500/10">
                <Code2 size={20} />
              </div>
              <h3 className="text-base font-bold mb-1">Skills</h3>
              <p className="text-sm font-normal" style={{ color: 'var(--muted)' }}>
                Tech stack
              </p>
            </div>
            <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={16} />
            </div>
          </motion.button>

          {/* Projects Card - Third in order */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            onClick={() => setOpenModal('projects')}
            className="col-span-2 md:col-span-4 lg:col-span-6 row-span-1 soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl soft-hover group cursor-pointer 
              flex flex-col justify-between text-left transition-all hover:scale-[1.01]"
          >
            <div>
              <div className="inline-flex p-2.5 rounded-lg mb-3 bg-gradient-to-br from-blue-500/10 to-purple-500/10">
                <Rocket size={20} />
              </div>
              <h3 className="text-base font-bold mb-1">Projects</h3>
              <p className="text-sm font-normal" style={{ color: 'var(--muted)' }}>
                Open source work
              </p>
            </div>
            <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={16} />
            </div>
          </motion.button>

          {/* Contact Card - Fourth in order */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            onClick={() => setOpenModal('contact')}
            className="col-span-2 md:col-span-4 lg:col-span-6 row-span-1 soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl soft-hover group cursor-pointer 
              flex flex-col justify-between text-left transition-all hover:scale-[1.01]"
          >
            <div>
              <div className="inline-flex p-2.5 rounded-lg mb-3 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                <Mail size={20} />
              </div>
              <h3 className="text-base font-bold mb-1">Contact</h3>
              <p className="text-sm font-normal" style={{ color: 'var(--muted)' }}>
                Let's connect
              </p>
            </div>
            <div className="flex items-center justify-end opacity-0 group-hover:opacity-100 transition-opacity">
              <ChevronRight size={16} />
            </div>
          </motion.button>

          {/* Resume Download Card - Third Row (moved from second row) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="col-span-4 md:col-span-8 lg:col-span-12 row-span-1 soft-surface soft-hover p-2 sm:p-3 md:p-4 rounded-lg md:rounded-xl lg:rounded-2xl cursor-pointer"
            onClick={handleResumeDownload}
          >
            <div className="w-full h-full flex items-center justify-center gap-4">
              <div className="inline-flex p-2 rounded-lg bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10">
                <Download size={20} />
              </div>
              <span className="text-base font-semibold">Download CV</span>
              <span className="text-sm font-normal" style={{ color: 'var(--muted)' }}>
                PDF • 2 Pages
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals for each section */}
      <Modal isOpen={openModal === 'projects'} onClose={() => setOpenModal(null)} title="Projects">
        <ProjectsBento />
      </Modal>

      <Modal
        isOpen={openModal === 'experience'}
        onClose={() => setOpenModal(null)}
        title="Experience"
      >
        <ExperienceBento />
      </Modal>

      <Modal isOpen={openModal === 'skills'} onClose={() => setOpenModal(null)} title="Skills">
        <SkillsBento />
      </Modal>

      <Modal isOpen={openModal === 'about'} onClose={() => setOpenModal(null)} title="About Me">
        <AboutBento />
      </Modal>

      <Modal
        isOpen={openModal === 'contact'}
        onClose={() => setOpenModal(null)}
        title="Get in Touch"
      >
        <ContactBento />
      </Modal>
    </div>
  );
};
