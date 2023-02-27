import translationsGlossary from "../../../../../../001-super_global_files/composables/translationsGlossary";

const breadCrumbs = {
  Demo: {
    Home: [
      {
        label: translationsGlossary.h.home,
        href: "DemoV2Home",
      },
    ],
    AboutRoot: {
      About: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV2Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "DemoV2About",
        },
      ],
      LP: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV2Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "DemoV2About",
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
          href: "DemoV2AboutLP",
        },
      ],
    },
    Services: [
      {
        label: translationsGlossary.h.home,
        href: "DemoV2Home",
      },
      {
        label: translationsGlossary.s.services,
        href: "DemoV2Services",
      },
    ],
    Components: {
      Countdown: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV2Home",
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
        href: "DemoV2Home",
      },
      {
        label: translationsGlossary.c.contact,
        href: "DemoV2Contact",
      },
    ],
  },
};

export default breadCrumbs;
