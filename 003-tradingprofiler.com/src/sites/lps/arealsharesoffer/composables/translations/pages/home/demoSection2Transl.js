const demoSection2Transl = () => {
  const bullets = [
    {
      img: {
        src: {
          png: require("../../../../assets/imgs/icon1.png"),
          avif: require("../../../../assets/imgs/icon1.avif"),
          webp: require("../../../../assets/imgs/icon1.webp"),
        },
        width: 81,
        height: 70,
      },
      para: {
        en: `<strong>TRUST</strong> - ${process.env.VUE_APP_BRAND_TITLE} is overseen by various regulators in the European Union.`,
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "",
        de: "",
        es: "",
        sv: "",
        pt: "",
        fi: "",
        pl: "",
        th: "",
        ms: "",
      },
    },
    {
      img: {
        src: {
          png: require("../../../../assets/imgs/icon2.png"),
          avif: require("../../../../assets/imgs/icon2.avif"),
          webp: require("../../../../assets/imgs/icon2.webp"),
        },
        width: 63,
        height: 70,
      },
      para: {
        en: "<strong>PROTECTED DATA</strong> - We protect your data with the most advanced security methods available.",
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "",
        de: "",
        es: "",
        sv: "",
        pt: "",
        fi: "",
        pl: "",
        th: "",
        ms: "",
      },
    },
    {
      img: {
        src: {
          png: require("../../../../assets/imgs/icon3.png"),
          avif: require("../../../../assets/imgs/icon3.avif"),
          webp: require("../../../../assets/imgs/icon3.webp"),
        },
        width: 85,
        height: 70,
      },
      para: {
        en: "<strong>SUPPORT</strong> - Enjoy customized, multilingual support from our dedicated customer service team.",
        it: "",
        tr: "",
        ro: "",
        hu: "",
        ar: "",
        de: "",
        es: "",
        sv: "",
        pt: "",
        fi: "",
        pl: "",
        th: "",
        ms: "",
      },
    },
  ];

  return { bullets };
};

export default demoSection2Transl;
