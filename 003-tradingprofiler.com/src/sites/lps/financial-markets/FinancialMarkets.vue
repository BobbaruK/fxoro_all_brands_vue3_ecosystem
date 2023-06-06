<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import languages from "./composables/translations/languages";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import "./assets/scss/scsseco_lp.scss";

export default {
  name: "LP~FinancialMarkets",
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
        router.replace({
          name: "FinancialMarketsHome",
          params: { lang: defaultLang },
        });
      }
    });

    return {};
  },
};
</script>

<template>
  <div class="topBG">
    <Header :lang="lang" />
    <div id="teleportS1"></div>
  </div>
  <main>
    <router-view />
  </main>
  <Footer :lang="lang" />
  <BackToTop />
</template>

<style lang="scss">
@use "./assets/scss/abstracts/colorPalette" as colPal;
@use "./assets/scss/abstracts/mixins" as mxns;

:root {
  @each $type, $colors in colPal.$brandColors {
    @each $color, $value in $colors {
      --clr-#{$color}: #{$value};
    }
  }
}

.topBG {
  // background-image: url(./assets/imgs/topBG-mobile.jpg);
  background-image: url(./assets/imgs/topBG-mobile.jpg);
  background-image: image-set(
    url("./assets/imgs/topBG-mobile.avif") type("image/avif"),
    url("./assets/imgs/topBG-mobile.webp") type("image/webp"),
    url("./assets/imgs/topBG-mobile.jpg") type("image/jpg")
  );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  @include mxns.mediamin(md) {
    // background-position: center;
    background-image: url(./assets/imgs/topBG-desktop.jpg);
    background-image: image-set(
      url("./assets/imgs/topBG-desktop.avif") type("image/avif"),
      url("./assets/imgs/topBG-desktop.webp") type("image/webp"),
      url("./assets/imgs/topBG-desktop.jpg") type("image/jpg")
    );
  }
}

.btnWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  p {
    max-width: 30ch;
    font-size: 80%;
    text-align: center;
    margin: 0.5rem 0 0 0;
  }
}

html .container-fluid {
  max-width: 1140px;
}
</style>
