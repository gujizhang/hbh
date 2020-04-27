import Vue from "vue"
import VueRouter from "vue-router"

const Shop =()=>import("../views/shop/Shop")
const Personage =()=>import("../views/personage/Personage")
const Goods =()=>import("../views/goods/Goods")
const Product =()=>import("../views/goods/childComponets/product/Product")
const ProductInfo =()=>import("../views/goods/childComponets/productInfo/ProductInfo")

Vue.use(VueRouter)
const routes=[
    {
        path: "",
        redirect: "/shop",
        meta: {
            title: "首页",
        }
    },
    {
        path: "/Shop",
        component: Shop
    },
    {
        path: "/personage",
        component: Personage
    },
    {
        path: "/goods",
        component: Goods
    },
    {
      path: "/product",
      component: Product
    },
    {
      path: "/productinfo",
      component: ProductInfo
    }
]
const router =new VueRouter({
    routes,
    mode:"history"
})
export default router


