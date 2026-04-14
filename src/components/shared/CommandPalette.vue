<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  Search, ArrowDown, Briefcase, BookOpen, Mail,
  Github, Linkedin, Download, Sun, Moon, FileText, Sparkles
} from 'lucide-vue-next'
import { useTheme } from '@/composables/useTheme'
import projects from '@/data/projects.json'
import about from '@/data/about.json'

const router = useRouter()
const { theme, toggleTheme } = useTheme()

const isOpen = ref(false)
const query = ref('')
const selectedIndex = ref(0)
const inputRef = ref(null)

const commands = computed(() => {
  const items = [
    // Navigation
    { id: 'nav-work', label: 'Go to Selected Work', group: 'Navigate', icon: Briefcase, action: () => scrollToSection('#work') },
    { id: 'nav-experience', label: 'Go to Experience', group: 'Navigate', icon: Briefcase, action: () => scrollToSection('#experience') },
    { id: 'nav-writing', label: 'Go to Writing & OSS', group: 'Navigate', icon: BookOpen, action: () => scrollToSection('#writing') },
    { id: 'nav-contact', label: 'Go to Contact', group: 'Navigate', icon: Mail, action: () => scrollToSection('#contact') },
    { id: 'nav-top', label: 'Back to Top', group: 'Navigate', icon: ArrowDown, action: () => { window.scrollTo({ top: 0, behavior: 'smooth' }) } },

    // Projects
    ...projects.map(p => ({
      id: `project-${p.id}`,
      label: p.title,
      group: 'Projects',
      icon: FileText,
      meta: p.tags?.slice(0, 2).join(', '),
      action: () => router.push(`/work/${p.id}`)
    })),

    // Actions
    { id: 'theme', label: `Switch to ${theme.value === 'dark' ? 'Light' : 'Dark'} Mode`, group: 'Actions', icon: theme.value === 'dark' ? Sun : Moon, action: () => toggleTheme() },
    { id: 'resume', label: 'Download Resume', group: 'Actions', icon: Download, action: () => { window.open('/files/Resume.pdf', '_blank') } },

    // Links
    { id: 'github', label: 'GitHub Profile', group: 'Links', icon: Github, meta: 'External', action: () => { window.open(about.social.github, '_blank') } },
    { id: 'linkedin', label: 'LinkedIn Profile', group: 'Links', icon: Linkedin, meta: 'External', action: () => { window.open(about.social.linkedin, '_blank') } },
    { id: 'devto', label: 'Dev.to Blog', group: 'Links', icon: BookOpen, meta: 'External', action: () => { window.open(about.social.devto, '_blank') } },
    { id: 'email', label: `Email ${about.email}`, group: 'Links', icon: Mail, action: () => { window.location.href = `mailto:${about.email}` } },
  ]

  if (!query.value) return items

  const q = query.value.toLowerCase()
  return items.filter(item =>
    item.label.toLowerCase().includes(q) ||
    item.group.toLowerCase().includes(q) ||
    (item.meta && item.meta.toLowerCase().includes(q))
  )
})

const groupedCommands = computed(() => {
  const groups = {}
  commands.value.forEach(cmd => {
    if (!groups[cmd.group]) groups[cmd.group] = []
    groups[cmd.group].push(cmd)
  })
  return groups
})

function scrollToSection(selector) {
  // Navigate home first if on a case study page
  if (router.currentRoute.value.path !== '/') {
    router.push('/').then(() => {
      nextTick(() => {
        setTimeout(() => {
          const el = document.querySelector(selector)
          if (el) {
            const y = el.getBoundingClientRect().top + window.scrollY - 80
            window.scrollTo({ top: y, behavior: 'smooth' })
          }
        }, 100)
      })
    })
  } else {
    const el = document.querySelector(selector)
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }
}

function open() {
  isOpen.value = true
  query.value = ''
  selectedIndex.value = 0
  nextTick(() => inputRef.value?.focus())
}

function close() {
  isOpen.value = false
  query.value = ''
}

function execute(cmd) {
  close()
  nextTick(() => cmd.action())
}

function handleKeydown(e) {
  if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
    e.preventDefault()
    isOpen.value ? close() : open()
    return
  }

  if (!isOpen.value) return

  if (e.key === 'Escape') {
    close()
    return
  }

  if (e.key === 'ArrowDown') {
    e.preventDefault()
    selectedIndex.value = Math.min(selectedIndex.value + 1, commands.value.length - 1)
    return
  }

  if (e.key === 'ArrowUp') {
    e.preventDefault()
    selectedIndex.value = Math.max(selectedIndex.value - 1, 0)
    return
  }

  if (e.key === 'Enter') {
    e.preventDefault()
    const cmd = commands.value[selectedIndex.value]
    if (cmd) execute(cmd)
  }
}

watch(query, () => {
  selectedIndex.value = 0
})

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
})
</script>

