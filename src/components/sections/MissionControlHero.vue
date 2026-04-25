<script setup>
import { computed, ref } from 'vue'
import { Linkedin, Github } from 'lucide-vue-next'
import { useScrollProgress } from '@/composables/useScrollProgress'
import { useBlogPosts } from '@/composables/useBlogPosts'
import { smoothScrollToElement } from '@/composables/useSmoothScrollTo'
import about from '@/data/about.json'
import skillsData from '@/data/skills.json'
import IconLink from '@/components/shared/IconLink.vue'
import HeroCircuitScene from '@/components/svg/HeroCircuitScene.vue'
import SvgCtaArrow from '@/components/svg/SvgCtaArrow.vue'

const heroRef = ref(null)
const { progress } = useScrollProgress(heroRef)
const { posts, loading: postsLoading } = useBlogPosts(about.username, 4)

// --- Data ---
const services = about.hero.services

const metrics = about.metrics

// Extract top skills for tech stack strip
const techStack = skillsData
  .flatMap(group => group.points)
  .slice(0, 8)
  .map(point => point.name)

const terminalLines = about.hero.terminalLines

// --- Utility ---
function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val))
}

function lerp(start, end, t) {
  return start + (end - start) * clamp(t, 0, 1)
}

// --- Panel Styles ---
// Terminal: visible from 0, fills screen in phase 1, shrinks to cell in phase 2, dissolves in phase 5
const terminalStyle = computed(() => {
  const p = progress.value
  // Scale: oversized opening card, then slowly settles into the dashboard grid.
  const scaleProgress = clamp(p / 0.46, 0, 1)
  const scale = lerp(1.72, 1, scaleProgress)
  const tx = lerp(8, 0, scaleProgress)
  const ty = lerp(10, 0, scaleProgress)
  const dissolve = 1 - clamp((p - 0.96) / 0.04, 0, 1)
  return {
    opacity: dissolve,
    transform: `scale(${scale}) translate3d(${tx}%, ${ty}%, 0)`,
    transformOrigin: 'top left',
  }
})

// Status panel: slides in from right during phase 2
const statusStyle = computed(() => {
  const p = progress.value
  const appear = clamp((p - 0.36) / 0.18, 0, 1)
  const dissolve = 1 - clamp((p - 0.97) / 0.03, 0, 1)
  const offset = (1 - appear) * 40
  return {
    opacity: Math.min(appear, dissolve),
    transform: `translateX(${offset}px)`,
  }
})

// Metrics panel: slides in from bottom during phase 2
const metricsStyle = computed(() => {
  const p = progress.value
  const appear = clamp((p - 0.40) / 0.18, 0, 1)
  const dissolve = 1 - clamp((p - 0.97) / 0.03, 0, 1)
  const offset = (1 - appear) * 40
  return {
    opacity: Math.min(appear, dissolve),
    transform: `translateY(${offset}px)`,
  }
})

// Activity panel: slides in from right during phase 2–3
const activityStyle = computed(() => {
  const p = progress.value
  const appear = clamp((p - 0.44) / 0.18, 0, 1)
  const dissolve = 1 - clamp((p - 0.97) / 0.03, 0, 1)
  const offset = (1 - appear) * 40
  return {
    opacity: Math.min(appear, dissolve),
    transform: `translateX(${offset}px)`,
  }
})

// Header: appears in phase 3
const headerStyle = computed(() => {
  const p = progress.value
  const appear = clamp((p - 0.56) / 0.14, 0, 1)
  const dissolve = 1 - clamp((p - 0.96) / 0.04, 0, 1)
  return {
    opacity: Math.min(appear, dissolve),
    transform: `translateY(${(1 - appear) * -20}px)`,
  }
})

// Tech strip: appears in phase 3
const techStripStyle = computed(() => {
  const p = progress.value
  const appear = clamp((p - 0.60) / 0.14, 0, 1)
  const dissolve = 1 - clamp((p - 0.96) / 0.04, 0, 1)
  return {
    opacity: Math.min(appear, dissolve),
  }
})

