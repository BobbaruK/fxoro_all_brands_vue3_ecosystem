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
        redirect: { name: "DemoComponentsCountdown", params: { lang: `${defaultLang}` } },
      },
      {
        path: ":lang/components",
        name: "DemoComponentsRoot",
        component: () => import("../views/components/Components.vue"),
        props: true,
        children: [
          {
            path: "accordion",
            name: "DemoComponentsAccordion",
            component: () => import("../views/components/accordion/Accordion.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Accordion,
            },
          },
          {
            path: "back-to-top",
            name: "DemoComponentsBackToTop",
            component: () => import("../views/components/backToTop/BackToTop.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.BackToTop,
            },
          },
          {
            path: "badge",
            name: "DemoComponentsBadge",
            component: () => import("../views/components/badge/Badge.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Badge,
            },
          },
          {
            path: "breadcrumb",
            name: "DemoComponentsBreadcrumb",
            component: () => import("../views/components/breadcrumb/Breadcrumb.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.BreadCrumb,
            },
          },
          {
            path: "caret",
            name: "DemoComponentsCaret",
            component: () => import("../views/components/caret/Caret.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Caret,
            },
          },
          {
            path: "carousel",
            name: "DemoComponentsCarousel",
            component: () => import("../views/components/carousel/Carousel.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Carousel,
            },
          },
          {
            path: "countdown",
            name: "DemoComponentsCountdown",
            component: () => import("../views/components/countdown/Countdown.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Countdown,
            },
          },
          {
            path: "form-elements",
            name: "DemoComponentsFormElements",
            component: () => import("../views/components/formElements/FormElements.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.FormElement,
            },
          },
          {
            path: "language-chooser",
            name: "DemoComponentsLanguageChooser",
            component: () => import("../views/components/languageChooser/LanguageChooser.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.LanguageChooser,
            },
          },
          {
            path: "loader",
            name: "DemoComponentsLoader",
            component: () => import("../views/components/loader/Loader.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Loader,
            },
          },
          {
            path: "modal",
            name: "DemoComponentsModal",
            component: () => import("../views/components/modal/Modal.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Modal,
            },
          },
          {
            path: "navbar",
            name: "DemoComponentsNavbar",
            component: () => import("../views/components/navbar/Navbar.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Navbar,
            },
          },
          {
            path: "svg-mask",
            name: "DemoComponentsSVGMask",
            component: () => import("../views/components/svgMask/svgMask.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.DemoComponents.Components.Navbar,
            },
          },
          {
            path: "table",
            name: "DemoComponentsTable",
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
