import React from 'react';

import { motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowUp,
  Briefcase,
  Calendar,
  Code2,
  CreditCard,
  Minus,
  Network,
  Target,
  TrendingUp,
} from 'lucide-react';

import { experienceData } from '../../data/experience';

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: React.ComponentType<{ size?: number }> } = {
    CreditCard,
    TrendingUp,
    Code2,
    Network,
  };
  return iconMap[iconName] || Briefcase;
};

export const ExperienceBento: React.FC = () => {
  const currentJob = experienceData[0]; // PayPal - current position

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col">
        <div className="text-center mb-1 sm:mb-2">
          <p
            className="text-sm sm:text-base md:text-lg font-medium"
            style={{ color: 'var(--muted)' }}
          >
            8+ years of building scalable solutions
          </p>
        </div>

        <div className="grid grid-cols-6 gap-1 sm:gap-1.5 md:gap-2 flex-1">
          {/* Current Role - Full Width First Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-6 soft-surface rounded-lg md:rounded-2xl p-3 sm:p-4 md:p-5 flex flex-col"
          >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                  <CreditCard size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg md:text-xl font-bold">
                    {currentJob.designation}
                  </h3>
                  <p className="text-sm sm:text-base font-medium" style={{ color: 'var(--muted)' }}>
                    {currentJob.company}
                  </p>
                  <div className="flex items-center gap-1 sm:gap-2 mt-0.5 sm:mt-1">
                    <Calendar size={10} className="sm:w-3 sm:h-3" />
                    <span className="text-[10px] sm:text-xs font-medium">{currentJob.period}</span>
                  </div>
                </div>
              </div>
              <span className="soft-surface-sm px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-semibold rounded-full">
                Current
              </span>
            </div>

            <div className="flex-1 mb-2 sm:mb-3">
              <h4
                className="text-[10px] sm:text-xs font-semibold mb-1 sm:mb-2 uppercase tracking-wider"
                style={{ color: 'var(--muted)' }}
              >
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0.5 sm:gap-1">
                {currentJob.achievements.slice(0, 4).map((achievement, i) => (
                  <div key={i} className="flex items-start gap-0.5 sm:gap-1">
                    <Target
                      size={8}
                      className="mt-0.5 text-green-500 flex-shrink-0 sm:w-2.5 sm:h-2.5"
                    />
                    <span className="text-[10px] sm:text-xs font-medium">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-1 sm:gap-2">
              {currentJob.impact.map((metric) => (
                <div
                  key={metric.metric}
                  className="soft-surface-sm p-1.5 sm:p-2 rounded-lg text-center"
                >
                  <div className="flex items-center justify-center gap-0.5 sm:gap-1">
                    {metric.type === 'increase' && (
                      <ArrowUp
                        size={10}
                        className="text-green-600 dark:text-green-400 sm:w-3 sm:h-3"
                      />
                    )}
                    {metric.type === 'reduction' && (
                      <ArrowDown
                        size={10}
                        className="text-blue-600 dark:text-blue-400 sm:w-3 sm:h-3"
                      />
                    )}
                    {metric.type === 'neutral' && (
                      <Minus
                        size={10}
                        className="sm:w-3 sm:h-3"
                        style={{ color: 'var(--muted)' }}
                      />
                    )}
                    <span className="font-bold text-xs sm:text-sm">{metric.value}</span>
                  </div>
                  <p
                    className="text-[9px] sm:text-[10px] font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    {metric.metric}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary Card - Second Row Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-3 soft-surface rounded-lg md:rounded-2xl p-3 sm:p-4 md:p-6 flex flex-col justify-center"
          >
            <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Core Expertise</h4>
            <div className="space-y-1 sm:space-y-2">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-500 rounded-full"></div>
                <span className="text-xs sm:text-sm font-medium">Team Leadership</span>
              </div>
            </div>
          </motion.div>

          {/* Timeline Summary - Second Row Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-3 soft-surface rounded-lg md:rounded-2xl p-3 sm:p-4 flex flex-col justify-center items-center text-center"
          >
            <div className="inline-flex p-2.5 rounded-lg mb-1 sm:mb-2 bg-gradient-to-br from-green-500/10 to-emerald-500/10 mx-auto">
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <p className="text-2xl sm:text-3xl font-bold mb-0.5 sm:mb-1">4</p>
            <p className="text-xs sm:text-sm font-medium" style={{ color: 'var(--muted)' }}>
              Companies
            </p>
            <p className="text-[10px] sm:text-xs mt-0.5 sm:mt-1 font-medium">2016 - Present</p>
          </motion.div>

          {/* Previous Roles - Third Row (3 columns) */}
          {experienceData.slice(1).map((exp, index) => {
            const Icon = getIcon(exp.icon);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="col-span-2 soft-surface rounded-lg md:rounded-2xl p-2.5 sm:p-3 flex flex-col"
              >
                <div className="flex items-start gap-1.5 sm:gap-2 mb-1.5 sm:mb-2">
                  <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                    <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-xs sm:text-sm">{exp.designation}</h3>
                    <p
                      className="text-[10px] sm:text-xs font-medium"
                      style={{ color: 'var(--muted)' }}
                    >
                      {exp.company}
                    </p>
                    <p
                      className="text-[9px] sm:text-[10px] font-medium"
                      style={{ color: 'var(--muted)' }}
                    >
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-0.5">
                    {exp.achievements.slice(0, 2).map((achievement, i) => (
                      <li
                        key={i}
                        className="text-[10px] sm:text-[11px] flex items-start gap-0.5 sm:gap-1 font-medium"
                      >
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-0.5 sm:gap-1 mt-1.5 sm:mt-2">
                  {exp.impact.slice(0, 2).map((metric) => (
                    <div
                      key={metric.metric}
                      className="soft-surface-sm px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-center"
                    >
                      <span className="text-[10px] sm:text-xs font-bold">{metric.value}</span>
                      <p
                        className="text-[8px] sm:text-[9px] font-medium"
                        style={{ color: 'var(--muted)' }}
                      >
                        {metric.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
