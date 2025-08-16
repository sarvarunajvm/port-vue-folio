import React from 'react';

import { motion } from 'framer-motion';

import { experienceData } from '../data/experience';

const getEmoji = (iconName?: string) => {
  const emojiMap: { [key: string]: string } = {
    CreditCard: '💳',
    TrendingUp: '📈',
    Code2: '💻',
    Network: '🌐',
    Briefcase: '💼',
  };
  return emojiMap[iconName || 'Briefcase'] || '💼';
};

const Experience: React.FC = () => {
  const currentJob = experienceData[0]; // PayPal - current position
  const totalYears = new Date().getFullYear() - 2016;

  return (
    <div className="w-full h-full flex items-start md:items-center justify-center p-4 md:p-6 lg:p-8 overflow-y-auto">
      <div className="w-full max-w-[1400px] h-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 md:gap-4">
          {/* Current Role - Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-6 neu-pressed rounded-xl p-4 md:p-5 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-500/20">
                  <span className="text-3xl md:text-4xl">💳</span>
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold" style={{ color: 'var(--accent)' }}>
                    {currentJob.designation}
                  </h3>
                  <p className="text-lg md:text-xl font-medium opacity-90">{currentJob.company}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-base">📅</span>
                    <span className="text-base font-medium opacity-75">{currentJob.period}</span>
                    <span
                      className="ml-2 px-3 py-1 text-sm font-semibold rounded-full neu-pressed-sm"
                      style={{ color: 'var(--icon-green)' }}
                    >
                      Current
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievements Grid */}
            <div className="flex-1">
              <h4 className="text-base font-semibold mb-3 uppercase tracking-wider opacity-75">
                Key Achievements & Impact
              </h4>
              <div className="space-y-2">
                {currentJob.achievements.map((achievement, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="flex items-start gap-2 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                  >
                    <span className="text-base mt-0.5" style={{ color: 'var(--icon-green)' }}>
                      ✓
                    </span>
                    <span className="text-sm sm:text-base md:text-lg leading-relaxed">
                      {achievement}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-3 gap-2 mt-4">
              {currentJob.impact.map((metric) => (
                <div key={metric.metric} className="neu-pressed-sm p-3 rounded-lg text-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    {metric.type === 'increase' && <span className="text-xl">📈</span>}
                    {metric.type === 'reduction' && <span className="text-xl">📉</span>}
                    {metric.type === 'neutral' && <span className="text-xl">📊</span>}
                    <span className="font-bold text-xl">{metric.value}</span>
                  </div>
                  <p className="text-sm font-medium opacity-75">{metric.metric}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Previous Experience Timeline - Right Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-6 flex flex-col gap-3"
          >
            {/* Summary Header */}
            <div className="neu-pressed rounded-xl p-3 md:p-4 text-center">
              <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4">
                <div>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    {totalYears}+
                  </p>
                  <p className="text-sm sm:text-base font-medium opacity-75">Years</p>
                </div>
                <div className="w-px h-10 sm:h-12 md:h-14 bg-gray-300 dark:bg-gray-700"></div>
                <div>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    4
                  </p>
                  <p className="text-sm sm:text-base font-medium opacity-75">Companies</p>
                </div>
                <div className="w-px h-10 sm:h-12 md:h-14 bg-gray-300 dark:bg-gray-700"></div>
                <div>
                  <p
                    className="text-2xl sm:text-3xl md:text-4xl font-bold"
                    style={{ color: 'var(--accent)' }}
                  >
                    15+
                  </p>
                  <p className="text-sm sm:text-base font-medium opacity-75">Projects</p>
                </div>
              </div>
            </div>

            {/* Previous Roles Timeline */}
            <div className="neu-pressed rounded-xl p-3 md:p-4 flex-1">
              <h4 className="text-base font-semibold mb-4 uppercase tracking-wider opacity-75">
                Career Journey
              </h4>
              <div className="space-y-4 max-h-[60vh] overflow-y-auto">
                {experienceData.slice(1).map((exp, index) => {
                  const emoji = getEmoji(exp.icon);

                  return (
                    <motion.div
                      key={exp.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      className="relative pl-8 md:pl-10 border-l-2 border-gray-300 dark:border-gray-700"
                    >
                      {/* Timeline Dot */}
                      <div className="absolute -left-2 md:-left-2.5 top-2 w-4 md:w-5 h-4 md:h-5 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500"></div>

                      {/* Role Info */}
                      <div className="mb-2 md:mb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-2 md:gap-3">
                            <span className="text-xl md:text-2xl">{emoji}</span>
                            <div>
                              <h3 className="font-semibold text-base sm:text-lg md:text-xl">
                                {exp.designation}
                              </h3>
                              <p className="text-sm sm:text-base md:text-lg font-medium opacity-90">
                                {exp.company}
                              </p>
                              <p className="text-xs sm:text-sm md:text-base font-medium opacity-75">
                                {exp.period}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Key Achievements */}
                      <div className="space-y-1 md:space-y-2 mb-2 md:mb-3">
                        {exp.achievements.slice(0, 3).map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span
                              className="text-sm md:text-base mt-0.5"
                              style={{ color: 'var(--icon-green)' }}
                            >
                              •
                            </span>
                            <span className="text-xs sm:text-sm md:text-base leading-relaxed">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Metrics */}
                      <div className="flex gap-1.5 md:gap-2 flex-wrap">
                        {exp.impact.map((metric) => (
                          <div
                            key={metric.metric}
                            className="neu-pressed-sm px-2 md:px-3 py-1 md:py-1.5 rounded text-center"
                          >
                            <span className="text-xs sm:text-sm font-bold">{metric.value}</span>
                            <span className="text-xs sm:text-sm opacity-75 ml-1">
                              {metric.metric}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
