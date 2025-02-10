import { createRouter, createWebHistory } from 'vue-router'
import { isLogin } from '@/util/auth.ts'
import DefaultLayout from '@/views/layout/DefaultLayout.vue'
import BlankLayout from '@/views/layout/BlankLayout.vue'
// import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: 'space/apps',
          name: 'space-apps-list',
          component: () => import('@/views/space/apps/ListView.vue'),
        },
      ],
    },
    {
      path: '/',
      component: BlankLayout,
      children: [
        {
          path: 'auth/login',
          name: 'auth-login',
          component: () => import('@/views/auth/LoginView.vue'),
        },
      ],
    },
  ],
})

router.beforeEach(async (to, from) => {
  if (!isLogin() && to.name != 'auth-login') {
    return { path: '/auth/login' }
  }
  console.log('to : ', to)
  console.log('from : ', from)
})

export default router
