import React from 'react';
import { skillsData } from '../../data/skills';
import { BentoGrid, BentoCard } from '../BentoGrid';
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

export const SkillsBento: React.FC = () => {
  // Prioritize categories for better Bento layout
  const prioritizedCategories = [
    skillsData.find(c => c.id === 'backend'),
    skillsData.find(c => c.id === 'frontend'),
    skillsData.find(c => c.id === 'databases'),
    skillsData.find(c => c.id === 'devops'),
    ...skillsData.filter(c => !['backend', 'frontend', 'databases', 'devops'].includes(c.id))
  ].filter(Boolean) as typeof skillsData;

  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <p className="text-lg" style={{ color: 'var(--muted)' }}>
          Full-stack expertise across modern technologies
        </p>
      </div>

        <BentoGrid>
          {prioritizedCategories.map((category, categoryIndex) => {
            // Determine size based on category importance
            const size = ['backend', 'frontend'].includes(category.id) ? 'large' : 
                        ['databases', 'devops'].includes(category.id) ? 'medium' : 'small';
            
            return (
              <BentoCard
                key={category.id}
                size={size as any}
                delay={categoryIndex * 0.1}
                className="overflow-hidden"
              >
                <div className="h-full flex flex-col">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    {category.id === 'backend' && <Icons.Server size={20} />}
                    {category.id === 'frontend' && <Icons.Monitor size={20} />}
                    {category.id === 'databases' && <Icons.Database size={20} />}
                    {category.id === 'devops' && <Icons.Cloud size={20} />}
                    {category.id === 'version-control' && <Icons.GitBranch size={20} />}
                    {category.id === 'other' && <Icons.Wrench size={20} />}
                    {category.title}
                  </h3>
                  
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    {category.skills.map((skill) => {
                      const Icon = getIcon(skill.icon);
                      
                      return (
                        <div
                          key={skill.id}
                          className="soft-surface-sm p-2 rounded-lg soft-hover group flex items-center gap-2 transition-all"
                        >
                          <Icon size={14} className="text-muted group-hover:text-current transition-colors flex-shrink-0" />
                          <span className="text-xs font-medium truncate">{skill.name}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Skill count badge */}
                  <div className="mt-3 pt-3 border-t" style={{ borderColor: 'var(--muted)', opacity: 0.2 }}>
                    <p className="text-xs" style={{ color: 'var(--muted)' }}>
                      {category.skills.length} technologies
                    </p>
                  </div>
                </div>
              </BentoCard>
            );
          })}

          {/* Summary Card */}
          <BentoCard size="medium" delay={0.6}>
            <div className="h-full flex flex-col justify-center items-center text-center">
              <Icons.Award className="w-12 h-12 mb-3" style={{ color: 'var(--muted)' }} />
              <p className="text-3xl font-bold mb-2">50+</p>
              <p className="text-sm" style={{ color: 'var(--muted)' }}>Technologies Mastered</p>
              <p className="text-xs mt-2">Continuously learning and evolving</p>
            </div>
          </BentoCard>
        </BentoGrid>
    </div>
  );
};