<script setup>
import { Linkedin, Github, ArrowDown } from 'lucide-vue-next'
import about from '@/data/about.json'
import IconLink from '@/components/shared/IconLink.vue'

const scrollToWork = () => {
  const el = document.querySelector('#work')
  if (el) {
    const y = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
</script>

<template>
  <section class="hero">
    <div class="container hero-content">
      <h1 class="hero-name text-display reveal">
        {{ about.firstname }}<br />{{ about.lastname }}
      </h1>

      <p class="hero-title reveal reveal-delay-1">
        Senior Software Engineer at <strong>{{ about.company }}</strong>
      </p>

      <p class="hero-description reveal reveal-delay-2">
        I build payment systems, developer tools, and platform
        infrastructure that operate at global scale.
      </p>

      <div class="hero-cta reveal reveal-delay-3">
        <button class="btn btn-primary" @click="scrollToWork">
          View Selected Work
          <ArrowDown :size="16" class="btn-icon" />
        </button>
        <a href="/files/Resume.pdf" download class="btn btn-secondary">
          Download Resume
        </a>
      </div>

      <div class="hero-social reveal reveal-delay-4">
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

    <button aria-label="Scroll to content" class="scroll-indicator reveal reveal-delay-5" @click="scrollToWork">
      <ArrowDown :size="20" />
    </button>
  </section>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  padding-top: var(--nav-height);
}

.hero-content {
  display: flex;
  flex-direction: column;
  padding: var(--space-4xl) 0 var(--space-3xl);

  @media (max-width: 768px) {
    padding: var(--space-2xl) 0;
  }
}

.hero-name {
  color: var(--text-primary);
  margin-bottom: var(--space-lg);
}

.hero-title {
  font-size: 20px;
  color: var(--text-secondary);
  margin-bottom: var(--space-lg);

  strong {
    color: var(--text-primary);
    font-weight: 600;
  }
}

.hero-description {
  font-size: 17px;
  color: var(--text-secondary);
  max-width: 560px;
  line-height: 1.7;
  margin-bottom: var(--space-xl);
}

.hero-cta {
  display: flex;
  gap: var(--space-md);
  margin-bottom: var(--space-xl);

  @media (max-width: 480px) {
    flex-direction: column;
  }
}

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
  position: relative;
  overflow: hidden;

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

.btn-primary {
  background: var(--accent);
  color: #fff;

  &:hover {
    background: var(--accent-hover);
    box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
    opacity: 1;
  }
}

.btn-secondary {
  border: 1px solid var(--border);
  color: var(--text-primary);

  &:hover {
    border-color: var(--accent);
    color: var(--accent);
    opacity: 1;
  }
}

.hero-social {
  display: flex;
  align-items: center;
  gap: var(--space-md);
  flex-wrap: wrap;
}

.dot {
  color: var(--border);
  user-select: none;
}

.scroll-indicator {
  position: absolute;
  bottom: var(--space-xl);
  right: var(--space-xl);
  color: var(--text-secondary);
  animation: float 3s ease-in-out infinite;
  transition: color var(--transition-fast);

  &:hover {
    color: var(--accent);
  }

  @media (max-width: 768px) {
    display: none;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(8px); }
}
</style>
