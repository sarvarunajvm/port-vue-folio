import React from 'react';
import { motion } from 'framer-motion';
import { experienceData } from '../../data/experience';
import { CreditCard, TrendingUp, Code2, Network, ArrowUp, ArrowDown, Minus } from 'lucide-react';

const getIcon = (iconName: string) => {
  const iconMap: { [key: string]: any } = {
    CreditCard,
    TrendingUp,
    Code2,
    Network,
  };
  return iconMap[iconName] || Code2;
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Professional Experience</h2>
          <p className="text-center text-muted mb-12 text-lg">
            8+ years of building scalable solutions
          </p>

          <div className="max-w-4xl mx-auto">
            {experienceData.map((exp, index) => {
              const Icon = getIcon(exp.icon);
              
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="mb-8 last:mb-0"
                >
                  <div className="soft-surface p-6 soft-hover">
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Icon */}
                      <div className="soft-surface-sm p-4 flex-shrink-0">
                        <Icon size={32} />
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <div className="mb-4">
                          <h3 className="text-xl font-semibold mb-1">{exp.designation}</h3>
                          <p className="text-lg font-medium text-muted">{exp.company}</p>
                          <p className="text-sm text-muted">{exp.period}</p>
                        </div>

                        {/* Achievements */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2 text-muted uppercase tracking-wider">
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-muted mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                                <span className="text-sm">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Impact Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {exp.impact.map((metric) => (
                            <div
                              key={metric.metric}
                              className="soft-surface-sm p-3 text-center"
                            >
                              <div className="flex items-center justify-center gap-1 mb-1">
                                {metric.type === 'increase' && (
                                  <ArrowUp size={16} className="text-green-600 dark:text-green-400" />
                                )}
                                {metric.type === 'reduction' && (
                                  <ArrowDown size={16} className="text-blue-600 dark:text-blue-400" />
                                )}
                                {metric.type === 'neutral' && (
                                  <Minus size={16} className="text-muted" />
                                )}
                                <span className="font-bold text-lg">{metric.value}</span>
                              </div>
                              <p className="text-xs text-muted">{metric.metric}</p>
                            </div>
                          ))}
                        </div>
                      </div>
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