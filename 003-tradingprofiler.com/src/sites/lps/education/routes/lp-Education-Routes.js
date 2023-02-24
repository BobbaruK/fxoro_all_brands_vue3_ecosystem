import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpEducationRoutes = [
  {
    // redirect
    path: "education/",
    redirect: { name: "EducationHome", params: { lang: `${defaultLang}` } },
  },
  {
    path: "education/",
    name: "Education",
    component: () => import("../education.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "EducationHome",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpEducationRoutes;
