import Vue from 'vue'
import VueRouter from 'vue-router'

// 安装路由
Vue.use(VueRouter)

export default new VueRouter({
    router: [
        {
            path: '/',
            name: 'homeView',
            meta: {title: '首页'},
            component: () => import('@/views/HomeView.vue'),
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

