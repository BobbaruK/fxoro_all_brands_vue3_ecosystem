import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpEducationalKitStocksV2Routes = [
  {
    // /lp redirect
    path: "educationalkitstocks_v2",
    redirect: {
      name: "EducationalKitStocksV2Home",
      params: { lang: `${defaultLang}` },
    },
  },
  {
    path: "educationalkitstocks_v2",
    name: "EducationalKitStocksV2",
    component: () => import("../EducationalKitStocksV2.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "EducationalKitStocksV2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpEducationalKitStocksV2Routes;
