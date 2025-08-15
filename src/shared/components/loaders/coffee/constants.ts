import type { AnimationConfig } from './types';

export const ANIMATION_CONFIG: AnimationConfig = {
  beanDropDuration: 800,
  grindDuration: 600,
  brewDuration: 800,
  steamDuration: 1000,
  totalDuration: 3200,
};

export const COFFEE_BEANS_COUNT = 5;

export const CODE_SYMBOLS = ['{}', '<>', '()', '[]', ';', '//'] as const;

export const JAVA_KEYWORDS = ['class', 'public', 'void', 'static', 'final'] as const;

export const STEAM_PARTICLES_COUNT = 6;

export const PHASE_THRESHOLDS = {
  dropping: 0,
  grinding: 25,
  brewing: 50,
  steaming: 75,
  complete: 100,
} as const;

export const THEME_COLORS = {
  light: {
    bean: 'from-amber-700 to-amber-900',
    cup: 'from-yellow-500 to-amber-500',
    steam: 'from-yellow-400/20 to-amber-400/10',
    particle: 'text-amber-600',
  },
  dark: {
    bean: 'from-gray-600 to-gray-800',
    cup: 'from-gray-400 to-gray-300',
    steam: 'from-gray-300/20 to-gray-400/10',
    particle: 'text-gray-400',
  },
} as const;
