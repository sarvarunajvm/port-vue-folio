import Vue from "vue";
import Vuetify from 'vuetify/lib/framework'
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import VueI18n from "vue-i18n";

Vue.use(Vuetify);
Vue.use(VueI18n);
Vuetify.config.silent = true
Vue.config.devtools = true

const options = {
  breakpoint: {
    breakpoints: {
      xs: true,
      sm: true,
      md: true,
      lg: true,
    },
    scrollBarWidth: 8,
    thresholds: {
      xs: 600,
      sm: 960,
      md: 1280,
      lg: 1920,
    },
  },
  icons: {
    iconfont: "mdi",
  },
  lang: {
    t: (key, ...params) => VueI18n.t(key, params),
  },
  rtl: false,
  theme: {
    dark: false,
    default: "light",
    disable: false,
    options: {
      customProperties: true,
    },
    themes: {
      light: {
        background:'#fffffe',
        primary: '#3da9fc',
        secondary: '#90b4ce',
        tertiary: '#ef4565',
        accent: '#094067',
        anchor: '#242629',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
      dark: {
        background:'#16161a',
        primary: '#7f5af0',
        secondary: '#72757e',
        tertiary: '#2cb67d',
        accent: '#fffffe',
        anchor: '#d8eefe',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
};

export default new Vuetify({
  ...options,
});
