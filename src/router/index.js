import Vue from 'vue'
import VueRouter from 'vue-router'
import SearchResults from '../views/SearchResults.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'search',
    component: Search,
  },
  {
    path: '/searchResults',
    component: SearchResults,
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
