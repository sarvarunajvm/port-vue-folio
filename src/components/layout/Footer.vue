<script setup>
import { Github } from 'lucide-vue-next'
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-text">
        Built with Vue 3
        <span class="separator">&middot;</span>
        <a
          href="https://github.com/sarvarunajvm/port-vue-folio"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <Github :size="14" />
          Source
        </a>
      </p>
      <p class="footer-text">
        &copy; {{ new Date().getFullYear() }} Saravanan Kalimuthu
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  border-top: 1px solid var(--border);
  padding: var(--space-lg) 0;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 600px) {
    flex-direction: column;
    gap: var(--space-sm);
  }
}

.footer-text {
  font-size: 13px;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: var(--space-sm);
}

.separator {
  opacity: 0.4;
}

.footer-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--text-secondary);
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent);
    opacity: 1;
  }
}
</style>
