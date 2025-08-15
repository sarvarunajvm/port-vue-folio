import React from 'react';

import { motion } from 'framer-motion';
import { Camera, Download } from 'lucide-react';

import { portfolioConfig } from '../../../config/portfolio.config';
import type { HeroSectionProps } from '../../../shared/types';
import { personalInfo } from '../../about/data/about';
import TypewriterText from './TypewriterText';

const HeroSection: React.FC<HeroSectionProps> = ({ onProfileClick, onResumeDownload }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
      className="neu-pressed-lg p-4 sm:p-6 md:p-8 lg:p-10 relative overflow-hidden"
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(147, 51, 234, 0.05) 0%, transparent 50%)',
        }}
      />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 items-center">
        {/* Left Column - Photo */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            onClick={onProfileClick}
            className="cursor-pointer relative"
          >
            <div className="w-[120px] h-[120px] sm:w-[140px] sm:h-[140px] md:w-[160px] md:h-[160px] lg:w-[200px] lg:h-[200px] xl:w-[240px] xl:h-[240px] neu-pressed-circle overflow-hidden relative group">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 opacity-30"
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{ duration: 10, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              />

              {/* Fallback placeholder */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300/90 to-gray-400/90 dark:from-gray-600/90 dark:to-gray-700/90 flex items-center justify-center backdrop-blur-sm">
                <Camera size={60} className="text-gray-500 dark:text-gray-400" />
              </div>

              {/* Actual image */}
              <img
                src={`${import.meta.env.BASE_URL}photo.png`}
                alt={personalInfo.firstname}
                className="absolute inset-0 w-full h-full object-contain bg-transparent z-10"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 z-20 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded-full">
                  View Profile
                </span>
              </div>
            </div>

            {/* Click indicator - positioned inside for mobile */}
            <motion.div
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 lg:hidden z-30"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/30 dark:bg-purple-400/30 text-purple-700 dark:text-purple-300 backdrop-blur-sm">
                Tap to view
              </span>
            </motion.div>

            {/* Desktop hover hint */}
            <motion.div className="hidden lg:block absolute -bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 shadow-lg">
                Click to view profile
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Middle Column - Name and Title */}
        <div className="text-center md:text-left">
          {/* Animated name with gradient */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-gray-800 to-gray-600 dark:from-gray-100 dark:to-gray-300 bg-clip-text text-transparent leading-tight mb-3 md:mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block md:hidden">
              {personalInfo.firstname}
              <br />
              {personalInfo.lastname}
            </span>
            <span className="hidden md:inline">
              {personalInfo.firstname} {personalInfo.lastname}
            </span>
          </motion.h1>

          <div className="h-8 md:h-10 lg:h-12 mb-3 md:mb-4">
            <TypewriterText
              texts={personalInfo.titles}
              className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text"
              typingSpeed={100}
              deletingSpeed={50}
              pauseTime={2000}
            />
          </div>

          {/* Resume Download Button */}
          <motion.button
            onClick={onResumeDownload}
            className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 md:px-4 md:py-2 lg:px-5 lg:py-2.5 neu-pressed-sm rounded-lg hover:scale-105 transition-all group"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="text-amber-500 group-hover:animate-bounce w-4 h-4 md:w-5 md:h-5" />
            <span className="text-sm md:text-base lg:text-lg font-semibold">
              {portfolioConfig.sections.resume.title}
            </span>
          </motion.button>

          {/* Mobile Stats - Compact inline layout */}
          <div className="flex md:hidden gap-2 mt-3 justify-center text-xs">
            <div className="flex items-center gap-1">
              <span className="font-black text-blue-500">
                {portfolioConfig.stats.yearsOfExperience}+
              </span>
              <span className="opacity-60">Years</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-1">
              <span className="font-black text-purple-500">
                {portfolioConfig.stats.projectsCompleted}+
              </span>
              <span className="opacity-60">Projects</span>
            </div>
            <span className="opacity-40">•</span>
            <div className="flex items-center gap-1">
              <span className="font-black text-green-500">
                {portfolioConfig.stats.techStackSize}+
              </span>
              <span className="opacity-60">Tech</span>
            </div>
          </div>
        </div>

        {/* Right Column - Stats (Desktop only) */}
        <div className="hidden md:flex flex-col gap-3 lg:gap-4 items-center md:items-end justify-center">
          <motion.div
            className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-3 rounded-lg neu-pressed-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              {portfolioConfig.stats.yearsOfExperience}+
            </div>
            <div className="text-xs lg:text-sm opacity-60 font-medium">
              Years
              <br />
              Experience
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-3 rounded-lg neu-pressed-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {portfolioConfig.stats.projectsCompleted}+
            </div>
            <div className="text-xs lg:text-sm opacity-60 font-medium">
              Completed
              <br />
              Projects
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-2 px-3 py-2 lg:px-4 lg:py-3 rounded-lg neu-pressed-sm"
            whileHover={{ scale: 1.05 }}
          >
            <div className="text-2xl lg:text-3xl xl:text-4xl font-black bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
              {portfolioConfig.stats.techStackSize}+
            </div>
            <div className="text-xs lg:text-sm opacity-60 font-medium">
              Tech
              <br />
              Stack
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