<template>
  <!-- Keyboard hint in bottom-right -->
  <button class="cmd-hint" aria-label="Open command palette (⌘K)" @click="open">
    <Sparkles :size="14" />
    <kbd>⌘K</kbd>
  </button>

  <!-- Command palette overlay -->
  <Teleport to="body">
    <Transition name="palette">
      <div v-if="isOpen" class="palette-overlay" @click.self="close">
        <div class="palette" role="dialog" aria-label="Command palette">
          <div class="palette-input-wrap">
            <Search :size="16" class="palette-search-icon" />
            <input
              id="palette-search"
              ref="inputRef"
              v-model="query"
              class="palette-input"
              placeholder="Type a command or search..."
              aria-label="Search commands"
            />
            <kbd class="palette-esc">ESC</kbd>
          </div>

          <div class="palette-results">
            <template v-if="commands.length === 0">
              <div class="palette-empty">No results found</div>
            </template>

            <template v-for="(items, group) in groupedCommands" :key="group">
              <div class="palette-group-label">{{ group }}</div>
              <button
                v-for="cmd in items"
                :key="cmd.id"
                :class="['palette-item', { selected: commands.indexOf(cmd) === selectedIndex }]"
                @click="execute(cmd)"
                @mouseenter="selectedIndex = commands.indexOf(cmd)"
              >
                <component :is="cmd.icon" :size="16" class="palette-item-icon" />
                <span class="palette-item-label">{{ cmd.label }}</span>
                <span v-if="cmd.meta" class="palette-item-meta">{{ cmd.meta }}</span>
              </button>
            </template>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style lang="scss" scoped>
// Hint button
.cmd-hint {
  position: fixed;
  bottom: var(--space-lg);
  right: var(--space-lg);
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 8px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  color: var(--text-secondary);
  font-size: 13px;
  z-index: 50;
  transition: all var(--transition-fast);
  cursor: pointer;

  &:hover {
    border-color: rgba(var(--accent-rgb), 0.5);
    color: var(--accent);
    box-shadow: 0 4px 16px rgba(var(--accent-rgb), 0.1);
  }

  kbd {
    font-family: var(--font-mono);
    font-size: 12px;
    padding: 1px 6px;
    background: var(--surface-elevated);
    border-radius: 4px;
    border: 1px solid var(--border);
  }

  @media (max-width: 768px) {
    display: none;
  }
}

// Overlay
.palette-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  z-index: 200;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 20vh;
}

// Palette container
.palette {
  width: 100%;
  max-width: 560px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.3);
}

.palette-input-wrap {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  padding: var(--space-md) var(--space-lg);
  border-bottom: 1px solid var(--border);
}

.palette-search-icon {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.palette-input {
  flex: 1;
  background: none;
  border: none;
  outline: none;
  font-size: 16px;
  color: var(--text-primary);
  font-family: var(--font-primary);

  &::placeholder {
    color: var(--text-secondary);
    opacity: 0.6;
  }
}

.palette-esc {
  font-family: var(--font-mono);
  font-size: 11px;
  padding: 2px 8px;
  color: var(--text-secondary);
  background: var(--surface-elevated);
  border: 1px solid var(--border);
  border-radius: 4px;
  flex-shrink: 0;
}

// Results
.palette-results {
  max-height: 320px;
  overflow-y: auto;
  padding: var(--space-sm) 0;
}

.palette-group-label {
  padding: var(--space-sm) var(--space-lg);
  font-size: 11px;
  font-weight: 600;
  color: var(--text-secondary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-family: var(--font-mono);
}

.palette-item {
  display: flex;
  align-items: center;
  gap: var(--space-sm);
  width: 100%;
  padding: var(--space-sm) var(--space-lg);
  font-size: 14px;
  color: var(--text-primary);
  transition: background var(--transition-fast);
  cursor: pointer;
  text-align: left;

  &.selected {
    background: var(--accent-subtle);
  }
}

.palette-item-icon {
  color: var(--text-secondary);
  flex-shrink: 0;
}

.palette-item-label {
  flex: 1;
}

.palette-item-meta {
  font-size: 12px;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

.palette-empty {
  padding: var(--space-xl) var(--space-lg);
  text-align: center;
  color: var(--text-secondary);
  font-size: 14px;
}

// Transitions
.palette-enter-active {
  transition: opacity 0.15s ease;

  .palette {
    transition: opacity 0.15s ease, transform 0.15s cubic-bezier(0.22, 1, 0.36, 1);
  }
}

.palette-leave-active {
  transition: opacity 0.1s ease;

  .palette {
    transition: opacity 0.1s ease, transform 0.1s ease;
  }
}

.palette-enter-from {
  opacity: 0;

  .palette {
    opacity: 0;
    transform: scale(0.96) translateY(-8px);
  }
}

.palette-leave-to {
  opacity: 0;

  .palette {
    opacity: 0;
    transform: scale(0.98);
  }
}
</style>
