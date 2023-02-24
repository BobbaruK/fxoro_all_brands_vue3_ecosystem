import breadCrumbs from "./breadCrumbs.js";

import languages from "../composables/languages";
const { defaultLang } = languages();

const brandRoutes = [
  {
    // redirect
    path: "/",
    name: "HomeRedirect",
    redirect: { name: "Home", params: { lang: `${defaultLang}` } },
  },
  {
    // /lp redirect
    path: "/lp",
    redirect: `/${defaultLang}`,
  },
  {
    path: "/",
    name: "Brand",
    component: () => import("../Brand.vue"),
    props: true,
    children: [
      //
      // Home
      {
        path: ":lang",
        name: "Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default brandRoutes;
