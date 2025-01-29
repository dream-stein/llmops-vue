import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    router: [
        {
            path: '/',
            name: 'home',
            meta: {title: '首页'},
            component: () => import('@/views/Home.vue'),
            children: [
                {
                    path: '/chat',
                    name: '聊天',
                    meta: {title: '聊天'},
                    component: () => import('@/views/ChatView.vue')
                }
            ]
        }
    ]
})

