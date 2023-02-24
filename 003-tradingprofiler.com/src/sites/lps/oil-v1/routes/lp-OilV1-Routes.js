import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpOilV1Routes = [
  {
    // redirect
    path: "oil/",
    redirect: { name: "OilV1Home", params: { lang: `${defaultLang}` } },
  },
  {
    // redirect
    path: "oil/:lang",
    redirect: { name: "OilV1Home", params: { lang: `${defaultLang}` } },
    props: true,
  },
  {
    // redirect
    path: "oil/v1",
    redirect: { name: "OilV1Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "oil/v1",
    name: "Oil",
    component: () => import("../oil.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "OilV1Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpOilV1Routes;
