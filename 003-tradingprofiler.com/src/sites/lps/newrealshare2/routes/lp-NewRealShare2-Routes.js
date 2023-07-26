import breadCrumbsV1 from "./breadCrumbsV1.js";

import languages from "../composables/translations/languages.js";
const { defaultLang } = languages();

const lpNewRealShare2Routes = [
  {
    // redirect
    path: "newrealshare2/",
    redirect: { name: "NewRealShare2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "newrealshare2/",
    name: "NewRealShare2",
    component: () => import("../NewRealShare2.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "NewRealShare2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
        meta: {
          breadCrumbs: breadCrumbsV1.Demo.Home,
        },
      },
    ],
  },
];

export default lpNewRealShare2Routes;
