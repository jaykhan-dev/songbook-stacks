import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import { MotionPlugin } from "@vueuse/motion";
import { createPinia } from "pinia";
import router from "./router";

import { Buffer } from "@stacks/common";

window.Buffer = window.Buffer || Buffer;

const app = createApp(App);

app.use(MotionPlugin);
app.use(createPinia());
app.use(router);

app.mount("#app");
