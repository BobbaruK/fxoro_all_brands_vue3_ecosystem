<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import languages from "./composables/translations/languages";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import "./assets/scss/scsseco_lp.scss";

export default {
  name: "LP~SignalKit02V2",
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
        router.replace({ name: "SignalKit02V2Home", params: { lang: defaultLang } });
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

.topBG {
  background-image: url(./assets/imgs/header.jpg);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;
}
</style>