// CTA: appears in phase 4
const ctaStyle = computed(() => {
  const p = progress.value
  const appear = clamp((p - 0.76) / 0.10, 0, 1)
  const dissolve = 1 - clamp((p - 0.98) / 0.02, 0, 1)
  return {
    opacity: Math.min(appear, dissolve),
    transform: `translateY(${(1 - appear) * 20}px)`,
  }
})

// CTA buttons should be hidden from focus when not visible
const ctaHidden = computed(() => progress.value < 0.73 || progress.value > 0.995)

// Status dots animate one-by-one in phase 3
function dotDelay(index) {
  return `${0.1 * index}s`
}

const dotsActive = computed(() => progress.value >= 0.50)

const scrollToWork = () => {
  smoothScrollToElement('#work', { offset: 80, duration: 900 })
}
</script>

<template>
  <section ref="heroRef" class="mission-control">
    <div class="mission-control__sticky">
      <HeroCircuitScene :progress="progress" />

      <!-- Header -->
      <header class="mc-header" :style="headerStyle">
        <span class="mc-identity">
          SK <span class="mc-sep">//</span> Senior Software Engineer <span class="mc-sep">&middot;</span> {{ about.company }}
        </span>
      </header>

      <!-- Tech Strip -->
      <div class="mc-tech-strip" :style="techStripStyle">
        <span v-for="tech in techStack" :key="tech" class="mc-tech-tag">{{ tech }}</span>
      </div>

      <!-- Dashboard Grid -->
      <div class="mc-grid">
        <!-- Terminal Panel -->
        <div v-glow-follow class="mc-panel mc-panel--terminal" :style="terminalStyle" role="img" aria-label="Terminal showing Kubernetes pod status for payment gateway service">
          <div class="terminal-chrome">
            <span class="terminal-dot terminal-dot--red"></span>
            <span class="terminal-dot terminal-dot--yellow"></span>
            <span class="terminal-dot terminal-dot--green"></span>
            <span class="terminal-title">payment-gateway &mdash; zsh</span>
          </div>
          <div class="terminal-body">
            <div class="terminal-prompt">
              <span class="terminal-user">sk@paypal</span>
              <span class="terminal-sep">:</span>
              <span class="terminal-dir">~/services</span>
              <span class="terminal-dollar">$</span>
              <span class="terminal-command">kubectl get pods -n payment-gateway</span>
            </div>
            <div class="terminal-output">
              <div v-for="(line, i) in terminalLines" :key="i" class="terminal-line" :style="{ animationDelay: `${2.8 + i * 0.15}s` }">
                {{ line }}
              </div>
            </div>
          </div>
        </div>

        <!-- Status Panel -->
        <div v-glow-follow class="mc-panel mc-panel--status" :style="statusStyle" aria-hidden="true">
          <div class="panel-header">
            <span class="panel-title">Services</span>
            <span class="panel-badge">All Healthy</span>
          </div>
          <ul class="status-list">
            <li v-for="(svc, i) in services" :key="svc.name" class="status-item">
              <span
                :class="['status-dot', { active: dotsActive }]"
                :style="{ animationDelay: dotDelay(i) }"
              ></span>
              <span class="status-name">{{ svc.name }}</span>
              <span class="status-label">{{ svc.status }}</span>
            </li>
          </ul>
        </div>

        <!-- Metrics Panel -->
        <div v-glow-follow class="mc-panel mc-panel--metrics" :style="metricsStyle" aria-hidden="true">
          <div class="panel-header">
            <span class="panel-title">Metrics</span>
          </div>
          <div class="metrics-grid">
            <div v-for="m in metrics" :key="m.label" class="metric-card">
              <span class="metric-value">{{ m.value }}</span>
              <span class="metric-label">{{ m.label }}</span>
            </div>
          </div>
        </div>

        <!-- Activity Panel -->
        <div v-glow-follow class="mc-panel mc-panel--activity" :style="activityStyle" aria-hidden="true">
          <div class="panel-header">
            <span class="panel-title">Recent Activity</span>
          </div>
          <ul class="activity-list">
            <template v-if="postsLoading">
              <li v-for="n in 4" :key="n" class="activity-item activity-skeleton">
                <span class="skeleton-dot"></span>
                <span class="skeleton-line" :style="{ width: `${60 + n * 8}%` }"></span>
              </li>
            </template>
            <template v-else-if="posts.length">
              <li v-for="post in posts" :key="post.id" class="activity-item">
                <span class="activity-dot"></span>
                <span class="activity-text">{{ post.title }}</span>
                <span class="activity-meta">{{ post.date }}</span>
              </li>
            </template>
            <template v-else>
              <li v-for="item in about.now" :key="item.text" class="activity-item">
                <span class="activity-dot"></span>
                <span class="activity-text">{{ item.text }}</span>
              </li>
            </template>
          </ul>
        </div>
      </div>

      <!-- CTA -->
      <div class="mc-actions" :style="ctaStyle">
        <button
          class="btn btn-primary svg-cta"
          :class="{ 'visually-hidden-interactive': ctaHidden }"
          :tabindex="ctaHidden ? -1 : 0"
          @click="scrollToWork"
        >
          View Selected Work
          <SvgCtaArrow class="btn-svg-arrow" />
        </button>
        <a
          v-glow-follow
          href="/files/Resume.pdf"
          download
          class="btn btn-secondary svg-cta"
          :class="{ 'visually-hidden-interactive': ctaHidden }"
          :tabindex="ctaHidden ? -1 : 0"
        >
          Download Resume
          <SvgCtaArrow class="btn-svg-arrow" />
        </a>
        <div class="mc-social" :class="{ 'visually-hidden-interactive': ctaHidden }">
          <IconLink :href="about.social.linkedin" label="LinkedIn" :tabindex="ctaHidden ? -1 : 0">
            <Linkedin :size="18" />
            <template #text>LinkedIn</template>
          </IconLink>
          <span class="dot">&middot;</span>
          <IconLink :href="about.social.github" label="GitHub" :tabindex="ctaHidden ? -1 : 0">
            <Github :size="18" />
            <template #text>GitHub</template>
          </IconLink>
          <span class="dot">&middot;</span>
          <IconLink :href="about.social.devto" label="Dev.to" :tabindex="ctaHidden ? -1 : 0">
            <template #text>Dev.to</template>
          </IconLink>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
