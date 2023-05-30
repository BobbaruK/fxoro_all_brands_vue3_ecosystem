const thankYouSection1Transl = () => {
  const tyTitleTransl = {
    en: "Thank you!",
    it: "Grazie",
    tr: "Teşekkürler!",
    ro: "Mulțumesc!",
    hu: "Köszönjük!",
    ar: "شكرًا لك!",
    de: "",
    es: "Gracias!",
    sv: "Tack!",
    pt: "",
    fi: "Kiitos!",
    pl: "Dziękujemy!",
    th: "",
    ms: "Terima kasih!",
  };

  const paraLead = {
    en: `Thank you for registering with ${process.env.VUE_APP_BRAND_TITLE}`,
    it: "",
    tr: "",
    ro: `Vă mulțumim pentru înregistrarea pe ${process.env.VUE_APP_BRAND_TITLE}`,
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
  };

  const para = {
    en: `One of our account managers will contact you soon to get you connected.`,
    it: "",
    tr: "",
    ro: "Unul dintre managerii noștri de cont vă va contacta în curând.",
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
  };

  return { tyTitleTransl, paraLead, para };
};

export default thankYouSection1Transl;
