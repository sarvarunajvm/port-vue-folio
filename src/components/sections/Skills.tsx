import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../../data/skills';
import * as Icons from 'lucide-react';

const getIcon = (iconName?: string) => {
  if (!iconName) return Icons.Code2;
  
  const iconMap: { [key: string]: any } = {
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

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-center mb-4">Technical Skills</h2>
          <p className="text-center text-muted mb-12 text-lg">
            Full-stack expertise across modern technologies
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillsData.map((category, categoryIndex) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="soft-surface p-6"
              >
                <h3 className="text-lg font-semibold mb-4 text-center">
                  {category.title}
                </h3>
                
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => {
                    const Icon = getIcon(skill.icon);
                    
                    return (
                      <motion.div
                        key={skill.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: categoryIndex * 0.1 + skillIndex * 0.05
                        }}
                        className="soft-surface-sm p-3 soft-hover group flex items-center gap-2"
                      >
                        <Icon size={16} className="text-muted group-hover:text-current transition-colors" />
                        <span className="text-sm font-medium">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};