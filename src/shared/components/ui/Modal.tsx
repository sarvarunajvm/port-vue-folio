import React, { useEffect } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backgroundColor: 'var(--bg)' }}
        >
          {/* Close Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ delay: 0.1 }}
            onClick={onClose}
            className="fixed top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 z-50 p-2 sm:p-2.5 md:p-3 rounded-lg bg-gradient-to-br from-red-500/20 to-pink-500/20 hover:from-red-500/30 hover:to-pink-500/30 transition-all focus-ring"
            aria-label="Close modal"
            style={{ color: 'var(--fg)' }}
          >
            <X size={20} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
          </motion.button>

          {/* Title */}
          {title && (
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="fixed top-2 left-2 sm:top-3 sm:left-3 md:top-4 md:left-4 text-lg sm:text-xl md:text-2xl font-bold z-50"
            >
              {title}
            </motion.h2>
          )}

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full h-full overflow-y-auto p-2 pt-10 sm:p-3 sm:pt-12 md:p-4 md:pt-14 lg:p-5 lg:pt-16"
          >
            <div className="w-full h-full">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
