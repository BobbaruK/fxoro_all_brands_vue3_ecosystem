import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpFreedomToTradeRoutes = [
  {
    // /lp redirect
    path: "freedom-to-trade",
    redirect: { name: "FreedomToTradeHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "freedom-to-trade",
    name: "FreedomToTrade",
    component: () => import("../FreedomToTrade.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "FreedomToTradeHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpFreedomToTradeRoutes;
