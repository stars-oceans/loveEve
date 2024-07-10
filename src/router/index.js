import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
//   {
//     path: "/",
//     redirect: "/girlvideo",
//   },

  {
    path: "/",
    name: "girlvideo",
    component: () => import("../views/girlVideo/index.vue"),
  },
  {
    path: "/girlimg",
    name: "girlimg",
    component: () => import("../views/girlImg/index.vue"),
  },
  {
    path: "/girlImgluo",
    name: "girlImgluo",
    component: () => import("../views/girlImgluo/index.vue"),
  },
  
];
const router = new VueRouter({
  routes,
});

// router.beforeEach((to, from, next) => {
//   const token = Store.state.token;
//   if (to.path == "/login") {
//     next();
//   } else {
//     if (token) {
//       next();
//     } else {
//       next("/login");
//     }
//   }
// });

export default router;
// 七了个三