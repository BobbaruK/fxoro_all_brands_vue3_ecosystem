<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import languages from "./composables/translations/languages";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import "./assets/scss/scsseco_lp.scss";

export default {
  name: "LP~FreedomToTrade",
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
          name: "FreedomToTradeHome",
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

:root {
  @each $type, $colors in colPal.$brandColors {
    @each $color, $value in $colors {
      --clr-#{$color}: #{$value};
    }
  }
}

.container-fluid {
  max-width: 1140px;
}

.topBG {
  background-color: var(--clr-brandPrimaryColor);
  background-image: url(./assets/imgs/topBgPattern.png);
  background-image: image-set(
    url(./assets/imgs/topBgPattern.avif) type("image/avif"),
    url(./assets/imgs/topBgPattern.webp) type("image/webp"),
    url(./assets/imgs/topBgPattern.png) type("image/png")
  );
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--clr-white);
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
</style>
