import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpOilRoutes = [
  // V1
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
    component: () => import("../oil-v1.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "OilV1Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },

  // V2
  {
    // redirect
    path: "oil/v2",
    redirect: { name: "OilV2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "oil/v2",
    name: "OilV2",
    component: () => import("../oil-v2.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "OilV2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpOilRoutes;
