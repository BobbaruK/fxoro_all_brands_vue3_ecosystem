const thankYouRoutes = [
  {
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import("../ThankYou.vue"),
    props: true,
  },
];

export default thankYouRoutes;
