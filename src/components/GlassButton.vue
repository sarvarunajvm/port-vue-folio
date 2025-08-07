<template>
  <button 
    :class="glassClasses"
    class="glass-button"
    :disabled="disabled"
    @click="handleClick"
  >
    <div class="glass-button-content">
      <v-icon v-if="icon && iconPosition === 'start'" :icon="icon" class="glass-button-icon" />
      <span v-if="$slots.default" class="glass-button-text">
        <slot />
      </span>
      <v-icon v-if="icon && iconPosition === 'end'" :icon="icon" class="glass-button-icon" />
    </div>
    <div v-if="loading" class="glass-button-loading">
      <v-progress-circular indeterminate size="16" width="2" />
    </div>
  </button>
</template>

<script>
import { computed } from 'vue'
import { useTheme } from 'vuetify'

export default {
  name: 'GlassButton',
  props: {
    variant: {
      type: String,
      default: 'default',
      validator: (value) => ['default', 'primary', 'secondary', 'ghost', 'outline'].includes(value)
    },
    size: {
      type: String,
      default: 'default',
      validator: (value) => ['small', 'default', 'large'].includes(value)
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: null
    },
    iconPosition: {
      type: String,
      default: 'start',
      validator: (value) => ['start', 'end'].includes(value)
    },
    block: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  emits: ['click'],
  setup(props, { emit }) {
    const theme = useTheme()
    
    const isDark = computed(() => 
      theme.current.value.dark || theme.global.name.value.includes('Dark')
    )
    
    const glassClasses = computed(() => [
      'glass-button',
      `glass-button-${props.variant}`,
      `glass-button-${props.size}`,
      {
        'glass-button-dark': isDark.value,
        'glass-button-light': !isDark.value,
        'glass-button-disabled': props.disabled,
        'glass-button-loading': props.loading,
        'glass-button-block': props.block,
        'glass-button-rounded': props.rounded,
        'glass-button-icon-only': props.icon && !props.$slots.default
      }
    ])
    
    const handleClick = (event) => {
      if (!props.disabled && !props.loading) {
        emit('click', event)
      }
    }
    
    return {
      glassClasses,
      handleClick
    }
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/styles/glass-theme.scss';

.glass-button {
  position: relative;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-radius: 12px;
  border: 1px solid;
  cursor: pointer;
  font-weight: 500;
  transition: all var(--glass-animation-duration) var(--glass-animation-easing);
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  vertical-align: middle;
  user-select: none;
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.3);
  }
  
  // Base theme styles
  &.glass-button-light {
    background: var(--glass-bg-light);
    border-color: var(--glass-border-light);
    color: #2d3748;
    
    &:hover:not(.glass-button-disabled) {
      background: var(--glass-bg-light-strong);
      transform: translateY(-1px) scale(1.02);
    }
    
    &:active:not(.glass-button-disabled) {
      transform: translateY(0) scale(0.98);
    }
  }
  
  &.glass-button-dark {
    background: var(--glass-bg-dark);
    border-color: var(--glass-border-dark);
    color: #ffffff;
    
    &:hover:not(.glass-button-disabled) {
      background: var(--glass-bg-dark-strong);
      transform: translateY(-1px) scale(1.02);
    }
    
    &:active:not(.glass-button-disabled) {
      transform: translateY(0) scale(0.98);
    }
  }
  
  // Variant styles
  &.glass-button-primary {
    &.glass-button-light {
      background: rgba(102, 126, 234, 0.2);
      border-color: rgba(102, 126, 234, 0.4);
      color: #667eea;
      
      &:hover:not(.glass-button-disabled) {
        background: rgba(102, 126, 234, 0.3);
      }
    }
    
    &.glass-button-dark {
      background: rgba(127, 90, 240, 0.2);
      border-color: rgba(127, 90, 240, 0.4);
      color: #7f5af0;
      
      &:hover:not(.glass-button-disabled) {
        background: rgba(127, 90, 240, 0.3);
      }
    }
  }
  
  &.glass-button-secondary {
    &.glass-button-light {
      background: rgba(118, 75, 162, 0.2);
      border-color: rgba(118, 75, 162, 0.4);
      color: #764ba2;
      
      &:hover:not(.glass-button-disabled) {
        background: rgba(118, 75, 162, 0.3);
      }
    }
    
    &.glass-button-dark {
      background: rgba(44, 182, 125, 0.2);
      border-color: rgba(44, 182, 125, 0.4);
      color: #2cb67d;
      
      &:hover:not(.glass-button-disabled) {
        background: rgba(44, 182, 125, 0.3);
      }
    }
  }
  
  &.glass-button-ghost {
    background: transparent;
    border-color: transparent;
    
    &:hover:not(.glass-button-disabled) {
      &.glass-button-light {
        background: var(--glass-bg-light);
        border-color: var(--glass-border-light);
      }
      
      &.glass-button-dark {
        background: var(--glass-bg-dark);
        border-color: var(--glass-border-dark);
      }
    }
  }
  
  &.glass-button-outline {
    background: transparent;
    
    &.glass-button-light {
      border-color: rgba(45, 55, 72, 0.3);
      color: #2d3748;
      
      &:hover:not(.glass-button-disabled) {
        background: var(--glass-bg-light);
      }
    }
    
    &.glass-button-dark {
      border-color: rgba(255, 255, 255, 0.3);
      color: #ffffff;
      
      &:hover:not(.glass-button-disabled) {
        background: var(--glass-bg-dark);
      }
    }
  }
  
  // Size variants
  &.glass-button-small {
    padding: 8px 16px;
    font-size: 14px;
    border-radius: 8px;
    
    &.glass-button-icon-only {
      padding: 8px;
      width: 32px;
      height: 32px;
    }
  }
  
  &.glass-button-default {
    padding: 12px 24px;
    font-size: 16px;
    
    &.glass-button-icon-only {
      padding: 12px;
      width: 44px;
      height: 44px;
    }
  }
  
  &.glass-button-large {
    padding: 16px 32px;
    font-size: 18px;
    border-radius: 16px;
    
    &.glass-button-icon-only {
      padding: 16px;
      width: 56px;
      height: 56px;
    }
  }
  
  // State styles
  &.glass-button-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
  
  &.glass-button-loading {
    cursor: not-allowed;
    
    .glass-button-content {
      opacity: 0.7;
    }
  }
  
  // Layout styles
  &.glass-button-block {
    display: flex;
    width: 100%;
  }
  
  &.glass-button-rounded {
    border-radius: 50px;
  }
}

.glass-button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: opacity var(--glass-animation-duration) var(--glass-animation-easing);
}

.glass-button-icon {
  flex-shrink: 0;
}

.glass-button-text {
  white-space: nowrap;
}

.glass-button-loading {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

// Ripple effect
@keyframes glass-ripple {
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}

.glass-button::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.3);
  transform: translate(-50%, -50%);
  transition: width 0.6s, height 0.6s;
}

.glass-button:active::after {
  width: 300px;
  height: 300px;
  animation: glass-ripple 0.6s ease-out;
}
</style>