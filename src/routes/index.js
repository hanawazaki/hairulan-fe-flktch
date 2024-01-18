import { createRouter, createWebHistory } from "vue-router"
import HomeProduct from '../pages/Products/Index.vue'
import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'
import ProductDetail from '../pages/Products/Detail.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeProduct
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;