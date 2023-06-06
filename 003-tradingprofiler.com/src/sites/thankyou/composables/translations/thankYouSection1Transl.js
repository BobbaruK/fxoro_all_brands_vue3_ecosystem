const thankYouSection1Transl = () => {
  const tyTitleTransl = {
    en: "Thank you!",
    it: "Grazie!",
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
    en: `Thank you for registering with ${process.env.VUE_APP_BRAND_TITLE}!`,
    it: `Grazie per esserti registrato a ${process.env.VUE_APP_BRAND_TITLE}!`,
    tr: "",
    ro: `Vă mulțumim pentru înregistrarea pe ${process.env.VUE_APP_BRAND_TITLE}!`,
    hu: `Köszönjük, hogy regisztrált a ${process.env.VUE_APP_BRAND_TITLE}-re! `,
    ar: `شكرًا لك على التسجيل في ${process.env.VUE_APP_BRAND_TITLE}!`,
    de: "",
    es: `Gracias por registrarse en ${process.env.VUE_APP_BRAND_TITLE}!`,
    sv: `Tack för att du registrerar dig hos ${process.env.VUE_APP_BRAND_TITLE}!`,
    pt: "",
    fi: "",
    pl: "",
    th: "",
    ms: "",
  };

  const para = {
    en: "One of our account managers will contact you soon to get you connected.",
    it: "Uno dei nostri account manager ti contatterà presto per connetterti.",
    tr: "",
    ro: "Unul dintre managerii noștri de cont vă va contacta în curând.",
    hu: "Egyik számlakezelőnk hamarosan felveszi Önnel a kapcsolatot, hogy csatlakozhasson.",
    ar: "سيتصل بك أحد مديري الحسابات لدينا قريبًا.",
    de: "",
    es: "Uno de nuestros gestores de cuentas se pondrá en contacto con usted en breve para conectarle.",
    sv: "En av våra kontoansvariga kommer snart att kontakta dig för att få dig ansluten.",
    pt: "",
    fi: "",
    pl: "",
    th: "",
    ms: "",
  };

  return { tyTitleTransl, paraLead, para };
};

export default thankYouSection1Transl;
