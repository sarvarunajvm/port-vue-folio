import React from 'react';

import { motion } from 'framer-motion';
import { Award, Book, GraduationCap, Heart, MapPin, User } from 'lucide-react';

import { personalInfo } from '../../data/about';
import { educationData } from '../../data/education';

export const AboutBento: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="text-center mb-2">
        <p
          className="text-sm sm:text-base md:text-lg font-medium"
          style={{ color: 'var(--muted)' }}
        >
          Background & Education
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-1 sm:gap-1.5 md:gap-2 flex-1">
        {/* Personal Info - Large Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-2xl soft-hover group col-span-2 md:col-span-2 lg:col-span-3"
        >
          <div className="h-full flex flex-col">
            <div className="flex items-start gap-2 sm:gap-3 md:gap-4 mb-2">
              <div className="p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20">
                <User size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-1">Who I Am</h3>
                <p
                  className="text-xs sm:text-sm md:text-base leading-relaxed font-medium"
                  style={{ color: 'var(--muted)' }}
                >
                  I'm {personalInfo.firstname} {personalInfo.lastname}, also known as{' '}
                  {personalInfo.nickname}. With over 8 years of experience in software engineering,
                  I specialize in building scalable enterprise applications and contributing to
                  open-source projects.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-1 sm:gap-2 mt-auto">
              <div className="soft-surface-sm p-2 sm:p-2.5 md:p-3 rounded-lg">
                <p
                  className="text-[10px] sm:text-xs mb-1 font-medium"
                  style={{ color: 'var(--muted)' }}
                >
                  Experience
                </p>
                <p className="text-sm sm:text-base md:text-lg font-bold">8+ Years</p>
              </div>
              <div className="soft-surface-sm p-2 sm:p-2.5 md:p-3 rounded-lg">
                <p
                  className="text-[10px] sm:text-xs mb-1 font-medium"
                  style={{ color: 'var(--muted)' }}
                >
                  Focus
                </p>
                <p className="text-sm sm:text-base md:text-lg font-bold">Enterprise Apps</p>
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
          className="soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-2xl soft-hover group col-span-1 md:col-span-2 lg:col-span-1"
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="inline-flex p-2.5 rounded-lg mb-1 sm:mb-2 bg-gradient-to-br from-red-500/20 to-pink-500/20 mx-auto">
              <MapPin className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-bold mb-1">India</p>
            <p className="text-[10px] sm:text-xs font-medium" style={{ color: 'var(--muted)' }}>
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
          className="soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-2xl soft-hover group col-span-1 md:col-span-2 lg:col-span-2"
        >
          <div className="h-full flex flex-col justify-center items-center text-center">
            <div className="inline-flex p-2 rounded-lg mb-1 sm:mb-2 bg-gradient-to-br from-rose-500/20 to-pink-500/20">
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7" />
            </div>
            <h4 className="text-sm sm:text-base font-semibold mb-1">Interests</h4>
            <div className="space-y-0.5">
              <p className="text-[10px] sm:text-xs font-medium">• Open Source</p>
              <p className="text-[10px] sm:text-xs font-medium">• Cloud Architecture</p>
              <p className="text-[10px] sm:text-xs font-medium">• Problem Solving</p>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Card - Full width second row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="soft-surface p-3 sm:p-4 md:p-5 rounded-lg md:rounded-2xl soft-hover group col-span-2 md:col-span-4 lg:col-span-6"
        >
          <div className="h-full flex flex-col justify-center text-center">
            <div className="inline-flex p-3 rounded-lg mb-2 sm:mb-3 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 mx-auto">
              <Book className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
            </div>
            <p className="text-sm sm:text-base md:text-lg font-medium italic">
              "Continuous learning is the minimum requirement for success in any field"
            </p>
            <p
              className="text-xs sm:text-sm mt-1 sm:mt-2 font-medium"
              style={{ color: 'var(--muted)' }}
            >
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
            className="soft-surface p-2 sm:p-3 md:p-4 rounded-lg md:rounded-2xl soft-hover group col-span-2 md:col-span-2 lg:col-span-3"
          >
            <div className="h-full flex flex-col">
              <div className="flex items-start gap-2 sm:gap-3 mb-1 sm:mb-2">
                <div className="p-1.5 sm:p-2 rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20">
                  <GraduationCap size={16} className="sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-xs sm:text-sm">{edu.degree}</h4>
                  <p
                    className="text-[10px] sm:text-xs font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    {edu.college}
                  </p>
                  <p
                    className="text-[10px] sm:text-xs font-medium"
                    style={{ color: 'var(--muted)' }}
                  >
                    {edu.period}
                  </p>
                </div>
              </div>

              <ul className="space-y-0.5 sm:space-y-1 flex-1">
                {edu.points.map((point) => (
                  <li key={point.id} className="flex items-start gap-1 sm:gap-2">
                    <Award
                      size={10}
                      className="mt-0.5 sm:mt-1 text-green-500 flex-shrink-0 sm:w-3 sm:h-3"
                    />
                    <span className="text-[10px] sm:text-xs font-medium">{point.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
