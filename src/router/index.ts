import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
  },
  {
    path: '/consulting',
    name: 'consulting',
    component: () => import('@/views/ConsultingView.vue'),
  },
  {
    path: '/making',
    name: 'making',
    component: () => import('@/views/MakingView.vue'),
  },
  {
    path: '/wondering',
    name: 'wondering',
    component: () => import('@/views/WonderingView.vue'),
  },
  {
    path: '/adventuring',
    name: 'adventuring',
    component: () => import('@/views/AdventuringView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
})
