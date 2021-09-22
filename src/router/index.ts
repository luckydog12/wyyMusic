import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/",
    name: "public",
    component: () => import("../views/public.vue"),
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("../views/home.vue"),
      },
      {
        path: "musicList",
        name: "MusicList",
        component: () => import("../views/musicList.vue"),
      },
      {
        path: "boke",
        name: "Boke",
        component: () => import("../views/boke.vue"),
      },
      {
        path: "my",
        name: "My",
        component: () => import("../views/my.vue"),
      },
      {
        path: "follow",
        name: "Follow",
        component: () => import("../views/follow.vue"),
      },
      {
        path: "yuncun",
        name: "Yuncun",
        component: () => import("../views/yuncun.vue"),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
