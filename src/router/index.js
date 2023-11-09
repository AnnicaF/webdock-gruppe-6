import { createRouter, createWebHistory } from 'vue-router'
import Feature        from '../views/Feature.vue'
  import Roadmap from '@/views/Roadmap.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Feature',
      component: Feature,
    },
    {
      path: '/roadmap',
      name: 'Roadmap',
      component: Roadmap,
    },
  ]
})

export default router