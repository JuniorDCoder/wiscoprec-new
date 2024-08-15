import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

const routes = [
  {
    path: "/",
    name: "home",
    component: import(/* webpackChunkName: "home" */ "../views/HomeView.vue"),
    meta: {
      title: 'Home - WISCOPREC'
    }
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    meta: {
      title: 'About - WISCOPREC'
    }
  },
  {
    path: "/contact",
    name: "contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"),
    meta: {
      title: 'Contact - WISCOPREC'
    }
  },
  {
    path: '/team',
    name: "team",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/TeamView.vue"),
    meta: {
      title: 'Team - WISCOPREC'
    }
  },
  {
    path: '/gallery',
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/GalleryView.vue"),
    meta: {
      title: 'Gallery - WISCOPREC'
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Start the progress bar before each route change
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

// Complete the progress bar after each route change
router.afterEach(() => {
  NProgress.done();
});

export default router;
