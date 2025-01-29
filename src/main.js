import Vue from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

Vue.use(ElementPlus)
Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
})