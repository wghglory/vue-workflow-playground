import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/about', name: 'about', component: About },
  {
    path: '/:currentPath(.*)*', // no matching found
    redirect: (_) => {
      return { path: '/404' };
    },
  },
];

// Create the router instance and pass the `routes` option
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    };
  },
});

export default router;
