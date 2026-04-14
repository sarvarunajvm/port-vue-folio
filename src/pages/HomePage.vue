<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import MissionControlHero from '@/components/sections/MissionControlHero.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import NowSection from '@/components/sections/NowSection.vue'
import SelectedWork from '@/components/sections/SelectedWork.vue'
import ExperienceTimeline from '@/components/sections/ExperienceTimeline.vue'
import EngineeringImpact from '@/components/sections/EngineeringImpact.vue'
import WritingAndOSS from '@/components/sections/WritingAndOSS.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import SectionTransitionLine from '@/components/svg/SectionTransitionLine.vue'

useScrollReveal()
</script>

<template>
  <main>
    <MissionControlHero />
    <SectionTransitionLine />
    <AboutSection />
    <SectionTransitionLine />
    <NowSection />
    <SectionTransitionLine />
    <SelectedWork />
    <SectionTransitionLine />
    <ExperienceTimeline />
    <SectionTransitionLine />
    <EngineeringImpact />
    <SectionTransitionLine />
    <WritingAndOSS />
    <SectionTransitionLine />
    <ContactSection />
  </main>
</template>
