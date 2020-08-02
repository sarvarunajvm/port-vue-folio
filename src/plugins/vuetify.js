import Vue from "vue";
import Vuetify from "vuetify/lib";
import "material-design-icons-iconfont/dist/material-design-icons.css"; // Ensure you are using css-loader
import VueI18n from "vue-i18n";
import { preset } from 'vue-cli-plugin-vuetify-preset-reply/preset'

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
    iconfont: "md",
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
      //   cspNonce: undefined,
      //   customProperties: undefined,
      //   minifyTheme: undefined,
      //   themeCache: undefined,
    },
    // themes: {
    //   light: {
    //     primary: '#1976D2',
    //     secondary: '#424242',
    //     accent: '#82B1FF',
    //     error: '#FF5252',
    //     info: '#2196F3',
    //     success: '#4CAF50',
    //     warning: '#FB8C00',
    //   },
    //   dark: {
    //     primary: '#2196F3',
    //     secondary: '#424242',
    //     accent: '#FF4081',
    //     error: '#FF5252',
    //     info: '#2196F3',
    //     success: '#4CAF50',
    //     warning: '#FB8C00',
    //   },
    // },
  },
};

export default new Vuetify({
  preset,
  ...options,
});
