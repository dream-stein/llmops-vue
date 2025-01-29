import Vue from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router/index'

Vue.use(ElementPlus)
Vue.config.productionTip = false

export const eventBus = new Vue()

new Vue({
    el: '#app',
    router,
    ElementPlus,
    components: {App},
    template: '<App/>',
})