<template>
  <v-card
    class="gist-card d-flex flex-column h-100"
    variant="outlined"
  >
    <div class="d-flex flex-column flex-grow-1 pa-4">
      <div class="d-flex justify-space-between align-start mb-2">
        <h3 class="subtitle1 font-weight-bold text-truncate pr-2 mb-0" style="color: var(--v-theme-accent)">
          {{ item.title }}
        </h3>
        <v-chip
          v-if="item.language"
          size="small"
          color="tertiary"
          variant="flat"
          class="standard-chip font-weight-bold"
        >
          {{ item.language }}
        </v-chip>
      </div>
      
      <p class="body2 secondary--text mb-0 line-clamp-3">
        {{ item.description || 'No description available' }}
      </p>
    </div>

    <v-divider class="mx-4 opacity-10"></v-divider>

    <div class="pa-2 d-flex justify-end">
      <v-btn
        variant="text"
        color="primary"
        size="small"
        class="font-weight-bold letter-spacing-1"
        @click="dialog = true"
      >
        VIEW CODE
        <v-icon end size="small">mdi-arrow-right</v-icon>
      </v-btn>
    </div>

    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar color="secondary" density="compact">
          <v-toolbar-title class="subtitle1 font-weight-bold text-white">
            {{ item.title }}
          </v-toolbar-title>
          <v-spacer />
          <v-btn
            icon
            variant="text"
            color="white"
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text class="pa-0">
          <GistEmbed
            :gist-id="item.gistId"
            :file="item.title"
          />
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script setup>
import GistEmbed from "./GistEmbed.vue";
import { ref } from "vue";

defineProps({
  item: Object,
});

const dialog = ref(false);
</script>

<style scoped>
.gist-card {
  background: rgba(var(--v-theme-background), 0.9);
  backdrop-filter: blur(10px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  height: 100%;
}

/* Light mode specific adjustments */
.v-theme--light .gist-card {
  background: rgba(255, 255, 255, 0.95) !important; /* Clean white for better contrast */
  border-color: rgba(var(--v-theme-primary), 0.25) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
}

/* Dark mode specific adjustments */
.v-theme--dark .gist-card {
  background: rgba(12, 53, 80, 0.6) !important; /* Lighter ocean blue for visibility */
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
}

.gist-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 24px -10px rgba(var(--v-theme-primary), 0.25);
  border-color: rgba(var(--v-theme-primary), 0.5);
}

/* Ensure text is readable in light mode */
.v-theme--light .secondary--text {
  color: rgba(var(--v-theme-secondary), 0.85) !important;
}

.v-theme--light .gist-card h3 {
  color: rgb(var(--v-theme-accent)) !important;
}

/* Ensure text is readable in dark mode */
.v-theme--dark .secondary--text {
  color: rgba(var(--v-theme-accent), 0.9) !important;
}

.v-theme--dark .gist-card h3 {
  color: rgb(var(--v-theme-accent)) !important;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.letter-spacing-1 {
  letter-spacing: 0.05em;
}

.opacity-10 {
  opacity: 0.1;
}

/* Standardized chip styling */
.standard-chip {
  font-size: 0.75rem !important;
  letter-spacing: 0.02em;
  min-height: 24px !important;
  padding: 4px 12px !important;
}
</style>
