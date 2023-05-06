import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpSignalsRoutes = [
  {
    // /lp redirect
    path: "signals",
    redirect: { name: "SignalsHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "signals",
    name: "Signals",
    component: () => import("../Signals.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "SignalsHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpSignalsRoutes;
