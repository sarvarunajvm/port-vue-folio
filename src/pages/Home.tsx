import React, { Suspense, lazy, useCallback, useMemo, useState } from 'react';

import { motion } from 'framer-motion';
import { Briefcase, Code2, Coffee, Mail, Rocket, Sparkles } from 'lucide-react';

import { portfolioConfig } from '../config/portfolio.config';
import { HeroSection } from '../features/hero';
import { Modal, NavigationCard } from '../shared/components/ui';
import { containerVariants } from '../shared/constants/animations';
import { CONTAINER } from '../shared/constants/layout';
import type { ModalType, NavigationCardData } from '../shared/types';

const AboutBento = lazy(() => import('../features/about').then((m) => ({ default: m.AboutBento })));
const ContactBento = lazy(() =>
  import('../features/contact').then((m) => ({ default: m.ContactBento }))
);
const ExperienceBento = lazy(() =>
  import('../features/experience').then((m) => ({ default: m.ExperienceBento }))
);
const ProjectsBento = lazy(() =>
  import('../features/projects').then((m) => ({ default: m.ProjectsBento }))
);
const SkillsBento = lazy(() =>
  import('../features/skills').then((m) => ({ default: m.SkillsBento }))
);

const NAVIGATION_CARDS: NavigationCardData[] = [
  {
    id: 'experience' as ModalType,
    icon: Briefcase,
    color: 'blue',
    hintIcon: Sparkles,
    hintText: portfolioConfig.status.availableText,
    title: portfolioConfig.sections.experience.title,
    subtitle: portfolioConfig.sections.experience.subtitle,
  },
  {
    id: 'projects' as ModalType,
    icon: Rocket,
    color: 'purple',
    hintIcon: Coffee,
    hintText: portfolioConfig.status.collaborateText,
    title: portfolioConfig.sections.projects.title,
    subtitle: portfolioConfig.sections.projects.subtitle,
  },
  {
    id: 'skills' as ModalType,
    icon: Code2,
    color: 'green',
    hintIcon: Sparkles,
    hintText: portfolioConfig.status.learningText,
    title: portfolioConfig.sections.skills.title,
    subtitle: portfolioConfig.sections.skills.subtitle,
  },
  {
    id: 'contact' as ModalType,
    icon: Mail,
    color: 'red',
    hintIcon: Mail,
    hintText: portfolioConfig.status.connectText,
    title: portfolioConfig.sections.contact.title,
    subtitle: portfolioConfig.sections.contact.subtitle,
  },
] as const;

const MODAL_COMPONENTS = {
  about: AboutBento,
  experience: ExperienceBento,
  projects: ProjectsBento,
  skills: SkillsBento,
  contact: ContactBento,
} as const;

export const Home: React.FC = () => {
  const [openModal, setOpenModal] = useState<ModalType | null>(null);

  const handleResumeDownload = useCallback(() => {
    const link = document.createElement('a');
    link.href = portfolioConfig.resume.path;
    link.download = portfolioConfig.resume.downloadName;
    link.click();
  }, []);

  const handleModalOpen = useCallback((modalType: ModalType) => {
    setOpenModal(modalType);
  }, []);

  const handleModalClose = useCallback(() => {
    setOpenModal(null);
  }, []);

  const renderModal = useMemo(() => {
    if (!openModal) return null;
    const Component = MODAL_COMPONENTS[openModal];
    const title =
      openModal === 'about'
        ? 'About Me'
        : portfolioConfig.sections[openModal as keyof typeof portfolioConfig.sections]?.title ||
          openModal;

    return (
      <Modal key={openModal} isOpen={true} onClose={handleModalClose} title={title}>
        <Suspense fallback={<div className="flex items-center justify-center p-8">Loading...</div>}>
          <Component />
        </Suspense>
      </Modal>
    );
  }, [openModal, handleModalClose]);

  return (
    <div
      className={`fixed inset-0 overflow-hidden flex items-center justify-center ${CONTAINER.PADDING.MOBILE} ${CONTAINER.PADDING.SM} ${CONTAINER.PADDING.MD} ${CONTAINER.PADDING.LG} ${CONTAINER.PADDING.XL}`}
      style={{ background: 'var(--bg)' }}
    >
      <motion.div
        className={`w-full max-w-[${CONTAINER.MAX_WIDTH}px] mx-auto flex flex-col justify-center h-full`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          <HeroSection
            onProfileClick={() => handleModalOpen('about')}
            onResumeDownload={handleResumeDownload}
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
            {NAVIGATION_CARDS.map((card, index) => (
              <NavigationCard
                key={card.id}
                {...card}
                onClick={() => handleModalOpen(card.id)}
                delay={index * 0.3}
              />
            ))}
          </div>
        </div>
      </motion.div>

      {renderModal}
    </div>
  );
};
