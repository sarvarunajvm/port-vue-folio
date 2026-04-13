import { ref, watchEffect } from 'vue'

const STORAGE_KEY = 'portfolio-theme'

const theme = ref(localStorage.getItem(STORAGE_KEY) || 'dark')

// Apply theme to document on change
watchEffect(() => {
  document.documentElement.setAttribute('data-theme', theme.value)
  localStorage.setItem(STORAGE_KEY, theme.value)
})

export function useTheme() {
  const toggleTheme = () => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  const isDark = () => theme.value === 'dark'

  return {
    theme,
    toggleTheme,
    isDark,
  }
}
