import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpForexBeginnerRoutes = [
  {
    // /lp redirect
    path: "forexbeginner",
    redirect: { name: "ForexBeginnerHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "forexbeginner",
    name: "ForexBeginner",
    component: () => import("../ForexBeginner.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "ForexBeginnerHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpForexBeginnerRoutes;
