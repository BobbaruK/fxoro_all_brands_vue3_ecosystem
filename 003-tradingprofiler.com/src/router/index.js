import { createRouter, createWebHistory } from "vue-router";

import brandRoutes from "../sites/brand/routes/brandRoutes";
import thankYouRoutes from "../sites/thankyou/routes/thankYouRoutes";
import pageNotFoundRoutes from "../sites/pagenotfound/routes/pageNotFoundRoutes";
import lpsRoutes from "../sites/lps/routes/lpsRoutes";

const routes = [
  /**
   * ! **Redirect to old amazon
   */
  //     {
  //       path: "amazon/",
  //       name: "AmazonOld",
  //       component: () => import("../sites/lps/old/amazon_old.vue"),
  //     },
  //   ],
  // },

  ...brandRoutes,
  ...thankYouRoutes,
  ...pageNotFoundRoutes,
  ...lpsRoutes,
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from) => {
//   console.log("schimbar");
// });

export default router;
