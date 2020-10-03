import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Login from '../pages/login.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Login,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue'),
  },
  {
    path: '/budget',
    name: 'Budget',
    component: () => import(/* webpackChunkName: "budget" */ '../pages/budget.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
