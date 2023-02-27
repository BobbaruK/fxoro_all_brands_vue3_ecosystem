import breadCrumbsV1 from "./breadCrumbsV1.js";
import breadCrumbsV2 from "./breadCrumbsV2.js";
import breadCrumbsV3 from "./breadCrumbsV3.js";

import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpDemoRoutes = [
  {
    // redirect
    path: "demo/",
    redirect: { name: "DemoV1Home", params: { lang: `${defaultLang}` } },
  },
  {
    // redirect
    path: "demo/v1",
    redirect: { name: "DemoV1Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "demo/v1",
    name: "Demo",
    component: () => import("../DemoV1.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "DemoV1Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV1.Demo.Home,
        },
      },
      {
        // About
        path: ":lang/about",
        name: "DemoV1AboutRoot",
        component: () => import("../views/about/About.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "DemoV1About",
            component: () => import("../views/about/about/About.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbsV1.Demo.AboutRoot.About,
            },
          },
          {
            path: "lp",
            name: "DemoV1AboutLP",
            component: () => import("../views/about/about_lp/AboutLP.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbsV1.Demo.AboutRoot.LP,
            },
          },
        ],
      },
      {
        // Services
        path: ":lang/services",
        name: "DemoV1Services",
        component: () => import("../views/services/Services.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV1.Demo.Services,
        },
      },
      {
        // Contact
        path: ":lang/contact",
        name: "DemoV1Contact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV1.Demo.Contact,
        },
      },
    ],
  },

  {
    // redirect
    path: "demo/v2",
    redirect: { name: "DemoV2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "demo/v2",
    name: "DemoV2",
    component: () => import("../DemoV2.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "DemoV2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV2.Demo.Home,
        },
      },
      {
        // About
        path: ":lang/about",
        name: "DemoV2AboutRoot",
        component: () => import("../views/about/About.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "DemoV2About",
            component: () => import("../views/about/about/About.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbsV2.Demo.AboutRoot.About,
            },
          },
          {
            path: "lp",
            name: "DemoV2AboutLP",
            component: () => import("../views/about/about_lp/AboutLP.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbsV2.Demo.AboutRoot.LP,
            },
          },
        ],
      },
      {
        // Services
        path: ":lang/services",
        name: "DemoV2Services",
        component: () => import("../views/services/Services.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV2.Demo.Services,
        },
      },
      {
        // Contact
        path: ":lang/contact",
        name: "DemoV2Contact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV2.Demo.Contact,
        },
      },
    ],
  },

  {
    // redirect
    path: "demo/v3",
    redirect: { name: "DemoV3Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "demo/v3",
    name: "DemoV3",
    component: () => import("../DemoV3.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "DemoV3Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV3.Demo.Home,
        },
      },
      {
        // About
        path: ":lang/about",
        name: "DemoV3AboutRoot",
        component: () => import("../views/about/About.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "DemoV3About",
            component: () => import("../views/about/about/About.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbsV3.Demo.AboutRoot.About,
            },
          },
          {
            path: "lp",
            name: "DemoV3AboutLP",
            component: () => import("../views/about/about_lp/AboutLP.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbsV3.Demo.AboutRoot.LP,
            },
          },
        ],
      },
      {
        // Services
        path: ":lang/services",
        name: "DemoV3Services",
        component: () => import("../views/services/Services.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV3.Demo.Services,
        },
      },
      {
        // Contact
        path: ":lang/contact",
        name: "DemoV3Contact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV3.Demo.Contact,
        },
      },
    ],
  },
];

export default lpDemoRoutes;
