import Vue from 'vue'
import VueRouter from 'vue-router'
// 1.安装插件
Vue.use(VueRouter);


// const Home = () => import('../')
// const Category = () => import('../views/category/Category')
// const Cart = () => import('../views/cart/Cart')
// const Profile = () => import('../views/profile/Profile')

import Home from '../views/home/Home.vue'
import Category from '../views/category/Category.vue'
import Cart from '../views/cart/Cart.vue'
import Profile from '../views/profile/Profile.vue'

// 2.创建router
const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/profile',
    component: Profile
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})


export default router
