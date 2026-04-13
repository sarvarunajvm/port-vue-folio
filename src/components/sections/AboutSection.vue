<script setup>
import SectionHeading from '@/components/shared/SectionHeading.vue'
</script>

<template>
  <section id="about" class="section">
    <div class="container">
      <SectionHeading title="About" />

      <div class="about-content">
        <p class="reveal reveal-delay-1">
          With over a decade in software engineering, I specialize in building
          resilient backend systems, developer-facing tools, and cross-functional
          platform features. At PayPal, I've led initiatives spanning
          <span class="about-keyword">webhook infrastructure</span>,
          <span class="about-keyword">near real-time analytics</span>, and
          <span class="about-keyword">spam prevention systems</span>
          that serve millions of merchants.
        </p>
        <p class="reveal reveal-delay-2">
          Previously at AssetPulse, Wellspring Software Labs, and CoreNett
          Technologies — shipping production systems since 2014. I care about
          <span class="about-keyword">developer experience</span>,
          <span class="about-keyword">system reliability</span>, and building things that
          last.
        </p>
        <p class="about-education reveal reveal-delay-3">
          M.C.A &amp; B.C.A in Computer Applications — University of Madras &amp; Gurunanak College.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.about-content {
  max-width: 640px;

  p {
    color: var(--text-secondary);
    margin-bottom: var(--space-lg);
    font-size: 17px;
    line-height: 1.7;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.about-education {
  font-size: 15px !important;
  color: var(--text-secondary);
  opacity: 0.7;
}

.about-keyword {
  color: var(--text-secondary);
  transition: color 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: 0.4s;

  .revealed & {
    color: var(--text-primary);
    font-weight: 500;
  }
}
</style>
