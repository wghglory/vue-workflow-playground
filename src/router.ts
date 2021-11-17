import { createRouter, createWebHistory } from 'vue-router';

import Home from './pages/Home.vue';
import About from './pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
];

// Create the router instance and pass the `routes` option
export const router = createRouter({
  history: createWebHistory(),
  routes,
});
