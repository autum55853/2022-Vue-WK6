import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "FrontView",
    component: () => import("../views/FrontView.vue"),
    children: [
      {
        path: "products",
        name: "products",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/Front/ProductsView.vue"),
      },
      {
        path: "product/:id",
        name: "product",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/Front/ProductView.vue"),
      },
      {
        path: "cart",
        name: "cart",
        component: () => import("../views/Front/CartView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LogIn.vue"),
  },
  {
    path: "/admin",
    name: "DashBoard",
    component: () => import("../views/DashBoardView.vue"),
    children: [
      {
        path: "AdminProducts",
        name: "AdminProducts",
        component: () => import("../views/Dashboard/AdminProducts.vue"),
      },
      {
        path: "coupon",
        name: "AdminCoupon",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/Dashboard/AdminCoupon.vue"),
      },
      {
        path: "article",
        name: "AdminArticle",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import("../views/Dashboard/AdminArticle.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: "active", //若連結啟用時,則加上 bootstrap樣式
});

export default router;
