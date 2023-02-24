import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpGoldV2Routes = [
  {
    // redirect
    path: "gold/v2",
    redirect: { name: "GoldV2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "gold/v2",
    name: "GoldV2",
    component: () => import("../gold.vue"),
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

export default lpGoldV2Routes;
