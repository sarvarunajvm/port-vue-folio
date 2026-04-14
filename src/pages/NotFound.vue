<script setup>
import { useRouter } from 'vue-router'
import { ArrowLeft } from 'lucide-vue-next'

const router = useRouter()
</script>

<template>
  <main class="not-found">
    <div class="container">
      <span class="error-code font-mono">404</span>
      <h1 class="text-h1">Page not found</h1>
      <p class="text-secondary" style="margin-top: var(--space-md); margin-bottom: var(--space-xl)">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button class="back-btn" @click="router.push('/')">
        <ArrowLeft :size="16" />
        Back to home
      </button>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: var(--nav-height);
}

.error-code {
  font-size: 80px;
  font-weight: 700;
  color: var(--border);
  display: block;
  margin-bottom: var(--space-md);
}

.back-btn {
  display: inline-flex;
  align-items: center;
  gap: var(--space-sm);
  padding: 12px 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--text-primary);
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  transition: all var(--transition-fast);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
  }
}
</style>
