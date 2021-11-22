import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import VuexPage from './pages/VuexPage.vue';
import LogicFlowPage from './pages/LogicFlowPage.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/vuex', name: 'Vuex', component: VuexPage },
  { path: '/api', name: 'API', component: () => import('~/pages/ApiPage.vue') },
  { path: '/logic-flow', name: 'LogicFlow', component: LogicFlowPage },
  { path: '/not-found', name: 'NotFound', component: () => import('~/pages/NotFoundPage.vue') },
  {
    path: '/:currentPath(.*)*', // no matching found
    redirect: () => {
      return { path: '/not-found' };
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
