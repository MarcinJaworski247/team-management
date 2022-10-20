import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/login",
    component: () => import("@/pages/LogIn.vue"),
    name: "login",
  },
  {
    path: "/signup",
    component: () => import("@/pages/SignUp.vue"),
    name: "signup",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
