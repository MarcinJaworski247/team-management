import { createApp } from "vue";
import { createPinia } from "pinia";
import "./assets/styles/main.scss";
import router from "./router";
import App from "./App.vue";
import i18n from "./i18n";

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(i18n);

app.mount("#app");