// ========================================
// MISSION CONTROL HERO
// ========================================

.mission-control {
  height: 320vh;
  position: relative;

  @media (max-width: 640px) {
    height: auto;
  }
}

.mission-control__sticky {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: var(--nav-height) var(--space-lg) var(--space-lg);
  overflow: hidden;

  @media (max-width: 640px) {
    position: relative;
    height: auto;
    min-height: 100vh;
    padding: calc(var(--nav-height) + var(--space-xl)) var(--space-md) var(--space-xl);
  }
}

// ---- Header ----
.mc-header {
  text-align: center;
  margin-bottom: var(--space-sm);
  will-change: transform, opacity;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    opacity: 1 !important;
    transform: none !important;
    margin-bottom: var(--space-md);
  }
}

.mc-identity {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-secondary);
  letter-spacing: 0.02em;
}

.mc-sep {
  color: var(--accent);
  margin: 0 4px;
}

// ---- Tech Strip ----
.mc-tech-strip {
  display: flex;
  gap: var(--space-sm);
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: var(--space-md);
  will-change: opacity;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    opacity: 1 !important;
    margin-bottom: var(--space-lg);
  }
}

.mc-tech-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  padding: 2px 10px;
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  white-space: nowrap;
}

// ---- Dashboard Grid ----
.mc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: var(--space-md);
  width: 100%;
  max-width: 960px;
  flex: 1;
  min-height: 0;
  max-height: calc(100vh - 230px);
  position: relative;
  z-index: 2;

  @media (max-width: 900px) {
    max-width: 760px;
    max-height: calc(100vh - 220px);
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
    max-height: none;
    gap: var(--space-md);
  }
}

