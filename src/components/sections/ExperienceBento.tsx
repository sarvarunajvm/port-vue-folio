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
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full h-full max-w-[1600px] flex flex-col">
        <div className="text-center mb-2">
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            8+ years of building scalable solutions
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 h-full"
          style={{ gridTemplateRows: '1.2fr 1fr 1fr' }}
        >
          {/* Current Role - Featured Large Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="col-span-2 md:col-span-4 lg:col-span-4 row-span-2 soft-surface rounded-2xl p-4 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-start gap-3">
                <div className="soft-surface-sm p-3 rounded-lg">
                  <CreditCard size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">{currentJob.designation}</h3>
                  <p className="text-base font-medium" style={{ color: 'var(--muted)' }}>
                    {currentJob.company}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar size={12} />
                    <span className="text-xs">{currentJob.period}</span>
                  </div>
                </div>
              </div>
              <span className="soft-surface-sm px-3 py-1 text-xs font-medium rounded-full">
                Current
              </span>
            </div>

            <div className="flex-1 mb-3">
              <h4
                className="text-xs font-semibold mb-2 uppercase tracking-wider"
                style={{ color: 'var(--muted)' }}
              >
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                {currentJob.achievements.slice(0, 4).map((achievement, i) => (
                  <div key={i} className="flex items-start gap-1">
                    <Target size={10} className="mt-0.5 text-green-500 flex-shrink-0" />
                    <span className="text-xs">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {currentJob.impact.map((metric) => (
                <div key={metric.metric} className="soft-surface-sm p-2 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-1">
                    {metric.type === 'increase' && (
                      <ArrowUp size={12} className="text-green-600 dark:text-green-400" />
                    )}
                    {metric.type === 'reduction' && (
                      <ArrowDown size={12} className="text-blue-600 dark:text-blue-400" />
                    )}
                    {metric.type === 'neutral' && (
                      <Minus size={12} style={{ color: 'var(--muted)' }} />
                    )}
                    <span className="font-bold text-sm">{metric.value}</span>
                  </div>
                  <p className="text-[10px]" style={{ color: 'var(--muted)' }}>
                    {metric.metric}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 soft-surface rounded-2xl p-4 flex flex-col justify-center items-center text-center"
          >
            <Briefcase className="w-10 h-10 mb-2" style={{ color: 'var(--muted)' }} />
            <p className="text-3xl font-bold mb-1">4</p>
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Companies
            </p>
            <p className="text-xs mt-1">2016 - Present</p>
          </motion.div>

          {/* Skills Summary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 soft-surface rounded-2xl p-6 flex flex-col justify-center"
          >
            <h4 className="font-semibold mb-3">Core Expertise</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm">Enterprise Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm">Cloud Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm">Team Leadership</span>
              </div>
            </div>
          </motion.div>

          {/* Previous Roles */}
          {experienceData.slice(1).map((exp, index) => {
            const Icon = getIcon(exp.icon);

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="col-span-2 md:col-span-2 lg:col-span-2 row-span-1 soft-surface rounded-2xl p-3 flex flex-col"
              >
                <div className="flex items-start gap-2 mb-2">
                  <div className="soft-surface-sm p-2 rounded-lg">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-sm">{exp.designation}</h3>
                    <p className="text-xs font-medium" style={{ color: 'var(--muted)' }}>
                      {exp.company}
                    </p>
                    <p className="text-[10px]" style={{ color: 'var(--muted)' }}>
                      {exp.period}
                    </p>
                  </div>
                </div>

                <div className="flex-1">
                  <ul className="space-y-0.5">
                    {exp.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="text-[11px] flex items-start gap-1">
                        <span className="text-green-500 mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="grid grid-cols-2 gap-1 mt-2">
                  {exp.impact.slice(0, 2).map((metric) => (
                    <div
                      key={metric.metric}
                      className="soft-surface-sm px-2 py-1 rounded text-center"
                    >
                      <span className="text-xs font-bold">{metric.value}</span>
                      <p className="text-[9px]" style={{ color: 'var(--muted)' }}>
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
