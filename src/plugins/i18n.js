import { createI18n } from "vue-i18n";

const messages = {
  en: {
    // Add your English translations here
  },
  // Add other languages as needed
};

export default createI18n({
  locale: "en",
  fallbackLocale: "en",
  messages,
});