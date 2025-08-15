import React, { useMemo, useState } from 'react';

import { motion } from 'framer-motion';

import { SPRING_CONFIG, cardVariants } from '../../../shared/constants/animations';
import { skillsData } from '../data/skills';

const getEmoji = (iconName?: string) => {
  const emojiMap: { [key: string]: string } = {
    Coffee: '☕',
    Leaf: '🍃',
    Shield: '🛡️',
    Api: '🔗',
    Code: '💻',
    FileCode: '📄',
    Cable: '🔌',
    Database: '🗄️',
    Package: '📦',
    Package2: '📦',
    TestTube: '🧪',
    TestTube2: '🧪',
    Hexagon: '⬡',
    Triangle: '△',
    Atom: '⚛️',
    Code2: '💻',
    Store: '🏪',
    Layers: '📚',
    HardDrive: '💾',
    Zap: '⚡',
    Cloud: '☁️',
    Table: '📊',
    Workflow: '🔄',
    Github: '🐙',
    Container: '📦',
    CloudCog: '⚙️',
    Activity: '📈',
    BarChart3: '📊',
    LineChart: '📈',
    TrendingUp: '📈',
    GitBranch: '🌿',
    Kanban: '📋',
    BookOpen: '📖',
    FileText: '📄',
    MessageSquare: '💬',
    Key: '🔑',
    Lock: '🔒',
    ScanLine: '🔍',
    Server: '🖥️',
    Monitor: '🖥️',
    Wrench: '🔧',
    ArrowRight: '➡️',
  };

  return emojiMap[iconName || 'Code2'] || '💻';
};

const getProficiencyColor = (proficiency?: string) => {
  switch (proficiency) {
    case 'expert':
      return 'var(--icon-green)';
    case 'advanced':
      return 'var(--icon-blue)';
    case 'intermediate':
      return 'var(--accent)';
    case 'beginner':
      return 'var(--icon-purple)';
    default:
      return 'var(--muted)';
  }
};

// Main Component - Hierarchical Skill Tree
const SkillsBento: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);

  // Calculate 6-column layout
  const columnLayout = useMemo(() => {
    const categoryEmojis: { [key: string]: string } = {
      backend: '🖥️',
      frontend: '🖥️',
      databases: '🗄️',
      devops: '☁️',
      'tools-collaboration': '🔧',
    };

    const categoryColors: { [key: string]: string } = {
      backend: 'var(--icon-blue)',
      frontend: 'var(--accent)',
      databases: 'var(--icon-green)',
      devops: 'var(--icon-purple)',
      'tools-collaboration': 'var(--icon-red)',
    };

    const columns = skillsData.map((category, index) => ({
      category,
      emoji: categoryEmojis[category.id],
      color: categoryColors[category.id],
      columnIndex: index,
    }));

    return { columns, categoryColors };
  }, []);

  return (
    <div className="w-full h-full flex flex-col p-2 md:p-4">
      {/* Main Grid Container */}
      <div className="flex-1 neu-pressed rounded-2xl p-3 md:p-6 overflow-hidden">
        {/* 5-Column Grid - Responsive */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 h-full overflow-y-auto md:overflow-hidden">
          {columnLayout.columns.map((column, index) => (
            <motion.div
              key={column.category.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: index * 0.1, ...SPRING_CONFIG.DEFAULT }}
              className="flex flex-col h-full min-h-0"
              onMouseEnter={() => setHoveredCategory(column.category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              {/* Category Header */}
              <div className="flex flex-col items-center mb-3 md:mb-4 p-3 md:p-4 rounded-lg neu-pressed-sm flex-shrink-0">
                <div
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 md:mb-3"
                  style={{
                    backgroundColor:
                      hoveredCategory === column.category.id ? `${column.color}20` : 'transparent',
                    borderWidth: '2px',
                    borderColor: column.color,
                    borderStyle: 'solid',
                  }}
                >
                  <span className="text-3xl md:text-4xl">{column.emoji}</span>
                </div>
                <h3
                  className="text-sm md:text-base lg:text-lg font-bold text-center leading-tight"
                  style={{ color: column.color }}
                >
                  {column.category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex-1 space-y-2 md:space-y-3 overflow-y-auto md:overflow-visible min-h-0">
                {column.category.skills.map((skill, skillIndex) => {
                  const emoji = getEmoji(skill.icon);
                  const proficiencyColor = getProficiencyColor(skill.proficiency);

                  return (
                    <motion.div
                      key={skill.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + skillIndex * 0.05, duration: 0.3 }}
                      className="group"
                    >
                      <motion.div
                        className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg neu-flat hover:neu-pressed-sm transition-all duration-200 cursor-pointer"
                        style={{
                          backgroundColor:
                            hoveredCategory === column.category.id
                              ? `${proficiencyColor}10`
                              : 'transparent',
                        }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        transition={SPRING_CONFIG.DEFAULT}
                      >
                        <div
                          className="w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{
                            backgroundColor: `${proficiencyColor}20`,
                            borderWidth: '1px',
                            borderColor: proficiencyColor,
                            borderStyle: 'solid',
                          }}
                        >
                          <span className="text-lg md:text-xl">{emoji}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm md:text-base font-medium truncate">
                            {skill.name}
                          </div>
                          <div className="text-xs md:text-sm opacity-60 capitalize">
                            {skill.proficiency}
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap justify-center gap-3 md:gap-4 mt-4 md:mt-6 text-xs md:text-sm flex-shrink-0"
        >
          <div className="flex items-center gap-1 md:gap-2">
            <div
              className="w-3 h-3 md:w-4 md:h-4 rounded-full"
              style={{ backgroundColor: 'var(--icon-green)' }}
            />
            <span className="opacity-60">Expert</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div
              className="w-3 h-3 md:w-4 md:h-4 rounded-full"
              style={{ backgroundColor: 'var(--icon-blue)' }}
            />
            <span className="opacity-60">Advanced</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div
              className="w-3 h-3 md:w-4 md:h-4 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span className="opacity-60">Intermediate</span>
          </div>
          <div className="flex items-center gap-1 md:gap-2">
            <div
              className="w-3 h-3 md:w-4 md:h-4 rounded-full"
              style={{ backgroundColor: 'var(--icon-purple)' }}
            />
            <span className="opacity-60">Beginner</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsBento;
