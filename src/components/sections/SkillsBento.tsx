import React from 'react';

import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';

import { skillsData } from '../../data/skills';

const getIcon = (iconName?: string) => {
  if (!iconName) return Icons.Code2;

  const iconMap: { [key: string]: React.ComponentType<{ size?: number; className?: string }> } = {
    Coffee: Icons.Coffee,
    Leaf: Icons.Leaf,
    Shield: Icons.Shield,
    Api: Icons.Code,
    Code: Icons.Code,
    FileCode: Icons.FileCode,
    Cable: Icons.Cable,
    Database: Icons.Database,
    Package: Icons.Package,
    Package2: Icons.Package2,
    TestTube: Icons.TestTube,
    TestTube2: Icons.TestTube2,
    Hexagon: Icons.Hexagon,
    Triangle: Icons.Triangle,
    Atom: Icons.Atom,
    Code2: Icons.Code2,
    Store: Icons.Store,
    Layers: Icons.Layers,
    HardDrive: Icons.HardDrive,
    Zap: Icons.Zap,
    Cloud: Icons.Cloud,
    Table: Icons.Table,
    Workflow: Icons.Workflow,
    Github: Icons.Github,
    Container: Icons.Container,
    CloudCog: Icons.CloudCog,
    Activity: Icons.Activity,
    BarChart3: Icons.BarChart3,
    LineChart: Icons.LineChart,
    TrendingUp: Icons.TrendingUp,
    GitBranch: Icons.GitBranch,
    Kanban: Icons.Kanban,
    BookOpen: Icons.BookOpen,
    FileText: Icons.FileText,
    MessageSquare: Icons.MessageSquare,
    Key: Icons.Key,
    Lock: Icons.Lock,
    ScanLine: Icons.ScanLine,
  };

  return iconMap[iconName] || Icons.Code2;
};

export const SkillsBento: React.FC = () => {
  // Prioritize categories for better Bento layout
  const backend = skillsData.find((c) => c.id === 'backend');
  const frontend = skillsData.find((c) => c.id === 'frontend');
  const databases = skillsData.find((c) => c.id === 'databases');
  const devops = skillsData.find((c) => c.id === 'devops');
  const versionControl = skillsData.find((c) => c.id === 'version-control');
  const other = skillsData.find((c) => c.id === 'other');

  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full h-full max-w-[1600px] flex flex-col">
        <div className="text-center mb-2">
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            Full-stack expertise across modern technologies
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2 flex-1"
          style={{ gridTemplateRows: '1fr 1fr' }}
        >
          {/* Backend - Large Card */}
          {backend && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 soft-surface rounded-2xl p-3 flex flex-col"
            >
              <h3 className="text-base font-bold mb-2 flex items-center gap-2">
                <Icons.Server size={18} />
                {backend.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-1 overflow-hidden">
                {backend.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-1 rounded soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <Icon
                        size={14}
                        className="text-muted group-hover:text-current transition-colors"
                      />
                      <span className="text-[10px] font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Frontend - Large Card */}
          {frontend && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 md:col-span-2 lg:col-span-3 row-span-1 soft-surface rounded-2xl p-3 flex flex-col"
            >
              <h3 className="text-base font-bold mb-2 flex items-center gap-2">
                <Icons.Monitor size={18} />
                {frontend.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-1 overflow-hidden">
                {frontend.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-1 rounded soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <Icon
                        size={14}
                        className="text-muted group-hover:text-current transition-colors"
                      />
                      <span className="text-[10px] font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Databases */}
          {databases && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 soft-surface rounded-2xl p-3 flex flex-col"
            >
              <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                <Icons.Database size={20} />
                {databases.title}
              </h3>

              <div className="grid grid-cols-2 gap-2">
                {databases.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 rounded-lg soft-hover group flex items-center gap-2 transition-all"
                    >
                      <Icon
                        size={16}
                        className="text-muted group-hover:text-current transition-colors flex-shrink-0"
                      />
                      <span className="text-xs font-medium truncate">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* DevOps */}
          {devops && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 soft-surface rounded-2xl p-3 flex flex-col"
            >
              <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                <Icons.Cloud size={20} />
                {devops.title}
              </h3>

              <div className="grid grid-cols-2 gap-2">
                {devops.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 rounded-lg soft-hover group flex items-center gap-2 transition-all"
                    >
                      <Icon
                        size={16}
                        className="text-muted group-hover:text-current transition-colors flex-shrink-0"
                      />
                      <span className="text-xs font-medium truncate">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Version Control */}
          {versionControl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 soft-surface rounded-2xl p-3 flex flex-col"
            >
              <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                <Icons.GitBranch size={18} />
                {versionControl.title}
              </h3>

              <div className="flex-1 space-y-2">
                {versionControl.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 rounded-lg soft-hover group flex items-center gap-2 transition-all"
                    >
                      <Icon
                        size={14}
                        className="text-muted group-hover:text-current transition-colors flex-shrink-0"
                      />
                      <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Other Tools */}
          {other && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-1 md:col-span-2 lg:col-span-1 row-span-1 soft-surface rounded-2xl p-3 flex flex-col"
            >
              <h3 className="text-base font-bold mb-3 flex items-center gap-2">
                <Icons.Wrench size={18} />
                {other.title}
              </h3>

              <div className="flex-1 space-y-2">
                {other.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 rounded-lg soft-hover group flex items-center gap-2 transition-all"
                    >
                      <Icon
                        size={14}
                        className="text-muted group-hover:text-current transition-colors flex-shrink-0"
                      />
                      <span className="text-xs font-medium">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>

        {/* Full Width Summary Card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="w-full soft-surface rounded-xl p-3 mt-2"
        >
          <div className="flex items-center justify-around">
            <div className="flex items-center gap-2">
              <Icons.Award className="w-8 h-8" style={{ color: 'var(--muted)' }} />
              <div>
                <p className="text-xl font-bold">50+</p>
                <p className="text-[10px]" style={{ color: 'var(--muted)' }}>
                  Technologies
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Icons.TrendingUp className="w-8 h-8" style={{ color: 'var(--muted)' }} />
              <div>
                <p className="text-xl font-bold">8+</p>
                <p className="text-[10px]" style={{ color: 'var(--muted)' }}>
                  Years Experience
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Icons.Zap className="w-8 h-8" style={{ color: 'var(--muted)' }} />
              <div>
                <p className="text-xl font-bold">Full Stack</p>
                <p className="text-[10px]" style={{ color: 'var(--muted)' }}>
                  Development
                </p>
              </div>
            </div>
            <p className="text-xs hidden lg:block">Continuously learning and evolving</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
