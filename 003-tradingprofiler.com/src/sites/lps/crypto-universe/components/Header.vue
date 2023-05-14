<script>
import { useRoute } from "vue-router";

import LanguageChooser from "../../../../../../001-super_global_files/components/LanguageChooser/LanguageChooser.vue";
import languages from "../composables/translations/languages";

export default {
  name: "LP~CryptoUniverse~Header",
  components: { LanguageChooser },
  props: {
    lang: String,
  },
  setup() {
    // Language
    const { lpLangs, defaultLang, flagPath } = languages();

    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };

    const route = useRoute();

    return { langsDetails, route };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="row">
      <div class="col-6 col-xl-3 logoColumn">
        <router-link v-if="route.name === 'CryptoUniverseV1Home'" :to="{ name: 'CryptoUniverseV1Home', params: { lang: lang } }">
          <img
            src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-white.svg"
            alt="Logo"
            class="logo"
            width="200"
            height="60"
          />
        </router-link>
        <router-link v-else-if="route.name === 'CryptoUniverseV2Home'" :to="{ name: 'CryptoUniverseV2Home', params: { lang: lang } }">
          <img
            src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-white.svg"
            alt="Logo"
            class="logo"
            width="200"
            height="60"
          />
        </router-link>

      </div>
      <div class="col-6 col-xl-2 langColumn">
        <LanguageChooser :lang="lang" :languageChooserDetails="langsDetails" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  padding: 20px 0;
  .logoColumn,
  .langColumn {
    align-items: center;
    display: flex;
  }
  .logoColumn {
    justify-content: flex-start;
  }
  .langColumn {
    justify-content: flex-end;
  }
  .logo {
    height: 45px;
    width: 150px;
    @include mxns.mediamin(xl) {
      height: 70px;
      width: 200px;
    }
  }
}
</style>
