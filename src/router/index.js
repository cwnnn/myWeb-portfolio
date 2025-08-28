import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectView from '../views/ProjectView.vue'
import ProjectDetailView from '@/views/ProjectDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
    {
      path: '/projects/:to',
      name: 'projectdetail',
      component: ProjectDetailView,
    },
    {
      path: '/aboutme',
      name: 'aboutme',
      component: () => import('../views/aboutMeView.vue'),
    }
  ],
})

router.beforeEach((next) => {
  window.scrollTo({ top: 0, behavior: 'smooth' })

  setTimeout(() => {
    next()
  }, 300)
})

export default router
