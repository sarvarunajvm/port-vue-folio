import React, { useEffect, useMemo, useState } from 'react';

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
const Skills: React.FC = () => {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Toggle category expansion
  const toggleCategory = (categoryId: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  // Expand/Collapse all
  const expandAll = () => {
    setExpandedCategories(new Set(skillsData.map((cat) => cat.id)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

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
    <div className="w-full h-full flex items-start md:items-center justify-center p-4 md:p-6 lg:p-8 overflow-y-auto md:overflow-hidden">
      {/* Main Container */}
      <div className="w-full max-w-[1400px] h-auto md:h-[80vh] neu-pressed rounded-2xl p-3 md:p-6 my-auto md:my-0">
        {/* Mobile Accordion View */}
        {isMobile ? (
          <div className="flex flex-col">
            {/* Expand/Collapse All Buttons */}
            <div className="flex justify-end gap-2 mb-4">
              <button
                onClick={expandAll}
                className="px-3 py-1.5 text-xs font-medium rounded-lg neu-flat hover:neu-pressed-sm transition-all"
                style={{ color: 'var(--accent)' }}
              >
                Expand All
              </button>
              <button
                onClick={collapseAll}
                className="px-3 py-1.5 text-xs font-medium rounded-lg neu-flat hover:neu-pressed-sm transition-all"
                style={{ color: 'var(--accent)' }}
              >
                Collapse All
              </button>
            </div>

            {/* Accordion List */}
            <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
              {skillsData.map((category, index) => {
                const categoryEmoji = {
                  backend: '🖥️',
                  frontend: '🖥️',
                  databases: '🗄️',
                  devops: '☁️',
                  'tools-collaboration': '🔧',
                }[category.id];

                const categoryColor = {
                  backend: 'var(--icon-blue)',
                  frontend: 'var(--accent)',
                  databases: 'var(--icon-green)',
                  devops: 'var(--icon-purple)',
                  'tools-collaboration': 'var(--icon-red)',
                }[category.id];

                const isExpanded = expandedCategories.has(category.id);

                return (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="neu-pressed-sm rounded-lg overflow-hidden"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleCategory(category.id)}
                      className="w-full p-4 flex items-center justify-between hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            backgroundColor: `${categoryColor}20`,
                            borderWidth: '2px',
                            borderColor: categoryColor,
                            borderStyle: 'solid',
                          }}
                        >
                          <span className="text-xl">{categoryEmoji}</span>
                        </div>
                        <h3 className="text-base font-bold" style={{ color: categoryColor }}>
                          {category.title}
                        </h3>
                      </div>
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-lg"
                      >
                        ⬇️
                      </motion.span>
                    </button>

                    {/* Accordion Content */}
                    <motion.div
                      initial={false}
                      animate={{
                        height: isExpanded ? 'auto' : 0,
                        opacity: isExpanded ? 1 : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 pt-0 space-y-2">
                        {category.skills.map((skill) => {
                          const emoji = getEmoji(skill.icon);
                          const proficiencyColor = getProficiencyColor(skill.proficiency);

                          return (
                            <div
                              key={skill.id}
                              className="flex items-center gap-3 p-2 rounded-lg neu-flat"
                              style={{ backgroundColor: `${proficiencyColor}10` }}
                            >
                              <div
                                className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                                style={{
                                  backgroundColor: `${proficiencyColor}20`,
                                  borderWidth: '1px',
                                  borderColor: proficiencyColor,
                                  borderStyle: 'solid',
                                }}
                              >
                                <span className="text-base">{emoji}</span>
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium">{skill.name}</div>
                                <div className="text-xs opacity-60 capitalize">
                                  {skill.proficiency}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Legend */}
            <div className="flex flex-wrap justify-center gap-3 mt-4 text-xs">
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--icon-green)' }}
                />
                <span className="opacity-60">Expert</span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--icon-blue)' }}
                />
                <span className="opacity-60">Advanced</span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--accent)' }}
                />
                <span className="opacity-60">Intermediate</span>
              </div>
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: 'var(--icon-purple)' }}
                />
                <span className="opacity-60">Beginner</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="h-full flex flex-col">
            {/* Desktop Grid View */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 overflow-hidden">
              {columnLayout.columns.map((column, index) => (
                <motion.div
                  key={column.category.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1, ...SPRING_CONFIG.DEFAULT }}
                  className="flex flex-col h-full"
                  onMouseEnter={() => setHoveredCategory(column.category.id)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  {/* Category Header */}
                  <div className="flex flex-col items-center mb-3 md:mb-4 p-3 md:p-4 rounded-lg neu-pressed-sm flex-shrink-0">
                    <div
                      className="w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mb-2 md:mb-3"
                      style={{
                        backgroundColor:
                          hoveredCategory === column.category.id
                            ? `${column.color}20`
                            : 'transparent',
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
                  <div className="flex-1 space-y-2 md:space-y-3 overflow-y-auto min-h-0">
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
        )}
      </div>
    </div>
  );
};

export default Skills;
