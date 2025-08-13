import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../../data/projects';
import { ExternalLink, Package, Code2, Network } from 'lucide-react';

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    Code2,
    Network,
    Package,
  };
  return iconMap[iconName] || Code2;
};

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Open Source Projects</h2>
          <p className="text-center text-muted mb-12 text-lg">
            Building tools that make a difference
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = getIcon(project.icon || 'Code2');
              
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="soft-surface p-6 h-full flex flex-col soft-hover group">
                    {/* Icon & Title */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="soft-surface-sm p-3 group-hover:animate-pulse-soft">
                        <Icon size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                        <p className="text-sm text-muted">{project.language}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted mb-4 flex-1">{project.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-4">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <span className="text-muted mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="soft-surface-sm px-3 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soft-surface-sm px-4 py-2 text-sm font-medium soft-hover soft-press focus-ring inline-flex items-center gap-2"
                      >
                        <ExternalLink size={16} />
                        View on GitHub
                      </a>
                      {project.npmLink && (
                        <a
                          href={project.npmLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="soft-surface-sm px-4 py-2 text-sm font-medium soft-hover soft-press focus-ring inline-flex items-center gap-2"
                        >
                          <Package size={16} />
                          NPM
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};