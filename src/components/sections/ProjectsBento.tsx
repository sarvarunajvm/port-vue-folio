import React from 'react';
import { projects } from '../../data/projects';
import { BentoGrid, BentoCard } from '../BentoGrid';
import { ExternalLink, Package, Code2, Network, Star, GitBranch, Users } from 'lucide-react';

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    Code2,
    Network,
    Package,
  };
  return iconMap[iconName] || Code2;
};

export const ProjectsBento: React.FC = () => {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <p className="text-lg" style={{ color: 'var(--muted)' }}>
          Building tools that make a difference
        </p>
      </div>

        <BentoGrid>
          {/* Featured Project - Large Card */}
          <BentoCard size="large" delay={0.1}>
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="soft-surface-sm p-3 rounded-lg">
                  <Network size={28} />
                </div>
                <div className="flex items-center gap-2">
                  <Star size={16} style={{ color: 'var(--muted)' }} />
                  <span className="text-sm font-medium">Featured</span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-2">{projects[1].title}</h3>
              <p className="text-sm mb-2" style={{ color: 'var(--muted)' }}>{projects[1].language}</p>
              <p className="flex-1 mb-4">{projects[1].description}</p>
              
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
                  className="soft-surface-sm px-4 py-2 text-sm font-medium soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-2"
                >
                  <ExternalLink size={16} />
                  View on GitHub
                </a>
              </div>
            </div>
          </BentoCard>

          {/* Other Projects */}
          {projects.filter((_, index) => index !== 1).map((project, index) => {
            const Icon = getIcon(project.icon || 'Code2');
            
            return (
              <BentoCard key={project.id} size="medium" delay={0.2 + index * 0.1}>
                <div className="h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="soft-surface-sm p-2 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                      <p className="text-sm" style={{ color: 'var(--muted)' }}>{project.language}</p>
                    </div>
                  </div>

                  <p className="text-sm mb-3 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="soft-surface-sm px-2 py-1 text-xs font-medium rounded"
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
                      className="soft-surface-sm px-3 py-2 text-xs font-medium soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1"
                    >
                      <GitBranch size={14} />
                      Code
                    </a>
                    {project.npmLink && (
                      <a
                        href={project.npmLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="soft-surface-sm px-3 py-2 text-xs font-medium soft-hover soft-press focus-ring rounded-lg inline-flex items-center gap-1"
                      >
                        <Package size={14} />
                        NPM
                      </a>
                    )}
                  </div>
                </div>
              </BentoCard>
            );
          })}

          {/* Stats Card */}
          <BentoCard size="medium" delay={0.5}>
            <div className="h-full flex flex-col justify-center">
              <Users className="w-10 h-10 mb-3" style={{ color: 'var(--muted)' }} />
              <p className="text-3xl font-bold mb-2">270+</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Weekly Downloads</p>
              <p className="text-xs mt-2">Contributing to the open source community</p>
            </div>
          </BentoCard>
        </BentoGrid>
    </div>
  );
};