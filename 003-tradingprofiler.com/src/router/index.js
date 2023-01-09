import { createRouter, createWebHistory } from "vue-router";
import languages from "../sites/brand/composables/languages";
import breadCrumbs from "./breadCrumbs.js";

const { defaultLang } = languages();

const routes = [
  {
    // redirect
    path: "/",
    name: "HomeRedirect",
    redirect: { name: "Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "/",
    name: "Brand",
    component: () => import("../sites/brand/Brand.vue"),
    props: true,
    children: [
      //
      // Home
      {
        path: ":lang",
        name: "Home",
        component: () => import("../sites/brand/views/home/Home.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.Brand.Home,
        },
      },
    ],
  },
  //
  // Thank you
  {
    path: "/:lang/thank-you",
    name: "ThankYou",
    component: () => import("../sites/thankyou/ThankYou.vue"),
    props: true,
  },
  // Privacy Policy
  {
    path: "/:lang/privacy-policy",
    name: "PrivacyPolicy",
    component: () => import("../sites/privacypolicy/PrivacyPolicy.vue"),
    props: true,
  },
  //
  // 404
  {
    path: "/:catchAll(.*)",
    name: "PageNotFound",
    component: () => import("../sites/pagenotfound/PageNotFound.vue"),
  },
  /**
   * ? **LPs
   */
  {
    // /lp redirect
    path: "/lp",
    redirect: `/${defaultLang}`,
  },
  {
    path: "/lp",
    name: "LPs",
    component: () => import("../sites/lps/LPs.vue"),
    props: true,
    children: [
      /**
       * ! **Demo
       */
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
        component: () => import("../sites/lps/LP-demo/Demo.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "Demo1Home",
            component: () => import("../sites/lps/LP-demo/views/home/Home.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.LP.Demo.Home,
            },
          },
          {
            // About
            path: ":lang/about",
            name: "Demo1AboutRoot",
            component: () => import("../sites/lps/LP-demo/views/about/About.vue"),
            props: true,
            children: [
              {
                path: "",
                name: "Demo1About",
                component: () => import("../sites/lps/LP-demo/views/about/about/About.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.Demo.AboutRoot.About,
                },
              },
              {
                path: "lp",
                name: "Demo1AboutLP",
                component: () => import("../sites/lps/LP-demo/views/about/about_lp/AboutLP.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.Demo.AboutRoot.LP,
                },
              },
            ],
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo1Services",
            component: () => import("../sites/lps/LP-demo/views/services/Services.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.LP.Demo.Services,
            },
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo1Contact",
            component: () => import("../sites/lps/LP-demo/views/contact/Contact.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.LP.Demo.Contact,
            },
          },
        ],
      },
      /**
       * ! **Demo components
       */
      {
        // redirect
        path: "demo-components/",
        redirect: { name: "DemoComponentsHome", params: { lang: `${defaultLang}` } },
      },
      {
        path: "demo-components/",
        name: "DemoComponents",
        component: () => import("../sites/lps/LP-demo-components/DemoComponents.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "DemoComponentsHome",
            component: () => import("../sites/lps/LP-demo-components/views/home/Home.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.LP.DemoComponents.Home,
            },
          },
          {
            // About
            path: ":lang/about",
            name: "DemoComponentsAboutRoot",
            component: () => import("../sites/lps/LP-demo-components/views/about/About.vue"),
            props: true,
            children: [
              {
                path: "",
                name: "DemoComponentsAbout",
                component: () => import("../sites/lps/LP-demo-components/views/about/about/About.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.AboutRoot.About,
                },
              },
              {
                path: "lp",
                name: "DemoComponentsAboutLP",
                component: () => import("../sites/lps/LP-demo-components/views/about/about_lp/AboutLP.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.AboutRoot.LP,
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
            component: () => import("../sites/lps/LP-demo-components/views/components/Components.vue"),
            props: true,
            children: [
              {
                path: "back-to-top",
                name: "DemoComponentsComponentsBackToTop",
                component: () => import("../sites/lps/LP-demo-components/views/components/backToTop/BackToTop.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.BackToTop,
                },
              },
              {
                path: "badge",
                name: "DemoComponentsComponentsBadge",
                component: () => import("../sites/lps/LP-demo-components/views/components/badge/Badge.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.Badge,
                },
              },
              {
                path: "breadcrumb",
                name: "DemoComponentsComponentsBreadcrumb",
                component: () => import("../sites/lps/LP-demo-components/views/components/breadcrumb/Breadcrumb.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.BreadCrumb,
                },
              },
              {
                path: "countdown",
                name: "DemoComponentsComponentsCountdown",
                component: () => import("../sites/lps/LP-demo-components/views/components/countdown/Countdown.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.Countdown,
                },
              },
              {
                path: "language-chooser",
                name: "DemoComponentsComponentsLanguageChooser",
                component: () => import("../sites/lps/LP-demo-components/views/components/languageChooser/LanguageChooser.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.LanguageChooser,
                },
              },
              {
                path: "modal",
                name: "DemoComponentsComponentsModal",
                component: () => import("../sites/lps/LP-demo-components/views/components/modal/Modal.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.Modal,
                },
              },
              {
                path: "navbar",
                name: "DemoComponentsComponentsNavbar",
                component: () => import("../sites/lps/LP-demo-components/views/components/navbar/Navbar.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.Navbar,
                },
              },
            ],
          },
          {
            // Contact
            path: ":lang/contact",
            name: "DemoComponentsContact",
            component: () => import("../sites/lps/LP-demo-components/views/contact/Contact.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.LP.DemoComponents.Contact,
            },
          },
        ],
      },
      /**
       * ! **Demo2
       */
      {
        // /lp redirect
        path: "demo/v2",
        redirect: { name: "Demo2Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "demo/v2",
        name: "Demo2",
        component: () => import("../sites/lps/LP-demo2/Demo.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "Demo2Home",
            component: () => import("../sites/lps/LP-demo2/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo2About",
            component: () => import("../sites/lps/LP-demo2/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo2Services",
            component: () => import("../sites/lps/LP-demo2/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo2Contact",
            component: () => import("../sites/lps/LP-demo2/views/contact/Contact.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **Demo3
       */
      {
        // redirect
        path: "demo3/",
        redirect: { name: "Demo3Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "demo3",
        name: "Demo3",
        component: () => import("../sites/lps/LP-demo3/Demo.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "Demo3Home",
            component: () => import("../sites/lps/LP-demo3/views/home/Home.vue"),
            props: true,
          },
          {
            // About
            path: ":lang/about",
            name: "Demo3About",
            component: () => import("../sites/lps/LP-demo3/views/about/About.vue"),
            props: true,
          },
          {
            // Services
            path: ":lang/services",
            name: "Demo3Services",
            component: () => import("../sites/lps/LP-demo3/views/services/Services.vue"),
            props: true,
          },
          {
            // Contact
            path: ":lang/contact",
            name: "Demo3Contact",
            component: () => import("../sites/lps/LP-demo3/views/contact/Contact.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **ComeToLearn
       */ {
        // redirect
        path: "cometolearn/",
        redirect: { name: "ComeToLearnHome", params: { lang: `${defaultLang}` } },
      },
      {
        path: "cometolearn/",
        name: "ComeToLearn",
        component: () => import("../sites/lps/cometolearn/cometolearn.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "ComeToLearnHome",
            // component: () => import("../views/lps/cometolearn/views/home/Home.vue"),
            component: () => import("../sites/lps/cometolearn/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **Education
       */ {
        // redirect
        path: "education/",
        redirect: { name: "EducationHome", params: { lang: `${defaultLang}` } },
      },
      {
        path: "education/",
        name: "Education",
        component: () => import("../sites/lps/education/education.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "EducationHome",
            component: () => import("../sites/lps/education/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **crypto-universe v1
       */
      {
        // redirect
        path: "crypto-universe/",
        redirect: { name: "CryptoUniverseV1Home", params: { lang: `${defaultLang}` } },
      },
      {
        // redirect
        path: "crypto-universe/:lang",
        redirect: { name: "CryptoUniverseV1Home", params: { lang: `${defaultLang}` } },
        props: true,
      },
      {
        // redirect
        path: "crypto-universe/v1",
        redirect: { name: "CryptoUniverseV1Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "crypto-universe/v1",
        name: "CryptoUniverseV1",
        component: () => import("../sites/lps/crypto-universe-v1/crypto-universe.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "CryptoUniverseV1Home",
            component: () => import("../sites/lps/crypto-universe-v1/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **crypto-universe v2
       */
      {
        // redirect
        path: "crypto-universe/v2",
        redirect: { name: "CryptoUniverseV2Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "crypto-universe/v2",
        name: "CryptoUniverseV2",
        component: () => import("../sites/lps/crypto-universe-v2/crypto-universe.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "CryptoUniverseV2Home",
            component: () => import("../sites/lps/crypto-universe-v2/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **gold v1
       */
      {
        // redirect
        path: "gold/",
        redirect: { name: "GoldV1Home", params: { lang: `${defaultLang}` } },
      },
      {
        // redirect
        path: "gold/:lang",
        redirect: { name: "GoldV1Home", params: { lang: `${defaultLang}` } },
        props: true,
      },
      {
        // redirect
        path: "gold/v1",
        redirect: { name: "GoldV1Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "gold/v1",
        name: "GoldV1",
        component: () => import("../sites/lps/gold-v1/gold.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "GoldV1Home",
            component: () => import("../sites/lps/gold-v1/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **gold v2
       */
      {
        // redirect
        path: "gold/v2",
        redirect: { name: "GoldV2Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "gold/v2",
        name: "GoldV2",
        component: () => import("../sites/lps/gold-v2/gold.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "GoldV2Home",
            component: () => import("../sites/lps/gold-v2/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **oil v1
       */
      {
        // redirect
        path: "oil/",
        redirect: { name: "OilV1Home", params: { lang: `${defaultLang}` } },
      },
      {
        // redirect
        path: "oil/:lang",
        redirect: { name: "OilV1Home", params: { lang: `${defaultLang}` } },
        props: true,
      },
      {
        // redirect
        path: "oil/v1",
        redirect: { name: "OilV1Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "oil/v1",
        name: "Oil",
        component: () => import("../sites/lps/oil-v1/oil.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "OilV1Home",
            component: () => import("../sites/lps/oil-v1/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **oil v2
       */
      {
        // redirect
        path: "oil/v2",
        redirect: { name: "OilV2Home", params: { lang: `${defaultLang}` } },
      },
      {
        path: "oil/v2",
        name: "OilV2",
        component: () => import("../sites/lps/oil-v2/oil.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "OilV2Home",
            component: () => import("../sites/lps/oil-v2/views/home/Home.vue"),
            props: true,
          },
        ],
      },

      /**
       * ! **ForexSignals
       */
      {
        // /lp redirect
        path: "forexsignals",
        redirect: { name: "ForexSignalsHome", params: { lang: `${defaultLang}` } },
      },
      {
        path: "forexsignals",
        name: "ForexSignals",
        component: () => import("../sites/lps/forexsignals/forexsignals.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "ForexSignalsHome",
            component: () => import("../sites/lps/forexsignals/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **LiveTradingSignals
       */
      {
        // redirect
        path: "livetradingsignals/",
        redirect: { name: "LiveTradingSignalsHome", params: { lang: `${defaultLang}` } },
      },
      {
        // redirect
        path: "livetradingsignals/v2",
        redirect: { name: "LiveTradingSignalsHome", params: { lang: `${defaultLang}` } },
      },
      {
        path: "livetradingsignals/v2",
        name: "LiveTradingSignals",
        component: () => import("../sites/lps/livetradingsignals/livetradingsignals.vue"),
        props: true,
        children: [
          {
            path: ":lang",
            name: "LiveTradingSignalsHome",
            component: () => import("../sites/lps/livetradingsignals/views/home/Home.vue"),
            props: true,
          },
        ],
      },
      /**
       * ! **Redirect to old amazon
       */
      {
        path: "amazon/",
        name: "AmazonOld",
        component: () => import("../sites/lps/old/amazon_old.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// router.beforeEach((to, from) => {
//   console.log("schimbar");
// });

export default router;
