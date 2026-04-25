<script setup>
import { computed, ref } from 'vue'
import { Sparkles, ArrowUpRight } from 'lucide-vue-next'
import { interpolate, timelineProgress } from '@/composables/useTimelineMotion'
import { useScrollEntrance } from '@/composables/useScrollEntrance'
import about from '@/data/about.json'

const items = about.now
const nowRef = ref(null)
const { progress } = useScrollEntrance(nowRef, { distance: 420 })

const cardStyle = computed(() => {
  const p = timelineProgress(progress.value, 0, 0.68)
  return {
    opacity: p,
    transform: `translate3d(0, ${interpolate(p, [0, 1], [26, 0])}px, 0) scale(${interpolate(p, [0, 1], [0.97, 1])})`,
    filter: `blur(${interpolate(p, [0, 1], [8, 0])}px)`,
  }
})

const itemStyles = computed(() => items.map((_, index) => {
  const p = timelineProgress(progress.value, 0.18 + index * 0.1, 0.56 + index * 0.1)
  return {
    opacity: p,
    transform: `translateX(${interpolate(p, [0, 1], [-18, 0])}px)`,
    '--arrow-scale': interpolate(p, [0, 1], [0.45, 1]),
  }
}))
</script>

<template>
  <section ref="nowRef" class="now-section">
    <div class="container">
      <div v-glow-follow class="now-card" :style="cardStyle">
        <div class="now-header">
          <div class="now-status">
            <span class="status-dot" />
            <span class="now-label text-label">
              <Sparkles :size="12" />
              Currently Focused On
            </span>
          </div>
        </div>

        <ul class="now-list">
          <li v-for="(item, i) in items" :key="i" class="now-item" :style="itemStyles[i]">
            <span class="now-arrow">→</span>
            <component
              :is="item.link ? 'a' : 'span'"
              :href="item.link || undefined"
              :target="item.link ? '_blank' : undefined"
              :rel="item.link ? 'noopener noreferrer' : undefined"
              class="now-text"
            >
              {{ item.text }}
              <ArrowUpRight v-if="item.link" :size="12" class="now-external" />
            </component>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.now-section {
  padding: 0 0 var(--space-xl);
}

.now-card {
  max-width: 640px;
  padding: var(--space-lg);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  position: relative;
  overflow: hidden;
  will-change: opacity, filter, transform;

  // Subtle animated gradient border glow
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      var(--accent) 50%,
      transparent 100%
    );
    opacity: 0.5;
    animation: shimmer 3s ease-in-out infinite;
    z-index: 2;
  }
}

@keyframes shimmer {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

.now-header {
  margin-bottom: var(--space-md);
}

.now-status {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.status-dot {
  width: 6px;
  height: 6px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse-dot 2s ease-in-out infinite;
}

@keyframes pulse-dot {
  0%, 100% {
    opacity: 1;
    box-shadow: 0 0 0 0 rgba(var(--success-rgb), 0.5);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 0 5px rgba(var(--success-rgb), 0);
  }
}

.now-label {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);
}

.now-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-sm);
}

.now-item {
  --arrow-scale: 1;

  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-xs) 0;
  will-change: opacity, transform;
}

.now-arrow {
  color: var(--accent);
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
  transform: scale(var(--arrow-scale));
  transform-origin: center;
  transition: transform 0.3s var(--dramatic);
}

.now-text {
  font-size: 15px;
  color: var(--text-primary);
  line-height: 1.5;
  transition: color var(--transition-fast);

  &:is(a):hover {
    color: var(--accent);
    opacity: 1;
  }
}

.now-external {
  display: inline;
  vertical-align: middle;
  margin-left: 2px;
  opacity: 0.5;
}

@media (prefers-reduced-motion: reduce) {
  .status-dot {
    animation: none;
  }

  .now-card::after {
    animation: none;
    transform: none;
    opacity: 0.3;
  }
}
</style>
