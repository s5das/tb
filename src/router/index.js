import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: () => import('../views/login.vue')
    },
    {
      path: '/TB',
      component: () => import('../views/TB.vue'),
      children: [
        {
          path: 'main',
          component: () => import('../views/information.vue')
        },
        {
          path: 'upload',
          component: () => import('../views/upload.vue')
        },
        {
          path: 'analyze',
          component: () => import('../views/analyze.vue')
        },
        {
          path: 'result',
          component: () => import('../views/result.vue')
        }
      ]
    }
  ]
})

export default router
