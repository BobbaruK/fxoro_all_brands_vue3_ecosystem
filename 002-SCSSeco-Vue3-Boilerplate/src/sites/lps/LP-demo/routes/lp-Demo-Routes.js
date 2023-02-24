import breadCrumbs from "./breadCrumbs.js";

import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpDemoRoutes = [
  {
    // redirect
    path: "demo/",
    redirect: { name: "Demo1Home", params: { lang: `${defaultLang}` } },
  },
  {
    // redirect
    path: "demo/v1",
    redirect: { name: "Demo1Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "demo/v1",
    name: "Demo",
    component: () => import("../Demo.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "Demo1Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.Demo.Home,
        },
      },
      {
        // About
        path: ":lang/about",
        name: "Demo1AboutRoot",
        component: () => import("../views/about/About.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "Demo1About",
            component: () => import("../views/about/about/About.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.Demo.AboutRoot.About,
            },
          },
          {
            path: "lp",
            name: "Demo1AboutLP",
            component: () => import("../views/about/about_lp/AboutLP.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.Demo.AboutRoot.LP,
            },
          },
        ],
      },
      {
        // Services
        path: ":lang/services",
        name: "Demo1Services",
        component: () => import("../views/services/Services.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.Demo.Services,
        },
      },
      {
        // Contact
        path: ":lang/contact",
        name: "Demo1Contact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.Demo.Contact,
        },
      },
    ],
  },
];

export default lpDemoRoutes;
