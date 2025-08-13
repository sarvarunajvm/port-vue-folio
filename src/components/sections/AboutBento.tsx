import React from 'react';

import { motion } from 'framer-motion';
import { Award, Book, GraduationCap, Heart, MapPin, User } from 'lucide-react';

import { personalInfo } from '../../data/about';
import { educationData } from '../../data/education';

export const AboutBento: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="w-full h-full max-w-[1600px] flex flex-col">
        <div className="text-center mb-4">
          <p className="text-lg" style={{ color: 'var(--muted)' }}>
            Background & Education
          </p>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 h-full"
          style={{ gridTemplateRows: 'repeat(3, 1fr)' }}
        >
          {/* Personal Info - Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="soft-surface p-6 rounded-2xl soft-hover group col-span-2 md:col-span-2 lg:col-span-3 row-span-2"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="soft-surface-sm p-3 rounded-lg">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                  <p className="leading-relaxed" style={{ color: 'var(--muted)' }}>
                    I'm {personalInfo.firstname} {personalInfo.lastname}, also known as{' '}
                    {personalInfo.nickname}. With over 8 years of experience in software
                    engineering, I specialize in building scalable enterprise applications and
                    contributing to open-source projects.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-auto">
                <div className="soft-surface-sm p-3 rounded-lg">
                  <p className="text-xs mb-1" style={{ color: 'var(--muted)' }}>
                    Experience
                  </p>
                  <p className="text-lg font-bold">8+ Years</p>
                </div>
                <div className="soft-surface-sm p-3 rounded-lg">
                  <p className="text-xs mb-1" style={{ color: 'var(--muted)' }}>
                    Focus
                  </p>
                  <p className="text-lg font-bold">Enterprise Apps</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="soft-surface p-6 rounded-2xl soft-hover group col-span-1 md:col-span-2 lg:col-span-1 row-span-1"
          >
            <div className="h-full flex flex-col justify-center items-center text-center">
              <MapPin className="w-10 h-10 mb-3" style={{ color: 'var(--muted)' }} />
              <p className="text-lg font-bold mb-1">India</p>
              <p className="text-xs" style={{ color: 'var(--muted)' }}>
                Based in Chennai
              </p>
            </div>
          </motion.div>

          {/* Interests Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="soft-surface p-6 rounded-2xl soft-hover group col-span-1 md:col-span-2 lg:col-span-2 row-span-1"
          >
            <div className="h-full flex flex-col justify-center">
              <Heart className="w-8 h-8 mb-3" style={{ color: 'var(--muted)' }} />
              <h4 className="font-semibold mb-2">Interests</h4>
              <div className="space-y-1">
                <p className="text-xs">• Open Source</p>
                <p className="text-xs">• Cloud Architecture</p>
                <p className="text-xs">• Problem Solving</p>
              </div>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="soft-surface p-6 rounded-2xl soft-hover group col-span-2 md:col-span-4 lg:col-span-3 row-span-1"
          >
            <div className="h-full flex flex-col justify-center text-center">
              <Book className="w-10 h-10 mx-auto mb-3" style={{ color: 'var(--muted)' }} />
              <p className="text-sm font-medium italic">
                "Continuous learning is the minimum requirement for success in any field"
              </p>
              <p className="text-xs mt-2" style={{ color: 'var(--muted)' }}>
                — Brian Tracy
              </p>
            </div>
          </motion.div>

          {/* Education Cards - Last row */}
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="soft-surface p-6 rounded-2xl soft-hover group col-span-2 md:col-span-2 lg:col-span-3 row-span-2"
            >
              <div className="h-full flex flex-col">
                <div className="flex items-start gap-3 mb-3">
                  <div className="soft-surface-sm p-2 rounded-lg">
                    <GraduationCap size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{edu.degree}</h4>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      {edu.college}
                    </p>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      {edu.period}
                    </p>
                  </div>
                </div>

                <ul className="space-y-2 flex-1">
                  {edu.points.map((point) => (
                    <li key={point.id} className="flex items-start gap-2">
                      <Award size={12} className="mt-1 text-green-500 flex-shrink-0" />
                      <span className="text-xs">{point.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
