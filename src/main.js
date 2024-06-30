import Buefy from "buefy";
import "buefy/dist/buefy.css"; // BuefyのCSS
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(Buefy).mount("#app");
