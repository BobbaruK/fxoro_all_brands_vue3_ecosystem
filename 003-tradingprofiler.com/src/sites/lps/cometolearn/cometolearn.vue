<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import languages from "./composables/translations/languages";

import "./assets/scss/scsseco_lp.scss";
export default {
  name: "LP~ComeToLearn",
  emits: ["showForm", "formDetails"],
  components: {
    // Header,
    Footer,
    BackToTop,
  },
  props: {
    lang: String,
  },
  setup(_, ctx) {
    // redirect
    const { lpLangs, defaultLang } = languages();
    const route = useRoute();
    const router = useRouter();

    onMounted(() => {
      if (lpLangs.indexOf(route.params.lang) == -1) {
        router.replace({ name: "ComeToLearnHome", params: { lang: defaultLang } });
      }
    });

    return {};
  },
};
</script>

<template>
  <!-- <Header :lang="lang" /> -->
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

#siteWrapper {
  grid-template-rows: 1fr auto;
}
</style>
