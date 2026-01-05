import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// "Industry Best" Theme: Modern Indigo/Slate
// Inspired by Vercel, Tailwind UI, and top-tier tech portfolios.
// Offers high contrast, accessibility, and a premium "Senior Engineer" feel.

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
          background: "#F8FAFC", // Slate 50 - Soft, modern off-white
          primary: "#4F46E5",    // Indigo 600 - The "Tech Trust" color
          secondary: "#64748B",  // Slate 500 - Professional neutral for subtext
          tertiary: "#0EA5E9",   // Sky 500 - Vibrant accent for interactions
          accent: "#0F172A",     // Slate 900 - Deep, rich dark for text (not harsh black)
          anchor: "#0F172A",     // Matching accent
          error: "#EF4444",      // Modern Red
          info: "#3B82F6",       // Modern Blue
          success: "#10B981",    // Modern Emerald
          warning: "#F59E0B",    // Modern Amber
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#020617", // Slate 950 - Deepest, darkest blue-grey
          primary: "#2DD4BF",    // Teal 400 - Vibrant, high-contrast pop against dark
          secondary: "#94A3B8",  // Slate 400
          tertiary: "#A78BFA",   // Violet 400 - Secondary accent
          accent: "#F8FAFC",     // Slate 50
          anchor: "#E2E8F0",     // Slate 200
          error: "#EF4444",
          info: "#3B82F6",
          success: "#10B981",
          warning: "#F59E0B",
        },
      },
    },
  },
});

export default vuetify;
