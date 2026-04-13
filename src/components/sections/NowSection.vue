<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sparkles, ArrowUpRight } from 'lucide-vue-next'

const items = [
  { text: 'Exploring LLM-assisted code review at PayPal', link: null },
  { text: 'Contributing to Vue ecosystem tooling', link: null },
  { text: 'Writing about event-driven architectures', link: 'https://dev.to/sarvarunajvm' },
]

// Rotating status indicator
const statusDot = ref(null)
let pulseInterval = null

onMounted(() => {
  // Pulse animation is CSS-driven, no JS needed
})

onUnmounted(() => {
  if (pulseInterval) clearInterval(pulseInterval)
})
</script>

<template>
  <section class="now-section">
    <div class="container">
      <div class="now-card reveal">
        <div class="now-header">
          <div class="now-status">
            <span ref="statusDot" class="status-dot" />
            <span class="now-label text-label">
              <Sparkles :size="12" />
              Currently Focused On
            </span>
          </div>
        </div>

        <ul class="now-list">
          <li v-for="(item, i) in items" :key="i" class="now-item" :style="{ animationDelay: `${i * 0.15}s` }">
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

  // Subtle animated gradient border glow
  &::before {
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
    box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.4);
  }
  50% {
    opacity: 0.8;
    box-shadow: 0 0 0 4px rgba(52, 211, 153, 0);
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
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: var(--space-xs) 0;
}

.now-arrow {
  color: var(--accent);
  font-size: 14px;
  flex-shrink: 0;
  margin-top: 2px;
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

  .now-card::before {
    animation: none;
    transform: none;
    opacity: 0.3;
  }
}
</style>
