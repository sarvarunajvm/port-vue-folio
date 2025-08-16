import React, { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { projects } from '../data/projects';

const Projects: React.FC = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.getAttribute('data-theme') === 'dark');
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });
    return () => observer.disconnect();
  }, []);
  return (
    <div className="w-full h-full flex items-start md:items-center justify-center p-4 md:p-8 lg:p-12 overflow-y-auto lg:overflow-y-visible">
      <div className="w-full max-w-[1200px] h-auto lg:h-auto my-auto md:my-0">
        <div className="flex flex-col gap-4 lg:gap-6">
          {/* Three column grid for projects */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Utils Commons */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col transition-all duration-500"
              style={{
                background: 'var(--surface)',
                boxShadow: isDark
                  ? 'inset 6px 6px 12px rgba(0, 0, 0, 0.65), inset -6px -6px 12px rgba(192, 192, 192, 0.08), 0 0 0 1px rgba(192, 192, 192, 0.08)'
                  : 'inset 6px 6px 12px rgba(139, 90, 43, 0.12), inset -6px -6px 12px rgba(244, 232, 225, 0.75), 0 0 0 1px rgba(184, 115, 51, 0.1)',
              }}
            >
              <div className="flex items-start gap-2 mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(192, 192, 192, 0.15), rgba(192, 192, 192, 0.08))'
                      : 'linear-gradient(135deg, rgba(184, 115, 51, 0.15), rgba(184, 115, 51, 0.08))',
                    boxShadow: isDark
                      ? '3px 3px 6px rgba(0, 0, 0, 0.5), -3px -3px 6px rgba(192, 192, 192, 0.06)'
                      : '3px 3px 6px rgba(139, 90, 43, 0.1), -3px -3px 6px rgba(244, 232, 225, 0.6)',
                  }}
                >
                  <span className="text-2xl lg:text-3xl">☕</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold">Utils-Commons</h3>
                  <p className="text-sm lg:text-base font-medium text-muted">
                    Java • Production Ready
                  </p>
                </div>
              </div>
              <p className="text-base lg:text-lg mb-4 flex-1">
                Comprehensive utility library with 7 modules for String, Number, Date, and more
                operations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🔧</span>
                  <div>
                    <p className="text-xl lg:text-2xl font-bold">7</p>
                    <p className="text-sm font-medium text-muted">Utility Modules</p>
                  </div>
                </div>
                <a
                  href={projects[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-base font-semibold focus-ring rounded-lg inline-flex items-center gap-2 w-full justify-center transition-all duration-300"
                  style={{
                    background: 'var(--surface)',
                    boxShadow: isDark
                      ? 'inset 3px 3px 6px rgba(0, 0, 0, 0.5), inset -3px -3px 6px rgba(192, 192, 192, 0.06)'
                      : 'inset 3px 3px 6px rgba(139, 90, 43, 0.1), inset -3px -3px 6px rgba(244, 232, 225, 0.6)',
                  }}
                >
                  <span>🌿</span>
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Port Advancer */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col transition-all duration-500"
              style={{
                background: 'var(--surface)',
                boxShadow: isDark
                  ? 'inset 6px 6px 12px rgba(0, 0, 0, 0.65), inset -6px -6px 12px rgba(192, 192, 192, 0.08), 0 0 0 1px rgba(192, 192, 192, 0.08)'
                  : 'inset 6px 6px 12px rgba(139, 90, 43, 0.12), inset -6px -6px 12px rgba(244, 232, 225, 0.75), 0 0 0 1px rgba(184, 115, 51, 0.1)',
              }}
            >
              <div className="flex items-start gap-2 mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(135, 206, 235, 0.15), rgba(135, 206, 235, 0.08))'
                      : 'linear-gradient(135deg, rgba(74, 124, 126, 0.15), rgba(74, 124, 126, 0.08))',
                    boxShadow: isDark
                      ? '3px 3px 6px rgba(0, 0, 0, 0.5), -3px -3px 6px rgba(192, 192, 192, 0.06)'
                      : '3px 3px 6px rgba(139, 90, 43, 0.1), -3px -3px 6px rgba(244, 232, 225, 0.6)',
                  }}
                >
                  <span className="text-2xl lg:text-3xl">🔌</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold">Port-Advancer</h3>
                  <p className="text-sm lg:text-base font-medium text-muted">NodeJS • Enterprise</p>
                </div>
              </div>
              <p className="text-base lg:text-lg mb-4 flex-1">
                Secure port forwarding and reverse proxying tool for restricted networks.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">👥</span>
                  <div>
                    <p className="text-xl lg:text-2xl font-bold">60+</p>
                    <p className="text-sm font-medium text-muted">Active Users</p>
                  </div>
                </div>
                <a
                  href={projects[1].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-base font-semibold focus-ring rounded-lg inline-flex items-center gap-2 w-full justify-center transition-all duration-300"
                  style={{
                    background: 'var(--surface)',
                    boxShadow: isDark
                      ? 'inset 3px 3px 6px rgba(0, 0, 0, 0.5), inset -3px -3px 6px rgba(192, 192, 192, 0.06)'
                      : 'inset 3px 3px 6px rgba(139, 90, 43, 0.1), inset -3px -3px 6px rgba(244, 232, 225, 0.6)',
                  }}
                >
                  <span>🌿</span>
                  GitHub
                </a>
              </div>
            </motion.div>

            {/* Vue Embed Gist */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 flex flex-col transition-all duration-500"
              style={{
                background: 'var(--surface)',
                boxShadow: isDark
                  ? 'inset 6px 6px 12px rgba(0, 0, 0, 0.65), inset -6px -6px 12px rgba(192, 192, 192, 0.08), 0 0 0 1px rgba(192, 192, 192, 0.08)'
                  : 'inset 6px 6px 12px rgba(139, 90, 43, 0.12), inset -6px -6px 12px rgba(244, 232, 225, 0.75), 0 0 0 1px rgba(184, 115, 51, 0.1)',
              }}
            >
              <div className="flex items-start gap-2 mb-3">
                <div
                  className="p-2 rounded-lg"
                  style={{
                    background: isDark
                      ? 'linear-gradient(135deg, rgba(152, 217, 130, 0.15), rgba(152, 217, 130, 0.08))'
                      : 'linear-gradient(135deg, rgba(90, 122, 90, 0.15), rgba(90, 122, 90, 0.08))',
                    boxShadow: isDark
                      ? '3px 3px 6px rgba(0, 0, 0, 0.5), -3px -3px 6px rgba(192, 192, 192, 0.06)'
                      : '3px 3px 6px rgba(139, 90, 43, 0.1), -3px -3px 6px rgba(244, 232, 225, 0.6)',
                  }}
                >
                  <span className="text-2xl lg:text-3xl">📦</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-bold">vue-embed-gist</h3>
                  <p className="text-sm lg:text-base font-medium text-muted">
                    Vue.js • NPM Package
                  </p>
                </div>
              </div>
              <p className="text-base lg:text-lg mb-4 flex-1">
                Vue component for embedding GitHub Gists in Vue applications.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  <div>
                    <p className="text-xl lg:text-2xl font-bold">270+</p>
                    <p className="text-sm font-medium text-muted">Weekly Downloads</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={projects[2].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-semibold focus-ring rounded-lg inline-flex items-center gap-1 flex-1 justify-center transition-all duration-300"
                    style={{
                      background: 'var(--surface)',
                      boxShadow: isDark
                        ? 'inset 3px 3px 6px rgba(0, 0, 0, 0.5), inset -3px -3px 6px rgba(192, 192, 192, 0.06)'
                        : 'inset 3px 3px 6px rgba(139, 90, 43, 0.1), inset -3px -3px 6px rgba(244, 232, 225, 0.6)',
                    }}
                  >
                    <span>🌿</span>
                    PR
                  </a>
                  <a
                    href={projects[2].npmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 text-sm font-semibold focus-ring rounded-lg inline-flex items-center gap-1 flex-1 justify-center transition-all duration-300"
                    style={{
                      background: 'var(--surface)',
                      boxShadow: isDark
                        ? 'inset 3px 3px 6px rgba(0, 0, 0, 0.5), inset -3px -3px 6px rgba(192, 192, 192, 0.06)'
                        : 'inset 3px 3px 6px rgba(139, 90, 43, 0.1), inset -3px -3px 6px rgba(244, 232, 225, 0.6)',
                    }}
                  >
                    <span>📦</span>
                    NPM
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Impact Summary - Single Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-lg md:rounded-xl p-3 md:p-4 transition-all duration-500"
            style={{
              background: 'var(--surface)',
              boxShadow: isDark
                ? 'inset 4px 4px 8px rgba(0, 0, 0, 0.6), inset -4px -4px 8px rgba(192, 192, 192, 0.08), 0 0 0 1px rgba(192, 192, 192, 0.06)'
                : 'inset 4px 4px 8px rgba(139, 90, 43, 0.12), inset -4px -4px 8px rgba(244, 232, 225, 0.7), 0 0 0 1px rgba(184, 115, 51, 0.08)',
            }}
          >
            <div className="flex flex-row justify-center items-center gap-2 sm:gap-6 lg:gap-8 text-center">
              <div className="flex flex-col items-center">
                <p
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  3
                </p>
                <p className="text-xs sm:text-base md:text-lg font-medium text-muted">
                  Open Source
                </p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <p
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  270+
                </p>
                <p className="text-xs sm:text-base md:text-lg font-medium text-muted">Downloads</p>
              </div>
              <div className="w-px h-8 bg-gray-300 dark:bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <p
                  className="text-2xl sm:text-3xl md:text-4xl font-bold"
                  style={{ color: 'var(--accent)' }}
                >
                  60+
                </p>
                <p className="text-xs sm:text-base md:text-lg font-medium text-muted">Users</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
