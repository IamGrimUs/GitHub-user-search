import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '../views/Dashboard.vue';
import Search from '../views/Search.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search
  },
  {
    path: '/dashboard',
    component: Dashboard
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
