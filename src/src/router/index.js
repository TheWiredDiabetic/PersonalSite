import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
        showHeader: true
      }
    },
    {
      path: '/changes',
      name: 'chan',
      component: () => import('../views/Changelog.vue'),
      meta: {
        title: 'Changelog',
        showHeader: false
      }
    }
  ]
});

router.afterEach((to) => {
  document.title = to.meta.title || 'Vite App';
});

export default router
