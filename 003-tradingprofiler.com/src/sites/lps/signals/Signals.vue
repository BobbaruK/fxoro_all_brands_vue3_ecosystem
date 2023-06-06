<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import languages from "./composables/translations/languages";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import "./assets/scss/scsseco_lp.scss";

export default {
  name: "LP~Signals",
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
        router.replace({ name: "SignalsHome", params: { lang: defaultLang } });
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
    <picture class="laptop">
      <source srcset="./assets/imgs/laptop.avif" type="image/avif" />
      <source srcset="./assets/imgs/laptop.webp" type="image/webp" />
      <img
        src="./assets/imgs/laptop.png"
        alt="Laptop"
        loading="lazy"
        decoding="async"
      />
    </picture>
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
  background-image: url(./assets/imgs/signals-main-picture.jpg);
  background-image: image-set(
    url(./assets/imgs/signals-main-picture.avif) type("image/avif"),
    url(./assets/imgs/signals-main-picture.webp) type("image/webp"),
    url(./assets/imgs/signals-main-picture.jpg) type("image/jpg")
  );
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  position: relative;

  @include mxns.mediamin(lg) {
    overflow: visible;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  .laptop {
    display: none;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 0;
    width: 410px;
    width: clamp(410px, 53vw, 600px);
    @include mxns.mediamin(md) {
      display: block;
    }
  }
}

.backToTop {
  background: var(--clr-brandPrimaryColor);
  border: 1px solid var(--clr-black);
  color: var(--clr-black);
  &:hover,
  &:focus {
    background: var(--clr-brandPrimaryColor);
    color: var(--clr-black);
    .progress {
      background: var(--clr-brandSecondaryColor);
    }
  }
  .progress {
    background: var(--clr-black);
  }
}
</style>
