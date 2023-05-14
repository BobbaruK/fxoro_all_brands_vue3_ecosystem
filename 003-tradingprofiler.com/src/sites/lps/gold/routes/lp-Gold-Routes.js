import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpGoldRoutes = [
  // V1
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
    component: () => import("../gold-v1.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "GoldV1Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },

  // V2
  {
    // redirect
    path: "gold/v2",
    redirect: { name: "GoldV2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "gold/v2",
    name: "GoldV2",
    component: () => import("../gold-v2.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "GoldV2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpGoldRoutes;
