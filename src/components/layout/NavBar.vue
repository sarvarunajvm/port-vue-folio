<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Download, Menu, X } from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'

const { theme, toggleTheme } = useTheme()
const scrolled = ref(false)
const scrollProgress = ref(0)
const mobileMenuOpen = ref(false)
const isToggling = ref(false)
const navRef = ref(null)

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Writing', href: '#writing' },
  { label: 'Contact', href: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
  const totalScroll = document.documentElement.scrollHeight - window.innerHeight
  scrollProgress.value = totalScroll > 0 ? window.scrollY / totalScroll : 0
  if (navRef.value) {
    navRef.value.style.setProperty('--page-progress', scrollProgress.value)
  }
}

const scrollTo = (href) => {
  mobileMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    const offset = 80
    const y = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}

const handleToggleTheme = () => {
  if (isToggling.value) return
  isToggling.value = true
  toggleTheme()
  setTimeout(() => {
    isToggling.value = false
  }, 500)
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <nav ref="navRef" :class="['navbar', { scrolled }]">
    <div class="navbar-inner container">
      <a href="#" class="nav-logo" @click.prevent="window.scrollTo({ top: 0, behavior: 'smooth' })">
        SK
      </a>

      <div class="nav-links">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="nav-link"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
      </div>

      <div class="nav-actions">
        <a href="/files/Resume.pdf" download class="btn-resume" aria-label="Download resume">
          <Download :size="16" />
          <span>Resume</span>
        </a>
        <button
          :class="['theme-toggle', { toggling: isToggling }]"
          :aria-label="`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`"
          @click="handleToggleTheme"
        >
          <Transition name="theme-icon" mode="out-in">
            <Sun v-if="theme === 'dark'" :key="'sun'" :size="18" />
            <Moon v-else :key="'moon'" :size="18" />
          </Transition>
        </button>
        <button
          class="mobile-menu-btn"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          @click="mobileMenuOpen = !mobileMenuOpen"
        >
          <X v-if="mobileMenuOpen" :size="20" />
          <Menu v-else :size="20" />
        </button>
      </div>
    </div>

    <!-- Mobile menu overlay -->
    <Transition name="menu-fade">
      <div v-if="mobileMenuOpen" class="mobile-menu">
        <a
          v-for="link in navLinks"
          :key="link.href"
          :href="link.href"
          class="mobile-link"
          @click.prevent="scrollTo(link.href)"
        >
          {{ link.label }}
        </a>
        <a href="/files/Resume.pdf" download class="mobile-link">
          Resume
        </a>
      </div>
    </Transition>
  </nav>
</template>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  height: var(--nav-height);
  transition: background-color var(--transition-base), border-color var(--transition-base), backdrop-filter var(--transition-base);

  &.scrolled {
    background-color: rgba(var(--bg-rgb, 10, 10, 11), 0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: calc(var(--page-progress, 0) * 100%);
    background: var(--accent);
    opacity: 0.4;
    pointer-events: none;
  }
}

[data-theme="light"] .navbar.scrolled {
  background-color: rgba(250, 250, 250, 0.85);
}

.navbar-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
  letter-spacing: -0.02em;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent);
    opacity: 1;
  }
}

.nav-links {
  display: flex;
  gap: var(--space-xl);

  @media (max-width: 768px) {
    display: none;
  }
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  transition: color var(--transition-fast);
  position: relative;

  &:hover {
    color: var(--text-primary);
    opacity: 1;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 0;
    height: 1px;
    background: var(--accent);
    transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover::after {
    width: 100%;
  }
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.btn-resume {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 8px 16px;
  font-size: 13px;
  font-weight: 500;
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    opacity: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
}

// Theme toggle with animated icon swap
.theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--text-secondary);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);

  &:hover {
    color: var(--text-primary);
    background: var(--surface-elevated);
  }

  &.toggling {
    animation: toggle-pulse 0.5s ease;
  }
}

@keyframes toggle-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(0.85); }
  100% { transform: scale(1); }
}

// Icon transition
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}

.mobile-menu-btn {
  display: none;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  color: var(--text-secondary);

  @media (max-width: 768px) {
    display: flex;
  }
}

// Mobile menu
.mobile-menu {
  position: fixed;
  top: var(--nav-height);
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--space-xl);
  z-index: 99;
}

.mobile-link {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent);
    opacity: 1;
  }
}

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.2s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}
</style>
