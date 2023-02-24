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
        meta: {
          breadCrumbs: breadCrumbs.Home,
        },
      },
      //
      // About
      {
        path: ":lang/about",
        name: "AboutRoot",
        component: () => import("../views/about/About.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "About",
            component: () => import("../views/about/about/About.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.AboutRoot.About,
            },
          },
          {
            path: "work",
            name: "AboutWork",
            component: () => import("../views/about/about_work/AboutWork.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.AboutRoot.AboutWork,
            },
          },
        ],
      },
      //
      // Store
      {
        path: ":lang/store",
        name: "StoreRoot",
        component: () => import("../views/store/Store.vue"),
        props: true,
        children: [
          {
            path: "",
            name: "Store",
            component: () => import("../views/store/store/Store.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.StoreRoot.Store,
            },
          },
          {
            path: "product/",
            redirect: { name: "Store" },
          },
          {
            path: "product/:productID",
            name: "Product",
            component: () => import("../views/store/product/Product.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.StoreRoot.Product,
            },
          },
          {
            path: "cart",
            name: "Cart",
            component: () => import("../views/store/cart/Cart.vue"),
            props: true,
            meta: {
              breadCrumbs: breadCrumbs.StoreRoot.Cart,
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
        component: () => import("../views/services/Services.vue"),
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
            component: () => import("../views/services/musicServices/ServicesMusicServices.vue"),
            props: true,
            children: [
              //
              // Beat
              {
                path: "instrumental",
                name: "MusicServicesBeat",
                component: () => import("../views/services/musicServices/beat/MusicServicesBeat.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Services.Music.Beat,
                },
              },
              //
              // Verse
              {
                path: "verse",
                name: "MusicServicesVerse",
                component: () => import("../views/services/musicServices/verse/MusicServicesVerse.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Services.Music.Verse,
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
            component: () => import("../views/services/webServices/ServicesWebServices.vue"),
            props: true,
            children: [
              //
              // Code
              {
                path: "code",
                name: "WebServicesCode",
                component: () => import("../views/services/webServices/code/WebServicesCode.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Services.Web.Code,
                },
              },
              //
              // design
              {
                path: "design",
                name: "WebServicesDesign",
                component: () => import("../views/services/webServices/design/WebServicesDesign.vue"),
                props: true,
                meta: {
                  breadCrumbs: breadCrumbs.Services.Web.Design,
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
        component: () => import("../views/contact/Contact.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbs.Contact,
        },
      },
    ],
  },
];

export default brandRoutes;
