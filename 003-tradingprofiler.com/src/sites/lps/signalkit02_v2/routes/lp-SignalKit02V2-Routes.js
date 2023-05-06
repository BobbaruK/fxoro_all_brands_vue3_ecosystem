import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpSignalKit02V2Routes = [
  {
    // /lp redirect
    path: "signalkit02_v2",
    redirect: { name: "SignalKit02V2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "signalkit02_v2",
    name: "SignalKit02V2",
    component: () => import("../SignalKit02V2.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "SignalKit02V2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpSignalKit02V2Routes;
