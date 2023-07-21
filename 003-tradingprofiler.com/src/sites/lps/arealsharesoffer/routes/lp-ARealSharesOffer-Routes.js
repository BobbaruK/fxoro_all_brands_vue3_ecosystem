import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpARealSharesOfferRoutes = [
  {
    // /lp redirect
    path: "arealsharesoffer",
    redirect: { name: "ARealSharesOfferHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "arealsharesoffer",
    name: "ARealSharesOffer",
    component: () => import("../ARealSharesOffer.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "ARealSharesOfferHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpARealSharesOfferRoutes;
