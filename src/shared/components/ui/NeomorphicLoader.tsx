import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import type { LoaderProps } from '../../types';
import NeumorphicThemeToggle from './NeumorphicThemeToggle';

const NeomorphicLoader: React.FC<LoaderProps> = ({ onLoadComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return (
      savedTheme === 'dark' ||
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const duration = 2500;
    const increment = 100 / (duration / 50);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 300);
        }
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  const baseClasses = {
    bg: isDark ? 'bg-gray-900' : 'bg-gray-200',
    text: isDark ? 'text-gray-100' : 'text-gray-800',
    subtext: isDark ? 'text-gray-400' : 'text-gray-600',
    progressBg: isDark ? 'bg-gray-800' : 'bg-gray-300',
    progressBar: isDark
      ? 'bg-gradient-to-r from-blue-500 to-cyan-500'
      : 'bg-gradient-to-r from-purple-500 to-pink-500',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className={`fixed inset-0 z-50 flex items-center justify-center ${baseClasses.bg} transition-colors duration-500`}
      >
        <div className="relative flex flex-col items-center">
          {/* Theme Switcher */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute -top-20 right-0"
          >
            <NeumorphicThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </motion.div>

          {/* Main Loader Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={`relative w-64 h-64 rounded-3xl ${baseClasses.bg} neu-pressed-lg flex items-center justify-center`}
          >
            {/* Animated Rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                className={`absolute w-48 h-48 rounded-full border-4 border-t-transparent border-purple-500`}
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className={`absolute w-36 h-36 rounded-full border-4 border-r-transparent border-pink-500`}
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                className={`absolute w-24 h-24 rounded-full border-4 border-b-transparent border-blue-500`}
              />
            </div>

            {/* Center Logo */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`relative z-10 w-20 h-20 rounded-2xl ${baseClasses.bg} neu-pressed-sm flex items-center justify-center`}
            >
              <span
                className={`text-3xl font-bold ${baseClasses.text} bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent`}
              >
                S
              </span>
            </motion.div>
          </motion.div>

          {/* Progress Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-12 flex flex-col items-center"
          >
            {/* Loading Text */}
            <motion.h2
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className={`text-2xl font-bold ${baseClasses.text} mb-2`}
            >
              Loading Portfolio
            </motion.h2>

            {/* Animated Dots */}
            <div className="flex space-x-2 mb-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                  className={`w-2 h-2 rounded-full ${baseClasses.progressBar}`}
                />
              ))}
            </div>

            {/* Progress Bar Container */}
            <div
              className={`relative w-80 h-6 rounded-full ${baseClasses.progressBg} neu-pressed-inset overflow-hidden`}
            >
              <motion.div
                className={`absolute inset-y-0 left-0 ${baseClasses.progressBar} rounded-full`}
                initial={{ width: '0%' }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/30"
                  animate={{
                    x: ['-100%', '200%'],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
              </motion.div>
            </div>

            {/* Progress Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className={`mt-4 text-sm font-medium ${baseClasses.subtext}`}
            >
              {Math.round(progress)}%
            </motion.div>

            {/* Status Messages */}
            <motion.div
              key={Math.floor(progress / 25)}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`mt-2 text-xs ${baseClasses.subtext}`}
            >
              {progress < 25 && 'Initializing components...'}
              {progress >= 25 && progress < 50 && 'Loading assets...'}
              {progress >= 50 && progress < 75 && 'Rendering interface...'}
              {progress >= 75 && progress < 100 && 'Almost ready...'}
              {progress >= 100 && 'Welcome!'}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NeomorphicLoader;
