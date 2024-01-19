import { createRouter, createWebHistory } from "vue-router"
import HomeProduct from '../pages/Products/Index.vue'
import Login from '../pages/Auth/Login.vue'
import Register from '../pages/Auth/Register.vue'
import ProductDetail from '../pages/Products/Detail.vue'

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeProduct,
    meta: { layout: 'AuthenticatedLayout' }
  },
  {
    path: "/product/:id",
    name: "ProductDetail",
    component: ProductDetail,
    meta: { layout: 'AuthenticatedLayout' }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: { layout: 'AuthLayout' }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: { layout: 'AuthLayout' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;