import translationsGlossary from "../../../../../../001-super_global_files/composables/translationsGlossary";

const breadCrumbs = {
  Demo: {
    Home: [
      {
        label: translationsGlossary.h.home,
        href: "Demo1Home",
      },
    ],
    AboutRoot: {
      About: [
        {
          label: translationsGlossary.h.home,
          href: "Demo1Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "Demo1About",
        },
      ],
      LP: [
        {
          label: translationsGlossary.h.home,
          href: "Demo1Home",
        },
        {
          label: translationsGlossary.a.about,
          href: "Demo1About",
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
          href: "Demo1AboutLP",
        },
      ],
    },
    Services: [
      {
        label: translationsGlossary.h.home,
        href: "Demo1Home",
      },
      {
        label: translationsGlossary.s.services,
        href: "Demo1Services",
      },
    ],
    Components: {
      Countdown: [
        {
          label: translationsGlossary.h.home,
          href: "Demo1Home",
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
        href: "Demo1Home",
      },
      {
        label: translationsGlossary.c.contact,
        href: "Demo1Contact",
      },
    ],
  },
};

export default breadCrumbs;
