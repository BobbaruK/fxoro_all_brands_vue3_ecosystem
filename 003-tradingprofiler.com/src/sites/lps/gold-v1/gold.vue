<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import languages from "./composables/translations/languages";

import "./assets/scss/scsseco_lp.scss";
export default {
  name: "LP~Gold",
  components: { Header, Footer, BackToTop },
  emits: ["showForm", "formDetails"],
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
        router.replace({ name: "GoldV1Home", params: { lang: defaultLang } });
      }
    });

    // form call
    const formCall = (e) => {
      ctx.emit("showForm");
    };

    const eFormDets = (e) => {
      ctx.emit("formDetails", e);
    };

    return { formCall, eFormDets };
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
    <router-view @showForm="formCall" @formDetails="eFormDets" />
  </main>
  <Footer :lang="lang" />
  <BackToTop />
</template>

<style lang="scss">
@use "./assets/scss/abstracts/variables" as vars;
@use "./assets/scss/abstracts/mixins" as mxns;
@use "./assets/scss/abstracts/colorPalette" as colPal;

:root {
  @each $type, $colors in colPal.$brandColors {
    @each $color, $value in $colors {
      --clr-#{$color}: #{$value};
    }
  }
}

#siteWrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.topBg {
  background-image: url(./assets/imgs/topBG-mobile.jpg);
  background-position: center bottom;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--clr-white);
  @include mxns.mediamin(xl) {
    background-image: url(./assets/imgs/topBG-desktop-gold.jpg);
  }
  > .container {
    position: relative;
    z-index: 3;
    &::before,
    &::after {
      pointer-events: none;
    }
    &::before {
      background-color: var(--clr-brandPrimaryColor);
      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#343434+0,343434+75,343434+100&1+0,0.8+75,0+100 */
      background: -moz-linear-gradient(
        left,
        rgba(52, 52, 52, 1) 0%,
        rgba(52, 52, 52, 1) 95%,
        rgba(52, 52, 52, 0.9) 98%,
        rgba(52, 52, 52, 0) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        left,
        rgba(52, 52, 52, 1) 0%,
        rgba(52, 52, 52, 1) 95%,
        rgba(52, 52, 52, 0.9) 98%,
        rgba(52, 52, 52, 0) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to right,
        rgba(52, 52, 52, 1) 0%,
        rgba(52, 52, 52, 1) 95%,
        rgba(52, 52, 52, 0.9) 98%,
        rgba(52, 52, 52, 0) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#343434', endColorstr='#00343434',GradientType=1 ); /* IE6-9 */

      width: 10000px;
      height: 100%;
      position: absolute;
      right: 0;
      z-index: 1;
      @include mxns.mediamin(xl) {
        content: "";
      }
    }
    &::after {
      background-image: url(./assets/imgs/topBG-desktop-candles.png);
      background-position: right center;
      background-repeat: no-repeat;
      background-size: contain;
      height: 100%;
      position: absolute;
      right: 500px;
      top: 0;
      width: 1000px;
      z-index: 2;
      @include mxns.mediamin(xl) {
        content: "";
      }
    }
  }
}

html[dir="rtl"] {
  .topBg {
    > .container {
      &::before {
        right: auto;
        left: 0;
        transform: scaleX(-1);
      }
      &::after {
        right: auto;
        left: 500px;
      }
    }
  }
}
</style>
