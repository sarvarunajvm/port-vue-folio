import React from 'react';

import { motion } from 'framer-motion';
import { Code2, GitBranch, Network, Package, Star, Users } from 'lucide-react';

import { projects } from '../data/projects';

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: typeof Code2 } = {
    Code2,
    Network,
    Package,
  };
  return iconMap[iconName] || Code2;
};

const ProjectsBento: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-center mb-2">
        <p
          className="text-sm sm:text-base md:text-lg font-medium"
          style={{ color: 'var(--muted)' }}
        >
          Building tools that make a difference
        </p>
      </div>

      {/* Single Row Layout with Stats Card on Left and Projects on Right */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1 sm:gap-1.5 md:gap-2 flex-1">
        {/* Stats Card - First Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="neu-pressed rounded-lg md:rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col justify-center"
        >
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-4 text-center">
            Project Stats
          </h3>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">270+</p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  Weekly Downloads
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-orange-600/20 to-orange-700/20">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">15+</p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  GitHub Stars
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <div className="inline-flex p-3 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20">
                <GitBranch className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
              </div>
              <div>
                <p className="text-2xl sm:text-3xl md:text-4xl font-bold">5+</p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--muted)' }}>
                  Open Source Projects
                </p>
              </div>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-center font-medium mt-2">
              Contributing to the open source community
            </p>
          </div>
        </motion.div>

        {/* Projects Column - Second Column with 3 Projects */}
        <div className="flex flex-col gap-1 sm:gap-1.5 md:gap-2">
          {projects.slice(0, 3).map((project, index) => {
            const Icon = getIcon(project.icon || 'Code2');

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="neu-pressed rounded-lg md:rounded-2xl p-2 sm:p-3 md:p-4 flex flex-col flex-1"
              >
                <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm sm:text-base md:text-lg font-bold">{project.title}</h3>
                    <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--muted)' }}>
                      {project.language}
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm mb-2 flex-1 font-medium">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="neu-pressed-sm px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-1">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-pressed-sm px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 text-[10px] sm:text-xs font-semibold soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-0.5 sm:gap-1"
                  >
                    <GitBranch size={14} className="sm:w-4 sm:h-4" />
                    Code
                  </a>
                  {project.npmLink && (
                    <a
                      href={project.npmLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="neu-pressed-sm px-2.5 py-1.5 sm:px-3 sm:py-2 md:px-4 md:py-2 text-[10px] sm:text-xs font-semibold soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-0.5 sm:gap-1"
                    >
                      <Package size={14} className="sm:w-4 sm:h-4" />
                      NPM
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectsBento;
