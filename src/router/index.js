import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

const Goods = () => import('@/components/goods/goods')
const Seller = () => import('@/components/seller/seller')
const Ratings = () => import('@/components/ratings/ratings')

Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: { name: 'goods' }
    },
    {
      path: '/goods',
      name: 'goods',
      component: Goods
    },
    {
      path: '/seller',
      name: 'seller',
      component: Seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: Ratings
    }
  ]
})
