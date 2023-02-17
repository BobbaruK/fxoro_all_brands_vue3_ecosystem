import { createApp } from "vue";
import { createPinia } from "pinia";
import { createHead } from "@unhead/vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();
const head = createHead();

app.use(head).use(router).use(pinia);
app.mount("#siteWrapper");
