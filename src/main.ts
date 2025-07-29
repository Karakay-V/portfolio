import { createApp } from 'vue';
import App from './App.vue';
import VueScrollTo from 'vue-scrollto';
import AOS from 'aos';
import 'aos/dist/aos.css';
import FloatingVue from 'floating-vue';
import 'floating-vue/dist/style.css';

AOS.init();

const app = createApp(App)

app.use(VueScrollTo);
app.use(FloatingVue);

app.mount('#app')
