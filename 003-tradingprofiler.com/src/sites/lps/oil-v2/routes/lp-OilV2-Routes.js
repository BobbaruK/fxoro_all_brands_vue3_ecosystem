import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpOilV2Routes = [
  {
    // redirect
    path: "oil/v2",
    redirect: { name: "OilV2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "oil/v2",
    name: "OilV2",
    component: () => import("../oil.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "OilV2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpOilV2Routes;
