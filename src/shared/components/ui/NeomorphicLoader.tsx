import React, { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

import type { LoaderProps } from '../../types';
import { CoffeeLoader } from '../loaders/coffee';
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
    const duration = 3500; // Increased for coffee animation
    const increment = 100 / (duration / 50);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = Math.min(prev + increment, 100);
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(onLoadComplete, 500);
        }
        return next;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onLoadComplete]);

  const baseClasses = {
    bg: isDark ? 'bg-[#0e0f11]' : 'bg-[#f2f3f5]',
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
            className="absolute -top-32 right-0"
          >
            <NeumorphicThemeToggle isDark={isDark} onToggle={() => setIsDark(!isDark)} />
          </motion.div>

          {/* Coffee Loader */}
          <CoffeeLoader progress={progress} isDark={isDark} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NeomorphicLoader;
