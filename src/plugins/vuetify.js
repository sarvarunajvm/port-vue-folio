import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";

// "Warm Minimalist Elegance" Theme - Inspired by Wells Home Goods
// Reference: https://wellsw0vj2.zyrosite.com/
// A sophisticated, warm, and minimalist palette with rich neutrals
// Perfect for professional portfolios: timeless, elegant, and approachable

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
          background: "#D4C4B0", // Warm sand/latte - Elegant, inviting, sophisticated
          primary: "#1D1E20",    // Charcoal black - Strong, professional, modern
          secondary: "#3E3532",  // Warm dark brown - Earthy, grounded
          tertiary: "#8B7B6A",   // Taupe - Subtle, refined accent
          accent: "#1D1E20",     // Charcoal for strong contrast
          anchor: "#3E3532",     // Warm brown for links
          error: "#B85C50",      // Muted terracotta red
          info: "#8B7B6A",       // Taupe for info
          success: "#6B8E7F",    // Sage green
          warning: "#C89F5D",    // Warm gold/brass
        },
      },
      dark: {
        dark: true,
        colors: {
          background: "#081521", // Deep navy night sky - Slumber.fm inspired
          primary: "#1BA098",    // Calming teal/cyan - Soothing and peaceful
          secondary: "#001F33",  // Midnight blue - Deep and tranquil
          tertiary: "#0C3550",   // Ocean blue - Serene depth
          accent: "#E8EFF1",     // Soft white/ice blue - Clear text
          anchor: "#1BA098",     // Teal for links - Calm and inviting
          error: "#D07A6F",      // Soft coral
          info: "#1BA098",       // Teal for info
          success: "#5FAD85",    // Seafoam green
          warning: "#DEB992",    // Warm peach/gold - Gentle warmth
        },
      },
    },
  },
});

export default vuetify;
