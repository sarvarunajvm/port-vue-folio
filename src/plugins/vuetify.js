import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

const vuetify = createVuetify({
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: { mdi },
  },
  theme: {
    defaultTheme: "light",
    themes: {
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
});

export default vuetify;
