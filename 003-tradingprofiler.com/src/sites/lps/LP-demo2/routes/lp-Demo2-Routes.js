import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpDemo2Routes = [
  {
    // /lp redirect
    path: "demo2",
    redirect: { name: "Demo2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "demo2",
    name: "Demo2",
    component: () => import("../Demo.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "Demo2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
      {
        // About
        path: ":lang/about",
        name: "Demo2About",
        component: () => import("../views/about/About.vue"),
        props: true,
      },
      {
        // Services
        path: ":lang/services",
        name: "Demo2Services",
        component: () => import("../views/services/Services.vue"),
        props: true,
      },
      {
        // Contact
        path: ":lang/contact",
        name: "Demo2Contact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
      },
    ],
  },
];

export default lpDemo2Routes;
