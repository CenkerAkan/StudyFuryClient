import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import Vue,{ createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import 'bootstrap-vue/dist/bootstrap-vue.css'

const app = createApp(App);
app.use(router);



app.mount('#app');
