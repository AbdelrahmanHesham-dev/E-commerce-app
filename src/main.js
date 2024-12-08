import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";

// emitter
import mitt from "mitt";
const emitter = mitt();

// swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

const pinia = createPinia();

createApp(App)
  .use(vuetify)
  .provide("emitter", emitter)
  .use(pinia)
  .use(router)
  .mount("#app");
