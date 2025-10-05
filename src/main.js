import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import mitt from "mitt";
import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";

const app = createApp(App);

// Simple event bus using mitt
const bus = mitt();
app.provide("bus", bus);
app.config.globalProperties.$bus = bus;

app.use(router);
app.use(vuetify);
app.mount("#app");
