import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/pages/auth/LogIn.vue"),
    name: "login",
  },
  {
    path: "/signup",
    component: () => import("@/pages/auth/SignUp.vue"),
    name: "signup",
  },
  {
    path: "/dashboard",
    component: () => import("@/pages/dashboard/Index.vue"),
    name: "dashboard",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
