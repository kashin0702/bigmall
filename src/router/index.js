import Vue from 'vue'
import VueRouter from 'vue-router'

// 首页直接导入，不使用懒加载
import Home from '../views/Home.vue'

Vue.use(VueRouter)

// 懒加载其他页面
const Category = () => import('views/Category')
const CartShop = () => import('views/CartShop')
const Profile = () => import('views/Profile')
const Detail = () => import('views/Detail')

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
    path: '/cartShop',
    component: CartShop
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
