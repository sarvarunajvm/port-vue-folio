import React from 'react';

import { motion } from 'framer-motion';
import { Moon, Sun } from 'lucide-react';

import { useTheme } from '../hooks/useTheme';

export const FloatingThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 hover:from-indigo-500/30 hover:to-purple-500/30 transition-all shadow-lg focus-ring"
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      style={{ color: 'var(--fg)' }}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? <Moon size={24} /> : <Sun size={24} />}
      </motion.div>
    </motion.button>
  );
};
