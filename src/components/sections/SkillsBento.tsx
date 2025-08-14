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
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col">
        <div className="text-center mb-1 sm:mb-2">
          <p
            className="text-base sm:text-lg md:text-xl font-medium"
            style={{ color: 'var(--muted)' }}
          >
            Full-stack expertise across modern technologies
          </p>
        </div>

        <div
          className="grid grid-cols-6 gap-1 sm:gap-1.5 md:gap-2 flex-1"
          style={{ gridTemplateRows: 'auto 1fr 1fr' }}
        >
          {/* Full Width Summary Card - First Row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-6 soft-surface rounded-xl md:rounded-2xl lg:rounded-3xl p-1.5 sm:p-2 md:p-2.5"
          >
            <div className="flex flex-row items-center justify-around gap-2 sm:gap-3 md:gap-4">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-yellow-500/10 to-amber-500/10">
                  <Icons.Award className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex sm:items-baseline sm:gap-1">
                  <p className="text-sm sm:text-base md:text-lg font-bold">50+</p>
                  <p
                    className="text-[10px] sm:text-xs md:text-sm font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    Technologies
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-green-500/10 to-emerald-500/10">
                  <Icons.TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex sm:items-baseline sm:gap-1">
                  <p className="text-sm sm:text-base md:text-lg font-bold">8+</p>
                  <p
                    className="text-[10px] sm:text-xs md:text-sm font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    Years Experience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-1.5">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-purple-500/10 to-pink-500/10">
                  <Icons.Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className="flex sm:items-baseline sm:gap-1">
                  <p className="text-sm sm:text-base md:text-lg font-bold">Full Stack</p>
                  <p
                    className="text-[10px] sm:text-xs md:text-sm font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    Development
                  </p>
                </div>
              </div>
              <p className="text-[10px] sm:text-xs md:text-sm font-medium hidden lg:block">
                Continuously learning and evolving
              </p>
            </div>
          </motion.div>

          {/* Backend - Second Row */}
          {backend && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="col-span-2 soft-surface rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold md:font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-blue-500/10 to-indigo-500/10">
                  <Icons.Server className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {backend.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 overflow-hidden">
                {backend.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-violet-500/20 to-purple-500/20 mb-1">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Frontend - Second Row */}
          {frontend && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="col-span-2 soft-surface rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold md:font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
                  <Icons.Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {frontend.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 overflow-hidden">
                {frontend.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-1">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* DevOps - Second Row */}
          {devops && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 soft-surface rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold md:font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-violet-500/10 to-purple-500/10">
                  <Icons.Cloud className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {devops.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 overflow-hidden">
                {devops.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-1">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Databases - Third Row */}
          {databases && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="col-span-2 soft-surface rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold md:font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-emerald-500/10 to-green-500/10">
                  <Icons.Database className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {databases.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 overflow-hidden">
                {databases.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-1">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Version Control - Third Row */}
          {versionControl && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-2 soft-surface rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold md:font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-orange-500/10 to-red-500/10">
                  <Icons.GitBranch className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {versionControl.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 overflow-hidden">
                {versionControl.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-1">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Other Tools - Third Row */}
          {other && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="col-span-2 soft-surface rounded-xl md:rounded-2xl lg:rounded-3xl p-3 sm:p-4 md:p-6 flex flex-col"
            >
              <h3 className="text-sm sm:text-base md:text-lg font-semibold md:font-bold mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                <div className="inline-flex p-1.5 rounded-md bg-gradient-to-br from-pink-500/10 to-rose-500/10">
                  <Icons.Wrench className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                {other.title}
              </h3>

              <div className="flex-1 grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 overflow-hidden">
                {other.skills.map((skill) => {
                  const Icon = getIcon(skill.icon);

                  return (
                    <div
                      key={skill.id}
                      className="soft-surface-sm p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl soft-hover group flex flex-col items-center justify-center transition-all"
                    >
                      <div className="p-1.5 rounded-md bg-gradient-to-br from-blue-500/20 to-indigo-500/20 mb-1">
                        <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                      </div>
                      <span className="text-[9px] sm:text-[10px] md:text-xs font-medium text-center truncate w-full">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};
