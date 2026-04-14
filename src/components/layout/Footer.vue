<script setup>
import { Github } from 'lucide-vue-next'
import FooterSignalBeacon from '@/components/svg/FooterSignalBeacon.vue'
import about from '@/data/about.json'
</script>

<template>
  <footer class="footer">
    <div class="container footer-inner">
      <p class="footer-text">
        Built with Vue 3
        <span class="separator">&middot;</span>
        <a
          :href="about.social.github"
          target="_blank"
          rel="noopener noreferrer"
          class="footer-link"
        >
          <Github :size="14" />
          Source
        </a>
      </p>
      <p class="footer-text footer-status">
        <FooterSignalBeacon />
        <span class="status-text">Signal online</span>
        <span class="separator">&middot;</span>
        &copy; {{ new Date().getFullYear() }} {{ about.firstname }} {{ about.lastname }}
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

.footer-status {
  gap: 6px;
}

.status-text {
  font-family: var(--font-mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--text-secondary);
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
