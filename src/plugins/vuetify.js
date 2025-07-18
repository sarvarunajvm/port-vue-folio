import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
  theme: {
    defaultTheme: "glassLight",
    themes: {
      glassLight: {
        dark: false,
        colors: {
          background: "rgba(255, 255, 255, 0.1)",
          surface: "rgba(255, 255, 255, 0.25)",
          "surface-variant": "rgba(255, 255, 255, 0.4)",
          primary: "#667eea",
          "primary-darken-1": "#5a6fd8",
          secondary: "#764ba2",
          "secondary-darken-1": "#6a4291",
          tertiary: "#ff9a9e",
          accent: "#fecfef",
          error: "#ff6b6b",
          info: "#4ecdc4",
          success: "#51cf66",
          warning: "#ffd43b",
          "on-background": "#2d3748",
          "on-surface": "#2d3748",
          "on-primary": "#ffffff",
          "on-secondary": "#ffffff",
          "glass-border": "rgba(255, 255, 255, 0.3)",
          "glass-shadow": "rgba(31, 38, 135, 0.37)",
        },
      },
      glassDark: {
        dark: true,
        colors: {
          background: "rgba(16, 16, 16, 0.1)",
          surface: "rgba(16, 16, 16, 0.25)",
          "surface-variant": "rgba(16, 16, 16, 0.4)",
          primary: "#7f5af0",
          "primary-darken-1": "#6c47d9",
          secondary: "#2cb67d",
          "secondary-darken-1": "#26a069",
          tertiary: "#ff6b6b",
          accent: "#ffd93d",
          error: "#ff6b6b",
          info: "#74c0fc",
          success: "#51cf66",
          warning: "#ffd43b",
          "on-background": "#ffffff",
          "on-surface": "#ffffff",
          "on-primary": "#ffffff",
          "on-secondary": "#ffffff",
          "glass-border": "rgba(255, 255, 255, 0.1)",
          "glass-shadow": "rgba(0, 0, 0, 0.5)",
        },
      },
      // Keep original themes for fallback
      light: {
        dark: false,
        colors: {
          background: "#fffffe",
          primary: "#3da9fc",
          secondary: "#90b4ce",
          tertiary: "#ef4565",
          accent: "#094067",
          anchor: "#242629",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#16161a",
          primary: "#7f5af0",
          secondary: "#72757e",
          tertiary: "#2cb67d",
          accent: "#fffffe",
          anchor: "#d8eefe",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
        },
      },
    },
  },
  defaults: {
    VCard: {
      elevation: 0,
      style: "backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);",
    },
    VAppBar: {
      elevation: 0,
      style: "backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);",
    },
    VNavigationDrawer: {
      elevation: 0,
      style: "backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px);",
    },
    VSheet: {
      elevation: 0,
    },
    VBtn: {
      style: "backdrop-filter: blur(10px); -webkit-backdrop-filter: blur(10px);",
    },
  },
});
