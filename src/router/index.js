import {createRouter, createWebHashHistory} from "vue-router";

const routes =[
    {
        path:'/chat',
        component: () => import('@/views/ChatView.vue')
    },
    {
        path:'/',
        component: () => import('@/views/HomeView.vue'),
    }
]

let route = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default route;

