import { createApp } from "vue";
import App from "./App.vue";
import VuePageTransition from "vue-page-transition";
import vuetify from "./plugins/vuetify";
import i18n from "./plugins/i18n";
import router from "./router";
import VueTyperPlugin from "vue-typer";
import mitt from "mitt";

// Create event bus using mitt
export const bus = mitt();

const app = createApp(App);

app.use(VuePageTransition);
app.use(VueTyperPlugin);
app.use(router);
app.use(vuetify);
app.use(i18n);

// Provide event bus globally
app.provide('bus', bus);

app.mount("#app");
