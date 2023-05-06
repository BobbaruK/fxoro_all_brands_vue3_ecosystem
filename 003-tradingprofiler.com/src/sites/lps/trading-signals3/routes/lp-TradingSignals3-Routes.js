import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpTradingSignals3Routes = [
  {
    // /lp redirect
    path: "trading-signals3",
    redirect: { name: "TradingSignals3Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "trading-signals3",
    name: "TradingSignals3",
    component: () => import("../TradingSignals3.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "TradingSignals3Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpTradingSignals3Routes;
