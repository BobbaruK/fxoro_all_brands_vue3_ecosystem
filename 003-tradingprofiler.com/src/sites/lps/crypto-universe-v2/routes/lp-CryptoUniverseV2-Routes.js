import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpCryptoUniverseV2Routes = [
  {
    // redirect
    path: "crypto-universe/v2",
    redirect: { name: "CryptoUniverseV2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "crypto-universe/v2",
    name: "CryptoUniverseV2",
    component: () => import("../crypto-universe.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "CryptoUniverseV2Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpCryptoUniverseV2Routes;
