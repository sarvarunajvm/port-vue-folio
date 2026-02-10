<template>
  <div class="impact-metrics">
    <div 
      v-for="(metric, index) in metrics" 
      :key="metric.label"
      class="metric-item"
      :style="{ animationDelay: `${index * 0.1}s` }"
    >
      <div class="metric-value">
        <span v-if="metric.prefix" class="value-prefix">{{ metric.prefix }}</span>
        <span class="value-number">{{ animatedValues[index] || 0 }}</span>
        <span v-if="metric.suffix" class="value-suffix">{{ metric.suffix }}</span>
      </div>
      <div class="metric-label">
        <span class="label-full">{{ metric.label }}</span>
        <span class="label-short">{{ metric.shortLabel || metric.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const metrics = [
  { value: 10, suffix: '+', label: 'Years Experience', shortLabel: 'Years' },
  { value: 4, suffix: '+', label: 'Companies', shortLabel: 'Cos.' },
  { value: 8, suffix: '+', label: 'Open Source Projects', shortLabel: 'Projects' },
  { value: 95, suffix: '%', label: 'On-Time Delivery', shortLabel: 'On-Time' },
];

const animatedValues = ref([]);

function animateValue(index, target, duration = 1500) {
  const start = 0;
  const startTime = performance.now();
  
  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    // Ease-out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    
    animatedValues.value[index] = Math.floor(start + (target - start) * easeOut);
    
    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  
  requestAnimationFrame(update);
}

onMounted(() => {
  // Initialize with zeros
  animatedValues.value = metrics.map(() => 0);
  
  // Stagger the animations
  metrics.forEach((metric, index) => {
    setTimeout(() => {
      animateValue(index, metric.value);
    }, 800 + index * 200);
  });
});
</script>

<style scoped>
.impact-metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  padding: 2rem 0;
}

.metric-item {
  text-align: center;
  animation: fadeSlideUp 0.6s ease-out forwards;
  opacity: 0;
}

.metric-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-primary));
  line-height: 1;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: baseline;
  justify-content: center;
}

.value-prefix {
  font-size: 1.5rem;
  opacity: 0.7;
}

.value-suffix {
  font-size: 1.25rem;
  font-weight: 500;
  margin-left: 2px;
  opacity: 0.7;
}

.metric-label {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
  opacity: 0.6;
  font-weight: 500;
}

.label-full {
  display: inline;
}

.label-short {
  display: none;
}

@keyframes fadeSlideUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 960px) {
  .impact-metrics {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .impact-metrics {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    padding: 1.5rem 0;
  }
  
  .metric-value {
    font-size: 1.75rem;
  }
  
  .metric-label {
    font-size: 0.65rem;
    letter-spacing: 0.02em;
  }
}

@media (max-width: 400px) {
  .label-full {
    display: none;
  }
  
  .label-short {
    display: inline;
  }
}

@media (max-width: 360px) {
  .metric-value {
    font-size: 1.5rem;
  }
  
  .value-suffix {
    font-size: 1rem;
  }
  
  .metric-label {
    font-size: 0.6rem;
    letter-spacing: 0;
  }
}
</style>


