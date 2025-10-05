<template>
  <span>{{ currentText }}</span>
</template>
<script setup>
import { ref, onMounted } from "vue";
const props = defineProps({
  text: { type: Array, default: () => [] },
  preTypeDelay: { type: Number, default: 100 },
  typeDelay: { type: Number, default: 100 },
  preEraseDelay: { type: Number, default: 3000 },
  eraseDelay: { type: Number, default: 300 },
  repeat: { type: [Number, String], default: Infinity },
});
const currentText = ref("");
onMounted(async () => {
  let index = 0;
  let cycles = 0;
  while (cycles < props.repeat) {
    const word = props.text[index % props.text.length] || "";
    await new Promise((r) => setTimeout(r, props.preTypeDelay));
    for (let i = 1; i <= word.length; i++) {
      currentText.value = word.slice(0, i);
      await new Promise((r) => setTimeout(r, props.typeDelay));
    }
    await new Promise((r) => setTimeout(r, props.preEraseDelay));
    for (let i = word.length; i >= 0; i--) {
      currentText.value = word.slice(0, i);
      await new Promise((r) => setTimeout(r, props.eraseDelay));
    }
    index++;
    cycles++;
  }
});
</script>
