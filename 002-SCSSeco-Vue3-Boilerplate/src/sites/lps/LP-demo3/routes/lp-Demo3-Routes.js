import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpDemo3Routes = [
  {
    // redirect
    path: "demo3/",
    redirect: { name: "Demo3Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "demo3",
    name: "Demo3",
    component: () => import("../Demo.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "Demo3Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
      {
        // About
        path: ":lang/about",
        name: "Demo3About",
        component: () => import("../views/about/About.vue"),
        props: true,
      },
      {
        // Services
        path: ":lang/services",
        name: "Demo3Services",
        component: () => import("../views/services/Services.vue"),
        props: true,
      },
      {
        // Contact
        path: ":lang/contact",
        name: "Demo3Contact",
        component: () => import("../views/contact/Contact.vue"),
        props: true,
      },
    ],
  },
];

export default lpDemo3Routes;
