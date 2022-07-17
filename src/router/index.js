import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "activeClass",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/pipelines",
      name: "pipelines",
      component: () => import("../views/PipelinesView.vue"),
    },
    {
      path: "/tracks",
      name: "tracks",
      component: () => import("../views/TracksView.vue"),
    },
    {
      path: "/tracks/:slug",
      name: "TrackPage",
      component: () => import("../components/songbooks/TrackPage.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../views/PrivacyView.vue"),
    },
    {
      path: "/terms",
      name: "terms",
      component: () => import("../views/TermsView.vue"),
    },
    {
      path: "/create-track",
      name: "CreateTrack",
      component: () => import("../views/CreateTrackView.vue"),
    },
  ],
});

export default router;
