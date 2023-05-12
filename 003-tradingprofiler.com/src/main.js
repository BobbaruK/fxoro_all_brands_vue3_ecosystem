import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@unhead/vue";
import { VueReCaptcha } from "vue-recaptcha-v3";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

app
  .use(head)
  .use(router)
  .use(pinia)
  .use(VueReCaptcha, {
    siteKey: process.env.VUE_APP_GCAPTCHA_KEY,
    loaderOptions: {
      useRecaptchaNet: true,
    },
  });
app.mount("#siteWrapper");
