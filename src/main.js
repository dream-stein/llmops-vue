import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'
import {createApp} from "vue";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import './assets/main.css'

const app = createApp(App)

app.use(router)
    .use(ElementPlus)
    .mount('#app')

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}