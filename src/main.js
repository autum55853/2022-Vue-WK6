import { createApp } from "vue";
//不需要調用,直接匯入
import "bootstrap";
//需要"調用" 的匯入
import axios from "axios";
import VueAxios from "vue-axios";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.use(router);
app.use(VueAxios, axios);
app.mount("#app");
