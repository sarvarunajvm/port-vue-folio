import { LucideIcon } from 'lucide-react';

export type ModalType = 'about' | 'experience' | 'projects' | 'skills' | 'contact';

export type ColorVariant = 'blue' | 'purple' | 'green' | 'red';

export interface NavigationCardData {
  id: ModalType;
  icon: LucideIcon;
  color: string;
  hintIcon?: LucideIcon;
  hintText?: string;
  title: string;
  subtitle: string;
}

export interface HeroSectionProps {
  onProfileClick: () => void;
  onResumeDownload: () => void;
}

export interface NavigationCardProps extends Omit<NavigationCardData, 'id'> {
  onClick: () => void;
  delay?: number;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export interface LoaderProps {
  onLoadComplete: () => void;
}

export interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
  className?: string;
}
