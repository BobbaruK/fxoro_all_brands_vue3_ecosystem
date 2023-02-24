import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpLiveTradingSignalsRoutes = [
  {
    // redirect
    path: "livetradingsignals/",
    redirect: { name: "LiveTradingSignalsHome", params: { lang: `${defaultLang}` } },
  },
  {
    // redirect
    path: "livetradingsignals/v2",
    redirect: { name: "LiveTradingSignalsHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "livetradingsignals/v2",
    name: "LiveTradingSignals",
    component: () => import("../livetradingsignals.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "LiveTradingSignalsHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpLiveTradingSignalsRoutes;
