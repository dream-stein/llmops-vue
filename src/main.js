import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import {createApp} from "vue";

const app = createApp(App)
app.use(router)
    .use(ElementPlus)
    .mount('#app')