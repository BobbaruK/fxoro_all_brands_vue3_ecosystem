import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpFreedomToTradeTestRoutes = [
  {
    // /lp redirect
    path: "freedom-to-trade-test",
    redirect: { name: "FreedomToTradeHome_TEST", params: { lang: `${defaultLang}` } },
  },
  {
    path: "freedom-to-trade-test",
    name: "FreedomToTrade_TEST",
    component: () => import("../FreedomToTrade-TEST.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "FreedomToTradeHome_TEST",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpFreedomToTradeTestRoutes;
