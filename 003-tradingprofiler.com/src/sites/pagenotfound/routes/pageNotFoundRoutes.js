const pageNotFoundRoutes = [
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () => import("../PageNotFound.vue"),
  },
];

export default pageNotFoundRoutes;
