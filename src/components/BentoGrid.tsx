import React from 'react';
import { motion } from 'framer-motion';

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xl';
  delay?: number;
}

export const BentoGrid: React.FC<BentoGridProps> = ({ children, className = '' }) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
      {children}
    </div>
  );
};

export const BentoCard: React.FC<BentoCardProps> = ({ 
  children, 
  className = '', 
  size = 'medium',
  delay = 0 
}) => {
  const sizeClasses = {
    small: 'col-span-1 row-span-1',
    medium: 'col-span-1 md:col-span-2 row-span-1',
    large: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
    xl: 'col-span-1 md:col-span-2 lg:col-span-3 row-span-2'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`soft-surface p-6 rounded-2xl soft-hover group ${sizeClasses[size]} ${className}`}
    >
      {children}
    </motion.div>
  );
};