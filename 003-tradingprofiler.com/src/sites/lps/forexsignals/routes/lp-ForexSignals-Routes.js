import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpForexSignalsRoutes = [
  {
    // /lp redirect
    path: "forexsignals",
    redirect: { name: "ForexSignalsHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "forexsignals",
    name: "ForexSignals",
    component: () => import("../forexsignals.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "ForexSignalsHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpForexSignalsRoutes;
