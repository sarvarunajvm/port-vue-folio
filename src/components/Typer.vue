<template>
  <span class="typer-container">
    <span class="typer-text">{{ currentText }}</span>
    <span class="typer-cursor">|</span>
  </span>
</template>

<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  text: { type: Array, default: () => [] },
  preTypeDelay: { type: Number, default: 100 },
  typeDelay: { type: Number, default: 100 },
  preEraseDelay: { type: Number, default: 2000 },
  eraseDelay: { type: Number, default: 50 },
  repeat: { type: [Number, String], default: Infinity },
});

const currentText = ref("");

onMounted(async () => {
  let index = 0;
  let cycles = 0;
  
  // Initial delay
  await new Promise((r) => setTimeout(r, 500));

  while (cycles < props.repeat || props.repeat === Infinity) {
    const word = props.text[index % props.text.length] || "";
    
    // Pre-type delay
    await new Promise((r) => setTimeout(r, props.preTypeDelay));
    
    // Typing
    for (let i = 1; i <= word.length; i++) {
      currentText.value = word.slice(0, i);
      await new Promise((r) => setTimeout(r, props.typeDelay));
    }
    
    // Wait before erasing
    await new Promise((r) => setTimeout(r, props.preEraseDelay));
    
    // Erasing
    for (let i = word.length; i >= 0; i--) {
      currentText.value = word.slice(0, i);
      await new Promise((r) => setTimeout(r, props.eraseDelay));
    }
    
    index++;
    if (props.repeat !== Infinity) cycles++;
  }
});
</script>

<style scoped>
.typer-cursor {
  display: inline-block;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
  color: inherit;
  font-weight: inherit;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>
