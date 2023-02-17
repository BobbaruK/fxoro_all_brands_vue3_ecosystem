import { useHead } from "unhead";

/**
 *  check Lang and Meta
 */

const checkLangAndMeta = (propsLang = "", documentPageTitle = {}, metaDescription = {}, brandColor = "") => {
  useHead({
    title: `${documentPageTitle[propsLang]} | ${process.env.VUE_APP_BRAND_TITLE}`,
    htmlAttrs: {
      lang: propsLang,
      dir: propsLang === "ar" ? "rtl" : "ltr",
    },
    meta: [
      {
        name: "description",
        content: metaDescription[propsLang],
      },
      {
        name: "theme-color",
        content: brandColor,
      },
      {
        name: "msapplication-TileColor",
        content: brandColor,
      },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-16x16.png",
      },
      {
        rel: "manifest",
        href: "/site.webmanifest",
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: brandColor,
      },
    ],
  });

  return {};
};

export default checkLangAndMeta;
