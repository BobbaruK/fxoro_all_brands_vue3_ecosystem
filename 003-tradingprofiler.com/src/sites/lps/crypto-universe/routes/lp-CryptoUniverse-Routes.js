import languages from "../composables/translations/languages";
const { defaultLang } = languages();

const lpCryptoUniverseRoutes = [
  // V1
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
    component: () => import("../crypto-universe-v1.vue"),
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

  // V2
  {
    // redirect
    path: "crypto-universe/v2",
    redirect: { name: "CryptoUniverseV2Home", params: { lang: `${defaultLang}` } },
  },
  {
    path: "crypto-universe/v2",
    name: "CryptoUniverseV2",
    component: () => import("../crypto-universe-v2.vue"),
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

export default lpCryptoUniverseRoutes;
