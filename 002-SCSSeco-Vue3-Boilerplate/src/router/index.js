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
      //
      // About
      {
        path: ":lang/about",
        name: "AboutRoot",
        component: () => import("../sites/brand/views/about/About.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "About",
            component: () => import("../sites/brand/views/about/about/About.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.Brand.AboutRoot.About,
            },
          },
          {
            path: "work",
            name: "AboutWork",
            component: () => import("../sites/brand/views/about/about_work/AboutWork.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.Brand.AboutRoot.AboutWork,
            },
          },
        ],
      },
      //
      // Store
      {
        path: ":lang/store",
        name: "StoreRoot",
        component: () => import("../sites/brand/views/store/Store.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "Store",
            component: () => import("../sites/brand/views/store/store/Store.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.Brand.StoreRoot.Store,
            },
          },
          {
            path: "product/",
            redirect: { name: "Store" },
          },
          {
            path: "product/:productID",
            name: "Product",
            component: () => import("../sites/brand/views/store/product/Product.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.Brand.StoreRoot.Product,
            },
          },
          {
            path: "cart",
            name: "Cart",
            component: () => import("../sites/brand/views/store/cart/Cart.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.Brand.StoreRoot.Cart,
            },
          },
        ],
      },
      // Services
      {
        // redirect
        path: ":lang/services",
        redirect: { name: "MusicServicesBeat" },
      },
      {
        path: ":lang/services",
        name: "Services",
        component: () => import("../sites/brand/views/services/Services.vue"),
        props: true,
        children: [
          //
          // Music
          {
            // redirect
            path: "music",
            redirect: { name: "MusicServicesBeat" },
          },
          {
            path: "music",
            name: "MusicServices",
            component: () => import("../sites/brand/views/services/musicServices/ServicesMusicServices.vue"),
            props: true,
            children: [
              //
              // Beat
              {
                path: "instrumental",
                name: "MusicServicesBeat",
                component: () => import("../sites/brand/views/services/musicServices/beat/MusicServicesBeat.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Brand.Services.Music.Beat,
                },
              },
              //
              // Verse
              {
                path: "verse",
                name: "MusicServicesVerse",
                component: () => import("../sites/brand/views/services/musicServices/verse/MusicServicesVerse.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Brand.Services.Music.Verse,
                },
              },
            ],
          },
          //
          // Web
          {
            // redirect
            path: "web",
            redirect: { name: "WebServicesCode" },
          },
          {
            path: "web",
            name: "WebServices",
            component: () => import("../sites/brand/views/services/webServices/ServicesWebServices.vue"),
            props: true,
            children: [
              //
              // Code
              {
                path: "code",
                name: "WebServicesCode",
                component: () => import("../sites/brand/views/services/webServices/code/WebServicesCode.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Brand.Services.Web.Code,
                },
              },
              //
              // design
              {
                path: "design",
                name: "WebServicesDesign",
                component: () => import("../sites/brand/views/services/webServices/design/WebServicesDesign.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Brand.Services.Web.Design,
                },
              },
            ],
          },
        ],
      },
      //
      // Contact
      {
        path: ":lang/contact",
        name: "Contact",
        component: () => import("../sites/brand/views/contact/Contact.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.Brand.Contact,
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
                path: "carousel",
                name: "DemoComponentsComponentsCarousel",
                component: () => import("../sites/lps/LP-demo-components/views/components/carousel/Carousel.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.LP.DemoComponents.Components.Carousel,
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
                component: () =>
                  import("../sites/lps/LP-demo-components/views/components/languageChooser/LanguageChooser.vue"),
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
