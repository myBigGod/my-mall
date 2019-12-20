import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=>import("../views/Home/Home.vue")
  },
  {
    path:'/category',
    component:()=>import("../views/Category/Category.vue")
  },
  {
    path:'/cart',
    component:()=>import("../views/Cart/Cart.vue")
  },
  {
    path:'/profile',
    component:()=>import("../views/Profile/Profile.vue")
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
