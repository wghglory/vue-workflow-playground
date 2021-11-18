import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import AboutPage from './pages/AboutPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/about', name: 'About', component: AboutPage },
  { path: '/api', name: 'API', component: () => import('~/pages/ApiPage.vue') },
  {
    path: '/:currentPath(.*)*', // no matching found
    redirect: () => {
      return { path: '/404' };
    },
  },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
