<script setup>
import SectionHeading from '@/components/shared/SectionHeading.vue'
import about from '@/data/about.json'
import education from '@/data/education.json'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <SectionHeading title="About" />

      <div class="about-content">
        <p class="reveal reveal-delay-1">
          {{ about.summary }}
        </p>
        <p v-for="edu in education" :key="edu.id" class="about-education reveal reveal-delay-3">
          {{ edu.degree }} in Computer Applications — {{ edu.college }}<span v-if="edu.cgpa" class="about-edu-meta"> · CGPA {{ edu.cgpa }}</span>
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-content {
  max-width: 640px;

  p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
    font-size: 17px;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-education {
  font-size: 14px !important;
  color: var(--text-primary);
  opacity: 0.85;
  margin-top: var(--space-md);
}

.about-edu-meta {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-secondary);
}
</style>
