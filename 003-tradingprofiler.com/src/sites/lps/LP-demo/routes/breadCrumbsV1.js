import translationsGlossary from "../../../../../../001-super_global_files/composables/translationsGlossary";

const breadCrumbs = {
  Demo: {
    Home: [
      {
        label: translationsGlossary.h.home,
        href: "DemoV1Home",
      },
    ],
    AboutRoot: {
      About: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV1Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "DemoV1About",
        },
      ],
      LP: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV1Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "DemoV1About",
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
          href: "DemoV1AboutLP",
        },
      ],
    },
    Services: [
      {
        label: translationsGlossary.h.home,
        href: "DemoV1Home",
      },
      {
        label: translationsGlossary.s.services,
        href: "DemoV1Services",
      },
    ],
    Components: {
      Countdown: [
        {
          label: translationsGlossary.h.home,
          href: "DemoV1Home",
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
        href: "DemoV1Home",
      },
      {
        label: translationsGlossary.c.contact,
        href: "DemoV1Contact",
      },
    ],
  },
};

export default breadCrumbs;
