import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpComeToLearnRoutes = [
  {
    // redirect
    path: "cometolearn/",
    redirect: { name: "ComeToLearnHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "cometolearn/",
    name: "ComeToLearn",
    component: () => import("../cometolearn.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "ComeToLearnHome",
        // component: () => import("../views/lps/cometolearn/views/home/Home.vue"),
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpComeToLearnRoutes;
