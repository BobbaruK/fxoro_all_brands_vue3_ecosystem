<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import languages from "./composables/translations/languages";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";

import "./assets/scss/scsseco_lp.scss";

export default {
  name: "LP~InvestStocks",
  components: { Header, Footer },
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
        router.replace({ name: "InvestStocksHome", params: { lang: defaultLang } });
      }
    });

    return {};
  },
};
</script>

<template>
  <Header :lang="lang" />
  <main>
    <router-view />
  </main>
  <Footer :lang="lang" />
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

html {
  body {
    #siteWrapper {
      .btnWarn {
        text-align: center;
        margin: 0 auto;
        display: block;
        .scssecoBtn {
          border: 1px solid #ffb401;
          display: block;
          margin: 0 auto;
          font-size: inherit;
          @include mxns.mediamin(md) {
            margin: 0;
          }
        }
        p {
          font-size: 16px;
          text-align: center;
          margin: 0;
          padding: 0.5rem 0 0 0;
        }
      }
    }
  }
}
</style>
