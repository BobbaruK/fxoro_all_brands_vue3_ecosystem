import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpGoldV1Routes = [
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
    component: () => import("../gold.vue"),
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
];

export default lpGoldV1Routes;
