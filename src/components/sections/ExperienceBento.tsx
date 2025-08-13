import React from 'react';
import { experienceData } from '../../data/experience';
import { BentoGrid, BentoCard } from '../BentoGrid';
import { CreditCard, TrendingUp, Code2, Network, ArrowUp, ArrowDown, Minus, Calendar, Briefcase, Target } from 'lucide-react';

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
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
    <div className="w-full">
      <div className="text-center mb-8">
        <p className="text-lg" style={{ color: 'var(--muted)' }}>
          8+ years of building scalable solutions
        </p>
      </div>

        <BentoGrid>
          {/* Current Role - Featured Large Card */}
          <BentoCard size="xl" delay={0.1}>
            <div className="h-full flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="soft-surface-sm p-4 rounded-lg">
                    <CreditCard size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{currentJob.designation}</h3>
                    <p className="text-lg font-medium" style={{ color: 'var(--muted)' }}>{currentJob.company}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Calendar size={14} />
                      <span className="text-sm">{currentJob.period}</span>
                    </div>
                  </div>
                </div>
                <span className="soft-surface-sm px-3 py-1 text-xs font-medium rounded-full">Current</span>
              </div>

              <div className="mb-4">
                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: 'var(--muted)' }}>
                  Key Achievements
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {currentJob.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Target size={14} className="mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-auto">
                {currentJob.impact.map((metric) => (
                  <div key={metric.metric} className="soft-surface-sm p-3 rounded-lg text-center">
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {metric.type === 'increase' && (
                        <ArrowUp size={16} className="text-green-600 dark:text-green-400" />
                      )}
                      {metric.type === 'reduction' && (
                        <ArrowDown size={16} className="text-blue-600 dark:text-blue-400" />
                      )}
                      {metric.type === 'neutral' && (
                        <Minus size={16} style={{ color: 'var(--muted)' }} />
                      )}
                      <span className="font-bold text-lg">{metric.value}</span>
                    </div>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>{metric.metric}</p>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* Timeline Summary */}
          <BentoCard size="small" delay={0.2}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <Briefcase className="w-10 h-10 mb-3" style={{ color: 'var(--muted)' }} />
              <p className="text-3xl font-bold mb-1">4</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Companies</p>
              <p className="text-xs mt-2">2016 - Present</p>
            </div>
          </BentoCard>

          {/* Previous Roles */}
          {experienceData.slice(1).map((exp, index) => {
            const Icon = getIcon(exp.icon);
            
            return (
              <BentoCard key={exp.id} size="medium" delay={0.3 + index * 0.1}>
                <div className="h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="soft-surface-sm p-3 rounded-lg">
                      <Icon size={20} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{exp.designation}</h3>
                      <p className="text-sm font-medium" style={{ color: 'var(--muted)' }}>{exp.company}</p>
                      <p className="text-xs" style={{ color: 'var(--muted)' }}>{exp.period}</p>
                    </div>
                  </div>

                  <div className="flex-1">
                    <ul className="space-y-1">
                      {exp.achievements.slice(0, 2).map((achievement, i) => (
                        <li key={i} className="text-xs flex items-start gap-1">
                          <span className="text-green-500 mt-0.5">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {exp.impact.slice(0, 2).map((metric) => (
                      <div key={metric.metric} className="soft-surface-sm px-2 py-1 rounded text-center">
                        <span className="text-xs font-bold">{metric.value}</span>
                        <p className="text-xs" style={{ color: 'var(--muted)', fontSize: '10px' }}>
                          {metric.metric}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </BentoCard>
            );
          })}
        </BentoGrid>
    </div>
  );
};