// Router
import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../components/Home.vue'
import Portfolio from '../components/portfolio/Portfolio.vue'
import Stocks from '../components/stocks/Stocks.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {path: '/', name:'home', component: Home},
    {path: '/portfolio', name: 'portfolio', component: Portfolio},
    {path: '/stocks', name: 'stocks', component: Stocks}
  ],
  mode: 'history'
})
