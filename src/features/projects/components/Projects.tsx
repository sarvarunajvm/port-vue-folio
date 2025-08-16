import React from 'react';

import { motion } from 'framer-motion';

import { projects } from '../data/projects';

const Projects: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      {/* Full width project showcase */}
      <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 flex-1">
        {/* Featured Project - Utils Commons */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="neu-pressed rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5"
        >
          <div className="flex flex-col md:flex-row gap-3 md:gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20">
                  <span className="text-2xl">☕</span>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Utils-Commons</h3>
                  <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--muted)' }}>
                    Java • Inspired by Apache Commons IO
                  </p>
                </div>
              </div>
              <p className="text-base sm:text-lg mb-3 font-medium">
                Comprehensive utility library providing essential tools for String, Number, Date,
                Set, List, BLOB, and Zip operations.
              </p>
              <div className="flex items-center gap-4 text-sm sm:text-base">
                <span className="flex items-center gap-1">
                  <span>⭐</span>
                  <span className="font-semibold">Production Ready</span>
                </span>
                <span className="flex items-center gap-1">
                  <span>🔧</span>
                  <span className="font-semibold">7 Utility Modules</span>
                </span>
              </div>
            </div>
            <div className="flex md:flex-col gap-2">
              <a
                href={projects[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-pressed-sm px-4 py-2 text-sm sm:text-base font-semibold soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1 whitespace-nowrap"
              >
                <span>🌿</span>
                View on GitHub
              </a>
            </div>
          </div>
        </motion.div>

        {/* Two column layout for remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4 flex-1">
          {/* Port Advancer */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="neu-pressed rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col"
          >
            <div className="flex items-start gap-2 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <span className="text-xl">🔌</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Port-Advancer</h3>
                <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--muted)' }}>
                  NodeJS • Network Security Tool
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg mb-3 flex-1 font-medium">
              Enterprise tool enabling secure port forwarding and reverse proxying within restricted
              networks.
            </p>

            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">👥</span>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">60+</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
                    Active Users
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span>🏢</span>
                <span className="font-medium">Enterprise Production</span>
              </div>
            </div>

            <a
              href={projects[1].url}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-pressed-sm px-3 py-2 text-sm sm:text-base font-semibold soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1 self-start"
            >
              <span>🌿</span>
              View Source
            </a>
          </motion.div>

          {/* Vue Embed Gist */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="neu-pressed rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col"
          >
            <div className="flex items-start gap-2 mb-2">
              <div className="p-2 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <span className="text-xl">📦</span>
              </div>
              <div className="flex-1">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">vue-embed-gist</h3>
                <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--muted)' }}>
                  Vue.js • NPM Package
                </p>
              </div>
            </div>

            <p className="text-base sm:text-lg mb-3 flex-1 font-medium">
              Vue component for embedding GitHub Gists - contributing to the Vue ecosystem.
            </p>

            <div className="space-y-2 mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">📊</span>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">270+</p>
                  <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>
                    Weekly Downloads
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <span>🌟</span>
                <span className="font-medium">Active Open Source</span>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={projects[2].url}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-pressed-sm px-3 py-2 text-sm sm:text-base font-semibold soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1"
              >
                <span>🌿</span>
                PR
              </a>
              <a
                href={projects[2].npmLink}
                target="_blank"
                rel="noopener noreferrer"
                className="neu-pressed-sm px-3 py-2 text-sm sm:text-base font-semibold soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1"
              >
                <span>📦</span>
                NPM
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Impact Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="neu-pressed rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4"
        >
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 text-center">
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">3+</p>
              <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--muted)' }}>
                Open Source Projects
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">330+</p>
              <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--muted)' }}>
                Weekly Impact
              </p>
            </div>
            <div>
              <p className="text-xl sm:text-2xl md:text-3xl font-bold">60+</p>
              <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--muted)' }}>
                Enterprise Users
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
