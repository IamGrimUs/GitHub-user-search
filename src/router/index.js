import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import SingleUser from '../views/SingleUser.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
  },
  {
    path: '/allUsers',
    component: Dashboard,
  },
  {
    path: '/singleUser',
    component: SingleUser,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
