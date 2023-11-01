import './assets/main.css'
import router from './router';
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

app.use(router);

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0); 
    next();
  });

app.mount('#app');
