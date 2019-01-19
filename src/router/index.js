import Vue from 'vue'
import Router from 'vue-router'
const Goods = () => import('@/components/goods/Goods')
const Seller = () => import('@/components/seller/Seller')
const Ratings = () => import('@/components/comments/Ratings')

Vue.use(Router)

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
