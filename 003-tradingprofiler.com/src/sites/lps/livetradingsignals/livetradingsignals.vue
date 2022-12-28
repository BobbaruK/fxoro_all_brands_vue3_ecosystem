<script>
import { onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

import languages from "./composables/translations/languages";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import BackToTop from "../../../../../001-super_global_files/components/BackToTop/BackToTop.vue";

import "./assets/scss/scsseco_lp.scss";

export default {
  name: "LP~LiveTradingSignals",
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
        router.replace({ name: "LiveTradingSignalsHome", params: { lang: defaultLang } });
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
  <BackToTop :bttDetails="{ bttID: 'backToTopLiveTradingSignals' }" />
</template>

<style lang="scss">
.loader {
  background: rgb(0 0 0 / 0.7);
  inset: 0;
  margin: 0;
  padding: 0;
  position: absolute;
  .lds-ring {
    div {
      border-color: var(--clr-brandSecondaryColor) transparent transparent transparent;
    }
  }
}

.backToTop {
  background: var(--clr-white);

  svg {
    path {
      fill: var(--clr-brandPrimaryColor);
    }
  }

  &:hover,
  &:focus {
    background: var(--clr-brandPrimaryColor);
    // border: 1px solid var(--clr-brandSecondaryColor);
    svg {
      path {
        fill: var(--clr-white);
      }
    }
    .progress {
      background: var(--clr-white);
    }
  }
}
</style>
