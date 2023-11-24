import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"

// added font-awesome & material icons
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import * as MdIcons from "oh-vue-icons/icons/md";
const Fa = Object.values({ ...FaIcons });
const Md = Object.values({ ...MdIcons });
addIcons(...Md);
addIcons(...Fa);

const app = createApp(App);
app.component("v-icon", OhVueIcon);
app.use(router);
app.mount("#app");

// createApp(App)
//     .use(router)
//     .mount('#app')
