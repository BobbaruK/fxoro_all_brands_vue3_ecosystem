<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import languages from "./composables/translations/languages";

import "./assets/scss/scsseco_lp.scss";
export default {
  name: "LP~CryptoUniverse",
  components: { Header, Footer, BackToTop },
  props: {
    lang: String,
  },
  setup() {
    // redirect
    const { lpLangs, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "CryptoUniverseV1Home", params: { lang: defaultLang } });
      }
    });

    return {};
  },
};
</script>

<template>
  <div class="topBg">
    <div class="container">
      <Header :lang="lang" />
      <div id="teleportS1"></div>
    </div>
  </div>
  <main>
    <router-view />
  </main>
  <Footer :lang="lang" />
  <BackToTop :bttDetails="{ bttID: 'backToTopCryptoUniverseV1' }" />
</template>

<style lang="scss">
@use "./assets/scss/abstracts/variables" as vars;
@use "./assets/scss/abstracts/mixins" as mxns;

#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  overflow-x: hidden;
}

.topBg {
  background-image: url(./assets/imgs/topBg-mobile.jpg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--clr-white);
  @include mxns.mediamin(xl) {
    background-image: none;
    background-color: var(--clr-black);
  }
  .container {
    position: relative;
    &::after {
      background-image: url(./assets/imgs/topBg-desktop.png);
      background-position: bottom right;
      background-repeat: no-repeat;
      background-size: contain;
      height: 100%;
      pointer-events: none;
      position: absolute;
      right: -680px;
      top: 0;
      width: 1410px;
      z-index: 0;
      @include mxns.mediamin(xl) {
        content: "";
      }
      @include mxns.mediamin(xxl) {
        right: -500px;
      }
    }
  }
}

html[dir="rtl"] {
  .topBg {
    .container {
      &::after {
        right: auto;
        left: -680px;
        transform: scaleX(-1);
        @include mxns.mediamin(xxl) {
          left: -500px;
        }
      }
    }
  }
}

html .formOverlay {
  &::before {
    background-color: var(--clr-brandPrimaryColor);
  }
  .formWrapper {
    background: var(--clr-brandPrimaryColor-dark);
    border: 2px solid var(--clr-brandSecondaryColor);
    color: var(--clr-white);
    .close {
      background: var(--clr-brandSecondaryColor);
      color: var(--clr-black);
    }
  }
}
</style>