// ---- Panel Base ----
.mc-panel {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  padding: var(--space-md);
  overflow: hidden;
  will-change: transform, opacity;
  display: flex;
  flex-direction: column;
  transition: border-color 0.4s var(--dramatic), box-shadow 0.4s var(--dramatic);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.2);
    box-shadow: 0 4px 24px rgba(var(--accent-rgb), 0.04);
  }

  @media (max-width: 640px) {
    opacity: 1 !important;
    transform: none !important;
    will-change: auto;
  }
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--space-md);
}

.panel-title {
  font-family: var(--font-mono);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.panel-badge {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--success);
  padding: 2px 8px;
  border: 1px solid rgba(var(--success-rgb), 0.25);
  border-radius: var(--radius-sm);
  background: rgba(var(--success-rgb), 0.08);
}

// ---- Terminal Panel ----
.mc-panel--terminal {
  z-index: 2;

  @media (max-width: 640px) {
    z-index: auto;
  }
}

.mc-panel--status {
  min-height: 260px;
}

.terminal-chrome {
  display: flex;
  align-items: center;
  gap: 6px;
  padding-bottom: var(--space-sm);
  border-bottom: 1px solid var(--border);
  margin-bottom: var(--space-sm);
}

.terminal-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;

  &--red { background: #FF5F57; }
  &--yellow { background: #FEBC2E; }
  &--green { background: #28C840; }
}

.terminal-title {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-secondary);
  margin-left: auto;
}

.terminal-body {
  flex: 1;
  overflow: hidden;
}

.terminal-prompt {
  display: flex;
  gap: 0;
  font-family: var(--font-mono);
  font-size: 13px;
  margin-bottom: var(--space-sm);
  flex-wrap: wrap;
}

.terminal-user {
  color: var(--success);
}

.terminal-sep {
  color: var(--text-secondary);
}

.terminal-dir {
  color: var(--accent);
}

.terminal-dollar {
  color: var(--text-secondary);
  margin: 0 6px;
}

.terminal-command {
  --terminal-command-width: 36ch;

  display: inline-block;
  color: var(--text-primary);
  overflow: hidden;
  white-space: nowrap;
  width: var(--terminal-command-width);
  max-width: 100%;
  border-right: 2px solid var(--success);
  animation: mc-blink 0.8s step-end infinite;

  @media (max-width: 640px) {
    width: auto;
    border-right: none;
    animation: none;
  }
}

@keyframes mc-typing {
  from { width: 0; }
  to { width: var(--terminal-command-width); }
}

@keyframes mc-blink {
  50% { border-color: transparent; }
}

.terminal-output {
  font-family: var(--font-mono);
  font-size: 11px;
  line-height: 1.6;
  color: var(--text-secondary);
}

.terminal-line {
  opacity: 1;
  animation: mc-line-appear 0.35s var(--dramatic) forwards;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:first-child {
    color: var(--text-primary);
    font-weight: 500;
  }

  @media (max-width: 640px) {
    opacity: 1;
    animation: none;
  }
}

@keyframes mc-line-appear {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// ---- Status Panel ----
.status-list {
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  justify-content: space-between;
  min-height: 0;
}

.status-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 2px 0;
  line-height: 1.35;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border);
  flex-shrink: 0;
  transition: background 0.5s ease;

  &.active {
    background: var(--success);
    animation: mc-dot-pulse 2s ease-in-out infinite;
  }

  @media (max-width: 640px) {
    background: var(--success);
    animation: mc-dot-pulse 2s ease-in-out infinite;
  }
}

@keyframes mc-dot-pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(var(--success-rgb), 0.5);
  }
  50% {
    box-shadow: 0 0 0 4px rgba(var(--success-rgb), 0);
  }
}

.status-name {
  color: var(--text-primary);
  flex: 1;
}

.status-label {
  color: var(--success);
  font-size: 11px;
}

// ---- Metrics Panel ----
.metrics-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-sm);
  flex: 1;
}

