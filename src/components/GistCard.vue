<template>
  <div class="gist-card" @click="dialog = true">
    <div class="card-content">
      <div class="card-header">
        <div class="gist-icon">
          <v-icon size="20">mdi-code-braces</v-icon>
        </div>
        <v-chip
          v-if="item.language"
          size="small"
          class="language-chip"
        >
          {{ item.language }}
        </v-chip>
      </div>
      
      <h3 class="gist-title">{{ item.title }}</h3>
      <p class="gist-description">
        {{ item.description || 'No description available' }}
      </p>
    </div>

    <div class="card-footer">
      <span class="view-link">
        View Code
        <v-icon size="14" class="ml-1">mdi-arrow-right</v-icon>
      </span>
    </div>

    <!-- Dialog for viewing gist -->
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
            @click.stop="dialog = false"
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
  </div>
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
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 1.25rem;
  background: rgba(var(--v-theme-primary), 0.02);
  border: 1px solid rgba(var(--v-theme-primary), 0.08);
  border-radius: 16px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.gist-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.2);
  box-shadow: 0 12px 30px rgba(var(--v-theme-primary), 0.1);
}

.gist-card:hover .view-link {
  color: rgb(var(--v-theme-primary));
}

.gist-card:hover .view-link .v-icon {
  transform: translateX(4px);
}

.card-content {
  flex: 1;
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.gist-icon {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background: rgba(var(--v-theme-primary), 0.1);
  color: rgb(var(--v-theme-primary));
}

.language-chip {
  font-size: 0.7rem !important;
  font-weight: 600;
  letter-spacing: 0.02em;
  padding: 0.2rem 0.6rem !important;
  background: rgba(var(--v-theme-tertiary), 0.12) !important;
  color: rgb(var(--v-theme-tertiary)) !important;
  border-radius: 6px;
}

.gist-title {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-accent));
  margin-bottom: 0.5rem;
  line-height: 1.4;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.gist-description {
  font-size: 0.85rem;
  line-height: 1.5;
  opacity: 0.7;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin: 0;
}

.card-footer {
  padding-top: 1rem;
  margin-top: auto;
  border-top: 1px solid rgba(var(--v-theme-primary), 0.06);
}

.view-link {
  display: inline-flex;
  align-items: center;
  font-size: 0.8rem;
  font-weight: 600;
  color: rgba(var(--v-theme-accent), 0.6);
  transition: color 0.2s ease;
}

.view-link .v-icon {
  transition: transform 0.2s ease;
}
</style>
