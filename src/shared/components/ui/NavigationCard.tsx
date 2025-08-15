import { memo } from 'react';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

import { ANIMATION_DURATION, cardVariants, hoverVariants } from '../../constants/animations';
import { ICON_SIZES } from '../../constants/layout';
import type { NavigationCardProps } from '../../types';

const NavigationCard = memo<NavigationCardProps>(
  ({ icon: Icon, title, subtitle, color, hintIcon: HintIcon, hintText, onClick, delay = 0 }) => {
    const colorClasses =
      {
        blue: 'text-blue-500 group-hover:text-blue-500 bg-blue-500',
        purple: 'text-purple-500 group-hover:text-purple-500 bg-purple-500',
        green: 'text-green-500 group-hover:text-green-500 bg-green-500',
        red: 'text-red-500 group-hover:text-red-500 bg-red-500',
      }[color] || 'text-gray-500 group-hover:text-gray-500 bg-gray-500';

    return (
      <motion.button
        variants={cardVariants}
        whileHover={hoverVariants.lift}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className="neu-pressed p-4 md:p-6 lg:p-8 group cursor-pointer relative overflow-visible flex flex-col items-center justify-center text-center transition-all hover:scale-105 aspect-square md:aspect-[4/3]"
      >
        <MobileTapIndicator color={color} delay={delay} />

        <motion.div
          className="p-3 lg:p-4 rounded-xl neu-pressed-sm mb-2 lg:mb-3"
          whileHover={hoverVariants.rotate}
          transition={{ duration: ANIMATION_DURATION.NORMAL }}
        >
          <Icon
            className={`${colorClasses.split(' ')[0]} ${ICON_SIZES.SM} ${ICON_SIZES.MD} ${ICON_SIZES.LG}`}
          />
        </motion.div>

        <h3
          className={`text-lg md:text-xl lg:text-2xl font-bold ${colorClasses.split(' ')[1]} transition-colors`}
        >
          {title}
        </h3>
        <p className="text-xs md:text-sm lg:text-base opacity-70 mt-1">{subtitle}</p>

        {hintText && HintIcon && <DesktopHoverHint icon={HintIcon} text={hintText} />}
      </motion.button>
    );
  }
);

const MobileTapIndicator = memo<{ color: string; delay: number }>(({ color, delay }) => (
  <motion.div
    className="absolute -top-1 -right-1 lg:hidden"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{ duration: ANIMATION_DURATION.VERY_SLOW, repeat: Infinity, delay }}
  >
    <div
      className={`w-2 h-2 ${color === 'blue' ? 'bg-blue-500' : color === 'purple' ? 'bg-purple-500' : color === 'green' ? 'bg-green-500' : 'bg-red-500'} rounded-full`}
    />
  </motion.div>
));

const DesktopHoverHint = memo<{ icon: LucideIcon; text: string }>(({ icon: Icon, text }) => (
  <motion.div className="hidden lg:block absolute -bottom-5 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity z-50 pointer-events-none">
    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-900/90 dark:bg-gray-100/90 text-white dark:text-gray-900 backdrop-blur-sm shadow-lg flex items-center gap-1 whitespace-nowrap">
      <Icon size={10} />
      {text}
    </span>
  </motion.div>
));

NavigationCard.displayName = 'NavigationCard';
MobileTapIndicator.displayName = 'MobileTapIndicator';
DesktopHoverHint.displayName = 'DesktopHoverHint';

export default NavigationCard;
