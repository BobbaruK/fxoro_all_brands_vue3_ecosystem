<script>
import LanguageChooser from "../../../../../001-super_global_files/components/LanguageChooser/LanguageChooser.vue";
import languages from "../composables/languages";


export default {
  name: "Brand~Header",
  components: { LanguageChooser },
  props: {
    lang: String,
  },
  setup() {
    const { lpLangs, defaultLang, flagPath } = languages();

    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };

    return { langsDetails };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="container">
      <div class="row">
        <div class="col-6 logoColumn">
          <router-link :to="{ name: 'Home', params: { lang: lang } }">
            <img src="@/sites/brand/assets/imgs/logos/TradingProfilerLogo-color-white.svg" alt="Logo" class="logo" width="200" height="60" />
          </router-link>
        </div>
        <div class="col-6 langColumn">
          <LanguageChooser :lang="lang" :languageChooserDetails="langsDetails" />
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  padding: 1rem 0;
  @include mxns.mediamin(xl) {
    background-color: var(--clr-brandPrimaryColor);
    padding: 8px 0;
  }
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
