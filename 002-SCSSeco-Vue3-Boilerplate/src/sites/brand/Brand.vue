<script>
import { useRoute, useRouter } from "vue-router";
import { onMounted } from "@vue/runtime-core";

import languages from "./composables/languages";
import { useWebStoreBrand } from "@/stores/WebStoreBrand"; // web store

import Header from "./components/Header.vue";
import BreadCrumbs from "../../../../001-super_global_files/components/Breadcrumbs/Breadcrumbs.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import "./assets/scss/scsseco_brand.scss";

export default {
  name: "Brand",
  components: { Header, BreadCrumbs, Footer, BackToTop },
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

    // fetch products
    const webStore = useWebStoreBrand(); // web store
    webStore.productsFetch();

    return {};
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <BreadCrumbs :lang="lang" :showHomeIcon="true" />
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
</style>