.metric-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--space-md) var(--space-sm);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  background: var(--surface-elevated);
}

.metric-value {
  font-family: var(--font-mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
  margin-bottom: 4px;
}

.metric-label {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

// ---- Activity Panel ----
.activity-list {
  display: flex;
  flex-direction: column;
  gap: var(--space-xs);
  flex: 1;
}

.activity-item {
  display: flex;
  align-items: flex-start;
  gap: var(--space-sm);
  padding: 4px 0;
  font-size: 12px;
}

.activity-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--accent);
  flex-shrink: 0;
  margin-top: 5px;
}

.activity-text {
  color: var(--text-primary);
  font-size: 12px;
  line-height: 1.4;
  flex: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.activity-meta {
  font-family: var(--font-mono);
  font-size: 10px;
  color: var(--text-secondary);
  white-space: nowrap;
  flex-shrink: 0;
}

// Skeleton
.activity-skeleton {
  .skeleton-dot {
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: var(--border);
    flex-shrink: 0;
    margin-top: 5px;
  }

  .skeleton-line {
    height: 12px;
    background: var(--surface-elevated);
    border-radius: 4px;
    animation: mc-skeleton-pulse 1.5s ease-in-out infinite;
  }
}

@keyframes mc-skeleton-pulse {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

// ---- CTA ----
.mc-actions {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-top: var(--space-md);
  flex-wrap: wrap;
  justify-content: center;
  will-change: transform, opacity;
  position: relative;
  z-index: 2;

  @media (max-width: 640px) {
    opacity: 1 !important;
    transform: none !important;
    flex-direction: column;
    margin-top: var(--space-lg);
  }
}

.mc-social {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  margin-left: var(--space-md);

  @media (max-width: 640px) {
    margin-left: 0;
    margin-top: var(--space-sm);
  }
}

.visually-hidden-interactive {
  visibility: hidden;
  pointer-events: none;
}

.dot {
  color: var(--border);
  user-select: none;
}

// ---- Buttons (scoped to hero) ----
.btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 500;
  border-radius: var(--radius-md);
  transition: all 0.25s cubic-bezier(0.22, 1, 0.36, 1);
  white-space: nowrap;

  &:active {
    transform: scale(0.97);
    transition-duration: 100ms;
  }
}

.btn-icon {
  transition: transform 0.25s cubic-bezier(0.22, 1, 0.36, 1);

  .btn:hover & {
    transform: translateY(2px);
  }
}

.btn-svg-arrow {
  color: currentColor;
}

.btn-primary {
  background: var(--accent);
  color: #fff;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%);
    transform: translateX(-100%);
    transition: transform 0.6s var(--dramatic);
  }

  &:hover {
    background: var(--accent-hover);
    box-shadow:
      0 6px 20px rgba(var(--accent-rgb), 0.3),
      0 0 40px rgba(var(--accent-rgb), 0.1);
    opacity: 1;

    &::before {
      transform: translateX(100%);
    }
  }
}

.btn-secondary {
  border: 1px solid var(--border);
  color: var(--text-primary);
  transition: all 0.35s var(--dramatic);

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.5);
    color: var(--accent);
    box-shadow: 0 0 20px rgba(var(--accent-rgb), 0.06);
    opacity: 1;
  }
}

// ---- Reduced Motion ----
@media (prefers-reduced-motion: reduce) {
  .mission-control {
    height: auto;
  }

  .mission-control__sticky {
    position: relative;
    height: auto;
    min-height: 100vh;
  }

  .mc-panel {
    opacity: 1 !important;
    transform: none !important;
    will-change: auto;
  }

  .mc-header,
  .mc-tech-strip,
  .mc-actions {
    opacity: 1 !important;
    transform: none !important;
  }

  .terminal-command {
    width: auto;
    border-right: none;
    animation: none;
  }

  .terminal-line {
    opacity: 1;
    animation: none;
  }

  .status-dot {
    background: var(--success);
    animation: none;
  }
}
</style>
