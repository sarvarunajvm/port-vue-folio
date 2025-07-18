<template>
  <div 
    :class="glassClasses"
    class="glass-card"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <div class="glass-card-content">
      <slot />
    </div>
    <div v-if="shimmer" class="glass-shimmer-overlay" />
  </div>
</template>

<script>
import { computed, ref } from 'vue'
import { useTheme } from 'vuetify'

export default {
  name: 'GlassCard',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'small', 'large', 'floating'].includes(value)
    },
    blur: {
      type: String,
      default: 'medium',
      validator: (value) => ['light', 'medium', 'heavy'].includes(value)
    },
    hover: {
      type: Boolean,
      default: true
    },
    shimmer: {
      type: Boolean,
      default: false
    },
    elevation: {
      type: [Number, String],
      default: 1
    }
  },
  emits: ['mouseenter', 'mouseleave'],
  setup(props, { emit }) {
    const theme = useTheme()
    const isHovered = ref(false)
    
    const isDark = computed(() => 
      theme.current.value.dark || theme.global.name.value.includes('Dark')
    )
    
    const glassClasses = computed(() => [
      'glass-card',
      `glass-card-${props.variant}`,
      `glass-blur-${props.blur}`,
      `glass-elevation-${props.elevation}`,
      {
        'glass-card-dark': isDark.value,
        'glass-card-light': !isDark.value,
        'glass-card-hovered': isHovered.value && props.hover,
        'glass-card-no-hover': !props.hover
      }
    ])
    
    const handleMouseEnter = (event) => {
      isHovered.value = true
      emit('mouseenter', event)
    }
    
    const handleMouseLeave = (event) => {
      isHovered.value = false
      emit('mouseleave', event)
    }
    
    return {
      glassClasses,
      handleMouseEnter,
      handleMouseLeave
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/glass-theme.scss';

.glass-card {
  position: relative;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  border: 1px solid;
  overflow: hidden;
  transition: all var(--glass-animation-duration) var(--glass-animation-easing);
  
  &.glass-card-light {
    background: var(--glass-bg-light);
    border-color: var(--glass-border-light);
    box-shadow: 0 8px 32px var(--glass-shadow-light);
  }
  
  &.glass-card-dark {
    background: var(--glass-bg-dark);
    border-color: var(--glass-border-dark);
    box-shadow: 0 8px 32px var(--glass-shadow-dark);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    padding: 1px;
    background: linear-gradient(45deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1));
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    -webkit-mask-composite: xor;
    pointer-events: none;
  }
  
  // Variants
  &.glass-card-small {
    padding: 16px;
    border-radius: 12px;
  }
  
  &.glass-card-default {
    padding: 24px;
  }
  
  &.glass-card-large {
    padding: 32px;
    border-radius: 20px;
  }
  
  &.glass-card-floating {
    padding: 20px;
    border-radius: 18px;
    transform: translateY(-4px);
  }
  
  // Blur variants
  &.glass-blur-light {
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
  }
  
  &.glass-blur-medium {
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
  
  &.glass-blur-heavy {
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }
  
  // Elevation variants
  &.glass-elevation-1 {
    &.glass-card-light {
      box-shadow: 0 4px 16px var(--glass-shadow-light);
    }
    &.glass-card-dark {
      box-shadow: 0 4px 16px var(--glass-shadow-dark);
    }
  }
  
  &.glass-elevation-2 {
    &.glass-card-light {
      box-shadow: 0 8px 32px var(--glass-shadow-light);
    }
    &.glass-card-dark {
      box-shadow: 0 8px 32px var(--glass-shadow-dark);
    }
  }
  
  &.glass-elevation-3 {
    &.glass-card-light {
      box-shadow: 0 12px 48px var(--glass-shadow-light);
    }
    &.glass-card-dark {
      box-shadow: 0 12px 48px var(--glass-shadow-dark);
    }
  }
  
  // Hover effects
  &.glass-card-hovered:not(.glass-card-no-hover) {
    transform: translateY(-2px);
    
    &.glass-card-light {
      background: var(--glass-bg-light-strong);
      box-shadow: 0 12px 40px var(--glass-shadow-light);
    }
    
    &.glass-card-dark {
      background: var(--glass-bg-dark-strong);
      box-shadow: 0 12px 40px var(--glass-shadow-dark);
    }
    
    &.glass-card-floating {
      transform: translateY(-8px);
    }
  }
}

.glass-card-content {
  position: relative;
  z-index: 1;
}

.glass-shimmer-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, 
    rgba(255, 255, 255, 0) 0%, 
    rgba(255, 255, 255, 0.2) 50%, 
    rgba(255, 255, 255, 0) 100%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: inherit;
  pointer-events: none;
}
</style>