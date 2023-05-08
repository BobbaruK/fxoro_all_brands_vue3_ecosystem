import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpFinancialMarketsRoutes = [
  {
    // /lp redirect
    path: "financial-markets",
    redirect: { name: "FinancialMarketsHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "financial-markets",
    name: "FinancialMarkets",
    component: () => import("../FinancialMarkets.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "FinancialMarketsHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpFinancialMarketsRoutes;
