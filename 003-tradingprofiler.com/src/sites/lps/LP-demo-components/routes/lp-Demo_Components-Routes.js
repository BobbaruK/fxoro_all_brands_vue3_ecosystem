import breadCrumbs from "./breadCrumbs.js";

import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpDemoComponentsRoutes = [
  {
    // redirect
    path: "demo-components/",
    redirect: { name: "DemoComponentsHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "demo-components/",
    name: "DemoComponents",
    component: () => import("../DemoComponents.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "DemoComponentsHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.DemoComponents.Home,
        },
      },
      {
        // About
        path: ":lang/about",
        name: "DemoComponentsAboutRoot",
        component: () => import("../views/about/About.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "DemoComponentsAbout",
            component: () => import("../views/about/about/About.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.AboutRoot.About,
            },
          },
          {
            path: "lp",
            name: "DemoComponentsAboutLP",
            component: () => import("../views/about/about_lp/AboutLP.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.AboutRoot.LP,
            },
          },
        ],
      },
      //
      // Components
      {
        // redirect
        path: ":lang/components",
        redirect: { name: "DemoComponentsComponentsCountdown", params: { lang: `${defaultLang}` } },
      },
      {
        path: ":lang/components",
        name: "DemoComponentsComponentsRoot",
        component: () => import("../views/components/Components.vue"),
        props: true,
        children: [
          {
            path: "accordion",
            name: "DemoComponentsComponentsAccordion",
            component: () => import("../views/components/accordion/Accordion.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Accordion,
            },
          },
          {
            path: "back-to-top",
            name: "DemoComponentsComponentsBackToTop",
            component: () => import("../views/components/backToTop/BackToTop.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.BackToTop,
            },
          },
          {
            path: "badge",
            name: "DemoComponentsComponentsBadge",
            component: () => import("../views/components/badge/Badge.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Badge,
            },
          },
          {
            path: "breadcrumb",
            name: "DemoComponentsComponentsBreadcrumb",
            component: () => import("../views/components/breadcrumb/Breadcrumb.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.BreadCrumb,
            },
          },
          {
            path: "carousel",
            name: "DemoComponentsComponentsCarousel",
            component: () => import("../views/components/carousel/Carousel.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Carousel,
            },
          },
          {
            path: "countdown",
            name: "DemoComponentsComponentsCountdown",
            component: () => import("../views/components/countdown/Countdown.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Countdown,
            },
          },
          {
            path: "language-chooser",
            name: "DemoComponentsComponentsLanguageChooser",
            component: () => import("../views/components/languageChooser/LanguageChooser.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.LanguageChooser,
            },
          },
          {
            path: "modal",
            name: "DemoComponentsComponentsModal",
            component: () => import("../views/components/modal/Modal.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Modal,
            },
          },
          {
            path: "navbar",
            name: "DemoComponentsComponentsNavbar",
            component: () => import("../views/components/navbar/Navbar.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Navbar,
            },
          },
          {
            path: "table",
            name: "DemoComponentsComponentsTable",
            component: () => import("../views/components/table/Table.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Table,
            },
          },
        ],
      },
      {
        // Contact
        path: ":lang/contact",
        name: "DemoComponentsContact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.DemoComponents.Contact,
        },
      },
    ],
  },
];

export default lpDemoComponentsRoutes;
