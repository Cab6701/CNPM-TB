import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import VueFontawesome from "font-awesome/css/font-awesome.min.css";
import VueCarousel from 'vue-carousel';

const app = createApp(App)
app.use(VueFontawesome);
app.use(VueCarousel);
app.mount('#app');