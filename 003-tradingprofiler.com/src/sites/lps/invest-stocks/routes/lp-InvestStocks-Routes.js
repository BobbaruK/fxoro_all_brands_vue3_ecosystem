import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpInvestStocksRoutes = [
  {
    // redirect
    path: "invest-stocks/",
    redirect: { name: "InvestStocksHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "invest-stocks",
    name: "InvestStocks",
    component: () => import("../InvestStocks.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "InvestStocksHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpInvestStocksRoutes;
