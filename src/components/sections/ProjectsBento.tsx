import React from 'react';

import { motion } from 'framer-motion';
import { Code2, ExternalLink, GitBranch, Network, Package, Star, Users } from 'lucide-react';

import { projects } from '../../data/projects';

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ size?: number }> } = {
    Code2,
    Network,
    Package,
  };
  return iconMap[iconName] || Code2;
};

export const ProjectsBento: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-auto flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full h-full max-w-[1600px] flex flex-col">
        <div className="text-center mb-4">
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            Building tools that make a difference
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1 overflow-auto mb-4">
          {/* Featured Project - Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 lg:col-span-2 row-span-2 soft-surface rounded-2xl p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="soft-surface-sm p-3 rounded-lg">
                <Network size={32} />
              </div>
              <div className="flex items-center gap-2">
                <Star size={18} style={{ color: 'var(--muted)' }} />
                <span className="text-sm font-medium">Featured</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-2">{projects[1].title}</h3>
            <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>
              {projects[1].language}
            </p>
            <p className="flex-1 mb-4 text-base">{projects[1].description}</p>

            <div className="space-y-2 mb-4">
              {projects[1].highlights.map((highlight, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">✓</span>
                  <span className="text-sm">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              <a
                href={projects[1].url}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-surface-sm px-5 py-3 text-sm font-medium soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-2"
              >
                <ExternalLink size={18} />
                View on GitHub
              </a>
            </div>
          </motion.div>

          {/* Other Projects */}
          {projects
            .filter((_, index) => index !== 1)
            .map((project, index) => {
              const Icon = getIcon(project.icon || 'Code2');

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="soft-surface rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="soft-surface-sm p-2 rounded-lg">
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>
                        {project.language}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="soft-surface-sm px-3 py-1 text-xs font-medium rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-2">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="soft-surface-sm px-4 py-2 text-xs font-medium soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1"
                    >
                      <GitBranch size={16} />
                      Code
                    </a>
                    {project.npmLink && (
                      <a
                        href={project.npmLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soft-surface-sm px-4 py-2 text-xs font-medium soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1"
                      >
                        <Package size={16} />
                        NPM
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
        </div>

        {/* Stats Card - Full Width - Last Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="soft-surface rounded-2xl p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-around gap-6">
            <div className="flex items-center gap-4">
              <Users className="w-12 h-12" style={{ color: 'var(--muted)' }} />
              <div>
                <p className="text-3xl font-bold">270+</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Weekly Downloads
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Star className="w-12 h-12" style={{ color: 'var(--muted)' }} />
              <div>
                <p className="text-3xl font-bold">15+</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  GitHub Stars
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <GitBranch className="w-12 h-12" style={{ color: 'var(--muted)' }} />
              <div>
                <p className="text-3xl font-bold">5+</p>
                <p className="text-sm" style={{ color: 'var(--muted)' }}>
                  Open Source Projects
                </p>
              </div>
            </div>
            <p className="text-sm md:text-base text-center md:text-left">
              Contributing to the open source community
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
