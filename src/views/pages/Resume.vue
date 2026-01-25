<template>
  <v-container
    id="resume"
    class="pa-4 pa-md-12 background"
    tag="section"
    fluid
    fill-height
  >
    <div class="background-overlay"></div>
    <v-row
      justify="center"
      class="fill-height position-relative"
      style="z-index: 1;"
    >
      <v-col cols="12" md="10" lg="8">
        <div class="text-center mb-12 slide-up-item" style="animation-delay: 0.1s">
          <h2 class="h2 accent--text mb-4">
            Resume <span class="emoji">📄</span>
          </h2>
          <div class="divider mx-auto primary"></div>
        </div>

        <v-row class="justify-center align-start">
          <v-col cols="12" md="6" class="slide-up-item" style="animation-delay: 0.2s">
             <!-- Preview Section -->
            <v-card class="resume-preview-card pa-2" elevation="4">
              <v-img
                src="../../assets/Resume.gif"
                alt="Resume Preview"
                cover
                class="resume-image rounded"
              >
                <template #placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular indeterminate color="primary"></v-progress-circular>
                  </div>
                </template>
              </v-img>
            </v-card>
          </v-col>

          <v-col cols="12" md="5" class="d-flex flex-column justify-center slide-up-item" style="animation-delay: 0.3s">
            <v-card
              class="resume-card pa-8 text-center"
              variant="outlined"
              width="100%"
            >
              <div class="mb-8">
                <v-icon size="64" color="accent" class="mb-4">mdi-file-document-outline</v-icon>
                <h3 class="h4 font-weight-bold mb-2">Download My Resume</h3>
                <p class="body1 secondary--text">
                  Get a copy of my resume in PDF format to view offline or share.
                </p>
              </div>

              <v-btn
                color="accent"
                size="x-large"
                class="px-8 font-weight-bold download-btn"
                elevation="4"
                rounded="0"
                :loading="loading"
                @click="downloadPDF"
              >
                <v-icon start class="mr-2">mdi-download</v-icon>
                Download PDF
              </v-btn>
              
              <div class="mt-8 pt-8 border-top opacity-50">
                <p class="caption text-uppercase letter-spacing-2">Updated Recently</p>
              </div>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    loading: false
  }),
  methods: {
    downloadPDF() {
      this.loading = true;
      // Using direct link download instead of blob for better compatibility
      const link = document.createElement("a");
      link.href = "/files/Resume.pdf"; // Path relative to public
      link.download = "Saravanan_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: radial-gradient(circle at 50% 50%, rgba(var(--v-theme-tertiary), 0.05) 0%, transparent 50%);
  pointer-events: none;
}

.divider {
  width: 60px;
  height: 4px;
  background-color: rgb(var(--v-theme-primary));
  border-radius: 2px;
}

.resume-card {
  border-color: rgba(var(--v-theme-primary), 0.2);
  background: rgba(var(--v-theme-background), 0.9);
  backdrop-filter: blur(10px);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}

/* Light mode specific adjustments */
.v-theme--light .resume-card {
  background: rgba(255, 255, 255, 0.95) !important; /* Clean white for better contrast */
  border-color: rgba(var(--v-theme-primary), 0.25) !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
}

/* Dark mode specific adjustments */
.v-theme--dark .resume-card {
  background: rgba(12, 53, 80, 0.6) !important; /* Lighter ocean blue for visibility */
  border-color: rgba(var(--v-theme-primary), 0.3) !important;
}

.resume-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px -10px rgba(var(--v-theme-primary), 0.25);
  border-color: rgba(var(--v-theme-primary), 0.5);
}

/* Ensure text is readable in light mode */
.v-theme--light .secondary--text {
  color: rgba(var(--v-theme-secondary), 0.85) !important;
}

/* Ensure text is readable in dark mode */
.v-theme--dark .secondary--text {
  color: rgba(var(--v-theme-accent), 0.9) !important;
}

.resume-preview-card {
  transition: transform 0.3s ease;
  overflow: hidden;
}

.resume-preview-card:hover {
  transform: scale(1.02);
}

.download-btn {
  transition: transform 0.2s;
}

.download-btn:hover {
  transform: scale(1.05);
}

.emoji {
  display: inline-block;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-5px); }
}

@keyframes slideUpFade {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.slide-up-item {
  animation: slideUpFade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
  opacity: 0;
}

.border-top {
  border-top: 1px solid currentColor;
}

.letter-spacing-2 {
  letter-spacing: 0.15em;
}
</style>
