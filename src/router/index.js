import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Layout/Index.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('../views/Layout/Home.vue')
      },
      {
        path: 'about',
        name: 'About',
        component: () => import('../views/Layout/About.vue')
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import('../views/Layout/Products.vue')
      },
      { // 動態路由
        path: 'product/:id',
        name: 'Product',
        component: () => import('../views/Layout/Product.vue')
      },
      {
        path: 'cart',
        name: 'Cart',
        component: () => import('../views/Layout/Cart.vue')
      },
      {
        path: 'orderchecked',
        name: 'OrderChecked',
        component: () => import('../views/Layout/OrderChecked.vue')
      },
      {
        path: 'account',
        name: 'Account',
        component: () => import('../views/Layout/Account.vue')
      },
      {
        path: 'login',
        name: 'Login',
        component: () => import('../views/Layout/Login.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Dashboard',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products_dash',
        name: 'Products_dash',
        component: () => import('../views/Dashboard/Products_dash.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/Dashboard/Coupons.vue')
      },
      {
        path: 'image',
        name: 'Image',
        component: () => import('../views/Dashboard/Image.vue')
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Dashboard/Order.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
