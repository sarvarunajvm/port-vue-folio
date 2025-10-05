<template>
  <v-card
    color="accent"
    class="mx-auto"
    outlined
    style="width: 100%; height: 100%;"
  >
    <v-card-text>
      <v-card-title class="background--text h6 myFont mb-1">
        {{ item.title }}
      </v-card-title>
      <v-list-item>
        <v-list-item-title class="tertiary--text ovrline mb-4">
          {{ item.language }}
        </v-list-item-title>
        <v-list-item-subtitle class="background--text myFont body2">
          {{ item.description }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-card-text>

    <v-card-actions>
      <v-row
        align="center"
        justify="end"
        align-content="center"
      >
        <v-btn
          class="mr-5"
          color="primary"
          @click="dialog = true"
        >
          OPEN
        </v-btn>
      </v-row>
    </v-card-actions>
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-toolbar color="secondary">
          <v-toolbar-title class="text--primary">
            {{ item.title }}
          </v-toolbar-title>
          <v-spacer />
          <v-btn
            icon
            color="primary"
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-subheader>{{ item.description }}</v-list-subheader>
        </v-list>
        <v-divider />
        <v-card-text>
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
const props = defineProps({
  item: Object,
});
import { ref } from "vue";
const dialog = ref(false);
</script>
