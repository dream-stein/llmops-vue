import {createRouter, createWebHashHistory} from "vue-router";

const routes =[
    {
        path:'/',
        name: 'home',
        redirect: '/user',
        component: () => import('@/views/HomeView.vue'),
        children:[
            {
                path:'/chat',
                component: () => import('@/views/ChatView.vue')
            },
            {
                path:'/user',
                name: 'user',
                component: () => import('@/views/UserView.vue')
            },
            {
                path:'/application',
                name: 'application',
                component: () => import('@/views/ApplicationView.vue')
            }
        ]
    }
]

let route = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default route;

