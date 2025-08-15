import { memo } from 'react';

import { motion } from 'framer-motion';
import { ChevronRight, MousePointerClick } from 'lucide-react';

import { ANIMATION_DURATION, cardVariants, hoverVariants } from '../../constants/animations';
import { ICON_SIZES } from '../../constants/layout';
import type { NavigationCardProps } from '../../types';

const NavigationCard = memo<NavigationCardProps>(
  ({ icon: Icon, title, subtitle, color, hintIcon: HintIcon, hintText, onClick, delay = 0 }) => {
    const iconColorClass =
      {
        blue: 'text-[var(--icon-blue)]',
        purple: 'text-[var(--icon-purple)]',
        green: 'text-[var(--icon-green)]',
        red: 'text-[var(--icon-red)]',
      }[color] || 'text-[var(--muted)]';

    const badgeColorClass =
      {
        blue: 'bg-[var(--icon-blue)] border-[var(--icon-blue)]',
        purple: 'bg-[var(--icon-purple)] border-[var(--icon-purple)]',
        green: 'bg-[var(--icon-green)] border-[var(--icon-green)]',
        red: 'bg-[var(--icon-red)] border-[var(--icon-red)]',
      }[color] || 'bg-[var(--muted)] border-[var(--muted)]';

    return (
      <motion.button
        variants={cardVariants}
        whileHover={hoverVariants.lift}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="neu-pressed p-4 md:p-6 lg:p-8 group cursor-pointer relative overflow-visible flex flex-col items-center justify-center text-center transition-all hover:scale-105 hover:shadow-accent aspect-square md:aspect-[4/3]"
      >
        <UnifiedClickHint badgeColorClass={badgeColorClass} delay={delay} hintText={hintText} />

        <motion.div
          className="p-3 lg:p-4 rounded-xl neu-pressed-sm mb-2 lg:mb-3"
          whileHover={hoverVariants.rotate}
          transition={{ duration: ANIMATION_DURATION.NORMAL }}
        >
          <Icon
            className={`${iconColorClass} ${ICON_SIZES.SM} ${ICON_SIZES.MD} ${ICON_SIZES.LG} transition-all group-hover:scale-110`}
          />
        </motion.div>

        <h3
          className={`text-lg md:text-xl lg:text-2xl font-bold ${iconColorClass} transition-colors`}
        >
          {title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base opacity-70 mt-1">{subtitle}</p>
      </motion.button>
    );
  }
);

const UnifiedClickHint = memo<{ badgeColorClass: string; delay: number; hintText?: string }>(
  ({ badgeColorClass, delay, hintText }) => {
    return (
      <>
        <motion.div
          className="absolute -top-2 -right-2 z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: delay + 0.5, duration: 0.3 }}
        >
          <motion.div
            className="relative"
            animate={{
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: delay,
            }}
          >
            <div
              className={`${badgeColorClass} w-6 h-6 rounded-full flex items-center justify-center border-2 shadow-lg opacity-90`}
            >
              <ChevronRight className="w-3 h-3 text-white" strokeWidth={3} />
            </div>
            <motion.div
              className={`absolute inset-0 ${badgeColorClass.split(' ')[0]} rounded-full`}
              animate={{
                scale: [1, 1.5, 1.5],
                opacity: [0.7, 0, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: delay,
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute -bottom-3 left-0 right-0 flex justify-center pointer-events-none"
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay + 0.7, duration: 0.3 }}
        >
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-gradient-to-r from-yellow-500/90 to-amber-500/90 dark:from-gray-500/90 dark:to-gray-400/90 backdrop-blur-sm shadow-sm border border-yellow-400/30 dark:border-gray-400/30">
            <MousePointerClick className="w-2.5 h-2.5 text-white dark:text-white" />
            <span className="text-[9px] font-medium text-white dark:text-white whitespace-nowrap">
              {hintText || 'Click to explore'}
            </span>
          </div>
        </motion.div>
      </>
    );
  }
);

NavigationCard.displayName = 'NavigationCard';
UnifiedClickHint.displayName = 'UnifiedClickHint';

export default NavigationCard;
