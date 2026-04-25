<script setup>
import { ref, computed } from 'vue'
import { Linkedin, Github, Mail, Copy, Check } from 'lucide-vue-next'
import about from '@/data/about.json'
import IconLink from '@/components/shared/IconLink.vue'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import { interpolate, timelineProgress } from '@/composables/useTimelineMotion'

const copied = ref(false)
const contactRef = ref(null)
const { progress } = useScrollEntrance(contactRef, { distance: 300 })

const headingStyle = computed(() => {
  const p = timelineProgress(progress.value, 0, 0.72)
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [24, 0])}px) scale(${interpolate(p, [0, 1], [0.9, 1])})`,
    filter: `blur(${interpolate(p, [0, 1], [8, 0])}px)`,
    transformOrigin: 'left center',
  }
})

const emailRowStyle = computed(() => {
  const p = timelineProgress(progress.value, 0.18, 0.82)
  return {
    opacity: p,
    transform: `translateX(${interpolate(p, [0, 1], [-20, 0])}px)`,
  }
})

const socialStyle = computed(() => {
  const p = timelineProgress(progress.value, 0.32, 1)
  return {
    opacity: p,
    transform: `translateY(${interpolate(p, [0, 1], [18, 0])}px)`,
  }
})

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(about.email)
    copied.value = true
    setTimeout(() => { copied.value = false }, 2000)
  } catch {
    // Fallback: just open mailto
    window.location.href = `mailto:${about.email}`
  }
}
</script>

<template>
  <section id="contact" ref="contactRef" class="section contact">
    <div class="container">
      <h2 class="contact-heading text-display" :style="headingStyle">Let's connect.</h2>

      <p class="contact-description reveal reveal-delay-1">
        I'm always open to conversations about engineering at scale,
        developer tools, or interesting problems.
      </p>

      <div class="contact-email-row" :style="emailRowStyle">
        <a :href="`mailto:${about.email}`" class="contact-email">
          <Mail :size="20" />
          {{ about.email }}
        </a>
        <button
          v-glow-follow
          :class="['copy-btn', { copied }]"
          :aria-label="copied ? 'Email copied' : 'Copy email address'"
          @click="copyEmail"
        >
          <Transition name="copy-icon" mode="out-in">
            <Check v-if="copied" :key="'check'" :size="14" />
            <Copy v-else :key="'copy'" :size="14" />
          </Transition>
          <span class="copy-text">{{ copied ? 'Copied!' : 'Copy' }}</span>
        </button>
      </div>

      <div class="contact-social" :style="socialStyle">
        <IconLink :href="about.social.linkedin" label="LinkedIn">
          <Linkedin :size="18" />
          <template #text>LinkedIn</template>
        </IconLink>
        <span class="dot">&middot;</span>
        <IconLink :href="about.social.github" label="GitHub">
          <Github :size="18" />
          <template #text>GitHub</template>
        </IconLink>
        <span class="dot">&middot;</span>
        <IconLink :href="about.social.devto" label="Dev.to">
          <template #text>Dev.to</template>
        </IconLink>
        <span class="dot">&middot;</span>
        <IconLink :href="about.social.stackoverflow" label="Stack Overflow">
          <template #text>Stack Overflow</template>
        </IconLink>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  padding-bottom: var(--space-2xl);
}

.contact-heading {
  margin-bottom: var(--space-lg);
  will-change: transform, opacity;
  font-size: clamp(36px, 7vw, 64px);
}

.contact-description {
  color: var(--text-secondary);
  max-width: 480px;
  margin-bottom: var(--space-xl);
  line-height: 1.7;
}

.contact-email-row {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  margin-bottom: var(--space-xl);
  flex-wrap: wrap;
  will-change: opacity, transform;
}

.contact-email {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  font-size: 18px;
  font-weight: 500;
  color: var(--accent);
  transition: gap var(--transition-fast);

  &:hover {
    gap: var(--space-md);
    opacity: 1;
  }
}

.copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 10px;
  font-size: 12px;
  font-family: var(--font-mono);
  color: var(--text-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  cursor: pointer;

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  &.copied {
    border-color: var(--success);
    color: var(--success);
    background: rgba(var(--success-rgb), 0.1);
  }
}

.copy-text {
  transition: color var(--transition-fast);
}

// Copy icon transition
.copy-icon-enter-active,
.copy-icon-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.copy-icon-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

.copy-icon-leave-to {
  opacity: 0;
  transform: scale(0.6);
}

.contact-social {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
  will-change: opacity, transform;
}

.dot {
  color: var(--border);
  user-select: none;
}
</style>
