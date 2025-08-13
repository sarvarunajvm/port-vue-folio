import React from 'react';
import { motion } from 'framer-motion';
import { educationData } from '../../data/education';
import { personalInfo } from '../../data/about';
import { GraduationCap, Award, User } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">About Me</h2>
          <p className="text-center text-muted mb-12 text-lg">
            Background & Education
          </p>

          <div className="max-w-4xl mx-auto">
            {/* Personal Info Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="soft-surface p-8 mb-8"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="soft-surface-sm p-3">
                  <User size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Who I Am</h3>
                  <p className="text-muted leading-relaxed">
                    I'm {personalInfo.firstname} {personalInfo.lastname}, also known as {personalInfo.nickname}. 
                    With over 8 years of experience in software engineering, I specialize in building 
                    scalable enterprise applications and contributing to open-source projects. 
                    My passion lies in solving complex problems and creating elegant solutions 
                    that make a real impact.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="soft-surface-sm p-4">
                  <p className="text-sm text-muted mb-1">Experience</p>
                  <p className="text-lg font-semibold">8+ Years</p>
                </div>
                <div className="soft-surface-sm p-4">
                  <p className="text-sm text-muted mb-1">Open Source Projects</p>
                  <p className="text-lg font-semibold">3+ Active</p>
                </div>
              </div>
            </motion.div>

            {/* Education Cards */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap size={24} />
                Education
              </h3>
              
              {educationData.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="soft-surface p-6 soft-hover"
                >
                  <div className="flex items-start gap-4">
                    <div className="soft-surface-sm p-3 flex-shrink-0">
                      <Award size={20} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold mb-1">{edu.degree}</h4>
                      <p className="text-muted mb-1">{edu.college}</p>
                      <p className="text-sm text-muted mb-3">{edu.period}</p>
                      
                      <ul className="space-y-2">
                        {edu.points.map((point) => (
                          <li key={point.id} className="flex items-start gap-2">
                            <span className="text-muted mt-1.5 w-1 h-1 rounded-full bg-current flex-shrink-0" />
                            <span className="text-sm">{point.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};