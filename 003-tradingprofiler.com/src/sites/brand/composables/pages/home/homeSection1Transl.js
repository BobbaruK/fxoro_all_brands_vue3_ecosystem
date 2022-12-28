const homeSection1Transl = () => {
  const title = {
    // en: "",
    // it: "",
    // tr: "",
    // ro: "",
    // hu: "",
    // ar: "",
    // de: "",
    // es: "",
    // sv: "",
    // pt: "",
    // fi: "",
    // pl: "",
    // th: "",
    // ms: ""

    en: `With <span>${process.env.VUE_APP_BRAND_TITLE}</span> you can trade <span>CFDs</span> on some of the top commodities in the world`,
    it: "",
    tr: "",
    ro: "",
    hu: "",
    ar: `مع <span>${process.env.VUE_APP_BRAND_TITLE}</span> ، يمكنك تداول العقود مقابل الفروقات على أفضل السلع في العالم`,
    de: "",
    es: "",
    sv: "",
    pt: "",
    fi: "",
    pl: "",
    th: "",
    ms: "",
  };

  const content = {
    en: `
      <p>You have access to all the information for a real-time market trading</p>
      <p>Your safety is our priority – our services are built on highest security standards</p>
      <p>${process.env.VUE_APP_BRAND_TITLE} teaches you how to trade oil and gold – the assets that keep the world moving</p>
    `,
    it: ``,
    tr: ``,
    ro: ``,
    hu: ``,
    ar: `
      <p>لديك امكانية الوصول إلى جميع اخبار السوق حيه ومباشرة</p>
      <p>الامانه والامان هي أولويتنا - خدماتنا مبنية على أعلى معايير الأمان</p>
      <p>يعلمك ${process.env.VUE_APP_BRAND_TITLE} كيفية تداول النفط والذهب - الأصول التي تحرك العالم </p>
    `,
    de: ``,
    es: ``,
    sv: ``,
    pt: ``,
    fi: ``,
    pl: ``,
    th: ``,
    ms: ``,
  };

  const formBtn = {
    en: "Register now",
    it: "",
    tr: "",
    ro: "",
    hu: "",
    ar: "سجل الان",
    de: "",
    es: "",
    sv: "",
    pt: "",
    fi: "",
    pl: "",
    th: "",
    ms: "",
  };

  return { title, content, formBtn };
};

export default homeSection1Transl;
