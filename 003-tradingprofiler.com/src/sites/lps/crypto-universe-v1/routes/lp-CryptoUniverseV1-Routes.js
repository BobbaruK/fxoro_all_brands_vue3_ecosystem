import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpCryptoUniverseV1Routes = [
  {
    // redirect
    path: "crypto-universe/",
    redirect: { name: "CryptoUniverseV1Home", params: { lang: `${defaultLang}` } },
  },
  {
    // redirect
    path: "crypto-universe/:lang",
    redirect: { name: "CryptoUniverseV1Home", params: { lang: `${defaultLang}` } },
    props: true,
  },
  {
    // redirect
    path: "crypto-universe/v1",
    redirect: { name: "CryptoUniverseV1Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "crypto-universe/v1",
    name: "CryptoUniverseV1",
    component: () => import("../crypto-universe.vue"),
    props: true,
    children: [
      {
        path: ":lang",
        name: "CryptoUniverseV1Home",
        component: () => import("../views/home/Home.vue"),
        props: true,
      },
    ],
  },
];

export default lpCryptoUniverseV1Routes;
