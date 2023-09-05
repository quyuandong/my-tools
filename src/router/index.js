import { createWebHistory,createWebHashHistory, createRouter } from 'vue-router'
import Layout from "@/components/Layout/index.vue";

export const constantRoutes = [
  {
    path: '/my-tools/',
    component: Layout,
    redirect: '/my-tools/tools',
    hidden: true,
    children: [
      {
        path: '/my-tools/home',
        component: () => import('@/views/home/index.vue')
      },
      {
        path: '/my-tools/games',
        component: () => import('@/views/games/index.vue')
      },
      {
        path: '/my-tools/tools',
        component: () => import('@/views/tools/index.vue')
      },
      {
        path: '/my-tools/notes',
        component: () => import('@/views/notes/index.vue')
      },
      {
        path: '/my-tools/relax',
        component: () => import('@/views/relax/index.vue')
      },
      {
        path: '/my-tools/demos',
        component: () => import('@/views/demos/index.vue')
      },
    ],
  },
  {
    path: '/my-tools/links',
    name: 'linkes',
    component: () => import('@/views/links/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/my-tools/tools',
    hidden: true
  }
]

const createRoute = () =>
  createRouter({
    history: createWebHistory(),
    routes: constantRoutes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition
      } else {
        return { top: 0 }
      }
    }
  })

const router = createRoute()
export default router
