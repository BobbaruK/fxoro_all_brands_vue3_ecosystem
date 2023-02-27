import translationsGlossary from "../../../../../../001-super_global_files/composables/translationsGlossary";

const breadCrumbs = {
  Demo: {
    Home: [
      {
        label: translationsGlossary.h.home,
        href: "DemoV3Home",
      },
    ],
    AboutRoot: {
      About: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV3Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "DemoV3About",
        },
      ],
      LP: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV3Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "DemoV3About",
        },
        {
          label: {
            en: "About LP",
            it: "Di LP",
            tr: "Hakkında LP",
            ro: "Despre LP",
            hu: "Ról ről LP",
            ar: "عن LP",
            de: "Etwa LP",
            es: "Acerca de LP",
            sv: "Handla om LP",
            pt: "Cerca de LP",
            fi: "Noin LP",
            pl: "O LP",
            th: "เกี่ยวกับ LP",
            ms: "Tentang LP",
          },
          href: "DemoV3AboutLP",
        },
      ],
    },
    Services: [
      {
        label: translationsGlossary.h.home,
        href: "DemoV3Home",
      },
      {
        label: translationsGlossary.s.services,
        href: "DemoV3Services",
      },
    ],
    Components: {
      Countdown: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV3Home",
        },
        {
          label: translationsGlossary.c.components,
        },
        {
          label: translationsGlossary.c.countdown,
        },
      ],
    },
    Contact: [
      {
        label: translationsGlossary.h.home,
        href: "DemoV3Home",
      },
      {
        label: translationsGlossary.c.contact,
        href: "DemoV3Contact",
      },
    ],
  },
};

export default breadCrumbs;
