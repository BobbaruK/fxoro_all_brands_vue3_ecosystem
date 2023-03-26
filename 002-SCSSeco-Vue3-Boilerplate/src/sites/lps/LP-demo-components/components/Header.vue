<script>
import languages from "../composables/translations/languages";
import translationsGlossary from "../../../../../../001-super_global_files/composables/translationsGlossary";

import Navbar from "../../../../../../001-super_global_files/components/Navbar/Navbar.vue";
import LanguageChooser from "../../../../../../001-super_global_files/components/LanguageChooser/LanguageChooser.vue";

export default {
  components: { Navbar, LanguageChooser },
  name: "LP~DemoComponents~Header",
  props: {
    lang: String,
  },
  setup() {
    const menuDetails = {
      menuID: "headerMenu",
      menuItems: {
        home: {
          routerName: "DemoComponentsHome",
          routerLabel: translationsGlossary.h.home,
        },
        about: {
          routerName: "DemoComponentsAbout",
          routerLabel: translationsGlossary.a.about,
        },
        components: {
          routerName: "DemoComponentsRoot",
          routerLabel: translationsGlossary.c.components,
          children: {
            accordion: {
              routerName: "DemoComponentsAccordion",
              routerLabel: translationsGlossary.a.accordion,
            },
            backToTop: {
              routerName: "DemoComponentsBackToTop",
              routerLabel: translationsGlossary.b.backToTop,
            },
            badge: {
              routerName: "DemoComponentsBadge",
              routerLabel: translationsGlossary.b.badge,
            },
            button: {
              routerName: "DemoComponentsBreadcrumb",
              routerLabel: translationsGlossary.b.breadcrumb,
            },
            caret: {
              routerName: "DemoComponentsCaret",
              routerLabel: translationsGlossary.c.caret,
            },
            carousel: {
              routerName: "DemoComponentsCarousel",
              routerLabel: translationsGlossary.c.carousel,
            },
            countdown: {
              routerName: "DemoComponentsCountdown",
              routerLabel: translationsGlossary.c.countdown,
            },
            loader: {
              routerName: "DemoComponentsLoader",
              routerLabel: translationsGlossary.l.loader,
            },
            languageChooser: {
              routerName: "DemoComponentsLanguageChooser",
              routerLabel: translationsGlossary.l.languageChooser,
            },
            modal: {
              routerName: "DemoComponentsModal",
              routerLabel: translationsGlossary.m.modal,
            },
            navbar: {
              routerName: "DemoComponentsNavbar",
              routerLabel: translationsGlossary.n.navbar,
            },
            svgMask: {
              routerName: "DemoComponentsSVGMask",
              routerLabel: {
                en: "SVGMask",
                it: "SVGMask",
                tr: "SVGMask",
                ro: "SVGMask",
                hu: "SVGMask",
                ar: "SVGMask",
                de: "SVGMask",
                es: "SVGMask",
                sv: "SVGMask",
                pt: "SVGMask",
                fi: "SVGMask",
                pl: "SVGMask",
                th: "SVGMask",
                ms: "SVGMask",
              },
            },
            table: {
              routerName: "DemoComponentsTable",
              routerLabel: translationsGlossary.t.table,
            },
          },
        },
        contact: {
          routerName: "DemoComponentsContact",
          routerLabel: translationsGlossary.c.contact,
        },
      },
    };

    const { lpLangs, defaultLang, flagPath } = languages();

    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };

    return { menuDetails, langsDetails };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <LanguageChooser :lang="lang" :languageChooserDetails="langsDetails" />
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-12 siteHeaderInner" style="position: static">
          <div class="site-logo">
            <router-link :to="{ name: menuDetails.menuItems.home.routerName, params: { lang: lang } }" class="logo">
              Logo
            </router-link>
          </div>
          <Navbar :lang="lang" :details="menuDetails" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  background-color: var(--clr-brandPrimaryColor);
  color: var(--clr-brandSecondaryColor);
  .siteHeaderInner {
    align-content: center;
    align-items: center;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
  }
}
</style>
