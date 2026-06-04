import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './HomePage.vue'
import AboutPage from './AboutPage.vue'
import PiniaPage from './PiniaPage.vue'

// definisikan route
const routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/about',
    component: AboutPage,
  },
  {
    path: '/pinia',
    component: PiniaPage,
  },
]

// instansiasi router

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
