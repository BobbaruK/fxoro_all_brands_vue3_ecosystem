<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

import languages from "./composables/languages";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import "./assets/scss/scsseco_brand.scss";

export default {
  name: "Brand",
  components: { Header, Footer, BackToTop },
  props: {
    lang: String,
    productID: String,
  },
  setup() {
    const route = useRoute();
    const router = useRouter();

    /**
     * Redirect
     */
    const { lpLangs } = languages();
    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "HomeRedirect" });
      }
    });

    return {};
  },
};
</script>

<template>
  <div class="topBg">
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

.topBg {
  border-bottom: 6px solid var(--clr-brandPrimaryColor);
  color: var(--clr-white);

  @include mxns.mediamax(xl) {
    background-image: url(./assets/imgs/topBG.jpg);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

:root {
  @each $type, $colors in colPal.$brandColors {
    @each $color, $value in $colors {
      --clr-#{$color}: #{$value};
    }
  }
}
</style>
