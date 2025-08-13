import React from 'react';
import { Switch } from '@heroui/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Switch
      checked={theme === 'dark'}
      onChange={toggleTheme}
      size="lg"
      color="default"
      startContent={<Sun size={16} />}
      endContent={<Moon size={16} />}
      classNames={{
        wrapper: "soft-surface-sm soft-hover",
        thumb: "soft-surface-sm"
      }}
      aria-label="Toggle theme"
    />
  );
};